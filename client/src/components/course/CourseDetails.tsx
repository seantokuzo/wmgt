import {
  courseData,
  CourseInterface,
  CourseAlias
} from 'data/course-data/wmgt-course-data'

type Props = {
  selectedCourse: CourseAlias
}

const CourseDetails: React.FC<Props> = ({ selectedCourse }) => {
  const course: CourseInterface = courseData.filter(
    (course) => course.alias === selectedCourse
  )[0]

  const courseDetailsEl = (
    <div
      className="w-full
      flex flex-col justify-center items-center
      bg-[#f8ff71] text-[#38280e]"
    >
      <h1>{`${course.course} ${course.difficulty}`}</h1>
      <h3>({course.alias})</h3>
      <div
        className="w-full px-4 bg-[#38280e] text-[#f8ff71]
      flex justify-center items-center"
      >
        <div className="flex flex-col justify-end items-center">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="mr-2">Hole</p>
            {course.parByHole.map((hole, i) => (
              <div
                className="w-4 h-4 p-4 my-1
                flex flex-col justify-center items-center
                border-2 border-[#f8ff71] rounded-[100%]
                text-sm"
                key={`${course.alias}${i + 1}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4>Par {course.par}</h4>
        </div>
      </div>
    </div>
  )

  return <>{courseDetailsEl}</>
}

export default CourseDetails
