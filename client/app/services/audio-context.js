window.app.factory('AudioContext', function ($window) {
  return new ($window.AudioContext || $window.webkitAudioContext)();
});
