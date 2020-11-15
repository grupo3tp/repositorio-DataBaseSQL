const _artListRepository = require("./artListRepository");
const dbContext = require("../database/dbContext");

module.exports = function (router) {
    const artListRepository = _artListRepository(dbContext);
router.route('/artList').get(artListRepository.getAll)
}