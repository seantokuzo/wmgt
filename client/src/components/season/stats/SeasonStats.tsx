import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SeasonAceLeaders from './SeasonAceLeaders'

type Props = {
  season: number
}

type SeasonStatMode = 'ace-leaders'

const SeasonStats: React.FC<Props> = ({ season }) => {
  const [statMode, setStatMode] = useState<SeasonStatMode>('ace-leaders')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const modeChangeBtn = (mode: SeasonStatMode, btnText: string) => {
    return (
      <button
        className={`w-fit max-w-fit my-4 py-3 px-8
        text-base font-bold
        border-2 brdr-s${season} rounded-lg
        ${statMode !== mode && `bg-none`}
        ${statMode === mode && `bg-s${season}`}
        flex justify-center items-center
        `}
        onClick={() => setStatMode(mode)}
      >
        {btnText}
      </button>
    )
  }

  return (
    <div
      className="w-full font-scorenum
      flex flex-col justify-center items-center"
    >
      <Link
        to="/season"
        className={`px-4 py-2 text-2xl md:text-3xl font-semibold
          flex justify-center items-center hover:shadow-lg
          hover:scale-105 transition-all
          text-white rounded-md
          bg-sh-s${season}`}
      >
        <p>SEASON MENU</p>
      </Link>
      <div
        className={`mt-6 mb-3 px-16 py-3
        rounded-md bg-sh-gold border-2 brdr-gold
        text-black text-4xl font-bold`}
      >{`Season ${season}`}</div>
      {modeChangeBtn('ace-leaders', "Most Hole-in-One's")}
      {statMode === 'ace-leaders' && <SeasonAceLeaders season={season} />}
    </div>
  )
}

export default SeasonStats
