import { CourseInterface } from 'data/course-data/wmgt-course-data'
import { nanoid } from 'nanoid'

type Props = {
  course: CourseInterface
}

const CourseScorecard: React.FC<Props> = ({ course }) => {
  console.log(course)

  return (
    <>
      <h2 className="text-center">{`${course.course} ${course.difficulty} (${course.alias}) ${course.courseMoji}`}</h2>
      {/* ****** HOLES ROW ****** */}
      <div className="w-full text-xl flex justify-between items-center py-2">
        <div className="w-1/6 max-w-1/10 pr-2 flex justify-end">HOLE</div>
        <div
          className="w-4/5 min-w-4/5
          flex justify-between items-center"
        >
          {course.parByHole.map((hole, i) => (
            <div
              className="w-12
              flex flex-col justify-center items-center"
              key={nanoid()}
            >
              <div
                className="w-10 h-10 border-2 rounded-[50%]
                flex flex-col justify-center items-center"
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/12 text-center">TOTAL</div>
      </div>
      {/* ****** HOLES ROW ****** */}
      <div className="w-full text-lg flex justify-between items-center">
        <div className="w-1/6 max-w-1/10 pr-2 flex justify-end">PAR</div>
        <div
          className="w-4/5 min-w-4/5
          flex justify-between items-center"
        >
          {course.parByHole.map((par) => (
            <div
              className="w-12
              flex flex-col justify-center items-center"
              key={nanoid()}
            >
              <div
                className="w-10 h-10 rounded-[50%]
                flex flex-col justify-center items-center"
              >
                {par}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/12 px-4 text-center">{course.par}</div>
      </div>
    </>
  )
}

export default CourseScorecard
