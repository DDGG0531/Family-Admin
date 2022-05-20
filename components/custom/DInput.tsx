import type { NextComponentType } from 'next'
import { MailIcon, LockClosedIcon } from '@heroicons/react/solid'

const DInput: NextComponentType = ({
  type,
  className,
  placeholder,
  ...others
}) => {
  return (
    <div className={`${className} relative`}>
      <input
        {...others}
        type={type}
        placeholder={placeholder}
        className="block w-full rounded-md pl-10 pr-3"
      />
      <span className="pointer-events-none absolute left-0 bottom-0 flex h-full w-full items-center rounded-md pl-3	">
        {type === 'email' && <MailIcon className="h-5 w-5 text-blue-500" />}
        {type === 'password' && (
          <LockClosedIcon className="h-5 w-5 text-blue-500" />
        )}
      </span>
    </div>
  )
}

export default DInput
