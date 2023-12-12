import { Header } from './components/Header/Header'
import { getData } from './service/getData'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import { SearchBar } from './components/SearchBar/SearchBar'
import { MenuTab } from './components/MenuTab/MenuTab'
import { useState } from 'react'

export function App() {
  const allData = getData()
  const [currentCategory, setCurrentCategory] = useState(allData[0])
  const [query, setQuery] = useState('')

  const filteredLinks = currentCategory.data.filter(
    (item) =>
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <>
      <Header />
      <SearchBar onChangeInput={setQuery} value={query} />

      <section className="w-full text-center mt-16 px-12">
        <h1 className="font-bold text-3xl">{currentCategory.title}</h1>
        <h2 className="mt-4 text-muted-foreground">
          {currentCategory.subtitle}
        </h2>
      </section>

      <main className="w-full px-12 md:px-40 my-16">
        <MenuTab data={allData} onChangeTab={setCurrentCategory} />

        <div className="mt-8 flex gap-8 flex-wrap justify-center">
          {filteredLinks.map((item) => (
            <Card className="flex flex-col md:w-72" key={item.id}>
              <div className="w-full h-60">
                <img
                  className="object-cover w-full h-full rounded-t-md"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className="justify-center mt-[auto]">
                <a
                  className="font-bold text-blue-500 hover:text-blue-800"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}
