const _marcaRepository = require("./marcasRepository");
const dbContext = require("../../prueba_nodejs_con_sql/database/dbContext");

module.exports = function (router) {
    const marcaRepository = _marcaRepository(dbContext);
    //const marcasRepository= findMarcaRepository(dbContext)
    
     router.route('/marca').get(marcaRepository.getMarca);

     //router.route('/marca/:id_Marca').get(marcasRepository.findMarca);
     
   
    // router.route('/marca').get(marcaRepository.getAll);

    // router.route('/marca/:id_Marca').get(marcaRepository.get)

}

