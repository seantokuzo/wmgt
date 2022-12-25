import { useSeasonContext } from 'context/season/seasonContext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RoundDataInterface } from 'data/round-data/roundTypes'
import { useAppContext } from 'context/appContext'

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

  const menuColors = (menuPart: 'outer' | 'summary' | 'round') => {
    if (seasonData[0].season === 6) {
      if (menuPart === 'outer') {
        return 'border-emerald-600 bg-emerald-900/[0.35]'
      }
      if (menuPart === 'summary') {
        return 'bg-emerald-600 shadow-insetemerald'
      }
      if (menuPart === 'round') {
        return 'bg-emerald-600 shadow-insetemerald'
      }
    }
    // if (seasonData[0].season === 7)
    if (menuPart === 'outer') {
      return 'border-indigo-600 bg-indigo-900/[0.35]'
    }
    if (menuPart === 'summary') {
      return 'bg-indigo-600 shadow-insetindigo'
    }
    if (menuPart === 'round') {
      return 'bg-indigo-600 shadow-insetindigo'
    }
  }

  return (
    <div
      className={`w-full max-w-xl rounded-lg px-2 py-4 my-6
      font-scorenum uppercase text-center
      border-4 ${menuColors('outer')}
      last:mb-14
      flex flex-col justify-center items-center`}
    >
      <h2 className="text-3xl font-semibold my-3">{`SEASON ${seasonData[0].season}`}</h2>
      <Link
        to={`/season/s${seasonData[0].season}-summary`}
        className={`w-max my-4 py-2 px-6
        text-lg font-semibold
        rounded-md
        ${menuColors('summary')}
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
        {seasonData.map((round, i) => (
          <Link
            to={`/season/s${round.season}r${round.round}`}
            className={`m-2 px-4 py-2 rounded-lg
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
              <div className={`text-md px-2 border-b-2 ${menuColors('outer')}`}>
                {round.easyCourse}
              </div>
              <div className="text-md px-2">{round.hardCourse}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SeasonMenu
// w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
