type Type = 'submit' | 'button' | 'reset'

interface Props {
  type?: Type
  children: React.ReactNode
  className?: string
}

const MBtn: React.FC<Props> = ({ type, children, className }) => {
  return (
    <button
      className={`${className} inline-flex items-center justify-center rounded  bg-primary p-3 text-white`}
      type={type}
    >
      {children}
    </button>
  )
}

export default MBtn
