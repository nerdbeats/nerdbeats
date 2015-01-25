window.app.directive('wahwahEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/wah-wah/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {
        node.baseFrequency(newValue);
        node.sweep(newValue);
        node.resonance(newValue * 100);
        node.sensitivity(newValue);
      });
    },
    scope: {
      node: '=',
      value: '='
    }
  };
});
