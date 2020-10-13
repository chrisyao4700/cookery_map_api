const func = require('od-utility');
// const categories = ['chinese', 'mexican', 'japanese', 'fast', 'pizza', 'seafood', 'thai', 'italian', 'korean', 'american', 'sushi bar'];
const CMCategory = require('../class/category.class');

class CountAction {

    static async findCountWithZipcode(query) {
        try {
            const {zipcode, category} = query;
            if (!zipcode) func.throwErrorWithMissingParam('zipcode');
            if (!category) func.throwErrorWithMissingParam('category');

            const list = await CMCategory.findCategoryList();
            const categories = list.map(ele => ele.name);
            if (categories.indexOf(category) < 0) func.throwError('Invalid category');

            const payload = {
                query: query,
                count: Math.floor(`${zipcode}`.split('').reduce((acc, curr) => (acc + parseInt(curr)), 0) / 100
                    * (category.split('').reduce((acc, curr) => acc + curr.charCodeAt(), 0)) / 12),
                timestamp: new Date()
            };
            return payload;
        } catch (e) {
            throw e;
        }
    }

    static async findCoundWithArea(query) {
        try {
            func.checkMissingParam(query, ['lat', 'lng', 'radius', 'category']);
            const {lat, lng, radius, category} = query;
            const index = (parseFloat(lat) / parseFloat(lng));
            const list = await CMCategory.findCategoryList();
            const categories = list.map(ele => ele.name);
            if (categories.indexOf(category) < 0) func.throwError('Invalid category');

            const payload = {
                query: query,
                count: Math.floor((index > 0 ? index : index * -1) * (radius / 15) * category.split('').reduce((acc, curr) => acc + curr.charCodeAt(), 0)
                )
            };
            return payload;
        } catch (e) {
            throw e;
        }

    }
}

module.exports = CountAction;