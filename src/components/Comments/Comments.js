import React from 'react';

const Comments = (props) => {
    
    const {name} = props.comments;

    return (
        <div>
            <h5>{name}</h5>
        </div>
    );
};

export default Comments;