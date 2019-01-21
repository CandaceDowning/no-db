import React from "react"


const NavButton = props => {
    if(!props.display)
        return <button className = "navButt" onClick={()=>props.navClick(props.display)}>FAVORITES GALLERY</button>
    else{
        return <button className = "navButt" onClick={()=>props.navClick(props.display)}>BACK TO BROWSE</button> 
    } 
}

export default NavButton

