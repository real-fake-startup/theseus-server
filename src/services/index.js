const users = require('./users/users.service.js');
const articles = require('./articles/articles.service.js');
const todos = require('./todos/todos.service.js');
const todonts = require('./todonts/todonts.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(articles);
  app.configure(todos);
  app.configure(todonts);
};
