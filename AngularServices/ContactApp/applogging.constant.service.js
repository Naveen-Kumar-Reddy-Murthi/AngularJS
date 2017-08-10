(function () {
  var app = angular.module("contactsApp");
  app.constant("LoggingSvc", function () {
    console.log("From LoggingSvc");
  }
  );
}
)();

/* Constant service in angular*/
// The above is angular constant service.
// Constant service mainly used for application configuration
// This is the only main difference between and value and constant service in angular.
// constant can have function as value

// for both value and constant services's value has to be inline and it has to be hardcoded
// to build dynamic value we can use factory service