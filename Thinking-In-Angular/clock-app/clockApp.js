var module= angular.module("clockApp",[]);
        module.controller("TimeCtrl",TimeCtrl);
        function TimeCtrl($scope){
            var date = new Date();
            $scope.timeString=date.toTimeString();       
            $scope.updateTime = function(){
                var date = new Date();
                $scope.timeString=date.toTimeString();       

            }
            $scope.username="";
        }