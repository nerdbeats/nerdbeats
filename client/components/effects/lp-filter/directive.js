window.app.directive('lpFilterEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/lp-filter/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {
        node.frequency(newValue * 2);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
