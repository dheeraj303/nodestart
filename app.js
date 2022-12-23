
const express=require('express');
const app=express();
const adminRoutes=require('./Routes/admin');
const shoproute=require('./Routes/shop');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use('/shop',shoproute);
app.use((req,res,next)=>{
    res.status(404).send('<h1>PAge not found</h1>');
})
app.listen(4000);




