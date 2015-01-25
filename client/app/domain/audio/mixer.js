window.app.factory('Mixer', ['Lodash', 'AudioContext', 'AudioUnit', 'Deck', function (lodash, AudioContext, AudioUnit, Deck) {

  function upVolume(target, value) {
    if (target.value < 1) {
      var calculated = Math.abs(value - 1);

      if (calculated > 1) {
        calculated = 1;
      }

      target.value = calculated;
    }
  }

  function downVolume(target, value) {
    if (target.value > 0) {
      var calculated = 1 - value;

      if (calculated < 0) {
        calculated = 0;
      }

      target.value = calculated;
    }
  }

  function Mixer() {
    this.node = AudioContext.createAnalyser();
    this.merger = AudioContext.createChannelMerger();
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

    this.fader.left.connect(this.merger);
    this.fader.right.connect(this.merger);

    this.merger.connect(this.node);

    this.fadeValue = 0;
    this.previousValue = 0;
  }

  Mixer.prototype = new AudioUnit();

  Mixer.prototype.fade = function (value) {
    if (lodash.isNumber(value)) {
      var originalValue = value;
      var direction = 'center';

      if (value > 0) {
        if (this.previousValue > value) {
          direction = 'left';
        } else {
          direction = 'right';
        }
      } else if (value < 0) {
        if (this.previousValue < value) {
          direction = 'right';
        } else {
          direction = 'left';
        }
      }

      value = Math.abs(value);

      if (value > 1) {
        throw new Error('Value can not be bigger than 1');
      }

      var left = this.fader.left.gain;
      var right = this.fader.right.gain;

      if (direction === 'right') {        // Fade out left
        // behind center
        if (originalValue > 0) {
          downVolume(left, value);
          right.value = 1;
        } else {
          upVolume(right, value);
        }
      } else if (direction === 'left') { // Fade out right
        // behind center
        if (originalValue < 0) {
          downVolume(right, value);
          left.value = 1;
        } else {
          upVolume(left, value);
        }
      } else  {
        left.value = 1;
        right.value = 1;
      }

      this.previousValue = originalValue;
    }

    return this.fadeValue;
  };

  return Mixer;
}]);
