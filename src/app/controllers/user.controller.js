const { User } = require("../models");

// Create and Save a new User
exports.create = (req, res) => {

    const MyDate = new Date();
    const MyDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' +
    ('0' + MyDate.getDate()).slice(-2) + ' ' +
    ('0' + MyDate.getHours()).slice(-2) + ':' +
    ('0' + MyDate.getMinutes()).slice(-2) + ':' +
    ('0' + MyDate.getSeconds()).slice(-2);

  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    Username: req.body.username,
    Email: req.body.email,
    PhoneNumber: req.body.phonenumber,
    SkillSets: req.body.skillsets,
    Hobby: req.body.hobby,
    CreatedDate: MyDateString,
    UpdatedDate: ""
  });

  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.send({ message: "Record successfully saved." });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all User from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving user."
        });
      });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found record with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving record with id=" + id });
      });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
      User.findByIdAndUpdate(id, { Email: req.body.email, PhoneNumber: req.body.phonenumber,
        SkillSets: req.body.skillsets, Hobby: req.body.hobby}, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update record with id=${id}. User was not found!`
            });
          } else res.send({ message: "Record successfully updated." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating record with id=" + id
          });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log('id: ' + id);
  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete record with id=${id}. User was not found!`
        });
      } else {
        res.send({
          message: "Record successfully deleted."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete record with id=" + id
      });
    });
};