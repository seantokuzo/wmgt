import { Link } from 'react-router-dom'

type Props = {
  season: number
}

const SeasonSummary: React.FC<Props> = ({ season }) => {
  console.log(season)

  return (
    <div
      className="w-full
      flex flex-col justify-center items-center"
    >
      <Link
        to="/season"
        className="px-4 py-2 text-2xl md:text-3xl font-semibold
          flex justify-center items-center hover:shadow-lg hover:scale-105
          bg-wmgBrown shadow-insetbrown text-wmgYellow rounded-t-md"
      >
        SEASON MENU
      </Link>
      SeasonSummary
    </div>
  )
}

export default SeasonSummary
