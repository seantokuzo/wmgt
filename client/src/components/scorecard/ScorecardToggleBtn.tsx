type Props = {
  season: number
  show: boolean
  toggle: () => void
  // toggle: React.Dispatch<React.SetStateAction<boolean>>
  text1: string
  text2: string
}

const ScorecardToggleBtn: React.FC<Props> = ({ season, show, toggle, text1, text2 }) => {
  const deselectedClasses = `bg-trans-s${season} sh-insetbasic`
  const selectedClasses = `bg-sh-s${season}`

  return (
    <button className="w-full max-w-lg flex justify-center items-center my-4" onClick={toggle}>
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
