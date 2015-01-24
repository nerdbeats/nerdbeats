SearchCtrl = function ($scope, SoundCloudService) {

  $scope.vm = {};
  $scope.search = function () {
    SoundCloudService.find($scope.vm.query).then(function(res){
      $scope.vm.tracks = res
    })
    alert($scope.vm.query)
  }
}


app.controller("SearchCtrl", SearchCtrl)
