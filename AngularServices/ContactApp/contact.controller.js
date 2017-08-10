(function () {
  var app = angular.module("contactsApp");
  app.controller("contactsController", contactsController);

  function contactsController(ContactDataSvc) {
    var self = this;
    self.editMode = false;
    self.addMOde = false;
    ContactDataSvc.getContacts()
      .then(function (data) {
        self.contacts = data;
      });

    this.contacts = ContactDataSvc.contacts;
    // this.Selectedcontact = this.contacts[0];

    this.selectContact = function (index) {

      this.Selectedcontact = this.contacts[index];
      self.successMessage = undefined;
      self.errorMessage = undefined;

    }
    this.toggleEditMode = function () {
      this.editMode = !this.editMode;
    }
    this.saveUser = function () {
      this.toggleEditMode();
      var userData = this.Selectedcontact;
      if (self.addMOde) {
        ContactDataSvc.createUser(userData)
          .then(function () {
            self.successMessage = "Data updated!";
          },
          function () { self.errorMessage = "There was an error. Please try again!" });
          self.addMOde = false;
      }
      else {
        ContactDataSvc.saveUser(userData)
          .then(function () {
            self.successMessage = "Data updated!";
          },
          function () { self.errorMessage = "There was an error. Please try again!" })
      }
    }

    this.addContact = function () {
      self.addMOde = true;
      this.selectContact = {
        "id": new Date().toTimeString()
      };
      this.editMode = true;
    }
  }
})();