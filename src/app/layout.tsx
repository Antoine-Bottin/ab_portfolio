import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import BurgerMenu from '../components/BurgerMenu'
import { Analytics } from '@vercel/analytics/react'
import ViewLayout from '../components/ViewLayout'
import Header from '../components/Header'

import './globals.scss'

const mainFont = Inconsolata({
    variable: '--font-inconsolata',
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
    { label: 'Current projects', value: '/current' },
    {
        label: 'Contacts',
        value: '/contacts',
    },
]

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <script
                src="https://platform.linkedin.com/badges/js/profile.js"
                async
                defer
                type="text/javascript"
            ></script>
            <body className={`${mainFont.className}`}>
                <Analytics />
                <BurgerMenu menu={navigationMenu} />
                <Header />
                <ViewLayout>{children}</ViewLayout>
            </body>
        </html>
    )
}
