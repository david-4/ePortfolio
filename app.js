(function () {
    'use strict';

    var ePortfolioApp = angular.module('ePortfolioApp', [
        'ui.router',
        'ngAnimate',
        'ngResource',
        'ui.bootstrap',
        'ui.keypress',
        'smart-table',
        'ngCookies',

        'ePortfolioApp.cloud',
        'ePortfolioApp.imgHome',
        'ePortfolioApp.gallery',
        'ePortfolioApp.flip.container'
    ])

    ePortfolioApp.config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/overview');

                $stateProvider
                    .state('app', {
                        abstract: true,
                        template: '<ui-view/>'
                    })
                    .state('app.overview', {
                        url: '/overview',
                        templateUrl: 'components/overview/overview.html'
                    }).state('app.about', {
                        url: '/about',
                        templateUrl: 'components/about/about.html'
                    }).state('app.portfolio', {
                        url: '/gallery',
                        templateUrl: 'components/gallery/gallery.html',
                        controller: 'GalleryController'
                    });

            }
        ]);
})();