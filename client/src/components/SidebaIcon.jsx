import React from 'react'
import Wrapper from '../assets/Wrapper/sidebar'
import {FaCode, FaReadme, FaRegFileAlt} from 'react-icons/fa'
import {GiArtificialIntelligence} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'
const SidebaIcon = () => {
  return (
    <Wrapper>
        <div className="cover container">
           <NavLink to={'jscode'} >
            <div className="iconDraw">
               <FaCode className='icon'/>
               <p>JS code Gen</p>
            </div>
           </NavLink>
           <NavLink to={'chatbot'}>
            <div className="iconDraw">
               <GiArtificialIntelligence  className='icon'/>
               <p>Ask Gpt</p>
            </div>
           </NavLink>
            <NavLink to={'summary'} >
            <div className="iconDraw">
               <FaReadme  className='icon'/>
               <p>Summarize your text</p>
            </div>
            </NavLink>
            <NavLink to={'paragraph'}>
            <div className="iconDraw">
               <FaRegFileAlt  className='icon'/>
               <p>Generate a pragrpah</p>
            </div>
            </NavLink>
        </div>
    </Wrapper>
   
  )
}

export default SidebaIcon