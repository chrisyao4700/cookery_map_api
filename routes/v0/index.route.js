const express = require('express');
const router = express.Router();
const cors = require('cors');

const countRoute = require('../../routes/v0/count.route');

router.use(cors());


router.use('/count', countRoute);
router.use('/', async (req, res, next) => {
    res.json({status: false, message: 'V0 INDEX REACHED'});
});

module.exports = router;
