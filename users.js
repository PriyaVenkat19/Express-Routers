const express=require("express");
const userRouter=express.Router()
const users = [
      {
        name: "Jack",
      },
      {
        name: "John",
      },
      {
        name: "Mary",
      },
      {
        name: "Daiwik",
      },
    ];
    userRouter.get('/',(request,response)=>{
      response.send("list of users");
      });
      userRouter.get('/:id([0-9]{1})',(request,response)=>{
        response.send(request.user.name);
      })
    userRouter.param("id", (request, response, next, id) => {
      console.log(id);
      request.user = users[id];
      next();
    });

    module.exports=userRouter