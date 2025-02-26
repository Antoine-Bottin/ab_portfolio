'use client'

import ProjectCard from '~/components/ProjectCard'
import './styles.scss'

const projectCard = [
    {
        pictureSrc: '/assets/icons/stemz-logo.svg',
        videoSrc: '/assets/videos/Stemz.mp4',
        title: 'Stemz Web',
        url: 'https://stemz.mwm.io/',
    },
    {
        pictureSrc: '/assets/icons/color-pop.png',
        videoSrc: '/assets/videos/ColorPop.mp4',
        title: 'Color Pop',
        url: 'https://colorpop.ai/',
    },
    {
        pictureSrc: '/assets/icons/mwm-rounded.webp',
        videoSrc: '/assets/videos/Website.mp4',
        title: 'MwM Website',
        url: 'https://mwm.ai/',
    },
    {
        pictureSrc: '/assets/icons/yousing-logo.svg',
        videoSrc: '/assets/videos/YouSing.mov',
        title: 'Yousing',
        url: 'https://www.yousing.ai/',
    },
]
const Page = () => {
    // const header = document.querySelector('.header') as HTMLElement
    // const projectsView = document.querySelector('.projects-view') as HTMLElement

    // const updateHeight = () => {
    //     if (!header || !projectsView) return
    //     console.log(header.classList?.contains('header header__is-scrolling'))

    //     if (header.classList.contains('header') && header.classList.contains('header__is-scrolling')) {
    //         projectsView.style.height = 'calc(100dvh - 15.5rem)'
    //     } else {
    //         projectsView.style.height = 'calc(100dvh - 25.5rem)'
    //     }
    // }

    // // Run on scroll (or any event that modifies `.header__is-scrolling`)
    // window.addEventListener('scroll', updateHeight, {
    //     passive: true,
    //     capture: true,
    // })

    return (
        <>
            <div className="projects-view">
                <h1 className="projects-view__title">What I worked on.</h1>
                <div className="projects-view__content">
                    <div className="projects-view__content__mwm">
                        <div className="projects-view__content__mwm__title">
                            As a part of MWM Frontend team, we worked on about
                            twenty different project. Most of them are private.
                            Here are some public one.
                        </div>
                        <div className="projects-view__content__mwm__cards">
                            {projectCard.map(
                                ({ pictureSrc, videoSrc, title, url }, idx) => {
                                    return (
                                        <ProjectCard
                                            key={idx}
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
                    <div className="projects-view__content__leatherspa">
                        <div className="projects-view__content__leatherspa__title">
                            As a part of Leatherspa Frontend team, we worked on
                            the commercial Website.
                        </div>
                        <div className="projects-view__content__leatherspa__cards">
                            {projectCard.map(
                                ({ pictureSrc, videoSrc, title, url }, idx) => {
                                    return (
                                        <ProjectCard
                                            key={idx}
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
