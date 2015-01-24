window.app.factory('Mixer', ['Lodash', 'AudioContext', 'AudioUnit', 'Deck', function (lodash, AudioContext, AudioUnit, Deck) {
  function Mixer() {
    this.node = AudioContext.createChannelMerger();
    this.decks = {
      'a' : new Deck(),
      'b' : new Deck()
    };

    this.fader = {
      'left' : AudioContext.createGain(),
      'right' : AudioContext.createGain()
    };

    this.decks.a.connect(this.fader.left);
    this.decks.b.connect(this.fader.right);

    this.fader.left.connect(this.node);
    this.fader.right.connect(this.node);

    this.fadeValue = 0;
  }

  Mixer.prototype = new AudioUnit();

  Mixer.prototype.fade = function (value) {
    if (lodash.isNumber(value)) {

      if (Math.abs(value) > 1) {
        throw new Error('Value can not be bigger than 1');
      }

      if (value > 0) {        // Fade out left
        this.fader.left.gain.value += -value;
      } else if (value < 0) { // Fade out right
        this.fader.right.gain.value += value;
      } else  {
        this.fader.left.gain.value = 1;
        this.fader.right.gain.value = 1;
      }
    }

    return this.fadeValue;
  };

  return Mixer;
}]);
