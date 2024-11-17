import { MainLayoutProps } from '@/types'

export default function MainLayout({ children, nav, footer }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        {nav}
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer>
        {footer}
      </footer>
    </div>
  )
} 