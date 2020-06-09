var response = require("../shared/response");
const jwt = require('jsonwebtoken');
const JWT_Secret = "987654"
var TYPES = require('tedious').TYPES;
var loginModel = require("./loginModels")
var esIgual = false;
var testUser = new Array(loginModel)
 testUser.push({Usuario:'gus',Pass:'123'},{Usuario:'yo',Pass:'123'})
 

 function loginRepository(dbContext) {

    function getA(req, res) {

        if (req.body) {
            var user = req.body;

            var parameters = [];
           
            dbContext.getQuery("select Usuario,Pass from Usuarios", parameters, false, function (error, data){
              
               //return testUser.push({Usuario: data.Usuario, Pass:data.Pass})    
            });
           
              testUser.forEach(testUser => {

                if (req.body.Usuario===testUser.Usuario && req.body.Pass === testUser.Pass ){
                esIgual = true;        
                }
                
              });
              if (esIgual === true) {
                var token = jwt.sign(user, JWT_Secret);
                esIgual = false;
                res.status(200).send({
                  signed_user: user,
                  token:token,
                 
  
                });
              } else {
                res.status(403).send({
                  errorMessage: 'requiere autorizacion!'
                });
              }
            
        } else { 
        res.status(403).send({
          errorMessage: 'Por favor ingrese un Usuario y Contraseña'
        });
        }
     }

    return {getA}
}

module.exports = loginRepository;