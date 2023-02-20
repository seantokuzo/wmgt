import Loading from 'components/Loading'
import NoPlayerSelected from 'components/player/NoPlayerSelected'
import PlayerRoundResults from 'components/player/PlayerRoundResults'
import PlayerStatsMenu from 'components/player/PlayerStatsMenu'
import { useAppContext } from 'context/appContext'
import { useState } from 'react'

export type PlayerStatsMode =
  | 'round-results'
  | 'season-badges'
  | 'all-time-badges'
  | 'shot-stats'
  | 'course-stats'

export const playerStatModes = {
  roundResults: 'round-results',
  seasonBadges: 'season-badges',
  allTimeBadges: 'all-time-badges',
  shotStats: 'shot-stats',
  courseStats: 'course-stats'
}

const Player: React.FC = () => {
  const [playerMode, setPlayerMode] = useState<PlayerStatsMode>('round-results')
  const { userPlayer } = useAppContext()

  return (
    <div className="w-full px-10 flex flex-col justify-center items-center">
      <PlayerStatsMenu setPlayerMode={setPlayerMode} playerMode={playerMode} />
      {!userPlayer && <NoPlayerSelected />}
      {userPlayer &&
        // playerMode === 'round-results' ||
        (playerMode === 'season-badges' ||
          playerMode === 'all-time-badges' ||
          playerMode === 'shot-stats' ||
          playerMode === 'course-stats') && <Loading />}
      {playerMode === 'round-results' && <PlayerRoundResults />}
    </div>
  )
}

export default Player
