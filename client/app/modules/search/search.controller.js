SearchCtrl = function ($scope, SoundCloudService) {

  $scope.vm = {};
  $scope.vm.playlist = []


  SoundCloudService.find({limit: 50}).then(function (res) {
    $scope.vm.tracks = res
  })



  $scope.search = function () {
    SoundCloudService.find({q: $scope.vm.query, limit: 50}).then(function (res) {
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
}

app.controller("SearchCtrl", SearchCtrl)
