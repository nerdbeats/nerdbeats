window.app.factory('BufferAudioSourceUnit', ['Lodash', 'AudioContext', 'AudioUnit', '$timeout', function (lodash, AudioContext, AudioUnit, $timeout) {
  function BufferAudioSourceUnit() {
    this.playing = false;
    this.paused = false;
    this.node = AudioContext.createBufferSource();
    this.output = null;
    this.length = 0;
    this.startedAt = 0;
    this.offset = 0;
    this.playbackRate = 1;
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

  BufferAudioSourceUnit.prototype.play = function (position) {
    if (!this.playing) {
      this.playing = true;

      if (lodash.isNumber(position)) {
        this.offset = position || 0;
      }

      this.node.start(0, this.offset);
      this.startedAt = this.node.context.currentTime - this.offset;
    }
  };

  BufferAudioSourceUnit.prototype.pause = function () {
    if (this.playing) {
      this.stop();
      this.offset = this.currentTime();
    }
  };

  BufferAudioSourceUnit.prototype.stop = function () {
    if (this.playing) {
      var buffer = this.node.buffer;
      this.playing = false;
      this.node.stop(0);
      this.node.disconnect();
      this.node = AudioContext.createBufferSource();
      this.node.buffer = buffer;
      this.node.playbackRate.value = this.playbackRate;

      if (lodash.isObject(this.output)) {
        this.connect(this.output);
      }
    }
  };

  BufferAudioSourceUnit.prototype.currentTime = function (position) {
    if (lodash.isNumber(position)) {
      if (this.isPlaying()) {
        this.stop();
        this.play(position);
      } else {
        this.offset = position;
      }
    }

    return this.node.context.currentTime - this.startedAt;
  };

  BufferAudioSourceUnit.prototype.tempo = function (value) {
    if (lodash.isNumber(value)) {
      this.playbackRate = value;
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
