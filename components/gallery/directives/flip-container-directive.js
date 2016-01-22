angular.module('ePortfolioApp.flip.container', []).directive('eportfolioFlipContainerDirective', function () {
    var directive = {
        restrict: 'E',
        scope: {
            backgroundFront: '@backgroundFront',
            backgroundBack: '@backgroundBack',
            contentFront: '@contentFront',
            contentBack: '@contentBack'
        },
        templateUrl: 'components/gallery/directives/flip-container-directive.html',
        controller: 'FlipContainerDirectiveController'
    }
    return directive;
}).controller('FlipContainerDirectiveController',
    ['$scope', '$sce',
        function ($scope, $sce) {

            $scope.$watch('contentFront', function (value) {
                $scope.frontHtml = $sce.trustAsHtml(value);
            });

            $scope.$watch('contentBack', function (value) {
                $scope.backHtml = $sce.trustAsHtml(value);
            });

        }]);