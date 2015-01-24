window.app.factory('Deck', ['Lodash', 'AudioContext', 'AudioUnit', 'AudioBusUnit', function (lodash, AudioContext, AudioUnit, AudioBusUnit) {
  function Deck() {
    this.node = AudioContext.createGain();
    this.bus = new AudioBusUnit();

    this.bus.connect(this.node);
  }

  Deck.prototype = new AudioUnit();

  Deck.prototype.input = function (input) {
    if (lodash.isObject(input)) {
      this.bus.input(input);
    }

    return this.bus.input();
  };

  Deck.prototype.play = function () {
    this.node.start(0);
  };

  Deck.prototype.stop = function () {
    this.node.stop(0);
  };

  Deck.prototype.volume = function (value) {
    if (lodash.isNumber(value)) {
      this.node.gain.value = value;
    }

    return this.node.gain.value;
  };
}]);
