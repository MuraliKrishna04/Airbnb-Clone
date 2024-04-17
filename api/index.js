const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cookieParser = require ('cookie-parser');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "nrsbgirfhpir4ir940rwkfiennbdfibmfihlmsejbabdnijdr";

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173', // Update this to match the client application's URL
}));

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);     

app.get('/test',(req,res)=>{
    mongoose.connect(process.env.MONGO_URL);
    res.json('test ok');
});

app.post('/register',async(req,res)=>{
    mongoose.connect(process.env.MONGO_URL);
    const {name,email,password} = req.body
    try{ 
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    }
    catch(e){
        res.status(422).json(e);
    }
});

app.post('/login',async(req,res)=>{
    mongoose.connect(process.env.MONGO_URL);
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk){
            jwt.sign({email:userDoc.email , 
                      id:userDoc._id, 
                      name:userDoc.name
                    },jwtSecret,{},(err,token)=>{
                if (err) throw err;
                res.cookie('token',token).json(userDoc);
            });
        }
        else{
            res.status(422).json("PASS NOT OK");
        }
    }
    else{
        res.json("Not Found")
    }
});





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});