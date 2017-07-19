angular.module('cdc.controller', ['ionic', 'ngCordova', 'cdc.service'])
.controller('LoginCtrl', function($rootScope, $scope, $http, $ionicPopup, $location, ServiceData) {
		
	$scope.data  = {username:'', password:''};
	$scope.result= '';
	
	$scope.login = function(data) {
		
		if (data.username.trim() == '') $ionicPopup.alert({title: 'Exception', template: 'Username is required.'});
		else if (data.password.trim() == '') $ionicPopup.alert({title: 'Exception', template: 'Password is required.'});
		else {
			ServiceData.post('auth/login', {username:data.username, password:data.password}).then(function (result) {
				console.log(result);
				if (result.success) $location.path('map');
				else $ionicPopup.alert({title: 'Exception', template: result.msg});
			});
		}
	}
})
.controller('SignupCtrl', function($scope) {
	
   console.log('Signup loaded');
   
})
.controller('IndexCtrl', function($scope, $location, ServiceData) {
   $scope.logout	= function() {
		ServiceData.get('auth/logout').then(function (results) {
            $location.path('login');
		});
   }
})
.controller('MapCtrl', function($scope) {
	
   console.log('Map loaded');
   
})
.controller('SitesCtrl', function($scope) {
	
   console.log('Site loaded');
   
})
.controller('SurveillanceCtrl', function($scope) {
	
   console.log('SurveillanceCtrl loaded');
   
})
.controller('ReportingCtrl', function($scope) {
	
   console.log('ReportingCtrl loaded');
   
})
;