import type { NextPage } from 'next'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { PlusIcon } from '@heroicons/react/outline'
import {
  apiNote2_List,
  apiNote2_Delete,
  apiNote2_Edit,
  apiNote2_Create
} from '@/apis/note2'
import type { Note2 } from '@/apis/note2'
import MBtn from '@/components/custom/MBtn'
import TestItem from '@/components/testItem'

const listKeys = {
  all: ['list'] as const
}

const TestList: NextPage = () => {
  const queryClient = useQueryClient()

  const creatMutationSuccess = () => ({
    onSuccess: () => {
      return queryClient.invalidateQueries(listKeys.all).then(() => {})
    }
  })

  const editList = useMutation(
    (item: Note2) => apiNote2_Edit(item),
    creatMutationSuccess()
  )

  const createList = useMutation(
    (note: string) => apiNote2_Create(note),
    creatMutationSuccess()
  )
  const deleteList = useMutation(
    (id: number) => apiNote2_Delete(id),
    creatMutationSuccess()
  )

  const { isLoading, data: list } = useQuery(
    listKeys.all,
    () => apiNote2_List(),
    {
      refetchOnWindowFocus: false
    }
  )

  return (
    /** Page Root */
    <div>
      {isLoading && <div>Loading~~</div>}
      {list && (
        <div className="flex flex-col gap-3">
          <MBtn className="mx-auto w-auto rounded-full">
            <PlusIcon className="h-5 w-5" />
          </MBtn>

          {list.map(item => (
            <TestItem key={item[0]} item={item}>
              <PlusIcon className="h-5 w-5" />
            </TestItem>
          ))}
        </div>
      )}
    </div>
  )
}

export default TestList
