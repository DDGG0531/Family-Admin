import { MailIcon, LockClosedIcon } from '@heroicons/react/solid'
type Type = 'email' | 'password'

interface Props {
  type?: Type
  className?: string
  placeholder?: string
}

const MInput: React.FC<Props> = ({
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

export default MInput
