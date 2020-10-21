var express = require('express');
require('express-group-routes');
var router = express.Router();


// CONTROLADORES
var homeController = require('../app/controllers/homeController');
var authController = require('../app/controllers/authController');

router.use((req,res,next)=>{
    next();
});

router.group("/",(router)=>{
    router.get('/',homeController.landing);
    router.get('/login',authController.login);
});


module.exports={
    'routes': router,
};