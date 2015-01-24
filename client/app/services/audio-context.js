window.app.service('AudioContext', function () {
  return new ($window.AudioContext || $window.webkitAudioContext)();
});
