import { courseHoleImgLink, CourseInterface } from 'data/course-data/wmgt-course-data'

type Props = {
  course: CourseInterface
  hole: number
}

const HoleImg: React.FC<Props> = ({ course, hole }) => {
  return (
    <div
      className="w-1/2 absolute top-0 left-1/2
          translate-x-[-50%]
          z-100 transition-all font-scorenum
          flex flex-col justify-center items-center"
    >
      <div
        className="bg-[#f8ff71] text-[#38280e]
            border-x-2 border-t-2 border-[#f8ff71] rounded-t-md
            pt-2 text-center
            flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl font-bold px-4">{course.course + ' ' + course.difficulty}</h1>
        <div
          className="text-3xl font-semibold
              w-12 h-12 p-4 mt-1 mb-2
              flex justify-center items-center
              border-4 border-[#38280e] rounded-full"
        >
          {hole}
        </div>
        <div
          className="w-full text-2xl font-semibold py-1
              bg-[#38280e] text-[#f8ff71]"
        >
          {'Par ' + course.parByHole[hole - 1]}
        </div>
      </div>
      <img
        className="w-full border-2 border-[#f8ff71] rounded-md"
        src={courseHoleImgLink
          .replaceAll('<COURSE>', course.alias)
          .replace('<HOLE>', hole.toString())}
        alt={`${course.course} ${course.difficulty} Hole ${hole}`}
      />
    </div>
  )
}

export default HoleImg
