'use strict';

/**
 * @ngdoc overview
 * @name eComShopApp
 * @description
 * # eComShopApp
 *
 * Main module of the application.
 */
angular
  .module('eComShopApp', [
    'eComShopApp.moltin',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      // -----------------------Store-----------------------
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        resolve: {
          products: function($q, $route,  MoltinAuth) {
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
               moltin.Product.List({category: $route.current.params.id}, function(products){
                deferred.resolve(products);
              });
            })
            return deferred.promise;
          }
        },
        controllerAs: 'store'
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        resolve: {
          category: function($q, $route,  MoltinAuth) {
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Category.Get($route.current.params.id, function(category){
                deferred.resolve(category);
              });
            })
            return deferred.promise;
          },
          products: function($q, $route,  MoltinAuth) {
            var deferred = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Product.List({category: $route.current.params.id}, function(products){
                deferred.resolve(products);
              });
            })
            return deferred.promise;
          }
        },
        controllerAs: 'category'
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        resolve: {
          product: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Product.Get($route.current.params.id, function(product) {
                deferred.resolve(product);
              });
            });
            return deferred.promise;
          },
          moltin: function(MoltinAuth) {
            return MoltinAuth;
          }
        }
      })
       .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        resolve: {
          cart: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Cart.Contents(function(cart) {
                deferred.resolve(cart);
              });
            });
            return deferred.promise;
          },
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
