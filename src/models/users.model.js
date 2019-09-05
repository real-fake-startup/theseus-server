// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const users = new mongooseClient.Schema(
    {
      email: { type: String, unique: true, lowercase: true, required: true },
      password: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      department: { type: String },
      businessTitle: { type: String },
      enabled: { type: boolean, default: true, required: true }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model("users", users);
};
