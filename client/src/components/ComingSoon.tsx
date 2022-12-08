type Props = {
  text: string
}

const ComingSoon: React.FC<Props> = ({ text }) => {
  return (
    <div
      className="border-2 py-8 px-16 rounded-md text-4xl font-bold mt-10 animate-bounce
          flex justify-center items-center"
    >
      {text}
    </div>
  )
}

export default ComingSoon
