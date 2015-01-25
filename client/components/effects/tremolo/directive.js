window.app.directive('tremoloEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/tremolo/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {
        node.rate(newValue);
        node.stereoPhase(newValue * 2000);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
