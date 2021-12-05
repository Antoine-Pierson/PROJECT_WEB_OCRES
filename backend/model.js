const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Commande = new Schema(
  {
    table: {
      type: Number
    },
    plat: {
      type: String
    }
  },
  { collection: "commande" }
);

module.exports = mongoose.model("commande", Commande);