import { IGenericObjectModel } from '@/@types/types'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

interface IMenuTabProps {
  data: IGenericObjectModel[]
}

export function MenuTab({ data }: IMenuTabProps) {
  const firstItemToFocus = data[0].id

  return (
    <Tabs className="flex justify-center" defaultValue={firstItemToFocus}>
      <TabsList className="bg-transparent">
        {data.map((category) => (
          <TabsTrigger
            className="font-semibold bg-transparent data-[state='active']:bg-slate-200 mx-4"
            key={category.id}
            value={category.id}
          >
            {category.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
