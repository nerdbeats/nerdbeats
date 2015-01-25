window.app.directive('reverbEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/reverb/template.html',
    link: function ($scope) {
      var node = $scope.node;
      node.lowCut(300);
      node.highCut(10000);
      $scope.$watch('value', function (newValue) {
        node.wetLevel(newValue);
        node.dryLevel(1 - newValue);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
