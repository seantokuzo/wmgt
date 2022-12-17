import {
  courseFullImgLink,
  courseHoleImgLink,
  CourseInterface,
  coursesWithImages
} from 'data/course-data/wmgt-course-data'

type Props = {
  course: CourseInterface
  hole: number
  exit: () => void
  setHole: (hole: number) => void
}

const HoleImg: React.FC<Props> = ({ course, hole, exit, setHole }) => {
  return (
    <div
      className="w-full max-w-2xl min-w-[300px]
          z-100 transition-all font-scorenum
          flex flex-col justify-center items-center animate-fadein"
    >
      <div
        className="bg-[#f8ff71] text-[#38280e] shadow-insetyellow
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
          className="w-full text-2xl font-semibold py-1 px-2
          bg-[#38280e] text-[#f8ff71] shadow-insetbrown
          flex justify-between items-center"
        >
          <i
            className="fa-solid fa-arrow-left cursor-pointer"
            onClick={() => {
              if (hole === 1) return setHole(18)
              return setHole(hole - 1)
            }}
          ></i>
          {'Par ' + course.parByHole[hole - 1]}
          <i
            className="fa-solid fa-arrow-right cursor-pointer"
            onClick={() => {
              if (hole === 18) return setHole(1)
              return setHole(hole + 1)
            }}
          ></i>
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute top-2 left-2
          w-10 h-10 p-5 text-2xl
          border-2 border-[#38280e] text-[#f8ff71]
          bg-[#38280e] shadow-insetbrown
          rounded-full
          flex justify-center items-center"
          onClick={exit}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <img
          className="w-full border-2 border-[#f8ff71] rounded-md shadow-basic"
          src={
            coursesWithImages.includes(course.alias)
              ? courseHoleImgLink
                  .replaceAll('<COURSE>', course.alias)
                  .replace('<HOLE>', hole.toString())
              : courseFullImgLink.replaceAll('<COURSE>', course.alias)
          }
          alt={`${course.course} ${course.difficulty} Hole ${hole}`}
          onClick={exit}
        />
        {!coursesWithImages.includes(course.alias) && (
          <div
            className="h-full text-base font-semibold
            absolute top-1/2 left-1/2
            translate-x-[-50%] translate-y-[-50%]
            flex flex-col justify-evenly items-center"
          >
            <div>HOLE PHOTO COMING SOON</div>
            <div className="mt-10">OR WHENEVER I GET TO IT</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HoleImg
