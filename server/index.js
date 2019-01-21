const express = require("express");
const app = express();
const {json} = require("body-parser");

const port = 3001;
const {getImage, addFav, getFav} = require('./controller');


app.use(json());


app.get("/api/:color", getImage)
//searches api for an image in default condition on mount
//searches api for an image in the current state setting on click of color button

app.get("/api/favorites", getFav)
//reponds with the favorites array on mount


app.post("/api/:url", addFav)
//adds the url fragment and color to the favArray


app.listen(port,()=> console.log(`Listening on port ${port}`))