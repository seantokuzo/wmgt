import { courseData, CourseInterface, CourseAlias } from 'data/course-data/wmgt-course-data'

type Props = {
  selectedCourse: CourseAlias
  setSelectedCourse: React.Dispatch<React.SetStateAction<CourseAlias | ''>>
}

const CourseDetails: React.FC<Props> = ({ selectedCourse, setSelectedCourse }) => {
  const course: CourseInterface = courseData.filter((course) => course.alias === selectedCourse)[0]

  const courseDetailsEl = (
    <div
      className="relative w-full px-5 py-3
      flex flex-col justify-center items-center
      bg-[#f8ff71] text-[#38280e]"
    >
      <button
        className="absolute top-1 left-1 p-2
        flex justify-center hover:shadow-lg hover:scale-105
        border-2 border-[#38280e] rounded-[50%]"
        onClick={() => setSelectedCourse('')}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
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
