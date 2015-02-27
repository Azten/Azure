(function () {
    'use strict';

    var controllerId = 'bladeContainer';
    angular.module('app').controller(controllerId, ['config', bladeContainer]);

    function bladeContainer(config) {
        var vm = this;
        vm.closeBlade = closeBlade;
        vm.minimizeBlade = minimizeBlade;
        vm.restoreBlade = restoreBlade;
        vm.isMinimized = isMinimized
        
        vm.blades = config.blades;
        
        function minimizeBlade(blade) {
            blade.minimized = true;
        };
        
        function restoreBlade(blade) {
            blade.minimized = false;
        };
        
        function isMinimized(blade) {
            return (blade.minimized) ? "minimized-blade" : "";
        };
        
        function closeBlade(blade) {
            var index = vm.blades.indexOf(blade);
            var childBlades = vm.blades.length - index;
            vm.blades.splice(index, childBlades);
        }
    };
})();