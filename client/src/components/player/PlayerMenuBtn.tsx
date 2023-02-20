import { PlayerStatsMode } from 'pages/Player'
import { CURRENT_SEASON } from 'utils/constants'

type Props = {
  btnText: string
  btnMode: PlayerStatsMode
  playerMode: PlayerStatsMode
  setPlayerMode: React.Dispatch<React.SetStateAction<PlayerStatsMode>>
}

const PlayerMenuBtn: React.FC<Props> = ({ playerMode, btnText, btnMode, setPlayerMode }) => {
  const colors = () => {
    if (playerMode === btnMode) {
      return `brdr-s${CURRENT_SEASON} bg-sh-s${CURRENT_SEASON}`
    }
    return `brdr-s${CURRENT_SEASON}`
  }

  return (
    <button
      className={`min-w-1/4 px-4 py-2 mx-[0.5rem] my-2
      border-2 rounded-xl ${colors()}
      text-xxs sm:text-sm md:text-base lg:text-lg font-bold font-scorenum
      flex justify-center hover:scale-105 transition-all`}
      onClick={() => setPlayerMode(btnMode)}
    >
      {btnText}
    </button>
  )
}

export default PlayerMenuBtn
