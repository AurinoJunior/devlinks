import { IGenericObjectModel } from '@/@types/types'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

interface IMenuTabProps {
  data: IGenericObjectModel[]
  onChangeTab: React.Dispatch<React.SetStateAction<IGenericObjectModel>>
}

export function MenuTab({ data, onChangeTab }: IMenuTabProps) {
  const firstItemToFocus = data[0].id

  return (
    <Tabs
      className="flex justify-center overflow-x-auto whitespace-nowrap rounded-md"
      defaultValue={firstItemToFocus}
    >
      <TabsList className="bg-gradient-to-r from-white to-slate-200">
        {data.map((category) => (
          <TabsTrigger
            className="font-semibold bg-transparent data-[state='active']:bg-white mx-4"
            key={category.id}
            value={category.id}
            onClick={() => onChangeTab(category)}
          >
            {category.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
