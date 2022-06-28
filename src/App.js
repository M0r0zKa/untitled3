import logo from './logo.svg';
import './App.css';
import {Users} from "./components/users/Users";
import {getUserPosts} from "./service/users.api.service";

import React, {useEffect, useState} from 'react';
import {Posts} from "./components/posts/Posts";
function App() {
    const [post, setPosts] = useState([]);

    const elevate = (id) => {
        getUserPosts(id).then(({data})=> {
            setPosts([...data])
        })
    };
    console.log(post);
    return (
        <div className={'df'}>
            <div className={'left'}><Users elevate={elevate}/></div>
            <div className={'right'}><Posts userPost={post}/></div>
        </div>
    );
}

export default App;
