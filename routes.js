const express = require('express');
function eRoutes() {
    const router = express.Router();
    var articulos = require('./articulos/articulosRoutes')(router);
    var marca = require('./Marca/marcaRoutes')(router);
    var login = require('./login/loginRoutes')(router);
    // var department = require('./repository/department/department.routes')(router);
    return router;
}
module.exports = eRoutes;