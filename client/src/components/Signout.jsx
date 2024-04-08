import React, { useEffect, useState } from 'react'
import { FaSignOutAlt } from "react-icons/fa";
const Signout = ({logout}) => {
  const [menuactive, setMenuactive] = useState(false);
 useEffect(()=>{
  if(!menuactive){
    document.querySelector('.logout').style.left ='-65px' 
  }else{
    document.querySelector('.logout').style.left ='0px'
  }
  
 },[menuactive])
  return (
    <div className="logout">
    <FaSignOutAlt
      onClick={() => setMenuactive(!menuactive)}
      className="menu"
    />
    <h5 onClick={logout} >Logout</h5>
  </div>
  )
}

export default Signout