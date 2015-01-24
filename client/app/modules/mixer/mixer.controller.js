MixerCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService) {

  $scope.vm = {};
  $scope.vm.progress = 0;
  $scope.vm.tempo = 0;

  function addTrack(){

  }


    $rootScope.$on('addToMixer', function(e, track, channel){

    if ($scope.channel != channel){
      return;
    }

      AudioLoaderService.getStream(track.id).then(function (stream) {
        AudioManagerService.loadTrackTo(channel.toLowerCase(), stream);
      });

    $scope.vm.track  = track;

  });


  $scope.play = function(){
    AudioManagerService.play($scope.channel.toLocaleLowerCase());

  }
  $scope.pause = function(){

  }
  $scope.stop = function(){
    AudioManagerService.stop($scope.channel.toLocaleLowerCase());
    console.log('stop');
  }
  $scope.cue = function(){

  }

}

