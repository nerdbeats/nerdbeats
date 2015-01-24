window.app.directive('DelayControl', function (ControlMapper) {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/delay/template.html',
    link: function ($scope) {
      $scope.$watch('value', function (newValue) {
        $scope.node.delayTime.value = newValue;
      });
    },
    scope: {
      node: '=',
      value: '='
    }
  };
});
