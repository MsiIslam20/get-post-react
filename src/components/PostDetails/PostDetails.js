import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import Header from '../Header/Header';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {postId} = useParams();

    const [posts ,  setPosts] = useState([]);
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);

    const [comments ,  setComments] = useState([]);
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, []);

    const {title , body , id} = posts;

    return (
        <div>
            <Header />
            <Grid style={{marginTop: '100px'}} container>
                <Grid className="mx-auto" item xs={11}>
                    <h5>Blog Post {id} Details</h5>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <div style={{borderTop: '1.5px solid #ccc', paddingTop: '20px', marginTop: '40px'}}>
                        <h3>All comments below:</h3>
                        {
                            comments.map(singleComment => <Comments key={singleComment.id} comments={singleComment}></Comments>)
                        }
                    </div>
                </Grid>
            </Grid>              
        </div>      
    );
};

export default PostDetails;