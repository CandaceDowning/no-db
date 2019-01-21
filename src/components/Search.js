import React, {Component} from "react"





export default class Display extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            url: this.props.url,
            favArray: this.props.favArray,
            color:this.props.color
        }
        // console.log(this.state.url)
    }

        render(){
            return(
                
                <div className="searchPage">
                        <div className="colorButtBar">
                            <button className="redButt colorButt" onClick={()=>this.props.colorClick("red")}/>
                            <button className="orangeButt colorButt" onClick={()=>this.props.colorClick("orange")}/>
                            <button className="yellowButt colorButt" onClick={()=>this.props.colorClick("yellow")}/>
                            <button className="greenButt colorButt" onClick={()=>this.props.colorClick("green")}/>
                            <button className="blueButt colorButt" onClick={()=>this.props.colorClick("blue")}/>
                            <button className="purpleButt colorButt" onClick={()=>this.props.colorClick("purple")}/>
                        </div>
                        <div className="imageFav">
                            <div className="imageBox"><img className="image" src = {this.url} alt = "Wait" /></div>
                            <button className="favButt" onClick={()=>this.props.favClick(this.url)}/>
                 
                        </div>
                </div>
            )
        }

    }    