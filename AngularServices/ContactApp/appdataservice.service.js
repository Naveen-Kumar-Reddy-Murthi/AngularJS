
(function(){
/* Service service in angular*/
  // Inorder to pass constructor functions as value to service,
  // we can't use factory for this.
  // We can use Service service of angular which supports constructor
  // functions as value parameter. It executes these functions in 
  // constructor mode.
function AppConfig(AppNameSvc){
 // this is a constructor function
 // constructor function is used to create and return objects
 // but when calling new is prefixed to denote it's constructor function
   this.name=AppNameSvc;
   this.author="Naveen";
   this.buildDate=new Date().toTimeString();
   this.version = 1;
}
app.service("AppDataService",AppConfig);//AppConfig will be called as new AppConfig() by angular when using service service
})();

/* Factory Vs Service */
  /**
       When using factory, programmers have more controll over the function 
       which value to return. Meaning anything can be returned using normal functions
       with factory service

       But when using service service, value paramter should have constructor functions
       which return only this i.e., objects. 

       Hence if service value is premitive, we can go for factory service. If the service
       value is object, we can go for Service service of angular.
  **/