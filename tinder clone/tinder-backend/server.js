import express from "express"
import mongoose from "mongoose"
import Cards from "./dbCards.js"
import Cors from "cors"
// import cards from 'dbCards.js'
//App Config
const app=express();
const port=process.env.PORT || 3001;
const connection_url = `mongodb+srv://admin:Agarwal%401024@cluster0.0srd4.mongodb.net/tinderdb?retryWrites=true&w=majority`
//Middlewares
app.use(express.json())
app.use(Cors())
//DB config
mongoose.connect(connection_url, function (err) {
    if (err) {
      console.log(err);
    }
  });

//API endpoints
app.get("/",(req,res) => res.status(200).send("Hello Everyone!!"));
app.post("/tinder/card",(req,res) => {
    const dbCard = req.body;
    Cards.create(dbCard,(err,data) => {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})
app.get("/tinder/card",(req,res) => {
    Cards.find((err,data) => {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})
//Listeners
app.listen(port,() => console.log(`Listening on localhost: ${port}`));