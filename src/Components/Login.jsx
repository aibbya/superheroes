import React, { Fragment, useState } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { Redirect } from 'react-router-dom'

const Login = () => {

    
    const [token, setToken] = useLocalStorage('token','')
    const [redi, setRedirec] = useState(false)

    const {register, handleSubmit, errors} = useForm();

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


    const onSubmit = async (data, e)=>{
        
        // http://challenge-react.alkemy.org,
        // e.preventDefault()
        console.log(data)
        await axios({ method: 'POST', url: 'http://challenge-react.alkemy.org', data: data })
        .then( consulta =>{           
            console.log(consulta.data.token)
            setToken(consulta.data.token)
            console.log("TOKEN ",token)
            notify()
            e.target.reset()
            setTimeout(() => {
                setRedirec(true);
            }, 3000)
            }
        ).catch( error =>{
            e.target.reset()
            notifyError()
            }            
        )
            
    }
    
    
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
                    <form onSubmit={handleSubmit(onSubmit)} className="formLogin form-signin" >
                        <img src="http://cdn26.us1.fansshare.com/photo/marvel/superheroes-logo-marvel-1587787146.jpg" alt="" className="mb-4" />
                        <h1 className="h3 mb-3 font-weigth-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email Address</label>
                        <input type="email"{...register("email", { required: true })} id="inputEmail" placeholder="Email address" autoFocus className="form-control mt-2" />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" {...register("password", { required: true })} id="nputPassword" placeholder="Password" autoFocus className="form-control mt-2" />
                        <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign in</button>
                        <ToastContainer />
                    </form>
                
                    </div>
                )
            }
            </div>
            
        )
    

    
}

export default Login
