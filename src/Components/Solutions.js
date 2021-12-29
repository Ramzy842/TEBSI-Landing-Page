import React from 'react'
import solutions from '../Data/solutions'
import Underline from './Underline'

const Solutions = () => {
    return (
        <div className='px-4 py-8 text-center' >
            <Underline position='mx-auto' />
            <h1 className='my-6 text-3xl font-semibold tracking-wide w-11/12 mx-auto'>The best solutions in one software</h1>
            {solutions.map(solution => {
                const {id, image, title, content} = solution;
                return <div className='mb-6 ' key={id}>
                    <img src={image} className='mx-auto' alt={title} />
                    <h1 className='my-4 font-semibold text-xl'>{title}</h1>
                    <p className='text-xl'>{content}</p>
                </div>
            })}
        </div>
    )
}

export default Solutions
