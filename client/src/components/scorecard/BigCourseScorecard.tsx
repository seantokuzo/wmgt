import HoleImg from 'components/HoleImg'
import { useSeasonContext } from 'context/season/seasonContext'
import { CourseInterface, coursesWithImages } from 'data/course-data/wmgt-course-data'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import ScorecardToggleBtn from './ScorecardToggleBtn'

type Props = {
  course: CourseInterface
}

const BigCourseScorecard: React.FC<Props> = ({ course }) => {
  const { roundDetailsMode, showEasyCourse, toggleCourse, showScoreTracker, toggleScoreTracker } =
    useSeasonContext()
  const [hoveredHole, setHoveredHole] = useState<'' | number>('')

  const handleHoleHover = (hole: '' | number) => {
    if (!coursesWithImages.includes(course.alias)) return
    setHoveredHole(hole)
  }

  return (
    <div className="w-full max-w-6xl flex flex-col justify-center items-center mt-5 text-xs z-10">
      {coursesWithImages.includes(course.alias) && hoveredHole !== '' && (
        <div className="absolute w-1/2 z-100">
          <HoleImg
            course={course}
            hole={hoveredHole}
            exit={() => setHoveredHole('')}
            setHole={setHoveredHole}
          />
        </div>
      )}
      {roundDetailsMode === 'full' && (
        <div className="w-full max-w-4xl flex justify-between items-center">
          <ScorecardToggleBtn
            show={showEasyCourse}
            toggle={toggleCourse}
            text1="EASY"
            text2="HARD"
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
        {coursesWithImages.includes(course.alias) && (
          <p className="mt-1">Click a hole to see details</p>
        )}
      </div>
      {/* ****** HOLES ROW ****** */}
      <div className="w-full text-xs flex justify-between items-center py-2">
        <div className="w-[20%] pr-2 flex justify-end">HOLE</div>
        <div className="w-full flex justify-between items-center">
          {course.parByHole.map((hole, i) => (
            <div
              className="w-[5%] flex justify-center items-center cursor-pointer"
              key={nanoid()}
              onClick={() => handleHoleHover(i + 1)}
            >
              <div
                className="md:w-6 lg:w-8 md:h-6 lg:h-8
                text-xs lg:text-sm
                border-2 rounded-[50%]
                flex flex-col justify-center items-center text-center"
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="w-20 text-xs text-center">TOTAL</div>
        <div className="w-20 text-xs text-center"></div>
        <div className="w-20 text-xs text-center"></div>
      </div>
      {/* ****** PARS ROW ****** */}
      <div className="w-full text-xs flex justify-between items-center">
        <div className="w-[20%] pr-2 flex justify-end">PAR</div>
        <div className="w-full flex justify-between items-center">
          {course.parByHole.map((par) => (
            <div className="w-[5%] flex flex-col justify-center items-center" key={nanoid()}>
              <div className="flex flex-col justify-center items-center">{par}</div>
            </div>
          ))}
        </div>
        <div className="w-20 text-xxs text-center">COURSE</div>
        <div className="w-20 text-xxs text-center">TOTAL</div>
        <div className="w-20 text-xxs text-center">RANK</div>
      </div>
    </div>
  )
}

export default BigCourseScorecard
