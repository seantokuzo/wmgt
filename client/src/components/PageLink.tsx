import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from 'context/appContext'
import { PagePath } from 'App'

const PageLink: React.FC<{ path: PagePath }> = ({ path }) => {
  const { pathname } = useLocation()
  const { darkMode } = useAppContext()

  const isBtnSelected = (path: PagePath) => {
    if (pathname === path) {
      if (darkMode) return 'bg-white text-black border-white'
      return 'bg-black text-white border-black'
    }
    if (darkMode) return 'bg-none text-white border-white'
    return 'bg-none text-black border-black'
  }

  const btnModeToText = path
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <Link
      to={path}
      className={`border-2 rounded-full hover:scale-105
        text-base flex justify-center items-center
        ${isBtnSelected(path)}
        ${path !== '/' && 'w-1/2 my-2 px-4 py-1.5'}
        ${path === '/' && 'w-fit rounded-[100%] p-2'}`}
    >
      {path !== '/' && btnModeToText}
      {path === '/' && <i className="fa-solid fa-house"></i>}
    </Link>
  )
}

export default PageLink
