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
                My favourite color is like a mix between blue and grey, but{' '}
                <span>who cares?</span> 😂
            </>
        ),
    },
    {
        content: (
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
