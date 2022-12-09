type Props = {
  text: string
}

const ComingSoon: React.FC<Props> = ({ text }) => {
  return (
    <div
      className="w-full max-w-xl p-8 font-bold text-center
      text-xl md:text-2xl lg:text-4xl 
      rounded-md animate-bounce
      border-4 border-[#38280e]
      text-[#f8f771] bg-[#38280e] shadow-insetbrown
      flex justify-center items-center"
    >
      {text}
    </div>
  )
}

export default ComingSoon
