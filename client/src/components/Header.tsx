import { useAppContext } from 'context/appContext'
import { Link } from 'react-router-dom'
import PageLink from './PageLink'
import PlayerSelector from './PlayerSelector'
import { BsMailbox } from 'react-icons/bs'
// import ThemeToggler from './ThemeToggler'
import { useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const { darkMode } = useAppContext()
  const { pathname } = useLocation()

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 pt-2 pb-5 md:pt-5 flex justify-between items-center">
      <div className="w-1/7">
        <PageLink path="/" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1
          className={`${!darkMode ? 'text-black' : 'cl-wmgYellow'}
          font-orb text-xl sm:text-2xl font-semibold`}
        >
          WMGT STATS
        </h1>
        <PlayerSelector />
      </div>
      <div className="w-1/7 h-full flex justify-start items-center">
        <Link
          to="contact"
          className={`w-full p-[5px]
          ${
            pathname === '/contact' || pathname === '/contact/thankyou'
              ? 'bg-wmgYellow sh-wmgYellowSm text-black'
              : 'bg-none cl-wmgYellow brdr-wmgYellow border-2'
          }
          rounded-full hover:scale-110 transition-all
          flex justify-center items-center`}
        >
          <BsMailbox className="text-xl md:text-2xl text-center" />
        </Link>
        {/* <ThemeToggler /> */}
      </div>
    </div>
  )
}

export default Header
