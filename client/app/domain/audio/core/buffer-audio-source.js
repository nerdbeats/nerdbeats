window.app.factory('BufferAudioSourceUnit', ['Lodash', 'AudioContext', 'AudioUnit', function (lodash, AudioContext, AudioUnit) {
  function BufferAudioSourceUnit() {
    this.node = AudioContext.createBufferSource();
  }

  BufferAudioSourceUnit.prototype = new AudioUnit();

  BufferAudioSourceUnit.prototype.src = function (buffer) {
    if (lodash.isObject(buffer)) {
      this.node.buffer = buffer;
    }

    return this.node.buffer;
  };

  BufferAudioSourceUnit.prototype.play = function () {
    this.node.start(0);
    this.trigger('playing');
  };

  BufferAudioSourceUnit.prototype.pause = function () {
    this.node.stop(0);
    this.trigger('stopped');
  };

  return BufferAudioSourceUnit;
}]);
