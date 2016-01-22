angular.module('ePortfolioApp.gallery', []).controller('GalleryController',
    ['$scope',
        function ($scope) {
            $scope.backgroundBack = "-moz-linear-gradient(top,  #feffff 0%, #ddf1f9 35%, #a0d8ef 100%); " +
                                    "background: -webkit-linear-gradient(top,  #feffff 0%,#ddf1f9 35%,#a0d8ef 100%);" +
                                    "background: linear-gradient(to bottom,  #feffff 0%,#ddf1f9 35%,#a0d8ef 100%);";
            $scope.backgroundFront = "-moz-linear-gradient(top, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);" +
                                    "background: -webkit-linear-gradient(top, #9dd53a 0%,#a1d54f 50%,#80c217 51%,#7cbc0a 100%);" +
                                    "background: linear-gradient(to bottom, #9dd53a 0%,#a1d54f 50%,#80c217 51%,#7cbc0a 100%);"
        }]);
