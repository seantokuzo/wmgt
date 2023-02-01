import { useAppContext } from 'context/appContext'
import PageLink from '../components/PageLink'

const Home: React.FC = () => {
  const { darkMode } = useAppContext()
  return (
    <div
      className="w-full max-w-4xl px-4
      flex flex-col justify-center items-center"
    >
      {/* WMGT OVERVIEW VIDEO LOL */}
      {/* <iframe
        className="w-full min-h-[30rem] max-w-2xl m-0 p-0"
        src="https://www.youtube.com/embed/Gt-oA6oQQhQ?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}
      <div className="w-full max-w-xl mt-2 flex flex-col justify-center items-center">
        <PageLink path="tournament-info" />
      </div>
      <img className="w-full max-w-xl" src="/img/wmg_logo.png" alt="Walkabout Mini Golf Logo" />
      <h2 className={`${!darkMode ? 'cl-wmgBrown' : 'text-[#f8f771]'}`}>Stats By:</h2>
      <nav className="w-full max-w-xl pt-2 pb-10 flex flex-col justify-center items-center mb-16">
        <PageLink path="season" />
        <PageLink path="course" />
        <PageLink path="player" />
      </nav>
    </div>
  )
}

export default Home
