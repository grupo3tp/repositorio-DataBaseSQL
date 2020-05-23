const articuloRepository = require("./articulosRepository");
const dbContext = require("../database/dbContext");

module.exports = function (router) {
    const articulosRepository = articuloRepository(dbContext);
    
    router.route('/articulos').get(articulosRepository.getArticulos);
}