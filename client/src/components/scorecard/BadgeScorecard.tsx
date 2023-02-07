import { BadgeRound } from 'data/round-data/roundTypes'
import { useSeasonContext } from 'context/season/seasonContext'
import { nanoid } from 'nanoid'
import { useAppContext } from 'context/appContext'
import { holeSlotSizes } from './CourseScorecard'
import { DataGod } from 'data/dataGod'
import { useLocation } from 'react-router-dom'

type Props = {
  playerRound: BadgeRound
}

export const holeNameParColWidth = 'w-[25%] sm:w-[25%] md:w-[25%] lg:w-[26%] pr-2 flex justify-end'

const BadgeScorecard: React.FC<Props> = ({ playerRound }) => {
  const { userPlayer, darkMode, windowSize } = useAppContext()
  const { roundDetailsMode, showEasyCourse, toggleCourse, showFrontNine, toggleScorecardNine } =
    useSeasonContext()
  const { pathname } = useLocation()
  const scorecard = () => {
    if (showEasyCourse) {
      if (windowSize.width < 768) {
        return showFrontNine
          ? playerRound.easyScorecard.slice(0, 9)
          : playerRound.easyScorecard.slice(9)
      }
      return playerRound.easyScorecard
    }
    if (windowSize.width < 768) {
      return showFrontNine
        ? playerRound.hardScorecard.slice(0, 9)
        : playerRound.hardScorecard.slice(9)
    }
    return playerRound.hardScorecard
  }

  const playerScore = showEasyCourse ? playerRound.easyRoundScore : playerRound.hardRoundScore

  const season = +pathname.split('/season/')[1].split('r')[0].split('s')[1]

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
      </div>
      {/* ****** ALL HOLE SCORES DIV ****** */}
      <div className="w-full flex justify-between items-center px-0 sm:px-2">
        {scorecard().map((score, i) => (
          <div
            className={`${holeSlotSizes}
            flex flex-col justify-center items-center`}
            key={nanoid()}
          >
            <div className="">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
              ${
                score === '🌵'
                  ? 'bg-sh-gold rounded-full cursor-pointer'
                  : score === '🦆'
                  ? 'bg-sh-silver shadow-insetsilver rounded-full cursor-pointer'
                  : score === '🪲'
                  ? 'bg-sh-bronze shadow-insetbronze rounded-full cursor-pointer'
                  : ''
              }
              flex flex-col justify-center items-center`}
              >
                <div
                  className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6
                  text-xxs sm:text-xs md:text-sm
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

export default BadgeScorecard
