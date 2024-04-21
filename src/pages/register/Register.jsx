import './register.scss'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>

    <div className="card">
     
      <div className="right">
        <h1>Sign Up</h1>
        <form action="">
          <input type="text" placeholder='Username'/>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password'/>
          <input type="password" placeholder='Confirm password'/>
          
          <button>Register</button>
        </form>
      </div>
      <div className="left">
        <h1>D ogram</h1>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Aspernatur sequi, nisi, p
          erspiciatis culpa architecto vero amet tempore rem
           </p>
        <span>Already have an account?</span>
        <Link to='/Login'><button>Sign In</button></Link>
        
      </div>
    </div>
  </div>
  )
}

export default Register
