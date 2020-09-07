import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import Header from '../Header/Header';
import Comments from '../Comments/Comments';
import './PostDetails.css'

const PostDetails = () => {

    const {postId} = useParams();
    //Get Posts
    const [posts ,  setPosts] = useState([]);
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);

    const {title , body , id} = posts;
    

    // get Comments 
    const [comments ,  setComments] = useState([]);
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, []);

    return (
        <div>
            <Header />
            <Grid style={{marginTop: '100px'}} container>
                <Grid className="mx-auto" item xs={11}>
                    <h5>Blog Post {id} Details</h5>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <div className="tags-area">
                        <div>
                            <ul>
                                <li>Tags:</li>
                                <li>#tutorial</li>
                                <li>#technology</li>
                                <li>#Blog</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Share:</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>                        
                    </div>
                    <div style={{borderTop: '1.5px solid #ccc', paddingTop: '20px', marginTop: '40px'}}>
                        <h3>All comments({comments.length}) below:</h3>
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