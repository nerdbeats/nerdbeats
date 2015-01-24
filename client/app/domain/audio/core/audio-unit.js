window.app.factory('AudioUnit', ['EventEmitter', function (EventEmitter) {
  function AudioUnit () {
    this.node = null;
  }

  AudioUnit.prototype = new EventEmitter();

  AudioUnit.prototype.connect = function (target) {
    if (this.node) {
      this.node.connect(target.node || target);
      this.trigger('connected', [target]);
    }
  };

  AudioUnit.prototype.disconnect = function () {
    if (this.node) {
      this.node.disconnect();
      this.trigger('disconnected');
    }
  };
}]);
