import { useAppContext } from 'context/appContext'
import PageLink from '../components/PageLink'

const Home: React.FC = () => {
  const { darkMode } = useAppContext()
  return (
    <div className="w-full max-w-4xl px-4 flex flex-col justify-center items-center">
      <img className="w-full max-w-4xl" src="/img/wmg_logo.png" alt="Walkabout Mini Golf Logo" />
      <h2 className={`${!darkMode ? 'text-[#38280e]' : 'text-[#f8f771]'}`}>Stats By:</h2>
      <nav className="w-full max-w-xl py-2 flex flex-col justify-center items-center">
        <PageLink path="player" />
        <PageLink path="season" />
        <PageLink path="course" />
      </nav>
    </div>
  )
}

export default Home
