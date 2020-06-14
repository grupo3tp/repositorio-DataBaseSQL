const express = require('express');
function eRoutes() {
    const router = express.Router();
    var articulos = require('./articulos/articulosRoutes')(router);
    var marca = require('./Marca/marcaRoutes')(router);
    var login = require('./login/loginRoutes')(router);
    var sector = require('./sector/sectorRoutes')(router);
    var transporte = require('./transporte/transporteRoutes')(router);
    return router;
}
module.exports = eRoutes;