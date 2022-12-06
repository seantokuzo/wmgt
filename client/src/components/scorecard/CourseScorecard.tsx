import { RoundDetailsMode } from 'components/season/RoundDetails'
import { CourseInterface } from 'data/course-data/wmgt-course-data'
import { nanoid } from 'nanoid'

type Props = {
  mode: RoundDetailsMode
  course: CourseInterface
  showEasyCourse: boolean
  setShowEasyCourse: React.Dispatch<React.SetStateAction<boolean>>
  showScoreTracker: boolean
  setShowScoreTracker: React.Dispatch<React.SetStateAction<boolean>>
}

const CourseScorecard: React.FC<Props> = ({
  mode,
  course,
  showEasyCourse,
  setShowEasyCourse,
  showScoreTracker,
  setShowScoreTracker
}) => {
  console.log(course)

  return (
    <div className="w-full mt-5">
      {mode === 'full' && (
        <div className="w-full flex justify-between items-center">
          <button className="" onClick={() => setShowEasyCourse(!showEasyCourse)}>
            <span
              className={`py-1 px-3 rounded-md ${showEasyCourse && 'bg-[#f8ff71] text-[#38280e]'}`}
            >
              EASY
            </span>{' '}
            |{' '}
            <span
              className={`py-1 px-3 rounded-md ${!showEasyCourse && 'bg-[#f8ff71] text-[#38280e]'}`}
            >
              HARD
            </span>
          </button>
          <button className="" onClick={() => setShowScoreTracker(!showScoreTracker)}>
            <span
              className={`py-1 px-3 rounded-md ${
                showScoreTracker && 'bg-[#f8ff71] text-[#38280e]'
              }`}
            >
              SCORE TRACKER
            </span>{' '}
            |{' '}
            <span
              className={`py-1 px-3 rounded-md ${
                !showScoreTracker && 'bg-[#f8ff71] text-[#38280e]'
              }`}
            >
              SCORECARD
            </span>
          </button>
        </div>
      )}
      <h2 className="text-center">{`${course.course} ${course.difficulty} (${course.alias}) ${course.courseMoji}`}</h2>
      {/* ****** HOLES ROW ****** */}
      <div className="w-full text-xl flex justify-between items-center py-2">
        <div className="w-1/6 max-w-1/10 pr-2 flex justify-end">HOLE</div>
        <div
          className="w-4/5 min-w-4/5
          flex justify-between items-center"
        >
          {course.parByHole.map((hole, i) => (
            <div
              className="w-10
              flex justify-center items-center"
              key={nanoid()}
            >
              <div
                className="w-8 h-8 border-2 rounded-[50%] text-sm
                flex flex-col justify-center items-center text-center"
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/12 text-center">TOTAL</div>
        <div className="w-1/12 text-center"></div>
        <div className="w-1/12 text-center"></div>
      </div>
      {/* ****** HOLES ROW ****** */}
      <div className="w-full text-lg flex justify-between items-center">
        <div className="w-1/6 max-w-1/10 pr-2 flex justify-end">PAR</div>
        <div
          className="w-4/5 min-w-4/5
          flex justify-between items-center"
        >
          {course.parByHole.map((par) => (
            <div
              className="w-10
            flex flex-col justify-center items-center"
              key={nanoid()}
            >
              <div
                className="w-8 h-8 rounded-[50%]
                flex flex-col justify-center items-center"
              >
                {par}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/12 text-sm px-4 text-center">{course.par}</div>
        <div className="w-1/12 text-sm text-center">TOURNEY SCORE</div>
        <div className="w-1/12 text-sm text-center">FINISH</div>
      </div>
    </div>
  )
}

export default CourseScorecard
