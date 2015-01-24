app.directive('effectSlider', function () {
  return {
    templateUrl: 'app/modules/deck/effect-slider.html',
    restrict: 'EA',
    scope: {
      value: '=value'
    },
    link: function (scope, element, attrs) {
      scope.value  = 0;
      scope.$watch('vm.value', function(){
        console.log(scope.value)
      })
    }
  };
});

