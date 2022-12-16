import CourseStats from 'components/course/courseStats'
import HoleImg from 'components/HoleImg'
import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { CourseInterface, coursesWithImages } from 'data/course-data/wmgt-course-data'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
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
  const [hoveredHole, setHoveredHole] = useState<'' | number>('')

  const handleHoleHover = (hole: '' | number) => {
    if (!coursesWithImages.includes(course.alias)) return
    setHoveredHole(hole)
  }

  const nineSlice = showFrontNine ? course.parByHole.slice(0, 9) : course.parByHole.slice(9)
  const holesToMap = windowSize.width > 768 ? course.parByHole : nineSlice

  return (
    <div
      className="w-full max-w-6xl mt-5
      text-xs
      flex flex-col justify-center items-center
      relative"
    >
      {coursesWithImages.includes(course.alias) && hoveredHole !== '' && (
        <div className="absolute top-0 w-full sm:w-1/2 z-100">
          <HoleImg
            course={course}
            hole={hoveredHole}
            exit={() => setHoveredHole('')}
            setHole={setHoveredHole}
          />
          <div
            className="w-full text-[#38280e]
            flex justify-evenly"
          >
            <div
              className="px-4 py-2 rounded-b-md shadow-insetyellow
              text-xl font-semibold uppercase
              bg-[#f8ff71]
              flex flex-col justify-center items-center"
            >
              <div className="uppercase"># Aces</div>
              <div
                className="w-14 h-14 p-2 bg-[#38280e] text-[#f8ff71] rounded-full
                flex justify-center items-center"
              >
                {CourseStats.getNumberOfAces(+pathname[9], course.alias)[hoveredHole - 1]}
              </div>
            </div>
            <div
              className="px-4 py-2 rounded-b-md shadow-insetyellow
              text-xl font-semibold uppercase
              bg-[#f8ff71]
              flex flex-col justify-center items-center"
            >
              <div className="uppercase">Top 10 Avg</div>
              <div
                className="w-14 h-14 p-2 bg-[#38280e] text-[#f8ff71] rounded-full
                flex justify-center items-center"
              >
                {CourseStats.getRoundTopTenAvg(+pathname[9], course.alias)[hoveredHole - 1]}
              </div>
            </div>
            <div
              className="px-4 py-2 rounded-b-md shadow-insetyellow
              text-xl font-semibold uppercase
              bg-[#f8ff71]
              flex flex-col justify-center items-center"
            >
              <div className="uppercase">Avg Score</div>
              <div
                className="w-14 h-14 p-2 bg-[#38280e] text-[#f8ff71] rounded-full
                flex justify-center items-center"
              >
                {CourseStats.getCourseAveragesPerRound(+pathname[9], course.alias)[hoveredHole - 1]}
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="w-full max-w-4xl
          flex flex-col md:flex-row justify-center md:justify-between items-center"
      >
        {(roundDetailsMode === 'full' || roundDetailsMode === 'aces') && (
          <ScorecardToggleBtn
            show={showEasyCourse}
            toggle={toggleCourse}
            text1="EASY"
            text2="HARD"
          />
        )}
        {windowSize.width < 768 && (
          <ScorecardToggleBtn
            show={showFrontNine}
            toggle={toggleScorecardNine}
            text1="FRONT 9"
            text2="BACK 9"
          />
        )}
        <ScorecardToggleBtn
          show={showScoreTracker}
          toggle={toggleScoreTracker}
          text1="TRACKER"
          text2="SCORECARD"
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center my-4 ${
          (roundDetailsMode === 'full' || roundDetailsMode === 'aces') && 'cursor-pointer'
        }`}
        onClick={() =>
          (roundDetailsMode === 'full' || roundDetailsMode === 'aces') && toggleCourse()
        }
      >
        <h2 className="text-lg lg:text-xl text-center">{`${course.courseMoji} ${course.course} ${course.difficulty} ${course.courseMoji}`}</h2>
        <p className="text-sm lg:text-base">{`(${course.alias})`}</p>
        {coursesWithImages.includes(course.alias) && (
          <p className="mt-1">Click a hole to see details</p>
        )}
      </div>
      {/* ****** HOLES ROW ****** */}
      <div className="w-full text-xs flex justify-between items-center py-2 sm:px-2 md:px-0">
        <div className="w-[25%] pr-2 flex justify-end">HOLE</div>
        <div className="w-full flex justify-between items-center px-0 sm:px-2">
          {holesToMap.map((hole, i) => (
            <div
              className={`${holeSlotSizes}
              flex justify-center items-center
              ${coursesWithImages.includes(course.alias) && 'cursor-pointer'}`}
              key={nanoid()}
              onClick={() => handleHoleHover(showFrontNine ? i + 1 : i + 10)}
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
        <div title="Total" className="w-12 md:w-20 text-xxs text-center">
          TTL
        </div>
        <div className="w-12 md:w-20 text-xs text-center"></div>
        <div className="w-12 md:w-20 text-xs text-center"></div>
      </div>
      {/* ****** PARS ROW ****** */}
      <div className="w-full text-xs flex justify-between items-center px-0 sm:px-2 md:px-0">
        <div className="w-[25%] text-xs pr-2 flex justify-end">PAR</div>
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
        <div className="w-12 md:w-20 text-xxs sm:text-xs text-center">
          {windowSize.width > 768 ? 'COURSE' : '⛳️'}
        </div>
        <div className="w-12 md:w-20 text-xxs sm:text-xs text-center">
          {windowSize.width > 768 ? 'TOTAL' : '∑'}
        </div>
        <div className="w-12 md:w-20 text-xxs sm:text-xs text-center">
          {windowSize.width > 768 ? 'RANK' : '🏁'}
        </div>
      </div>
    </div>
  )
}

export default CourseScorecard
