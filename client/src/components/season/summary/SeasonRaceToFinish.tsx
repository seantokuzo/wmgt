import { useAppContext } from 'context/appContext'
import PlayerSelector from 'components/PlayerSelector'
import { DataGod } from 'data/dataGod'
import { nanoid } from 'nanoid'
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend } from 'recharts'
import { lineColors } from '../round-details/RaceToTheFinish'

type Props = {
  season: number
}

const SeasonRaceToFinish: React.FC<Props> = ({ season }) => {
  const { windowSize, userPlayer } = useAppContext()

  const raceData = DataGod.getSeasonTopTenRunningPointTotal(season, userPlayer)

  // TODO
  // FIX Y-AXIS TICKS
  const maxValue = Math.max(
    ...Object.values(raceData[raceData.length - 1]).map((v) => (typeof v === 'number' ? v : 99))
  )

  const checkTen = (num: number): number => (num % 10 !== 0 ? checkTen(num + 1) : num)
  const closestTen = checkTen(maxValue)
  const yAxisTicks = new Array(Math.abs(closestTen / 10) + 1).fill('').map((_slot, i) => {
    return 10 * i
  })

  const xAxisTicks: string[] = new Array(raceData.length)
    .fill('')
    .map((_slot, i) => {
      return `${i * 2}`
    })
    .reverse()

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="my-4 flex flex-col justify-center items-center">
        {/* {!userPlayer && <div className="my-2">Add a Player</div>} */}
        <PlayerSelector />
      </div>
      <LineChart
        width={
          windowSize.height > windowSize.width
            ? Math.floor(windowSize.width * 0.95)
            : Math.floor(windowSize.width * 0.75) <= 1200
            ? Math.floor(windowSize.width * 0.75)
            : 1200
        }
        height={
          windowSize.height <= 550
            ? Math.floor(windowSize.height * 0.95)
            : windowSize.width > windowSize.height
            ? Math.floor(windowSize.height * 0.67)
            : Math.floor(windowSize.height * 0.65)
        }
        data={raceData}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 30
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          label={{ value: 'Week', position: 'top' }}
          dataKey="week"
          name="Week"
          ticks={xAxisTicks}
        />
        <YAxis
          label={{ value: 'Points', angle: -90, position: 'right' }}
          domain={['dataMin', 'dataMax']}
          ticks={yAxisTicks}
        />
        <Tooltip
          contentStyle={{ backgroundColor: 'black', fontFamily: 'Montserrat' }}
          labelStyle={{
            color: '#a1a1aa',
            textAlign: 'center',
            // textDecoration: 'underline',
            fontWeight: 'bold',
            borderBottom: '1px #a1a1aa solid',
            paddingBottom: '2px',
            marginBottom: '0.5rem'
          }}
        />
        <Legend margin={{ top: 0, left: 0, bottom: 40, right: 0 }} verticalAlign="top" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        {Object.keys(raceData[0])
          .filter((k) => k !== 'week')
          .map((player, i) => (
            <Line
              key={nanoid()}
              type="monotone"
              dataKey={player}
              stroke={
                i === 0
                  ? lineColors.one
                  : i === 1
                  ? lineColors.two
                  : i === 2
                  ? lineColors.three
                  : i === 3
                  ? lineColors.four
                  : i === 4
                  ? lineColors.five
                  : i === 5
                  ? lineColors.six
                  : i === 6
                  ? lineColors.seven
                  : i === 7
                  ? lineColors.eight
                  : i === 8
                  ? lineColors.nine
                  : i === 9
                  ? lineColors.ten
                  : i % 2 === 0
                  ? lineColors.one
                  : i % 3 === 0
                  ? lineColors.three
                  : lineColors.two
              }
              activeDot={{ r: 8 }}
            />
          ))}
      </LineChart>
    </div>
  )
}

export default SeasonRaceToFinish
