import Navbar from './components/Navbar'
import Formtext from './components/Formtext'
import About from './components/About';
import React, { useState } from 'react'
import Zalert from  './components/Zalert'

import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
    
 function App() {
  
  
  const [mode, setMode] = useState('light');
  const [Alert, setAlert] = useState(null);
  
  const showAlert=(message, type) =>{
       setAlert({ 
           msg: message,
           type: type,
       })
       setTimeout(() => {
          setAlert(null)
       }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert('Light mode is enabled', "success")
     
    }else{
      setMode('dark')
      document.body.style.backgroundColor = "rgb(4 3 51)"
      showAlert('Dark mode is enabled', "success")
      
    }
  }

    
  
    return (
      <>
     
     <BrowserRouter>
        <Navbar  title="TextUtils" aboutText = "About utils"    mode={mode} toggleMode={toggleMode} /> 
          <Zalert Alert={Alert} />
        <div className="container my-3">
        
        <Routes>
          <Route  exact path="/about" element={<About mode={mode}/>} />
          <Route  exact path="/" element={<Formtext show={showAlert} heading="Try Textutil - word counter, uppercase , lowercase converter,copy text "  mode={mode}/>} />
            
        </Routes>
        </div>

        </BrowserRouter>
      </>
    );
    }

    export default App;