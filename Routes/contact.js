const express=require('express');
const router=express.Router();
// const path=require('path');
// const rootDir=require('../Util/path');
const contactcontroller=require('../controllers/contact');
router.get('/contact',contactcontroller.contactform);
router.post('/success',contactcontroller.success);
module.exports=router;