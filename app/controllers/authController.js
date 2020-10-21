

// LOGIN
exports.login = (req,res)=>{
    res.render('auth/login',{layout:'./layouts/fullscreen'});
}

// REGISTRO
exports.register = (req,res)=>{
    res.render('auth/register',{layout:'./layouts/fullscreen'});
}