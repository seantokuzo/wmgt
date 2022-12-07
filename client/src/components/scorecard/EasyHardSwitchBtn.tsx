type Props = {
  showEasyCourse: boolean
  setShowEasyCourse: React.Dispatch<React.SetStateAction<boolean>>
}

const EasyHardSwitchBtn: React.FC<Props> = ({ showEasyCourse, setShowEasyCourse }) => {
  return (
    <button className="" onClick={() => setShowEasyCourse(!showEasyCourse)}>
      <span className={`py-1 px-3 rounded-md ${showEasyCourse && 'bg-[#f8ff71] text-[#38280e]'}`}>
        EASY
      </span>{' '}
      |{' '}
      <span className={`py-1 px-3 rounded-md ${!showEasyCourse && 'bg-[#f8ff71] text-[#38280e]'}`}>
        HARD
      </span>
    </button>
  )
}

export default EasyHardSwitchBtn
