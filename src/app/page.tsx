import './styles.scss'
import Image from 'next/image'

// const interview = [
//   {
//     object: 'Who am I ?',
//     content: 'Patattieiteiteititietieiteit',
//   },
//   {
//     object: 'About me',
//     content: 'Patattieiteiteititietieiteit',
//   },
//   {
//     object: 'My favorite color',
//     content: 'Patattieiteiteititietieiteit',
//   },
//   {
//     object: 'My favorite color',
//     content: 'Patattieiteiteititietieiteit',
//   },
//   {
//     object: 'My favorite color',
//     content: 'Patattieiteiteititietieiteit',
//   },
// ]

const Page = () => {
  return (
    <div className="home-view">
      <div className="home-view__picture-section">
        <video
          className="home-view__picture-section__video"
          autoPlay
          loop
          muted
        >
          <source src="/assets/96112-646236949_small.mp4" type="video/mp4" />
        </video>
        <div className="home-view__picture-section__picture">
          <Image src="/assets/Photo_CV.jpg" alt="My picture" fill />
        </div>
          <div className="home-view__picture-section__title">Antoine Bottin</div>
      </div>
      {/* <div className="infos-container"> */}
      {/* {interview.map(({ object, content }, idx) => {
          return (
            <div className="info" key={idx}>
              <h1>{object}</h1>
              <div>{content}</div>
            </div>
          )
        })} */}
      {/* </div> */}
    </div>
  )
}

export default Page
