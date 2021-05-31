import React, { useState } from 'react'
import { useFormik } from 'formik';
import useLocalStorage from '../hooks/useLocalStorage'

import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { Redirect } from 'react-router-dom'


const validate = values => {
    //  debugger
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    return errors;
  };

const Login = () => {
    const [token, setToken] = useLocalStorage('token','')
    const [redi, setRedirec] = useState(false)
    
    const notify = () => 
    toast('🦄 Wellcome!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
    const notifyError = () => 
        toast.error('Error in email or password', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''  
        },
        validate,
        onSubmit: async (values) => {
            await axios({ method: 'POST', url: 'http://challenge-react.alkemy.org', data: values})
                .then( consulta =>{
                    setToken(consulta.data.token)
                    notify()                            
                    setTimeout(() => {
                        setRedirec(true);
                    }, 2500)
                }).catch( error =>{                            
                    notifyError()
                })            
                },
              });
    
        return (
            <div>
            {
                redi ?
                (
                    <Redirect to="/home" />
                    
                )
                :
                (
                    <div className="loginSecc" >
                    <form onSubmit={formik.handleSubmit} className="formLogin form-signin" >
                        <img src="http://cdn26.us1.fansshare.com/photo/marvel/superheroes-logo-marvel-1587787146.jpg" alt="" className="mb-4" />
                        <h1 className="h3 mb-3 font-weigth-normal">Please sign in</h1>
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Email address"
                            value={formik.values.inputEmail} 
                            onChange={formik.handleChange}  
                            autoFocus 
                            className="form-control mt-2" />
                        {formik.errors.email ? <span className="text-danger">{formik.errors.eemail}</span> : null}
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.inputPassword} 
                            onChange={formik.handleChange}
                            autoFocus 
                            className="form-control mt-2" />
                        {formik.errors.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                        <button type="submit" className="btn btn-lg btn-primary btn-block mt-3" >Sign in</button>
                        <ToastContainer />
                    </form>
                    
                    </div>
                )
            }
            </div>
        )
    
}

export default Login
