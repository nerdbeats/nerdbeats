DeckCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService) {

  $scope.vm = {};
  $scope.vm.showGallery = false;
  $scope.vm.effects = [ ];



  $rootScope.$on('addToDeck', function (e, track, channel) {
    if ($scope.channel != channel) {
      return;
    }
    AudioLoaderService.getStream(track.id).then(function (stream) {
      AudioManagerService.loadTrackTo(channel.toLowerCase(), stream);
    });
    $scope.vm.track = track;
  });

  $scope.toggleEffectsGallery  = function(){
    $scope.vm.showGallery = !$scope.vm.showGallery;
  };

  $scope.addFilter  = function(filterType){
    $scope.vm.effects.push({type: filterType})
  }
}

