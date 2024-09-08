import React from 'react'
import { useState } from 'react'
export const Navbar = () => { 
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () =>{
            setIsOpen(!isOpen)
        }
    
  return (
    <div>
        <header className='header'>
            <div>
                <img src="https://pbs.twimg.com/profile_images/1717245025505914880/hmTsV_yO_400x400.jpg" alt="" />
            </div>
            <div>
                <button onClick={toggleMenu}>{isOpen ? "X" : "="}</button>
                {isOpen && (
                <nav>
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Profile</a></li>
                        <li><a href="#services">Portafolio</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            )}
            </div>
           
        </header>
        
    </div>
  )
}
