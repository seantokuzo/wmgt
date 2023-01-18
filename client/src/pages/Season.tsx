import { Outlet, useLocation } from 'react-router-dom'
import SeasonMenu from '../components/season/SeasonMenu'
import { useEffect } from 'react'
import { useSeasonContext } from 'context/season/seasonContext'
import { CURRENT_SEASON } from 'utils/constants'

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
          <SeasonMenu season={CURRENT_SEASON} />
          <SeasonMenu season={7} />
          <SeasonMenu season={6} />
          <SeasonMenu season={5} />
          <SeasonMenu season={4} />
          <SeasonMenu season={3} />
          <SeasonMenu season={2} />
          <SeasonMenu season={1} />
        </>
      )}
      <Outlet />
    </div>
  )
}

export default Season
