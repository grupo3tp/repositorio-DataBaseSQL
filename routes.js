const express = require('express');
function eRoutes() {
    const router = express.Router();
    var articulos = require('./articulos/articulosRoutes')(router);
    var marca = require('./Marca/marcaRoutes')(router);
    var login = require('./login/loginRoutes')(router);
    var sector = require('./sector/sectorRoutes')(router);
    var transporte = require('./transporte/transporteRoutes')(router);
    var equipos = require('./equipo/equipoRoutes')(router);
    var remito = require('./remito/remitoRoutes')(router);
    var nuevaActa = require('./nuevaActa/nuevaActaRoutes')(router);
    return router;
}
module.exports = eRoutes;