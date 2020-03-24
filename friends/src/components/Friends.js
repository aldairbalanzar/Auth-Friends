import React, {useState, useEffect } from 'react';
import axios from 'axios';

const Friends = () => {
    const [friendsList, setFriendsList] = useState([]);
    const [friend, setFriend] = useState({
        name: ''
    });

    useEffect(() => {
        const getData = () => {
            const newAxios = axios.create({
                baseURL: 'http://localhost:5000',
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            newAxios.get('/api/data')
            .then(res => {
                console.log(res)
            });
        };

        getData();
    }, [])

    const handleChange = e => {
        e.preventDefault();
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();  
    };

    return(
        <div>
            <h1>Friends List</h1>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 id="name"
                 name="name"
                 onChange={handleChange}
                 placeholder="name"
                 />
            </form>
        </div>
    )
}

export default Friends;