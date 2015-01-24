window.app.directive('distortionEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/distortion/template.html',
    link: function ($scope) {
      var node = $scope.node;
      $scope.$watch('value', function (newValue) {

      });
    },
    scope: {
      node: '=',
      value: '='
    }
  };
});
