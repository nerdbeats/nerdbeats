window.app.service('AudioManagerService', function (AudioContext, Mixer) {
  var mx = new Mixer();
  mx.connect(AudioContext.destination);

  return {
    volumeOf: function (deck, value) {
      return mx.decks[deck].volume(value);
    },
    loadTrackTo: function (deck, track) {
      mx.decks[deck].input(track);
      return this;
    },
    insertEffectTo: function (deck, effect, position) {
      mx.decks[deck].bus.addInsert(effect, position);
      return this;
    },
    removeEffectFrom: function (deck, position) {
      mx.decks[deck].bus.removeInsert(position);
      return this;
    },
    fade: function (value) {
      return mx.fade(value);
    },
    isPlaying: function (deck) {
      return mx.decks[deck].isPlaying();
    },
    play: function (deck) {
      mx.decks[deck].play();
      return this;
    },
    pause: function (deck) {
      mx.decks[deck].pause();
      return this;
    },
    stop: function (deck) {
      mx.decks[deck].stop();
      return this;
    },
    currentTime: function (deck, position) {
      return mx.decks[deck].currentTime(position);
    },
    cue: function (deck, position) {
      mx.decks[deck].cue(position);
      return this;
    },
    lowFreq: function (deck, value) {
      return mx.decks[deck].lowFrequency(value);
    },
    midFreq: function (deck, value) {
      return mx.decks[deck].midFrequency(value);
    },
    hiFreq: function (deck, value) {
      return mx.decks[deck].highFrequency(value);
    }
  };
});
