import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import SinglePost from '../SinglePost/SinglePost';
import './Post.css'

const Post = () => {
    const [posts , setPosts] = useState([]);

    //Get All Post From API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])

    return (
        <Container maxWidth="xl">
            <Grid className="text-center" item xs={12}>
                <h1>Explore Our Latest Posts</h1>
            </Grid>
            <div>
                {
                    posts.map( post => <SinglePost key={post.id} post={post}></SinglePost> )
                }
            </div>
        </Container>        
    );
};

export default Post;