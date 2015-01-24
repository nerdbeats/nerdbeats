window.app.factory('StreamAudioSourceUnit', ['$window', 'Lodash', 'AudioContext', 'AudioUnit', function ($window, lodash, AudioContext, AudioUnit) {
  function StreamAudioSourceUnit() {
    this.node = AudioContext.createMediaElementSource(new $window.Audio());
  }

  StreamAudioSourceUnit.prototype = new AudioUnit();

  StreamAudioSourceUnit.prototype.src = function (src) {
    if (lodash.isString(src)) {
      this.node.mediaElement.src = src;
    }

    return this.node.mediaElement.src;
  };

  StreamAudioSourceUnit.prototype.play = function () {
    debugger
    this.node.mediaElement.play();
    this.trigger('playing');
  };

  StreamAudioSourceUnit.prototype.pause = function () {
    this.node.mediaElement.pause();
  };

  StreamAudioSourceUnit.prototype.stop = function () {
    this.node.mediaElement.pause();
    this.seek(0.0);
  };

  StreamAudioSourceUnit.prototype.seek = function (time) {
    this.node.mediaElement.currentTime = time;
  };

  return StreamAudioSourceUnit;
}]);
