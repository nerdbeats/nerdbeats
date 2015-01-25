SearchCtrl = function ($scope, SoundCloudService, $rootScope, AudioManagerService) {

  $scope.vm = {};
  $scope.vm.playlist = [];

  $scope.secondsToTime = function(t)
  {
    var secs, ret='';

    if (t) {
      secs = Math.round(t) / 1000;

      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);

      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);

      var m = "0" + minutes;
      m =  m.substr(m.length-2);
      var s = "0" + seconds;
      s =  s.substr(s.length-2);
      ret = m + ':' + s;
    }

    return ret;
  };


  SoundCloudService.find({limit: 50}).then(function (res) {
    $scope.vm.tracks = res
  })

  $scope.search = function () {
    SoundCloudService.find({q: $scope.vm.query, limit: 50, duration: {to: 600000}}).then(function (res) {
      $scope.vm.tracks = res
    })
  }

  $scope.addToPlaylist = function (track) {
    $scope.vm.playlist.push(track);
  }

  $scope.remFromPlaylist = function (track) {
    var arr = $scope.vm.playlist;
    $scope.vm.playlist = _.without(arr, _.findWhere(arr, {id: track.id}));
  }

  $scope.isOnPlaylist = function (track) {
    return _.findWhere($scope.vm.playlist, {id: track.id})
  }

  $scope.isLoadedTo = function (deck, track) {
    return AudioManagerService.currentTrackId(deck) === track.id;
  };


  $scope.addToMixer = function (track, dest) {
    if (!$scope.isLoadedTo(dest, track)) {
      $rootScope.$emit('addToDeck', track, dest);
    }
  }


}

app.controller("SearchCtrl", SearchCtrl)
