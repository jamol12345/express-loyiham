import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();

var family = [
    {name: "Anora", age: 40, year: 2003},
    {name: "Aziza", age: 18, year: 2002}
]

app.get("/", (req, res)=>{
    res.send("Welcome to my API")
})

app.get("/about", (req,res)=>{
    res.json({
        name: "Jamal",
        age: 30,
        hobbies: {
            "1": "football",
            "2": "piano",
            "3": "coding"
        }
    })
})

app.get("/family", (req, res)=>{
    res.json(family)
})

export const handler = ServerlessHttp(app);