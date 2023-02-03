import CourseHistory from 'components/season/round-details/CourseHistory'
import CourseSelector from 'components/season/round-details/CourseSelector'
import { useAppContext } from 'context/appContext'

const Test = () => {
  const { selectedCourse } = useAppContext()

  return (
    <div>
      <CourseSelector />
      <CourseHistory course={selectedCourse} />
    </div>
  )
}

export default Test
