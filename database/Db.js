const  mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected Successfully"))
    .catch((error)=>{ 
        console.log("this error occured"+ error)
    })
}