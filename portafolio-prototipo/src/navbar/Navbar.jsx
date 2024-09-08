import React from 'react'
import { useState } from 'react'
import { OpenMenu } from './OpenMenu'
export const Navbar = () => { 
   
    
  return (
    <div>
        <header className='header'>
            <div>
                <img src="https://pbs.twimg.com/profile_images/1717245025505914880/hmTsV_yO_400x400.jpg" alt="" />
            </div>
            <OpenMenu/>
           
        </header>
        
    </div>
  )
}
