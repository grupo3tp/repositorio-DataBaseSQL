var response = require("../shared/response");
const jwt = require('jsonwebtoken');
const JWT_Secret = "987654"
var TYPES = require('tedious').TYPES;
var testUser = { usuario: 'p', password: '1'};


 function loginRepository(dbContext) {

    function getA(req, res) {

        if (req.body) {
            var user = req.body;

            var parameters = [];
           
            dbContext.getQuery("select * from Usuarios", parameters, false, function (error, data){
                  
              });
         
            if (req.body.Usuario===testUser.usuario && req.body.Pass === testUser.password ) {
              var token = jwt.sign(user, JWT_Secret);
              res.status(200).send({
                signed_user: user,
                token:token 

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