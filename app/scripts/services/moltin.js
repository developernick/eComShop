angular.module('eComShopApp.moltin', [])
.factory('MoltinAuth', function($q) {
	var deferred = $q.defer();
	var moltin = new Moltin({publicId: 'RBidIhDC0dlHzJaIP0LYEzGKI4mhNKBILpCxlWxF'});
	moltin.Authenticate(function() {
			deferred.resolve(moltin);
	});

	return deferred.promise;
});
