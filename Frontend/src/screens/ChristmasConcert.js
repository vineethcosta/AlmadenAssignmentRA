import React from 'react';
import Gallery from 'react-grid-gallery';


const IMAGES =
    [{
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945913/samples/gallery/gallery21_gakwor.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945913/samples/gallery/gallery21_gakwor.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
    },

    {
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945868/samples/gallery/gallery13_wvuxen.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945868/samples/gallery/gallery13_wvuxen.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
    },
    {
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945833/samples/gallery/gallery4_umzicc.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945833/samples/gallery/gallery4_umzicc.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
    },
    {
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945852/samples/gallery/gallery9_ewq3gd.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945852/samples/gallery/gallery9_ewq3gd.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
    },
    {
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945880/samples/gallery/gallery16_iwyhg4.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945880/samples/gallery/gallery16_iwyhg4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
    },
    {
        src: "https://res.cloudinary.com/du8oeufnp/image/upload/v1617945950/samples/gallery/gallery26_wes1ds.jpg",
        thumbnail: "https://res.cloudinary.com/du8oeufnp/image/upload/v1617945950/samples/gallery/gallery26_wes1ds.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
    },
    {
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945981/samples/gallery/gallery31_rrre5g.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945981/samples/gallery/gallery31_rrre5g.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
    },
    {
        src: "https://res.cloudinary.com/du8oeufnp/image/upload/v1617945976/samples/gallery/gallery30_kgzogl.jpg",
        thumbnail: "https://res.cloudinary.com/du8oeufnp/image/upload/v1617945976/samples/gallery/gallery30_kgzogl.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,

    },
    {
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945958/samples/gallery/gallery27_dfihlt.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945958/samples/gallery/gallery27_dfihlt.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
    },
    {
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945970/samples/gallery/gallery29_khvhd3.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945970/samples/gallery/gallery29_khvhd3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,

    },
    {
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945970/samples/gallery/gallery29_khvhd3.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945970/samples/gallery/gallery29_khvhd3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
    },
    {
        src: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945868/samples/gallery/gallery13_wvuxen.jpg",
        thumbnail: "	https://res.cloudinary.com/du8oeufnp/image/upload/v1617945868/samples/gallery/gallery13_wvuxen.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
    },
    ]


const ChristmasConcert = () => {
    return (
        <div>
        <h3 className="service-heading">CHRISTMAS CONCERT</h3>
        <Gallery images={IMAGES} />
        </div>
    )
}

export default ChristmasConcert