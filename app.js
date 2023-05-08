const express=require("express");
const app=express();
const userRouter=require('./users')
const contactRouter=require('./contact')
const aboutRouter=require('./about')
const servicesRouter=require('./services')
const paymentRouter=require('./payment')
//componentName.HTTPMethodname('path',(handlers))
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.get('/',(request,response)=>{
     response.send("Get  Router on Home Page");
     //response.sendStatus(404);
     // response.render('users/new');
});
app.use('/users',userRouter)
app.use('/contact',contactRouter)
app.use('/about',aboutRouter)
app.use('/services',servicesRouter)
app.use('/payment',paymentRouter)


app.listen(3600);