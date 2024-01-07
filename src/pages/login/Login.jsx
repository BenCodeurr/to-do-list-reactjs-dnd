import './Login.css'

const Login = () => {
  return (
    <div className="container">
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
                <p>Don't have an account?
                <a href="/" className='forgot-link'>SignUp</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login;