app.directive('mixer', function () {
  return {
    templateUrl: 'app/modules/mixer/mixer.html',
    restrict: 'EA',
    scope: {
      channel: '@channel'
    },
    controller: MixerCtrl,
    link: function (scope, element, attrs) {
    }
  };
});


