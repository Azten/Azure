(function () {
    'use strict';

    var controllerId = 'shell';
    angular.module('app').controller(controllerId, ['config', '$rootScope', '$route', 'bladeHandler', shell]);

    function shell(config, $rootScope, $route, bladeHandler) {
        var vm = this;
        
        var theme;
        
        vm.getTheme = getTheme;
        
        function getTheme(){
            return config.currentTheme.cssClass;
        }


    }
})();