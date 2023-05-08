const express=require("express");
const paymentRouter=express.Router()
paymentRouter.get('/',(request,response)=>{
      response.send("Secure Payment");
});

module.exports=paymentRouter