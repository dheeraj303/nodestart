
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="product"><input type="text" name="size"><button type="submit">Send</button></form>')
});
app.use('/product',(req,res,next)=>{
    console.log(req.body.product);
    console.log(req.body.size);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    // console.log('In another middleware');
    res.send('<h1>Hello World</h1>')
});
app.listen(4000);




