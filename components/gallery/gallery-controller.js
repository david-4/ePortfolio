angular.module('ePortfolioApp.gallery', []).controller('GalleryController',
    ['$scope',
        function ($scope) {
            $scope.backgroundBack = "-moz-linear-gradient(top,  #feffff 0%, #ddf1f9 35%, #a0d8ef 100%); " +
                                    "background: -webkit-linear-gradient(top,  #feffff 0%,#ddf1f9 35%,#a0d8ef 100%);" +
                                    "background: linear-gradient(to bottom,  #feffff 0%,#ddf1f9 35%,#a0d8ef 100%);";
        }]);
