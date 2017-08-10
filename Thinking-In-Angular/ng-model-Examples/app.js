var app =angular.module("ngModelExamples",[]);
app.controller("ExamplesCtrl",ExamplesCtrl);

function ExamplesCtrl($scope){

    $scope.textBoxChange= function(){
        console.log("textBoxChange function called");

    }


}