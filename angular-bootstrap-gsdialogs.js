"use strict";

angular.module("ui.gsdialogs", []).directive("gsdialogs", function() {
	return {
		scope      : {
			onReady   : "&",
			controller: "="
		},
		restrict: "E",
		replace : "true",
		template: "" +
			"<div>" +
				"<div class=\"modal fade\" id=\"gsdialogsWaitingDialog\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gsdialogsWaitingDialogLabel\" aria-hidden=\"true\">" +
					"<div class=\"modal-dialog modal-sm\">" +
						"<div class=\"modal-content\">" +
							"<div class=\"modal-header\">" +
								"<h4 class=\"modal-title\" id=\"gsdialogsWaitingDialogTitle\">" +
									"<span class=\"glyphicon glyphicon-time\"></span>&nbsp;" +
									"<span ng-bind=\"waitingTitle\"></span>" +
								"</h4>" +
							"</div>" +
							"<div class=\"modal-body\">" +
								"<span ng-bind=\"waitingText\"></span>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +

				"<div class=\"modal fade\" id=\"gsdialogsDeleteDialog\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gsdialogsDeleteDialogLabel\" aria-hidden=\"true\">" +
					"<div class=\"modal-dialog\">" +
						"<div class=\"modal-content\">" +
							"<div class=\"modal-header\">" +
								"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>" +
								"<h4 class=\"modal-title\" id=\"gsdialogsDeleteDialogTitle\">" +
									"<span class=\"glyphicon glyphicon-warning-sign\"></span>&nbsp;" +
									"<span ng-bind=\"deleteTitle\"></span>" +
								"</h4>" +
							"</div>" +
							"<div class=\"modal-body\">" +
								"<span ng-bind=\"deleteText\"></span>" +
							"</div>" +
							"<div class=\"modal-footer\">" +
								"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">" +
									"<span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel" +
								"</button>" +
								"<button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteCallback()\">" +
									"<span class=\"glyphicon glyphicon-remove\"></span> Delete" +
								"</button>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
			"</div>",
		link    : function(scope) {
			scope.ctrl = scope.controller || {};

			scope.ctrl.showWaiting = function(title, text) {
				if(title === undefined) {
					title = "Please Wait...";
				}
				scope.waitingTitle = title;
				if(text === undefined) {
					text = "Saving data, please wait...";
				}
				scope.waitingText = text;

				$("#gsdialogsWaitingDialog").modal("show");
			};

			scope.ctrl.hideWaiting = function() {
				$("#gsdialogsWaitingDialog").modal("hide");
			};


			scope.ctrl.showDelete = function(callback, title, text) {
				if(callback  instanceof Function) {
					scope.deleteCallback = callback;
				}

				if(title === undefined) {
					title = "Delete Item";
				}
				scope.deleteTitle = title;
				if(text === undefined) {
					text = "Really delete item?";
				}
				scope.deleteText = text;

				$("#gsdialogsDeleteDialog").modal("show");
			};

			scope.ctrl.hideDelete = function() {
				$("#gsdialogsDeleteDialog").modal("hide");
			};

			if(scope.onReady  instanceof Function) {
				scope.onReady();
			}
		}
	};
});
