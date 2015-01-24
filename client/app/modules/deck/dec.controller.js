DeckCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService) {

  $scope.vm = {};
  $scope.vm.effects = [
    {value: 1, type: 'lowpass'},
    {value: 30,  type: 'highpass'}
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

