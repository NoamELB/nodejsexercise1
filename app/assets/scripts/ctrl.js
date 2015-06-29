(function(){
	'use strict';

	angular
		.module('app.module')
		.controller('MainCtrl', MainCtrl);

		MainCtrl.$inject = ['$scope', 'GetCat'];

		function MainCtrl ($scope, GetCat) {
			var vm = this,
				lockpress = false;

			vm.imgUrl = 'http://i.imgur.com/MQHYB.jpg'
			vm.getImg = getImg;

			function getImg () {
				if (lockpress)
					return;
				lockpress = true;
				GetCat()
					.then(function(d) {
						vm.imgUrl = d;
						lockpress = false;
					})
					.catch(function(e) {console.log(e)});
			}
		}
})();