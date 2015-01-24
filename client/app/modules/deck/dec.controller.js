DeckCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService) {

  $scope.vm = {};
  $scope.vm.effects = [
    {value: 1},
    {value: 30},
    {value: 50},
    {value: 70}

  ];
  $rootScope.$on('addToDeck', function (e, track, channel) {
    if ($scope.channel != channel) {
      return;
    }
    AudioLoaderService.getStream(track.id).then(function (stream) {
      AudioManagerService.loadTrackTo(channel.toLowerCase(), stream);
    });
    $scope.vm.track = track;
  });

}

