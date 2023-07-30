const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// import pkg from "jsonwebtoken"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://adarsh:Aa88392799_@cluster0.vxu7has.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err)
})

// Schema -> modal -> document
const userSchema = new mongoose.Schema({
    name: String,
    profession: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

// register
app.post("/register", async (req, res) => {
    const {name, profession,key, email, password} = req.body;
    let user = await User.findOne({email: email});
        if(user) {
            res.send({ message : "User Already Registered"})
        }
        else if(profession === 'admin'){
            if(key === 'i3') {
                const user = new User({
                    name,
                    profession,
                    email,
                    password
                })
                
                user.save();
                res.send( {message: "Successfully Registered" })
            }
            else {
                res.send( {message: "Incorrect Key"})
            }
        }
        else{
            const user = new User({
                name,
                profession,
                email,
                password
            })
            
            user.save();
            res.send( {message: "Successfully Registered" })
        }
    })
// Routes
app.post("/login", async (req, res) => {
 
    const {email, password} = req.body
    
    let user = await User.findOne({email: email})
    if(user) {
        if(password === user.password){
        
                let userExist=true;
        
                                res.send({userExist, message: "Login Successful" , user});
           
        }
        else{
            let userExist=false;
            res.send({userExist , message: "Please Check Password"})    
        }
        }
    else{
        res.send({ message : "User Not Exist"})
    
    }
    })


app.listen(8080, () => {
    console.log("DB started at post 8080")
})










// const express = require("express");
// const app = express();
// const notes = require("./Data/notes");
// const dotenv = require("dotenv");
// const connectDB = require("./Config/db");
// const userRoutes = require('./Routes/userRoutes');
// const {NotFound, Errorandler, errorHandler } = require('../Backend/MiddleWares/errorMiddleware')

// dotenv.config();
// connectDB();
// app.use(express.json());

// app.use
// app.get('/',(req,res)=>{
//     res.send("Api run");
// });

// app.get("/api/notes",(req,res)=>{
//     res.json(notes);
// });

// app.get("/api/notes/:id",(req,res)=>{
//     const note = notes.find((n) =>n._id ===req.params.id);
//     res.send(note);
// });

// app.use('/api/users',userRoutes);
// app.use(NotFound);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT,console.log(`Server started on port ${PORT}`));