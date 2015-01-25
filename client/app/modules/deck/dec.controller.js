DeckCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService, AudioFactoryService) {

  $scope.vm = {};
  $scope.vm.showGallery = false;
  $scope.vm.effectsGallery = [
    {type: 'lp-filter', title: 'LP Filter'},
    {type: 'hp-filter', title: 'HP Filter'},
    {type: 'bp-filter', title: 'BP Filter'},
    {type: 'delay', title: 'Delay'},
    {type: 'overdrive', title: 'Overdrive'},
    {type: 'phaser', title: 'Phaser'},
    {type: 'chorus', title: 'Chorus'},
    {type: 'tremolo', title: 'Tremolo'},
    {type: 'wahwah', title: 'Wah Wah'}
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
    } else if (type === 'delay') {
      unit = AudioFactoryService.createDelay();
      defaultValue = 0;
    } else if (type === 'overdrive') {
      unit = AudioFactoryService.createOverdrive();
      defaultValue = 1;
    } else if (type === 'phaser') {
      unit = AudioFactoryService.createPhaser();
      defaultValue = 0.1;
    } else if (type === 'chorus') {
      unit = AudioFactoryService.createChorus();
      defaultValue = 0.1;
    } else if (type === 'tremolo') {
      unit = AudioFactoryService.createTremolo();
      defaultValue = 0.1;
    }else if (type === 'wahwah') {
      unit = AudioFactoryService.createWahWah();
      defaultValue = 0.1;
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

