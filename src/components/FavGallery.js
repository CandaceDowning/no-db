import React, {Component} from "react"
import GalleryItems from "./GalleryItems"


const FavGallery = props => {
    let gallery = ""
    console.log(props.favArray)

        gallery = props.favArray.map((val)=>{
        return <GalleryItems id={val[i]} url={val.url} color={val.color}/> 
        //*********added an id prop to track favorites for delete function */
        //***********is this where a delet function would live? */
        //******need to figure out where conditional for rainbow display to live */
    })

    return(
        <div className= "galleryContainer">
            {gallery}
        </div>
    )
}

export default FavGallery
