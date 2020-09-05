import React from 'react';
import { Grid, Box  } from '@material-ui/core';
import './Comments.css'

const Comments = (props) => {
    
    const {name, body, email} = props.comments;

    return (
        <Grid container>
            <Box className="comments-inner">
                <Box justifyContent="flex-start" display="flex">
                    <div>
                        <p className="img"></p>
                    </div>
                    <div className="title">
                        <h5>{name}</h5>
                        <p>Gmail: <a href="#0">{email}</a></p>
                        <h6>{body}</h6>
                    </div>
                </Box>
            </Box>            
        </Grid>
    );
};

export default Comments;