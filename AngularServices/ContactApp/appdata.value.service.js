/* value service in angular*/
// This is angular's value  service
// If this service to be used in multiple controllers,
// it has to be injected in each controller in which it
// is going to be used like in the controller functions

(function(){
    var app = angular.module("contactsApp");
app.value("AppDataSvc",
  {
    "name": "Contacts App",
    "author": "Naveen",
    "Company": "Prokarma",
    versoin: 1
  });
})();

