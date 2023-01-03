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
    if (roundDetailsMode === btnMode) return `bg-sh-s${season}`

    const bg = darkMode ? 'bg-black' : 'bg-white'
    return bg + ` border-2 brdr-s${season}`
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
