import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import BurgerMenu from '../components/BurgerMenu'
import { Analytics } from '@vercel/analytics/react'
import ViewLayout from '../components/ViewLayout'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'

import './globals.scss'
import Script from 'next/script'

const mainFont = Inconsolata({
    variable: '--font-inconsolata',
    subsets: ['latin'],
    weight: ['400'],
})

export const metadata: Metadata = {
    title: 'Antoine Bottin - Portfolio ',
    description: 'This is my dev portfolio',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
    keywords: [
        'web',
        'developer',
        'portfolio',
        'Antoine Bottin',
        'software ingeneer',
        'reactJS',
        'NextJs',
        'NodeJs',
        'TypeScript',
        'JavaScript',
        'HTML',
    ],
    metadataBase: new URL('https://www.portfolio.abottin.dev'),
    openGraph: {
        title: 'Antoine Bottin - Portfolio ',
        description: 'This is my dev portfolio',
        images: [{ url: '/assets/pictures/Photo_CV.jpg' }],
        type: 'website',
        url: 'https://www.portfolio.abottin.dev',
    },
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
            <body className={`${mainFont.className}`}>
                <Script
                    src="https://platform.linkedin.com/badges/js/profile.js"
                    strategy="lazyOnload"
                />
                <Analytics />
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    newestOnTop={false}
                    theme="dark"
                    style={{ fontSize: '1.5rem' }}
                />
                <BurgerMenu menu={navigationMenu} />
                <Header />
                <ViewLayout>{children}</ViewLayout>
            </body>
        </html>
    )
}
