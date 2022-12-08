import CoursesMenu from '../components/course/CoursesMenu'
import { Outlet, useLocation } from 'react-router-dom'

const Course: React.FC = () => {
  const { pathname } = useLocation()

  console.log(pathname)

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {pathname === '/course' && <CoursesMenu />}
      <Outlet />
    </div>
  )
}

export default Course
