/**
 * Created by lukaijie on 16/3/28.
 */
angular.module('appIndex', [])
    .controller('indexCtrl', ['$scope', function ($scope) {
        $scope.flag = false;
        $scope.tasks = [{
            "task_name":"状态报警",
            "task_rule":"*/5 * * * *",
            "task_raddress":"http://192.168.0.95:8086/getStatusAlarm",
            "task_params":"无",
            "task_name":"状态报警",
            "task_model": 1,
            "task_name":[],
            "task_name":"状态报警",
            "task_name":"状态报警",
            "task_name":"状态报警"
        }];
        $scope.addTask = function(){
            $scope.flag = true;
        }
    }]);