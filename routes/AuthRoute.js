const express = require('express')
const router = express.Router()

//Handlers from controllers
const AuthController = require("../controllers/AuthController");
const {auth, isAdmin} = require('../middleware/AuthMiddleware');

router.post('/login', AuthController.login)
router.post('/signup', AuthController.signup)
router.post('/sendotp', AuthController.sendotp)

// router.get('/admin', auth, isAdmin, (req,res)=>{
//     res.json({
//         success: true,
//         message: "You are a valid Admin "
//     })
// })

module.exports = router