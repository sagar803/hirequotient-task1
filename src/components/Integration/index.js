import React from 'react'
import { motion } from "framer-motion"
import './index.css'
import { TitleContainer } from '../TitleContainer/TitleContainer';
import i1 from '../../assets/i1.webp'

export const Integration = () => {
  return (
    
    <section className='integration-section'>
      <motion.div
        className='flex'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 }}}
      >
        <div className='integration'> 
          <TitleContainer title={'INTEGRATIONS'}/>
          <p className='heading'>Enable <span style={{   color: '#fe8162'}}>integration </span> with other popular tools and platforms</p>
          <p className='sub-heading'>Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.</p>
          <img src={i1} alt='img'></img>
        </div>
      </ motion.div>
    </section>
  )
}
