import React from 'react';
import { Grid, Box  } from '@material-ui/core';
import './Comments.css'

const Comments = (props) => {
    
    let {name, body, email, id} = props.comments;

    //generate random number for image
    if(id > 100){

        const lastDigit = id % 10 ;
        id = Math.round((id / 10) + lastDigit) ;
       
      }

    return (
        <Grid container>
            <Box className="comments-inner">
                <Box justifyContent="flex-start" display="flex">
                    <div>
                        <img className="img" src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt=""/>
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