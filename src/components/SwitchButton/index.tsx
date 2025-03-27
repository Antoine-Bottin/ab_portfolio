import classNames from 'classnames'
import './styles.scss'

interface Props {
    className?: string
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SwitchButton = ({ className, onInputChange }: Props) => {
    const switchClasses = classNames('switch', className)

    return (
        <label className={switchClasses}>
            <input type="checkbox" onChange={onInputChange} />
            <span className="slider round"></span>
        </label>
    )
}

export default SwitchButton
