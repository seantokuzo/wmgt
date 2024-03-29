import CoursesMenu from '../components/course/CoursesMenu'
import { Outlet, useLocation } from 'react-router-dom'
import { courseFullImgLink } from 'data/course-data/wmgt-course-data'

const Course: React.FC = () => {
  const { pathname } = useLocation()

  const bgImg =
    pathname !== '/course'
      ? `url(${courseFullImgLink.replaceAll(
          '<COURSE>',
          pathname.split('/course/')[1].toUpperCase()
        )})`
      : ''

  const bgHeight = pathname !== '/course' && 'h-auto sm:min-h-[80vh]'

  return (
    <div
      className={`w-full max-w-7xl bg-no-repeat bg-cover bg-center
      sh-basic
      flex flex-col justify-center items-center
      ${bgHeight}`}
      style={{
        backgroundImage: bgImg
      }}
    >
      {pathname === '/course' && <CoursesMenu />}
      <Outlet />
    </div>
  )
}

export default Course
