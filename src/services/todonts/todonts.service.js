// Initializes the `todonts` service on path `/todonts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/todonts.model');
const hooks = require('./todonts.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/todonts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('todonts');

  service.hooks(hooks);
};
