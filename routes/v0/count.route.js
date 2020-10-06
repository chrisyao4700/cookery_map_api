const express = require('express');
const router = express.Router();

const func = require('od-utility');
const CountAction = require('../../actions/count.action');


router.get('/zipcode', async (req, res, next) => {
    try {
        res.json(
            func.configSuccess(CountAction.findCountWithZipcode(req.query))
        );
    } catch (e) {
        res.json(
            func.configFail(e.message)
        )
    }
});


router.get('/area', async (req, res, next) => {
    try {
        res.json(
            func.configSuccess(CountAction.findCoundWithArea(req.query))
        );
    } catch (e) {
        res.json(
            func.configFail(e.message)
        )
    }
});

module.exports = router;