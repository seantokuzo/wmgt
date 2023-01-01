import { rankStyle, roundPointColor, getRank, PlayerBasicSeasonInfo } from './SeasonLeaderboardFull'
import { nanoid } from 'nanoid'
import { DataGod } from 'data/dataGod'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from 'context/appContext'

type Props = {
  season: number
}

const SeasonLeaderboardSmall: React.FC<Props> = ({ season }) => {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([])
  const { userPlayer } = useAppContext()
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
    if (type === 'collapse') {
      setSelectedPlayers([])
      return
    }
    setSelectedPlayers(seasonPointsData.map((p) => p.player))
  }

  const seasonColor = season === 6 ? 'emerald-500' : season === 7 ? 'indigo-500' : 'orange-500'

  const flex = 'flex justify-center items-center'
  const rankColClasses = 'w-8 h-8 text-sm text-center'
  const flagColClasses = 'w-6 text-base text-center'
  const playerColClasses = 'w-1/2 text-sm overflow-hidden'
  const totalColClasses = 'w-6 mr-1 text-sm text-center'
  const pointColClasses = 'w-6 h-6 sm:w-7 sm:h-7 text-sm text-center rounded-md'

  const expandCollapseBtn = (type: 'collapse' | 'expand') => {
    return (
      <button
        className={`w-1/3 min-w-min py-2 border-2 border-${seasonColor} rounded-md`}
        onClick={() => collapseExpandAll(type)}
      >
        {type === 'collapse' ? 'Close All' : 'Expand All'}
      </button>
    )
  }

  const playerSeasonSummaryEl = (player: PlayerBasicSeasonInfo, isUser = false) => {
    return (
      <div
        className={`w-5/6 mt-1 pb-1
          border-b-2 border-l-2 rounded-bl-md
          ${'border-' + seasonColor}
          ${isUser && `bg-${seasonColor}/[0.25]`}
          cursor-pointer
          flex flex-col justify-center items-center`}
        key={nanoid()}
      >
        <div
          className={`w-full px-6 mt-1 py-1
            flex justify-between items-center`}
          onClick={() => handlePlayerClick(player.player)}
        >
          <div
            className={`${rankColClasses} ${flex} rounded-md font-bold
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
            onClick={() => handlePlayerClick(player.player)}
          >
            {/* ROUND NUMBER */}
            <div className="w-full flex justify-between items-center">
              {seasonPointsData[0].roundPoints.map((_slot, i) => (
                <Link
                  to={`/season/s${season}r${i + 1}`}
                  className={`${pointColClasses} ${flex} relative`}
                  key={nanoid()}
                >
                  {`${i + 1}`}
                  {/* {DataGod.getIndexesOfUnusedSeasonPoints(player.roundPoints).includes(i) && (
                      <i className={`fa-solid fa-ban absolute text-2xl text-white/[0.75]`}></i>
                    )} */}
                </Link>
              ))}
            </div>
            {/* POINTS */}
            <div className="w-full flex justify-between items-center">
              {player.roundPoints.map((point, i) => (
                <Link
                  to={`/season/s${season}r${i + 1}`}
                  className={`${pointColClasses} ${roundPointColor(point)} ${flex} relative
                  ${
                    DataGod.getIndexesOfUnusedSeasonPoints(player.roundPoints).includes(i) &&
                    'opacity-25'
                  }`}
                  key={nanoid()}
                >
                  {point}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col justify-center items-center font-scorenum mb-8">
      {/* ****** TABLE LABELS - COLUMN TITLES ****** */}
      <div className="text-xs my-2">(Tap a player for points by round)</div>
      {selectedPlayers.length > 0 && (
        <div className="text-xs my-2">(Tap a round to see details)</div>
      )}
      <div className="w-full max-w-xl my-4 flex justify-evenly items-center">
        {expandCollapseBtn('collapse')}
        {expandCollapseBtn('expand')}
      </div>
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
          POINTS
        </div>
      </div>
      {/* ****** PLAYER SEASON POINTS DATA ****** */}
      {userPlayer &&
        playerSeasonSummaryEl(seasonPointsData.filter((p) => p.player === userPlayer)[0], true)}
      {seasonPointsData.map(
        (player) => playerSeasonSummaryEl(player)
        // <div
        //   className={`w-5/6 mt-1 pb-1
        //   border-b-2 border-l-2 rounded-bl-md
        //   ${'border-' + seasonColor}
        //   cursor-pointer
        //   flex flex-col justify-center items-center`}
        //   key={nanoid()}
        // >
        //   <div
        //     className={`w-full px-6 mt-1 py-1
        //     flex justify-between items-center`}
        //     onClick={() => handlePlayerClick(player.player)}
        //   >
        //     <div
        //       className={`${rankColClasses} ${flex} rounded-md font-bold
        //     ${rankStyle(getRank(player.player, seasonPointsData))}`}
        //     >
        //       {getRank(player.player, seasonPointsData)}
        //     </div>
        //     <div className={`${flagColClasses} ${flex}`}>{player.flag}</div>
        //     <div className={`${playerColClasses}`}>{player.player}</div>
        //     <div className={`${totalColClasses} ${flex}`}>{player.totalPoints}</div>
        //   </div>

        //   {selectedPlayers.includes(player.player) && (
        //     <div
        //       className="w-full mt-2 mb-4 px-2
        //       flex flex-col justify-center items-center"
        //       onClick={() => handlePlayerClick(player.player)}
        //     >
        //       {/* ROUND NUMBER */}
        //       <div className="w-full flex justify-between items-center">
        //         {seasonPointsData[0].roundPoints.map((_slot, i) => (
        //           <Link
        //             to={`/season/s${season}r${i + 1}`}
        //             className={`${pointColClasses} ${flex} relative`}
        //             key={nanoid()}
        //           >
        //             {`${i + 1}`}
        //             {/* {DataGod.getIndexesOfUnusedSeasonPoints(player.roundPoints).includes(i) && (
        //               <i className={`fa-solid fa-ban absolute text-2xl text-white/[0.75]`}></i>
        //             )} */}
        //           </Link>
        //         ))}
        //       </div>
        //       {/* POINTS */}
        //       <div className="w-full flex justify-between items-center">
        //         {player.roundPoints.map((point, i) => (
        //           <Link
        //             to={`/season/s${season}r${i + 1}`}
        //             className={`${pointColClasses} ${roundPointColor(point)} ${flex} relative
        //           ${
        //             DataGod.getIndexesOfUnusedSeasonPoints(player.roundPoints).includes(i) &&
        //             'opacity-25'
        //           }`}
        //             key={nanoid()}
        //           >
        //             {point}
        //           </Link>
        //         ))}
        //       </div>
        //     </div>
        //   )}
        // </div>
      )}
    </div>
  )
}

export default SeasonLeaderboardSmall
