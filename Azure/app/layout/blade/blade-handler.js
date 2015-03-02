
(function () {
    'use strict';

    var app = angular.module('app');
    app.service('bladeHandler', ['$rootScope', '$route', '$location', 'routes', bladeHandler]);

    function bladeHandler($rootScope, $route, $location, routes) {
        var blades = [];

        function addBlade(blade) {
            var index = getIndex(blade);
            if (index == -1) //Blade doesnt exist so add
                blades.push(blade);
            else {
                var childBladeCount = blades.length - index;
                blades.splice(index, childBladeCount, blade);
            }
        }

        function closeBlade(blade) {
            var index = blades.indexOf(blade);
            var childBladeCount = blades.length - index;
            blades.splice(index, childBladeCount);

            if (blades.length == 0) {
                $location.path("/");
            } else {
                $location.path(getPath(blades[blades.length - 1]));
            }
        }

        function getPath(blade) { //use contnturl maybe to check
            console.log(routes);
            for (var index = 0; index < routes.length; index++) {
                var bladeSettings = routes[index].config.bladeSettings;
                if (typeof bladeSettings != 'undefined') {
                    if (bladeSettings.$$hashKey == blade.$$hashKey) {
                        return routes[index].url;
                    }
                }
            }
        }

        function getIndex(blade) {
            for (var index = 0; index < blades.length; index++) {
                if (blades[index].contentUrl == blade.contentUrl) {
                    return index;
                }
            }
            return -1;
        }

        $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
            var blade = $route.current.bladeSettings;
            if (typeof blade != 'undefined')
                addBlade(blade);
        });

        return {
            blades: blades,
            addBlade: addBlade,
            closeBlade: closeBlade
        }
    }
})();