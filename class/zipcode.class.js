const ODCondition = require('../model/condition.model');
const ODInstance = require('../model/instance.model');

class CMZipcode extends ODInstance {

    static async findZipcodeDetail(zipcode) {
        const condition = new ODCondition();

        condition
            .configComplexConditionKeys('cm_address', ['addr_str'])
            .configComplexConditionKeys('cm_location', ['name', 'identifier','score'])
            .configComplexConditionJoin('cm_location', 'address_id', 'cm_address', 'LEFT JOIN')
            .configComplexConditionQueryItem('cm_address', 'zip', zipcode)
            .configComplexConditionQueryItem('cm_address', 'status', 1)
            .configComplexConditionQueryItem('cm_location', 'status', 1);
        
        const locations = await this.findInstanceListWithComplexCondition('cm_location', condition);

        return {locations: locations || []};
    }
}

module.exports = CMZipcode;