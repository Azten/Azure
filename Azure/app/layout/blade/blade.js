(function () {
    'use strict';

    var controllerId = 'blade';
    angular.module('app').controller(controllerId, ['config', blade]);

    function blade(config) {
        var vm = this;
        
        vm.title;
        vm.subtitle;
        vm.contentUrl;
        vm.width;
        
        vm.sub = function () {
            config.blades.push({
                title: vm.title,
                subtitle: vm.subtitle,
                contentUrl: vm.contentUrl,
                width: vm.width
            });
        };
    };
})();