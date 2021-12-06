const db = require("../models");
const Commande = db.commande;


exports.create = (req, res) => {
    // Validate request
    if (!req.body.plat) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    const commande = new Commande({
      table: req.body.table,
      plat: req.body.plat,
      prete: false,
      servie: false,
    });
  
    commande
      .save(commande)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Commande."
        });
      });
  };

exports.findAll = (req, res) => {
    const prete = req.query.prete;
    var condition = prete ? { prete: { $regex: new RegExp(prete), $options: "i" } } : {};
    Commande.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving commande."
        });
      });
  };


exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Commande.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Commande with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Commande with id=" + id });
      });
  };


exports.update = (req, res) => {
  console.log("oui");
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    
    const id = req.params.id;
  
    Commande.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Commande with id=${id}. Maybe Commande was not found!`
          });
        } else res.send({ message: "Commande was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Commande with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Commande.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Commande with id=${id}. Maybe Commande was not found!`
          });
        } else {
          res.send({
            message: "Commande was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Commande with id=" + id
        });
      });
};


// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Commande.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Commande were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Commande."
        });
      });
  };


exports.findAllPrete = (req, res) => {
  Commande.find({ prete: req.query.prete, servie: req.query.servie })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Commande."
        });
      });
  };


exports.findTablePrete = (req, res) => {
  Commande.find({ prete: req.query.prete, servie: req.query.servie, table:req.query.table })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Commande."
        });
      });
  };