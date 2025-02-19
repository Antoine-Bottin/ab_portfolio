import './styles.scss'
import Image from 'next/image'

const interview = [
  {
    object: 'Who am I ?',
    content: 'Patattieiteiteititietieiteit',
  },
  {
    object: 'About me',
    content: 'Patattieiteiteititietieiteit',
  },
  {
    object: 'My favorite color',
    content: 'Patattieiteiteititietieiteit',
  },
]

const Page = () => {
  return (
    <div className="home-view">
      <div className="home-view__picture-section">
        <div className="home-view__picture-section__picture">
          <Image
            src="/assets/Photo_CV.jpg"
            alt="My picture"
            fill
            style={{ borderRadius: '50%' }}
          />
        </div>
      </div>
      <div className="infos-container">
        {interview.map(({ object, content }) => {
          return (
            <div className="info" key={object}>
              <h1>{object}</h1>
              <div>{content}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page
