import './Login.css'
import { FaRegUser } from "react-icons/fa";

export default function Login() {
  return (
    <div className="container">
        <div className="left">
            <div>Your beautiful Todo List app</div>
        </div>
        <div className="right">
            <div className="title">
                <h2>Login to your account</h2>
            </div>
            <form action="">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
            </form>
            <div className="links">
                <a href="/" className='login-link'>Login</a>
                <a href="#" className='forgot-link'>Forgot Password?</a>
            </div>
        </div>
    </div>
  )
}