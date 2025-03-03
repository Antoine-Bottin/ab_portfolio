import './styles.scss'

const Page = () => {
    return (
        <div className="contacts-view">
            <h1 className="contacts-view__title">Contact me.</h1>
            <div className="contacts-view__content">
                <div
                    className="badge-base LI-profile-badge"
                    data-locale="fr_FR"
                    data-size="large"
                    data-theme="dark"
                    data-type="VERTICAL"
                    data-vanity="antoine-bottin"
                    data-version="v1"
                >
                    <a
                        className="badge-base__link LI-simple-link"
                        href="https://fr.linkedin.com/in/antoine-bottin?trk=profile-badge"
                    ></a>
                </div>
            </div>
        </div>
    )
}

export default Page
