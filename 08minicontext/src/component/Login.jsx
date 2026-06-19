import React,{useState,useContext} from 'react'
import Usercontext from '../context/Usercontext'


function Login() {
     const [Username,setUsername] = useState('')
     const [Password,setPassword] = useState('')

     const {setuser} = useContext(Usercontext)
    const Handlesubmit = (e) => {
          e.preventDefault()
          setuser({Username,Password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
             value={Username}
             onChange={(e)=> setUsername(e.target.value)}
            placeholder="Username"  />
            <input type="text" 
            value={Password}
             onChange={(e)=> setPassword(e.target.value)}
             placeholder="Password"  />
            <button onClick={Handlesubmit}>Submit</button>
        </div>
    )
}

export default Login
