var response = require("../shared/response");

var TYPES = require('tedious').TYPES;

 function NAMRepository(dbContext) {

    function post(req, res) {
    var parameters = [];

            parameters.push({ name: 'idRemito', type: TYPES.Int, val: req.body.idRemito});
            parameters.push({ name: 'serialElegido', type: TYPES.VarChar, val: req.body.serialElegido});
                
            dbContext.post("InsertOrUpdateNAM", parameters, function (error, data) {
                return res.json(response(data, error));
    
            });
        }
    
    
    
    return {post: post}
    }

module.exports = NAMRepository;

