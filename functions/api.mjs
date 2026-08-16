import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();

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

export const handler = ServerlessHttp(app);