import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './SinglePost.css'

const SinglePost = (props) => {

    const {title , body, id} = props.post;

    return (
        <Grid container>
            <Grid className="mx-auto" item xs={11}>
                <h5>Blog Post {id}</h5>
                <h2>{title}</h2>
                <p>{body}</p>
                <Button className="btn" size="medium" variant="contained" color="primary">See More</Button>
            </Grid>
        </Grid>
    );
};

export default SinglePost;