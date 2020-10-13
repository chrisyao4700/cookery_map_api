const CMZipcode = require('../class/zipcode.class');
const func = require('od-utility');

class CMZipcodeAction {
    static async findZipcodeDetail(params) {
        try {
            const {zipcode} = params;
            if (!zipcode) func.throwErrorWithMissingParam('zipcode');
            return await CMZipcode.findZipcodeDetail(zipcode);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = CMZipcodeAction;