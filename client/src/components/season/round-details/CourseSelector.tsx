import { useAppContext } from 'context/appContext'
import { CourseAlias, courseData } from 'data/course-data/wmgt-course-data'
import { nanoid } from 'nanoid'

const CourseSelector = () => {
  const { darkMode, selectedCourse, chooseCourse } = useAppContext()

  const inputStyle = darkMode
    ? 'bg-black border-white text-white'
    : 'bg-white border-black text-black'

  const handleInput = (target: HTMLInputElement | { value: '' }) => {
    chooseCourse(target.value as CourseAlias | '')
  }

  return (
    <div>
      <input
        className={`w-full px-2 py-1 mx-3
          text-xxs sm:text-sm text-center
          border-2 rounded-md
          ${inputStyle}`}
        type="text"
        list="course-selector"
        autoComplete="off"
        value={selectedCourse}
        onChange={(e) => handleInput(e.target as HTMLInputElement)}
      />
      <datalist id="course-selector">
        {[...courseData].map((course) => (
          <option value={course.alias} key={nanoid()} />
        ))}
      </datalist>
    </div>
  )
}

export default CourseSelector
