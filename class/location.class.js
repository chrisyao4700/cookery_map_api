const ODInstance = require('../model/instance.model');
const ODCondition = require('../model/condition.model');

class CMLocation extends ODInstance {

    static async findLocationWithIdentifier(identifier) {
        try {
            const condition = new ODCondition();

            condition
                .configComplexConditionKey('cm_location', 'id', 'location_id')
                .configComplexConditionQueryItem('cm_location', 'identifier', identifier)
                .configComplexConditionQueryItem('cm_location', 'status', 1);

            const results = await this.findInstanceListWithComplexCondition('cm_location', condition);

            if (results.length) return results[0];
            return {location_id: 0};
        } catch (e) {
            throw e;
        }
    }

}

module.exports = CMLocation;