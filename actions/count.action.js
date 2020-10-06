const func = require('od-utility');

class CountAction {

    static findCountWithZipcode(query) {
        try {
            const {zipcode, category} = query;
            if (!zipcode) func.throwErrorWithMissingParam('ZIPCODE');
            if (!category) func.throwErrorWithMissingParam('category');

            const payload = {
                query: query,
                count: `${zipcode}`.split('').reduce((acc, curr) => (acc + parseInt(curr)), 0) + category.length,
                timestamp: new Date()
            };
            return payload;
        } catch (e) {
            throw e;
        }

    }

}

module.exports = CountAction;