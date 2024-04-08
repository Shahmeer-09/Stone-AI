import { useState, useEffect, useRef } from "react";
import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrapper/chatform";
const ChatForm = ({ heading, buttonText, textRes, ispara }) => {
  const textareaRef = useRef(null);
  const [value, setvalue] = useState("");
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);
  const navigation = useNavigation()
  const isubmitting = navigation.state === 'submitting'

  return (
    <Wrapper>
      <Form method="post" className="form" ispara>
        <h4>{`Enter a prompt to ${heading} `}</h4>
        <div className="from-row">
          <textarea
            className="form-textarea"
            ref={textareaRef}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            name="data"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button disabled={isubmitting} className="btn btn-block" type="submit">
          {
            isubmitting ? 'Submitting...' : buttonText 
          }
        </button>
        <div className="card">
          {textRes && textRes !== "" ? (
            ispara ? (
              textRes.map((item, index) => (
                <p className="result" key={index}>
                  {item} 
                </p>
              ))
            ) : (
              <p className="result">{textRes}</p>
            )
          ) : (
            <p className="result">Response will appear here</p>
          )}
        </div>
      </Form>
    </Wrapper>
  );
};

export default ChatForm;
