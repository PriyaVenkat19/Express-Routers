const express=require("express");
const serviceRouter=express.Router()
serviceRouter.get('/',(request,response)=>{
      response.send("Services provided 24/7");
});

module.exports=serviceRouter