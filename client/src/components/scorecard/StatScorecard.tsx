import { useAppContext } from 'context/appContext'
import { SeasonContextProvider, useSeasonContext } from 'context/season/seasonContext'
import { nanoid } from 'nanoid'
import { holeSlotSizes } from './CourseScorecard'

type Props = {
  label: string
  data: number[]
}

const StatScorecard: React.FC<Props> = ({ label, data }) => {
  const { windowSize } = useAppContext()
  const { showFrontNine } = useSeasonContext()

  const acesToMap =
    windowSize.width >= 768 ? data : showFrontNine ? data.slice(0, 9) : data.slice(9)

  const scorecardTotalEls = (text: string) => {
    return (
      <div
        className="w-12 sm:w-14 md:w-18 lg:w-20
        flex justify-center items-center"
      >
        <div
          className={`w-full mx-2 p-1 md:p-2
          ${text && 'border-l-2 border-b-2 rounded-md border-red-400'}
          text-xxxs sm:text-xs text-red-400 font-bold
          flex justify-center items-center
          `}
        >
          {text}
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-full max-w-6xl
      text-xs
      flex justify-center items-center
      relative z-0"
    >
      {/* ****** THE PLAYER NAME ****** */}
      <div className="w-full text-xs flex justify-between items-center py-2 sm:px-2 md:px-0">
        <div
          className="w-[25%] max-w-1/10 pr-2
          flex justify-end
          text-xxxs tracking-tighter
          sm:text-xxs sm:tracking-tight
          md:text-xs md:tracking-normal
          lg:text-base text-red-400"
        >
          {label}
        </div>
        <div className="w-full flex justify-between items-center sm:px-2 z-10">
          {acesToMap.map((holeStat) => (
            <div
              className={`${holeSlotSizes}
              flex flex-col justify-center items-center`}
              key={nanoid()}
            >
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
                  border-[1px] rounded-md border-red-400 shadow-insetred bg-red-400
                  flex flex-col justify-center items-center z-10`}
              >
                <div
                  className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6
                  text-xxxs sm:text-sm
                  flex flex-col justify-center items-center z-10`}
                >
                  {holeStat}
                </div>
              </div>
            </div>
          ))}
        </div>
        {scorecardTotalEls(data.reduce((acc, num) => acc + num, 0).toString())}
        {scorecardTotalEls('')}
        {scorecardTotalEls('')}
      </div>
    </div>
  )
}

export default StatScorecard
