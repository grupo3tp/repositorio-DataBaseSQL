var response = require("../shared/response");

var TYPES = require('tedious').TYPES;

function artulosRepository(dbContext) {
    function getArticulos(req, res) {
        var params = [];

        dbContext.getQuery("select * from Marca", params, false, function(error, data) {

            return res.json(response(data, error));
        });
    }

    return {getArticulos};
}

module.exports = artulosRepository;