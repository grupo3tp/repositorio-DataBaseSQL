var response = require("../shared/response");

var TYPES = require('tedious').TYPES;

 function artListRepository(dbContext) {

    function getA(req, res) {
        var parameters = [];
    
        dbContext.getQuery("select a.id_Art, a.Detalle, m.Detalle as 'marcaDetalle', s.Detalle as 'segDetalle'  from Articulos a inner join Marca m on a.id_Marca=m.id_Marca inner join Segmento s on s.id_Segmento=a.id_Segmento order by a.Detalle", parameters, false, function (error, data){
                    return res.json(response(data, error));
                });
    }
    
    return {
            getAll: getA
        }
    }

module.exports = artListRepository;