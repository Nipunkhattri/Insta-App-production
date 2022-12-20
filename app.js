const express = require("express");
require('dotenv').config()
require("./db")
const app = express();
const path = require("path");
const hbs = require("hbs");
const Register = require("./models/register");
const Userphoto = require("./models/photo");
const Userprofilepic = require("./models/userpic");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const auth = require("./middleware/auth");
const cookieparser = require("cookie-parser");
// const  bodyParser =  require("body-parser");
// import path from "path"
// import {fileURLToPath} from 'url';
const PORT=require('./config/keys');
const {fileURLToPath} = require("url")



app.use(express.json({limit: '50mb'}));
app.use(cookieparser());
// app.use(express.bodyParser({limit: '50mb'}));

// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// app.use(bodyParser.json({limit: '50mb'}));

const PORT = PORT || 5000;

app.use(express.static('public'));

app.use(require("./routes/fetchuser"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

// console.log(process.env.SECRET_KEY);

app.get("/",(req,res)=>{
    res.send("Website is live")
})

// app.get("/secret",(req,res)=>{
//     res.render("secret");
// })

app.get("/registration",(req,res)=>{
    res.render("registration");
})

// const __filename = fileURLToPath(import.meta.url);

// // 👇️ "/home/john/Desktop/javascript"
// const __dirname = path.dirname(__filename);

if(production.env.NODE_ENV=='production'){
    const path = require('path');
    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname, 'frontend','build')));
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
    })
}

// app.get("/login",(req,res)=>{
//     res.render("login");
// })

app.listen(PORT,function(){
    console.log("server started on port 5000");
});