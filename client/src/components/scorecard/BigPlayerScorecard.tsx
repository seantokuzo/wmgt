import { useSeasonContext } from 'context/season/seasonContext'
import { PlayerRoundInterface } from 'data/round-data/s7-round-data'
import { nanoid } from 'nanoid'

type Props = {
  playerRound: PlayerRoundInterface
  coursePars: number[]
}

const BigPlayerScorecard: React.FC<Props> = ({ playerRound, coursePars }) => {
  const { showEasyCourse, showScoreTracker } = useSeasonContext()
  const scorecard = showEasyCourse ? playerRound.easyScorecard : playerRound.hardScorecard
  const playerScore = scorecard.reduce((a, b) => a + b, 0) - coursePars.reduce((a, b) => a + b, 0)
  const holeScores = scorecard.map((score, i) => score - coursePars[i])
  const startingCount = showEasyCourse ? 0 : playerRound.easyRoundScore
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
      decorations = decorations + ' border-lime-700'
      if (outer) return ''
    }
    if (score >= 2) {
      decorations = decorations + ' border-lime-700'
    }
    return decorations
  }

  const scoreToMap = showScoreTracker ? scoreTracker : scorecard

  return (
    <div className="w-full max-w-6xl min-h-10 my-1 text-xxs flex justify-between items-center">
      {/* ****** THE PLAYER NAME ****** */}
      <div className="w-[20%] md:text-xs lg:text-base overflow-hidden max-w-1/10 pr-2 flex justify-end">
        {playerRound.player}
      </div>
      {/* ****** ALL HOLE SCORES DIV ****** */}
      <div className="w-full flex justify-between items-center">
        {scoreToMap.map((score, i) => (
          <div
            className={`w-full
            flex flex-col justify-center items-center`}
            title={!showScoreTracker ? `${scoreTracker[i]}` : `${scorecard[i]}`}
            key={nanoid()}
          >
            <div
              className={`lg:w-9 lg:h-9 md:w-7 md:h-7
              ${scoreDecoration(holeScores[i], true)}
              flex flex-col justify-center items-center`}
            >
              <div
                className={`lg:w-7 lg:h-7 md:w-5 md:h-5
                ${scoreDecoration(holeScores[i], false)}
                ${score === 1 && !showScoreTracker && 'bg-red-400 rounded-[50%]'}
                ${showScoreTracker ? 'md:text-xxs lg:text-xxs' : 'md:text-xxs lg:text-xs'}
                flex flex-col justify-center items-center`}
              >
                {score}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ****** COURSE TOTAL ****** */}
      <div
        className="w-20
        flex justify-center items-center"
      >
        <div
          className={`w-3/4 py-2 lg:text-base
          border-l-2 border-b-2 rounded-md
          flex justify-center items-center
          `}
        >
          {playerScore}
        </div>
      </div>
      {/* ****** ROUND TOTAL ****** */}
      <div className="w-20 flex justify-center text-center">
        <div
          className={`w-3/4 lg:text-base
          border-l-2 border-b-2 rounded-md p-2`}
        >
          {playerRound.totalToPar}
        </div>
      </div>
      {/* ****** ROUND RANK ****** */}
      <div className="w-20 flex justify-center text-center">
        <div
          className={`w-3/4 py-2 border-l-2 border-b-2 rounded-md lg:text-base
          ${
            playerRound.roundRank === 1
              ? 'bg-amber-400/[0.85] border-amber-500/[0.25]'
              : playerRound.roundRank === 2
              ? 'bg-slate-400/[0.85] border-slate-500/[0.25]'
              : playerRound.roundRank === 3
              ? 'bg-amber-700/[0.85] border-amber-800/[0.25]'
              : playerRound.roundRank <= 10
              ? 'border-red-400/[0.75]'
              : ''
          }`}
        >
          {playerRound.roundRank}
        </div>
      </div>
    </div>
  )
}

export default BigPlayerScorecard
