import { useState } from 'react'
import { courseData, CourseInterface, CourseAlias } from 'data/course-data/wmgt-course-data'
import { season7Data as S7_DATA, RoundDataInterface } from 'data/round-data/s7-round-data'

type Props = {
  selectedCourse: CourseAlias
  setSelectedCourse: React.Dispatch<React.SetStateAction<CourseAlias | ''>>
}

const CourseDetails: React.FC<Props> = ({ selectedCourse, setSelectedCourse }) => {
  const [selectedStat, setSelectedStat] = useState('')
  console.log(selectedStat)
  console.log(selectedCourse)

  const course: CourseInterface = courseData.filter((course) => course.alias === selectedCourse)[0]
  const s7Round: RoundDataInterface[] | [] = S7_DATA.filter(
    (round) => round.easyCourse === selectedCourse || round.hardCourse === selectedCourse
  )

  console.log(s7Round)

  return (
    <div
      className="w-4/5 md:w-auto
        md:absolute md:top-1/2 md:left-1/2
        md:translate-x-[-50%] md:translate-y-[-50%] mb-4 md:mb-0 font-scorecard"
    >
      <div
        className="relative w-full px-7 md:px-5 py-6 md:py-3
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
        <select
          id="course-stats-selector"
          className="absolute top-1 right-1
                w-full md:w-fit bg-[#38280e] border border-gray-300 text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block p-2.5
                dark:bg-gray-700 dark:border-gray-600 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setSelectedStat(e.target.value)}
        >
          <option value="default">SELECT A STAT</option>
          {s7Round[0] && <option value="S7_AVG">{`S7 - R${s7Round[0].round} AVG SCORE`}</option>}
          {s7Round[0] && (
            <option value="S7_TOP10">{`S7 - R${s7Round[0].round} TOP 10 AVG SCORE`}</option>
          )}
          {s7Round[0] && <option value="S7_BEST">{`S7 - R${s7Round[0].round} BEST SCORE`}</option>}
          <option value="AllTime">ALL TIME AVG</option>
          <option value="AllTime">ALL TIME TOP 10 AVG</option>
          <option value="AllTime">ALL TIME BEST SCORE</option>
        </select>
        <h1 className="text-2xl font-semibold">{`${course.course.toUpperCase()} ${course.difficulty.toUpperCase()}`}</h1>
        <h3>
          ({course.alias} {course.courseMoji})
        </h3>
        <div
          className="w-full md:w-auto px-0 md:px-6 py-4 rounded-md
          mt-4
          bg-[#38280e] text-[#f8ff71]
          flex flex-col md:flex-row justify-center items-center"
        >
          <div className="w-3/4 md:w-auto flex flex-col md:flex-row justify-center items-center">
            <div
              className="w-full flex flex-row justify-between items-baseline
                md:flex-col md:justify-start md:items-end mr-0 md:mr-2"
            >
              <div className="h-auto py-4 text-base md:flex md:items-center md:h-4 md:my-1">
                HOLE
              </div>
              <div className="text-sm ml-2 md:ml-0">PAR</div>
              <div className="py-0 md:py-2 text-base ml-2 md:ml-0">Score</div>
              <div className="flex justify-center items-center w-1/3 md:w-auto"></div>
            </div>
            {course.parByHole.map((par, i) => (
              <div
                className="w-full px-1 flex flex-row justify-between md:flex-col md:justify-center items-center"
                key={`${course.alias}${i + 1}`}
              >
                <div
                  className="w-4 h-4 p-4 my-1
                flex flex-col justify-center items-center
                border-2 border-[#f8ff71] rounded-[100%]
                text-lg"
                >
                  {i + 1}
                </div>
                <p className="text-sm md:ml-0 text-center">{par}</p>
                <div className="p-5 bg-[#f8ff71] rounded-md"></div>
              </div>
            ))}
          </div>
          <div className="w-3/4 my-4 md:my-0 flex flex-row md:flex-col justify-between md:justify-center items-center">
            <h4 className="text-base tracking-tight">PAR: {course.par}</h4>
            <div
              className="w-20 h-20 p-2 rounded-md ml-0 mt-0
              md:mt-2 md:ml-2
              flex flex-col justify-start items-center
              bg-[#f8ff71]"
            >
              <p className="text-xs text-[#38280e]">TOTAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
