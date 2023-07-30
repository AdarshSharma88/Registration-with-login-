import Login from './components/Login';
import Registration from './components/Registration';
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import jwt_decode from 'jwt-decode'


function App() {
  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
      <div className="google-login-container">
        <GoogleOAuthProvider clientId="327815692590-boc5sa60gtnl2d97apdceisoi8ri8hd6.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={credentialResponse => {
              const details = jwt_decode(credentialResponse.credential);
              console.log(details);
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default App;