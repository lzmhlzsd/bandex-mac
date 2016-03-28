/**
 * Created by lkj on 2015/11/30.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    COMPANY_ID: String,
    COMPANY_NAME: String,
    COMPANY_REMARK: String,
    COMPANY_TYPE: Number,
    COMPANY_POSTCODE: String,
    COMPANY_PHONE: String,
    COMPANY_FAX: String,
    COMPANY_URL: String,
    COMPANY_EMAIL: String,
    COMPANY_ACCOUNT: String,
    COMPANY_OPENBANK: String,
    COMPANY_ADDRESS: String,
    COMPANY_CODE: String,
    COMPANY_CRDATE: {type: Date, default: Date.now},
    COMPANY_NUMS: {type: Number, default: 10},
    COMPANY_EXPRIED: Date,
    comPANY_ACTIVE: {type: Boolean, default: true}
});

mongoose.model('bsj_company', schema);