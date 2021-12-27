import React from 'react'
import logo from "../images/logo.png"
import {CgMenuRight} from "react-icons/cg"
import GlobalContext from '../Context'
const Navbar = () => {
    const {setNavHeight } = GlobalContext()
    const navRef = React.useRef(null)
    React.useEffect(() => {
        const height = navRef.current.getBoundingClientRect().height
        setNavHeight(height)
    }, [setNavHeight] )
    return (
        <div ref={navRef} className='navbar px-4 py-2 fixed top-0 left-0 right-0 bg-white z-50 mb-4 flex items-center justify-between'>
            <img src={logo} className='w- relative top-2 right-2 h-20' alt="logo" />
            <CgMenuRight className='w-7 h-7'/>
        </div>
    )
}

export default Navbar
