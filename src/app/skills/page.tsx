'use client'

import TechCard from '../../components/TechCard'
import './styles.scss'

const techCards = [
    {
        label: 'ReactJS',
        src: '/assets/icons/react-2.svg',
        level: 4,
        comment: 'I have been working with React since my bootcamp.',
    },
    {
        label: 'React Native',
        src: '/assets/icons/react-2.svg',
        level: 2,
        comment: `I haven't worked with it for a long time, but I really appreciate mobile development.`,
    },
    {
        label: 'Next.js',
        src: '/assets/icons/next-js.png',
        level: 4,
        comment: 'Working with the AppRouter is very satisfying and intuitive.',
    },
    {
        label: 'TypeScript',
        src: '/assets/icons/typescript.svg',
        level: 4,
        comment: "I hated it at first, but now I can't work without it.",
    },
    {
        label: 'Sass',
        src: '/assets/icons/sass-logo.svg',
        level: 4,
        comment: 'I am still impressed by everything we can do with CSS rules.',
    },
    {
        label: 'HTML',
        src: '/assets/icons/html-logo.png',
        level: 4,
        comment: 'Obvious but not easy to be really good at.',
    },
    {
        label: 'T3 stack',
        src: '/assets/icons/t3-light.svg',
        level: 3,
        comment:
            'I discovered it few weeks ago and I enjoy a lot to be back on fullstack development.',
    },
    {
        label: 'Github',
        src: '/assets/icons/github-mark-white.png',
        level: 3,
        comment: 'I wish I had more time to master it. But I have good basics.',
    },
]

const sortedTechCards = techCards.sort((a, b) => {
    return b.level - a.level
})

const Page = () => {
    return (
        <>
            <div className="skills-view">
                <h1 className="skills-view__title">What am I good at ? </h1>
                <div className="skills-view__content">
                    {sortedTechCards.map(
                        ({ label, src, level, comment }, idx) => {
                            return (
                                <TechCard
                                    key={idx}
                                    label={label}
                                    src={src}
                                    level={level}
                                    comment={comment}
                                />
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}

export default Page
