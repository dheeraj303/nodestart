
const express=require('express');
const path=require('path');

const app=express();
const adminRoutes=require('./Routes/admin');
const shoproute=require('./Routes/shop');
const loginroute=require('./Routes/login');
const contactroute=require('./Routes/contact');
const contactcontroller=require('./controllers/contact')
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes);
app.use('/shop',shoproute);
app.use('/login',loginroute);
app.use(contactroute);
app.use(contactcontroller.error)
app.listen(3000);




