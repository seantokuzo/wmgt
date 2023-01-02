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
  const { roundDetailsMode, showEasyCourse, viewFrontNine, viewScorecard, viewCourse } =
    useSeasonContext()

  const courseAlias =
    showEasyCourse || roundDetailsMode === 'easy' ? easyCourse.alias : hardCourse.alias

  const bgColor =
    round.season === 6 ? 'bg-emerald-600 shadow-insetemerald' : 'bg-indigo-600 shadow-insetindigo'
  const borderColor = round.season === 6 ? 'border-emerald-600' : 'border-indigo-600'
  const textColor = round.season === 6 ? 'text-emerald-600' : 'text-indigo-600'
  // const bgPassThru = darkMode ? 'bg-black' : 'bg-white'
  // const bgPassThruText = darkMode ? 'text-black' : 'text-white'

  const toggleRoundBtn = (nextNotPrev: boolean) => {
    const seasonData = round.season === 6 ? season6Data : season7Data
    const roundIndex = seasonData.findIndex((r) => r.round === round.round)
    const nextRound = seasonData[roundIndex + 1]
    const prevRound = seasonData[roundIndex - 1]
    if ((nextNotPrev && !nextRound) || (!nextNotPrev && !prevRound))
      return <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"></div>
    return (
      <Link to={`/season/s${round.season}r${nextNotPrev ? nextRound.round : prevRound.round}`}>
        <div
          className={`w-12 h-12 md:w-20 md:h-20
            text-sm md:text-xl font-bold text-black
            border-2 ${borderColor}
            ${bgColor}
            rounded-full
            flex flex-col justify-center items-center
            hover:scale-110`}
          onClick={() => {
            viewScorecard()
            viewFrontNine()
          }}
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
        className={`w-1/2 py-2 px-4
        ${course.difficulty === 'Easy' ? 'text-orange-300' : 'text-indigo-700'}
        ${
          showEasyCourse && course.difficulty === 'Hard'
            ? 'cursor-pointer hover:scale-105'
            : !showEasyCourse && course.difficulty === 'Easy'
            ? 'cursor-pointer hover:scale-105'
            : ''
        }`}
        onClick={() => {
          if (course.difficulty === 'Easy' && showEasyCourse) return
          if (course.difficulty === 'Hard' && !showEasyCourse) return
          return course.difficulty === 'Easy' ? viewCourse('easy') : viewCourse('hard')
        }}
      >
        <h3 className="text-base md:text-xl font-semibold">{course.course}</h3>
        <h3 className="text-base md:text-xl font-semibold">{course.difficulty}</h3>
        <p className="text-sm md:text-base">
          ({course.alias} {course.courseMoji})
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
    const colorStyle =
      medal === '🏆' ? 'bg-amber-400' : medal === '🥈' ? 'bg-slate-400' : 'bg-amber-700'

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
        ${bgColor}`}
      >
        <Link to="/season">{`SEASON ${round.season}`}</Link>
      </div>
      <div
        className={`w-full py-4
        ${textColor}
        bg-black
        flex flex-col justify-center items-center`}
      >
        <div
          className={`w-full px-4
          flex justify-evenly items-center`}
        >
          {toggleRoundBtn(false)}
          <div
            className="w-1/2 py-4 px-5 rounded-b-md mx-5
            text-2xl sm:text-4xl md:text-5xl font-bold font-scorenum
            flex flex-col justify-center items-center"
          >
            <div>{`ROUND ${round.round}`}</div>
          </div>
          {toggleRoundBtn(true)}
        </div>
      </div>
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
      <div
        className="w-full mt-6 text-center
        flex justify-evenly items-start"
      >
        {courseLabelEl(easyCourse)}
        {courseLabelEl(hardCourse)}
      </div>
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
