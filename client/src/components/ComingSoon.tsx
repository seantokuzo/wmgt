type Props = {
  text: string
}

const ComingSoon: React.FC<Props> = ({ text }) => {
  return (
    <div
      className="w-full max-w-xl p-8 my-8 font-bold text-center
      text-xl md:text-2xl lg:text-4xl uppercase
      rounded-md animate-bounce
      border-4 border-[#f8ff71]
      text-[#38280e] bg-[#f8ff71] shadow-inyellfocus
      flex justify-center items-center"
    >
      {text}
    </div>
  )
}

export default ComingSoon
