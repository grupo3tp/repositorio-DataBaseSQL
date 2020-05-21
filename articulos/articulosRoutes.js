const articuloRepository = require("./articulosRepository");
const dbContext = require("../../prueba_nodejs_con_sql/database/dbContext");

module.exports = function (router) {
    const articulosRepository = articuloRepository(dbContext);
    
    router.route('/articulos').get(articulosRepository.getArticulos);
}