interface Props {
  children: React.ReactNode
  className?: string
}

const MBtn: React.FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`${className} inline-flex items-center justify-center rounded  bg-primary p-3 text-white`}
    >
      {children}
    </button>
  )
}

export default MBtn
