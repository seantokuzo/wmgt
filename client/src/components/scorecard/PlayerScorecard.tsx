import { useSeasonContext } from 'context/season/seasonContext'
import { PlayerRoundInterface } from 'data/round-data/roundTypes'
import { scoreDecoration } from './scorecardUtils'
import { nanoid } from 'nanoid'
import { useAppContext } from 'context/appContext'
import { holeSlotSizes } from './CourseScorecard'

type Props = {
  playerRound: PlayerRoundInterface
  coursePars: number[]
  aces?: boolean
}

const PlayerScorecard: React.FC<Props> = ({ playerRound, coursePars, aces }) => {
  const { darkMode, windowSize } = useAppContext()
  const {
    roundDetailsMode,
    showEasyCourse,
    toggleCourse,
    showScoreTracker,
    showFrontNine,
    toggleScorecardNine
  } = useSeasonContext()
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

  // if (aces) {
  //   if (windowSize.width < 768) {
  //     if (showEasyCourse) {
  //       if (!playerRound.easyScorecard.some((s) => s === 1)) return <></>
  //     }
  //     if (!playerRound.hardScorecard.some((s) => s === 1)) return <></>
  //   }
  // }

  if (aces) {
    if (windowSize.width < 768) {
      if (!scorecard.some((s) => s === 1)) return <></>
    }
  }

  return (
    <div
      className="w-full max-w-6xl min-h-10 my-1 px-0 sm:px-2 md:px-0
      flex justify-between items-center cursor-pointer"
      onClick={() => (windowSize.width <= 768 ? toggleScorecardNine() : toggleCourse())}
    >
      {/* ****** THE PLAYER NAME ****** */}
      <div
        className="w-[25%] max-w-1/10 pr-2
        text-xxxs tracking-tighter
        sm:text-xxs sm:tracking-tight
        md:text-xs md:tracking-normal
        lg:text-base 
        overflow-hidden
        flex justify-end"
      >
        {playerRound.player}
      </div>
      {/* ****** ALL HOLE SCORES DIV ****** */}
      <div className="w-full flex justify-between items-center px-0 sm:px-2">
        {mapThisScore.map((score, i) => (
          <div
            className={`${holeSlotSizes}
            flex flex-col justify-center items-center`}
            title={`${otherScoreMap[i]}`}
            key={nanoid()}
          >
            <div className="">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
              ${!aces && scoreDecoration(whichHoleScores[i], true, darkMode)}
              flex flex-col justify-center items-center`}
              >
                <div
                  className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6
                ${!aces && scoreDecoration(whichHoleScores[i], false, darkMode)}
                ${showScoreTracker ? 'text-xxxs sm:text-xs' : 'text-xxs sm:text-sm'}
                ${score === 1 && 'bg-red-600'}
                ${aces && 'rounded-full'}
                flex flex-col justify-center items-center`}
                >
                  {aces && score === 1 ? score : aces ? '' : score}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ****** COURSE TOTAL ****** */}
      <div
        className="w-12 sm:w-14 md:w-18 lg:w-20
        flex justify-center items-center"
      >
        <div
          className={`w-4/5 p-1 md:p-2
          border-l-2 border-b-2 rounded-md
          ${showEasyCourse ? 'border-orange-300' : 'border-indigo-700'}
          text-xxxs sm:text-xs
          flex justify-center items-center
          `}
        >
          {playerScore}
        </div>
      </div>
      {/* ****** ROUND TOTAL ****** */}
      <div className="w-12 sm:w-14 md:w-18 lg:w-20 flex justify-center text-center">
        <div
          className={`w-4/5 p-1 md:p-2
          border-l-2 border-b-2 rounded-md
          border-red-400
          text-xxxs sm:text-xs`}
        >
          {roundDetailsMode === 'aces' ? playerRound.numHoleInOne : playerRound.totalToPar}
        </div>
      </div>
      {/* ****** ROUND RANK ****** */}
      <div className="w-12 sm:w-14 md:w-18 lg:w-20 flex justify-center text-center">
        <div
          className={`w-4/5 p-1 md:p-2
          text-xxxs sm:text-xs
          rounded-md
          ${
            playerRound.roundRank === 1
              ? 'bg-amber-400 shadow-insetgold font-bold text-black'
              : playerRound.roundRank === 2
              ? 'bg-slate-400 shadow-insetsilver font-bold text-black'
              : playerRound.roundRank === 3
              ? 'bg-amber-700 shadow-insetbronze font-bold text-black'
              : playerRound.roundRank <= 10
              ? 'bg-lime-400 shadow-insetlime font-bold text-black'
              : playerRound.roundRank <= 20
              ? 'border-l-2 border-b-2 border-emerald-400'
              : playerRound.roundRank <= 30
              ? 'border-l-2 border-b-2 border-violet-400'
              : 'border-l-2 border-b-2'
          }`}
        >
          {playerRound.roundRank}
        </div>
      </div>
    </div>
  )
}

export default PlayerScorecard
