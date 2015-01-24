PlayerCtrl = function ($scope, $rootScope,  AudioManagerService) {

  $scope.vm = {};
  $scope.vm.progress = 0;
  $scope.vm.tempo = 0;


  $scope.play = function () {
    AudioManagerService.play($scope.channel.toLocaleLowerCase());

  }
  $scope.pause = function () {

  }
  $scope.stop = function () {
    AudioManagerService.stop($scope.channel.toLocaleLowerCase());
  }
  $scope.cue = function () {

  }

}

