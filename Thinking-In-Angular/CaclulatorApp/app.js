var app = angular.module("calcApp",[]);
app.controller("CaclCtrl",CaclCtrl);

function CaclCtrl(){
    this.resultVaule=0;
    this.buttonClicked = function(button){
        this.op=button;
    }
    this.computeResult = function(){
        var number1 = parseFloat(this.input1);
        var number2 = parseFloat(this.input2);

        if(this.op==='+')
            this.resultValue= number1+number2;
        else if(this.op==='-')
            this.resultValue=number1-number2;
        else if(this.op==='*')
            this.resultValue=number1*number2;
        else if(this.op==='/')
            this.resultValue=number1/number2;

    }
    this.validate = function(){
        console.log(this.op);
        if(this.op==''|| this.op==undefined){
            alert('select an operaton');
            return;
        }
        if(isNaN(this.input1)||isNaN(this.input2)){
            alert('Invalid input');
            return ;
        }
    }
   
}

