import HoleImg from 'components/HoleImg'
import HoleStat from 'components/HoleStat'
import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { CourseInterface } from 'data/course-data/wmgt-course-data'
import { DataGod } from 'data/dataGod'
import { season6Data } from 'data/round-data/s6-round-data'
import { season7Data } from 'data/round-data/s7-round-data'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { holeNameParColWidth } from './PlayerScorecard'
import ScorecardToggleBtn from './ScorecardToggleBtn'

type Props = {
  course: CourseInterface
}

export const holeSlotSizes = 'w-5 sm:w-7 lg:w-9'

const CourseScorecard: React.FC<Props> = ({ course }) => {
  const { pathname } = useLocation()
  const { darkMode, windowSize } = useAppContext()
  const {
    roundDetailsMode,
    showEasyCourse,
    toggleCourse,
    showScoreTracker,
    toggleScoreTracker,
    showFrontNine,
    toggleScorecardNine,
    viewScorecard,
    viewFrontNine
    // changeRoundDetailsMode
  } = useSeasonContext()
  const [selectedHole, setSelectedHole] = useState<'' | number>('')

  const nineSlice = showFrontNine ? course.parByHole.slice(0, 9) : course.parByHole.slice(9)
  const holesToMap = windowSize.width > 768 ? course.parByHole : nineSlice

  const rawSeasonRound = pathname.split('/season/')[1].slice(1).split('r')
  const currentRound = { season: +rawSeasonRound[0], round: +rawSeasonRound[1] }

  const toggleRoundBtn = (nextNotPrev: boolean) => {
    const seasonData = currentRound.season === 6 ? season6Data : season7Data
    const roundIndex = seasonData.findIndex((r) => r.round === currentRound.round)
    const nextRound = seasonData[roundIndex + 1]
    const prevRound = seasonData[roundIndex - 1]
    if ((nextNotPrev && !nextRound) || (!nextNotPrev && !prevRound))
      return <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"></div>
    return (
      <Link
        to={`/season/s${currentRound.season}r${nextNotPrev ? nextRound.round : prevRound.round}`}
        className="rounded-full sh-basic"
        onClick={() => {
          viewScorecard()
          viewFrontNine()
          // changeRoundDetailsMode('full')
        }}
      >
        <div
          className={`w-12 h-12 md:w-20 md:h-20
            text-sm md:text-xl font-bold text-white
            border-2 brdr-s${currentRound.season}
            bg-sh-s${currentRound.season}
            rounded-full
            flex flex-col justify-center items-center
            hover:scale-110 transition-all`}
        >
          {`R${nextNotPrev ? nextRound.round : prevRound.round}`}
          <i className={`fa-solid ${nextNotPrev ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>
        </div>
      </Link>
    )
  }

  return (
    <div
      className="w-full max-w-6xl mt-5
      text-xs
      flex flex-col justify-center items-center
      relative"
    >
      {selectedHole !== '' && (
        <div className="absolute top-0 w-full sm:w-1/2 z-[500]">
          <HoleImg
            course={course}
            hole={selectedHole}
            exit={() => setSelectedHole('')}
            setHole={setSelectedHole}
            round={true}
          />
          <div
            className="w-full cl-wmgBrown
            flex justify-evenly"
          >
            <HoleStat
              label="Total Aces"
              // stat={CourseStats.getNumberOfAces(+pathname[9], course.alias)[selectedHole - 1]}
              stat={
                showEasyCourse
                  ? DataGod.getRoundAcesPerHole(currentRound).easyCourseNumAces[selectedHole - 1]
                  : DataGod.getRoundAcesPerHole(currentRound).hardCourseNumAces[selectedHole - 1]
              }
              difficulty={course.difficulty}
            />
            <HoleStat
              label="TOP 10 AVG"
              stat={
                DataGod.getRoundHoleTopTenAvg(currentRound.season, course.alias)[selectedHole - 1]
              }
              difficulty={course.difficulty}
            />
            <HoleStat
              label="AVG SCORE"
              stat={
                DataGod.getRoundHoleAverage(currentRound.season, course.alias)[selectedHole - 1]
              }
              difficulty={course.difficulty}
            />
          </div>
        </div>
      )}
      <div
        className="w-full max-w-4xl
          flex flex-col md:flex-row justify-center items-center"
      >
        {(roundDetailsMode === 'full' ||
          roundDetailsMode === 'aces' ||
          roundDetailsMode === 'badges') && (
          <ScorecardToggleBtn
            show={showEasyCourse}
            toggle={toggleCourse}
            text1="EASY"
            text2="HARD"
            season={+rawSeasonRound[0]}
          />
        )}
        {windowSize.width < 768 && (
          <ScorecardToggleBtn
            show={showFrontNine}
            toggle={toggleScorecardNine}
            text1="FRONT 9"
            text2="BACK 9"
            season={+rawSeasonRound[0]}
          />
        )}
        {roundDetailsMode !== 'aces' && roundDetailsMode !== 'badges' && (
          <ScorecardToggleBtn
            show={showScoreTracker}
            toggle={toggleScoreTracker}
            text1="TRACKER"
            text2="SCORECARD"
            season={+rawSeasonRound[0]}
          />
        )}
      </div>
      {windowSize.width < 768 && (
        <div className="w-full max-w-4xl py-4 flex justify-evenly items-center">
          {toggleRoundBtn(false)}
          {toggleRoundBtn(true)}
        </div>
      )}
      <div
        className={`w-auto px-8 py-1 my-3
        bgfade-s${currentRound.season}
        border-b-2 border-l-2 brdr-s${currentRound.season} rounded-md
        text-base font-bold uppercase font-orb
        flex justify-center items-center sh-basic`}
      >
        <div className={`pr-4 my-1 border-r-[1px] brdr-s${currentRound.season}`}>
          {'Season ' + currentRound.season}
        </div>
        <div className={`pl-4 my-1 border-l-[1px] brdr-s${currentRound.season}`}>
          {'Round ' + currentRound.round}
        </div>
      </div>
      <div className="w-full max-w-4xl flex justify-evenly items-center">
        {windowSize.width >= 768 && toggleRoundBtn(false)}
        <div
          className={`
          flex flex-col justify-center items-center my-4
          ${roundDetailsMode !== 'easy' && roundDetailsMode !== 'hard' && 'cursor-pointer'}`}
          onClick={() => {
            if (roundDetailsMode === 'easy' || roundDetailsMode === 'hard') return
            toggleCourse()
          }}
        >
          <h2 className="text-lg lg:text-xl text-center">{`${course.courseMoji} ${course.course} ${course.difficulty} ${course.courseMoji}`}</h2>
          <p className="text-sm lg:text-base">{'(' + course.alias + ')'}</p>
          {roundDetailsMode === 'coconuts' && (
            <div
              className="w-fit py-1 px-3 my-1
              bg-sh-gold border-2 brdr-gold rounded-md
              text-xs sm:text-sm text-center text-black font-semibold"
            >
              {"steven_T's"}
            </div>
          )}
          <p className="text-sm lg:text-base text-red-400 mt-1">
            {roundDetailsMode === 'full'
              ? 'Full Results'
              : roundDetailsMode === 'easy'
              ? 'Easy Course'
              : roundDetailsMode === 'hard'
              ? 'Hard Course'
              : roundDetailsMode === 'aces'
              ? '🌵 Aces 🦆'
              : roundDetailsMode === 'coconuts'
              ? '🥥 Coconuts 🥥'
              : '🏇 Race to the Finish 🏇'}
          </p>
          {roundDetailsMode === 'coconuts' && <p className="mb-1 text-base">(No holes over par)</p>}
          <p className="mt-1">Click a hole to see details</p>
        </div>
        {windowSize.width >= 768 && toggleRoundBtn(true)}
      </div>
      {/* ****** HOLES ROW ****** */}
      <div className="w-full text-xs flex justify-between items-center py-2 sm:px-2 md:px-0">
        <div className={`${holeNameParColWidth}`}>HOLE</div>
        <div className="w-full flex justify-between items-center px-0 sm:px-2">
          {holesToMap.map((hole, i) => (
            <div
              className={`${holeSlotSizes}
              flex justify-center items-center
              cursor-pointer`}
              key={nanoid()}
              onClick={() => setSelectedHole(showFrontNine ? i + 1 : i + 10)}
            >
              <div
                className={`w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8
                text-xxs sm:text-xs md:text-sm
                border-[1px] rounded-[50%]
                ${darkMode ? 'border-white' : 'border-black sh-basic'}
                flex flex-col justify-center items-center text-center`}
              >
                {windowSize.width > 768 || showFrontNine ? i + 1 : i + 10}
              </div>
            </div>
          ))}
        </div>
        <div title="Total" className="w-12 sm:w-14 md:w-18 lg:w-20 text-xxs text-center">
          TTL
        </div>
        <div className="w-12 sm:w-14 md:w-18 lg:w-20 text-xs text-center"></div>
        <div className="w-12 sm:w-14 md:w-18 lg:w-20 text-xs text-center"></div>
      </div>
      {/* ****** PARS ROW ****** */}
      <div
        className="w-full px-0 sm:px-2 md:px-0
        text-xs
        flex justify-between items-center "
      >
        <div className={`${holeNameParColWidth} text-xs`}>PAR</div>
        <div className="w-full flex justify-between items-center sm:px-2">
          {holesToMap.map((par) => (
            <div
              className={`${holeSlotSizes} flex flex-col justify-center items-center`}
              key={nanoid()}
            >
              <div
                className="text-xs font-semibold
                flex flex-col justify-center items-center"
              >
                {par}
              </div>
            </div>
          ))}
        </div>
        <div className="w-12 sm:w-14 md:w-18 lg:w-20 text-xxs sm:text-xs text-center">
          {windowSize.width > 768 ? 'COURSE' : '⛳️'}
        </div>
        <div className="w-12 sm:w-14 md:w-18 lg:w-20 text-xxs sm:text-xs text-center">
          {roundDetailsMode === 'aces' ? '# ACES' : windowSize.width > 768 ? 'TOTAL' : '∑'}
        </div>
        <div className="w-12 sm:w-14 md:w-18 lg:w-20 text-xxs sm:text-xs text-center">
          {windowSize.width > 768 ? 'RANK' : '🏁'}
        </div>
      </div>
    </div>
  )
}

export default CourseScorecard
