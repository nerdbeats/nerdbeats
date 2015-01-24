window.app.factory('BufferAudioSourceUnit', ['Lodash', 'AudioContext', 'AudioUnit', function (lodash, AudioContext, AudioUnit) {
  function BufferAudioSourceUnit() {
    this.playing = false;
    this.node = AudioContext.createBufferSource();
    this.output = null;
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
      var buffer = this.node.buffer;
      this.playing = false;
      this.node.stop(0);
      this.node.disconnect();
      this.node = AudioContext.createBufferSource();
      this.node.buffer = buffer;

      if (lodash.isObject(this.output)) {
        this.node.connect(this.output);
      }
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

  BufferAudioSourceUnit.prototype.connect = function (target) {
    this.output = target;
    AudioUnit.prototype.connect.call(this, this.output);
  };

  return BufferAudioSourceUnit;
}]);
