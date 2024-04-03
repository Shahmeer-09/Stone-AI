import Wrapper from "../assets/Wrapper/Landing";
import Lottie from "lottie-react";
import animationData from "../assets/ai-animation.json";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="landingpage">
          <div className="animation">
            <Lottie animationData={animationData} />
          </div>
          <div className="content">
            <h3>Your Own <span style={{color:"purple"}} >Stone</span> Ai</h3>
            <p>
            "Welcome to StoneAI! Step into the realm of AI, where answers await your queries. From information to assistance, we're here to serve. Ask away, explore, and uncover the possibilities. Let's embark on this AI journey together!"
            </p>
            <div className="buttons">
              <Link to={'/register'} className="btn">Register</Link>
              
              <Link to={'/login'} className=" btn">Sign-in</Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landingpage;
