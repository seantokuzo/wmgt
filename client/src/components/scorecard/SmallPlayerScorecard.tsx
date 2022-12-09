import { useSeasonContext } from 'context/season/seasonContext'
import { PlayerRoundInterface } from 'data/round-data/s7-round-data'
import { nanoid } from 'nanoid'

type Props = {
  playerRound: PlayerRoundInterface
  coursePars: number[]
}

const SmallPlayerScorecard: React.FC<Props> = ({ playerRound, coursePars }) => {
  const { showEasyCourse, showScoreTracker, showFrontNine, toggleScorecardNine } =
    useSeasonContext()
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
      decorations = decorations + ' border-green-600'
      if (outer) return ''
    }
    if (score >= 2) {
      decorations = decorations + ' border-green-600'
    }
    return decorations
  }

  const scoreToMapFull = showScoreTracker ? scoreTracker : scorecard
  const scoreToMapNine = showFrontNine ? scoreToMapFull.slice(0, 9) : scoreToMapFull.slice(9)
  const otherScoreFull = !showScoreTracker ? scoreTracker : scorecard
  const otherScoreNine = showFrontNine ? otherScoreFull.slice(0, 9) : otherScoreFull.slice(9)
  const holeScoresNine = showFrontNine ? holeScores.slice(0, 9) : holeScores.slice(9)

  return (
    <div
      className="w-full max-w-6xl min-h-10 my-1 text-xxs
      flex justify-between items-center"
      onClick={toggleScorecardNine}
    >
      {/* ****** THE PLAYER NAME ****** */}
      <div
        className="w-[25%] md:text-xs lg:text-base max-w-1/10 pr-2
        overflow-hidden
        flex justify-end"
      >
        {playerRound.player}
      </div>
      {/* ****** ALL HOLE SCORES DIV ****** */}
      <div className="w-full flex justify-between items-center px-0 sm:px-1">
        {scoreToMapNine.map((score, i) => (
          <div
            className={`w-[5%]]
            flex flex-col justify-center items-center`}
            title={`${otherScoreNine[i]}`}
            key={nanoid()}
          >
            <div
              className={`w-4 h-4 sm:w-7 sm:h-7
              ${scoreDecoration(holeScoresNine[i], true)}
              flex flex-col justify-center items-center`}
            >
              <div
                className={`w-3 h-3 sm:w-5 sm:h-5
                ${scoreDecoration(holeScoresNine[i], false)}
                ${score === 1 && !showScoreTracker && 'bg-red-400 rounded-[50%]'}
                ${showScoreTracker ? 'text-xxxs sm:text-xs' : 'text-xxs sm:text-sm'}
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
        className="w-14
        flex justify-center items-center"
      >
        <div
          className={`p-1
          border-l-2 border-b-2 rounded-md
          text-xxxs sm:text-xs
          flex justify-center items-center
          `}
        >
          {playerScore}
        </div>
      </div>
      {/* ****** ROUND TOTAL ****** */}
      <div className="w-14 flex justify-center text-center">
        <div
          className={`p-1
          border-l-2 border-b-2 rounded-md
          text-xxxs sm:text-xs`}
        >
          {playerRound.totalToPar}
        </div>
      </div>
      {/* ****** ROUND RANK ****** */}
      <div className="w-14 flex justify-center text-center">
        <div
          className={`w-3/4 p-1 border-l-2 border-b-2 rounded-md text-xxxs sm:text-xs
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

export default SmallPlayerScorecard
