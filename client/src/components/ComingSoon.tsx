type Props = {
  text: string
  color?: 'indigo' | 'emerald'
}

const ComingSoon: React.FC<Props> = ({ text, color }) => {
  const ifColor = 'bg-' + color + '-500' + ' shadow-inset' + color

  return (
    <div
      className={`w-full max-w-xl p-8 my-8 font-bold text-center
      text-xl md:text-2xl lg:text-4xl uppercase
      rounded-md animate-bounce
      ${!color && 'border-4 border-wmgYellow text-wmgBrown bg-wmgYellow shadow-inyellfocus'}
      ${color && ifColor}
      flex justify-center items-center`}
    >
      {text}
    </div>
  )
}

export default ComingSoon
