/**
 * Created by lkj on 2015/12/2.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var schema = new Schema({
    MOBILE: String,
    PASSWORD: String,
    COMPANY_ID: String,
    USER_NO:String,
    USER_NAME:Object,
    CRDATE: {type: Date, default: Date.now}
});

schema.virtual("PWD").set(function (password) {
    this.PASSWORD = encryptPassword(password);
});

schema.method("authenticate", function (plainText) {
    return encryptPassword(plainText) === this.PASSWORD;
});

function encryptPassword(password) {
    return crypto.createHash('md5').update(password).digest('base64');
}

mongoose.model('bsj_user', schema);