const ODInstance = require('../model/instance.model');
const ODCondition = require('../model/condition.model');


class CMReview extends ODInstance {

    static async findReviewListWithLocation(location_id) {

        try {
            const condition = new ODCondition();

            // console.log('here');
            condition
                .configComplexConditionKeys('cm_review', ['content', 'score'])
                .configComplexConditionQueryItem('cm_review', 'location_id', location_id)
                .configComplexConditionQueryItem('cm_review', 'status', 1);

            const list = await this.findInstanceListWithComplexCondition('cm_review', condition);

            return list || [];
        } catch (e) {
            throw e;
        }
    }

}

module.exports = CMReview;