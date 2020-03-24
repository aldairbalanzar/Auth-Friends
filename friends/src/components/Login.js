import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
    const history = useHistory();

   const [credentials, setCredentials] = useState({
        credentials: {
            username: '',
            password: ''
        }
   });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                console.log(res);
                window.localStorage.setItem('token', JSON.stringify(res.data.payload));
                history.push('/friends');
            })
            .catch(err => console.log(err))
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    <input
                     type="text"
                     id="username"
                     name="username"
                     value={credentials.username}
                     onChange={handleChange}
                     placeholder="username"
                     />
                </label>

                <label htmlFor="password">
                    <input
                     type="text"
                     id="password"
                     name="password"
                     value={credentials.password}
                     onChange={handleChange}
                     placeholder="password"
                     />
                </label>

                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login;