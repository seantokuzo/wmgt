import { Link } from 'react-router-dom'
import { useAppContext } from 'context/appContext'

const CoursesMenu: React.FC = () => {
  const { darkMode, windowSize, courseData } = useAppContext()

  const colors = darkMode
    ? 'bg-wmgBrown cl-wmgYellow sh-wmgBrown'
    : 'bg-wmgYellow cl-wmgBrown sh-wmgYellowLg'

  const coursesEl = (
    <>
      {courseData.map((course) => (
        <Link
          to={`/course/${course.alias.toLowerCase()}`}
          className={`w-2/5 max-w-xs ${windowSize.width >= 768 ? 'min-h-[7rem]' : 'min-h-[9rem]'}
          m-2 px-4 py-3
          hover:scale-105
          transition ease-in
          flex flex-col justify-center items-center
          rounded-md text-center
          ${colors}`}
          key={course.alias}
        >
          <h5 className="text-base font-bold">{`${course.course} ${course.difficulty}`}</h5>
          <p className="text-sm">{course.courseMoji}</p>
          <p className="text-sm">{`(${course.alias})`}</p>
        </Link>
      ))}
    </>
  )

  return (
    <div className="w-full flex flex-col justify-center items-center px-5">
      <h1 className="text-2xl font-scorenum font-bold text-wmgYellow mt-4">Courses:</h1>
      <h1 className="text-xl text-red-500 my-6">(UNDER CONSTRUCTION)</h1>
      <div className="w-full max-w-lg flex flex-wrap justify-center items-center mb-16">
        {coursesEl}
      </div>
    </div>
  )
}

export default CoursesMenu
