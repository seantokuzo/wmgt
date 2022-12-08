import { useSeasonContext } from 'context/season/seasonContext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RoundDataInterface } from '../../data/round-data/s7-round-data'

type Props = {
  seasonData: RoundDataInterface[]
}

const SeasonMenu: React.FC<Props> = ({ seasonData }) => {
  const { changeRoundDetailsMode } = useSeasonContext()
  useEffect(() => {
    changeRoundDetailsMode('full')
    // eslint-disable-next-line
  }, [])

  return (
    <div
      className="w-full max-w-xl rounded-lg px-2 py-4 bg-[#38280e] text-[#f8ff71]
      flex flex-wrap justify-center items-center font-scorenum"
    >
      <h2 className="text-3xl font-semibold my-3">{`SEASON ${seasonData[0].season}`}</h2>
      <div
        className="w-full
        flex flex-wrap justify-evenly items-center"
      >
        {seasonData.map((round, i) => (
          <Link
            to={`/season/s${round.season}r${round.round}`}
            className="bg-[#f8ff71] text-[#38280e] m-2 px-6 py-2 rounded-xl font-bold"
            key={`${round.easyCourse}-${i}`}
          >
            {`ROUND ${round.round}`}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SeasonMenu
