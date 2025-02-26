import { useState, useEffect } from 'react'

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    //@ts-expect-error event not yet typed
    const handleScroll = (e) => {
        setScrollPosition(e.target.scrollTop)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true,
            capture: true,
        })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const isScrolling = scrollPosition > 30

    return { scrollPosition, isScrolling }
}

export default useScrollPosition
