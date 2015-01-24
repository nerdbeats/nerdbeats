window.app.factory('BufferAudioSourceUnit', ['Lodash', 'AudioContext', 'AudioUnit', function (lodash, AudioContext, AudioUnit) {
  function BufferAudioSourceUnit() {
    this.playing = false;
    this.node = AudioContext.createBufferSource();
    this.length = 0;
  }

  BufferAudioSourceUnit.prototype = new AudioUnit();

  BufferAudioSourceUnit.prototype.isPlaying = function () {
    return this.playing;
  };

  BufferAudioSourceUnit.prototype.src = function (buffer) {
    if (lodash.isObject(buffer)) {
      if (this.isPlaying()) {
        this.stop();
      }
      this.node.buffer = buffer;
      this.length = this.node.buffer.duration / 60;
    }

    return this.node.buffer;
  };

  BufferAudioSourceUnit.prototype.play = function () {
    if (!this.playing) {
      this.playing = true;
      this.node.start(0);
    }
  };

  BufferAudioSourceUnit.prototype.pause = function () {};

  BufferAudioSourceUnit.prototype.stop = function () {
    if (this.playing) {
      this.playing = false;
      this.node.stop(0);
    }
  };

  BufferAudioSourceUnit.prototype.currentTime = function (position) {
    return 0;
  };

  BufferAudioSourceUnit.prototype.playbackRate = function (value) {
    if (lodash.isNumber(value)) {
      this.node.playbackRate.value = value;
    }

    return this.node.playbackRate.value;
  };

  return BufferAudioSourceUnit;
}]);
