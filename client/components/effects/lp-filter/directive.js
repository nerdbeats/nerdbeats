window.app.directive('lpFilterEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/lp-filter/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {
        node.frequency(newValue);
        node.bypass(newValue === 5000);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
