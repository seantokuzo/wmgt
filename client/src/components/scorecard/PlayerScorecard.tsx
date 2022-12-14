import { useSeasonContext } from 'context/season/seasonContext'
import { PlayerRoundInterface } from 'data/round-data/roundTypes'
import { scoreDecoration } from './scorecardUtils'
import { nanoid } from 'nanoid'
import { useAppContext } from 'context/appContext'

type Props = {
  playerRound: PlayerRoundInterface
  coursePars: number[]
}

const PlayerScorecard: React.FC<Props> = ({ playerRound, coursePars }) => {
  const { darkMode, windowSize } = useAppContext()
  const { roundDetailsMode, showEasyCourse, showScoreTracker, showFrontNine, toggleScorecardNine } =
    useSeasonContext()
  const scorecard = showEasyCourse ? playerRound.easyScorecard : playerRound.hardScorecard
  const playerScore = scorecard.reduce((a, b) => a + b, 0) - coursePars.reduce((a, b) => a + b, 0)
  const holeScores = scorecard.map((score, i) => score - coursePars[i])
  const startingCount =
    showEasyCourse || roundDetailsMode === 'hard' ? 0 : playerRound.easyRoundScore
  const scoreTracker = holeScores.map((score, i) => {
    return holeScores.slice(0, i + 1).reduce((sum, curr) => sum + curr, startingCount)
  })

  const scoreToMapFull = showScoreTracker ? scoreTracker : scorecard
  const scoreToMapNine = showFrontNine ? scoreToMapFull.slice(0, 9) : scoreToMapFull.slice(9)
  const otherScoreFull = !showScoreTracker ? scoreTracker : scorecard
  const otherScoreNine = showFrontNine ? otherScoreFull.slice(0, 9) : otherScoreFull.slice(9)
  const holeScoresNine = showFrontNine ? holeScores.slice(0, 9) : holeScores.slice(9)

  const otherScoreMap = windowSize.width > 768 ? otherScoreFull : otherScoreNine
  const mapThisScore = windowSize.width > 768 ? scoreToMapFull : scoreToMapNine
  const whichHoleScores = windowSize.width > 768 ? holeScores : holeScoresNine

  return (
    <div
      className="w-full max-w-6xl min-h-10 my-1 text-xxs
      flex justify-between items-center"
      onClick={() => windowSize.width <= 768 && toggleScorecardNine()}
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
      <div className="w-full flex justify-between items-center px-0 sm:px-2">
        {mapThisScore.map((score, i) => (
          <div
            className={`w-5 md:w-7 lg:w-9
            flex flex-col justify-center items-center`}
            title={`${otherScoreMap[i]}`}
            key={nanoid()}
          >
            <div className="">
              <div
                className={`w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8
              ${scoreDecoration(whichHoleScores[i], true, darkMode)}
              flex flex-col justify-center items-center`}
              >
                <div
                  className={`w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6
                ${scoreDecoration(whichHoleScores[i], false, darkMode)}
                ${showScoreTracker ? 'text-xxxs sm:text-xs' : 'text-xxs sm:text-sm'}
                flex flex-col justify-center items-center`}
                >
                  {score}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ****** COURSE TOTAL ****** */}
      <div
        className="w-14 md:w-20
        flex justify-center items-center"
      >
        <div
          className={`p-1 md:p-2
          border-l-2 border-b-2 rounded-md
          text-xxxs sm:text-xs
          flex justify-center items-center
          `}
        >
          {playerScore}
        </div>
      </div>
      {/* ****** ROUND TOTAL ****** */}
      <div className="w-14 md:w-20 flex justify-center text-center">
        <div
          className={`p-1 md:p-2
          border-l-2 border-b-2 rounded-md
          text-xxxs sm:text-xs`}
        >
          {playerRound.totalToPar}
        </div>
      </div>
      {/* ****** ROUND RANK ****** */}
      <div className="w-14 md:w-20 flex justify-center text-center">
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

export default PlayerScorecard
