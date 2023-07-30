import React from 'react';
import {Link} from 'react-router-dom';

import '../main.css';

import { useState } from 'react';
import axios from 'axios'

const Register = () => {

  // const navigate = useNavigate() ;

  const [user, setUser] = useState({
    name: "",
    profession: "",
    key: "",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleChange = e => {
    const {name, value } = e.target
    setUser({
        ...user,
        [name]: value
  })}

  const registerUser =  (e) => {
    const {name, profession,key, email, password, confirmPassword } = user
    if(name && profession && email && password && (password === confirmPassword) ) {
       axios.post("http://localhost:8080/register", user)
      .then( res => alert(res.data.message))
    }
    else{
      alert("Invalid Input")
    }
  }

  return (
    <>
    {/* {console.log("user :", user)} */}
      
      <form action="">
          <input type="text" name="name" value={user.name} placeholder='Name' onChange={ handleChange } /> <br />

          <select name="profession" value={user.profession} onChange={ handleChange } >
            <option> -Select Profession - </option>
            <option value='student'>Student</option>
            <option value='company'>Company</option>
            <option value='admin'>Admin</option>
          </select> <br />  
          
          {user.profession==="admin" && 
            <input type="text" name="key" value={user.key} placeholder='Key' onChange={ handleChange } />}

          <input type="email" name="email" value={user.email} placeholder='Email' onChange={ handleChange } /> <br />
          <input type="password" name="password" value={user.password} placeholder='password' onChange={ handleChange } /> <br />
          <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder='Confirm Password' onChange={ handleChange } /> <br />
          <Link to="" > <button onClick={registerUser}> Register </button> </Link> 
          <Link to="/login"> <button>Login</button> </Link>
        </form>
    </>
  )
}

export default Register





// import React, { useState , useEffect,axios} from "react";

// const Registration = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//   };



//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };


// export default Registration;