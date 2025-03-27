'use client'

import Image from 'next/image'

import classNames from 'classnames'
import useExperienceCounter from '~/_hooks/useExperienceCounter'
import useScrollPosition from '~/_hooks/useOnScroll'

import './styles.scss'
import SwitchButton from '../SwitchButton'
import { useState } from 'react'

const Header = () => {
    const period = useExperienceCounter()

    const { isScrolling } = useScrollPosition()

    const [isInputChecked, setIsInputChecked] = useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setIsInputChecked(event.currentTarget.checked)

    return (
        <div
            className={classNames('header', {
                'header__is-scrolling': isScrolling,
            })}
        >
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
                        src={`/assets/pictures/Photo_CV${
                            isInputChecked ? '2' : ''
                        }.jpg`}
                        alt="My picture"
                        fill
                    />
                    <SwitchButton
                        className="header-switch-button"
                        onInputChange={handleInputChange}
                    />
                </div>
                <div className="header__picture-section__title">
                    Antoine Bottin
                </div>
                <div
                    className={classNames('header__picture-section__job', {
                        'header__picture-section__job__is-scrolling':
                            isScrolling,
                    })}
                >
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
