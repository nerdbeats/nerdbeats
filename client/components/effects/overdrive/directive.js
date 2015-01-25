window.app.directive('overdriveEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/overdrive/template.html',
    link: function ($scope) {
      var node = $scope.node;
      node.algorithmIndex(3);
      $scope.$watch('value', function (newValue) {
        node.drive(newValue);
        node.curveAmount(newValue);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
