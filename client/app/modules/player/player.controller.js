PlayerCtrl = function ($scope, $rootScope,  AudioManagerService, $interval) {

  $scope.vm = {};
  $scope.vm.progress = 0;
  $scope.vm.tempo = 0;
  var stop ;
  var channel = $scope.channel.toLocaleLowerCase();


  $scope.play = function () {
    if (!$scope.track){
      return;
    }
    if (!AudioManagerService.isPlaying(channel)) {
      AudioManagerService.play(channel);
      stop = $interval(function(){
        $scope.vm.progress = (AudioManagerService.currentTime(channel) / ($scope.track.duration/1000)) * 100;
      }, 500)
    }
  }
  $scope.pause = function () {
    if (!$scope.track){
      return;
    }
    if (AudioManagerService.isPlaying(channel)) {
      AudioManagerService.pause(channel);
      $interval.cancel(stop);
    }
  }
  $scope.stop = function () {
    if (!$scope.track){
      return;
    }
    if (AudioManagerService.isPlaying(channel)) {
      AudioManagerService.stop(channel);
      $scope.vm.progress = 0;
      $interval.cancel(stop);
    }
  }
  $scope.cue = function () {

  }


  $scope.$watch("vm.progress", function(){
    if (!$scope.track){
      return;
    }
    var newTime = ($scope.track.duration/1000) *($scope.vm.progress/ 100)
    if (Math.abs(AudioManagerService.currentTime(channel) - newTime) < 1)
    {
      return;
    }
    AudioManagerService.currentTime(channel, newTime)
  });
}

