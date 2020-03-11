import React from 'react';

const Photo = (props) =>{
    return(
        <div className = "Single pic">
            <img src={props.photoId} alt="Smiley face"/>
        </div>
    );
}

export default Photo;