type Props = {
  label: string
  stat: number
  difficulty?: 'Easy' | 'Hard'
}

const HoleStat: React.FC<Props> = ({ label, stat, difficulty }) => {
  return (
    <div
      className={`px-4 py-2 rounded-b-md
      ${
        !difficulty
          ? 'bg-wmgYellow sh-wmgYellowLg cl-wmgBrown'
          : difficulty === 'Easy'
          ? 'bg-easyCourse sh-easyCourse text-black'
          : 'bg-hardCourse sh-hardCourse text-white'
      }
      text-base md:text-xl
      font-semibold uppercase text-center
      flex flex-col justify-center items-center`}
    >
      <div className="flex flex-col justify-center items-center uppercase">
        <div>
          {label.split(' ')[2]
            ? label.split(' ')[0] + ' ' + label.split(' ')[1]
            : label.split(' ')[0]}
        </div>
        <div>{label.split(' ')[2] ? label.split(' ')[2] : label.split(' ')[1]}</div>
      </div>
      <div
        className={`w-10 h-10 p-2
        ${
          !difficulty
            ? 'bg-wmgBrown text-wmgYellow'
            : difficulty === 'Easy'
            ? 'cl-easyCourse bg-black'
            : 'bg-black text-white'
        }
        rounded-full
        text-sm md:text-base
        flex justify-center items-center`}
      >
        {stat}
      </div>
    </div>
  )
}

export default HoleStat
