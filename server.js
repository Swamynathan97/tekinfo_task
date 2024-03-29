const express = require('express');
const app = express();
const dotenv = require("dotenv");
const db = require('./database/Db')

dotenv.config();
const PORT = process.env.PORT || 7000;

app.use(express.json());

//calling Database function
db.connect();

//route importing and mounting
const authRoute = require('./routes/AuthRoute');

app.use('/api/auth', authRoute);


app.listen(PORT, ()=>{
    console.log(`Server Started in the port ${process.env.PORT} `)
   
})