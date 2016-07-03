var mOverP = angular.module("mOverP",['ngRoute']);

mOverP.config(function($routeProvider) {
  $routeProvider
  .when('/landing',{
    templateUrl:'index/landing.html',
    css: '../styles/landing.css'
  })
  .when('/cart',{
    templateUrl:'index/cart.html',
    controller: 'cart',
    css: '../styles/cart.css'

  })
  .when('/admin',{
    templateUrl: 'index/admin.html',
    controller: 'admin',
    css:'../styles/admin.css'
  })
  .when('/store',{
    templateUrl:'index/store.html',
    controller: 'store',
    css: '../styles/store.css'
  })
  .when('/receipt',{
    templateUrl: 'index/receipt.html',
    controller: 'cart',
    css: '../styles/receipt.css'
  })
  .otherwise({
    redirectTo: '/landing'
  });
});
