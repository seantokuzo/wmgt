import { useState } from 'react'
import Loading from 'components/Loading'
import NoPlayerSelected from 'components/player/NoPlayerSelected'
import PlayerRoundResults from 'components/player/PlayerRoundResults'
import PlayerStatsMenu from 'components/player/PlayerStatsMenu'
import { useAppContext } from 'context/appContext'

export type PlayerStatsMode = 'round-results' | 'course-stats' | 'shot-stats'
// | 'season-badges'
// | 'all-time-badges'

export const playerStatModes = {
  roundResults: 'round-results',
  courseStats: 'course-stats',
  shotStats: 'shot-stats'
  // seasonBadges: 'season-badges',
  // allTimeBadges: 'all-time-badges'
}

const Player: React.FC = () => {
  const [playerMode, setPlayerMode] = useState<PlayerStatsMode>('round-results')
  const { userPlayer } = useAppContext()

  return (
    <div className="w-full px-4 flex flex-col justify-center items-center">
      {/* <Loading /> */}
      <PlayerStatsMenu setPlayerMode={setPlayerMode} playerMode={playerMode} />
      {!userPlayer && <NoPlayerSelected />}
      {userPlayer &&
        (playerMode === 'shot-stats' ||
          // playerMode === 'season-badges' ||
          // playerMode === 'all-time-badges' ||
          playerMode === 'course-stats') && <Loading />}
      {playerMode === 'round-results' && <PlayerRoundResults />}
    </div>
  )
}

export default Player
