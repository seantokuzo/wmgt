import { useAppContext } from 'context/appContext'
import PageLink from './PageLink'
import ThemeToggler from './ThemeToggler'

const Header: React.FC = () => {
  const { darkMode, userPlayer } = useAppContext()

  return (
    <div
      className={`w-full px-4 py-5 flex justify-between items-center ${
        !darkMode ? 'text-black' : 'text-white'
      }`}
    >
      <div className="w-1/4">
        <PageLink path="/" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`${
            !darkMode ? 'text-wmgBrown' : 'text-[#f8f771]'
          } font-orb text-2xl font-semibold`}
        >
          WMGT STATS
        </h1>
        {userPlayer && (
          <div
            className="mt-2 py-1 px-2 rounded-md
            border-2 border-gold bg-gold shadow-insetgold
            text-black font-bold
            flex justify-center items-center"
          >
            <i className="fa-solid fa-crown"></i>
            <div className="mx-2">{userPlayer}</div>
            <i className="fa-solid fa-crown"></i>
          </div>
        )}
      </div>
      <div className="w-1/4 h-full flex flex-col justify-start items-start">
        <ThemeToggler />
      </div>
    </div>
  )
}

export default Header
