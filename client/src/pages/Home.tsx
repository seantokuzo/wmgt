import { useAppContext } from 'context/appContext'
import PageLink from '../components/PageLink'

const Home: React.FC = () => {
  const { darkMode } = useAppContext()
  return (
    <div className="w-full max-w-4xl px-4 flex flex-col justify-center items-center">
      {/* WMGT OVERVIEW VIDEO LOL */}
      {/* <iframe
        className="fixed w-screen min-h-screen h-screen z-[-1] m-0 p-0"
        src="https://www.youtube.com/embed/Gt-oA6oQQhQ?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}
      <img className="w-full max-w-4xl" src="/img/wmg_logo.png" alt="Walkabout Mini Golf Logo" />
      {/* <div
        className='w-[100px] h-[100px] bg-red-400 relative
        before:content-[""] before:absolute before:top-0 before:left-0 before:border-b-red-400
        before:border-b-[29px] before:border-x-[29px] before:border-x-[#eee] before:w-[100px] before:h-0
        after:content-[""] after:absolute after:bottom-0 after:left-0 after:border-b-red-400
        after:border-t-[29px] after:border-x-[29px] after:border-x-[#eee] after:w-[100px] after:h-0'
      ></div> */}
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

{
  /* <div className="flex flex-col justify-center items-center relative">
        <div
          className='h-[10em] relative overflow-hidden w-[10em]
        after:bg-orange-400 after:content-[""] after:h-full after:absolute after:w-full after:rotate-45
        before:bg-orange-400 before:content-[""] before:h-full before:absolute before:w-full before:rotate-45
        flex flex-col justify-center items-center
        text-white'
        ></div>
        <div
          className="text-black z-100
          absolute top-1/2 left-1/2
          translate-x-[-50%] translate-y-[-50%]"
        >
          POO
        </div>
      </div> */
}
