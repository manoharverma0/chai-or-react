import React from 'react'
import UserContext from '../context/userContext'
import {useState , useContext} from 'react'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext);
    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
         
    }
  return (
      <div>
          <h1>Login</h1>
          <input
              type="text"
              placeholder='username'
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
          />
          {" " }
          <input
              type="password"
              placeholder='password'
               value={password}
              onChange={(e)=>setPassword(e.target.value)}
          />
          <button
          onClick={handlesubmit}
          >Submit</button>
    </div>
  )
}

export default Login