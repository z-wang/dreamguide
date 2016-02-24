/**
 * Created by zihanwang on 2/24/16.
 */
var financeData = require('./finance/eselection');
var financeRank = require('./finance/ranks');


module.exports = {
    finance : {
        eselectionData : financeData,
        schoolRank : financeRank
    }
};

