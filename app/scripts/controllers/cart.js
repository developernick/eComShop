'use strict';

/**
 * @ngdoc function
 * @name eComShopApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the eComShopApp
 */
angular.module('eComShopApp')
  .controller('CartCtrl', function ($scope, cart, moltin, $timeout) {
    $scope.cart = cart;
    $scope.addStatus = null;

    $scope.delCart = function() {
      $scope.addStatus = 'Removing...';
      // Insert(id, qty, modifiers/size, callback)
      moltin.Cart.Remove(cart.id, function() {
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
    console.log(cart);
  });
