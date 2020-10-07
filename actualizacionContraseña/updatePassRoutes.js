const _updatePassRepository = require("./updatePassRepository");
const dbContext = require("../database/dbContext");

module.exports = function (router) {
    const updatePassRepository = _updatePassRepository(dbContext);
router.route('/updatePass').put(updatePassRepository.put);
}