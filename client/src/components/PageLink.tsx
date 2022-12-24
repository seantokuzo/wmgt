import { Link, useLocation } from 'react-router-dom'
import { PagePath } from 'App'
import { useAppContext } from 'context/appContext'

const PageLink: React.FC<{ path: PagePath }> = ({ path }) => {
  const { pathname } = useLocation()
  const { darkMode } = useAppContext()

  const homeBtnSelected = (path: PagePath) => {
    if (path !== '/') return ''
    if (pathname === path) {
      return darkMode
        ? 'bg-wmgYellow text-wmgBrown shadow-inyellfocus'
        : 'bg-[38280e] text-wmgYellow shadow-insetbrown'
    }
    return darkMode
      ? 'bg-none shadow-none text-wmgYellow border-wmgYellow border-2'
      : 'bg-none shadow-insetbasic text-wmgBrown border-wmgBrown border-2'
  }

  return (
    <Link
      to={path}
      className={`rounded-lg hover:scale-105
        text-base md:text-lg font-semibold
        flex justify-center items-center
        ${homeBtnSelected(path)}
        ${path !== '/' && 'w-1/2 my-2 px-4 py-1.5 bg-wmgYellow shadow-inyellfocus text-wmgBrown'}
        ${path === '/' && 'w-fit rounded-[100%] p-2'}`}
    >
      {path !== '/' && path.toUpperCase()}
      {path === '/' && <i className="fa-solid fa-house"></i>}
    </Link>
  )
}

export default PageLink
