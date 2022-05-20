import type { NextComponentType } from 'next'

const DBtn: NextComponentType = ({ children, className }) => {
  return (
    <button
      className={`${className} inline-flex items-center justify-center rounded  bg-primary p-3 text-white`}
    >
      {children}
    </button>
  )
}

export default DBtn
