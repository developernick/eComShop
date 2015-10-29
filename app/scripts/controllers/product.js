'use strict';

/**
 * @ngdoc function
 * @name eComShopApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the eComShopApp
 */
angular.module('eComShopApp')
  .controller('ProductCtrl', function ($scope, product, moltin, $timeout) {
    $scope.product = product;
    $scope.addStatus = null;

    $scope.addCart = function() {
      $scope.addStatus = 'Adding to cart...';
      // Insert(id, qty, modifiers/size, callback)
      moltin.Cart.Insert(product.id, 1, null, function() {
        $scope.addStatus = 'Success!';
        moltin.Cart.Contents(function(items) {
          $rootScope.cart = items;
          $rootScope.$apply();
        });
        $scope.$apply();
        $timeout(function() {
          $scope.addStatus = null;
        }, 1000);
      });
    };
    $scope.delCart = function() {
      $scope.delStatus = 'Removing...';
      // Insert(id, qty, modifiers/size, callback)
      moltin.Cart.Remove('<IDENTIFIER>', function() {
        $scope.delStatus = 'Success!';
        moltin.Cart.Contents(function(items) {
          $rootScope.cart = items;
          $rootScope.$apply();
        });
        $scope.$apply();
        $timeout(function() {
          $scope.delStatus = null;
        }, 1000);
      });
    };
  });
