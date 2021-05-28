import React from 'react'
import Search from './Search';
import  { Redirect } from 'react-router-dom'

const Home = () => {
    
    const token = localStorage.getItem('token');

    if (token){
        return (
            <div>
                <Search></Search>
            </div>
        ) 
    }
    else
    {
        return <Redirect to="/login" />
    }
    
}

export default Home
