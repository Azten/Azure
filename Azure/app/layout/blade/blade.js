(function () {
    'use strict';

    var controllerId = 'blade';
    angular.module('app').controller(controllerId, ['bladeHandler', blade]);

    function blade(bladeHandler) {
        var vm = this;
        
        vm.title;
        vm.subtitle;
        vm.contentUrl;
        vm.width;
        
        vm.sub = function () {
            bladeHandler.addBlade({
                title: vm.title,
                subtitle: vm.subtitle,
                contentUrl: vm.contentUrl,
                width: vm.width
            });
        };
    };
})();