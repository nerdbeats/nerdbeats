ConsoleCtrl = function ($scope, SoundCloudService, $rootScope) {
  $scope.vm  = {
    class: ''
  }

  $scope.toggleSearchPanel = function(){

    if ($scope.vm.class == ''){
      $scope.vm.class = 'expanded';
    }else{
      $scope.vm.class = '';
    }

  }
}

app.controller('ConsoleCtrl', ConsoleCtrl)
