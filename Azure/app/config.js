(function () {
    'use strict';

    var app = angular.module('app');

    var themes = [
        {
            title: 'Black Ass',
            cssClass: 'black-n-white'
        }, {
            title: 'Blue Balls',
            cssClass: 'windows-blue'
        }, {
            title: 'Thug Mode Activate',
            cssClass: 'lucian-light'
        }
    ];

    var currentTheme = themes[1];

    var keyCodes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        del: 46
    };
    
    var hubTemplatesBaseUrl = 'app/layout/sidebar/';

    var sidebar = {
        menuItems: [
            {
                title: 'Home',
                iconClass: 'home-icon',
                iconSrc: 'assets/svg/home65.svg',
                url: "/"
            }, {
                title: 'Subway',
                iconClass: 'subway-icon',
                iconSrc: 'assets/svg/public11.svg',
                hubTemplateUrl: hubTemplatesBaseUrl + 'hubTemplate.html'
            }, {
                title: 'SkyAtlas',
                iconClass: 'cloud-icon',
                iconSrc: 'assets/svg/mobileme.svg',
                hubTemplateUrl: hubTemplatesBaseUrl + 'hubTemplate.html'
            }, {
                title: 'User Groups',
                iconClass: 'usergroup-icon',
                iconSrc: 'assets/svg/crowd.svg',
                hubTemplateUrl: hubTemplatesBaseUrl + 'homeHubTemplate.html'
            }, {
                title: 'Settings',
                iconClass: 'settings-icon',
                iconSrc: 'assets/svg/settings39.svg',
                hubTemplateUrl: hubTemplatesBaseUrl + 'settingsTemplate.html'
            }
        ]
    };
    
    var blades = [
        {
            title: 'Blade Tester',
            subtitle: 'Add or Remove Blades',
            contentUrl: 'app/layout/blade/blade.html'
        }
    ];

    var config = {
        doctitle: '',
        currentTheme: currentTheme,
        themes: themes,
        keyCodes: keyCodes,
        sidebar: sidebar,
        blades: blades
    };

    app.value('config', config);
})();