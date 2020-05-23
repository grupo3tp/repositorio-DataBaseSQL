var response = require("../shared/response");

var TYPES = require('tedious').TYPES;

 function marcaRepository(dbContext) {

    function getMarca(req, res) {
         var params = [];

         dbContext.getQuery("select * from Marca", params, false, function(error, data) {
             return res.json(response(data, error));
         });
    }


     return {getMarca};
 }

module.exports = marcaRepository;

