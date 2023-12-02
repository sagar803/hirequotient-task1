import React from 'react'
import { motion } from "framer-motion"
import { TitleContainer } from '../TitleContainer/TitleContainer';
import './index.css'

export const Explore = () => {
  return (
    <section className='explore-section'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 }}}
  //      viewport={{ once: true }}
      >
        <div className='explore'>
          <TitleContainer title={'🤩  AND MORE...'}/>
          <p className='heading'>Explore an array of features that elevate your <span style={{   color: '#fe8162'}}>Productivity</span> to new heights</p>
          <p className='sub-heading'>Discover the tools that will revolutionize the way you manage and optimize your operations</p>
          <div className='cards-container'>
            <div className='card'>
              <span>🤩</span>
              <h2>Cross-Platform Compatibility</h2>
              <p>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</p>
            </div>
            <div className='card'>
              <span>🤩</span>
              <h2>Stay Informed with Essential Notifications</h2>
              <p>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</p>
            </div>
            <div className='card'>
              <span>🤩</span>
              <h2>Secure Data Encryption at all times</h2>
              <p>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</p>
            </div>
          </div>
        </div>
      </ motion.div>
    </section>
  )
}
