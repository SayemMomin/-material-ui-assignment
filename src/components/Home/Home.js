import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css';

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div >
            <h2>Total Post: {posts.length} </h2>   
            <div >
            {
                posts.map((pt => <Post post ={pt}></Post>))
            }      
            </div>          
        </div>
    );
};

export default Home;