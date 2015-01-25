MixerCtrl = function ($scope, AudioManagerService) {

  $scope.channelA = {
    low: 0,
    mid: 0,
    high: 0,
    vol: 100
  }
  $scope.channelB = {
    low: 0,
    mid: 0,
    high: 0,
    vol: 100
  }
  $scope.vm = {
    fade: 0
  }
  $scope.vm.tst = 0;



  $scope.$watch('channelA.low', function(){
    AudioManagerService.lowFreq('a', $scope.channelA.low);
  })

  $scope.$watch('channelA.low', function(){
    AudioManagerService.midFreq('a', $scope.channelA.low);
  })
  $scope.$watch('channelA.mid', function(){
    AudioManagerService.hiFreq('a', $scope.channelA.mid);
  })
  $scope.$watch('channelA.vol', function(){
    AudioManagerService.volumeOf('a', $scope.channelA.vol /100);
  })



  $scope.$watch('channelB.low', function(){
    AudioManagerService.lowFreq('b', $scope.channelB.low);
  })
  $scope.$watch('channelB.mid', function(){
    AudioManagerService.midFreq('b', $scope.channelB.mid);
  })
  $scope.$watch('channelB.high', function(){
    AudioManagerService.hiFreq('b', $scope.channelB.high);
  })
  $scope.$watch('channelB.vol', function(){
    AudioManagerService.volumeOf('b', $scope.channelB.vol /100);
  })

  $scope.$watch('vm.fade', function(){
    AudioManagerService.fade($scope.vm.fade);
  })
}


app.controller("MixerCtrl", MixerCtrl);
