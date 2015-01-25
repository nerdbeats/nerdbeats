window.app.factory('Tuna', ['$window', 'AudioContext', function ($window, AudioContext) {
  return new $window.Tuna(AudioContext);
}]);
