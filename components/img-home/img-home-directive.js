angular.module('ePortfolioApp.imgHome', []).directive('eportfolioImgHomeDirective', function () {
    var directive = {
        restrict: 'E',
        scope: {
            source: '@source'
        },
        template: '<img class="flat" src="{{ source }}"/>'
    }
    return directive;
});