import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setAuth }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(false);
        navigate('/admin');
    };

    return (
        <div className="dashboard">
            <h1>Welcome to your Dashboard!</h1>
            <div className="dashboard-content">
                <p>This is where you can manage your account, view your activity, and access other features.</p>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;
