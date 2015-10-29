'use strict';

/**
 * @ngdoc function
 * @name eComShopApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the eComShopApp
 */
angular.module('eComShopApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
    console.log(categories);
  });
