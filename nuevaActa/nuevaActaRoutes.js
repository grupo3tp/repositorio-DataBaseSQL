const _nuevaActaRepository = require("./nuevaActaRepository");
const dbContext = require("../database/dbContext");

module.exports = function (router) {
    const nuevaActaRepository = _nuevaActaRepository(dbContext);
router.route('/nuevaActa').post(nuevaActaRepository.post);
}