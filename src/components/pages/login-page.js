import React from 'react';
import {Redirect} from "react-router-dom";
const LoginPage = ({isLoggedIn, onLogin}) =>{
    if(isLoggedIn){
       return <Redirect to = "/" />
    }
    return (
      <div>
          <span>Login</span>
          <button
              className="btn btn-primary"
                onClick={onLogin}
          >ok</button>
      </div>
    );
}
export default LoginPage;

