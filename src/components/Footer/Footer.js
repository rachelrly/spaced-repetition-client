import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

function Footer() {
    return (
        <footer>
            <p>Rachel Reilly | 2020</p>
            <a href='https://github.com/Rachanastasia'>
                <SiGithub className='icon' />
            </a>
            <a href='https://www.linkedin.com/in/rachel-a-reilly/'>
                <SiLinkedin className='icon' />
            </a>
        </footer>
    )
}

export default Footer
