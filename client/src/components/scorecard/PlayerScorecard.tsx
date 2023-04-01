import { useSeasonContext } from 'context/season/seasonContext'
import { PlayerRoundInterface, RoundIdentifier } from 'data/round-data/roundTypes'
import { scoreDecoration } from './scorecardUtils'
import { nanoid } from 'nanoid'
import { useAppContext } from 'context/appContext'
import { holeSlotSizes } from './CourseScorecard'
import { DataGod } from 'data/dataGod'

type Props = {
  playerRound: PlayerRoundInterface
  coursePars: number[]
  roundObj: RoundIdentifier
  acesData?: { easyCourseNumAces: number[]; hardCourseNumAces: number[] }
}

export const holeNameParColWidth = 'w-[25%] sm:w-[25%] md:w-[25%] lg:w-[26%] pr-2 flex justify-end'

const PlayerScorecard: React.FC<Props> = ({ playerRound, coursePars, roundObj, acesData }) => {
  const { userPlayer, darkMode, windowSize } = useAppContext()
  const {
    roundDetailsMode,
    showEasyCourse,
    toggleCourse,
    showScoreTracker,
    showFrontNine,
    toggleScorecardNine
  } = useSeasonContext()
  const scorecard = showEasyCourse ? playerRound.easyScorecard : playerRound.hardScorecard
  // const playerScore = scorecard.reduce((a, b) => a + b, 0) - coursePars.reduce((a, b) => a + b, 0)
  const playerScore = showEasyCourse ? playerRound.easyRoundScore : playerRound.hardRoundScore

  const scoresToMap = DataGod.getPlayerScorecard(
    'map',
    scorecard,
    coursePars,
    playerRound,
    roundDetailsMode,
    windowSize.width,
    showEasyCourse,
    showScoreTracker,
    showFrontNine
  )
  const scoresForHoverTitle = DataGod.getPlayerScorecard(
    'hover',
    scorecard,
    coursePars,
    playerRound,
    roundDetailsMode,
    windowSize.width,
    showEasyCourse,
    showScoreTracker,
    showFrontNine
  )
  const scoresForDecoration = DataGod.getPlayerScorecard(
    'decoration',
    scorecard,
    coursePars,
    playerRound,
    roundDetailsMode,
    windowSize.width,
    showEasyCourse,
    showScoreTracker,
    showFrontNine
  )

  const scoreToDisplay = (score: number, index: number) => {
    if (!acesData) return score
    const acesPerHole = showEasyCourse ? acesData.easyCourseNumAces : acesData.hardCourseNumAces
    if (score === 1) {
      if (windowSize.width < 768) {
        if (showFrontNine) {
          if (acesPerHole.slice(0, 9)[index] === 1) return '🌵'
          if (acesPerHole.slice(0, 9)[index] === 2) return '🦆'
          return score
        }
        if (acesPerHole.slice(9)[index] === 1) return '🌵'
        if (acesPerHole.slice(9)[index] === 2) return '🦆'
        return score
      }
      if (acesPerHole[index] === 1) return '🌵'
      if (acesPerHole[index] === 2) return '🦆'
      return score
    }
    return ''
  }

  if (acesData) {
    if (windowSize.width < 768) {
      if (!scorecard.some((s) => s === 1)) return <></>
    }
  }

  const acePhrases = [
    'Nice',
    'Wow look at you',
    "Ain't no thang",
    'There it is',
    'Sweeeet',
    'Holy guacamole',
    'But how?',
    'Holy 💩!'
  ]

  const { season, round } = roundObj

  return (
    <div
      className={`w-full max-w-6xl min-h-10 my-1 px-0 sm:px-2 md:px-0
      flex justify-between items-center
      ${roundDetailsMode !== 'aces' && 'cursor-pointer'}`}
      onClick={() => {
        windowSize.width <= 768 || roundDetailsMode === 'easy' || roundDetailsMode === 'hard'
          ? toggleScorecardNine()
          : toggleCourse()
      }}
    >
      {/* ****** THE PLAYER NAME ****** */}
      <div
        className={`${holeNameParColWidth}
        text-xxxs tracking-tighter
        sm:text-xxs sm:tracking-tight
        md:text-xs md:tracking-normal
        lg:text-base
        ${
          userPlayer &&
          userPlayer === playerRound.player &&
          `bgfade-s${season} border-b-2 brdr-s${season} rounded-sm py-1`
        }
        overflow-hidden`}
      >
        {playerRound.player}
        {DataGod.getRoundDiamondWinner(roundObj).findIndex(
          (r) => r.player === playerRound.player
        ) >= 0 &&
          roundDetailsMode === 'aces' &&
          ' 💎'}
      </div>
      {/* ****** ALL HOLE SCORES DIV ****** */}
      <div className="w-full flex justify-between items-center px-0 sm:px-2">
        {scoresToMap.map((score, i) => (
          <div
            className={`${holeSlotSizes}
            flex flex-col justify-center items-center`}
            title={`${
              roundDetailsMode !== 'aces'
                ? scoresForHoverTitle[i]
                : scoreToDisplay(score, i) === '🌵' || scoreToDisplay(score, i) === '🦆'
                ? acePhrases[Math.floor(Math.random() * acePhrases.length)]
                : ''
            }`}
            key={nanoid()}
          >
            <div className="">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
                ${
                  !acesData &&
                  scoreDecoration(
                    scoresForDecoration[i],
                    true,
                    darkMode,
                    0 - coursePars[i] === scoresForDecoration[i]
                  )
                }
                ${
                  scoreToDisplay(score, i) === '🌵'
                    ? 'bg-sh-gold rounded-full cursor-pointer'
                    : scoreToDisplay(score, i) === '🦆'
                    ? 'bg-sh-silver shadow-insetsilver rounded-full cursor-pointer'
                    : ''
                }
                flex flex-col justify-center items-center`}
              >
                <div
                  className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6
                  ${
                    !acesData &&
                    scoreDecoration(
                      scoresForDecoration[i],
                      false,
                      darkMode,
                      0 - coursePars[i] === scoresForDecoration[i]
                    )
                  }
                  ${showScoreTracker ? 'text-xxxs sm:text-xs' : 'text-xxs sm:text-sm'}
                  ${
                    scoreToDisplay(score, i) === '🌵' || scoreToDisplay(score, i) === '🦆'
                      ? ''
                      : !showScoreTracker && score === 1
                      ? 'ace text-white'
                      : showScoreTracker && scoresForHoverTitle[i] === 1
                      ? 'ace text-white'
                      : ''
                  }
                  ${acesData && 'rounded-full'}
                  flex flex-col justify-center items-center`}
                >
                  {scoreToDisplay(score, i) === 0 && !showScoreTracker
                    ? 'X'
                    : scoreToDisplay(score, i) === 0
                    ? 0
                    : scoreToDisplay(score, i)
                    ? scoreToDisplay(score, i)
                    : ''}
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
          ${showEasyCourse ? 'brdr-easyCourse' : 'brdr-hardCourse'}
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
          brdr-underPar
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
          rounded-md font-bold
          ${
            playerRound.roundRank === 1
              ? 'bg-sh-gold font-bold text-black'
              : playerRound.roundRank === 2
              ? 'bg-sh-silver font-bold text-black'
              : playerRound.roundRank === 3
              ? 'bg-sh-bronze font-bold text-black'
              : playerRound.roundRank <= 10
              ? 'bg-sh-topTenGreen text-black'
              : darkMode
              ? 'border-l-2 border-b-2 border-white'
              : 'border-l-2 border-b-2 border-black'
          }`}
        >
          {playerRound.roundRank}
        </div>
      </div>
    </div>
  )
}

export default PlayerScorecard
