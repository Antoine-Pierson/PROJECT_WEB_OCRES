module.exports = app => {
    const commande = require("../controllers/controller.js");
  
    var router = require("express").Router();
  

    router.post("/", commande.create);
  

    router.get("/", commande.findAll);
  

    router.get("/prete", commande.findAllPrete);

    
    router.get("/tableprete", commande.findTablePrete);
  

    router.get("/:id", commande.findOne);


    router.put("/", commande.update);
  

    router.delete("/:id", commande.delete);


    router.delete("/", commande.deleteAll);
  

    app.use('/api/commande', router);
  };
  