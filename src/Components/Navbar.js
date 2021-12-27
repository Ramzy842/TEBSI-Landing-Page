import React from 'react'
import logo from "../images/logo.png"
import {CgMenuRight} from "react-icons/cg"
const Navbar = () => {
    return (
        <div className='navbar mb-4 flex items-center justify-between'>
            <img src={logo} className='w-24 relative top-2 right-2 h-24' alt="logo" />
            <CgMenuRight className='w-7 h-7'/>
        </div>
    )
}

export default Navbar
