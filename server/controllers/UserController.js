var restful = require('node-restful');

module.exports = function(app, route) {

  //Setup controller for REST
  var rest = restful.model(
    'user',
    app.models.user).methods(['get', 'put', 'post', 'delete']);

  rest.register(app, route);

  return function(req, res, next) {
    next();
  };
};
