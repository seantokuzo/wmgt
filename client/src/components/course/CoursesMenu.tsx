import { Link } from 'react-router-dom'
import { useAppContext } from 'context/appContext'

const CoursesMenu: React.FC = () => {
  const { darkMode, courseData } = useAppContext()

  const borderColorClass = darkMode ? 'border-white' : 'border-black'

  const coursesEl = (
    <>
      {courseData.map((course, i) => (
        <Link
          to={`/course/${course.alias.toLowerCase()}`}
          className={`w-2/5 max-w-xs min-h-[7rem]
          m-2 px-4 py-3
          hover:scale-105
          transition ease-in
          flex flex-col justify-center items-center
          border-2 rounded-md text-center
          ${borderColorClass}`}
          key={course.alias}
        >
          <h5 className="text-base font-bold">{`${course.course} ${course.difficulty}`}</h5>
          <p className="text-sm">{`(${course.alias})`}</p>
        </Link>
      ))}
    </>
  )

  return (
    <div className="w-full flex flex-col justify-center items-center px-5">
      <h1 className="text-2xl font-orb font-bold">Courses:</h1>
      <div className="w-full max-w-lg flex flex-wrap justify-center items-center">{coursesEl}</div>
    </div>
  )
}

export default CoursesMenu
