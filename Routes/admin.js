const express=require('express');

const Router=express.Router();
Router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input type="text" name="product"><input type="text" name="size"><button type="submit">Send</button></form>')
});
Router.post('/product',(req,res,next)=>{
    console.log(req.body.product);
    console.log(req.body.size);
    res.redirect('/');
});



module.exports=Router;