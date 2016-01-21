angular.module('ePortfolioApp.cloud', []).directive('eportfolioCloudDirective', function () {
    var directive = {
        restrict: 'E',
        scope: {
            cloudColor: '@cloudColor',
            cloudContainerColor: '@cloudContainerColor',
            title: '@title',
            description: '@description',
            link: '@link'
        },
        template: '<div class="flat cloud-container" style="background-color: {{cloudContainerColor }}">'
                + '<span class="title"><a ui-sref="{{ link }}">{{ title }}</a></span>'
                + '<div class="cloud">'
                + '<span class="description"><a ui-sref="{{ link }}">{{ description }}</a></span>'
                + '<div class="circles">'
                + '<div class="circle1" style="background-color: {{cloudColor}}"></div>'
                + '<div class="circle2" style="background-color: {{cloudColor}}"></div>'
                + '</div>'
                + '<div class="cloudbottom" style="background-color: {{cloudColor}}"></div>'
                + '</div>'
                + '</div>'
    }
    return directive;
});