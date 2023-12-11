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

export function App() {
  const allData = getData()

  const currentTab = allData[1]

  return (
    <>
      <Header />
      <SearchBar />

      <div className="w-full text-center mt-16">
        <h1 className="font-semibold text-3xl">{currentTab.title}</h1>
        <h2 className="mt-4 text-muted-foreground">{currentTab.subtitle}</h2>
      </div>

      <main className="w-full px-40 my-16">
        <MenuTab data={allData} />
        <div className="flex gap-4 justify-start mt-8 flex-wrap">
          {currentTab.data.map((item) => (
            <Card className="flex flex-col w-72" key={item.id}>
              <div className="w-72 h-60">
                <img
                  className="object-cover w-full h-full"
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
