var response = require("../shared/response");

var TYPES = require('tedious').TYPES;

 function sectorRepository(dbContext) {

    function getA(req, res) {
        var parameters = [];
    
        dbContext.getQuery("select s.id_Sec, s.Detalle, s.telefonos, tp.Tipo, g.Descripcion, s.StockPropio, s.Activo, s.PersonalPropio, ue.Direccion as 'diredif'  from Sector s inner join TipoPuesto tp on s.id_TipoSector = tp.id_TipoSector inner join Gerencia g on g.id_Dir = s.id_Dir inner join UbicacionEdificio ue on ue.Id_Ubicacion = s.Id_Ubicacion order by s.Detalle asc", parameters, false, function (error, data){
                    return res.json(response(data, error));
                });
    }
    
    return {
            getAll: getA
        }
    }

module.exports = sectorRepository;

