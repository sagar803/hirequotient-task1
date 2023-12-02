import React from 'react'
import { motion } from "framer-motion"
import './index.css'
import logo from '../../assets/logo.webp'

export const Footer = () => {
  return (
      <motion.div
        className='footer-section'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 }}}
      >
        <div className='footer'>
            <img src={logo} alt='logo'/>
            <ul className='footer-ul'>
                <li>Feature</li>
                <li>FAQ</li>
                <li>Pricing</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <p style={{padding: '40px 180px'}}>© 2022 ManageWise, Inc.</p>
      </ motion.div>
  )
}
