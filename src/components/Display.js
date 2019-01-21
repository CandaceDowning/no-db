import React, {Component} from "react"
import FavGallery from "./FavGallery"
// import Search from "./Search"
import NavButton from "./NavButton"




export default class Display extends Component{
    constructor(props){
        super(props)
        
            
        this.state = {   
            favArray: this.props.favArray,
            url : this.props.url,            
            color : this.props.color,
            display: false,
        }
        this.colorClick=this.colorClick.bind(this)
        this.favClick=this.favClick.bind(this)
        this.navClick=this.navClick.bind(this)
    }
    
    colorClick(color){
        this.props.onClick(color)
        // console.log(color)
    }

    favClick(favUrl){
        this.props.onFav(favUrl)
        // console.log(favUrl)
    }

    navClick(){
        this.setState({display: !this.state.display})
        console.log(this.state.display)
    }
        

    render(){
        return(
            <div>
                {/******** want to push the search display to another component, but url is not passing through */}
                {!this.state.display ? 
                    
                    // <Search
                    // url = {this.state.url}
                    // favArray = {this.state.favArray}
                    // color = {this.state.color}
                    // colorClick = {this.colorClick}
                    // favClick = {this.favClick}/>
                    <div className="searchPage">
                        <div className="colorButtBar">
                            <button className="redButt colorButt" onClick={()=>this.colorClick("red")}/>
                            <button className="orangeButt colorButt" onClick={()=>this.colorClick("orange")}/>
                            <button className="yellowButt colorButt" onClick={()=>this.colorClick("yellow")}/>
                            <button className="greenButt colorButt" onClick={()=>this.colorClick("green")}/>
                            <button className="blueButt colorButt" onClick={()=>this.colorClick("blue")}/>
                            <button className="purpleButt colorButt" onClick={()=>this.colorClick("purple")}/>
                        </div>
                        <div className="imageFav">
                            <div className="imageBox"><img className="image" src = {this.props.url} alt = "Wait" /></div>
                            <button className="favButt" onClick={()=>this.favClick(this.props.url)}/> 
                        </div>
                    </div>
                    
                    
                    : 
                    <div>
                        <FavGallery
                            favArray = {this.props.favArray}/>
                    </div>}
                    <div>
                        <NavButton
                            display = {this.state.display}
                            navClick = {this.navClick}/>
                    </div>
               
            </div>    
        )
    }

}