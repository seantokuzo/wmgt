import { RoundDetailsMode } from 'components/season/RoundDetails'
import { CourseInterface } from 'data/course-data/wmgt-course-data'
import { nanoid } from 'nanoid'
import EasyHardSwitchBtn from './EasyHardSwitchBtn'
import ScorecardModeBtn from './ScorecardModeBtn'

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
    <div className="w-full mt-5 text-xs">
      {mode === 'full' && (
        <div className="w-full flex justify-between items-center">
          <EasyHardSwitchBtn
            showEasyCourse={showEasyCourse}
            setShowEasyCourse={setShowEasyCourse}
          />
          <ScorecardModeBtn
            showScoreTracker={showScoreTracker}
            setShowScoreTracker={setShowScoreTracker}
          />
        </div>
      )}
      <h2 className="text-center">{`${course.course} ${course.difficulty} (${course.alias}) ${course.courseMoji}`}</h2>
      {/* ****** HOLES ROW ****** */}
      <div className="w-full text-xxs flex justify-between items-center py-2">
        <div className="w-1/6 max-w-1/10 pr-2 flex justify-end">HOLE</div>
        <div
          className="w-4/5 min-w-4/5
          flex justify-between items-center"
        >
          {course.parByHole.map((hole, i) => (
            <div
              className="w-6
              flex justify-center items-center"
              key={nanoid()}
            >
              <div
                className="w-4 h-4 border-[1px] rounded-[50%] text-xxs
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
      {/* ****** PARS ROW ****** */}
      <div className="w-full text-xxs flex justify-between items-center">
        <div className="w-1/6 max-w-1/10 pr-2 flex justify-end">PAR</div>
        <div
          className="w-4/5 min-w-4/5
          flex justify-between items-center"
        >
          {course.parByHole.map((par) => (
            <div
              className="w-6
            flex flex-col justify-center items-center"
              key={nanoid()}
            >
              <div
                className="w-4 h-4
                flex flex-col justify-center items-center"
              >
                {par}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/12 text-xxs px-4 text-center">{course.par}</div>
        <div className="w-1/12 text-xxs text-center">TOURNEY SCORE</div>
        <div className="w-1/12 text-xxs text-center">FINISH</div>
      </div>
    </div>
  )
}

export default CourseScorecard
