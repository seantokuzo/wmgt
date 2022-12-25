import ComingSoon from 'components/ComingSoon'
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
        className={`px-4 py-2 text-2xl md:text-3xl font-semibold
          flex justify-center items-center hover:shadow-lg hover:scale-105
          text-white rounded-t-md
          ${
            season === 6 ? 'bg-emerald-500 shadow-insetemerald' : 'bg-indigo-500 shadow-insetindigo'
          }`}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <ComingSoon text="Where the F is my summary" color={season === 6 ? 'emerald' : 'indigo'} />
    </div>
  )
}

export default SeasonSummary
