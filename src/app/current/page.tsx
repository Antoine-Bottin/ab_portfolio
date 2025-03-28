import './styles.scss'

const Page = () => {
    return (
        <div className="current-view">
            <h1 className="current-view__title">Actual projects</h1>
            <ul className="current-view__items">
                <li>Finishing this portfolio</li>
                <li>
                    <span>
                        <a
                            href="https://xperience.abottin.dev"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            Curriculum Vitae Q&A based on ChatGPT fine tunning{' '}
                        </a>
                    </span>
                </li>
                <li>Deepen my knowledge about CI</li>
            </ul>

            <div className="current-view__content"></div>
        </div>
    )
}

export default Page
