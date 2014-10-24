"use strict";

angular.module("angular-bootstrap-gsdialogs", ["ui.gsdialogs"]).controller("index", function($scope, $timeout) {
	$scope.gsdialogCtrl = {};
	$scope.onReady = function() {
		$timeout($scope.gsdialogCtrl.showWaiting, 0);
		$timeout($scope.gsdialogCtrl.hideWaiting, 1000);
		$timeout(function() {$scope.gsdialogCtrl.showWaiting("Title", "Text");}, 2000);
		$timeout($scope.gsdialogCtrl.hideWaiting, 3000);

		$timeout($scope.gsdialogCtrl.showDelete, 4000);
		$timeout($scope.gsdialogCtrl.hideDelete, 5000);
		$timeout(function() {$scope.gsdialogCtrl.showDelete(null, "Title", "Text");}, 6000);
		$timeout($scope.gsdialogCtrl.hideDelete, 7000);

		$timeout(function() {
			$scope.gsdialogCtrl.showDelete(function() {
				console.log("DELETE!");
				$scope.gsdialogCtrl.hideDelete();
			});
		}, 8000);
	};
});