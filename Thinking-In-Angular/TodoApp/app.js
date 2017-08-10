angular.module("ToDoApp",[])
.controller("ToDoController",ToDoController);

function ToDoController(){
    this.editMode =false;
    this.todos=[
                 "Learn AngularJS1",
                 "Practice Excercises",
                 "Develop Applications",
                 "Test 123"
                ];

    this.addNewTodo = function (){
       this.todos.push(this.newTodo);
       this.newTodo="";
    }
    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    }
    this.deleteToDo = function(index){
        this.todos.splice(index,1);

    }

}