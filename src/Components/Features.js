import React, { useEffect, useRef, useState } from 'react'
import Underline from './Underline'
import features from "../Data/features"
import { BsArrowRight } from "react-icons/bs"

const Features = () => {
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)

    const featureRef = useRef()
    useEffect(() => {
        setHeight(featureRef.current.getBoundingClientRect().height)
        setWidth(featureRef.current.getBoundingClientRect().width)
        console.log("height:", featureRef.current.getBoundingClientRect().height, "and width:", featureRef.current.getBoundingClientRect().width);
    }, [])
    return (
        <div className='px-4'>
            <Underline position="" />
            <h3 className='text-3xl  tracking-wide font-semibold w-11/12 mt-8'>Software for every kind of business</h3>
            <p className='text-xl tracking-normal my-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
            <ul className='grid sm:gap-2 md:gap-4 sm:grid-cols-2'>
                {features.map(feature => {

                    const { id, image, title } = feature;

                    return <div key={id} ref={featureRef} className=' border-2 border-black p-8 bg-gray-100 mb-4'>
                        <img src={image} alt={title} className='border-2 border-gray-400' />
                        <h3 className='text-3xl tracking-wide font-semibold w-11/12 mt-8'>{title}</h3>
                        <button className='mt-8 w-44 text-xl hover:text-gray-500 text-left font-semibold text-orange-500'>Learn More <BsArrowRight className='inline-block' /></button>
                    </div>



                })}
            </ul>
        </div>
    )
}

export default Features
