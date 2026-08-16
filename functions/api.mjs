import express from "express";
import ServerlessHttp from "serverless-http";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const __dirname = path.resolve()

const onlyAdmin = []

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/dist/index.html")
})
app.get("/users", (req, res)=>{
    res.send(onlyAdmin)
})

app.post("/sign-up", (req, res)=>{
    const {username, password} = req.body;
    const admin = {username, password};
    if(admin.username === "admin" && admin.password === "admin123") {
        res.send("Xush kebsiz admin!")
    }else {
        res.send("Siz kimsiz?")
    }
})



export const handler = ServerlessHttp(app);
