const express = require('express');
const router = express.Router();

const func = require('od-utility');
const CountAction = require('../../actions/count.action');


router.get('/zipcode', async (req, res, next) => {
    try {
        // console.log(req.query);
        res.json(
            func.configSuccess(await CountAction.findCountWithZipcode(req.query))
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
            func.configSuccess(await CountAction.findCoundWithArea(req.query))
        );
    } catch (e) {
        res.json(
            func.configFail(e.message)
        )
    }
});

module.exports = router;