type Props = {
  label: string
  stat: number
}

const HoleStat: React.FC<Props> = ({ label, stat }) => {
  return (
    <div
      className="px-4 py-2 rounded-b-md shadow-insetyellow
              text-xl font-semibold uppercase
              bg-[#f8ff71]
              flex flex-col justify-center items-center"
    >
      <div className="uppercase">{label}</div>
      <div
        className="w-14 h-14 p-2 bg-[#38280e] text-[#f8ff71] rounded-full
                flex justify-center items-center"
      >
        {stat}
      </div>
    </div>
  )
}

export default HoleStat
