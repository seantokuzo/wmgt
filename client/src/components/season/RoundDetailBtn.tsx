import { RoundDetailsMode } from './RoundDetails'

type Props = {
  selected: boolean
  btnMode: RoundDetailsMode
  btnText: string
  updateMode: React.Dispatch<React.SetStateAction<RoundDetailsMode>>
}

const RoundDetailBtn: React.FC<Props> = ({ selected, btnText, btnMode, updateMode }) => {
  const bgColor = selected ? 'bg-[#38280e] text-[#f8ff71]' : 'bg-none border-2 border-[#38280e]'

  return (
    <button
      className={`min-w-1/4 px-4 py-2 my-1 text-xl
      flex justify-center hover:shadow-lg hover:scale-105
      rounded-xl
      ${bgColor}`}
      onClick={() => updateMode(btnMode)}
    >
      {btnText}
    </button>
  )
}

export default RoundDetailBtn
