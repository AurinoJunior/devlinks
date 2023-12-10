import { Github } from 'lucide-react'
import { Header } from './components/Header/Header'
import { Button } from './components/ui/button'
import { useEffect, useState } from 'react'
import { getData } from './service/getData'
import { IGenericObjectModel } from './@types/types'

export function App() {
  const [state, setState] = useState<IGenericObjectModel[] | null>(null)

  useEffect(() => {
    const allData = getData()
    setState(allData)
  }, [])

  return (
    <>
      <Header />
      <div className="py-4 px-32 bg-black text-white flex items-center justify-between">
        <h2 className="text-xl font-bold">Links úteis para o dia a dia</h2>
        <a
          target="_blank"
          href="https://github.com/aurinojunior/devlinks"
          rel="noreferrer"
        >
          <Button className="font-bold" variant="secondary">
            <Github /> source code
          </Button>
        </a>
      </div>
    </>
  )
}
