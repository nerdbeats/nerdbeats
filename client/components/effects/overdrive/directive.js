window.app.directive('overdriveEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/overdrive/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {
        node.drive(newValue);
      });
    },
    scope: {
      node: '=',
      value: '=',
      type: '='
    }
  };
});
