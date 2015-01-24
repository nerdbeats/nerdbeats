window.app.service('AudioContext', function ($window) {
  return new ($window.AudioContext || $window.webkitAudioContext)();
});
