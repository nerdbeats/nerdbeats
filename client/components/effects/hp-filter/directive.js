window.app.directive('hpFilterEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/hp-filter/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {
        node.frequency.value = newValue;
      });
    },
    scope: {
      node: '=',
      value: '='
    }
  };
});
