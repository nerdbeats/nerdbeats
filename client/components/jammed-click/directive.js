window.app.directive('jammedClick', function ($interval) {
  return {
    restrict: 'A',
    link: function ($scope, $element, attr) {
      var promise;

      $element.on('mousedown', function () {
        promise = $interval(function () {
          $scope.jammedClick();
          console.log('clisk');
        }, 50);
      });

      $element.on('mouseup', function () {
        $interval.cancel(promise);
      });
    },
    scope: {
      jammedClick: '&'
    }
  };
});
