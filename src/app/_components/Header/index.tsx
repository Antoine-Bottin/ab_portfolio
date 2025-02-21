'use client'

import Image from 'next/image'

import useExperienceCounter from '@/_hooks/time'

import './styles.scss'

const Header = () => {
    const period = useExperienceCounter()

    return (
        <div className="header">
            <div className="header__picture-section">
                <video
                    className="header__picture-section__video"
                    autoPlay
                    loop
                    muted
                >
                    <source
                        src="/assets/videos/96112-646236949_small.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="header__picture-section__picture">
                    <Image
                        src="/assets/pictures/Photo_CV.jpg"
                        alt="My picture"
                        fill
                    />
                </div>
                <div className="header__picture-section__title">
                    Antoine Bottin
                </div>
                <div className="header__picture-section__job">
                    <div className="header__picture-section__job__title">
                        Software Developer <div>for</div>
                    </div>
                    <div className="header__picture-section__job__period">
                        {period}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
