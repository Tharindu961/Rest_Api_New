const node_routes = require('./node_routes');

module.exports = function(app, db) {
    node_routes(app, db);
}