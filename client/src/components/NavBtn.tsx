import { useAppContext, AppMode } from 'context/appContext'

const NavBtn: React.FC<{ btnMode: AppMode }> = ({ btnMode }) => {
  const { mode, darkMode, changeAppMode } = useAppContext()

  const isBtnSelected = (modeBtn: AppMode) => {
    if (mode === modeBtn) {
      if (darkMode) return 'bg-white text-black border-white'
      return 'bg-black text-white border-black'
    }
    if (darkMode) return 'bg-none text-white border-white'
    return 'bg-none text-black border-black'
  }

  const btnModeToText = btnMode
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <button
      className={`border-2 rounded-full hover:scale-105
        text-base flex justify-center items-center
        ${isBtnSelected(btnMode)}
        ${btnMode !== 'menu' && 'w-1/2 my-2 px-4 py-1.5'}
        ${btnMode === 'menu' && 'p-2'}`}
      onClick={() => changeAppMode(btnMode)}
    >
      {btnMode !== 'menu' && btnModeToText}
      {/* eslint-disable-next-line */}
      {btnMode === 'menu' && <i className="fa-solid fa-house"></i>}
    </button>
  )
}

export default NavBtn
