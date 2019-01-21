const axios = require("axios")
let base = "https://api.unsplash.com/search/photos/?query="

let access = "&client_id=cabbb571092194a8bebee673907d8639975253635ffd885f0b78c227edd0c374"

let favoritesArray= []


module.exports = {
    getImage:(req, res)=>{
        // console.log(req.params)
        axios.get
            (`${base}${req.params.color}&page=${Math.random()*10}${access}`)
            .then(response =>{
            // console.log(response.data);
            res.status(200).json(response.data.results);
        })
        .catch(err=> console.log(err));
    }, 
    
    getFav:(req,res)=>{
        res.status(200).json(favoritesArray)
    },
    
    addFav:(req,res)=>{
        favoritesArray.push({url:req.params.url, color:req.body.color})
        res.status(200).json(favoritesArray)
        console.log(favoritesArray)
    }
}
