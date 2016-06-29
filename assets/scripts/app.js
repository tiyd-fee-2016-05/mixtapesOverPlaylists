var mOverP = angular.module("mOverP",['ngRoute']);

mOverP.config(function($routeProvider) {
  $routeProvider
  .when('/landing',{
    templateUrl:'index/landing.html'
  })
  .when('/cart',{
    templateUrl:'index/cart.html'
  })
  .when('/admin',{
    templateUrl: 'index/admin.html'
  })
  .when('/store',{
    templateUrl:'index/store.html'
  })
  .when('/receipt',{
    templateUrl: 'index/receipt.html'
  })
  .otherwise({
    redirectTo: '/landing'
  });
});
