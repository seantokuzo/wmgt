import { Outlet, useLocation } from 'react-router-dom'
import SeasonMenu from '../components/season/SeasonMenu'
import { season7Data } from 'data/round-data/s7-round-data'
import { season6Data } from 'data/in_progress/s6r12_raw-data'

const Season: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {pathname === '/season' && <SeasonMenu seasonData={season7Data} />}
      <Outlet />
    </div>
  )
}

export default Season