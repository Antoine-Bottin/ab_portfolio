'use client'
import Image from 'next/image'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './styles.scss'

const techIcons = [
    {
        label: 'React',
        src: '/assets/icons/react-2.svg',
    },
    { label: 'Next.js', src: '/assets/icons/nextjs-13.svg' },
    { label: 'TypeScript', src: '/assets/icons/typescript.svg' },
    { label: 'T3 stack', src: '/assets/icons/t3-light.svg' },
]

const Page = () => {
    return (
        <div className="skills-view">
            <h1 className="skills-view__title">What am I good at ? </h1>
            <Carousel
                autoPlay
                interval={3000}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
            >
                {techIcons.map(({ label, src }) => {
                    return (
                        <div className="carousel-item" key={src}>
                            <div className="carousel-item__picture">
                                <Image src={src} alt={label} fill />
                            </div>
                            <div className="carousel-item__label">{label}</div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Page
