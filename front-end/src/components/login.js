import React, { useState } from 'react';
import { userInfo } from 'os';
import axios from 'axios';

const Login = () => {
    const [user, setUser] = useState({ 
        email: "",
        password: ""
    });
    
    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log('Checking user state:',user);
    };
    
    const submitHandler = e => {
        e.preventDefault();
  
        const url = 'https://stormy-basin-77789.herokuapp.com/api/auth/login';
        axios.post(url, user)
          .then(res => {
            localStorage.setItem('token', res.data.token);
          })
          .catch(e => {
            console.log(e)
          })
      }

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <input 
                type="text"
                name="email"
                value={user.email}
                placeholder="email"
                onChange={changeHandler} 
                />
                
                <input 
                type="text"
                name="password"
                value={user.password}
                placeholder="password"
                onChange={changeHandler} 
                />
                <button>Submit</button>
            </form>
        </React.Fragment>
    );
};

export default Login;