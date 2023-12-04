import React from 'react'
import { motion } from "framer-motion"
import { TitleContainer } from '../TitleContainer/TitleContainer';
import { HelpCard } from '../Widgets/HelpCards';
import './index.css'


export const Help = () => {
    const query = [
        {
            q: 'What is Manage Wise and what does it offer?',
            a: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.',
        },
        {
            q: 'What is Manage Wise and what does it offer?',
            a: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.',
        },
        {
            q: 'What is Manage Wise and what does it offer?',
            a: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.',
        },
        {
            q: 'What is Manage Wise and what does it offer?',
            a: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.',
        },
        {
            q: 'What is Manage Wise and what does it offer?',
            a: 'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.',
        },
    ]
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: .7 }}}
    >
        <div className='help'>
            <div className='layout1'>
                <TitleContainer title={'🙋‍♀️ FAQ'}/>
                <p className='heading'>Need  <span style={{   color: '#fe8162'}}>Answers?</span></p>
                <p className='sub-heading'>Check out our most commonly asked questions below to find the information you need.</p>
            </div>
            <div className='layout2'>
                {
                    query.map((q, index) => (
                        <HelpCard key={index} q={q}/>
                    ))
                }
            </div>
        </div>
    </motion.div>
  )
}
