const _ActivarDesactivarUsuarioRepository = require("./ActivarDesactivarUsuarioRepository");
const dbContext = require("../database/dbContext");

module.exports = function (router) {
    const ActivarDesactivarUsuarioRepository = _ActivarDesactivarUsuarioRepository(dbContext);
router.route('/ActivarDesactivarUsuario').put(ActivarDesactivarUsuarioRepository.put);
}