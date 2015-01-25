PlayerCtrl = function ($scope, $rootScope,  AudioManagerService, $interval) {

  $scope.vm = {};
  $scope.vm.progress = 0;
  $scope.vm.time = "00:00";
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
        $scope.vm.time = secondsToTime(AudioManagerService.currentTime(channel));
      }, 500)
    }
  }


  function secondsToTime(secs)
  {
    secs = Math.round(secs);
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var m = "0" + minutes;
    m =  m.substr(m.length-2);
    var s = "0" + seconds;
    s =  s.substr(s.length-2);
    return m + ':' + s;
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
    var time = AudioManagerService.currentTime(channel);
    AudioManagerService.cue(channel, time);
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

