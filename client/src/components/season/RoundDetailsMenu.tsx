import RoundDetailBtn from './RoundDetailBtn'
import { modes, RoundDetailsMode } from './RoundDetails'
import { CourseInterface } from '../../data/course-data/wmgt-course-data'
import { Link } from 'react-router-dom'

type Props = {
  mode: RoundDetailsMode
  setMode: React.Dispatch<React.SetStateAction<RoundDetailsMode>>
  round: { season: number; round: number }
  easyCourse: CourseInterface
  hardCourse: CourseInterface
}

const RoundDetailsMenu: React.FC<Props> = ({ mode, setMode, round, easyCourse, hardCourse }) => {
  return (
    <div
      className="relative bg-[#f8ff71] text-[#38280e]
      w-full py-6 rounded-lg
      flex flex-col justify-center items-center"
    >
      <div className="w-max absolute top-4 left-4">
        <Link
          to="/season"
          className="p-2 text-2xl font-semibold
              flex justify-center hover:shadow-lg hover:scale-105
              border-2 border-[#38280e] rounded-[100%]"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <h1
        className="absolute top-4 right-4 text-2xl font-semibold p-2
        border-2 border-[#38280e] rounded-[100%]"
      >{`S${round.season}`}</h1>
      <h3 className="text-6xl font-bold">{`Round ${round.round}`}</h3>
      <div className="w-full my-3 flex justify-evenly items-start text-center">
        <div className="py-2 px-4 mx-2">
          <h3 className="text-xl font-semibold">
            {easyCourse.course + ' ' + easyCourse.difficulty}
          </h3>
          <p>({easyCourse.alias})</p>
          <p>{easyCourse.courseMoji}</p>
        </div>
        <div className="py-2 px-4 mx-2">
          <h3 className="text-xl font-semibold">
            {hardCourse.course + ' ' + hardCourse.difficulty}
          </h3>
          <p>({hardCourse.alias})</p>
          <p>{hardCourse.courseMoji}</p>
        </div>
      </div>
      <div className="w-11/12 py-2 flex flex-wrap justify-evenly items-center">
        {(Object.keys(modes) as RoundDetailsMode[]).map((m) => (
          <RoundDetailBtn
            key={`mode-btn-${m}`}
            selected={mode === m}
            btnText={modes[m]}
            btnMode={m}
            updateMode={setMode}
          />
        ))}
      </div>
    </div>
  )
}

export default RoundDetailsMenu
