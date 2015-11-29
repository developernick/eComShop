'use strict';

/**
 * @ngdoc function
 * @name eComShopApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the eComShopApp
 */
angular.module('eComShopApp')
  .controller('StoreCtrl', ['$scope', function ($scope, category, products) {
    $scope.category = category;
    $scope.products = products;
  }]);
