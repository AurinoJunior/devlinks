import { Github } from 'lucide-react'
import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="flex justify-between items-center font-bold text-2xl text-center p-4 md:block md:text-3xl md:py-8 md:relative">
      <h1 className="text-primary font-header">
        DEV <span className="text-cyan-500">LINKS</span>
      </h1>

      <Button className="font-bold" asChild size="sm">
        <a
          target="_blank"
          href="https://github.com/aurinojunior/devlinks"
          rel="noreferrer"
          className="md:absolute md:top-8 md:right-8"
        >
          <Github /> source code
        </a>
      </Button>
    </header>
  )
}
