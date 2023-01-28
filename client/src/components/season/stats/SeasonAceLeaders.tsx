import { nanoid } from 'nanoid'
import { DataGod } from 'data/dataGod'
import { rankStyle } from '../summary/SeasonLeaderboardFull'

type Props = {
  season: number
}

const SeasonAceLeaders: React.FC<Props> = ({ season }) => {
  const seasonAceData = DataGod.getSeasonHoleInOneLeaders(season)

  return (
    <div
      className="w-full mt-4
      flex flex-col justify-center items-center"
    >
      <table className="waffle no-grid" cellSpacing="0" cellPadding="0">
        <thead>
          <tr className="border-b-2">
            <th className="text-center">Rank</th>
            <th className="px-4 text-center">🌎</th>
            <th className="text-left">Player</th>
            <th className="text-center">Total Aces</th>
          </tr>
        </thead>
        <tbody>
          {seasonAceData.map((player) => {
            return (
              <tr className="my-1" key={nanoid()}>
                <td className={`rounded-md py-1 ${rankStyle(player.rank)} text-center`}>
                  {player.rank}
                </td>
                <td className="px-4 text-center">{player.flag}</td>
                <td className="text-left">{player.player}</td>
                <td className="text-center">{player.roundAceCount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SeasonAceLeaders
