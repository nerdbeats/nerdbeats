DeckCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService, AudioFactoryService) {

  $scope.vm = {};
  $scope.vm.showGallery = false;
  $scope.vm.effectsGallery = [
    {type: 'lp-filter', title: 'LP Filter'},
    {type: 'hp-filter', title: 'HP Filter'},
    {type: 'bp-filter', title: 'BP Filter'},
    {type: 'reverb', title: 'Reverb'},
    {type: 'delay', title: 'Delay'},
    {type: 'phaser', title: 'Phaser'},
    {type: 'chorus', title: 'Chorus'},
    {type: 'tremolo', title: 'Tremolo'},
    {type: 'wahwah', title: 'Wah Wah'},
    {type: 'overdrive', title: 'Overdrive'}
  ];
  $scope.vm.effects = [];

  $scope.moveUp = function(){


  }

  $scope.moveDown = function(){

  }


  var addToDeck = function (track, channel) {
    if ($scope.channel != channel) {
      return;
    }
    AudioLoaderService.getBuffer(track.id).then(function (sound) {
      AudioManagerService.loadTrackTo(channel.toLowerCase(), sound);
      $scope.vm.track = track;
    });
  }


  $scope.closeGallery = function(){
    $scope.vm.showGallery = false;
  }


  addToDeck({
    "kind": "track",
    "id": 5174841,
    "created_at": "2010/09/09 07:52:30 +0000",
    "user_id": 1081301,
    "duration": 294302,
    "commentable": true,
    "state": "finished",
    "original_content_size": 7159104,
    "last_modified": "2015/01/21 14:45:39 +0000",
    "sharing": "public",
    "tag_list": "",
    "permalink": "01-aphex-twin-xtal",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": false,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "Ambiental",
    "title": "Aphex Twin-Xtal",
    "description": "",
    "label_name": "",
    "release": "",
    "track_type": "",
    "key_signature": "",
    "isrc": "",
    "video_url": null,
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "all-rights-reserved",
    "uri": "https://api.soundcloud.com/tracks/5174841",
    "user": {
      "id": 1081301,
      "kind": "user",
      "permalink": "adrian-dulu",
      "username": "adrian.dulu",
      "last_modified": "2014/07/22 19:02:16 +0000",
      "uri": "https://api.soundcloud.com/users/1081301",
      "permalink_url": "http://soundcloud.com/adrian-dulu",
      "avatar_url": "https://i1.sndcdn.com/avatars-000042378812-jawx3d-large.jpg"
    },
    "permalink_url": "http://soundcloud.com/adrian-dulu/01-aphex-twin-xtal",
    "artwork_url": "https://i1.sndcdn.com/artworks-000002296270-luqlhx-large.jpg",
    "waveform_url": "https://w1.sndcdn.com/XOJRHKaXcgPf_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/5174841/stream",
    "playback_count": 115939,
    "download_count": 0,
    "favoritings_count": 1846,
    "comment_count": 60,
    "attachments_uri": "https://api.soundcloud.com/tracks/5174841/attachments",
    "policy": "ALLOW",
    "$$hashKey": "object:225"
  }, 'B');


  addToDeck({
    "kind": "track",
    "id": 57373254,
    "created_at": "2012/08/24 03:44:58 +0000",
    "user_id": 22737437,
    "duration": 651453,
    "commentable": true,
    "state": "finished",
    "original_content_size": 15627863,
    "last_modified": "2015/01/10 00:24:30 +0000",
    "sharing": "public",
    "tag_list": "Stairway \"led zeppelin\" \"hard rock\" \"stairway to heaven live\" \"madison square garden\"",
    "permalink": "led-zeppelin-stairway-to",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": false,
    "purchase_url": null,
    "label_id": null,
    "purchase_title": null,
    "genre": "Hard Rock",
    "title": "Led Zeppelin   Stairway to Heaven Live (HD)",
    "description": "",
    "label_name": "",
    "release": "",
    "track_type": "live",
    "key_signature": "",
    "isrc": "",
    "video_url": null,
    "bpm": null,
    "release_year": null,
    "release_month": null,
    "release_day": null,
    "original_format": "mp3",
    "license": "all-rights-reserved",
    "uri": "https://api.soundcloud.com/tracks/57373254",
    "user": {
      "id": 22737437,
      "kind": "user",
      "permalink": "brandonyairrt",
      "username": "BrandonYairRT",
      "last_modified": "2013/10/10 22:00:12 +0000",
      "uri": "https://api.soundcloud.com/users/22737437",
      "permalink_url": "http://soundcloud.com/brandonyairrt",
      "avatar_url": "https://a1.sndcdn.com/images/default_avatar_large.png"
    },
    "permalink_url": "http://soundcloud.com/brandonyairrt/led-zeppelin-stairway-to",
    "artwork_url": null,
    "waveform_url": "https://w1.sndcdn.com/zDL37RLIbDge_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/57373254/stream",
    "playback_count": 771231,
    "download_count": 100,
    "favoritings_count": 9952,
    "comment_count": 261,
    "attachments_uri": "https://api.soundcloud.com/tracks/57373254/attachments",
    "policy": "ALLOW",
    "$$hashKey": "object:223"
  }, 'A');


  $rootScope.$on('addToDeck', function (e, track, channel) {
    addToDeck(track, channel);
  });


  $scope.toggleEffectsGallery  = function(){
    if ($scope.vm.track) {
      $scope.vm.showGallery = !$scope.vm.showGallery;
    }
  };

  $scope.getFilterClass = function(e){

    var hasOnList = _.findWhere($scope.vm.effects, {type: e.type})
    return hasOnList ? 'active' : 'none';
  };

  $scope.removeFilter = function(index){
    AudioManagerService.removeEffectFrom($scope.channel, index);
    $scope.vm.effects.splice(index, 1);
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
      defaultValue = 0.1;
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
    } else if (type === 'reverb') {
      unit = AudioFactoryService.createReverb();
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

