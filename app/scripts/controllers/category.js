'use strict';

/**
 * @ngdoc function
 * @name eComShopApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the eComShopApp
 */
angular.module('eComShopApp')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.category = category;
    $scope.products = products;
  });
