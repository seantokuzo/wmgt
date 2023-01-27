import { courseFullImgLink, CourseInterface } from 'data/course-data/wmgt-course-data'
import { Link } from 'react-router-dom'
import { useSeasonContext } from 'context/season/seasonContext'
import { nanoid } from 'nanoid'
import { DataGod } from 'data/dataGod'

import { useAppContext } from 'context/appContext'

type Props = {
  round: { season: number; round: number }
  easyCourse: CourseInterface
  hardCourse: CourseInterface
  upcomingRound: boolean
}

const RoundDetailsMenu: React.FC<Props> = ({ round, easyCourse, hardCourse, upcomingRound }) => {
  const { darkMode } = useAppContext()
  const { roundDetailsMode, showEasyCourse, viewFrontNine, viewScorecard, viewCourse } =
    useSeasonContext()

  const courseAlias =
    showEasyCourse || roundDetailsMode === 'easy' ? easyCourse.alias : hardCourse.alias

  const toggleRoundBtn = (nextNotPrev: boolean) => {
    const seasonData = DataGod.getSeasonData(round.season)
    const roundIndex = seasonData.findIndex((r) => r.round === round.round)
    const nextRound = seasonData[roundIndex + 1]
    const prevRound = seasonData[roundIndex - 1]
    if ((nextNotPrev && !nextRound) || (!nextNotPrev && !prevRound))
      return <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"></div>
    return (
      <Link
        to={`/season/s${round.season}r${nextNotPrev ? nextRound.round : prevRound.round}`}
        className="rounded-full sh-basic"
        onClick={() => {
          viewScorecard()
          viewFrontNine()
        }}
      >
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
            text-sm md:text-xl font-bold text-black
            border-2 brdr-s${round.season}
            bg-sh-s${round.season}
            rounded-full
            flex flex-col justify-center items-center
            hover:scale-110`}
        >
          {`R${nextNotPrev ? nextRound.round : prevRound.round}`}
          <i className={`fa-solid ${nextNotPrev ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>
        </div>
      </Link>
    )
  }

  const courseLabelEl = (course: CourseInterface) => {
    return (
      <div
        className={`w-1/2 py-3
        border-b-2
        ${course.difficulty === 'Easy' ? 'rounded-bl-md border-l-2' : 'rounded-br-md border-r-2'}
        ${
          course.difficulty === 'Easy' && showEasyCourse
            ? 'bg-easyCourse sh-easyCourse brdr-easyCourse text-white'
            : course.difficulty === 'Easy' && !showEasyCourse
            ? 'brdr-easyCourse cl-easyCourse'
            : course.difficulty === 'Hard' && showEasyCourse
            ? 'brdr-hardCourse cl-hardCourse'
            : 'bg-hardCourse sh-hardCourse brdr-hardCourse text-white'
        }
        flex justify-evenly items-center
        text-xs sm:text-sm md:text-xl font-scorenum font-semibold
        cursor-pointer`}
        onClick={() => {
          if (roundDetailsMode === 'easy' || roundDetailsMode === 'hard') return
          if (course.difficulty === 'Easy' && showEasyCourse) return
          if (course.difficulty === 'Hard' && !showEasyCourse) return
          return course.difficulty === 'Easy' ? viewCourse('easy') : viewCourse('hard')
        }}
      >
        <h3>{course.courseMoji}</h3>
        <h3>{course.course}</h3>
        <h3>{course.courseMoji}</h3>
      </div>
    )
  }

  const podium = DataGod.getRoundPodium(round)

  const podiumSectionEl = (
    podiumFinishers: { player: string; flag: string }[],
    medal: '🏆' | '🥈' | '🥉'
  ) => {
    if (podiumFinishers.length === 0) return <></>
    const colorStyle = medal === '🏆' ? 'bg-gold' : medal === '🥈' ? 'bg-silver' : 'bg-bronze'

    return (
      <div
        className={`w-full px-2
        ${colorStyle}
        flex flex-col justify-center items-center`}
      >
        {podiumFinishers.map((player, i) => (
          <div
            className="w-full mx-1 py-1
            text-base sm:text-lg md:text-xl
            flex justify-between items-center"
            key={nanoid()}
          >
            <div
              className="w-min ml-1"
              // className={`w-min ml-1 block ${windowSize.width >= 768 && 'flip'}`}
              // style={windowSize.width >= 768 ? { animationDelay: i * 500 + 'ms' } : {}}
            >
              {medal}
            </div>
            <div className="w-full ml-4 text-left">{player.player}</div>
            <div className="w-min ml-6">{player.flag}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className={`w-full max-w-2xl rounded-lg sh-basic
      flex flex-col justify-center items-center text-center`}
    >
      <div
        className={`w-full py-3        
        font-orb text-2xl font-bold tracking-wider
        rounded-t-md
        text-black
        bg-sh-s${round.season}`}
      >
        <Link to="/season">{`SEASON ${round.season}`}</Link>
      </div>
      {/* ********** ROUND TOGGLE BUTTONS ********** */}
      <div
        className={`w-full py-4
        cl-s${round.season}
        ${darkMode ? 'bg-black' : 'bg-white sh-insetbasic'}
        flex flex-col justify-center items-center`}
      >
        <div
          className={`w-full px-4
          flex justify-evenly items-center`}
        >
          {toggleRoundBtn(false)}
          {/* ***** PROBLEM DIV - py-4 CAUSES FLICKERING OVER ROUND CONTROLS ***** */}
          <div
            className="w-1/2 px-5 mx-5
            text-2xl sm:text-4xl md:text-5xl font-bold font-scorenum
            flex flex-col justify-center items-center"
          >
            {`ROUND ${round.round}`}
          </div>
          {toggleRoundBtn(true)}
        </div>
      </div>
      {/* ********** COURSE IMAGE AND PODIUM ********** */}
      <div
        className="w-full min-h-[20rem]
        bg-no-repeat bg-center bg-cover
        flex flex-col justify-end items-center"
        style={{
          backgroundImage: `url(${courseFullImgLink.replaceAll('<COURSE>', courseAlias)})`
        }}
      >
        {!upcomingRound && (
          <div className="w-auto">
            {podiumSectionEl(podium.gold, '🏆')}
            {podiumSectionEl(podium.silver, '🥈')}
            {podiumSectionEl(podium.bronze, '🥉')}
          </div>
        )}
      </div>
      {/* ********** EASY / HARD COURSE LABELS ********** */}
      <div
        className={`w-full bg-s${round.season} sh-basic
        text-xs md:text-sm font-bold font-scorenum
        flex justify-center items-center`}
      >
        <div className="w-1/2 text-center">EASY</div>
        <div className="w-1/2 text-center">HARD</div>
      </div>
      <div
        className="w-full text-center font-scorenum
        flex justify-evenly items-center"
      >
        {courseLabelEl(easyCourse)}
        {courseLabelEl(hardCourse)}
      </div>
    </div>
  )
}

export default RoundDetailsMenu
