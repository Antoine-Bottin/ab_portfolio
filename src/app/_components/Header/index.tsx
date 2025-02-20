import Image from 'next/image'

import './styles.scss'

const Header = () => {
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
                    Software Developer
                </div>
            </div>
        </div>
    )
}

export default Header
