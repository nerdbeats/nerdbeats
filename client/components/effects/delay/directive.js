window.app.directive('delayEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/delay/template.html',
    link: function ($scope) {
      var node = $scope.node;
      node.delayTime(850);
      node.feedback(0.65);
      node.cutoff(1500);
      $scope.$watch('value', function (newValue) {
        node.wetLevel(newValue * 2);
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
