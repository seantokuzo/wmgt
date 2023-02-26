import { useAppContext } from 'context/appContext'
import { DataGod } from 'data/dataGod'
import { RoundDataInterface } from 'data/round-data/roundTypes'
import { nanoid } from 'nanoid'

type Props = {
  roundData: RoundDataInterface
}

const PlayerStatsScorecard: React.FC<Props> = ({ roundData }) => {
  const { userPlayer } = useAppContext()
  const easyCourse = DataGod.getCourseData(roundData.easyCourse)
  const hardCourse = DataGod.getCourseData(roundData.hardCourse)

  return (
    <div
      className={`p-6
      brdr-s${roundData.season} border-2
      flex flex-col justify-center items-center`}
    >
      <div
        className="w-full
        text-xl lg:text-4xl
        font-scoretext font-bold
        flex justify-center items-center"
      >
        {easyCourse.course + ' ' + easyCourse.difficulty}
      </div>
      <div className="table mt-4 font-bold">
        <div className="table-row">
          {new Array(19).fill('').map((_slot, i) => {
            if (i === 0) {
              return (
                <div
                  className="table-cell align-middle  pr-4
                  text-xxxs sm:text-xxs md:text-xs lg:text-sm
                  text-left"
                  key={nanoid()}
                >
                  Hole
                </div>
              )
            }
            return (
              <div
                className="table-cell align-middle
                w-4 h-4 md:w-10 md:h-10
                text-xxs sm:text-xs md:text-sm lg:text-bases
                text-center font-scorenum"
                key={nanoid()}
              >
                <div
                  className={`mx-1
                  border-2 md:border-[3px]
                  brdr-s${roundData.season} rounded-full `}
                >
                  {i}
                </div>
              </div>
            )
          })}
        </div>
        <div className="table-row">
          {['Par', ...easyCourse.parByHole].map((par) => {
            if (par === 'Par') {
              return (
                <div
                  className="table-cell align-middle
                  text-xxs sm:text-xs md:text-sm lg:text-base
                  text-left"
                  key={nanoid()}
                >
                  {par}
                </div>
              )
            }
            return (
              <div
                className="table-cell align-middle
                text-xxxs sm:text-xxs md:text-xs lg:text-sm
                text-center"
                key={nanoid()}
              >
                {par}
              </div>
            )
          })}
        </div>
        <div className="table-row">
          <div
            className="table-cell align-middle pr-4
            text-xxxs sm:text-xxs md:text-xs lg:text-sm
            text-left"
          >
            {userPlayer}
          </div>
          {roundData.scores[0].easyScorecard.map((score) => {
            return (
              <div className="table-cell align-middle text-center" key={nanoid()}>
                <div
                  className={`mx-1
                  bg-sh-s${roundData.season} rounded-md
                  text-xxxs sm:text-xxs md:text-xs lg:text-sm
                   `}
                >
                  {score}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PlayerStatsScorecard
