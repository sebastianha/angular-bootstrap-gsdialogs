"use strict";

angular.module("angular-bootstrap-gsdialogs", ["ui.bootstrap", "ui.gsdialogs"]).controller("index", function($scope, $timeout) {
	$scope.gsdialogCtrl = {};
	$scope.onReady = function() {

		$timeout(function() {
			$scope.gsdialogCtrl.showDelete(function() {
				console.log("click");
			}, null, null, function() {
				console.log("shown");
			}, function() {
				console.log("hidden");
			});
		}, 0);

		$timeout(function() {
			$scope.gsdialogCtrl.hideDelete(function() {
				console.log("hidden2");
			});
		}, 2000);

		$timeout(function() {
			$scope.gsdialogCtrl.showDelete(function() {
				console.log("click");
			}, null, null, function() {
				console.log("shown");
			}, function() {
				console.log("hidden");
			});
		}, 3000);

		//$timeout($scope.gsdialogCtrl.showWaiting, 0);
		//$timeout($scope.gsdialogCtrl.hideWaiting, 1000);
		//$timeout(function() {$scope.gsdialogCtrl.showWaiting("Title", "Text");}, 2000);
		//$timeout($scope.gsdialogCtrl.hideWaiting, 3000);
		//
		//$timeout($scope.gsdialogCtrl.showDelete, 4000);
		//$timeout($scope.gsdialogCtrl.hideDelete, 5000);
		//$timeout(function() {$scope.gsdialogCtrl.showDelete(null, "Title", "Text");}, 6000);
		//$timeout($scope.gsdialogCtrl.hideDelete, 7000);
		//
		//$timeout(function() {
		//	$scope.gsdialogCtrl.showDelete(function() {
		//		console.log("DELETE!");
		//		$scope.gsdialogCtrl.hideDelete();
		//	});
		//}, 8000);

//		$scope.gsdialogCtrl.showConfirm({
//			title    : "Title",
//			text     : "Text",
//			icon     : "",
//			cancelBtn: false,
//			buttons  : [
//				{
//					class: "btn-danger",
//					icon: "glyphicon-remove",
//					value: "FALSE",
//					callback: function() {
//						console.log("FALSE");
//					}
//				},
//				{
//					class: "btn-success",
//					icon: "glyphicon-ok",
//					value: "TRUE",
//					callback: function() {
//						console.log("TRUE");
//					}
//				}
//			]
//		});

	};
});