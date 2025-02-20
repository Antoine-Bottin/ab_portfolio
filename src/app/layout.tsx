import type { Metadata } from 'next'
import { Bungee } from 'next/font/google'
import BurgerMenu from './_components/BurgerMenu'
import ViewLayout from './_components/ViewLayout'
import Header from './_components/Header'

import './globals.scss'

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
        value: '/skills',
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
                <Header />
                <ViewLayout>{children}</ViewLayout>
            </body>
        </html>
    )
}
