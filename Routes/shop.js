const express=require('express');
const path=require('path');
const rootDir=require('../Util/path'); 
const Router=express.Router();
Router.get('/',(req,res,next)=>{
    // console.log('In another middleware');
    res.sendFile(path.join(rootDir,'views','shop.html'));
});
module.exports=Router;