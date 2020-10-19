const _distritosRepository = require("./distritosRepository");
const dbContext = require("../database/dbContext");

module.exports = function (router) {
    const distritosRepository = _distritosRepository(dbContext);
router.route('/distritos')
    .get(distritosRepository.getAll)
    .post(distritosRepository.post);

router.use('/distritos/:distritosId', distritosRepository.intercept);

router.route('/distritos/:distritosId')
    .get(distritosRepository.get)
    .put(distritosRepository.put)
    .delete(distritosRepository.delete);

}
