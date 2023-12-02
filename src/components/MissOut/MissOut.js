import React from 'react'
import { motion } from "framer-motion"
import { TitleContainer } from '../TitleContainer/TitleContainer'
import m1 from '../../assets/m1.jpg'
import './MissOut.css'

export const MissOut = () => {
  return (
    <motion.div
        className='miss-out-section'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 }}}
    >
        <div className='miss-out'>
            <TitleContainer title={'👋  DO NOT MISS OUT'}/>
            <div className='flex'>
                <div className='container1'>
                    <p className='heading'>Unleash your <span style={{   color: '#fe8162'}}>Potential</span> with us</p>
                    <p className='sub-heading'>Join our community of ambitious individuals and organizations eager to make a difference.</p>
                </div>
                <img src={m1} alt='img'/>
            </div>
            <div className='button'>Try out now</div>
        </div>

    </motion.div>
  )
}
