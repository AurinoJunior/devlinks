import { Search, X } from 'lucide-react'
import { Input } from '../ui/input'

interface ISearchBarProps {
  value: string
  onChangeInput: (query: string) => void
}

export function SearchBar({ value, onChangeInput }: ISearchBarProps) {
  return (
    <>
      <div className="h-16 w-full bg-gradient-to-r from-cyan-200 to-blue-300" />

      <label className="flex items-center gap-4 w-4/5 md:w-1/3 mx-[auto] mt-[-2.25rem] bg-white px-6 py-4 rounded-lg drop-shadow-md cursor-pointer">
        <Search className="text-slate-400" size={20} />
        <Input
          className="text-md p-0 border-none "
          placeholder="Search..."
          value={value}
          onChange={(e) => onChangeInput(e.target.value)}
        />

        {value && <X size={20} onClick={() => onChangeInput('')} />}
      </label>
    </>
  )
}
