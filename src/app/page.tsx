'use client'

import { ReactNode } from 'react'
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps'

import './styles.scss'

interface IInterview {
    content: ReactNode
}

const position = { lat: 49.922992, lng: 1.077483 }

const interview: IInterview[] = [
    {
        content: (
            <>
                Passionate about <span>web development</span>, I have deepened
                my Frontend <span>Javascript / Typescript</span> skills with the
                <span> ReactJS and NextJS</span> frameworks for three years. I
                love taking on new challenges, and discovering new languages
                does not scare me at all. I enjoy manipulating data and work on
                my backend skills in my spare time.{' '}
                <span>Reconverted for three years,</span>I have found in this
                ever-evolving field something to satisfy my appetite for
                creativity.
            </>
        ),
    },
    {
        content: (
            <>
                Years ago I used to be a musician 🎻 (cello player), and then I
                started working in <span>hospitality</span> and became
                🍻🍸🍹🎉(bartender, not alcoholic). One day in <span>2020</span>{' '}
                I decided to do what I really wanted to do for living and did a
                Bootcamp to become <span>web developer</span>.
            </>
        ),
    },
    {
        content: (
            <>
                My favourite color is like a mix between blue and grey, but{' '}
                <span>who cares?</span> 😂
            </>
        ),
    },
    {
        content: (
            <>
                I m leaving in the crountryside close to Dieppe
                <div className="google-map">
                    <APIProvider
                        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!}
                    >
                        <Map
                            defaultCenter={position}
                            defaultZoom={8}
                            mapId="Dieppe"
                            disableDefaultUI={true}
                            onTilesLoaded={() => console.log('loaded')}
                            fullscreenControl={true}
                            colorScheme="DARK"
                        >
                            <AdvancedMarker position={position} />
                        </Map>
                    </APIProvider>
                </div>
            </>
        ),
    },
]

const Page = () => {
    return (
        <div className="home-view">
            <h1 className="home-view__title">About me </h1>
            <div className="infos-container">
                {interview.map(({ content }, idx) => {
                    return (
                        <div key={idx} className="infos-container__snapscroll">
                            <div className="infos-container__snapscroll__content">
                                {content}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Page
