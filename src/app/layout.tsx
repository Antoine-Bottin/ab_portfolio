import type { Metadata } from 'next'
import { Bungee } from 'next/font/google'
import BurgerMenu from './_components/BurgerMenu'
import { Analytics } from '@vercel/analytics/react'
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
    { label: 'Projects', value: '/projects' },
    { label: 'Actual learnings', value: '/learnings' },
    {
        label: 'Contact',
        value: '/contact',
    },
]

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${bungee.className}`}>
                <Analytics />
                <BurgerMenu menu={navigationMenu} />
                <Header />
                <ViewLayout>{children}</ViewLayout>
            </body>
        </html>
    )
}
