const express=require('express');
const path=require('path');
const rootDir=require('../Util/path'); 
const Router=express.Router();
const productcontrol=require('../controllers/product');
Router.get('/',productcontrol.getproduct);
module.exports=Router;