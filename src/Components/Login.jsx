import React, { Fragment } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import { useForm } from 'react-hook-form';
import axios from 'axios'

const Login = () => {

    
    const [token, setToken] = useLocalStorage('token','')

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = async (data, e)=>{
        
        // http://challenge-react.alkemy.org,
        // e.preventDefault()
        console.log(data)
        const consulta = await axios({ method: 'POST', url: 'http://challenge-react.alkemy.org', data: data })
        console.log(consulta.data.token)
        setToken(consulta.data.token)
        console.log("TOKEN ",token);
        // e.target.reset()
    }

    

    return (
        <div className="loginSecc" >
            <form onSubmit={handleSubmit(onSubmit)} className="formLogin form-signin" >
                <img src="http://cdn26.us1.fansshare.com/photo/marvel/superheroes-logo-marvel-1587787146.jpg" alt="" className="mb-4" />
                <h1 className="h3 mb-3 font-weigth-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email Address</label>
                <input type="email"{...register("email", { required: true })} id="inputEmail" placeholder="Email address" autoFocus className="form-control mt-2" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" {...register("password", { required: true })} id="nputPassword" placeholder="Password" autoFocus className="form-control mt-2" />
                <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign in</button>
            </form>
            
        </div>
    )
}

export default Login
