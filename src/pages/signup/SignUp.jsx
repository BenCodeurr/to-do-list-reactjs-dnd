import "./SignUp.css";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="wrapper">
        <div className="left-content"></div>
        <div className="right-content">
          <h3>Create Account</h3>
          <div className="google-icon">
            <FaGoogle />
          </div>
          <p>or use your email for registration:</p>
          <form action="">
            <input type="text" name="" placeholder="Name" required />
            <input type="email" name="" placeholder="Email" required />
            <input type="password" name="" placeholder="Password" required />
          </form>
          <div className="buttons">
            <a href="/" className="signup">
              Sign Up
            </a>
            <a href="/login" className="login">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
