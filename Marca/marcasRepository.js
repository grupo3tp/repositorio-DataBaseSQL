var response = require("../shared/response");

var TYPES = require('tedious').TYPES;

 function marcaRepository(dbContext) {

    function getEmployees(req, res) {
        var parameters = [];
    
        dbContext.getQuery("select * from Marca", parameters, false, function (error, data){
                    return res.json(response(data, error));
                });
    }
    function getEmployee(req, res, next) {
           if (req.params.marcaId) {
                var parameters = [];
                    parameters.push({ name: 'id_Marca', type: TYPES.Int, val: req.params.marcaId });
                    var query = "select * from Marca where id_Marca = @id_Marca"
                    dbContext.getQuery(query, parameters, false, function (error, data) {
                    if (data) {
                        res.json(response(data, error));
                        req.data = data[0];
                           return next();
                    }
                    return res.sendStatus(404);
                });
            } 
        } 
    function postEmployees(req, res) {
    var parameters = [];
            parameters.push({ name: 'Detalle', type: TYPES.VarChar, val: req.body.Detalle });
          
            dbContext.post("InsertOrUpdateMarca", parameters, function (error, data) {
                return res.json(response(data, error));
    
            });
        }
    
        function deleteEmployee(req, res) {
    
                     var parameters = [];
            
                     if (req.data.id_Marca) {
                         var parameters = [];
            
                         parameters.push({ name: 'Id', type: TYPES.Int, val: req.data.id_Marca });
            
                         var query = "delete from Marca where id_Marca = @Id"
            
                         dbContext.getQuery(query, parameters, false, function (error, data, rowCount) {
                             if (rowCount > 0) {
                                 return res.json('la marca a sido borrada');
                             }
                             return res.sendStatus(404);
                         });
                     }
                 }
    
        function putEmployee(req, res) {
    
             var parameters = [];
    
             Object.entries(req.data).forEach((property) => {
    
                 if (req.body[property[0]]) {
                     parameters.push(
                         {
                             name: property[0],
                             val: req.body[property[0]],
                             type: TYPES.VarChar
                         });
                 } else {
    
                     parameters.push(
                         {
                             name: property[0],
                             val: property[1],
                             type: TYPES.VarChar
                         });
                 }
             });
    
             dbContext.post("InsertOrUpdateMarca", parameters, function (error, data) {
                 return res.json(response(data, error));
             });
         }
    
     function findEmployee(req, res, next) {
    
        if (req.params.marcaId) {
            var parameters = [];
    
             parameters.push({ name: 'id_Marca', type: TYPES.Int, val: req.params.marcaId });
    
             var query = "select * from Marca where id_Marca = @id_Marca"
    
           dbContext.getQuery(query, parameters, false, function (error, data) {
              if (data) {
                   req.data = data[0];
                    return next();
                 }
               return res.sendStatus(404);
            });
         }
     }
    
    
    return {
            getAll: getEmployees,
            get: getEmployee,
            post: postEmployees,
            delete: deleteEmployee,
            intercept: findEmployee, 
            put: putEmployee,
        }
    }

module.exports = marcaRepository;

