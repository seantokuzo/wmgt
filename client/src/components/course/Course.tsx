import { useState } from 'react'
import { CourseAlias } from 'data/course-data/wmgt-course-data'
import CoursesMenu from './CoursesMenu'

const Course: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseAlias | ''>('')

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <CoursesMenu />
    </div>
  )
}

export default Course
