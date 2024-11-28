import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setAuth }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, {
                email,
                password
            });
            
            if (response.data.success) {
                setAuth(true); 
                navigate('/dashboard'); 
            } else {
                console.error('Login failed:', response.data.message);
            }
            
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="loginContainer">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Username:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/registration">Register here</Link></p>
        </div>
    );
};

export default Login
