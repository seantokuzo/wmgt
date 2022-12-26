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
  four: '#fef08a',
  five: '#ef4444',
  six: '#65a30d',
  seven: '#0ea5e9',
  eight: '#99f6e4',
  nine: '#a1a1aa',
  ten: '#1e40af'
}

const RaceToTheFinish: React.FC<Props> = ({ round }) => {
  const convertedRound = DataGod.getRaceToFinishData(round)

  console.log(convertedRound)
  const lowScore = Math.min(...Object.values(convertedRound[convertedRound.length - 1]))
  const checkFive = (num: number): number => (num % 5 !== 0 ? checkFive(num - 1) : num)
  const closestFive = checkFive(lowScore)
  const ticksArray = new Array(Math.abs(closestFive / 5)).fill('').map((_slot, i) => {
    return closestFive + 5 * i
  })
  console.log(ticksArray)

  const xAxisTicks: number[] = new Array(19)
    .fill('')
    .map((_slot, i) => {
      return i * 2
    })
    .reverse()
  console.log(xAxisTicks)

  return (
    <div className="w-full">
      <LineChart
        width={1000}
        height={500}
        data={convertedRound}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5
        // }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          label={{ value: 'Hole', position: 'bottom' }}
          dataKey="hole"
          name="Hole"
          ticks={xAxisTicks}
        />
        <YAxis
          label={{ value: 'Score', angle: -90, position: 'left' }}
          reversed={true}
          domain={['dataMin', 'dataMax']}
          ticks={ticksArray}
        />
        <Tooltip />
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
