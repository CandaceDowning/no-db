import React from "react"




const GalleryItems = props => {

    const {url, color} = props
        if(props)
            return <img className= "galleryImages" src = {`https://images.unsplash.com/${url}`}/>
}

export default GalleryItems


