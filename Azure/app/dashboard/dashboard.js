(function () {

    var controllerId = 'dashboard';
    var app = angular.module('app');
    app.controller(controllerId, ['$window', dashboard]);

    function dashboard($window) {
        $(".gridster ul").gridster({
            widget_margins: [10, 10],
            widget_base_dimensions: [140, 140]
        });
    }
})();