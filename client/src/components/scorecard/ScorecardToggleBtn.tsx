type Props = {
  show: boolean
  toggle: () => void
  // toggle: React.Dispatch<React.SetStateAction<boolean>>
  text1: string
  text2: string
}

const ScorecardToggleBtn: React.FC<Props> = ({ show, toggle, text1, text2 }) => {
  const deselectedClasses = 'bg-[#f8ff7140] shadow-insetbasic'
  const selectedClasses = 'bg-[#f8ff71] text-[#38280e] shadow-inyellfocus'

  return (
    <button className="w-full flex justify-center items-center py-2 my-2" onClick={toggle}>
      <span
        className={`w-1/3 py-2 px-3 rounded-l-md
        text-sm md:text-base
        ${show && selectedClasses}
        ${!show && deselectedClasses}`}
      >
        {text1}
      </span>
      <span
        className={`w-1/3 py-2 px-3 rounded-r-md
        text-sm md:text-base
        ${!show && selectedClasses}
        ${show && deselectedClasses}`}
      >
        {text2}
      </span>
    </button>
  )
}

export default ScorecardToggleBtn
