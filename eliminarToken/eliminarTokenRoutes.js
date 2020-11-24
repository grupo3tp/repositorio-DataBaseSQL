const _eliminarTokenRepository = require("./eliminarTokenRepository");
const dbContext = require("../database/dbContext");

module.exports = function (router) {
    const eliminarTokenRepository = _eliminarTokenRepository(dbContext);
router.route('/eliminarToken').put(eliminarTokenRepository.put);
}