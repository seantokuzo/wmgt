import PlayerSelector from 'components/PlayerSelector'
import { useAppContext } from 'context/appContext'
import { DataGod } from 'data/dataGod'
import { RoundDataInterface } from 'data/round-data/roundTypes'
import { nanoid } from 'nanoid'
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend } from 'recharts'

type Props = {
  round: RoundDataInterface
}

export const lineColors = {
  one: '#10b981',
  two: '#6366f1',
  three: '#fb923c',
  four: '#ef4444',
  five: '#65a30d',
  six: '#1e40af',
  seven: '#a1a1aa',
  eight: '#99f6e4',
  nine: '#0ea5e9',
  ten: '#fef08a'
}

const RaceToTheFinish: React.FC<Props> = ({ round }) => {
  const { windowSize, userPlayer } = useAppContext()
  const convertedRound = DataGod.getRaceToFinishData(round, userPlayer)
  const lowScore = Math.min(
    ...Object.values(convertedRound[convertedRound.length - 1]).map((v) =>
      typeof v === 'number' ? v : 99
    )
  )
  const checkFive = (num: number): number => (num % 5 !== 0 ? checkFive(num - 1) : num)
  const closestFive = checkFive(lowScore)
  const yAxisTicks = new Array(Math.abs(closestFive / 5)).fill('').map((_slot, i) => {
    return closestFive + 5 * i
  })

  const xAxisTicks: string[] = new Array(19)
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
            : Math.floor(windowSize.height * 0.5)
        }
        data={convertedRound}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 30
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          label={{ value: 'Hole', position: 'top' }}
          dataKey="hole"
          name="Hole"
          ticks={xAxisTicks}
        />
        <YAxis
          label={{ value: 'Score', angle: -90, position: 'right' }}
          reversed={true}
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
        <Legend margin={{ top: 0, left: 0, bottom: 36, right: 0 }} verticalAlign="top" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        {Object.keys(convertedRound[0])
          .filter((k) => k !== 'hole')
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
                  : lineColors.one
              }
              activeDot={{ r: 8 }}
            />
          ))}
      </LineChart>
    </div>
  )
}

export default RaceToTheFinish
