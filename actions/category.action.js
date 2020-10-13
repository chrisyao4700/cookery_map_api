const CMCategory = require('../class/category.class');

class CategoryAction {


    static async findCategoryList() {
        try {
            return await CMCategory.findCategoryList();
        } catch (e) {
            throw e;
        }

    }
}

module.exports = CategoryAction;