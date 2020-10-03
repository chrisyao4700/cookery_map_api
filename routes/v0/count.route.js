const express = require('express');
const router = express.Router();

const func = require('od-utility');


router.get('/zipcode', async (req, res, next) => {
    try {
        res.json(
            func.configSuccess({

                query: '/count/zipcode?category=mexican&zipcode=91709',
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
                query: 'category=chinese&lat=33.334423&lng=-117.223234&radius=21',
                category: 'mexican',
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