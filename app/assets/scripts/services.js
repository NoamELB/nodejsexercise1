(function(){
	'use strict';

	angular
		.module('app.module')
		.service('GetCat', GetCat);

		GetCat.$inject = ['$resource', '$q'];

		function GetCat ($resource, $q) {
			var url = $resource('data/cute');
			return function () {
				return new $q(function (resolve, reject) {
					url.get({}, function (d) {
						if (!d || !d.data || d.error)
							reject("error");
						else resolve(d.data);
					})
				});
			}
		}
})();