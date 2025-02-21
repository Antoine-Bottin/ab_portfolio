import './styles.scss'

// interface IInterview {
//     object: string
//     content: ReactNode
// }

// const interview: IInterview[] = [
//     {
//         object: 'Who am I?',
//         content: (
//             <>
//                 I&#39;m <span>Antoine</span>, an enthusiastic 40-year-old father
//                 of two 👶🏼 and a software developer. <br /> Years ago, I used to
//                 be a 🎻 (cello) player.
//                 <br /> Then I became a 🍸🍻🎉 (a bartender, not an alcoholic
//                 😉).
//                 <br />
//                 Four years ago, I decided to make a career change to become what
//                 I really enjoy now.
//             </>
//         ),
//     },
//     {
//         object: 'My favorite color',
//         content: (
//             <>
//                 It&#39;s like a mix between blue and grey, but{' '}
//                 <span>who cares?</span>
//             </>
//         ),
//     },
// ]

const Page = () => {
    return (
        <div className="home-view">
            {/* <div className="infos-container">
                {interview.map(({ object, content }, idx) => {
                    return (
                        <div key={idx} className="infos-container__snapscroll">
                            <div className="infos-container__snapscroll__title">
                                {object}
                            </div>
                            <div className="infos-container__snapscroll__content">
                                {content}
                            </div>
                        </div>
                    )
                })}
            </div> */}
        </div>
    )
}

export default Page
