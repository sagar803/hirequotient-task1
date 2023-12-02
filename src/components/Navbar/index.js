import React from 'react'
import './index.css'
import logo from './logo.webp'


export const Navbar = () => {
  return (
    <nav className='navbar'>
        <img className='logo' src={logo} alt='Logo' />
        <ul className='nav-ul'>
            <li><a href='#features'>Feature</a></li>
            <li><a href='#faq'>FAQ</a></li>
            <li><a href='#pricing'>Pricing</a></li>
            <li><a href='#testimonials'>Testimonials</a></li>
        </ul>
    </nav>
  )
}
