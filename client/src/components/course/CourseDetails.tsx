import { useState } from 'react'
import {
  courseData,
  CourseInterface,
  Hole,
  coursesWithImages
} from 'data/course-data/wmgt-course-data'
import { season7Data as S7_DATA } from 'data/round-data/s7-round-data'
import { RoundDataInterface } from 'data/round-data/roundTypes'
import CourseStats from './courseStats'
import { Link } from 'react-router-dom'
import HoleImg from 'components/HoleImg'

type Props = {
  course: CourseInterface
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

const CourseDetails: React.FC<Props> = ({ course }) => {
  const [selectedStat, setSelectedStat] = useState<StatTypes>('default')
  const [selectedHole, setSelectedHole] = useState<Hole>('')

  const s7Round: RoundDataInterface[] | [] = S7_DATA.filter(
    (round) => round.easyCourse === course.alias || round.hardCourse === course.alias
  )

  const handleHoleHover = (hole: Hole) => {
    if (!coursesWithImages.includes(course.alias)) return
    setSelectedHole(hole)
  }

  const getHoleStats = (): number[] | string[] => {
    switch (selectedStat) {
      case 'default':
        return new Array(18).fill('')
      case 'S7_AVG':
        return CourseStats.getCourseAveragesPerRound(7, course.alias)
      case 'S7_TOP10':
        return CourseStats.getRoundHoleTopTenAvg(7, course.alias)
      case 'S7_BEST':
        return CourseStats.getBestRound(7, course.alias)
      case 'S7_ACES':
        return CourseStats.getNumberOfAces(7, course.alias)
      default:
        return new Array(18).fill('')
    }
  }

  const getTotalScoreStat = (): number | '' => {
    if (selectedStat === 'default') return ''
    if (selectedStat === 'S7_BEST') return CourseStats.getLowestScore(7, course.alias)
    if (selectedStat === 'S7_ACES')
      return (getHoleStats() as number[]).reduce(
        (sum: number, holeScore: number) => sum + holeScore,
        0
      )
    return Math.round(
      (getHoleStats() as number[]).reduce((sum: number, holeScore: number) => sum + holeScore, 0) -
        courseData.find((c) => c.alias === course.alias)!.par
    )
  }

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
        md:translate-x-[-50%] md:translate-y-[-50%]
        mb-4 md:mb-0 z-0
        font-scoretext"
      // style={{
      //   backgroundImage:
      //     selectedHole !== ''
      //       ? `url(${courseHoleImgLink
      //           .replace('<COURSE>', course.alias)
      //           .replace('<COURSE>', course.alias)
      //           .replace('<HOLE>', selectedHole.toString())})`
      //       : 'none'
      // }}
    >
      {/* ****** HOLE IMG ON HOVER ****** */}
      {coursesWithImages.includes(course.alias) && selectedHole !== '' && (
        <div
          className="absolute top-1/2 left-1/2
          translate-x-[-50%] translate-y-[-50%] z-100"
        >
          <HoleImg
            course={course}
            hole={selectedHole}
            exit={() => setSelectedHole('')}
            setHole={setSelectedHole}
          />
        </div>
      )}
      {(!coursesWithImages.includes(course.alias) || selectedHole === '') && (
        <div
          className={`relative w-full px-7 md:p-5 py-6 flex
          flex-col justify-center items-center bg-wmgYellow
          cl-wmgBrown ${selectedHole !== '' && 'opacity-0'}`}
        >
          {/* ***** TOP OF SCORECARD DIV ***** */}
          <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
            <div className="w-full md:w-1/3">
              <Link
                to="/course"
                className="w-10 h-10 p-2 text-xl
                flex justify-center items-center
                hover:shadow-lg hover:scale-105
                border-2 brdr-wmgBrown rounded-[100%]"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </div>
            <div
              className="w-full md:w-1/3 mt-3 md:mt-0
              flex flex-col justify-center items-center text-center"
            >
              <h1 className="text-4xl md:text-lg lg:text-3xl xl:text-4xl">{`${course.course.toUpperCase()} ${course.difficulty.toUpperCase()}`}</h1>
              <h3 className="text-base md:text-sm lg:text-lg xl:text-xl">
                ({course.alias} {course.courseMoji})
              </h3>
            </div>
            <div className="w-full md:w-1/3 flex justify-end mt-3 md:mt-0">
              <select
                id="course-stats-selector"
                className="w-full md:w-fit border text-sm rounded-lg
                bg-wmgBrown
                border-gray-300 text-gray-900
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
                {/* <option value="AT_AVG">ALL TIME AVG</option>
              <option value="AT_TOP10">ALL TIME TOP 10 AVG</option>
              <option value="AT_BEST">ALL TIME BEST SCORE</option>
              <option value="AT_ACES">ALL TIME # OF ACES</option> */}
              </select>
            </div>
          </div>
          {/* ***** BOTTOM HALF OF SCORECARD - THE SCORES ***** */}
          <div
            className="w-full md:w-auto px-0 md:px-6 py-4 rounded-md
          mt-4
          bg-wmgBrown cl-wmgYellow
          flex flex-col md:flex-row justify-center items-center"
          >
            <div className="w-3/4 md:w-auto flex flex-col md:flex-row justify-center items-center">
              <div
                className="w-full md:mb-2
                flex flex-row justify-between items-baseline
                md:flex-col md:justify-evenly md:items-end mr-0 md:mr-2 lg:mr-4"
              >
                <div
                  className="text-base md:text-xs xl:text-base
                  py-4 md:py-1
                  flex justify-end items-center"
                >
                  HOLE
                </div>
                <div
                  className="
                  py-4 my-1 md:my-0 md:py-1
                  text-sm md:text-xs lg:text-sm
                  flex flex-col justify-center items-center"
                >
                  PAR
                </div>
                <div
                  className="w-min md:w-max
                  md:mt-2
                  text-lg md:text-sm lg:text-base xl:text-lg
                  text-center 
                  flex flex-col justify-center items-center"
                >
                  {statTitle[selectedStat]}
                </div>
              </div>
              {course.parByHole.map((par, i) => (
                <div
                  className="w-full mr-2 md:mr-1 lg:mr-2 font-scorenum
                flex flex-row justify-between items-center
                md:flex-col md:justify-center
                my-1 md:my-0"
                  key={`${course.alias}${i + 1}`}
                >
                  <div
                    className="w-4 h-4
                    md:w-3 md:h-3
                    lg:w-4 lg:h-4
                    xl:w-4 xl:h-4
                    p-4 md:p-3 lg:p-4
                    text-lg md:text-sm lg:text-base xl:text-lg
                    flex flex-col justify-center items-center
                    border-2 brdr-wmgYellow rounded-[100%]
                    font-scorenum cursor-pointer"
                    onClick={() => handleHoleHover(i + 1)}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="md:ml-0 text-center md:py-1
                    text-sm md:text-xs lg:text-sm"
                  >
                    {par}
                  </p>
                  <div
                    className="bg-wmgYellow sh-wmgYellowLg rounded-md
                    w-12 h-12
                    md:w-8 md:h-8
                    lg:w-12 lg:h-12
                    xl:w-12 xl:h-12
                    text-xs
                    flex justify-center items-center"
                  >
                    <p className="text-lg md:text-sm lg:text-base xl:text-lg font-bold cl-wmgBrown">
                      {getHoleStats()[i]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-3/4 my-4 md:my-0 flex flex-row md:flex-col justify-between md:justify-center items-center">
              <h4 className="text-sm md:text-sm lg:text-base tracking-tight">PAR: {course.par}</h4>
              <div
                className="
                w-20 h-20 md:w-14 md:h-14
                lg:w-20 lg:h-20
                p-2 ml-0 mt-0
                md:mt-2 md:ml-2
                rounded-md 
                flex flex-col justify-between items-center
                bg-wmgYellow font-scorenum sh-wmgYellowLg"
              >
                <p className="text-xs cl-wmgBrown">TOTAL</p>
                <h2 className="text-5xl font-bold cl-wmgBrown">{getTotalScoreStat()}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseDetails
