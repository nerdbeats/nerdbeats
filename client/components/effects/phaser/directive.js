window.app.directive('phaserEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/phaser/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {
        node.depth(newValue);
        node.rate(newValue * 10);
        node.feedback(newValue);
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
