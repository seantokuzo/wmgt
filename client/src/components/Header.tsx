import { useAppContext } from 'context/appContext'
import PageLink from './PageLink'
import PlayerSelector from './PlayerSelector'
import ThemeToggler from './ThemeToggler'

const Header: React.FC = () => {
  const { darkMode, userPlayer } = useAppContext()

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 pt-2 pb-5 md:pt-5 flex justify-between items-center">
      <div className="w-1/7">
        <PageLink path="/" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1
          className={`${!darkMode ? 'text-black' : 'cl-wmgYellow'} font-orb text-2xl font-semibold`}
        >
          WMGT STATS
        </h1>
        <PlayerSelector />
      </div>
      <div className="w-1/7 h-full flex flex-col justify-start items-start">
        <ThemeToggler />
      </div>
    </div>
  )
}

export default Header
