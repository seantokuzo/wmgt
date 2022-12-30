import { rankStyle, roundPointColor, getRank } from './SeasonLeaderboardFull'
import { nanoid } from 'nanoid'
import { DataGod } from 'data/dataGod'
import { useState } from 'react'

type Props = {
  season: number
}

const SeasonLeaderboardSmall: React.FC<Props> = ({ season }) => {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([])
  const seasonPointsData = DataGod.getSeasonSummaryPlayerPoints(season)

  const handlePlayerClick = (player: string) => {
    if (selectedPlayers.includes(player)) {
      return setSelectedPlayers((prevPlayers) => {
        return [
          ...prevPlayers.slice(0, prevPlayers.indexOf(player)),
          ...prevPlayers.slice(prevPlayers.indexOf(player) + 1)
        ]
      })
    }
    setSelectedPlayers((prevPlayers) => [...prevPlayers, player])
  }

  const collapseExpandAll = (type: 'collapse' | 'expand') => {
    console.log(type)
  }

  console.log(selectedPlayers)

  const seasonColor = season === 6 ? 'emerald-500' : season === 7 ? 'indigo-500' : 'orange-500'

  const flex = 'flex justify-center items-center'
  const rankColClasses = 'w-8 h-8 text-sm text-center'
  const flagColClasses = 'w-4 text-sm text-center'
  const playerColClasses = 'w-1/2 text-sm overflow-hidden'
  const totalColClasses = 'w-6 mr-1 text-sm text-center'
  const pointColClasses = 'w-5 h-5 text-sm text-center'

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* ****** TABLE LABELS - COLUMN TITLES ****** */}
      <div className="text-xs my-2">(Click a player for points by round)</div>
      <div
        className={`w-5/6 px-6 py-1
        bg-${seasonColor} shadow-inset${seasonColor.split('-')[0]}
        flex justify-between items-center`}
      >
        <div className={`${rankColClasses} ${flex}`}>RANK</div>
        <div className={`${flagColClasses} ${flex}`}>🌎</div>
        <div className={`${playerColClasses}`}>PLAYER</div>
        <div
          className={`${totalColClasses}
          ${flex}`}
        >
          TOTAL
        </div>
      </div>
      {/* ****** PLAYER SEASON POINTS DATA ****** */}
      {seasonPointsData.map((player) => (
        <div
          className={`w-5/6
          border-b-2 border-l-2 rounded-bl-md
          ${'border-' + seasonColor}
          flex flex-col justify-center items-center`}
          key={nanoid()}
        >
          <div
            className={`w-full px-6 mt-1 py-1
            flex justify-between items-center`}
            onClick={() => handlePlayerClick(player.player)}
          >
            <div
              className={`${rankColClasses} ${flex} rounded-md
            ${rankStyle(getRank(player.player, seasonPointsData))}`}
            >
              {getRank(player.player, seasonPointsData)}
            </div>
            <div className={`${flagColClasses} ${flex}`}>{player.flag}</div>
            <div className={`${playerColClasses}`}>{player.player}</div>
            <div className={`${totalColClasses} ${flex}`}>{player.totalPoints}</div>
          </div>

          {selectedPlayers.includes(player.player) && (
            <div
              className="w-full mt-2 mb-4 px-2
              flex flex-col justify-center items-center"
            >
              <div className="w-full flex justify-between items-center">
                {seasonPointsData[0].roundPoints.map((_slot, i) => (
                  <div className={`${pointColClasses} ${flex}`} key={nanoid()}>{`${i + 1}`}</div>
                ))}
              </div>
              <div className="w-full flex justify-between items-center">
                {player.roundPoints.map((point, i) => (
                  <div
                    className={`${pointColClasses} ${roundPointColor(point)} ${flex} relative
                  ${
                    DataGod.getIndexesOfUnusedSeasonPoints(player.roundPoints).includes(i) &&
                    'opacity-25'
                  }`}
                    key={nanoid()}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default SeasonLeaderboardSmall
