window.app.directive('delayEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/delay/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {
        node.wetLevel(newValue * 100);
        node.delayTime(newValue * 100);
        node.feedback(newValue);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
