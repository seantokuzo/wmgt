import { useAppContext } from 'context/appContext'
import PageLink from './PageLink'
import ThemeToggler from './ThemeToggler'

const Header: React.FC = () => {
  const { darkMode } = useAppContext()

  return (
    <div
      className={`w-full px-4 py-5 flex justify-between items-center ${
        !darkMode ? 'text-black' : 'text-white'
      }`}
    >
      <div className="w-1/4">
        <PageLink path="/" />
      </div>
      <h1 className="text-2xl font-semibold font-orb">WMGT Stats</h1>
      <div className="w-1/4 h-full flex flex-col justify-start items-start">
        <ThemeToggler />
      </div>
    </div>
  )
}

export default Header
