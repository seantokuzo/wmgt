import { PlayerRoundInterface } from 'data/round-data/s7-round-data'
import { nanoid } from 'nanoid'

type Props = {
  playerRound: PlayerRoundInterface
  coursePars: number[]
  easy: boolean
}

const PlayerScorecard: React.FC<Props> = ({ playerRound, coursePars, easy }) => {
  const scorecard = easy ? playerRound.easyScorecard : playerRound.hardScorecard
  const playerScore = scorecard.reduce((a, b) => a + b, 0) - coursePars.reduce((a, b) => a + b, 0)

  return (
    <div className="w-full text-lg flex justify-between items-center">
      <div className="w-1/6 text-base overflow-hidden text-ellipsis max-w-1/10 pr-2 flex justify-end">{playerRound.player}</div>
      <div
        className="w-4/5 min-w-4/5
          flex justify-between items-center"
      >
        {scorecard.map((par) => (
          <div
            className="w-12
              flex flex-col justify-center items-center"
            key={nanoid()}
          >
            <div
              className="w-10 h-10 rounded-[50%]
                flex flex-col justify-center items-center"
            >
              {par}
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/12 px-4 text-center">{playerScore}</div>
    </div>
  )
}

export default PlayerScorecard
