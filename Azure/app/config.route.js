(function () {
    'use strict';

    var app = angular.module('app');

    app.constant('routes', getRoutes());

    app.config(['$routeProvider', 'routes', routeConfigurator]);

    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.config);
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'starboard'
                }
            }, {
                url: '/bladePage',
                config: {
                    templateUrl: 'app/layout/blade/blade-container.html',
                    title: 'blades',
                    bladeSettings: {
                        title: 'Blade Spawner',
                        subtitle: 'Spawn Blades like a boss',
                        width: '',
                        contentUrl: 'app/layout/blade/blade.html'
                    }
                }
            },  {
                url: '/bladePage/blade',
                config: {
                    templateUrl: 'app/layout/blade/blade-container.html',
                    title: 'blades',
                    bladeSettings: {
                        title: 'Settings',
                        subtitle: '',
                        width: '',
                        contentUrl: 'app/layout/sidebar/settingsTemplate.html'
                    }
                }
            }
        ];
    }
})();