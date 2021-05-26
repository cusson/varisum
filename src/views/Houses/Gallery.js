import React from 'react'
import ImageGallery from "react-image-gallery";

const Gallery = (props) => {

    const {images} = props;
    console.log(images)

    const itemImage = images.map(i => {
        return {
            original: i.image,
            thumbnail: i.image
        }
    })

    return (
        <>
            <ImageGallery items = {itemImage}/>
        </>
    )
}

export default Gallery
