import HoleImg from 'components/HoleImg'
import { useSeasonContext } from 'context/season/seasonContext'
import { CourseInterface, coursesWithImages } from 'data/course-data/wmgt-course-data'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import ScorecardToggleBtn from './ScorecardToggleBtn'

type Props = {
  course: CourseInterface
}

const SmallCourseScorecard: React.FC<Props> = ({ course }) => {
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

  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 text-xs">
      {coursesWithImages.includes(course.alias) && hoveredHole !== '' && (
        <div className="absolute w-full z-100">
          <HoleImg
            course={course}
            hole={hoveredHole}
            exit={() => setHoveredHole('')}
            setHole={setHoveredHole}
          />
        </div>
      )}
      {roundDetailsMode === 'full' && (
        <div
          className="w-full max-w-4xl
          flex flex-col md:flex-row justify-center md:justify-between items-center"
        >
          <ScorecardToggleBtn
            show={showEasyCourse}
            toggle={toggleCourse}
            text1="EASY"
            text2="HARD"
          />
          <ScorecardToggleBtn
            show={showFrontNine}
            toggle={toggleScorecardNine}
            text1="FRONT 9"
            text2="BACK 9"
          />
          <ScorecardToggleBtn
            show={showScoreTracker}
            toggle={toggleScoreTracker}
            text1="TRACKER"
            text2="SCORECARD"
          />
        </div>
      )}
      <div className="flex flex-col justify-center items-center my-4" onClick={toggleCourse}>
        <h2 className="text-lg lg:text-xl text-center">{`${course.courseMoji} ${course.course} ${course.difficulty} ${course.courseMoji}`}</h2>
        <p className="text-sm lg:text-base">{`(${course.alias})`}</p>
      </div>
      {/* ****** HOLES ROW ****** */}
      <div className="w-full text-xs flex justify-between items-center py-2">
        <div className="w-[25%] pr-2 flex justify-end">HOLE</div>
        <div className="w-full flex justify-between items-center px-0 sm:px-2">
          {nineSlice.map((hole, i) => (
            <div
              className="w-[5%] flex justify-center items-center"
              key={nanoid()}
              onClick={() => handleHoleHover(showFrontNine ? i + 1 : i + 10)}
            >
              <div
                className="w-4 h-4 p-1
                text-xxs
                border-[1px] rounded-[50%]
                flex flex-col justify-center items-center text-center"
              >
                {showFrontNine ? i + 1 : i + 10}
              </div>
            </div>
          ))}
        </div>
        <div title="Total" className="w-14 text-xxs text-center">
          TTL
        </div>
        <div className="w-14 text-xs text-center"></div>
        <div className="w-14 text-xs text-center"></div>
      </div>
      {/* ****** PARS ROW ****** */}
      <div className="w-full text-xs flex justify-between items-center">
        <div className="w-[25%] text-xs pr-2 flex justify-end">PAR</div>
        <div className="w-full flex justify-between items-center sm:px-2">
          {nineSlice.map((par) => (
            <div className="w-[5%] flex flex-col justify-center items-center" key={nanoid()}>
              <div
                className="text-xs font-semibold
                flex flex-col justify-center items-center"
              >
                {par}
              </div>
            </div>
          ))}
        </div>
        <div className="w-14 text-xxs lg:text-xs text-center">{course.par}</div>
        <div className="w-14 text-xxs lg:text-xs text-center">SCORE</div>
        <div className="w-14 text-xxs lg:text-xs text-center">🏁</div>
      </div>
    </div>
  )
}

export default SmallCourseScorecard
