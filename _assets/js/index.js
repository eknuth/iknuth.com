var chartComponents = require('angular-chart-components');
var mapComponents   = require('map-components');

var module = angular.module('iknuth', [
  'ChartComponents', 'MapComponents'
]);

/*@ngInject*/
module.controller('BarChartCtrl', function ($scope) {
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
    {value: 9, label: 'WOODSTOCK'},
    {value: 8, label: 'RICHMOND'}
  ];
});

/*@ngInject*/
module.controller('MapDemoCtrl', function ($scope) {
});

