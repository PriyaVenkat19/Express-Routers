const express=require("express");
const userRouter=express.Router()
const listofusers = [
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
    // userRouter.get('/',(request,response)=>{
    //   response.send("list of users");
    //   });
      userRouter.get('/new',(request,response)=>{
        response.render('users/new')
      })
      userRouter.post('/',(request,response)=>{
        listofusers.push({name:request.body.firstname})
        response.redirect(`/users/${listofusers.length}`)
      })
      userRouter.get('/:id([0-9]{1})',(request,response)=>{
        response.send(`${request.user.name} with id ${request.params.id}`);
      })
    userRouter.param("id", (request, response, next, id) => {
      request.user = listofusers[id-1];
      next();
    });

    module.exports=userRouter