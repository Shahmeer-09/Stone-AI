import React from "react";

export default function About(props) {
    
let myStyle = {
  color: props.mode==="dark"? "white" :"black",
  backgroundColor: props.mode ==="dark"?  "rgb(6 52 85)": "white",
  border: "1px solid ",
  borderColor:  props.mode ==="dark"?  "white": "black"
}


// const[btnText, setBtnText] = useState('Enable Light mode2')
// const changemode2=()=>{
//     if(myStyle.color==="white"){
//         setMystyle({
//             color:'black',
//             backgroundColor:"white",
//             border:'1px solid rgba(240,240,240)',
//         })
//         setBtnText('Enable Dark mode2')
//     }
//     else{
//         setMystyle({
//             color:'white',
//             backgroundColor:"black",
//             border:'1px solid white',
           
//         })
//         setBtnText('Enable Light mode2')
//     }
// }
  return (
    <div className="container">
     
        <h1 style={{color:props.mode ==="dark"?  "white": "black"}}>About Us</h1>
     
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={ myStyle}
            >
              Analyze text
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            style={ myStyle}
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
           style={ myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Use for free
            </button>
          </h2>
          <div
          style={ myStyle}
          
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
           style={ myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
         style={ myStyle}
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
         <button onClick={changemode2} className="btn btn-primary">{btnText}</button>
      </div> */}
    </div>
  );
}