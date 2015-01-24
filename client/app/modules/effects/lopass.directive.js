app.directive('lopass', function (AudioFactoryService, AudioManagerService) {
  return {
    templateUrl: 'app/modules/effects/slide-filter.html',
    restrict: 'EA',
    scope: {
      value: '=value',
      type: '=type',
      deck: '=deck'
    },
    link: function (scope, element, attrs) {

      var filter = AudioFactoryService.createFilter({type: 'lowpass', frequency: 1000});

      AudioManagerService.insertEffectTo('a', filter, 0);

      scope.$watch('value', function(){
        filter.frequency = scope.value * 100;
      });

    }
  };
});

4
