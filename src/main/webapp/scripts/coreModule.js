define(function() {
	var coreModule = angular.module('coreModule', []);

	coreModule.controller('mainController', function($scope, $http) {
		$scope.user = {};
		$scope.error = false;

		$scope.submitRegister = function() {
			console.log("name: " + $scope.user.name + " email: " + $scope.user.email + " password: ********");

			$http.post('register/registerNewUser', $scope.user).success(function(response) {
				if (response == "true"){
					console.log("User: " + $scope.user.email + " was registered.");
				} else {
					console.log("User: " + $scope.user.email + " is already registered.");
				}
			}).error(function() {
				$scope.setError('Could not register user');
				console.log('Could not register user');
			});
			
		};
		
		$scope.submitCheckin = function() {
			console.log("name: " + $scope.user.name + " email: " + $scope.user.email + " password: ********");
			
			$http.post('register/checkInUser', $scope.user).success(function(response) {
				var res = parseInt(response); 
				switch(res){
				case 200: 
					console.log("User: " + $scope.user.email + " was checked-in.");
					break;
				case 302: 
					console.log("User: " + $scope.user.email + " was already checked-in.");
					break;
				case 401: 
					console.log("User: " + $scope.user.email + " submitted wrong password.");
					break;
				case 404: 
					console.log("User: " + $scope.user.email + " was not found");
					break;	
				default: 
					console.log("User: " + $scope.user.email + " failed registration.");
				}
			}).error(function() {
				$scope.setError('Could not check-in user');
				console.log('Could not check-in user');
			});
		};
		
		$scope.resetError = function() {
	        $scope.error = false;
	        $scope.errorMessage = '';
	    };

	    $scope.setError = function(message) {
	        $scope.error = true;
	        $scope.errorMessage = message;
	    };
	})
});