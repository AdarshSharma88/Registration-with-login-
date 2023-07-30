import { useState} from 'react'
import React  from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
//import Navbar from '../Navbar/navbar'
import { Link } from 'react-router-dom'
import '../main.css'
//import './login.css'
import axios from 'axios'


export const Login = () => {
  const [user, setUser] = useState({
    email:"",
    password:"",
  })

  // const {setUserdata} = useContext(data)
  // alert(data)

  const handleChange = e => {
    e.preventDefault();
    const {name, value } = e.target
    setUser((preve)=>{
      return{
        ...preve,
        [name]: value
      }
    })
  }

  const userLogin = (e) => {

    e.preventDefault();
   // console.log(user)
   axios.post("http://localhost:8080/login", user)
    
      .then((res) => {
      //  setUserdata(res.data.user)
        alert(res.data.message)
        console.log(res.data.user)
        if(res.data.userExist){
          let objSerialized = JSON.stringify(res.data.user);
          window.localStorage.setItem("myObj", objSerialized);
         console.log(res.message)
        }
      }) 
     
  }

  return (
    <>
   
        <form action="">
            <input type="email" name="email" value={user.email} placeholder='Email' onChange={ handleChange } /> <br />
            <input type="password" name="password" value={user.password} placeholder='Password' onChange={ handleChange } />  <br />
            <button to="/login" onClick={userLogin}>Login</button>
        <Link to="/register"> <button>Register</button> </Link>
        </form>
    </>
  )
}

export default Login