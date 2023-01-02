type Props = {
  text: string
  color?: 'indigo' | 'emerald'
}

const ComingSoon: React.FC<Props> = ({ text }) => {
  return (
    <div
      className={`w-full max-w-xl p-8 my-8 font-bold text-center
      text-xl md:text-2xl lg:text-4xl uppercase
      rounded-md animate-bounce
      border-4 brdr-wmgYellow cl-wmgBrown bg-wmgYellow sh-wmgYellowSm
      flex justify-center items-center`}
    >
      {text}
    </div>
  )
}

export default ComingSoon
