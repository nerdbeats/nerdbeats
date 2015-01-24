window.app.directive('DelayControl', function (ControlMapper) {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/delay/template.html',
    link: function ($scope, $element) {
      var mapper = new ControlMapper();
      mapper.target($scope.node);
      mapper.map({
        'delay.time' : 1
      });
      
      $scope.$watch('value', function (newValue) {
        mapper.value(newValue);
      });
    },
    scope: {
      node: '=',
      value: '='
    }
  };
});
