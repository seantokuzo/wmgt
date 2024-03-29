import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { scoreDecoration } from './scorecardUtils'

const ScorecardLegend = () => {
  const { darkMode } = useAppContext()
  const { roundDetailsMode } = useSeasonContext()

  if (roundDetailsMode === 'aces' || roundDetailsMode === 'badges') {
    return (
      <div className="w-auto my-6 flex flex-col justify-center items-center">
        <p className="w-full mt-1 text-center text-red-400 text-xs sm:text-sm md:text-base">
          {roundDetailsMode === 'aces' ? 'Ace Badges by:' : 'Rare Score Badges by:'}
        </p>
        <div
          className="w-fit py-1 px-3 my-1
          bg-sh-gold border-2 brdr-gold rounded-md
          text-xs sm:text-sm text-center text-black font-semibold"
        >
          {'steven_T'}
        </div>
        {/* <p className="w-full border-b-2 border-red-400"></p> */}
        <div
          className="w-auto mt-2
          text-xxxs sm:text-xs md:text-sm uppercase
          flex justify-evenly items-start"
        >
          {roundDetailsMode === 'aces' && (
            <div className="w-1/2 flex flex-col justify-center items-center m-1">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
              text-xxs sm:text-xs md:text-sm lg:text-base
              flex flex-col justify-center items-center`}
              >
                💎
              </div>
              <div className="w-1/2 sm:w-2/3 text-center mt-1">MOST ACES IN ROUND</div>
            </div>
          )}
          <div className="w-1/2 flex flex-col justify-center items-center m-1">
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
              bg-sh-gold rounded-full
              text-xxs sm:text-xs md:text-sm
              flex flex-col justify-center items-center`}
            >
              🌵
            </div>
            <div className="w-1/2 sm:w-2/3 text-center mt-1">ONLY ACE ON HOLE</div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center m-1">
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
              bg-sh-silver rounded-full            
              text-xxs sm:text-xs md:text-sm
              flex flex-col justify-center items-center`}
            >
              🦆
            </div>
            <div className="w-1/2 sm:w-2/3 text-center mt-1">ONE OF TWO ACES ON HOLE</div>
          </div>
          {roundDetailsMode === 'badges' && (
            <div className="w-1/2 flex flex-col justify-center items-center m-1">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
                bg-sh-bronze rounded-full            
                text-xxs sm:text-xs md:text-sm
                flex flex-col justify-center items-center`}
              >
                🪲
              </div>
              <div className="w-1/2 sm:w-2/3 text-center mt-1">
                NON-ACE LOW SCORE (MAX 3 PLAYERS)
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  const legendItemEl = (label: string, score: number) => {
    return (
      <div
        className="min-w-min my-1 mx-3 md:mx-4 lg:mx-5
        flex flex-col justify-center items-center"
      >
        <div className="mb-1">{label}</div>
        <div
          className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(score, true, darkMode, false)}
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-4 md:w-6 h-4 md:h-6 ${
              label === 'ACE' ? 'ace rounded-full' : scoreDecoration(score, false, darkMode, false)
            }
            flex flex-col justify-center items-center`}
          >
            {score}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-[80%] max-w-xl my-6
      text-xxs sm:text-xs md:text-sm text-center
      flex flex-wrap justify-center items-center"
    >
      <div className="min-w-max flex justify-center items-end my-1">
        {legendItemEl('ACE', 1)}
        {legendItemEl('-5 OR LESS', -5)}
        {legendItemEl('CONDOR', -4)}
      </div>
      <div className="min-w-max flex justify-center items-end my-1">
        {legendItemEl('ALBATROSS', -3)}
        {legendItemEl('EAGLE', -2)}
        {legendItemEl('BIRDIE', -1)}
      </div>
      <div className="min-w-max flex justify-center items-end my-1">
        {legendItemEl('BOGEY', 1)}
        {legendItemEl('DOUBLE BOGEY', 2)}
        {legendItemEl('TRIPLE BOGEY', 3)}
        {legendItemEl('STROKE OUT', 4)}
      </div>
    </div>
  )
}

export default ScorecardLegend
