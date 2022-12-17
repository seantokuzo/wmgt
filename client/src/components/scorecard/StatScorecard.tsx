import { nanoid } from 'nanoid'
import { holeSlotSizes } from './CourseScorecard'

type Props = {
  label: string
  data: number[]
}

const StatScorecard: React.FC<Props> = ({ label, data }) => {
  console.log(data)

  const scorecardTotalEls = (text: string) => {
    return (
      <div
        className="w-12 sm:w-14 md:w-18 lg:w-20
        flex justify-center items-center"
      >
        <div
          className={`w-3/4 p-1 md:p-2
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
      relative"
    >
      {/* ****** THE PLAYER NAME ****** */}
      <div className="w-full text-xs flex justify-between items-center py-2 sm:px-2 md:px-0">
        <div className="w-[25%] pr-2 flex justify-end text-red-400">{label}</div>
        <div className="w-full flex justify-between items-center sm:px-2">
          {data.map((holeStat) => (
            <div
              className={`${holeSlotSizes}
            border-2 rounded-md border-red-400
            flex flex-col justify-center items-center`}
              key={nanoid()}
            >
              <div className="">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8
                flex flex-col justify-center items-center`}
                >
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6
                  text-xxs sm:text-sm
                  flex flex-col justify-center items-center`}
                  >
                    {holeStat}
                  </div>
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
