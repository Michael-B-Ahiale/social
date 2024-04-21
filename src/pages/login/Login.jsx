import './login.scss'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>

      <div className="card">
        <div className="left">
          <h1>Hello, Dog lovers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Aspernatur sequi, nisi, p
            erspiciatis culpa architecto vero amet tempore rem
             </p>
          <span>Don't have an account</span>
          <Link to='/Register'><button>Register</button></Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='password'/>
            
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
