import React, {useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = () => {
    const [friendsList, setFriendsList] = useState([]);
    const [friend, setFriend] = useState({
            name: '',
            age: '',
            email: ''
    });

    useEffect(() => {
        const getData = () => {
            axiosWithAuth().get('/api/friends')
            .then(res => {
                console.log(res.data)
                setFriendsList(res.data)
            });
        };

        getData();
    }, []);

    console.log('line 24: ', friendsList);

    const handleChange = e => {
        e.preventDefault();
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => {
            console.log(res);
            setFriendsList(res.data);
            setFriend({
                ...friend,
                name: '',
                age: '',
                email: ''
            });
        })  
    };

    return(
        <div>
            <h1>Friends List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={friend.name}
                    onChange={handleChange}
                    placeholder="name"
                    />
                </label>
                <label htmlFor="age">
                    <input
                    type="text"
                    id="age"
                    name="age"
                    value={friend.age}
                    onChange={handleChange}
                    placeholder="age"
                    />
                </label>
                <label htmlFor="email">
                    <input
                    type="text"
                    id="email"
                    name="email"
                    value={friend.email}
                    onChange={handleChange}
                    placeholder="email"
                    />
                </label>
                <button type="submit"> add friend </button>
            </form>
            <section>
                <h3>added friends list: </h3>
                {friendsList.map(item => {
                    return(
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>age: {item.age}</p>
                            <p>{item.email}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Friends;