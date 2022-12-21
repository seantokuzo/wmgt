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
  console.log(bgImg)

  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center h-auto md:h-[90vh]
      flex flex-col justify-center items-center"
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
