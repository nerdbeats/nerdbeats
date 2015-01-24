MixerCtrl = function ($scope, $rootScope) {

  $scope.vm = {};

  function addTrack(){

  }


  $rootScope.$on('addToMixer', function(e, track, channel){

    if ($scope.channel != channel){
      return;
    }

    $scope.vm.track  = track;

  });
}

