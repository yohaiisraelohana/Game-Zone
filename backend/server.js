require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const userRoutes = require('./routes/user');

const cookieParser = require('cookie-parser');

const cors = require('cors');


//express app
const app = express();

//middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

// routes

app.use('/api/users',userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT,() =>{
        console.log('listen to port',process.env.PORT);
    });
})
.catch((err) =>{
    console.log(err);
})

