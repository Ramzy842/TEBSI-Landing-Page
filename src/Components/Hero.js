import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import GlobalContext from '../Context'
import Underline from './Underline'

const Hero = () => {
    const {navHeight} = GlobalContext()
    return (
        <div className={`text-center`} style={{marginTop: `${navHeight}px`}}>
            <h1 className='text-4xl mx-auto w-4/5 p-2  font-semibold '>Grow your audience. Improve your marketing <Underline position="mx-auto" /> </h1>
            <p className='w-full text-xl mt-2 font-medium px-3'>Learn where your audience struggle as they navigate your digital business. Pair this understanding of the individual experience with powerful quantitative insights to inform your digital decisions.</p>
            <div className='mt-8'>
                <button className='bg-gray-800 z-20 p-4 w-40 tracking-wide text-white font-bold'>TRY FOR FREE</button>
                <div className=' relative bottom-10 right-4 -z-10 bg-orange-500 h-14 mx-auto w-40 p-4'></div>
            </div>
            
            <button className='mt-8 mb-12 w-44 text-xl hover:text-gray-500 text-left font-semibold text-orange-500'>Request a demo <BsArrowRight className='inline-block' /> </button>
        </div>
    )
}

export default Hero
