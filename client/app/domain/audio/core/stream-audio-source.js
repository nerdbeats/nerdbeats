window.app.factory('StreamAudioSourceUnit', ['$window', 'Lodash', 'AudioContext', 'AudioUnit', function ($window, lodash, AudioContext, AudioUnit) {
  function StreamAudioSourceUnit() {
    this.node = ctx.createMediaElementSource(new $window.Audio());
  }

  StreamAudioSourceUnit.prototype = new AudioUnit();

  StreamAudioSourceUnit.prototype.src = function (src) {
    if (lodash.isString(src)) {
      this.node.mediaElement.src = src;
    }

    return this.node.mediaElement.src;
  };

  StreamAudioSourceUnit.prototype.play = function () {
    this.node.mediaElement.play();
    this.trigger('playing');
  };

  StreamAudioSourceUnit.prototype.pause = function () {
    this.node.mediaElement.pause();
    this.trigger('stopped');
  };

  return StreamAudioSourceUnit;
}]);
