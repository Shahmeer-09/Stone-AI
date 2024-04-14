import React, {useState} from 'react'
import PropTypes from 'prop-types'


function Formtext(props) {
    const handleUpCase= ()=>{
        
        const newText = text.toUpperCase();
        setText(newText)
        props.show('converted to upper case', "success")
    }
    const handleLoCase= ()=>{
        
        const newText = text.toLowerCase();
        setText(newText)
        props.show('converted to lower case', "success")
    }
    const handleOnchange=(event)=>{
        // if(event.target.value===""){
            
        // }
        setText(event.target.value)
    }
    const handleEncase=(e)=>{
        let data=  text
        let val= data.replace(/\n/g, " ").split(' ').map(val=> val.split(''))
       setText( val.map(arr=> arr.map(letter=> String.fromCharCode((letter.charCodeAt()*6)/2 )).join('')).join(' '));
       e.target.classList.add("disabled");
       document.querySelector('.btnd').classList.remove('disabled')
       props.show('each character has moved to next index', "warning")
    }
    const handleSpaces=()=>{
        let val = text.split(/[  ]+/)
        setText(val.join(' '))
    }
    const handlDEcase=(e)=>{
        let data=  text
        let val= data.replace(/\n/g, " ").split(' ').map(val=> val.split(''))
          setText( val.map(arr=> arr.map(letter=> String.fromCharCode((letter.charCodeAt()*2)/6)).join('')).join(' '));
         e.target.classList.add("disabled")
       document.querySelector('.btne').classList.remove('disabled')
       props.show('Each character has moved to previous index', "warning")
    }
    const [text, setText] = useState("");
    
    return (
    <>
  <div className="mb-3 container-sm" style={{color: props.mode==="dark"? "white":"black"}}>
     <h2>{props.heading}</h2>
    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==="dark"? "rgb(4 3 51)":"white" ,color:props.mode==="dark"? "white": "black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button   disabled={text.length===0}  className='btn btn-primary my-3 mx-1' onClick={handleUpCase}>To Uppercase</button>
    <button  disabled={text.length===0}className='btn btn-primary my-3 mx-1' onClick={handleLoCase}>To lowercase</button>
    <button   disabled={text.length===0} className='btn btne btn-primary my-3 mx-1 '  onClick={handleEncase}>Encypt text</button>
    <button  disabled={text.length===0}className='btn btnd btn-primary my-3 mx-1' onClick={handlDEcase}>Decrypt text</button>
    <button  disabled={text.length===0}className='btn btn-primary my-3 mx-1' onClick={handleSpaces}>Remova spaces</button>
  </div>
  <div className="container my-2" style={{color:props.mode==="dark"? "white": "black"}}>
     <h3>Your Text Summary</h3>
     <p>{text.replace(/\n/g, " ").split(' ').filter(value=> value!=="" ).length } word and {text.length} charaters</p>
     <h3>Time to read</h3>
     <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value=> value!=="" ).length }</p>
     <h3>Text Preview</h3>
     <p>{text.valueOf()===""? "Enter some thing to get shown here" : text }</p>
  </div>
  </>
  )
}

Formtext.propTypes = {  
    heading: PropTypes.string,
}

export default Formtext

