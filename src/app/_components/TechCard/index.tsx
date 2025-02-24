import Image from 'next/image'

import RatingStars from '../RatingStars'

import './styles.scss'

interface Props {
    label: string
    src: string
    level: number
    comment: string
}

const TechCard = ({ label, src, level, comment }: Props) => {
    return (
        <div className="tech-card-component">
            <h2 className="tech-card-component__title">{label}</h2>
            <div className="tech-card-component__picture">
                <Image src={src} alt={label} fill />
            </div>
            <div className="tech-card-component__level">
                <RatingStars value={level} />
            </div>
            <div className="tech-card-component__comment">{comment}</div>
        </div>
    )
}

export default TechCard
