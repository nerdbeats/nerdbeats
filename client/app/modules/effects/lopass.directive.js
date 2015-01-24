app.directive('lopass', function () {
  return {
    templateUrl: 'app/modules/effects/slide-filter.html',
    restrict: 'EA',
    scope: {
      value: '=value',
      type: '=type'
    },
    link: function (scope, element, attrs) {
      debugger
    }
  };
});

