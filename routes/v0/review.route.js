const express = require('express');
const router = express.Router();

const func = require('od-utility');
const CMReviewAction = require('../../actions/review.action');


router.get('/all/:identifier', async (req, res, next) => {
    try {

        res.json(
            func.configSuccess({
                review_list: await CMReviewAction.findReviewWithLocation(req.params),
                timestamp: new Date()
            })
        );

    } catch (e) {
        next(e);
    }
});
module.exports = router;