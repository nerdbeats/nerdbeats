DeckCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService) {

  $scope.vm = {};
  $scope.vm.effects = [
    {type: 'lopass', value: 1 },
    {type: 'hipass', value: 1 },
    {type: 'distortion', value: 1},

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

