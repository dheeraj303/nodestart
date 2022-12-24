const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../Util/path');
router.get('/contact',(req,res,next)=>{
    // console.log('In another middleware');
    res.sendFile(path.join(rootDir,'views','contact.html'));
});
router.post('/success',(req,res,next)=>{
    // console.log('In another middleware');
    res.sendFile(path.join(rootDir,'views','success.html'));
});
module.exports=router;