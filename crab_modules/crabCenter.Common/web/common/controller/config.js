/**
 * Created by lukaijie on 16/3/28.
 */
angular.module('appConfig', [])
    .controller('configCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.save = function () {
            var params = {
                "weixin": "123456789"
            }
            $http.post('/saveConfig', JSON.stringify(params))
                .success(function (data) {
                    if (data.status) {

                    }
                });
        }
    }]);