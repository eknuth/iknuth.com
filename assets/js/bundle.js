(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/tiatia/projects/iknuth.com/_assets/js/index.js":[function(require,module,exports){
var chartComponents = require('angular-chart-components');

var module = angular.module('iknuth', [
  'ChartComponents.barchart'
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


},{"angular-chart-components":"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/index.js"}],"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/spec/fixtures/barchart-data.json":[function(require,module,exports){
module.exports=module.exports=[
  {label: 'Happy', value: 10},
  {label: 'Beta', value: 34},
  {label: 'Band', value: 22},
  {label: 'Smurf', value: 50}
]

},{}],"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/barchart.js":[function(require,module,exports){
var module = angular.module('ChartComponents.barchart', []);

/*@ngInject*/
module.directive('barchart', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./templates/barchart.html'),
    scope: {
      'data': '='
    },
    link: function(scope, element, attrs) {
      scope.max = 0;

      scope.$watchCollection('data', function (newData) {
        if (newData) {
          newData.forEach(function (item) {
            scope.max = Math.max(scope.max, item.value);
          });
        } else {
          scope.max = 0;
        }
      });
    }
  };
});

},{"./templates/barchart.html":"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/templates/barchart.html"}],"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/index.js":[function(require,module,exports){
require('./barchart');

var module = angular.module('ChartComponents', [
  'ChartComponents.barchart'
]);

/*@ngInject*/
module.controller('DemoCtrl', function ($scope) {
  $scope.items = require('../spec/fixtures/barchart-data.json');
});

},{"../spec/fixtures/barchart-data.json":"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/spec/fixtures/barchart-data.json","./barchart":"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/barchart.js"}],"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/templates/barchart.html":[function(require,module,exports){
module.exports = '<div>\n  <div class="barchart-component">\n    <div class="barchart-items" style="width: {{(item.value/max)*100}}%;" ng-repeat="item in data|orderBy:\'-value\'">\n      <div class="label-text">{{item.label}}</div>\n      <div class="value">{{item.value}}</div>\n    </div>\n\n  </div>\n\n  <style>\n\n    .barchart-component .barchart-items {\n      background-color: steelblue;\n      text-align: right;\n      padding: 10px 10px;\n      margin: 1px;\n      color: white;\n\n      display: flex;\n      flex-flow: row wrap;\n\n    }\n      .barchart-component .barchart-items > div {\n        flex: 1 auto;\n      }\n      .barchart-component .barchart-items .label-text {\n          text-align: left;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n      }\n      .barchart-component .barchart-items .count {\n          text-align: right;\n      }\n\n    .barchart-component {\n      font-size: 16px;\n      width: 100%;\n    }\n  </style>\n</div>\n';
},{}]},{},["/Users/tiatia/projects/iknuth.com/_assets/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfYXNzZXRzL2pzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2FuZ3VsYXItY2hhcnQtY29tcG9uZW50cy9zcGVjL2ZpeHR1cmVzL2JhcmNoYXJ0LWRhdGEuanNvbiIsIm5vZGVfbW9kdWxlcy9hbmd1bGFyLWNoYXJ0LWNvbXBvbmVudHMvc3JjL2JhcmNoYXJ0LmpzIiwibm9kZV9tb2R1bGVzL2FuZ3VsYXItY2hhcnQtY29tcG9uZW50cy9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYW5ndWxhci1jaGFydC1jb21wb25lbnRzL3NyYy90ZW1wbGF0ZXMvYmFyY2hhcnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY2hhcnRDb21wb25lbnRzID0gcmVxdWlyZSgnYW5ndWxhci1jaGFydC1jb21wb25lbnRzJyk7XG5cbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnaWtudXRoJywgW1xuICAnQ2hhcnRDb21wb25lbnRzLmJhcmNoYXJ0J1xuXSk7XG5cbi8qQG5nSW5qZWN0Ki9cbm1vZHVsZS5jb250cm9sbGVyKCdCYXJDaGFydEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICRzY29wZS5pdGVtcyA9IFtcbiAgICB7dmFsdWU6IDI4LCBsYWJlbDogJ0lSVklOR1RPTid9LFxuICAgIHt2YWx1ZTogMTYsIGxhYmVsOiAnU0VMTFdPT0QtTU9SRUxBTkQgSU1QUk9WRU1FTlQgTEVBR1VFJ30sXG4gICAge3ZhbHVlOiAxMywgbGFiZWw6ICdOT1JUSFdFU1QgRElTVFJJQ1QnfSxcbiAgICB7dmFsdWU6IDEyLCBsYWJlbDogJ0hJTExTREFMRSd9LFxuICAgIHt2YWx1ZTogMTIsIGxhYmVsOiAnR09PU0UgSE9MTE9XJ30sXG4gICAge3ZhbHVlOiAxMSwgbGFiZWw6ICdTT1VUSFdFU1QgSElMTFMnfSxcbiAgICB7dmFsdWU6IDExLCBsYWJlbDogJ01ULiBUQUJPUid9LFxuICAgIHt2YWx1ZTogMTAsIGxhYmVsOiAnTEFVUkVMSFVSU1QnfSxcbiAgICB7dmFsdWU6IDEwLCBsYWJlbDogJ09WRVJMT09LJ30sXG4gICAge3ZhbHVlOiAxMCwgbGFiZWw6ICdIT1NGT1JELUFCRVJORVRIWSd9LFxuICAgIHt2YWx1ZTogOSwgbGFiZWw6ICdXT09EU1RPQ0snfSxcbiAgICB7dmFsdWU6IDgsIGxhYmVsOiAnUklDSE1PTkQnfVxuICBdO1xuXG59KTtcblxuIiwibW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9W1xuICB7bGFiZWw6ICdIYXBweScsIHZhbHVlOiAxMH0sXG4gIHtsYWJlbDogJ0JldGEnLCB2YWx1ZTogMzR9LFxuICB7bGFiZWw6ICdCYW5kJywgdmFsdWU6IDIyfSxcbiAge2xhYmVsOiAnU211cmYnLCB2YWx1ZTogNTB9XG5dXG4iLCJ2YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ0NoYXJ0Q29tcG9uZW50cy5iYXJjaGFydCcsIFtdKTtcblxuLypAbmdJbmplY3QqL1xubW9kdWxlLmRpcmVjdGl2ZSgnYmFyY2hhcnQnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2JhcmNoYXJ0Lmh0bWwnKSxcbiAgICBzY29wZToge1xuICAgICAgJ2RhdGEnOiAnPSdcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgc2NvcGUubWF4ID0gMDtcblxuICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbignZGF0YScsIGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gICAgICAgIGlmIChuZXdEYXRhKSB7XG4gICAgICAgICAgbmV3RGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBzY29wZS5tYXggPSBNYXRoLm1heChzY29wZS5tYXgsIGl0ZW0udmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjb3BlLm1heCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuIiwicmVxdWlyZSgnLi9iYXJjaGFydCcpO1xuXG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ0NoYXJ0Q29tcG9uZW50cycsIFtcbiAgJ0NoYXJ0Q29tcG9uZW50cy5iYXJjaGFydCdcbl0pO1xuXG4vKkBuZ0luamVjdCovXG5tb2R1bGUuY29udHJvbGxlcignRGVtb0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICRzY29wZS5pdGVtcyA9IHJlcXVpcmUoJy4uL3NwZWMvZml4dHVyZXMvYmFyY2hhcnQtZGF0YS5qc29uJyk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gJzxkaXY+XFxuICA8ZGl2IGNsYXNzPVwiYmFyY2hhcnQtY29tcG9uZW50XCI+XFxuICAgIDxkaXYgY2xhc3M9XCJiYXJjaGFydC1pdGVtc1wiIHN0eWxlPVwid2lkdGg6IHt7KGl0ZW0udmFsdWUvbWF4KSoxMDB9fSU7XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBkYXRhfG9yZGVyQnk6XFwnLXZhbHVlXFwnXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLXRleHRcIj57e2l0ZW0ubGFiZWx9fTwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPnt7aXRlbS52YWx1ZX19PC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuXFxuICA8c3R5bGU+XFxuXFxuICAgIC5iYXJjaGFydC1jb21wb25lbnQgLmJhcmNoYXJ0LWl0ZW1zIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICAgIG1hcmdpbjogMXB4O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuXFxuICAgIH1cXG4gICAgICAuYmFyY2hhcnQtY29tcG9uZW50IC5iYXJjaGFydC1pdGVtcyA+IGRpdiB7XFxuICAgICAgICBmbGV4OiAxIGF1dG87XFxuICAgICAgfVxcbiAgICAgIC5iYXJjaGFydC1jb21wb25lbnQgLmJhcmNoYXJ0LWl0ZW1zIC5sYWJlbC10ZXh0IHtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgfVxcbiAgICAgIC5iYXJjaGFydC1jb21wb25lbnQgLmJhcmNoYXJ0LWl0ZW1zIC5jb3VudCB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgIH1cXG5cXG4gICAgLmJhcmNoYXJ0LWNvbXBvbmVudCB7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICA8L3N0eWxlPlxcbjwvZGl2Plxcbic7Il19
