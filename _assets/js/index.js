var chartComponents = require('angular-chart-components');
var mapComponents   = require('map-components');



var app = angular.module('iknuth', [
  'ChartComponents', 'MapComponents', 'ui.router'
]);

/*@ngInject*/
app.controller('BarChartCtrl', function ($scope) {
  $scope.items = [
    {value: 28, label: 'IRVINGTON'},
    {value: 16, label: 'SELLWOOD-MORELAND IMPROVEMENT LEAGUE'},
    {value: 13, label: 'NORTHWEST DISTRICT'},
    {value: 12, label: 'HILLSDALE'},
    {value: 12, label: 'GOOSE HOLLOW'},
    {value: 11, label: 'SOUTHWEST HILLS'},
    {value: 11, label: 'MT. TABOR'},
    {value: 10, label: 'LAURELHURST'},
    {value: 10, label: 'OVERLOOK'},
    {value: 10, label: 'HOSFORD-ABERNETHY'},
    {value: 9,  label: 'WOODSTOCK'},
    {value: 8,  label: 'RICHMOND'}
  ];
});

/*@ngInject*/
app.controller('MapDemoCtrl', function ($scope) {
});

/*@ngInject*/
app.controller('PageCtrl', function ($scope, $state) {
    "use strict";
    $scope.params = $state.params;
    $scope.$on("$stateChangeSuccess", function () {
        $scope.parms = $state.params;
    });
});

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/?lat=42.95&lng=-122.1&zoom=12");
    //
    // Now set up the states
    $stateProvider
        .state('main', {
            url: "/?:zoom&:lat&:lng",
            template: require('../templates/state-of-the-page.html'),
            controller: 'PageCtrl'
        });
});
