(function () {
    'use strict';

    var controllerId = 'bladeContainer';
    angular.module('app').controller(controllerId, ['bladeHandler', bladeContainer]);

    function bladeContainer(bladeHandler) {
        var vm = this;
        vm.closeBlade = closeBlade;
        vm.minimizeBlade = minimizeBlade;
        vm.restoreBlade = restoreBlade;
        vm.isMinimized = isMinimized;
        vm.getWidth = getWidth;
        
        vm.blades = bladeHandler.blades;
        
        function minimizeBlade(blade) {
            blade.minimized = true;
        }
        
        function restoreBlade(blade) {
            blade.minimized = false;
        }
        
        function isMinimized(blade) {
            return (blade.minimized) ? "minimized-blade" : "";
        }

        function closeBlade(blade) {
            bladeHandler.closeBlade(blade);
        }
        
        function getWidth(blade) {
            return (!blade.minimized) ? blade.width : '';
        }
    }
})();