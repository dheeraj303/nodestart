const express=require('express');
const path=require('path');
const rootDir=require('../Util/path'); 
const productcontroller=require('../controllers/product')
const Router=express.Router();
Router.get('/add-product',productcontroller.getaddproduct);
Router.post('/product',productcontroller.postaddproduct);



module.exports=Router;