import React from 'react'
import './index.css'

export const PriceCard = ({tag, price, features, theme, size}) => {

    const style = {
        backgroundColor: theme === 'dark' ? 'rgb(28, 28, 28)' : '#EDEDFA',
        color: theme === 'dark' ? 'white' : 'black',
//        scale: size === 'big' ? '1.1' : ''
    }

  return (
        <div className='price-card' style={style} >
            <span className='tag'>{tag}</span>
            <p><span className='price-span'>${price}</span>/months</p>
            {
                features.map((f) => (
                    <p className='feature-li'><span className='check-mark'>🗸</span>{f}</p>
                ))
            }
            <div className='button'>Get Started</div>
        </div>
  )
}
