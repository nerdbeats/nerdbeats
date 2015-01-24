window.app.factory('BufferAudioSourceUnit', ['Lodash', 'AudioContext', 'AudioUnit', function (lodash, AudioContext, AudioUnit) {
  function BufferAudioSourceUnit() {
    this.playing = false;
    this.node = AudioContext.createBufferSource();
  }

  BufferAudioSourceUnit.prototype = new AudioUnit();

  BufferAudioSourceUnit.prototype.isPlaying = function () {
    return this.playing;
  };

  BufferAudioSourceUnit.prototype.src = function (buffer) {
    if (lodash.isObject(buffer)) {
      this.node.buffer = buffer;
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

  BufferAudioSourceUnit.prototype.currentTime = function (position) {};

  return BufferAudioSourceUnit;
}]);
