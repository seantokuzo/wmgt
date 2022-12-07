import { RoundDetailsMode } from 'components/season/RoundDetails'
import { PlayerRoundInterface } from 'data/round-data/s7-round-data'
import { nanoid } from 'nanoid'

type Props = {
  playerRound: PlayerRoundInterface
  coursePars: number[]
  easy: boolean
  showScoreTracker: boolean
}

const PlayerScorecard: React.FC<Props> = ({ playerRound, coursePars, easy, showScoreTracker }) => {
  const scorecard = easy ? playerRound.easyScorecard : playerRound.hardScorecard
  const playerScore = scorecard.reduce((a, b) => a + b, 0) - coursePars.reduce((a, b) => a + b, 0)
  const holeScores = scorecard.map((score, i) => score - coursePars[i])
  const startingCount = easy ? 0 : playerRound.easyRoundScore
  const scoreTracker = holeScores.map((score, i) => {
    return holeScores.slice(0, i + 1).reduce((sum, curr) => sum + curr, startingCount)
  })

  const scoreDecoration = (score: number, outer: boolean) => {
    if (score === 0) return ''
    let decorations = 'border-[1px]'
    if (score <= -2) {
      decorations = decorations + ' border-red-400 rounded-[50%]'
    }
    if (score === -1) {
      decorations = decorations + ' border-red-400 border-[1px] rounded-[50%]'
      if (outer) return ''
    }
    if (score === 1) {
      decorations = decorations + ' border-green-600'
      if (outer) return ''
    }
    if (score >= 2) {
      decorations = decorations + ' border-green-600'
    }
    return decorations
  }

  const scoreToMap = showScoreTracker ? scoreTracker : scorecard

  return (
    <div className="w-full text-xxs flex justify-between items-center my-1">
      <div className="w-1/6 text-base overflow-hidden max-w-1/10 pr-2 flex justify-end">
        {playerRound.player}
      </div>
      <div
        className="w-4/5 min-w-4/5
          flex justify-between items-center"
      >
        {scoreToMap.map((score, i) => (
          <div
            className={`w-6 h-6 ${scoreDecoration(holeScores[i], true)}
            flex flex-col justify-center items-center`}
            key={nanoid()}
          >
            <div
              className={`w-4 h-4 ${scoreDecoration(holeScores[i], false)} ${
                score === 1 && !showScoreTracker && 'bg-red-400 rounded-[50%]'
              } ${showScoreTracker && 'text-xxxs'}
                flex flex-col justify-center items-center`}
            >
              {score}
            </div>
          </div>
        ))}
      </div>
      <div
        className="px-4
        flex justify-center items-center"
      >
        <p
          className={`flex justify-center items-center border-l-2 border-b-2 rounded-md p-2 ${
            playerScore < 0 ? 'bg-red-400/[0.5]' : playerScore > 0 ? 'bg-green-400/[0.5]' : ''
          }`}
        >
          {playerScore}
        </p>
      </div>
      <div className="text-center px-1">
        <p
          className={`${
            playerScore < 0 ? 'bg-red-400/[0.5]' : playerScore > 0 ? 'bg-green-400/[0.5]' : ''
          } border-l-2 border-b-2 rounded-md p-2`}
        >
          {playerRound.totalToPar}
        </p>
      </div>
      <div className="flex justify-center text-center px-1">
        <p
          className={`w-fit border-l-2 border-b-2 rounded-md px-4 py-2
          ${
            playerRound.roundRank === 1
              ? 'bg-amber-400/[0.75]'
              : playerRound.roundRank === 2
              ? 'bg-slate-400/[0.75]'
              : playerRound.roundRank === 3
              ? 'bg-amber-700/[0.75]'
              : playerRound.roundRank <= 10
              ? 'border-red-400/[0.75]'
              : ''
          }`}
        >
          {playerRound.roundRank}
        </p>
      </div>
    </div>
  )
}

export default PlayerScorecard
