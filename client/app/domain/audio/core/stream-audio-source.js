window.app.factory('StreamAudioSourceUnit', ['$window', 'Lodash', 'AudioContext', 'AudioUnit', function ($window, lodash, AudioContext, AudioUnit) {
  function StreamAudioSourceUnit() {
    this.playing = false;
    this.node = AudioContext.createMediaElementSource(new $window.Audio());
  }

  StreamAudioSourceUnit.prototype = new AudioUnit();

  StreamAudioSourceUnit.prototype.isPlaying = function () {
    return this.playing;
  };

  StreamAudioSourceUnit.prototype.src = function (src) {
    if (lodash.isString(src)) {
      if (this.isPlaying()) {
        this.stop();
      }

      this.node.mediaElement.src = src;
    }

    return this.node.mediaElement.src;
  };

  StreamAudioSourceUnit.prototype.play = function () {
    if (!this.playing) {
      this.playing = true;
      this.node.mediaElement.play();
    }
  };

  StreamAudioSourceUnit.prototype.pause = function () {
    if (this.playing) {
      this.playing = false;
      this.node.mediaElement.pause();
    }
  };

  StreamAudioSourceUnit.prototype.stop = function () {
    if (this.playing) {
      this.playing = false;
      this.node.mediaElement.pause();
      this.currentTime(0.0);
    }
  };

  StreamAudioSourceUnit.prototype.currentTime = function (time) {
    if (lodash.isNumber(time)) {
      this.node.mediaElement.currentTime = time;
    }

    return this.node.mediaElement.currentTime;
  };

  StreamAudioSourceUnit.prototype.tempo = function (value) {
    return 0;
  };

  return StreamAudioSourceUnit;
}]);
