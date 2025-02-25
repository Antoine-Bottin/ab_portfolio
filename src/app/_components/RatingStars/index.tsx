import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'

const RatingStars = ({ value }: { value: number }) => {
    return (
        <div className="rating-component">
            {[...new Array(value)].map((__, idx) => (
                <MdOutlineStar size={15} key={idx} color="midnightblue" />
            ))}
            {[...new Array(5 - value)].map((__, idx) => (
                <MdOutlineStarBorder size={15} key={idx} color="white" />
            ))}
        </div>
    )
}

export default RatingStars
