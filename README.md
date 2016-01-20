angular-bootstrap-gsdialogs
==========================

A collection of common Bootstrap modal dialogs for AngularJS

Currently featuring a waiting and a delete dialog. More to follow...

Screenshot:

![Screenshot](/screenshot.png?raw=true "Screenshot")

### Installation via Bower:

```
$ bower install angular-bootstrap-gsdialogs --save
```

### Usage:

Add "ui.gsdialogs" to your modules list. Then you can use it like follows:

```
<gsdialogs
    on-ready="onReady()"
    controller="gsdialogCtrl">
</gsdialogs>
```

Use the following function to show / hide the modal dialogs:

```
// Show / Hide a waiting dialog with optional Title and Text
$scope.gsdialogCtrl.showWaiting();
$scope.gsdialogCtrl.showWaiting("Title", "Text");
$scope.gsdialogCtrl.showWaiting("Title", "Text", shownCallback, hiddenCallback);
$scope.gsdialogCtrl.hideWaiting();
$scope.gsdialogCtrl.hideWaiting(hiddenCallback);

// Show / Hide a delete dialog with button callbackFunction when confirmed and optional Title and Text
$scope.gsdialogCtrl.showDelete(callbackFunction);
$scope.gsdialogCtrl.showDelete(callbackFunction, "Title", "Text");
$scope.gsdialogCtrl.showDelete(callbackFunction, "Title", "Text", shownCallback, hiddenCallback);
$scope.gsdialogCtrl.hideDelete();
$scope.gsdialogCtrl.hideDelete(hiddenCallback);

// Show general confirm dialog with custom title, text and buttons
$scope.gsdialogCtrl.showConfirm({
    title  : "Title",
    text   : "Text",
    icon   : "",
    buttons: [
        {
            class: "btn-danger",
            icon: "glyphicon-remove",
            value: "FALSE",
            callback: callbackFunction
        },
        {
            class: "btn-success",
            icon: "glyphicon-ok",
            value: "TRUE",
            callback: callbackFunction
        }
    ]
}, shownCallback, hiddenCallback);
```

When using hide function with callback the hiddenCallback of the show function will not fire.

See index.html and app.js for examples and how it works.

### Testing:

Start web server e.g. via Python:
```
$ python -m SimpleHTTPServer 8000
```

Start Karma E2E tests (has to be installed globally before):
```
$ karma start
```

### License

Copyright (c) 2014 Sebastian Hammerl, Getslash GmbH

Licensed under the MIT License