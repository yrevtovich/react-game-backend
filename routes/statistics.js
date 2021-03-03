const { Router } = require('express');
const { postStatistics, getStatistics } = require('../controllers/statistics.controller');

const router = Router();

router.get('/', getStatistics);
router.post('/', postStatistics);

module.exports = router;
