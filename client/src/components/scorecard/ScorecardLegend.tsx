import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { scoreDecoration } from './scorecardUtils'

const ScorecardLegend = () => {
  const { darkMode } = useAppContext()
  const { roundDetailsMode } = useSeasonContext()

  if (roundDetailsMode === 'aces') {
    return (
      <div
        className="w-auto
         text-xxxs sm:text-xs md:text-sm uppercase
        flex sm:flex-row justify-evenly items-center"
      >
        <div className="flex flex-col justify-center items-center m-1">
          <div className="w-2/5 sm:w-2/3 text-center mb-1">ONLY ACE ON HOLE</div>
          <div
            className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
            bg-amber-400 shadow-insetgold rounded-full
            flex flex-col justify-center items-center`}
          >
            🌵
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-1">
          <div className="w-2/5 sm:w-2/3 text-center mb-1">ONE OF TWO ACES ON HOLE</div>
          <div
            className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
            bg-slate-400 shadow-insetsilver rounded-full            
            flex flex-col justify-center items-center`}
          >
            🦆
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-[80%]
      text-xxs sm:text-xs md:text-sm text-center
      flex flex-wrap justify-center items-center"
    >
      <div className="w-full max-w-fit flex justify-evenly items-end">
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">HOLE-IN-ONE</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 rounded-[50%]
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-4 md:w-6 h-4 md:h-6 bg-red-600 rounded-full
            flex flex-col justify-center items-center`}
            >
              1
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">{'-5 OR LESS'}</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(-5, true, darkMode)}
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-4 md:w-6 h-4 md:h-6 ${scoreDecoration(-5, false, darkMode)}
            flex flex-col justify-center items-center`}
            >
              -5
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">CONDOR</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(-4, true, darkMode)}
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-4 md:w-6 h-4 md:h-6 ${scoreDecoration(-4, false, darkMode)}
            flex flex-col justify-center items-center`}
            >
              -4
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-fit flex justify-evenly items-end">
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">ALBATROSS</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(-3, true, darkMode)}
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-4 md:w-6 h-4 md:h-6 ${scoreDecoration(-3, false, darkMode)}
            flex flex-col justify-center items-center`}
            >
              -3
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">EAGLE</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(-2, true, darkMode)}
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-4 md:w-6 h-4 md:h-6 ${scoreDecoration(-2, false, darkMode)}
            flex flex-col justify-center items-center`}
            >
              -2
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">BIRDIE</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(-1, true, darkMode)}
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-4 md:w-6 h-4 md:h-6 ${scoreDecoration(-1, false, darkMode)}
            flex flex-col justify-center items-center`}
            >
              -1
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-fit flex justify-evenly items-end">
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">BOGEY</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(1, true, darkMode)}
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-4 md:w-6 h-4 md:h-6 ${scoreDecoration(1, false, darkMode)}
            flex flex-col justify-center items-center`}
            >
              +1
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">DOUBLE BOGEY</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(2, true, darkMode)}
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-4 md:w-6 h-4 md:h-6 ${scoreDecoration(2, false, darkMode)}
            flex flex-col justify-center items-center`}
            >
              +2
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">TRIPLE BOGEY</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(3, true, darkMode)}
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-4 md:w-6 h-4 md:h-6 ${scoreDecoration(3, false, darkMode)}
            flex flex-col justify-center items-center`}
            >
              +3
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-1 min-w-min mx-3 md:mx-4 lg:mx-5">
          <div className="mb-1">STROKE OUT</div>
          <div
            className={`w-5 md:w-8 h-5 md:h-8 ${scoreDecoration(4, true, darkMode)}
          flex flex-col justify-center items-center`}
          >
            <div
              className={`w-5 md:w-6 h-5 md:h-6 ${scoreDecoration(4, false, darkMode)}
            flex flex-col justify-center items-center`}
            >
              +4
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScorecardLegend
