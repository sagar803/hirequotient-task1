import React from 'react'
import { motion } from "framer-motion"
import { TitleContainer } from '../TitleContainer/TitleContainer'
import './index.css'

export const Testimonials = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 }}}
    >
        <div className='testimonials'  id='testimonials'>
            <TitleContainer title={'🧡 TESTIMONIALS'}/>
            <p className='heading'>Hear from our <span style={{   color: '#fe8162'}}>Satisfied </span> clients</p>
            <p className='sub-heading'>Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</p>
        </div>
    </motion.div>
  )
}
