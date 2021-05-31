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
                            console.log(consulta.data.token)
                            setToken(consulta.data.token)
                            console.log("TOKEN ",token)
                            notify()                            
                            setTimeout(() => {
                                setRedirec(true);
                            }, 3000)
                            }
                        ).catch( error =>{                            
                            notifyError()
                            })            
                },
              });
    // const onSubmit = async (data, e)=>{
        
    //     // http://challenge-react.alkemy.org,
    //     // e.preventDefault()
    //     console.log(data)
    //     await axios({ method: 'POST', url: 'http://challenge-react.alkemy.org', data: data })
    //     .then( consulta =>{           
    //         console.log(consulta.data.token)
    //         setToken(consulta.data.token)
    //         console.log("TOKEN ",token)
    //         notify()
    //         e.target.reset()
    //         setTimeout(() => {
    //             setRedirec(true);
    //         }, 3000)
    //         }
    //     ).catch( error =>{
    //         e.target.reset()
    //         notifyError()
    //         }            
    //     )
            
    // }
    
    
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
                        <label htmlFor="inputEmail" className="sr-only">Email Address</label>
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
                    {/* <form  onSubmit={formik.handleSubmit} id="formulario" className="form-inline justify-content-center">
                <input 
                    type="number" 
                    id="idHero" 
                    name="idHero"  
                    placeholder="Insert a Number" 
                    value={formik.values.idHero} 
                    onChange={formik.handleChange}  
                    className="mt-2 form-control"/>                    
                    <button type="submit" className="btn btn-primary mt-2 ml-2 text-small" >Search</button>
                    {formik.errors.idHero ? <span className="text-danger">{formik.errors.idHero}</span> : null}
            </form> */}
                
                    </div>
                )
            }
            </div>
            
        )
    

    
}

export default Login
