import { useAppContext } from 'context/appContext'
import { useSeasonContext } from 'context/season/seasonContext'
import { scoreDecoration } from './scorecardUtils'

const ScorecardLegend = () => {
  const { darkMode } = useAppContext()
  const { roundDetailsMode } = useSeasonContext()

  if (roundDetailsMode === 'aces') {
    return (
      <div
        className="w-1/2 md:w-[80%]
      flex flex-wrap justify-evenly items center text-xxxs sm:text-xs md:text-sm uppercase"
      >
        <div className="flex flex-col justify-center items-center m-1 min-w-min">
          <div className="mb-1">ONLY ACE ON HOLE</div>
          <div
            className={`w-3 md:w-6 h-3 md:h-6 bg-red-600 rounded-full
          flex flex-col justify-center items-center`}
          >
            🌵
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-1 min-w-min">
          <div className="mb-1">ONE OF TWO ACES ON HOLE</div>
          <div
            className={`w-3 md:w-6 h-3 md:h-6 bg-red-600 rounded-full
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
      className="w-1/2 md:w-[80%]
      flex flex-wrap justify-between items center text-xxxs sm:text-xs md:text-sm"
    >
      <div className="flex flex-col justify-center items-center m-1 min-w-min">
        <div className="mb-1">HOLE-IN-ONE</div>
        <div
          className={`w-4 md:w-8 h-4 md:h-8 rounded-[50%]
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-3 md:w-6 h-3 md:h-6 bg-red-600 rounded-full
          flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-1 min-w-min">
        <div className="mb-1">CONDOR</div>
        <div
          className={`w-4 md:w-8 h-4 md:h-8 ${scoreDecoration(-4, true, darkMode)}
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-3 md:w-6 h-3 md:h-6 ${scoreDecoration(-4, false, darkMode)}
          flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-1 min-w-min">
        <div className="mb-1">ALBATROSS</div>
        <div
          className={`w-4 md:w-8 h-4 md:h-8 ${scoreDecoration(-3, true, darkMode)}
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-3 md:w-6 h-3 md:h-6 ${scoreDecoration(-3, false, darkMode)}
          flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-1 min-w-min">
        <div className="mb-1">EAGLE</div>
        <div
          className={`w-4 md:w-8 h-4 md:h-8 ${scoreDecoration(-2, true, darkMode)}
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-3 md:w-6 h-3 md:h-6 ${scoreDecoration(-2, false, darkMode)}
          flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-1 min-w-min">
        <div className="mb-1">BIRDIE</div>
        <div
          className={`w-4 md:w-8 h-4 md:h-8 ${scoreDecoration(-1, true, darkMode)}
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-3 md:w-6 h-3 md:h-6 ${scoreDecoration(-1, false, darkMode)}
          flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-1 min-w-min">
        <div className="mb-1">BOGEY</div>
        <div
          className={`w-4 md:w-8 h-4 md:h-8 ${scoreDecoration(1, true, darkMode)}
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-3 md:w-6 h-3 md:h-6 ${scoreDecoration(1, false, darkMode)}
          flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-1 min-w-min">
        <div className="mb-1">DOUBLE BOGEY</div>
        <div
          className={`w-4 md:w-8 h-4 md:h-8 ${scoreDecoration(2, true, darkMode)}
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-3 md:w-6 h-3 md:h-6 ${scoreDecoration(2, false, darkMode)}
          flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-1 min-w-min">
        <div className="mb-1">TRIPLE BOGEY</div>
        <div
          className={`w-4 md:w-8 h-4 md:h-8 ${scoreDecoration(3, true, darkMode)}
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-3 md:w-6 h-3 md:h-6 ${scoreDecoration(3, false, darkMode)}
          flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-1 min-w-min">
        <div className="mb-1">STROKE OUT</div>
        <div
          className={`w-4 md:w-8 h-4 md:h-8 ${scoreDecoration(4, true, darkMode)}
          flex flex-col justify-center items-center`}
        >
          <div
            className={`w-3 md:w-6 h-3 md:h-6 ${scoreDecoration(4, false, darkMode)}
          flex flex-col justify-center items-center`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ScorecardLegend
