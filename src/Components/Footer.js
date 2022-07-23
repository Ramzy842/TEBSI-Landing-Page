/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import footer from '../Data/footer'
import logo from "../images/logo.png"
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsLinkedin
} from "react-icons/bs"

const Footer = () => {
    return (
        <div className='container mx-auto max-w-7xl' >
            <div className='grid mt-8 gap-8 p-4 grid-cols-2 md:grid-cols-4'>
                {footer.map(data => {
                    const { id, title, subtitles } = data
                    return <div className='' key={id}>
                        <h1 className='mb-4 font-semibold text-xl'>{title}</h1>
                        <ul >
                            {subtitles.map((subtitle, index) => {
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                return <li className='mb-4 text-xl' key={index}><a href="#">{subtitle}</a></li>
                            })}
                        </ul>
                    </div>
                })}
            </div>


            <div className=' flex flex-col md:flex-row md:justify-between items-center'>
                <img className='w-24 h-24' src={logo} alt="logo" />
                <div className='flex  w-4/5 md:w-[40%] justify-evenly p-4'>
                    <div className='rounded-full border border-indigo-900 text-orange-500 hover:bg-indigo-900 p-3 '>
                        <a href="#"> <BsFacebook /></a>
                    </div>
                    <div className='rounded-full border  border-indigo-900 text-orange-500 hover:bg-indigo-900 p-3 '>
                        <a href="#"> <BsInstagram /></a>
                    </div>
                    <div className='rounded-full border border-indigo-900 text-orange-500 hover:bg-indigo-900 p-3 '><a href="#"><BsTwitter /></a></div>
                    <div className='rounded-full border border-indigo-900 text-orange-500 hover:bg-indigo-900 p-3 '><a href="#"><BsLinkedin /></a></div>

                </div>

            </div>
        </div>
    )
}

export default Footer
