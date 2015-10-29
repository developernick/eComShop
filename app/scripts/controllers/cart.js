'use strict';

/**
 * @ngdoc function
 * @name eComShopApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the eComShopApp
 */
angular.module('eComShopApp')
  .controller('CartCtrl', function ($scope, cart) {
    $scope.cart = cart;
    // $scope.addStatus = null;

    // $scope.delCart = function () {
    //   // $scope.addStatus = "Removing";
    //   moltin.Cart.Remove('<IDENTIFIER>', function() {
    // // Everything is awesome...
    //   }, function(error) {
    // // Something went wrong...
    //       });
    // };
    console.log(cart);
  });
