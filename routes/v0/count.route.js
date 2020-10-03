const express = require('express');
const router = express.Router();

const func = require('od-utility');


router.get('/zipcode', async (req, res, next) => {
    try {
        res.json({
            status: true, message: 'record found', payload: {
                query: '/count/zipcode?category=mexican&zipcode=91709',
                category: 'mexican',
                zipcode: 91709,
                count: 12
            }
        });
    } catch (e) {
        next(e);
    }
});


router.get('/area', async (req, res, next) => {
    try {
        res.json({
            status: true, message: 'record found', payload: {
                query: 'category=chinese&lat=33.334423&lng=-117.223234&radius=21',
                category: 'mexican',
                radius:21,
                count: 23
            }
        });
    } catch (e) {
        next(e);
    }
});

module.exports = router;