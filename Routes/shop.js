const express=require('express');
const Router=express.Router();
Router.get('/',(req,res,next)=>{
    // console.log('In another middleware');
    res.send('<h1>Hello World</h1>')
});
module.exports=Router;