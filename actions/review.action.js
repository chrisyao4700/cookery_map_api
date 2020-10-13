const CMReview = require('../class/review.class');
const CMLocation = require('../class/location.class');


class CMReviewAction {
    static async findReviewWithLocation(params) {
        try {
            const {identifier} = params;

            const {location_id} = await CMLocation.findLocationWithIdentifier(identifier);

            // console.log(location_id);
            if (!location_id) func.throwErrorWithMissingParam('CANNOT FIND LOCATION_ID');
            return await CMReview.findReviewListWithLocation(location_id)
        } catch (e) {
            throw e;
        }

    }
}

module.exports = CMReviewAction;