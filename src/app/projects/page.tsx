'use client'
import ProjectCard from '~/components/ProjectCard'
import { useState } from 'react'

import './styles.scss'
import classNames from 'classnames'
import useOnScroll from '~/_hooks/useOnScroll'

const projectCard = [
    {
        pictureSrc: '/assets/icons/stemz-logo.svg',
        videoSrc: '/assets/videos/Stemz.mp4',
        title: 'Stemz Web',
        url: 'https://stemz.mwm.io/',
        company: 'mwm',
    },
    {
        pictureSrc: '/assets/icons/color-pop.png',
        videoSrc: '/assets/videos/ColorPop.mp4',
        title: 'Color Pop',
        url: 'https://colorpop.ai/',
        company: 'mwm',
    },
    {
        pictureSrc: '/assets/icons/mwm-rounded.webp',
        videoSrc: '/assets/videos/Website.mp4',
        title: 'MwM Website',
        url: 'https://mwm.ai/',
        company: 'mwm',
    },
    {
        pictureSrc: '/assets/icons/yousing-logo.svg',
        videoSrc: '/assets/videos/YouSing.mov',
        title: 'Yousing',
        url: 'https://www.yousing.ai/',
        company: 'mwm',
    },
    {
        pictureSrc: '/assets/icons/ls-monogram.svg',
        videoSrc: '/assets/videos/Leatherspa.mp4',
        title: 'Leatherspa',
        url: 'https://www.yousing.ai/',
        company: 'leatherspa',
    },
    {
        pictureSrc: '/assets/pictures/Photo_CV.jpg',
        videoSrc: '/assets/videos/Xperience.mp4',
        title: 'Xperience',
        url: 'https://xperience.abottin.dev',
        company: 'personnal',
    },
    {
        pictureSrc: '/assets/icons/github-mark-white.png',
        videoSrc: '/assets/videos/github.mp4',
        title: 'Github',
        url: 'https://github.com/Antoine-Bottin',
        company: 'personnal',
    },
]

const badges = [
    {
        label: 'MWM',
        value: 'mwm',
    },
    {
        label: 'Leatherspa',
        value: 'leatherspa',
    },
    {
        label: 'Personnal projects',
        value: 'personnal',
    },
]

const Page = () => {
    const [tab, setTab] = useState('mwm')

    const handleBadgeClick = (value: string) => () => setTab(value)

    const { isScrolling } = useOnScroll()

    const filteredProjectCard = projectCard.filter(
        (project) => project.company === tab
    )

    const TITLE_CONTENT: Record<string, string> = {
        mwm: `As a part of MWM Frontend team, we worked on about twenty different project. Most of them are private. Here are some public one.`,
        leatherspa: `As a part of Leatherspa Frontend team, we worked on the commercial Website, the admin dashboard (private), and the Point of Sale Software where I discovered SwiftUI (private).`,
        personnal:
            'A lot of different things, trying to cover a lot of subject I like. Recently Xperience to play a bit with OpenAi fine tuning. Feel free to visit my github account',
    }

    return (
        <>
            <div
                className={classNames('projects-view', {
                    'projects-view--is-scrolling': isScrolling,
                })}
            >
                <h1 className="projects-view__title">What I worked on.</h1>
                <div className="projects-view__badges">
                    {badges.map(({ label, value }, idx) => (
                        <div
                            key={idx}
                            className={classNames(
                                'projects-view__badges__badge',
                                {
                                    'projects-view__badges__badge--selected':
                                        value === tab,
                                }
                            )}
                            onClick={handleBadgeClick(value)}
                        >
                            {label}
                        </div>
                    ))}
                </div>
                <div className="projects-view__content">
                    <div className="projects-view__content">
                        <div className="projects-view__content__title">
                            {TITLE_CONTENT[tab]}
                        </div>
                        <div className="projects-view__content__cards">
                            {filteredProjectCard.map(
                                ({ pictureSrc, videoSrc, title, url }) => {
                                    return (
                                        <ProjectCard
                                            key={url}
                                            pictureSrc={pictureSrc}
                                            videoSrc={videoSrc}
                                            title={title}
                                            url={url}
                                        />
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
