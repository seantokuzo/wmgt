import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { RoundDataInterface } from 'data/round-data/roundTypes'
import { courseData } from 'data/course-data/wmgt-course-data'

type Props = {
  seasonData: RoundDataInterface[]
}

const SeasonMenu: React.FC<Props> = ({ seasonData }) => {
  const { darkMode } = useAppContext()
  const { changeRoundDetailsMode, viewFrontNine, viewScorecard } = useSeasonContext()
  useEffect(() => {
    changeRoundDetailsMode('full')
    viewFrontNine()
    viewScorecard()
    // eslint-disable-next-line
  }, [])

  const menuColors = (menuPart: 'outer' | 'bg-shadow' | 'round' | 'top-course') => {
    if (seasonData[0].season === 6) {
      if (menuPart === 'outer') {
        return 'border-emerald-600 bg-emerald-600/[0.2]'
      }
      if (menuPart === 'bg-shadow') {
        return 'bg-emerald-600 shadow-insetemerald'
      }
      if (menuPart === 'round') {
        return 'bg-emerald-600 shadow-insetemerald'
      }
      if (menuPart === 'top-course') {
        return 'border-emerald-600'
      }
    }
    // if (seasonData[0].season === 7)
    if (menuPart === 'outer') {
      return 'border-indigo-600 bg-indigo-600/[0.2]'
    }
    if (menuPart === 'bg-shadow') {
      return 'bg-indigo-600 shadow-insetindigo'
    }
    if (menuPart === 'round') {
      return 'bg-indigo-600 shadow-insetindigo'
    }
    if (menuPart === 'top-course') {
      return 'border-indigo-600'
    }
  }

  return (
    <div
      className={`w-full max-w-2xl rounded-lg px-2 py-4 my-6
      font-scorenum uppercase text-center
      border-4 ${menuColors('outer')}
      last:mb-14
      flex flex-col justify-center items-center`}
    >
      <div
        className={`py-2 px-12 mt-4
        text-3xl font-semibold
        rounded-md border-2
        shadow-basic
        ${seasonData[0].season === 6 ? 'border-emerald-500' : 'border-indigo-500'}
        ${darkMode ? 'bg-black' : 'bg-white'}`}
      >
        {`SEASON ${seasonData[0].season}`}
      </div>
      <Link
        to={`/season/s${seasonData[0].season}-summary`}
        className={`w-max my-8 py-2 px-6
        text-lg font-semibold
        rounded-md
        ${menuColors('bg-shadow')}
        hover:scale-105`}
      >
        Season Summary
      </Link>
      <div className={`w-3/4 my-2 ${menuColors('outer')} border-2`}></div>
      <h2 className="text-2xl font-semibold my-3">ROUND RESULTS</h2>
      <div
        className="w-full
        flex flex-wrap justify-evenly items-center"
      >
        {seasonData.map((round, i) => {
          const easyMoji = courseData.filter((c) => c.alias === round.easyCourse)[0].courseMoji
          const hardMoji = courseData.filter((c) => c.alias === round.hardCourse)[0].courseMoji
          return (
            <Link
              to={`/season/s${round.season}r${round.round}`}
              className={`mx-2 my-3 px-4 py-2 rounded-lg
              font-bold
              flex flex-col justify-center items-center
              ${menuColors('round')}
              hover:scale-105`}
              key={`${round.easyCourse}-${i}`}
            >
              <div
                className={`w-full text-2xl rounded-lg py-2
              ${darkMode ? 'bg-black' : 'bg-white'}`}
              >
                {round.round}
              </div>
              <div
                className={`w-full mt-2
              rounded-sm
              ${darkMode ? 'bg-black' : 'bg-white'}`}
              >
                <div className={`text-md px-2 border-b-2 ${menuColors('top-course')}`}>
                  {easyMoji + ' ' + round.easyCourse + ' ' + easyMoji}
                </div>
                <div className="text-md px-2">
                  {hardMoji + ' ' + round.hardCourse + ' ' + hardMoji}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SeasonMenu
// w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
