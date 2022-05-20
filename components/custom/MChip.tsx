interface Props {
  children: React.ReactNode
  className?: string
}

const Chip: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="flex gap-3 rounded bg-slate-500 p-3 text-white">
      {children}
    </div>
  )
}

export default Chip
