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


			scope.ctrl.showWaiting = function(title, text, shownCallback, hiddenCallback) {
				if(title === undefined || title === null) {
					title = "Please Wait...";
				}
				scope.waitingTitle = title;
				if(text === undefined || text === null) {
					text = "Saving data, please wait...";
				}
				scope.waitingText = text;

				$("#gsdialogsWaitingDialog").off("shown.bs.modal");
				if(typeof shownCallback === "function") {
					$("#gsdialogsWaitingDialog").on("shown.bs.modal", function (e) {
						$("#gsdialogsWaitingDialog").off("shown.bs.modal");
						shownCallback(e);
					});
				}

				$("#gsdialogsWaitingDialog").off("hidden.bs.modal");
				if(typeof hiddenCallback === "function") {
					$("#gsdialogsWaitingDialog").on("hidden.bs.modal", function (e) {
						$("#gsdialogsWaitingDialog").off("hidden.bs.modal");
						hiddenCallback(e);
					});
				}

				$("#gsdialogsWaitingDialog").modal("show");
			};

			scope.ctrl.hideWaiting = function(hiddenCallback) {
				if(typeof hiddenCallback === "function") {
					$("#gsdialogsWaitingDialog").off("hidden.bs.modal");
					$("#gsdialogsWaitingDialog").on("hidden.bs.modal", function (e) {
						$("#gsdialogsWaitingDialog").off("hidden.bs.modal");
						hiddenCallback(e);
					});
				}

				$("#gsdialogsWaitingDialog").modal("hide");
			};


			scope.ctrl.showConfirm = function(attr, shownCallback, hiddenCallback) {
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

				$("#gsdialogsConfirmDialog").off("shown.bs.modal");
				if(typeof shownCallback === "function") {
					$("#gsdialogsConfirmDialog").on("shown.bs.modal", function (e) {
						$("#gsdialogsConfirmDialog").off("shown.bs.modal");
						shownCallback(e);
					});
				}

				$("#gsdialogsConfirmDialog").off("hidden.bs.modal");
				if(typeof hiddenCallback === "function") {
					$("#gsdialogsConfirmDialog").on("hidden.bs.modal", function (e) {
						$("#gsdialogsConfirmDialog").off("hidden.bs.modal");
						hiddenCallback(e);
					});
				}

				$("#gsdialogsConfirmDialog").modal("show");
			};

			scope.ctrl.hideConfirm = function(hiddenCallback) {
				if(typeof hiddenCallback === "function") {
					$("#gsdialogsConfirmDialog").off("hidden.bs.modal");
					$("#gsdialogsConfirmDialog").on("hidden.bs.modal", function (e) {
						$("#gsdialogsConfirmDialog").off("hidden.bs.modal");
						hiddenCallback(e);
					});
				}

				$("#gsdialogsConfirmDialog").modal("hide");
			};


			scope.ctrl.showDelete = function(callback, title, text, shownCallback, hiddenCallback) {
				if(title === undefined || title === null) {
					title = "Delete Item";
				}
				if(text === undefined || text === null) {
					text = "Really delete item?";
				}

				scope.ctrl.showConfirm({
					title  : title,
					text   : text,
					buttons: [
						{
							class: "btn-danger",
							icon: "glyphicon-remove",
							value: "Delete",
							callback: callback
						}
					]
				}, shownCallback, hiddenCallback);
			};

			scope.ctrl.hideDelete = function(hiddenCallback) {
				scope.ctrl.hideConfirm(hiddenCallback);
			};


			if(scope.onReady  instanceof Function) {
				scope.onReady();
			}
		}
	};
});
