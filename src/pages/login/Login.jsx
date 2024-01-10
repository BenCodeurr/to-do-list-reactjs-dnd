import { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        navigate('/todo');
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <div className="title">
          <h2>Login to your account</h2>
        </div>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email Adress" onChange={e=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
          <button type="submit" className="login-link">
            Login
          </button>
        </form>

        <div className="links">
          <p>
            Don't have an account?
            <a href="/" className="forgot-link">
              SignUp
            </a>
          </p>
        </div>
        {error && <p className="error">Wrong email or password</p>}
      </div>
    </div>
  );
};

export default Login;
