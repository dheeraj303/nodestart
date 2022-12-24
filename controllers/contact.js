const path=require('path');
const rootDir=require('../Util/path');

exports.contactform=(req,res,next)=>{
    // console.log('In another middleware');
    res.sendFile(path.join(rootDir,'views','contact.html'));
}

exports.success=(req,res,next)=>{
    // console.log('In another middleware');
    res.sendFile(path.join(rootDir,'views','success.html'));
}

exports.error=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
}