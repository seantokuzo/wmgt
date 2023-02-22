import { useAppContext } from 'context/appContext'
import {
  courseFullImgLink,
  courseHoleImgLink,
  CourseInterface,
  coursesWithImages,
  Hole
} from 'data/course-data/wmgt-course-data'
import { SetStateAction } from 'react'

type Props = {
  course: CourseInterface
  hole: number
  exit: () => void
  setHole: React.Dispatch<SetStateAction<Hole>>
  round?: boolean
}

const HoleImg: React.FC<Props> = ({ course, hole, exit, setHole, round }) => {
  const { darkMode } = useAppContext()
  return (
    <div
      className="w-full max-w-2xl min-w-[300px]
          transition-all font-scorenum
          flex flex-col justify-center items-center animate-fadein"
    >
      <div
        className={`pt-2 text-center
        border-x-2 border-t-2 rounded-t-md
        ${
          !round
            ? 'bg-wmgYellow cl-wmgBrown sh-wmgYellowLg brdr-wmgYellow'
            : course.difficulty === 'Easy'
            ? 'bg-easyCourse sh-easyCourse brdr-easyCourse text-black'
            : 'bg-hardCourse sh-hardCourse brdr-hardCourse text-black'
        }
        flex flex-col justify-center items-center`}
      >
        <h1 className="text-3xl font-bold px-4">{course.course + ' ' + course.difficulty}</h1>
        <div
          className={`w-14 h-14 mt-1 mb-2
          text-3xl font-semibold
          border-4 rounded-full
          ${!round ? 'brdr-wmgBrown' : 'border-black'}
          flex justify-center items-center`}
        >
          {hole}
        </div>
        <div
          className={`w-full py-1 px-2
          ${
            !round
              ? 'bg-wmgBrown sh-wmgBrown cl-wmgYellow'
              : !darkMode
              ? 'text-black bg-white'
              : course.difficulty === 'Easy'
              ? 'cl-easyCourse bg-black'
              : 'cl-hardCourse bg-black'
          }
          text-2xl font-semibold
          flex justify-between items-center`}
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
          className={`absolute top-2 left-2
          w-10 h-10 p-5 text-2xl
          border-2
          ${
            !round
              ? 'brdr-wmgBrown cl-wmgYellow bg-wmgBrown sh-wmgBrown'
              : course.difficulty === 'Easy'
              ? 'brdr-easyCourse bg-easyCourse sh-easyCourse text-black'
              : 'brdr-hardCourse bg-hardCourse sh-hardCourse text-black'
          }
          rounded-full
          flex justify-center items-center`}
          onClick={exit}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <img
          className={`w-full border-2 rounded-md
          ${
            !round
              ? 'brdr-wmgYellow'
              : course.difficulty === 'Easy'
              ? 'brdr-easyCourse'
              : 'brdr-hardCourse'
          }
          sh-basic`}
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
            className="h-full
            text-base font-semibold text-center
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
