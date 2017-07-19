angular.module('cdc.service', ['cdc.constant'])
.service('Session', function (){
	this.create = function (sessionId, userId, userRole) {
		this.id = sessionId;
		this.userId = userId;
		this.userRole = userRole;
	};
	this.destroy = function () {
		this.id = null;
		this.userId = null;
		this.userRole = null;
	};
	return this;
})
.factory('AuthService', function ($http, CONST_APP, Session) {
	var authService = {};
	
	authService.login = function (credentials) {
		return $http
		.post(CONST_APP.URL+'auth/login', credentials)
		.then(function (res) {
			Session.create(res.data.id, res.data.user.id, res.data.user.role);
			return res.data.user;
		});
	};
	
	authService.isAuthenticated = function () {
		return !!Session.userId;
	};
	
	authService.isAuthorized = function (authorizedRoles) {
		if (!angular.isArray(authorizedRoles)) {
			authorizedRoles = [authorizedRoles];
		}
		return (authService.isAuthenticated() &&
			authorizedRoles.indexOf(Session.userRole) !== -1);
	};
})
.factory('ServiceData', ['$http', 'CONST_APP',
    function ($http, CONST_APP) { // This service connects to our REST API

        var serviceBase = CONST_APP.URL;

        var obj = {};
		
        obj.get = function (q) {
            return $http.get(serviceBase + q).then(function (results) {
                return results.data;
            });
        };
        obj.post = function (q, object) {
            return $http.post(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.delete = function (q) {
            return $http.delete(serviceBase + q).then(function (results) {
                return results.data;
            });
        };

        return obj;
}]);