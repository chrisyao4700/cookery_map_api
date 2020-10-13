const ODInstance = require('../model/instance.model');
const ODCondition = require('../model/condition.model');

class CMCategory extends ODInstance {

    static async findCategoryList() {

        try {

            const condition = new ODCondition();
            condition
                .configComplexConditionKey('cm_category', 'name')
                .configComplexConditionQueryItem('cm_category', 'status', 1);


            const list = await this.findInstanceListWithComplexCondition('cm_category', condition);
            return list || [];
        } catch (e) {
            throw e;
        }
    }
}

module.exports = CMCategory;
