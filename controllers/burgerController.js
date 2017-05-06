var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", function(req, res) {

    models.BurgerTable.findAll({}).then(function(result) {
      var hbsObject={
        burgers: result
      }
      res.render("index",hbsObject);
    });
});

router.post("/", function(req, res) {
  console.log(req.body);
    models.BurgerTable.create({burger_name: req.body.burger_name}).then(function(result) {
      res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
 var burgerID = req.params.id;
  models.BurgerTable.update({devoured: true}, { where:{
      id: burgerID
    }}).then( function(result) {
    res.redirect("/");
  });

});

// Export routes for server.js to use.
module.exports = router;