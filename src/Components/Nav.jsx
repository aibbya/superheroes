import React from 'react';
import {Link, useHistory} from 'react-router-dom';


const Nav = () => {
    return (
        <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-expand">
                <div className="container-fluid">
                    <h1 className="navbar-brand">My Heroes</h1>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>                                    
                    </ul>
                </div>
                </nav>
        </header>
    )
}

export default Nav