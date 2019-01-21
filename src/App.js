import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import Display from "./components/Display"



class App extends Component {
  constructor(){
    super()

    this.state= {
      url: "",
      currentColor: "red",
      favArray: [],
    }
    
    this.onClick = this.onClick.bind(this)
    this.onFav=this.onFav.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/${this.state.currentColor}`).then(res => {
      const index= Math.floor(Math.random()*res.data.length)
      this.setState({url: res.data[index].urls.regular})
      // console.log(this.state.url);
      })
    axios.get(`/api/favorites`).then(res=>{
      this.setState({favArray: res.data})
      // console.log(res)
    })  
    // console.log(this.state.favArray)
    //********not recieving the array on mount, but i am after making a favorite
  }


  onClick(color){
    this.setState({currentColor: color})
    axios.get(`/api/${color}`).then(res => {
      const index= Math.floor(Math.random()*res.data.length)
      this.setState({url: res.data[index].urls.regular})
      // console.log(this.state.url);
      })
  }

  onFav(favUrl){
    favUrl = favUrl.replace("https://images.unsplash.com/", "")
      axios.post(`/api/${favUrl}`, {color:this.state.currentColor}).then(res=>{ 
        this.setState({favArray: res.data})
      // console.log(this.state.favArray)
    })
  }


  render(){ 
    
    return (
      <div className="App">
       <div>
         
         <Display 
          favArray= {this.state.favArray}
          url={this.state.url} 
          color= {this.state.currentColor} 
          onClick={this.onClick} 
          onFav={this.onFav}/>  
          
       </div>
      </div>
    );
  }  
}

export default App;
