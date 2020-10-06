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
            func.configFail(e)
    )


    }
});


router.get('/area', async (req, res, next) => {
    try {

        res.json(func.configSuccess({
                query: req.query,
                category: 'chinese',
                radius: 21,
                count: 23,
                timestamp: new Date()
            })
        );
    } catch (e) {
        next(e);
    }
});

module.exports = router;