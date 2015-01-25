window.app.directive('wahwahEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/wah-wah/template.html',
    link: function ($scope) {
      var node = $scope.node;
      var freq = 0.25;
      var sweep = 0.6;
      var sens = 0.1;
      node.resonance(50);
      $scope.$watch('value', function (newValue) {
        node.sensitivity(newValue);
        node.baseFrequency(freq + (newValue / 10));
        node.sweep(sweep + (newValue / 10))
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
