app.directive('effect', function ($compile) {
  return {
    //templateUrl: 'app/modules/effects/effect-slider.html',
    restrict: 'EA',
    scope: {
      value: '=value',
      type: '=type'
    },
    template: '<div></div>',
    link: function (scope, element, attrs) {
      element.append("<" + scope.type + " value="+ scope.value+ "/>")
      $compile(element.contents())(scope);
    }
  };
});

