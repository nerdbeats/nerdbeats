PlayerCtrl = function ($scope, $rootScope,  AudioManagerService, $interval) {

  $scope.vm = {};
  $scope.vm.progress = 0;
  $scope.vm.tempo = 0;
  var stop ;
  var channel = $scope.channel.toLocaleLowerCase();


  $scope.play = function () {
    if (!AudioManagerService.isPlaying(channel)) {
      AudioManagerService.play(channel);
      stop = $interval(function(){
        $scope.vm.progress = (AudioManagerService.currentTime(channel) / ($scope.track.duration/1000)) * 100;
      }, 500)
    }
  }
  $scope.pause = function () {
    if (AudioManagerService.isPlaying(channel)) {
      AudioManagerService.pause(channel);
      $interval.cancel(stop);
    }
  }
  $scope.stop = function () {
    if (AudioManagerService.isPlaying(channel)) {
      AudioManagerService.stop(channel);
      $interval.cancel(stop);
    }
  }
  $scope.cue = function () {

  }

}

