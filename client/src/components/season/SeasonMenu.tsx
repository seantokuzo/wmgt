import { RoundDataInterface } from '../../data/round-data/s7-round-data'
import { SelectedRound } from './Season'

type Props = {
  seasonData: RoundDataInterface[]
  setSelectedRound: React.Dispatch<React.SetStateAction<SelectedRound | '' | ''>>
}

const SeasonMenu: React.FC<Props> = ({ seasonData, setSelectedRound }) => {
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
          <button
            className="bg-[#f8ff71] text-[#38280e] m-2 px-6 py-2 rounded-xl font-bold"
            key={`${round.easyCourse}-${i}`}
            onClick={() => setSelectedRound({ season: round.season, round: round.round })}
          >
            {`ROUND ${round.round}`}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SeasonMenu
