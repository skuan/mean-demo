function meetupsController($scope){
	

	$scope.meetups = [
		{ name: "MEAN LA Developers"},
		{ name: "Some other meetups"}
	]

	$scope.createMeetup = function () {
		$scope.meetups.push({ name: $scope.meetupName});
		$scope.meetupName = '';
	}

}