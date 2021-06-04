import React from 'react'
import ImageGallery from "react-image-gallery";

const Gallery = (props) => {

    const {images} = props;

    const itemImage = images.map(i => {
        return {
            original: i.image,
            thumbnail: i.image
        }
    })

    return (
        <>
            <ImageGallery items = {itemImage} thumbnailPosition="right"/>
        </>
    )
}

export default Gallery
