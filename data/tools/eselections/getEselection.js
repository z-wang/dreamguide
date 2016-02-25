/**
 * Created by zihanwang on 2/24/16.
 */
var financeData = require('./finance/eselection');
var financeRank = require('./finance/ranks');
var FEData = require('./financial_engineering/eselection');
var FERank = require('./financial_engineering/ranks');

module.exports = {
    finance : {
        eselectionData : financeData,
        schoolRank : financeRank
    },
    FE : {
        eselectionData : FEData,
        schoolRank : FERank
    }
};

