window.app.directive('bpFilterEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/bp-filter/template.html',
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
