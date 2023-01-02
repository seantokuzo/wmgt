import { useAppContext } from 'context/appContext'
import { RoundDetailsMode, useSeasonContext } from 'context/season/seasonContext'

type Props = {
  season: number
  btnMode: RoundDetailsMode
  btnText: string
}

const RoundDetailBtn: React.FC<Props> = ({ season, btnText, btnMode }) => {
  const { darkMode } = useAppContext()
  const { roundDetailsMode, changeRoundDetailsMode } = useSeasonContext()
  const colors = () => {
    if (roundDetailsMode === btnMode) {
      if (season === 6) return 'bg-emerald-500 shadow-seasonSix'
      if (season === 7) return 'bg-indigo-500 shadow-seasonSeven'
    }

    const bg = darkMode ? 'bg-black' : 'bg-white'
    if (season === 6) return bg + ' border-2 border-emerald-500'
    // if (season === 7) return bg + ' border-2 border-indigo-500'
    return bg + ' border-2 border-indigo-500'
  }

  return (
    <button
      className={`min-w-1/4 px-4 py-2 mx-[0.5rem] my-2
      text-sm sm:text-base md:text-lg lg:text-xl
      flex justify-center hover:scale-105
      rounded-xl
      ${colors()}`}
      onClick={() => changeRoundDetailsMode(btnMode)}
    >
      {btnText}
    </button>
  )
}

export default RoundDetailBtn
