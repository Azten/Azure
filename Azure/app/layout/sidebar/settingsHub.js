(function () {
    'use strict';

    var controllerId = 'settingsHub';
    angular.module('app').controller(controllerId, ['config', settingsHub]);

    function settingsHub(config) {
        var vm = this;
        
        var currentTheme = config.currentTheme;
        vm.getTitle = function () {
            return currentTheme.title;
        };
        
        vm.themes = config.themes;
        
        vm.setTheme = setTheme;
        
        vm.previewTheme = previewTheme;
        
        vm.isSelected = isSelected;
        
        vm.restoreTheme = restoreTheme;
        
        function setTheme(theme) {
            config.currentTheme = theme;
            currentTheme = theme;
        };
        
        function previewTheme(theme) {
            config.currentTheme = theme;
        };
        
        function restoreTheme() {
            config.currentTheme = currentTheme;
        };
        
        function isSelected(theme) {
            return (config.currentTheme == theme) ? 'selected' : '';
        }
    };
})();