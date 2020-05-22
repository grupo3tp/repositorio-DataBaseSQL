const marcasRepository = require("./marcasRepository");
const dbContext = require("../../prueba_nodejs_con_sql/database/dbContext");

module.exports = function (router) {
    const marcaRepository = marcasRepository(dbContext);
    
    router.route('/marca').get(marcaRepository.getMarca);
}