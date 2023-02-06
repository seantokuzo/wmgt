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
  // const seasonPointsData = DataGod.getSeasonSummaryPlayerPoints(season)
  const seasonPointsData =
    season === 9
      ? DataGod.getSeasonSummaryPlayerPoints(season)
      : DataGod.getSeasonSummaryFromOfficialResults(season)

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

  const flex = 'flex justify-center items-center'
  const rankColClasses = 'w-8 h-8 text-sm text-center'
  const flagColClasses = 'w-6 text-base text-center'
  const playerColClasses = 'w-1/2 text-sm overflow-hidden'
  const totalColClasses = `w-8 h-8 mx-1 text-center`
  const pointColClasses = 'w-6 h-6 sm:w-7 sm:h-7 text-sm text-center rounded-md'

  const expandCollapseBtn = (type: 'collapse' | 'expand') => {
    return (
      <button
        className={`w-1/3 min-w-min py-2 border-2 brdr-s${season} rounded-md`}
        onClick={() => collapseExpandAll(type)}
      >
        {type === 'collapse' ? 'Close All' : 'Expand All'}
      </button>
    )
  }

  const playerSeasonSummaryEl = (player: PlayerBasicSeasonInfo, isUser = false) => {
    const seasonRank = getRank(player.player, seasonPointsData)
    return (
      <div
        className={`w-5/6 mt-1 pb-1
          border-b-2 border-l-2 rounded-bl-md
          brdr-s${season}
          ${isUser && `bg-trans-s${season}`}
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
            className={`${rankColClasses} ${flex} rounded-md font-bold ${rankStyle(seasonRank)}`}
          >
            {seasonRank}
          </div>
          <div className={`${flagColClasses} ${flex}`}>{player.flag}</div>
          <div
            className={`${playerColClasses}
            ${
              seasonRank === 1
                ? 'bgfade-gold border-b-2 brdr-gold'
                : seasonRank === 2
                ? 'bgfade-silver border-b-2 brdr-silver'
                : seasonRank === 3
                ? 'bgfade-bronze border-b-2 brdr-bronze'
                : seasonRank <= 10
                ? 'bgfade-topTenGreen border-b-2 brdr-topTenGreen'
                : ''
            }`}
          >
            {player.player}
          </div>
          <div
            className={`${totalColClasses}
          bgfade-s${season} brdr-s${season}
          rounded-full border-l-2 border-t-[1px]
          text-xs font-semibold
          ${flex}`}
          >
            {player.totalPoints}
          </div>
        </div>
        {selectedPlayers.includes(player.player) && (
          <div
            className="w-full mt-2 mb-4 px-2
              flex flex-col justify-center items-center"
            onClick={() => handlePlayerClick(player.player)}
          >
            {/* POINTS */}
            <div
              className={`${
                player.roundPoints.length < 11 ? 'w-fit mx-1' : 'w-full'
              } px-2 flex justify-between items-center`}
            >
              {/* IF SEASON 7 MAKE ROUND POINT BOXES LINK TO ROUND DETAILS PAGES */}
              {(season === 6 || season === 7 || season === 8) &&
                player.roundPoints.map((point, i) => (
                  <Link
                    to={`/season/s${season}r${i + 1}`}
                    className={`w-fit ${
                      player.roundPoints.length < 11 && 'mx-1'
                    } flex flex-col justify-center items-center`}
                    key={nanoid()}
                  >
                    <div
                      className={`${pointColClasses} ${flex} relativew-full flex justify-center items-center`}
                    >
                      {i + 1}
                    </div>
                    <div
                      className={`${pointColClasses} ${roundPointColor(point)} ${flex} relative
                      ${
                        DataGod.getIndexesOfUnusedSeasonPoints(player.roundPoints).includes(i) &&
                        'opacity-25'
                      }`}
                    >
                      {point}
                    </div>
                  </Link>
                ))}
              {/* IF NOT SEASON 7 NO LINKS TO ROUND DETAILS */}
              {season !== 6 &&
                season !== 7 &&
                season !== 8 &&
                player.roundPoints.map((point, i) => (
                  <div
                    className={`w-fit ${
                      player.roundPoints.length < 11 && 'mx-1'
                    } flex flex-col justify-center items-center`}
                    onClick={() => handlePlayerClick(player.player)}
                    key={nanoid()}
                  >
                    <div
                      className={`${pointColClasses} ${flex} relativew-full flex justify-center items-center`}
                    >
                      {i + 1}
                    </div>
                    <div
                      className={`${pointColClasses} ${roundPointColor(point)} ${flex} relative
                  ${
                    DataGod.getIndexesOfUnusedSeasonPoints(player.roundPoints).includes(i) &&
                    'opacity-25'
                  }`}
                    >
                      {point}
                    </div>
                  </div>
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
        bg-s${season}
        flex justify-between items-center`}
      >
        <div className={`${rankColClasses} ${flex}`}>RANK</div>
        <div className={`${flagColClasses} ${flex}`}>🌎</div>
        <div className={`${playerColClasses}`}>PLAYER</div>
        <div
          className={`${totalColClasses} text-sm
          ${flex}`}
        >
          POINTS
        </div>
      </div>
      {/* ****** PLAYER SEASON POINTS DATA ****** */}
      {userPlayer &&
        seasonPointsData.findIndex((p) => p.player === userPlayer) >= 0 &&
        playerSeasonSummaryEl(seasonPointsData.filter((p) => p.player === userPlayer)[0], true)}
      {seasonPointsData.map((player) => playerSeasonSummaryEl(player))}
    </div>
  )
}

export default SeasonLeaderboardSmall
