type Props = {
  label: string
  stat: number
}

const HoleStat: React.FC<Props> = ({ label, stat }) => {
  return (
    <div
      className="px-4 py-2 rounded-b-md shadow-insetyellow
              text-base md:text-xl
              font-semibold uppercase text-center
              bg-wmgYellow
              flex flex-col justify-center items-center"
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
        className="w-10 h-10 p-2
        text-sm md:text-base
        bg-wmgBrown text-wmgYellow
        rounded-full
        flex justify-center items-center"
      >
        {stat}
      </div>
    </div>
  )
}

export default HoleStat
