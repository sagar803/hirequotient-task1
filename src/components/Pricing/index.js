import React from 'react'
import { motion } from "framer-motion"
import { TitleContainer } from '../TitleContainer/TitleContainer'
import './index.css'
import { PriceCard } from '../Widgets/PriceCard'


export const Pricing = () => {
    const price = [
        {
            tag: 'FREE',
            price: 0,
            features: ['Access to all basic features', 'Reporting and analytics', 'Up to 5 individual users', 'Chat and email support'],
            theme: 'light',
            size: 'small'
        },
        {
            tag: 'STANDARD',
            price: 25,
            features: ['Access to all basic features', 'Reporting and analytics', 'Up to 5 individual users', 'Chat and email support', '3+ integrations' ,'Account performance reporting'],
            theme: 'dark',
            size: 'big'
        },
        {
            tag: 'BUSINESS',
            price: 42,
            features: ['Access to all basic features', 'Reporting and analytics', 'Up to 5 individual users', 'Chat and email support', '3+ integrations'],
            theme: 'light',
            size: 'small'
        }
    ]
  return (
    <motion.div
        className='flex'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 }}}
    >
        <div className='pricing' id='pricing'>
            <TitleContainer title={'💲PRICING'}/>
            <p className='heading'>Select your ideal <span style={{   color: '#fe8162'}}>Pricing </span> plan</p>
            <p className='sub-heading'>At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</p>
            <div className='price-cards-container'>
                {
                    price.map((p, index) => (
                        <PriceCard key={index} theme={p.theme} features={p.features} tag={p.tag} size={p.size} price={p.price}/>
                    ))
                }
            </div>
        </div>
    </motion.div>
  )
}
