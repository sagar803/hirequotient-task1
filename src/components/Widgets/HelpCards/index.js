import React from 'react'
import './index.css'
import { useState } from 'react';

export const HelpCard = ({q}) => {
    const [open, setOpen] = useState(false);
  return (
        <div className='help-card' >
            <span className='help-card-button' onClick={() => setOpen(!open)}>{open ? 'x' : '+'}</span>
            <h2 style={{color: open ? 'rgb(130, 71, 255)' : 'black'}}>{q.q}</h2>
            <p style={{display: open ? 'block' : 'none'}} >{q.a}</p>
        </div>
  )
}