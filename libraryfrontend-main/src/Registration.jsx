import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    const navigate = useNavigate();

     const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

     const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/register`, formData);
            console.log(response.data);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            });
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="loginContainer">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" value={formData.firstName}
                    onChange={handleChange} name="firstName" placeholder="Enter your first name" required />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" value={formData.lastName} onChange={handleChange}
                name="lastName" placeholder="Enter your last name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Enter your email" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={formData.password} onChange={handleChange}
                name="password" placeholder="Enter your password" required />

                <button type="submit">Register Now</button>
            </form>
            <p>
                Already have an account? <Link to="/admin">Login here</Link>
            </p>
        </div>
    );
};

export default Registration;
