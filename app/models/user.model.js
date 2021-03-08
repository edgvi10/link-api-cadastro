module.exports = mongoose => {

  var schema = mongoose.Schema({
    uuid:mongoose.ObjectId,
    user_id: mongoose.ObjectId,
    name: String,
    birthdate: Date,
    phone: String,
    cep: String,
    info: String,
    email: String,

    login: String,
    pass: String,
    active: Boolean

  },
    {
      timestamps: true
    });

  

  const user = mongoose.model("user", schema);

  return user;

};
