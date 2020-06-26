module.exports = app => {
   const user = require("./../controllers/user.controller");
 
   var router = require("express").Router();
 
   // Create a new Tutorial
   router.post("/adduser", user.create);
 
   // Retrieve all User
   router.get("/list-all", user.findAll);
 
   // Retrieve a single User with id
   router.get("/list-by/:id", user.findOne);
 
   // Update a User with id
   router.put("/update/:id", user.update);
 
   // Delete a User with id
   router.delete("/delete/:id", user.delete);
 
   // Create a new User
   router.delete("/delete-all", user.deleteAll);
 
   app.use('/api/user', router);
 };