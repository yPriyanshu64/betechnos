import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({ toggleForm }) => {
    return (
        <div className='wrapper'>
            <form>
                <h1>Betechnos Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>

                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>

                <button type='submit'>Login</button>

                <div className='signup-link'>
                    <p>Don't have an account?</p>
                    <a href="#" onClick={toggleForm} className='signup-link-button'>Sign Up</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
