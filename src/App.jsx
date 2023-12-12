import { useState } from 'react'
import './App.css'

import logo from './assets/instagram.png';
function App() {
  const [login, setLogin] = useState(true);

  function changePage(){
    setLogin(!login);
  }

  return (
    <div className="container">
      <img src={logo} alt='logo' id='logo'/>
      <input type='text' placeholder='Mobile number or Email' hidden={login}/>
      <input type='text' placeholder='Full name' hidden={login}/>
      <input type='text' placeholder='Phone number or Username or Email' autoFocus/>
      <input type='text' placeholder='Password'/>

      <button id='btn'> {login ? 'Sign In' : 'Sign Up'} </button>

      <div>
        {login ? 'Do not have an account?' : 'Have an account?'}  <span id='change-txt' onClick={changePage}>{login ? 'Sign Up' : 'Sign In'}</span>
      </div>
    </div>
  )
}

export default App
