import { Search, X } from 'lucide-react'
import { Input } from '../ui/input'
import { useState } from 'react'
import { IGenericObjectModel } from '@/@types/types'

interface ISearchBarProps {
  onChangeInput: React.Dispatch<React.SetStateAction<IGenericObjectModel>>
}

export function SearchBar({ onChangeInput }: ISearchBarProps) {
  const [state, setState] = useState('')

  function handleSearchLink(query: string) {
    setState(query)
    onChangeInput((oldState) => {
      oldState.data.filter(
        (item) => item.name.includes(query) || item.description.includes(query),
      )

      return {
        ...oldState,
        data: oldState.data.filter(
          (item) =>
            item.name.includes(query) || item.description.includes(query),
        ),
      }
    })
  }

  return (
    <>
      <div className="h-16 w-full bg-gradient-to-r from-cyan-200 to-blue-300" />

      <label className="flex items-center gap-4 w-1/3 mx-[auto] mt-[-2.25rem] bg-white px-6 py-4 rounded-lg drop-shadow-md cursor-pointer">
        <Search className="text-slate-400" size={20} />
        <Input
          className="text-md p-0 border-none "
          placeholder="Search..."
          value={state}
          onChange={(e) => handleSearchLink(e.target.value)}
        />

        {state && <X size={20} onClick={() => setState('')} />}
      </label>
    </>
  )
}
