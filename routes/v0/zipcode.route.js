const express = require('express');
const router = express.Router();

const func = require('od-utility');

const ZipcodeAction = require('../../actions/zipcode.action');


router.get('/detail/:zipcode', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await ZipcodeAction.findZipcodeDetail(req.params)
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;