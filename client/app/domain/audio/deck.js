window.app.factory('Deck', ['Lodash', 'AudioContext', 'AudioUnit', 'AudioBusUnit', function (lodash, AudioContext, AudioUnit, AudioBusUnit) {
  function Deck() {
    this.node = AudioContext.createGain();
    this.bus = new AudioBusUnit();
    this.startPosition = 0.0;

    this.bus.connect(this.node);
  }

  Deck.prototype = new AudioUnit();

  Deck.prototype.isPlaying = function () {
    var node = this.bus.input();
    return node ? node.isPlaying() : false;
  };

  Deck.prototype.input = function (input) {
    if (lodash.isObject(input)) {
      if (this.isPlaying()) {
        this.stop();
      }

      this.bus.input(input);
    }

    return this.bus.input();
  };

  Deck.prototype.play = function () {
    if (!this.isPlaying()) {
      this.bus.input().currentTime(this.startPosition);
      this.bus.input().play();
    }
  };

  Deck.prototype.stop = function () {
    if (this.isPlaying()) {
      this.bus.input().stop();
      this.bus.input().seek(this.startPosition);
    }
  };

  Deck.prototype.pause = function () {
    if (this.isPlaying()) {
      this.bus.input().pause();
    }
  };

  Deck.prototype.volume = function (value) {
    if (lodash.isNumber(value)) {
      this.node.gain.value = value;
    }

    return this.node.gain.value;
  };

  Deck.prototype.cue = function (value) {
    if (lodash.isNumber(value) && value > 0) {
      this.startPosition = value;
    }

    return this.startPosition;
  };

  Deck.prototype.currentTime = function (value) {
    return this.bus.input().currentTime(value);
  };

  return Deck;
}]);
