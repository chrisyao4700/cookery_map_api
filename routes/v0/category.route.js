const express = require('express');
const router = express.Router();

const func = require('od-utility');
const CMCategoryAction = require('../../actions/category.action');

router.get('/all', async (req, res, next) => {
    try {

        res.json(
            func.configSuccess({
                categories: await CMCategoryAction.findCategoryList(),
                timestamp: new Date()
            })
        );
    } catch (e) {
        next(e);
    }
});


module.exports = router;