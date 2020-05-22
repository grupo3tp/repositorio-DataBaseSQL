const articuloRepository = require("./marcasRepository");
const dbContext = require("../../prueba_nodejs_con_sql/database/dbContext");

module.exports = function (router) {
    const articulosRepository = articuloRepository(dbContext);
    
    router.route('/marca').get(articulosRepository.getArticulos);
}