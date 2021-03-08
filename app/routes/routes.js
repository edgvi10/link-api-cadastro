module.exports = app => {
  
  const users = require("../controllers/user.controllers.js");
  const login = require("../controllers/login.controllers.js");


  var router = require("express").Router();

  // Create a new User
  router.post("/register", users.register);

  // Retrieve all users
  router.get("/:auth_id/userslist", users.listUsers);

  // Retrieve all id contacts users
  router.get("/:auth_id/usercontacts/:user_id", login.listContacts);


  router.post("/:auth_id/createcontact/", login.createContact);

  // Update a User with id
  router.put("/:auth_id/updateuser/:uuid", users.update);

  // Delete a User with id
  router.delete("/:auth_id/deleteuser/:uuid", users.delete);

  //Login
  router.post("/login", login.login);

  //Logout
  router.delete("/:auth_id/logout", login.logout);

    // Create a new User
  router.post("/register", users.register);

  app.use('', router);
};
