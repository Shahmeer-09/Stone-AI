import React from 'react'


  function Zalert(props) {
     const capitalize=(word)=>{
         const lower = word.toLowerCase();
         return lower.charAt(0).toUpperCase() + lower.slice(1)
          }
  return (
         <div style={{height:"50px"}}>
           {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible  show" role="alert`}>
                <strong>{capitalize(props.Alert.type)}</strong> {props.Alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
             </div>}
          </div>
  )
}

export default Zalert

