

import React, { useState, useEffect } from 'react';
// import AddPost from './AddPost';
// import Posts from './Posts';
const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME = '2209-FTB-ET-WEB-PT';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
        }
        setPassword('');
        setUsername('');
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password
                    }
                })
            });
            console.log(response);
            const { data } = await response.json();
            console.log(data);
            setToken(data.token);

            localStorage.setItem('token', data.token);
            console.log('token', data.token);

            console.log('welcome!');
        } catch (error) {
            console.error(error);
            console.log('failed to sign up!');
        }
    };
    if (!token) {
        return (
            <div>
                <h1>Log In here</h1>
                <form onSubmit={handleSubmit} className="sign-up-form">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <label htmlFor="username">Password</label>
                    <input
                        type="current-password"
                        id="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <h1>You're Logged in!</h1>
                {/* <AddPost />
                <Posts /> */}
            </div>
        );
    }
};

export default Login;