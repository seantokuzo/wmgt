import { RoundDetailsMode, useSeasonContext } from 'context/season/seasonContext'

type Props = {
  btnMode: RoundDetailsMode
  btnText: string
}

const RoundDetailBtn: React.FC<Props> = ({ btnText, btnMode }) => {
  const { roundDetailsMode, changeRoundDetailsMode } = useSeasonContext()

  return (
    <button
      className={`min-w-1/4 px-4 py-2 mx-[0.5rem] my-2
      text-sm sm:text-base md:text-lg lg:text-xl
      flex justify-center hover:shadow-lg hover:scale-105
      rounded-xl
      ${
        roundDetailsMode === btnMode
          ? 'bg-wmgBrown shadow-insetbrown text-wmgYellow'
          : 'bg-wmgYellow border-2 border-wmgYellow shadow-inyellopp'
      }`}
      onClick={() => changeRoundDetailsMode(btnMode)}
    >
      {btnText}
    </button>
  )
}

export default RoundDetailBtn
