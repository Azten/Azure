(function () {
    'use strict';

    var controllerId = 'shell';
    angular.module('app').controller(controllerId, ['config', shell]);

    function shell(config) {
        var vm = this;
        
        var theme;
        
        vm.getTheme = getTheme;
        
        function getTheme(){
            return config.currentTheme.cssClass;
        }
    };
})();