import { useSeasonContext } from 'context/season/seasonContext'

const EasyHardToggleBtn: React.FC = () => {
  const { showEasyCourse, toggleCourse } = useSeasonContext()
  return (
    <button onClick={toggleCourse}>
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

export default EasyHardToggleBtn
