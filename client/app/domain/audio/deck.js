window.app.factory('Deck', ['Lodash', 'AudioContext', 'AudioUnit', 'AudioBusUnit', function (lodash, AudioContext, AudioUnit, AudioBusUnit) {
  function Deck() {
    this.node = AudioContext.createGain();
    this.bus = new AudioBusUnit();
    this.startPosition = null;

    this.lf = AudioContext.createBiquadFilter();
    this.lf.type = 'lowshelf';
    this.lf.frequency.value = 250;

    this.mf = AudioContext.createBiquadFilter();
    this.mf.type = 'peaking';
    this.mf.frequency.value = 1500;
    this.mf.Q.value = 10;

    this.hf = AudioContext.createBiquadFilter();
    this.hf.type = 'highshelf';
    this.hf.frequency.value = 5000;

    this.bus.connect(this.lf);
    this.lf.connect(this.mf);
    this.mf.connect(this.hf);
    this.hf.connect(this.node);
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
      if (this.startPosition){
        this.bus.input().currentTime(this.startPosition); //cue
      }
      this.bus.input().play();
    }
  };

  Deck.prototype.stop = function () {
    if (this.isPlaying()) {
      this.bus.input().stop();
      this.bus.input().currentTime(this.startPosition || 0); //cue
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

  Deck.prototype.lowFrequency = function (value) {
    if (lodash.isNumber(value)) {
      this.lf.gain.value = value;
    }

    return this.lf.gain.value;
  };

  Deck.prototype.midFrequency = function (value) {
    if (lodash.isNumber(value)) {
      this.mf.gain.value = value;
    }

    return this.mf.gain.value;
  };

  Deck.prototype.highFrequency = function (value) {
    if (lodash.isNumber(value)) {
      this.hf.gain.value = value;
    }

    return this.hf.gain.value;
  };

  Deck.prototype.tempo = function (value) {
    if (this.bus.input()) {
      return this.bus.input().tempo(value);
    }

    return 1;
  };

  return Deck;
}]);
