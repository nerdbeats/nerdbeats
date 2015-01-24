window.app.directive('effect', function ($compile) {
  return {
    restrict: 'E',
    scope: {
      value: '=',
      type: '=',
      node: '='
    },
    template: '<div></div>',
    link: function ($scope, $element) {
      $element.append('<' + $scope.type + '-effect value="value" node="node"/>')
      $compile($element.contents())($scope);
    }
  };
});
