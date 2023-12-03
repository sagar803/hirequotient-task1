import React from 'react'
import './index.css'
import { motion } from "framer-motion"
import dashboradImage from '../../assets/img1.webp' 
import { TitleContainer } from '../TitleContainer/TitleContainer'

export const CallToAction = () => {
  return (
    <section className='cta-section'>
      <motion.div
        initial={{ opacity: 0, scale: 1, y: 50  }}
        whileInView={{ y : 0, opacity: 1, scale: 1, transition: { duration: 0.5 }}}
      >
        <div className='cta'>
          <TitleContainer title={'👋 WELCOME TO MANAGE WISE!'}/>
          <p className='heading'>Empower your business with <span style={{   color: '#fe8162'}}>Strategic</span> insights</p>
          <p className='sub-heading'>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</p>

          <div className='buttons-container'>  
            <div className='b1'>Get Started</div>
            <div className='b2'>Watch Demo</div>
          </div>
          <motion.img 
            initial={{ y: -50 }}
            whileInView={{ y: 0, transition: { duration: 2 }}}
            className='img' 
            src={dashboradImage} 
            alt='dashboard' 
          />
        </div>
      </ motion.div>
    </section>

  )
}
