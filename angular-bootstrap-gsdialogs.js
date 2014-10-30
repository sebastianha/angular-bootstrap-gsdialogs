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

				"<div class=\"modal fade\" id=\"gsdialogsConfirmDialog\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gsdialogsConfirmDialogLabel\" aria-hidden=\"true\">" +
					"<div class=\"modal-dialog\">" +
						"<div class=\"modal-content\">" +
							"<div class=\"modal-header\">" +
								"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>" +
								"<h4 class=\"modal-title\" id=\"gsdialogsConfirmDialogTitle\">" +
									"<span class=\"glyphicon\" ng-class=\"confirmIcon\"></span>&nbsp;" +
									"<span ng-bind=\"confirmTitle\"></span>" +
								"</h4>" +
							"</div>" +
							"<div class=\"modal-body\">" +
								"<span ng-bind=\"confirmText\"></span>" +
							"</div>" +
							"<div class=\"modal-footer\">" +
								"<button ng-if=\"cancelButton === true\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">" +
									"<span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel" +
								"</button>" +
								"<button ng-repeat=\"button in confirmButtons\" type=\"button\" class=\"btn\" ng-class=\"button.class\" ng-click=\"button.callback()\">" +
									"<span class=\"glyphicon\" ng-class=\"button.icon\"></span> " +
									"<span ng-bind=\"button.value\"></span>" +
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


			scope.ctrl.showConfirm = function(attr) {
				if(attr === undefined) {
					attr = {};
				}

				if(attr === undefined || attr.title === undefined) {
					attr.title = "Confirm";
				}
				scope.confirmTitle = attr.title;

				if(attr === undefined || attr.text === undefined) {
					attr.text = "Really do it?";
				}
				scope.confirmText = attr.text;

				if(attr === undefined || attr.icon === undefined) {
					attr.icon = "glyphicon-warning-sign";
				}
				scope.confirmIcon = attr.icon;

				if(attr === undefined || attr.cancelBtn === undefined) {
					attr.cancelBtn = true;
				}
				scope.cancelButton = attr.cancelBtn;

				if(attr === undefined || attr.buttons === undefined) {
					attr.buttons = [];
				}
				scope.confirmButtons = attr.buttons;

				$("#gsdialogsConfirmDialog").modal("show");
			};

			scope.ctrl.hideConfirm = function() {
				$("#gsdialogsConfirmDialog").modal("hide");
			};


			scope.ctrl.showDelete = function(callback, title, text) {
				if(title === undefined) {
					title = "Delete Item";
				}
				if(text === undefined) {
					text = "Really delete item?";
				}

				scope.ctrl.showConfirm({
					title  : title,
					text   : text,
					buttons: [
						{
							class: "btn-default",
							icon: "glyphicon-ban-circle",
							value: "Cancel",
							callback: scope.ctrl.hideConfirm
						},
						{
							class: "btn-danger",
							icon: "glyphicon-remove",
							value: "Delete",
							callback: callback
						}
					]
				});
			};

			scope.ctrl.hideDelete = function() {
				scope.ctrl.hideConfirm();
			};


			if(scope.onReady  instanceof Function) {
				scope.onReady();
			}
		}
	};
});
