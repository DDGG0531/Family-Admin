import type { Note2 } from '@/apis/note2'
import { TrashIcon, PencilIcon } from '@heroicons/react/outline'
import MChip from '@/components/custom/MChip'
import MBtn from '@/components/custom/MBtn'

interface Props {
  children: React.ReactNode
  className?: string
  item: Note2
}

const TestItem: React.FC<Props> = ({ children, className, item }) => {
  const id = item[0]
  const note = item[1]

  return (
    <div className={`${className} flex items-center gap-5 rounded p-5`}>
      <MChip className="flex-none">ID: {id}</MChip>

      <div>{note}</div>

      <div className="ml-auto flex gap-3">
        <MBtn>
          <TrashIcon className="h-5 w-5" />
        </MBtn>

        <MBtn>
          <PencilIcon className="h-5 w-5" />
        </MBtn>
      </div>
    </div>
  )
}

export default TestItem
