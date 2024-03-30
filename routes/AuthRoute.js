const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path')

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join( __dirname,'..' , 'uploads/' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
}) })


//Handlers from controllers
const AuthController = require("../controllers/AuthController");
const {auth, isAdmin} = require('../middleware/AuthMiddleware');

router.post('/login', AuthController.login)
router.post('/signup',upload.single('image'), AuthController.signup)
router.post('/sendotp', AuthController.sendotp)

// router.get('/admin', auth, isAdmin, (req,res)=>{
//     res.json({
//         success: true,
//         message: "You are a valid Admin "
//     })
// })

module.exports = router