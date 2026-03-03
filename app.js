var app = angular.module("pharmacyApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/dashboard.html",
    })
    .when("/medicines", {
      templateUrl: "views/medicines.html",
      controller: "MedicineCtrl",
    })
    .when("/customers", {
      templateUrl: "views/customers.html",
    })
    .when("/sales", {
      templateUrl: "views/sales.html",
      controller: "SalesCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
});

// A simple Main Controller for global logic
app.controller("MainCtrl", function ($scope) {
  console.log("Pharmacy App Main Controller Loaded");
});
