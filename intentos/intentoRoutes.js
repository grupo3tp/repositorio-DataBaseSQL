const _intentoRepository = require("./intentoRepository");
const dbContext = require("../database/dbContext");

module.exports = function (router) {
    const intentoRepository = _intentoRepository(dbContext);
router.route('/intento').put(intentoRepository.put);
}