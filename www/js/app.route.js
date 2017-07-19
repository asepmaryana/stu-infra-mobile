angular.module('cdc.route', ['ionic'])
.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/login');
	
	$stateProvider
    	.state('app', {
			abstract: true,
			url: '',
			templateUrl: 'templates/app.html'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'templates/login.html',
			controller: 'LoginCtrl'
        })
		.state('app.map', {
			url: '/map',
			parent: 'app',
			templateUrl: 'templates/map.html',
			controller: 'MapCtrl'
        })
		.state('app.sites', {
			url: '/sites',
			parent: 'app',
			templateUrl: 'templates/sites.html',
			controller: 'SitesCtrl'
        })
		.state('app.surveillance', {
			url: '/surveillance',
			parent: 'app',
			templateUrl: 'templates/surveillance.html',
			controller: 'SurveillanceCtrl'
        })
		.state('app.reporting', {
			url: '/reporting',
			parent: 'app',
			templateUrl: 'templates/reporting.html',
			controller: 'ReportingCtrl'
        })
		;
})
;