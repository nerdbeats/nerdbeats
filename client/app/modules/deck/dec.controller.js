DeckCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService, AudioFactoryService) {

  $scope.vm = {};
  $scope.vm.showGallery = false;
  $scope.vm.effectsGallery = [
    {type: 'lp-filter', title: 'LP Filter'},
    {type: 'hp-filter', title: 'HP Filter'},
    {type: 'bp-filter', title: 'BP Filter'},
    {type: 'delay', title: 'Delay'},
    {type: 'distortion', title: 'Distortion'}
  ];
  $scope.vm.effects = [];

  $rootScope.$on('addToDeck', function (e, track, channel) {
    if ($scope.channel != channel) {
      return;
    }
    AudioLoaderService.getStream(track.id).then(function (sound) {
      AudioManagerService.loadTrackTo(channel.toLowerCase(), sound);
      $scope.vm.track = track;
    });
  });

  $scope.toggleEffectsGallery  = function(){
    if ($scope.vm.track) {
      $scope.vm.showGallery = !$scope.vm.showGallery;
    }
  };

  $scope.addEffect = function (type) {
    var unit, defaultValue = 0;

    if (type === 'lp-filter') {
      unit = AudioFactoryService.createLPFilter();
      defaultValue = unit.frequency.value;
    } else if (type === 'hp-filter') {
      unit = AudioFactoryService.createHPFilter();
      defaultValue = unit.frequency.value;
    } else if (type === 'bp-filter') {
      unit = AudioFactoryService.createBPFilter();
      defaultValue = unit.frequency.value;
    }

    if (unit) {
      //TODO: remember effects position to be able remove it or change the order
      AudioManagerService.insertEffectTo($scope.channel, unit);
      $scope.vm.effects.push({
        type: type,
        value: defaultValue,
        node: unit
      });
    }
  };
}

