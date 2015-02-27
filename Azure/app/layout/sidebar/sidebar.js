(function () {
    'use strict';

    var controllerId = 'sidebar';
    angular.module('app').controller(controllerId, ['config', sidebar]);

    function sidebar(config) {
        var vm = this;

        var hubOpen = false;

        vm.menuItems = config.sidebar.menuItems;

        vm.currentMenuItem = vm.menuItems[0];

        vm.isActive = isActive;

        vm.hubVisibility = hubVisibility;

        vm.closeHub = closeHub;

        vm.iconOff = iconOff;

        vm.getColour = getColour;

        vm.onMenuItemClick = function (menuItem) {
            if (hubOpen) {
                if (menuItem == vm.currentMenuItem) {
                    hubOpen = false;
                } else {
                    $(".sidebar-transition-panel").addClass("transition-panel-hidden").delay(120).queue(function () {
                        $(".sidebar-transition-panel").removeClass("transition-panel-hidden").dequeue();
                    });
                }
            } else {
                hubOpen = true;
            }

            vm.currentMenuItem = menuItem;
        };

        function closeHub() {
            hubOpen = false;
        }

        function isActive(menuItem) {
            return (menuItem == vm.currentMenuItem && hubOpen) ? 'fill-primary' : '';
        }

        function hubVisibility() {
            return (hubOpen) ? 'sidebar-expandable-visible' : 'sidebar-expandable-hidden';
        }

        function iconOff() {
            return (true) ? 'default-fill' : '';
        }

        function getColour(menuItem) {
            return (menuItem == vm.currentMenuItem && hubOpen) ? menuItem.iconClass : ''
        }
    }
})();