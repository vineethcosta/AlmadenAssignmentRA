import React from 'react';
import Gallery from 'react-grid-gallery';
import { IMAGES } from '../assets/imageLinks/imageLinks.js'
const PhotoGallery = () => {
    return (
        <Gallery images={IMAGES} />
    )
}

export default PhotoGallery