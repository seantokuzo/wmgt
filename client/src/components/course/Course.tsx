import { useState } from 'react'
import { CourseAlias } from 'data/course-data/wmgt-course-data'
import CoursesMenu from './CoursesMenu'
import CourseDetails from './CourseDetails'

const Course: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseAlias | ''>('TTE')

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {selectedCourse === '' && (
        <CoursesMenu selectCourse={setSelectedCourse} />
      )}
      {selectedCourse !== '' && (
        <CourseDetails selectedCourse={selectedCourse} />
      )}
    </div>
  )
}

export default Course
