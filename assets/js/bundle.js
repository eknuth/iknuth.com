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


},{"angular-chart-components":"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/index.js"}],"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/barchart.js":[function(require,module,exports){
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

},{"./barchart":"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/barchart.js"}],"/Users/tiatia/projects/iknuth.com/node_modules/angular-chart-components/src/templates/barchart.html":[function(require,module,exports){
module.exports = '<div>\n  <div class="barchart-component">\n    <div class="barchart-items" style="width: {{(item.value/max)*100}}%;" ng-repeat="item in data|orderBy:\'-value\'">\n      <div class="label-text">{{item.label}}</div>\n      <div class="value">{{item.value}}</div>\n    </div>\n\n  </div>\n\n  <style>\n\n    .barchart-component .barchart-items {\n      background-color: steelblue;\n      text-align: right;\n      padding: 10px 10px;\n      margin: 1px;\n      color: white;\n\n      display: flex;\n      flex-flow: row wrap;\n\n    }\n      .barchart-component .barchart-items > div {\n        flex: 1 auto;\n      }\n      .barchart-component .barchart-items .label-text {\n          text-align: left;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n      }\n      .barchart-component .barchart-items .count {\n          text-align: right;\n      }\n\n    .barchart-component {\n      font-size: 16px;\n      width: 100%;\n    }\n  </style>\n</div>\n';
},{}]},{},["/Users/tiatia/projects/iknuth.com/_assets/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfYXNzZXRzL2pzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2FuZ3VsYXItY2hhcnQtY29tcG9uZW50cy9zcmMvYmFyY2hhcnQuanMiLCJub2RlX21vZHVsZXMvYW5ndWxhci1jaGFydC1jb21wb25lbnRzL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9hbmd1bGFyLWNoYXJ0LWNvbXBvbmVudHMvc3JjL3RlbXBsYXRlcy9iYXJjaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGNoYXJ0Q29tcG9uZW50cyA9IHJlcXVpcmUoJ2FuZ3VsYXItY2hhcnQtY29tcG9uZW50cycpO1xuXG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2lrbnV0aCcsIFtcbiAgJ0NoYXJ0Q29tcG9uZW50cy5iYXJjaGFydCdcbl0pO1xuXG4vKkBuZ0luamVjdCovXG5tb2R1bGUuY29udHJvbGxlcignQmFyQ2hhcnRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAkc2NvcGUuaXRlbXMgPSBbXG4gICAge3ZhbHVlOiAyOCwgbGFiZWw6ICdJUlZJTkdUT04nfSxcbiAgICB7dmFsdWU6IDE2LCBsYWJlbDogJ1NFTExXT09ELU1PUkVMQU5EIElNUFJPVkVNRU5UIExFQUdVRSd9LFxuICAgIHt2YWx1ZTogMTMsIGxhYmVsOiAnTk9SVEhXRVNUIERJU1RSSUNUJ30sXG4gICAge3ZhbHVlOiAxMiwgbGFiZWw6ICdISUxMU0RBTEUnfSxcbiAgICB7dmFsdWU6IDEyLCBsYWJlbDogJ0dPT1NFIEhPTExPVyd9LFxuICAgIHt2YWx1ZTogMTEsIGxhYmVsOiAnU09VVEhXRVNUIEhJTExTJ30sXG4gICAge3ZhbHVlOiAxMSwgbGFiZWw6ICdNVC4gVEFCT1InfSxcbiAgICB7dmFsdWU6IDEwLCBsYWJlbDogJ0xBVVJFTEhVUlNUJ30sXG4gICAge3ZhbHVlOiAxMCwgbGFiZWw6ICdPVkVSTE9PSyd9LFxuICAgIHt2YWx1ZTogMTAsIGxhYmVsOiAnSE9TRk9SRC1BQkVSTkVUSFknfSxcbiAgICB7dmFsdWU6IDksIGxhYmVsOiAnV09PRFNUT0NLJ30sXG4gICAge3ZhbHVlOiA4LCBsYWJlbDogJ1JJQ0hNT05EJ31cbiAgXTtcblxufSk7XG5cbiIsInZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnQ2hhcnRDb21wb25lbnRzLmJhcmNoYXJ0JywgW10pO1xuXG4vKkBuZ0luamVjdCovXG5tb2R1bGUuZGlyZWN0aXZlKCdiYXJjaGFydCcsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZXMvYmFyY2hhcnQuaHRtbCcpLFxuICAgIHNjb3BlOiB7XG4gICAgICAnZGF0YSc6ICc9J1xuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBzY29wZS5tYXggPSAwO1xuXG4gICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKCdkYXRhJywgZnVuY3Rpb24gKG5ld0RhdGEpIHtcbiAgICAgICAgaWYgKG5ld0RhdGEpIHtcbiAgICAgICAgICBuZXdEYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHNjb3BlLm1heCA9IE1hdGgubWF4KHNjb3BlLm1heCwgaXRlbS52YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NvcGUubWF4ID0gMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG4iLCJyZXF1aXJlKCcuL2JhcmNoYXJ0Jyk7XG5cbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnQ2hhcnRDb21wb25lbnRzJywgW1xuICAnQ2hhcnRDb21wb25lbnRzLmJhcmNoYXJ0J1xuXSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2PlxcbiAgPGRpdiBjbGFzcz1cImJhcmNoYXJ0LWNvbXBvbmVudFwiPlxcbiAgICA8ZGl2IGNsYXNzPVwiYmFyY2hhcnQtaXRlbXNcIiBzdHlsZT1cIndpZHRoOiB7eyhpdGVtLnZhbHVlL21heCkqMTAwfX0lO1wiIG5nLXJlcGVhdD1cIml0ZW0gaW4gZGF0YXxvcmRlckJ5OlxcJy12YWx1ZVxcJ1wiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC10ZXh0XCI+e3tpdGVtLmxhYmVsfX08L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj57e2l0ZW0udmFsdWV9fTwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcblxcbiAgPHN0eWxlPlxcblxcbiAgICAuYmFyY2hhcnQtY29tcG9uZW50IC5iYXJjaGFydC1pdGVtcyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgICBtYXJnaW46IDFweDtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcblxcbiAgICB9XFxuICAgICAgLmJhcmNoYXJ0LWNvbXBvbmVudCAuYmFyY2hhcnQtaXRlbXMgPiBkaXYge1xcbiAgICAgICAgZmxleDogMSBhdXRvO1xcbiAgICAgIH1cXG4gICAgICAuYmFyY2hhcnQtY29tcG9uZW50IC5iYXJjaGFydC1pdGVtcyAubGFiZWwtdGV4dCB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIH1cXG4gICAgICAuYmFyY2hhcnQtY29tcG9uZW50IC5iYXJjaGFydC1pdGVtcyAuY291bnQge1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICB9XFxuXFxuICAgIC5iYXJjaGFydC1jb21wb25lbnQge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgPC9zdHlsZT5cXG48L2Rpdj5cXG4nOyJdfQ==
