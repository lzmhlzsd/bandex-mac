/**
 * Created by lkj on 2015/11/23.
 */
var loginCtrl = require('../controller/loginCtrl');

module.exports = function(app){

    app.get('/login',loginCtrl.loginPage);


    app.post( '/try', loginCtrl.trySubmission );
    app.get( '/audio', loginCtrl.getAudio );
    app.get( '/audio/:type', loginCtrl.getAudio );
    app.get( '/image/:index', loginCtrl.getImage );
    app.get( '/start/:howmany', loginCtrl.startRoute );

};