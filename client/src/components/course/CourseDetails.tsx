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
import { useAppContext } from 'context/appContext'

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
  const { windowSize } = useAppContext()
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

  const holeElSpacing = 'my-1 sm:my-0 mr-0 sm:mr-1 lg:mr-2'
  // LABELS ON LEFT
  const labelPosition = 'sm:w-auto flex justify-center sm:justify-end items-center leading-tight'
  const holeLabelSize =
    'px-4 sm:px-0 py-4 sm:py-0 mt-0 md:mt-2 lg:mt-2.5 xl:mt-1 text-base sm:text-xxs lg:text-sm xl:text-base'
  const parLabelSize =
    'pl-4 py-4 sm:px-0 my-1 sm:mt-2 sm:mb-3 md:my-3.5 lg:mt-3 lg:mb-2.5 xl:mt-2 xl:mb-3 sm:py-0 text-base sm:text-xxs lg:text-sm xl:text-base'
  const scoreLabelSize =
    'px-5 sm:px-0 sm:mb-1 md:mb-0 text-base sm:text-xxs lg:text-base xl:text-lg'
  // MAPPED SCORECARD ITEMS
  const holeNumberSize =
    'w-4 h-4 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4 p-4 sm:p-2 md:p-3 lg:p-4 text-lg sm:text-xxs md:text-xs lg:text-base xl:text-lg'
  const holeParSize = 'sm:py-1 text-sm sm:text-xs lg:text-sm'
  const holeScoreSlotSize =
    'w-12 h-12 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-12 xl:h-12 text-lg sm:text-sm md:text-base lg:text-xl xl:text-2xl'
  // TOTAL SIZE ON RIGHT
  const totalScoreSize =
    'w-20 h-20 sm:w-10 sm:h-10 md:w-14 md:h-14 md:mt-2 lg:w-20 lg:h-20 lg:mt-0 xl:mt-2 p-2 sm:pb-0 sm:mt-2'
  const totalStatSize = 'text-5xl sm:text-xl md:text-3xl lg:text-5xl'

  return (
    <div
      className="w-4/5 sm:w-auto
      sm:absolute sm:top-1/2 sm:left-1/2
      sm:translate-x-[-50%] sm:translate-y-[-50%]
      mb-4 sm:mb-0 z-0
      font-scoretext"
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
          className={`relative w-full px-7 sm:px-2 md:px-5 py-6 flex
          flex-col justify-center items-center bg-wmgYellow rounded-sm
          cl-wmgBrown ${selectedHole !== '' && 'opacity-0'}`}
        >
          {/* ***** TOP OF SCORECARD DIV ***** */}
          <div className="w-full flex flex-col sm:flex-row md:justify-between items-center">
            <div className="w-full sm:w-1/3">
              <Link
                to="/course"
                className="w-10 h-10 sm:w-8 sm:h-8 p-2 sm:py-2 text-xl sm:text-base md:text-lg lg:text-xl
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
              <h1 className="text-4xl sm:text-2xl md:text-lg lg:text-3xl xl:text-4xl">{`${course.course.toUpperCase()} ${course.difficulty.toUpperCase()}`}</h1>
              <h3 className="text-base sm:text-sm lg:text-lg xl:text-xl">
                ({course.alias} {course.courseMoji})
              </h3>
            </div>
            <div className="w-full sm:w-1/3 flex justify-end mt-3 md:mt-0">
              <select
                id="course-stats-selector"
                className="w-full md:w-fit border rounded-lg bg-wmgBrown
                text-sm sm:text-xxs md:text-xs lg:text-sm
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
            className="w-full md:w-auto mt-4
            px-0 py-4 sm:px-4 sm:py-1 md:p-6 lg:p-4
            bg-wmgBrown cl-wmgYellow rounded-md
            flex flex-col sm:flex-row justify-center items-center"
          >
            <div className="w-3/4 sm:w-auto flex flex-col sm:flex-row justify-center items-center">
              <div
                className="w-full md:mb-2 sm:px-0
                flex flex-row justify-between items-baseline
                sm:flex-col sm:justify-evenly sm:items-end mr-0 sm:mr-2 lg:mr-4 uppercase"
              >
                <div className={`${holeLabelSize} ${labelPosition}`}>HOLE</div>
                <div className={`${parLabelSize} ${labelPosition}`}>PAR</div>
                <div className={`${scoreLabelSize} ${labelPosition}`}>SCORE</div>
              </div>
              {course.parByHole.map((par, i) => (
                <div
                  className={`w-full ${holeElSpacing}
                  font-scorenum px-6 sm:px-0
                  flex flex-row justify-between items-center
                  sm:flex-col sm:justify-center`}
                  key={`${course.alias}${i + 1}`}
                >
                  <div className="w-1/3 sm:w-auto flex justify-start items-center">
                    <div
                      className={`${holeNumberSize}
                      flex flex-col justify-center items-center
                      border-2 sm:border-[1px] md:border-2 brdr-wmgYellow rounded-[100%]
                      font-scorenum cursor-pointer`}
                      onClick={() => handleHoleHover(i + 1)}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div className="w-1/3 sm:w-auto flex justify-center items-center">
                    <p className={`${holeParSize} text-center`}>{par}</p>
                  </div>
                  <div className="w-1/3 sm:w-auto flex justify-end items-center">
                    <div
                      className={`${holeScoreSlotSize}
                    bg-wmgYellow sh-wmgYellowLg rounded-md
                    flex justify-center items-center`}
                    >
                      <p className="font-bold cl-wmgBrown">{getHoleStats()[i]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-3/4 my-4 md:my-0 flex flex-row sm:flex-col justify-between md:justify-center items-center">
              <h4 className="text-sm sm:text-xxxs lg:text-base tracking-tight">
                PAR: {course.par}
              </h4>
              <div
                className={`${totalScoreSize}
                bg-wmgYellow font-scorenum sh-wmgYellowLg rounded-md
                flex flex-col justify-end items-center relative`}
              >
                <p className="text-xs sm:text-xxxs md:text-xxs lg:text-xs cl-wmgBrown absolute top-0">
                  TOTAL
                </p>
                <div className={`${totalStatSize} font-bold cl-wmgBrown`}>
                  {getTotalScoreStat()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseDetails
