const express=require("express");
const contactRouter=express.Router()
contactRouter.get('/',(request,response)=>{
      response.send("Please contact if any query");
});

module.exports=contactRouter