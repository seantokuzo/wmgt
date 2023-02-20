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
      <div className="py-2 flex flex-col justify-center items-center">
        {!userPlayer && <h5 className="mb-2">Select Player</h5>}
        <PlayerSelector />
      </div>
      <div className="w-full max-w-2xl flex flex-wrap justify-center items-center">
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
      <div className={`my-4 px-3 w-full max-w-xl border-2 brdr-s${CURRENT_SEASON}`}></div>
    </div>
  )
}

export default PlayerStatsMenu
