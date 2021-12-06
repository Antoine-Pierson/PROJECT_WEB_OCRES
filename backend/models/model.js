module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      table: Number,
      plat: String,
      prete: Boolean,
      servie: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Commande = mongoose.model("commande", schema);
  return Commande;
};
