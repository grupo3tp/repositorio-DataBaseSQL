
 function intentoRepository() {

    function put(req, res) {
  
            var Connection = require('tedious').Connection;  
            var Request = require('tedious').Request;  
            var TYPES = require('tedious').TYPES;  
            var async = require('async');
            var config = require("../database/config")
           
      
             var connection = new Connection(config.config);  

            // conexion a la base
            connection.on('connect', function(err) {  
                if (err) {
                    console.log(err);
                }  
                else    {
                   // console.log("Connected");

                    // ejecutar las funciones del array
                    async.waterfall([
                        function Start(callback){
                            callback(null);
                        },
                        
                        function Insert(callback){
                            request = new Request("UPDATE [dbo].[Usuarios] set Token = null where Usuario = @Usuario", function(err){  
                                if (err) {
                                        console.log(err);
                                    }  
                                }
                            );
                            request.addParameter('Usuario', TYPES.VarChar, req.body.Usuario);  
                           
                         
                            request.on('doneInProc', function(rowCount, more) {  
                                //console.log(rowCount + ' fila insertada');  
                                callback(null);
                            });             

                            connection.execSql(request);  
                        },
                        function Read(callback){
                            request.callback = function (err, rowCount, rows) {
                                // filas no se está configurando, pero sí rowCount. Puede ser un error
                                if (err) {
                                 //console.log(err)
                                } else {
                                  return res.status(200).send()
                                }
                            };

                            // numero de filas leidas
                            request.on('doneInProc', function (rowCount, more, rows) {  
                                //console.log(rowCount + ' filas devueltas');  
                                callback(null);
                            });  

                            connection.execSql(request);  
                        }],
                        function Complete(err, result) {
                            if(err) {
                                console.log("Error:", err);
                            }
                            else {
                                //console.log("Fin!");
                            }
                        }
                    )
                }
            });
        }
    return {put: put}
    }

module.exports = intentoRepository;