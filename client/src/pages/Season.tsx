import { Outlet, useLocation } from 'react-router-dom'
import SeasonMenu from '../components/season/SeasonMenu'
import { season7Data } from 'data/round-data/s7-round-data'
import { season6Data } from 'data/round-data/s6-round-data'
import { useEffect } from 'react'
import { useSeasonContext } from 'context/season/seasonContext'

const Season: React.FC = () => {
  const { pathname } = useLocation()
  const { viewCourse, viewFrontNine, viewScorecard } = useSeasonContext()

  useEffect(() => {
    viewCourse('easy')
    viewFrontNine()
    viewScorecard()
    // eslint-disable-next-line
  }, [pathname])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {pathname === '/season' && (
        <>
          <SeasonMenu seasonData={season6Data} />
          <SeasonMenu seasonData={season7Data} />
        </>
      )}
      <Outlet />
    </div>
  )
}

export default Season
