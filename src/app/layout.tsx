import type { Metadata } from 'next'
import { Bungee } from 'next/font/google'
import './globals.scss'
import BurgerMenu from './_components/BurgerMenu'

const bungee = Bungee({
  variable: '--font-bungee',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Antoine Bottin ',
  description: 'This is my dev portfolio',
}

const navigationMenu = [
  {
    label: 'Home',
    value: '/',
  },
  {
    label: 'What about my skills ?',
    value: '/about',
  },
  {
    label: 'Contact',
    value: '/contact',
  },
  { label: 'Projects', value: '/projects' },
  { label: 'Actual learnings', value: '/learnings' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bungee.className}`}>
        <BurgerMenu menu={navigationMenu} />
        {children}
      </body>
    </html>
  )
}
