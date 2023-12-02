import React from 'react'
import './index.css'
import { motion } from "framer-motion"
import { TitleContainer } from '../TitleContainer/TitleContainer';
import f1 from '../../assets/f1.webp';
import f2 from '../../assets/f2.webp';
import f3 from '../../assets/f3.webp';
import f4 from '../../assets/f4.webp';

export const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: .7 }}}
//      viewport={{ once: true }}
    >
      <div className='features' id='features'>
        <TitleContainer title={'🔥PREMIER FEATURES'}/>
        <p className='heading'>Discover our product's <span style={{   color: '#fe8162'}}>Capabilities</span></p>
        <p className='sub-heading'>Don't settle for mediocrity - embrace the future of management with Manage Wise.</p>
        <div className='feature-container-1'>
          <div className='f1'>
            <span>⭐️</span>
            <h1>
              Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
            </h1>
          </div>
          <div className='f2'>
            <img src={f1} alt='img'></img>
            <h2>Flexible Scheduling</h2>
            <p>Stay productive with our flexible scheduling system</p>
          </div>
        </div>
        <div className='feature-container-2'>
          <div className='feature'>
            <img src={f2} alt='img'></img>
            <h2>Flexible Scheduling</h2>
            <p>Stay productive with our flexible scheduling system</p>
          </div>
          <div className='feature'>
            <img src={f3} alt='img'></img>
            <h2>Easy Communication</h2>
            <p>Collaborate seamlessly with your team in real-time</p>
          </div>
          <div className='feature'>
            <img src={f4} alt='img' ></img>
            <h2>Analytics</h2>
            <p>Gain valuable insights with our advanced analytics feature</p>
          </div>
        </div>
      </div>
    </ motion.div>
  )
}


