// Initializes the `articles` service on path `/articles`
const createService = require('feathers-mongoose');
const createModel = require('../../models/articles.model');
const hooks = require('./articles.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/articles', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('articles');

  service.hooks(hooks);
};
