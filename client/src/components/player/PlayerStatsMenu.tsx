import PlayerSelector from 'components/PlayerSelector'
import PlayerMenuBtn from './PlayerMenuBtn'
import { PlayerStatsMode, playerStatModes } from 'pages/Player'
import { nanoid } from 'nanoid'
import { useAppContext } from 'context/appContext'
import { CURRENT_SEASON } from 'utils/constants'

type Props = {
  playerMode: PlayerStatsMode
  setPlayerMode: React.Dispatch<React.SetStateAction<PlayerStatsMode>>
}

const PlayerStatsMenu: React.FC<Props> = ({ playerMode, setPlayerMode }) => {
  const { userPlayer } = useAppContext()

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mb-4 flex flex-col justify-center items-center">
        {!userPlayer && <h5 className="mb-2">Select Player</h5>}
        <PlayerSelector />
      </div>
      <div
        // TODO
        // className={`w-fit max-w-[90%] px-5 py-3 flex flex-wrap justify-center items-center bg-s${CURRENT_SEASON} rounded-lg`}
        className={`w-fit max-w-[90%] px-5 py-3 flex flex-wrap justify-center items-center bg-s8 rounded-lg`}
      >
        {Object.values(playerStatModes).map((mode) => {
          return (
            <PlayerMenuBtn
              btnText={mode.replaceAll('-', ' ').toUpperCase()}
              btnMode={mode as PlayerStatsMode}
              playerMode={playerMode}
              setPlayerMode={setPlayerMode}
              key={nanoid()}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PlayerStatsMenu
