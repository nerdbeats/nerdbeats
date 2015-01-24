window.app.directive('dubDelayEffect', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/effects/dub-delay/template.html',
    link: function ($scope) {
      var node = $scope.node;
      node.filterFrequency(1000);
      $scope.$watch('value', function (newValue) {
        node.delayTime(newValue);
        //node.filterFrequency(newValue / 100);
        node.feedback(newValue / 100);
      });
    },
    scope: {
      node: '=',
      value: '='
    }
  };
});
