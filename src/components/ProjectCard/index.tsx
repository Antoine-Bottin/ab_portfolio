'use client'

import Image from 'next/image'

import './styles.scss'
import { ReactElement } from 'react'

interface Props {
    pictureSrc: string
    videoSrc: string
    title: string
    url: string
}

const ProjectCard = ({
    pictureSrc,
    videoSrc,
    title,
    url,
}: Props): ReactElement => {
    const handleUrlClick = () => window.open(`${url}`, '_blank')

    return (
        <div className="project-card-component" onClick={handleUrlClick}>
            <div className="project-card-component__infos">
                <h1 className="project-card-component__infos__title">
                    {title}
                </h1>
                <div className="project-card-component__infos__logo">
                    <Image src={pictureSrc} alt={title} fill />
                </div>
            </div>
            <div className="project-card-component__video">
                <video autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default ProjectCard
