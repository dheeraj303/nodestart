const express=require('express');
// var LocalStorage = require('node-localstorage').LocalStorage,
// localStorage = new LocalStorage('./scratch');
const router=express.Router();
router.get('/',(req,res,next)=>{
    res.send('<form action="/login/login" method="POST"><input type="text" name="username"></br><button type="submit">Login</button></form>');
})
router.post('/login',(req,res,next)=>{
   localStorage.setItem('username',req.body.username);
    // res.redirect('/login');
    res.send('hello');
})
module.exports=router;