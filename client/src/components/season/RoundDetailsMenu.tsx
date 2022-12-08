import RoundDetailBtn from './RoundDetailBtn'
import { modes, RoundDetailsMode } from './RoundDetails'
import { CourseInterface } from '../../data/course-data/wmgt-course-data'
import { Link } from 'react-router-dom'

type Props = {
  round: { season: number; round: number }
  easyCourse: CourseInterface
  hardCourse: CourseInterface
}

const RoundDetailsMenu: React.FC<Props> = ({ round, easyCourse, hardCourse }) => {
  const courseLabelEl = (course: CourseInterface) => {
    return (
      <div className="w-1/2 md:w-auto py-2 px-4 mx-2">
        <h3 className="text-lg md:text-xl font-semibold">
          {course.course + ' ' + course.difficulty}
        </h3>
        <p className="text-sm md:text-base">({course.alias})</p>
        <p className="text-base md:text-lg">{course.courseMoji}</p>
      </div>
    )
  }

  return (
    <div
      className="w-full max-w-4xl py-6 rounded-lg
      bg-[#f8ff71] text-[#38280e]
      flex flex-col justify-center items-center"
    >
      <div className="w-full flex justify-between items-center px-4">
        <Link
          to="/season"
          className="p-2 text-2xl md:text-3xl font-semibold
          flex justify-center hover:shadow-lg hover:scale-105
          bg-[#38280e] text-[#f8ff71] rounded-[100%]"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h1
          className="text-lg md:text-xl font-semibold p-2
        bg-[#38280e] text-[#f8ff71] rounded-[100%]"
        >{`S${round.season}`}</h1>
      </div>
      <h3 className="text-4xl sm:text-4xl md:text-6xl mt-4 font-bold">{`Round ${round.round}`}</h3>
      <div className="w-full my-3 px-3 flex justify-evenly items-start text-center">
        {courseLabelEl(easyCourse)}
        {courseLabelEl(hardCourse)}
      </div>
      <div className="w-full md:w-3/4 py-2 px-1 flex flex-wrap justify-evenly items-center">
        {(Object.keys(modes) as RoundDetailsMode[]).map((m) => (
          <RoundDetailBtn key={`mode-btn-${m}`} btnText={modes[m]} btnMode={m} />
        ))}
      </div>
    </div>
  )
}

export default RoundDetailsMenu
