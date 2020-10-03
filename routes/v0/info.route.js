const express = require('express');
const router = express.Router();

const func = require('od-utility');


router.get('/zipcode', async (req, res, next) => {
    try {
        res.json(
            func.configSuccess({

                query: req.query,
                category: 'mexican',
                zipcode: 91709,
                count: 12,
                timestamp: new Date()

            })
        );
    } catch (e) {
        next(e);
    }
});


router.get('/area', async (req, res, next) => {
    try {
        res.json(func.configSuccess({
                query: req.query,
                category: 'chinese',
                radius: 21,
                count: 44,
                timestamp: new Date()
            })
        );
    } catch (e) {
        next(e);
    }
});


module.exports = router;