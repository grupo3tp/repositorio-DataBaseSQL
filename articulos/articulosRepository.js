var response = require("../../prueba_nodejs_con_sql/shared/response");

var TYPES = require('tedious').TYPES;

function artulosRepository(dbContext) {
    function getArticulos(req, res) {
        var params = [];

        dbContext.getQuery("select * from Articulos", params, false, function(error, data) {

            return res.json(response(data, error));
        });
    }

    return {getArticulos};
}

module.exports = artulosRepository;