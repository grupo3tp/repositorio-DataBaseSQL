var response = require("../shared/response");
const jwt = require('jsonwebtoken');

var TYPES = require('tedious').TYPES;

 function loginRepository(dbContext) {

    function getA(req, res) {

        if (req.body) {
            var user = req.body;
            console.log(user)

            var parameters = [];
    
            dbContext.getQuery("select * from Usuarios", parameters, false, function (error, data){
                       
                    });
         
            if (parameters.dni===req.body.dni && parameters.pass === req.body.pass) {
              var token = jwt.sign(user, JWT_Secret);
              res.status(200).send({
                signed_user: user,
                token: token
              });
            } else {
              res.status(403).send({
                errorMessage: 'Authorisation required!'
              });
            }
          } else {
            res.status(403).send({
              errorMessage: 'Please provide email and password'
            });
          }
    }

    return {getA}
}

module.exports = loginRepository;