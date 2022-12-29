import ComingSoon from 'components/ComingSoon'
import { Link } from 'react-router-dom'
import { DataGod } from 'data/dataGod'
import { nanoid } from 'nanoid'
import SeasonPointsLeaderboard from './SeasonPointsLeaderboard'
import SeasonSummaryMenu from './SeasonSummaryMenu'

type Props = {
  season: number
}

const SeasonSummary: React.FC<Props> = ({ season }) => {
  // console.log(DataGod.getSeasonSummaryPlayerPoints(7))

  if (season === 6) {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <Link
          to="/season"
          className={`px-4 py-2 text-2xl md:text-3xl font-semibold
          flex justify-center items-center hover:shadow-lg hover:scale-105
          text-white rounded-t-md
          ${
            season === 6 ? 'bg-emerald-500 shadow-insetemerald' : 'bg-indigo-500 shadow-insetindigo'
          }`}
        >
          {/* <i className="fa-solid fa-arrow-left"></i> */}
          <p>SEASON MENU</p>
        </Link>
        <ComingSoon text="Insufficient Data" color="emerald" />
      </div>
    )
  }

  return (
    <div
      className="w-full
      flex flex-col justify-center items-center"
    >
      <Link
        to="/season"
        className={`px-4 py-2 text-2xl md:text-3xl font-semibold
          flex justify-center items-center hover:shadow-lg hover:scale-105
          text-white rounded-t-md
          ${
            season === 6 ? 'bg-emerald-500 shadow-insetemerald' : 'bg-indigo-500 shadow-insetindigo'
          }`}
      >
        {/* <i className="fa-solid fa-arrow-left"></i> */}
        <p>SEASON MENU</p>
      </Link>
      <SeasonSummaryMenu />
      <SeasonPointsLeaderboard season={season} />
      {/* {DataGod.getSeasonSummaryPlayerPoints(season).map((player) => (
        <div className="flex justify-center items center" key={nanoid()}>
          <div>{player.flag}</div>
          <div>{player.player}</div>
          <div>{player.totalPoints}</div>
          {player.roundPoints.map((point) => (
            <div className="border-2 p-2" key={nanoid()}>
              {point}
            </div>
          ))}
        </div>
      ))} */}
    </div>
  )
}

export default SeasonSummary
