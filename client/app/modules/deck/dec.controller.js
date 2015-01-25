DeckCtrl = function ($scope, $rootScope, AudioLoaderService, AudioManagerService, AudioFactoryService) {

  $scope.vm = {};
  $scope.vm.sortableOptions = {
    orderChanged: function(event) {},
    containment: '#filter'
  };
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

    $scope.busy = true;
    AudioLoaderService.getBuffer(track.id).then(function (sound) {
      AudioManagerService.loadTrackTo(channel.toLowerCase(), sound);
      $scope.vm.track = track;
      $scope.busy = false;
    }).catch(function(){
      toastr.warning('Oops! something went wrong. Please try with other track')
      $scope.busy = false;
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
    "id": 86722124,
    "created_at": "2013/04/07 00:39:20 +0000",
    "user_id": 7382643,
    "duration": 278882,
    "commentable": true,
    "state": "finished",
    "original_content_size": 11241635,
    "last_modified": "2015/01/20 20:11:06 +0000",
    "sharing": "public",
    "tag_list": "GlitchHop.NET Dubstep.NET \"The EDM Network\" \"infected Mushroom\" \"Liquid Stranger\" Remix \"Steve Aoki\" \"Dim Mak Records\" GlitchHop Glitch Glitchy Glitch-Hop MidTempo Mid-Tempo Dub-Hop Dubstep DUB-STEP Dub Step Bass BassMusic Funk Music Drum Drumstep House Techno EDM Dance Electro",
    "permalink": "never-mind-by-infected",
    "streamable": true,
    "embeddable_by": "all",
    "downloadable": false,
    "purchase_url": "http://www.beatport.com/release/never-mind/1059539",
    "label_id": 903800,
    "purchase_title": "GET IT NOW!",
    "genre": "GlitchHop",
    "title": "Never Mind by Infected Mushroom (Liquid Stranger Remix)",
    "description": "SUBSCRIBE: http://bit.ly/W47YrE\r\n••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••\r\nFull Description on GlitchHop.NET : http://www.glitchhop.net/track/never-mind-by-infected\r\n••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••\r\nFollow Liquid Stranger:\r\nhttp://www.theliquidstranger.com\r\nhttp://www.facebook.com/liquidstranger\r\nhttps://twitter.com/LiquidStranger\r\nSC: http://soundcloud.com/liquid-stranger\r\n\r\nFollow Infected Mushroom:\r\nhttp://www.infected-mushroom.com\r\nhttp://www.facebook.com/infectedmushroom\r\nhttps://twitter.com/infected\r\nSC: http://soundcloud.com/infectedmushroom\r\n\r\nFollow Dim Mak Records:\r\nhttp://www.dimmak.com/\r\n\r\nFollow us @ http://www.Glitchhop.NET\r\n••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••\r\nSend all demos to dropbox@glitchhop.NET to have your track featured!\r\n••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••\r\nSounds like: Skrillex, KOAN Sound, Culprate, SBTRKT, Pretty Lights Opiuo, Neus, Mimosa, The Glitch Mob, Ooah, ediT, Pegboard Nerds, AMB, IYFFE, Tut Tut Child, Kraddy, Feed Me, GlitchHop, MidTempo, Glitch-Hop, Glitch, Funky, Neuro-Funk, Dance Music, EDM, Bass, OWSLA, Mau5trap, Ultra, Never Say Die, Mad Decent, Monstercat, Screwloose and Big Beat",
    "label_name": "Dim Mak Records",
    "release": "887845276988",
    "track_type": "original",
    "key_signature": "Gm",
    "isrc": "",
    "video_url": null,
    "bpm": 102,
    "release_year": 2013,
    "release_month": 4,
    "release_day": 2,
    "original_format": "mp3",
    "license": "all-rights-reserved",
    "uri": "https://api.soundcloud.com/tracks/86722124",
    "user": {
      "id": 7382643,
      "kind": "user",
      "permalink": "glitchhop",
      "username": "GlitchHop - EDM.com",
      "last_modified": "2015/01/18 22:24:11 +0000",
      "uri": "https://api.soundcloud.com/users/7382643",
      "permalink_url": "http://soundcloud.com/glitchhop",
      "avatar_url": "https://i1.sndcdn.com/avatars-000060513082-hlgf1b-large.jpg"
    },
    "label": {
      "id": 903800,
      "kind": "user",
      "permalink": "dimmakrecords",
      "username": "Dim Mak Records",
      "last_modified": "2015/01/22 18:32:38 +0000",
      "uri": "https://api.soundcloud.com/users/903800",
      "permalink_url": "http://soundcloud.com/dimmakrecords",
      "avatar_url": "https://i1.sndcdn.com/avatars-000074836661-tsq3cr-large.jpg"
    },
    "permalink_url": "http://soundcloud.com/glitchhop/never-mind-by-infected",
    "artwork_url": "https://i1.sndcdn.com/artworks-000044860446-soym09-large.jpg",
    "waveform_url": "https://w1.sndcdn.com/3nrhWoJBqIst_m.png",
    "stream_url": "https://api.soundcloud.com/tracks/86722124/stream",
    "playback_count": 113596,
    "download_count": 1,
    "favoritings_count": 3394,
    "comment_count": 227,
    "attachments_uri": "https://api.soundcloud.com/tracks/86722124/attachments",
    "policy": "ALLOW",
    "$$hashKey": "object:584"
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
      defaultValue = 1000;
    } else if (type === 'hp-filter') {
      unit = AudioFactoryService.createHPFilter();
      defaultValue = 1000;
    } else if (type === 'bp-filter') {
      unit = AudioFactoryService.createBPFilter();
      defaultValue = 2500;
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

