const express = require('express');
const router = express.Router();

const func = require('od-utility');


router.get('/all', async (req, res, next) => {
    try {
        res.json(
            func.configSuccess({
                categories: ['chinese', 'mexican', 'japanese', 'fast', 'pizza', 'seafood', 'thai', 'italian', 'korean', 'american', 'sushi bar'],
                timestamp: new Date()

            })
        );
    } catch (e) {
        next(e);
    }
});


module.exports = router;