import React, { useState } from 'react';
import { userInfo } from 'os';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({ 
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });
    
    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log('Checking user state:',user);
    };
    
    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://stormy-basin-77789.herokuapp.com/api/auth/register', user)
        .then(res => {
            console.log('Server response:', res);
            setUser({
                first_name: "",
                last_name: "",
                email: "",
                password: ""
            });
         })
         .catch(err => {
             console.log(err)
         });
     };
    
    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <input 
                type="text"
                name="first_name"
                value={user.first_name}
                placeholder="first name"
                onChange={changeHandler} 
                />

                <input 
                type="text"
                name="last_name"
                value={user.last_name}
                placeholder="last name"
                onChange={changeHandler} 
                />

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

export default Register;

// import React from "react";
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import axios from "axios";
// import styled from 'styled-components';

// const Div= styled.div`
//     margin-top: 40px;
//     display: flex;
//     justify-content: center;
// `
// const Button = styled.button`
//     text-decoration: none;
//     box-shadow:inset 0px 1px 0px 0px #ffffff;
//     background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
//     background-color:#ffffff;
//     border-radius:6px;
//     border:1px solid #dcdcdc;
//     display:inline-block;
//     cursor:pointer;
//     color:#666666;
//     font-family:Arial;
//     font-size:15px;
//     font-weight:bold;
//     padding:6px 24px;
//     text-decoration:none;
//     text-shadow:0px 1px 0px #ffffff;

//     &:hover {
//       background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
//       background-color:#f8f8f8;
//     }
    
//     &:active {
//       position:relative;
//       top:1px;
//     }
// `

// function Register({touched, errors}){
//   return(
//     <Div>
//     <Form>
//       <div>
//         <label>First Name: </label>
//         <Field name="first_name" 
//                type="text" 
//                />
//           <p>{touched.first_name && errors.first_name}</p>
//       </div>
//       <div>
//         <label>Last Name: </label>
//         <Field name="last_name" 
//                type="text" 
//                />
//           <p>{touched.last_name && errors.last_name}</p>
//       </div>  
//       <div>
//         <label>Email: </label>
//         <Field name="email" 
//                type="email" 
//                />
//           <p>{touched.email && errors.email}</p>
//       </div>
//       <div>
//         <label>Password: </label>
//         <Field name="password" 
//                type="password" 
//                />
//          <p>{touched.password && errors.password}</p>      
//       </div>
//       <Button>Submit</Button>
//     </Form>
//     </Div>  
//   )
// }

// export default withFormik({
//   mapPropsToValues(){
//     return {
//       first_name: '',
//       last_name: '',
//       email: '',
//       password: '',
//     };
//   },
//   validationSchema: Yup.object().shape({
//     first_name: Yup.string().required("Your first name is required"),
//     last_name: Yup.string().required("Your last name is required"),
//     email: Yup.string().email().required(),
//     password: Yup.string().min(2).required(),
//   }),
//   handleSubmit(values) {
//     const url = 'https://localhost:5000/api/auth/register';
//     axios.post(url, values)
//       .then(res => {
//         //localStorage.setItem('token', res.data.token);
//         console.log('Res', res)
//       })
//       .catch(e => {
//         console.log(e)
//       })

//     console.log(values)
//   }
// })(Register);
