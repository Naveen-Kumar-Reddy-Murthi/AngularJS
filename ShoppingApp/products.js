(function () {
    var app = angular.module('store-products', []);
    // app.controller('GalleryController', function () {
    //   this.current = 0;
    //   this.setCurrent = function (value) {
    //     if (value === undefined)
    //       this.current = 0;
    //     else
    //       this.current = value;
    //   };


    // });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (value) {
                    if (value === undefined)
                        this.current = 0;
                    else
                        this.current = value;
                };
            },
            controllerAs: 'gallery'
        };

    });

    app.directive('productDescription', function () {
        return {
            restrict: 'E',//This html element level directive
            templateUrl: 'product-description.html'
        };

    });
    // app.controller('TabController', function(){
    //   this.tab = 1;

    //   this.setTab = function(newValue){
    //     this.tab = newValue;
    //   };

    //   this.isSet = function(tabName){
    //     return this.tab === tabName;
    //   };
    // });
    app.directive('productTabs', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function () {
                this.tab = 1;

                this.setTab = function (newValue) {
                    this.tab = newValue;
                };

                this.isSet = function (tabName) {
                    return this.tab === tabName;
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive('productSpecs', function () {
        return {
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });

    app.directive('productReviews', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-reviews.html'
        }
            ;
    });


})();