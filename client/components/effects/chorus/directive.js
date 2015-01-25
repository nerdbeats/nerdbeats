window.app.directive('chorusEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/chorus/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {
        node.delay(newValue / 10);
        node.rate(newValue);
        node.feedback(newValue);
        node.bypass(newValue === 0);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
