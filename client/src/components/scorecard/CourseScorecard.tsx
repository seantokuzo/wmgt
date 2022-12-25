import HoleImg from 'components/HoleImg'
import HoleStat from 'components/HoleStat'
import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { CourseInterface } from 'data/course-data/wmgt-course-data'
import { DataGod } from 'data/dataGod'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { holeNameParColWidth } from './PlayerScorecard'
import ScorecardToggleBtn from './ScorecardToggleBtn'

type Props = {
  course: CourseInterface
}

export const holeSlotSizes = 'w-5 sm:w-7 lg:w-9'

const CourseScorecard: React.FC<Props> = ({ course }) => {
  const { pathname } = useLocation()
  const { windowSize } = useAppContext()
  const {
    roundDetailsMode,
    showEasyCourse,
    toggleCourse,
    showScoreTracker,
    toggleScoreTracker,
    showFrontNine,
    toggleScorecardNine
  } = useSeasonContext()
  const [selectedHole, setSelectedHole] = useState<'' | number>('')

  const nineSlice = showFrontNine ? course.parByHole.slice(0, 9) : course.parByHole.slice(9)
  const holesToMap = windowSize.width > 768 ? course.parByHole : nineSlice

  const rawSeasonRound = pathname.split('/season/')[1].slice(1).split('r')
  const currentRound = { season: +rawSeasonRound[0], round: +rawSeasonRound[1] }

  return (
    <div
      className="w-full max-w-6xl mt-5
      text-xs
      flex flex-col justify-center items-center
      relative z-[500]"
    >
      {selectedHole !== '' && (
        <div className="absolute top-0 w-full sm:w-1/2">
          <HoleImg
            course={course}
            hole={selectedHole}
            exit={() => setSelectedHole('')}
            setHole={setSelectedHole}
          />
          <div
            className="w-full text-wmgBrown
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
            />
            <HoleStat
              label="TOP 10 AVG"
              stat={
                DataGod.getRoundHoleTopTenAvg(currentRound.season, course.alias)[selectedHole - 1]
              }
            />
            <HoleStat
              label="AVG SCORE"
              stat={
                DataGod.getRoundHoleAverage(currentRound.season, course.alias)[selectedHole - 1]
              }
            />
          </div>
        </div>
      )}
      <div
        className="w-full max-w-4xl
          flex flex-col md:flex-row justify-center items-center"
      >
        {(roundDetailsMode === 'full' || roundDetailsMode === 'aces') && (
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
        {roundDetailsMode !== 'aces' && (
          <ScorecardToggleBtn
            show={showScoreTracker}
            toggle={toggleScoreTracker}
            text1="TRACKER"
            text2="SCORECARD"
            season={+rawSeasonRound[0]}
          />
        )}
      </div>
      <div
        className={`flex flex-col justify-center items-center my-4 ${
          (roundDetailsMode === 'full' || roundDetailsMode === 'aces') && 'cursor-pointer'
        }`}
        onClick={() => roundDetailsMode !== 'easy' && roundDetailsMode !== 'hard' && toggleCourse()}
      >
        <h2 className="text-lg lg:text-xl text-center">{`${course.courseMoji} ${course.course} ${course.difficulty} ${course.courseMoji}`}</h2>
        <p className="text-sm lg:text-base">{'(' + course.alias + ')'}</p>
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
        <p className="mt-1">Click a hole to see details</p>
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
                className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8
                text-xxs sm:text-xs md:text-sm
                border-[1px] rounded-[50%]
                flex flex-col justify-center items-center text-center"
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
      <div className="w-full text-xs flex justify-between items-center px-0 sm:px-2 md:px-0">
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
