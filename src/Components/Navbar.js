import React, { useCallback, useState } from 'react'
import logo from "../images/logo.png"
import { CgMenuRight } from "react-icons/cg"
import GlobalContext from '../Context'
const Navbar = () => {
    const { setNavHeight } = GlobalContext()
    const [isMoved, setIsMoved] = useState(false)

    const navRef = React.useRef(null)
    React.useEffect(() => {
        const height = navRef.current.getBoundingClientRect().height
        setNavHeight(height)

    }, [setNavHeight])

    const handleScroll = useCallback(() => {
        if (window.scrollY >= 20) {
            setIsMoved(true)

        } else if (window.scrollY < 20) {
            setIsMoved(false)

        }
    }, [])
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [handleScroll])
    return (
        <div ref={navRef} className={`navbar px-4  ${isMoved && "shadow-lg"} fixed top-0 left-0 right-0 bg-white z-50 mb-4 flex items-center justify-between `}>
            <img src={logo} className='w- relative right-2 h-20' alt="logo" />
            <CgMenuRight className='w-7 h-7'  />
        </div>
    )
}

export default Navbar
