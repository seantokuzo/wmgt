import { useSeasonContext } from 'context/season/seasonContext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RoundDataInterface } from 'data/round-data/roundTypes'

type Props = {
  seasonData: RoundDataInterface[]
}

const SeasonMenu: React.FC<Props> = ({ seasonData }) => {
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
        return 'border-emerald-600 text-emerald-600'
      }
      if (menuPart === 'summary') {
        return 'bg-emerald-600 shadow-insetemerald'
      }
      if (menuPart === 'round') {
        return 'bg-emerald-600'
      }
    }
    // if (seasonData[0].season === 7)
    if (menuPart === 'outer') {
      return 'border-indigo-500'
    }
    if (menuPart === 'summary') {
      return 'bg-indigo-500'
    }
    if (menuPart === 'round') {
      return 'bg-indigo-500'
    }
  }

  return (
    <div
      className={`w-full max-w-xl rounded-lg px-2 py-4 mt-4
      font-scorenum uppercase text-center
      flex flex-col justify-center items-center`}
    >
      <h2 className="text-3xl font-semibold my-3">{`SEASON ${seasonData[0].season}`}</h2>
      <Link
        to={`/season/s${seasonData[0].season}-summary`}
        className={`w-max my-4 py-2 px-6
        text-lg font-semibold text-black
        rounded-md
        ${menuColors('summary')}`}
      >
        Season Summary
      </Link>
      <h2 className="text-2xl font-semibold my-3">ROUND RESULTS</h2>
      <div
        className="w-full
        flex flex-wrap justify-evenly items-center"
      >
        {seasonData.map((round, i) => (
          <Link
            to={`/season/s${round.season}r${round.round}`}
            className={`m-2 p-4 rounded-[100%]
            w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
            font-bold border-2
            flex flex-col justify-center items-center
            hover:scale-105 hover:shadow-insetyellow`}
            key={`${round.easyCourse}-${i}`}
          >
            {`${round.round}`}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SeasonMenu
