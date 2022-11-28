import { useAppContext, AppMode } from 'context/appContext'

const NavBtn: React.FC<{ btnMode: AppMode }> = ({ btnMode }) => {
  const { mode, darkMode, changeAppMode } = useAppContext()

  const isBtnSelected = (modeBtn: AppMode) => {
    if (mode === modeBtn) {
      if (darkMode) return 'bg-white text-black'
      return 'bg-black text-white'
    }
    if (darkMode) return 'bg-none text-white'
    return 'bg-none text-black'
  }

  const btnModeToText = btnMode
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <button
      className={`mx-1 border-2 rounded-full hover:scale-105 ${
        darkMode ? 'border-white' : 'border-black'
      }
        px-4 py-1.5
        text-base
        ${isBtnSelected(btnMode)}
        ${btnMode !== 'menu' && 'w-1/2'}`}
      onClick={() => changeAppMode(btnMode)}
    >
      {btnModeToText}
    </button>
  )
}

export default NavBtn
