import React from 'react'
import video from '../assets/video.mp4'
import { EXPERIENCE } from '../constants'
import { motion } from 'motion/react'

const containerVariant = {
    hidden:{ opacity:0 , y:20},
    visible:{ opacity:1 , y:0, transition:{duration:1, staggerChildren:0.8}}
}

const itemVariant = {
    hidden:{ opacity:0 , x:-20},
    visible:{ opacity:1 , x:0, transition:{duration:0.5}}
}
const Experience = () => {
    return (
        <div id='experience'>
            <h2 className='mb-20 mt-20 text-center text-4xl font-semibold'>Experience</h2>
            <motion.div 
            initial='hidden'
            whileInView='visible'
            variants={containerVariant}
            viewport={{once:true}}
            className="mx-auto flex max-w-6xl flex-wrap ">
                <motion.div 
                variants={itemVariant}
                className='w-full p-2 sm:w-1/2'>
                    <video className='w-full rounded-lg' autoPlay muted loop>
                        <source src={video} type='video/mp4' />
                    </video>
                </motion.div>
                <motion.div
                variants={itemVariant}
                className="w-full p-4 text-center sm:w-1/2">
                    <h2 className='mb-4 text-3xl '>
                        {EXPERIENCE[0].title}
                    </h2>
                    <span className='mt-4 border-b border-yellow-400 text-xl font-semibold uppercase text-yellow-400'>
                        {EXPERIENCE[0].company}
                    </span>
                    <p className='m-4 p-2 italic'>
                        {EXPERIENCE[0].description}
                    </p>
                </motion.div>
            </motion.div>
            <motion.div 
            initial='hidden'
            whileInView='visible'
            variants={containerVariant}
            viewport={{once:true}}
            className="mx-auto flex max-w-6xl flex-wrap ">
                <motion.div
                variants={itemVariant}
                className="w-full p-4 text-center sm:w-1/2">
                    <h2 className='mb-4 text-3xl '>
                        {EXPERIENCE[1].title}
                    </h2>
                    <span className='mt-4 border-b border-yellow-400 text-xl font-semibold uppercase text-yellow-400'>
                        {EXPERIENCE[1].company}
                    </span>
                    <p className='m-4 p-2 italic'>
                        {EXPERIENCE[1].description}
                    </p>
                </motion.div>
                <motion.div 
                variants={itemVariant}
                className='w-full p-2 max-sm:hidden md:w-1/2'>
                    <video className='w-full rounded-lg' autoPlay muted loop>
                        <source src={video} type='video/mp4' />
                    </video>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Experience