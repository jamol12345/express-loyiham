import express from "express";
import ServerlessHttp from "serverless-http";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const __dirname = path.resolve()

const onlyAdmin = []
let movies = []

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/dist/index.html")
})
app.get("/home", (req, res)=>{
    res.sendFile(__dirname + "/dist/home.html")
})
app.get("/admin", (req, res)=>{
    res.sendFile(__dirname + "/dist/admin.html")
})
app.get("/users", (req, res)=>{
    res.send(onlyAdmin)
})

app.post("/sign-up", (req, res)=>{
    const {username, password} = req.body;
    const admin = {username, password};
    if(admin.username === "admin" && admin.password === "admin123") {
        res.redirect("/admin")
    }else {
        res.send("Siz kimsiz?")
    }
})

// Barcha kinolarni beradi
app.get("/movies", (req, res)=>{
    res.send(movies)
})

// Yangi kino qo'shadi
app.post("/add-movie", (req, res)=>{
    const {id, title, subtitle, image} = req.body;
    const movie = {id, title, subtitle, image};
    movies.push(movie);
    res.redirect("/admin")
})




// ID bo'yicha kinoni o'chiradi
app.post("/delete-movie", (req, res)=>{
    const {id} = req.body;
    movies = movies.filter(movie => movie.id !== id);
    res.redirect("/admin")
})



export const handler = ServerlessHttp(app);
