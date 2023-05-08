const express=require("express");
const servicesRouter=express.Router()
let listOfservices = [
      {
        id:1,
        name: "Laptop services",
      },
    
      {
        id:2,
        name: "Mobile services",
      },
    
      {
        id:3,
        name: "Customer services",
      },
    
      {
        id:4,
        name: "Gadgets services",
      },
    
      
    ];
servicesRouter.get('/',(request,response)=>{
      response.send("Services provided 24/7");
});

servicesRouter.get("/:id", (request, response) => {
  const serviceId = Number(request.params.id);
  const getService = listOfservices.find((service) => {
    return service.id === serviceId;
  });

  if (!getService) {
    response.status(500).send("Expected service not found");
    console.log(request.params.id);
  } else {
    response.json(getService);
  }
});
module.exports=servicesRouter