import React from 'react';

const ImageList = (props) =>{
         const images = props.images.map((image) =>{
            return <img key ={image}src = {image.urls.regular} alt="Image List"/> //fing the propertiesin network/all preview
        });
    return<div><h3>IMAGE_LIST</h3>{images}</div>;
    
}

export default ImageList;