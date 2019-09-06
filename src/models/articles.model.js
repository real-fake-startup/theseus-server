// articles-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const articles = new mongooseClient.Schema({
  
    title: { type: String, unique: true},
    author: { type: String },
    body: { type: String },
    date: { type: Date, default: Date.now },
    
  });

  return mongooseClient.model('articles', articles);
};
