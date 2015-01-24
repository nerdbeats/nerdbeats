app.directive('player', function () {
  return {
    templateUrl: 'app/modules/player/player.html',
    restrict: 'EA',
    scope: {
      channel: '@channel',
      track: '=track'
    },
    controller: PlayerCtrl,
    link: function (scope, element, attrs) {
    }
  };
});


