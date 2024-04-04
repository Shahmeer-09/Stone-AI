
import { useState, useEffect, useRef } from "react";
import { Form } from "react-router-dom"
import Wrapper from "../assets/Wrapper/chatform";
const ChatForm = ({heading, buttonText}) => {
    const textareaRef = useRef(null);
 const [value, setvalue] = useState('')
  useEffect(() => {
   
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>{`Enter a prompt to ${heading} `}</h4>
        <div className="from-row">
          <textarea
            className="form-textarea"
            ref={textareaRef}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            name="text"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-block" type="submit">
        
          {buttonText}
        </button>
        <div className="card">
          <p className="result"> </p>
        </div>
      </Form>
    </Wrapper>
  );
};

export default ChatForm;
