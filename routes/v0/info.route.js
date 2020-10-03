const express = require('express');
const router = express.Router();

const func = require('od-utility');


router.get('/all/detail', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await ESZipcodeAction.findAllZipcodeDetail(req.params, req.body, req.query)
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.get('/detail/code/:code', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await ESZipcodeAction.findZipcodeDetail(
                req.params, req.body, req.query
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;