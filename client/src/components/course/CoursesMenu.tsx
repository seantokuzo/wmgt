import { useAppContext } from 'context/appContext'

const CoursesMenu = () => {
  const { courseData } = useAppContext()

  const coursesEl = (
    <>
      {courseData.map((course, i) => (
        <div
          className={`w-2/5 max-w-xl min-h-[7rem] mx-2 px-4 py-3 animate-cardflip flex flex-col justify-center items-center border-2 rounded-md text-center`}
          key={course.alias}
        >
          <h5 className="text-sm">{`${course.course} ${course.difficulty}`}</h5>
          <p>{`(${course.alias})`}</p>
        </div>
      ))}
    </>
  )

  return (
    <div className="w-full flex flex-col justify-center items-center px-5">
      <h1>Courses:</h1>
      <div className="w-full flex flex-wrap justify-center items-center">
        {coursesEl}
      </div>
    </div>
  )
}

export default CoursesMenu
