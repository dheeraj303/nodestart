const path=require('path');
const rootDir=require('../Util/path'); 

exports.getaddproduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postaddproduct=(req,res,next)=>{
    console.log(req.body.product);
    console.log(req.body.size);
    res.redirect('/');
}

exports.getproduct=(req,res,next)=>{
    // console.log('In another middleware');
    res.sendFile(path.join(rootDir,'views','shop.html'));
}