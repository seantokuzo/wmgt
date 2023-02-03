import { useAppContext } from 'context/appContext'
import { DataGod } from 'data/dataGod'
import { Link } from 'react-router-dom'
import { CURRENT_SEASON } from 'utils/constants'
import PageLink from '../components/PageLink'

const Home: React.FC = () => {
  const { darkMode, windowSize } = useAppContext()

  const currentRound = DataGod.getSeasonData(CURRENT_SEASON).length

  return (
    <div
      className={`w-full max-w-4xl px-4
      ${
        windowSize.height >= 600
          ? 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'
          : 'mt-2'
      }
      flex flex-col justify-center items-center`}
    >
      {/* WMGT OVERVIEW VIDEO LOL */}
      {/* <iframe
        className="w-full min-h-[30rem] max-w-2xl m-0 p-0"
        src="https://www.youtube.com/embed/Gt-oA6oQQhQ?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}
      <div className="w-full max-w-xl flex flex-col justify-center items-center">
        <PageLink path="tournament-info" />
        <Link
          to={`/season/s${CURRENT_SEASON}r${currentRound}`}
          className={`w-1/2 min-w-max my-2 px-4 py-1.5
          bg-wmgYellow sh-wmgYellowSm
          rounded-lg hover:scale-105 transition-all
          text-sm sm:text-base md:text-lg
          text-black font-semibold text-center uppercase
          flex justify-center items-center`}
        >
          Next Round
        </Link>
      </div>
      <img className="w-full max-w-xl" src="/img/wmg_logo.png" alt="Walkabout Mini Golf Logo" />
      <h2 className={`${!darkMode ? 'cl-wmgBrown' : 'text-[#f8f771]'}`}>Stats By:</h2>
      <nav className="w-full max-w-xl flex flex-col justify-center items-center">
        <PageLink path="season" />
        {/* <PageLink path="course" /> */}
        <PageLink path="player" />
      </nav>
    </div>
  )
}

export default Home
