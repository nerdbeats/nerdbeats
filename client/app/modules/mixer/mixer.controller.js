MixerCtrl = function ($scope, $rootScope) {

  $scope.vm = {};
  $scope.vm.progress = 0;
  $scope.vm.tempo = 0;

  function addTrack(){

  }


    $rootScope.$on('addToMixer', function(e, track, channel){

    if ($scope.channel != channel){
      return;
    }

    $scope.vm.track  = track;

  });


  $scope.play = function(){

  }
  $scope.pause = function(){

  }
  $scope.stop = function(){
    console.log('stop');
  }
  $scope.cue = function(){

  }

}

