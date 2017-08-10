/* factory service in angular*/
(function () {
    // app.factory("AppDataFactorySvc", function () {
    //   return {
    //     "name": "Contacts App",
    //     "author": "Naveen",
    //     "Company": "Prokarma",
    //     version: 1
    //   };
    // });



    //Instead of above, we can actually pass a predefined 
    //function instead of inline one

    function prepareAppConfig(AppNameSvc) {// this is dependency injection
        var value = {};
        value.name = AppNameSvc;// this is dependency injection
        value.author = "Naveen";
        value.buildDate = new Date().toTimeString();
        value.version = 1;
        return value;
    }

    app.factory("AppDataFactorySvc", prepareAppConfig);
})();
//above will also work in value service as well