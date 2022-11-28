import { useAppContext } from 'context/appContext'
import NavBtn from './HeaderNavBtn'
import ThemeToggler from './ThemeToggler'

const Header: React.FC = () => {
  const { darkMode } = useAppContext()

  return (
    <div
      className={`w-full fixed py-5 top-0 flex justify-center items-center ${
        !darkMode ? 'text-black' : 'text-white'
      }`}
    >
      <div className='absolute top-1 left-1'>
        <NavBtn btnMode="menu" />
      </div>
      <h1 className="text-2xl font-semibold">WMGT Stats</h1>
      <div className="absolute top-2 right-1">
        <ThemeToggler />
      </div>
    </div>
  )
}

export default Header
