window.app.directive('hpFilterEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/hp-filter/template.html',
    link: function ($scope) {
      var node = $scope.node;
      node.q(10);
      $scope.$watch('value', function (newValue) {
        node.frequency(newValue);
        node.bypass(newValue === 30);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
