angular.module("moreDirectivesApp",[])
.controller("moreDirectivesCtrl",moreDirectivesCtrl);

function moreDirectivesCtrl(){
    // this.myList=[1,2,3,4,5];

    this.myList=[
                 {"Name":"Foo", "Age":"20"},
                 {"Name":"Boo", "Age":"21"},
                 {"Name":"Koo", "Age":"22"},
                 {"Name":"Too", "Age":"23"},
                ];

}