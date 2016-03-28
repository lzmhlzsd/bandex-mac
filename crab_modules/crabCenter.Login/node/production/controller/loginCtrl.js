/**
 * Created by lkj on 2015/11/23.
 */
var path = require('path');
var request = require('request');

var api = require('../../api');
var config = require('../../../../../node_libs/config');
var logger = require('../../../../../node_libs/logger');
var bsj_company = require('../../../../../node_libs/model').bsj_company;

/**
 * @method 渲染登录模板
 * @author lkj
 * @date   2015/11/30
 */
exports.loginPage = function (req, res) {
    res.render(path.normalize(__dirname + '../../../../web/login/views/login/login.html'), {title: '登录'});
};


/**
 * @method 登录
 * @author leo.lu
 */
exports.login = function (req, res) {

};

/**
 * @method 验证图片
 * @author lkj
 * @date   2015/12/4
 */
exports.trySubmission = function (req, res) {
    var visualCaptcha,
        namespace = req.query.namespace,
        frontendData,
        imageAnswer,
        validate = false;
    visualCaptcha = require('visualcaptcha')(req.session, req.query.namespace);

    frontendData = visualCaptcha.getFrontendData();

    // Add namespace to query params, if present
    if (namespace && namespace.length !== 0) {
        validate = false;
    }

    // It's not impossible this method is called before visualCaptcha is initialized, so we have to send a 404
    if (typeof frontendData === 'undefined') {
        validate = false
    } else {
        // If an image field name was submitted, try to validate it
        if (( imageAnswer = req.body[frontendData.imageFieldName] )) {
            if (visualCaptcha.validateImage(imageAnswer)) {
                validate = true;
            } else {
                validate = false;
            }
        } else {
            validate = false;
        }
    }
    if (validate) {
        return res.json({
            status: 0,
            message: '验证码正确！'
        });
    }
    else {
        return res.json({
            status: -1,
            message: '验证码不正确！'
        });
    }
};

/**
 * @method 获取音频
 * @author lkj
 * @date   2015/12/4
 */
exports.getAudio = function (req, res) {
    var visualCaptcha;

    // Default file type is mp3, but we need to support ogg as well
    if (req.params.type !== 'ogg') {
        req.params.type = 'mp3';
    }

    // Initialize visualCaptcha
    visualCaptcha = require('visualcaptcha')(req.session, req.query.namespace);

    visualCaptcha.streamAudio(res, req.params.type);
};

/**
 * @method 刷新captcha选项
 * @author lkj
 * @date   2015/12/4
 */
exports.startRoute = function (req, res) {
    var visualCaptcha;
    visualCaptcha = require('visualcaptcha')(req.session, req.query.namespace);
    visualCaptcha.generate(req.params.howmany);
    res.status(200).send(visualCaptcha.getFrontendData());
};

/**
 * @method 获取图片文件
 * @author lkj
 * @date   2015/12/4
 */
exports.getImage = function (req, res) {
    var visualCaptcha,
        isRetina = false;

    // Initialize visualCaptcha
    visualCaptcha = require('visualcaptcha')(req.session, req.query.namespace);

    // Default is non-retina
    if (req.query.retina) {
        isRetina = true;
    }

    visualCaptcha.streamImage(req.params.index, res, isRetina);
};