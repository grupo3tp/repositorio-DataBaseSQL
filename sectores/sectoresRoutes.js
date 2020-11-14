const _sectoresRepository = require("./sectoresRepository");
const dbContext = require("../database/dbContext");

module.exports = function (router) {
    const sectoresRepository = _sectoresRepository(dbContext);
router.route('/sectores').get(sectoresRepository.getAll)
}