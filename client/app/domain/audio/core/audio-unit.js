window.app.factory('AudioUnit', ['EventEmitter', function (EventEmitter) {
  function AudioUnit () {
    this.node = null;
  }

  AudioUnit.prototype = new EventEmitter();

  AudioUnit.prototype.connect = function (target) {
    var input;
    if (this.node) {

      if (target.node) {
        if (target.node.input) {
          input = target.node.input;
        } else {
          input = this.node;
        }
      } else {
        input = target;
      }
      this.node.connect(input);
      this.trigger('connected', [target]);
    }
  };

  AudioUnit.prototype.disconnect = function () {
    if (this.node) {
      this.node.disconnect();
      this.trigger('disconnected');
    }
  };

  AudioUnit.prototype.bypass = function (value) {
    if (lodash.isBoolean(value)) {
      this.node.bypass = value ? 1 : 0;
    }

    return this.node.bypass ? true : false;
  };

  return AudioUnit;
}]);
