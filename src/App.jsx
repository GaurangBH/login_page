import { useState } from 'react'
import './App.css'

function App() {
  const [isLogin, setIslogin] = useState(true)
  // <p>Not a member?<a href = "#" onClick={()=>setIslogin(false)}>Signup Now</a></p>
  return (
    <div className='background'>
      <div className='login_window'>
        <div className ='Welcome_msg'>
          <h2>WELCOME TO PATHWISE</h2>
          <br/>
          <h3>LEARN TO CODE WITH US.</h3>
          <img src = "login_page/src/assets/funy.webp"></img>
          <div className="home_page_link">
            <p>To know more about us, click <a href = "#">Learn more</a></p>
          </div>
        </div>
        <div className ='login'> 
          <div className='toogle_form'>
            <button className={isLogin ?'active' : ""}onClick={()=>setIslogin(true)}>Login</button>
            <button className={!isLogin ?'active' : ""}onClick={()=>setIslogin(false)}>Sign Up</button>
            
          </div>
          {isLogin ? 
          <form className='login_form'>
            <h1>Login</h1>
            <div className='input_box'>
              <input type='email' placeholder='Email' required></input>
            </div>
            <div className='input_box'>
              <input type='password' placeholder='Password' required></input>
            </div>
            <div className='options'>
              <label htmlFor='check'><input type ="checkbox" className='Check'/>Remember Me</label>
              <a href = "#">Forgot password?</a>
            </div>
            <div className='main_btn'>
            <button>Login</button>
            </div>

          </form> : 
          <form>
            <h1>Sign up</h1>
            <div className='input_box'>
              <input type='email' placeholder='Email' required></input>
            </div>
            <div className='input_box'>
              <input type='text' placeholder='Username' required></input>
            </div>
            <div className='input_box'>
              <input type='password' placeholder='Password' required></input>
            </div>
            <div className='options'>
              <label id='check'><input type ="checkbox" className='Check'/>I agree to the terms and conditions</label>
            </div>
            <div className='main_btn'>
              <button>Register</button>
            </div>
          </form>  
        }
        </div>
      </div>
    </div>
  )
}

export default App
