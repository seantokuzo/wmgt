import { useState } from 'react'
import { courseData, CourseInterface, CourseAlias } from 'data/course-data/wmgt-course-data'
import { season7Data as S7_DATA, RoundDataInterface } from 'data/round-data/s7-round-data'
import CourseStats from './courseStats'

type Props = {
  selectedCourse: CourseAlias
  setSelectedCourse: React.Dispatch<React.SetStateAction<CourseAlias | ''>>
}

interface StatNames {
  default: 'SCORE'
  AT_AVG: 'ALL TIME AVG'
  AT_TOP10: 'ALL TIME TOP 10 AVG'
  AT_BEST: 'ALL TIME BEST ROUND'
  AT_ACES: 'ALL TIME # OF ACES'
  S7_AVG?: string
  S7_TOP10?: string
  S7_BEST?: string
  S7_ACES?: string
}

type StatTypes =
  | 'default'
  | 'AT_AVG'
  | 'AT_TOP10'
  | 'AT_BEST'
  | 'AT_ACES'
  | 'S7_AVG'
  | 'S7_TOP10'
  | 'S7_BEST'
  | 'S7_ACES'

const CourseDetails: React.FC<Props> = ({ selectedCourse, setSelectedCourse }) => {
  const [selectedStat, setSelectedStat] = useState<StatTypes>('default')
  console.log(selectedStat)

  const course: CourseInterface = courseData.filter((course) => course.alias === selectedCourse)[0]
  const s7Round: RoundDataInterface[] | [] = S7_DATA.filter(
    (round) => round.easyCourse === selectedCourse || round.hardCourse === selectedCourse
  )

  const statTitle: StatNames = {
    default: 'SCORE',
    AT_AVG: 'ALL TIME AVG',
    AT_TOP10: 'ALL TIME TOP 10 AVG',
    AT_BEST: 'ALL TIME BEST ROUND',
    AT_ACES: 'ALL TIME # OF ACES'
  }
  if (s7Round[0]) {
    statTitle.S7_AVG = `S7:R${s7Round[0].round} AVG`
    statTitle.S7_TOP10 = `S7:R${s7Round[0].round} TOP 10 AVG`
    statTitle.S7_BEST = `S7:R${s7Round[0].round} BEST SCORE`
    statTitle.S7_ACES = `S7:R${s7Round[0].round} # OF ACES`
  }

  return (
    <div
      className="w-4/5 md:w-auto
        md:absolute md:top-1/2 md:left-1/2
        md:translate-x-[-50%] md:translate-y-[-50%] mb-4 md:mb-0 font-scoretext"
    >
      <div
        className="relative w-full px-7 md:px-5 py-6 md:py-3
      flex flex-col justify-center items-center
      bg-[#f8ff71] text-[#38280e]"
      >
        {/* ***** TOP OF SCORECARD DIV ***** */}
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          <div className="w-full md:w-1/3">
            <button
              className="p-2 text-xl
              flex justify-center hover:shadow-lg hover:scale-105
              border-2 border-[#38280e] rounded-[100%]"
              onClick={() => setSelectedCourse('')}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div
            className="w-full md:w-1/3 mt-3 md:mt-0
              flex flex-col justify-center items-center"
          >
            <h1 className="text-2xl font-semibold">{`${course.course.toUpperCase()} ${course.difficulty.toUpperCase()}`}</h1>
            <h3>
              ({course.alias} {course.courseMoji})
            </h3>
          </div>
          <div className="w-full md:w-1/3 flex justify-end mt-3 md:mt-0">
            <select
              id="course-stats-selector"
              className="w-full md:w-fit bg-[#38280e] border border-gray-300 text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setSelectedStat(e.target.value as StatTypes)}
            >
              <option value="default">SELECT A STAT</option>
              {s7Round[0] && (
                <option value="S7_AVG">{`S7 - R${s7Round[0].round} AVG SCORE`}</option>
              )}
              {s7Round[0] && (
                <option value="S7_TOP10">{`S7 - R${s7Round[0].round} TOP 10 AVG`}</option>
              )}
              {s7Round[0] && (
                <option value="S7_BEST">{`S7 - R${s7Round[0].round} BEST SCORE`}</option>
              )}
              {s7Round[0] && (
                <option value="S7_ACES">{`S7 - R${s7Round[0].round} # OF ACES`}</option>
              )}
              <option value="AT_AVG">ALL TIME AVG</option>
              <option value="AT_TOP10">ALL TIME TOP 10 AVG</option>
              <option value="AT_BEST">ALL TIME BEST SCORE</option>
              <option value="AT_ACES">ALL TIME # OF ACES</option>
            </select>
          </div>
        </div>
        <div
          className="w-full md:w-auto px-0 md:px-6 py-4 rounded-md
          mt-4
          bg-[#38280e] text-[#f8ff71]
          flex flex-col md:flex-row justify-center items-center"
        >
          <div className="w-3/4 md:w-auto flex flex-col md:flex-row justify-center items-center">
            <div
              className="w-full py-4 md:py-0
              flex flex-row justify-between items-baseline
              md:flex-col md:justify-center md:items-end mr-0 md:mr-2"
            >
              <div className="text-base md:flex md:justify-center md:items-center h-auto md:h-4 md:py-4">
                HOLE
              </div>
              <div className="text-sm mt-0 md:mt-1">PAR</div>
              <div
                className="text-base text-center w-min md:w-max h-auto md:h-10
                mt-0 md:mt-1
                md:flex md:items-center"
              >
                {statTitle[selectedStat]}
              </div>
              {/* <div className="flex justify-center items-center w-1/3 md:w-auto"></div> */}
            </div>
            {course.parByHole.map((par, i) => (
              <div
                className="w-full px-1 font-scorenum
                flex flex-row justify-between items-center
                md:flex-col md:justify-center
                my-1 md:my-0"
                key={`${course.alias}${i + 1}`}
              >
                <div
                  className="w-4 h-4 p-4 my-1
                flex flex-col justify-center items-center
                border-2 border-[#f8ff71] rounded-[100%]
                text-lg font-scorenum"
                >
                  {i + 1}
                </div>
                <p className="text-sm md:ml-0 text-center">{par}</p>
                <div
                  className="w-12 h-12 bg-[#f8ff71]
                  flex justify-center items-center
                  rounded-md"
                >
                  <p className="text-2xl font-bold text-[#38280e]">
                    {
                      CourseStats.getCourseAveragesPerRound(
                        7,
                        5,
                        courseData.filter((course) => course.alias === selectedCourse)[0].parByHole
                      )[i]
                    }
                  </p>
                </div>
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
