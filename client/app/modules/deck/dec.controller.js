DeckCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService) {

  $scope.vm = {};
  $scope.vm.effects = [ ];

  $rootScope.$on('addFilter', function(e, filterType, channel){

    if ($scope.channel != channel) {
      return;
    }
    $scope.vm.effects.push({type: filterType})

  });

  $rootScope.$on('addToDeck', function (e, track, channel) {
    if ($scope.channel != channel) {
      return;
    }
    AudioLoaderService.getBuffer(track.id).then(function (sound) {
      AudioManagerService.loadTrackTo(channel.toLowerCase(), sound);
      $scope.vm.track = track;
    });
  });

}

