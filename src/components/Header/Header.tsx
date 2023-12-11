import { Github } from 'lucide-react'
import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="font-bold text-3xl text-center py-8 relative">
      <h1 className="flex-1 text-primary font-header">
        DEV <span className="text-cyan-500">LINKS</span>
      </h1>

      <Button className="font-bold" asChild>
        <a
          target="_blank"
          href="https://github.com/aurinojunior/devlinks"
          rel="noreferrer"
          className="absolute top-8 right-8"
        >
          <Github /> source code
        </a>
      </Button>
    </header>
  )
}
