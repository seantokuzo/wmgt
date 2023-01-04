import RoundDetailBtn from './RoundDetailBtn'
import { modes } from './RoundDetails'
import { courseFullImgLink, CourseInterface } from 'data/course-data/wmgt-course-data'
import { Link } from 'react-router-dom'
import { RoundDetailsMode, useSeasonContext } from 'context/season/seasonContext'
import { season6Data } from 'data/round-data/s6-round-data'
import { season7Data } from 'data/round-data/s7-round-data'
import { nanoid } from 'nanoid'
import { DataGod } from 'data/dataGod'

type Props = {
  round: { season: number; round: number }
  easyCourse: CourseInterface
  hardCourse: CourseInterface
}

const RoundDetailsMenu: React.FC<Props> = ({ round, easyCourse, hardCourse }) => {
  const {
    roundDetailsMode,
    changeRoundDetailsMode,
    showEasyCourse,
    viewFrontNine,
    viewScorecard,
    viewCourse
  } = useSeasonContext()

  const courseAlias =
    showEasyCourse || roundDetailsMode === 'easy' ? easyCourse.alias : hardCourse.alias

  const toggleRoundBtn = (nextNotPrev: boolean) => {
    const seasonData = round.season === 6 ? season6Data : season7Data
    const roundIndex = seasonData.findIndex((r) => r.round === round.round)
    const nextRound = seasonData[roundIndex + 1]
    const prevRound = seasonData[roundIndex - 1]
    if ((nextNotPrev && !nextRound) || (!nextNotPrev && !prevRound))
      return <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"></div>
    return (
      <Link
        to={`/season/s${round.season}r${nextNotPrev ? nextRound.round : prevRound.round}`}
        onClick={() => {
          viewScorecard()
          viewFrontNine()
          changeRoundDetailsMode('full')
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
        className={`w-1/3 py-2 px-4 border-2 rounded-md
        ${
          course.difficulty === 'Easy' && showEasyCourse
            ? 'bg-easyCourse sh-easyCourse brdr-easyCourse'
            : course.difficulty === 'Easy' && !showEasyCourse
            ? 'brdr-easyCourse cl-easyCourse'
            : course.difficulty === 'Hard' && showEasyCourse
            ? 'brdr-hardCourse cl-hardCourse'
            : 'bg-hardCourse sh-hardCourse brdr-hardCourse'
        }
        ${
          showEasyCourse &&
          course.difficulty === 'Hard' &&
          roundDetailsMode !== 'easy' &&
          roundDetailsMode !== 'hard'
            ? 'cursor-pointer hover:scale-105'
            : !showEasyCourse &&
              course.difficulty === 'Easy' &&
              roundDetailsMode !== 'easy' &&
              roundDetailsMode !== 'hard'
            ? 'cursor-pointer hover:scale-105'
            : ''
        }`}
        onClick={() => {
          if (roundDetailsMode === 'easy' || roundDetailsMode === 'hard') return
          if (course.difficulty === 'Easy' && showEasyCourse) return
          if (course.difficulty === 'Hard' && !showEasyCourse) return
          return course.difficulty === 'Easy' ? viewCourse('easy') : viewCourse('hard')
        }}
      >
        <h3 className="text-base md:text-xl font-semibold">{course.course}</h3>
        <h3 className="text-base md:text-xl font-semibold">{course.difficulty}</h3>
        <p className="text-sm md:text-base my-1">
          {course.courseMoji} {course.alias} {course.courseMoji}
        </p>
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
              // ${medal === '🏆' && 'animate-flip'}
              className="w-min ml-1 animate-flip"
              style={{ animationDelay: i * 500 + 'ms' }}
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
      className={`w-full max-w-2xl rounded-lg
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
        bg-black
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
        className="w-full
        bg-no-repeat bg-center bg-cover rounded-b-md
        flex flex-col justify-end items-center"
        style={{
          backgroundImage: `url(${courseFullImgLink.replaceAll('<COURSE>', courseAlias)})`
        }}
      >
        <div className="w-auto mt-40">
          {podiumSectionEl(podium.gold, '🏆')}
          {podiumSectionEl(podium.silver, '🥈')}
          {podiumSectionEl(podium.bronze, '🥉')}
        </div>
      </div>
      {/* ********** EASY / HARD COURSE LABELS ********** */}
      <div
        className="w-full mt-6 text-center
        flex justify-evenly items-start"
      >
        {courseLabelEl(easyCourse)}
        {courseLabelEl(hardCourse)}
      </div>
      {/* ********** ROUND DETAIL MODE BUTTONS ********** */}
      <div
        className="w-full md:w-3/4 max-w-xl px-1 mt-6
          flex flex-wrap justify-evenly items-center"
      >
        {(Object.keys(modes) as RoundDetailsMode[]).map((m) => (
          <RoundDetailBtn
            key={`mode-btn-${m}`}
            season={round.season}
            btnText={modes[m]}
            btnMode={m}
          />
        ))}
      </div>
    </div>
  )
}

export default RoundDetailsMenu
