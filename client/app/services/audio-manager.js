window.app.factory('AudioManagerService', function (AudioContext, Mixer) {
  var mx = new Mixer();
  mx.connect(AudioContext.destination);

  function normalize(d) {
    return d.toLowerCase();
  }

  return {
    volumeOf: function (deck, value) {
      return mx.decks[normalize(deck)].volume(value);
    },
    loadTrackTo: function (deck, track) {
      mx.decks[normalize(deck)].input(track);
      return this;
    },
    insertEffectTo: function (deck, effect, position) {
      mx.decks[normalize(deck)].bus.addInsert(effect, position);
      return this;
    },
    removeEffectFrom: function (deck, position) {
      mx.decks[normalize(deck)].bus.removeInsert(position);
      return this;
    },
    fade: function (value) {
      return mx.fade(value);
    },
    isPlaying: function (deck) {
      return mx.decks[normalize(deck)].isPlaying();
    },
    play: function (deck) {
      mx.decks[normalize(deck)].play();
      return this;
    },
    pause: function (deck) {
      mx.decks[normalize(deck)].pause();
      return this;
    },
    stop: function (deck) {
      mx.decks[normalize(deck)].stop();
      return this;
    },
    currentTime: function (deck, position) {
      return mx.decks[normalize(deck)].currentTime(position);
    },
    cue: function (deck, position) {
      return mx.decks[normalize(deck)].cue(position);
    },
    lowFreq: function (deck, value) {
      return mx.decks[normalize(deck)].lowFrequency(value);
    },
    midFreq: function (deck, value) {
      return mx.decks[normalize(deck)].midFrequency(value);
    },
    hiFreq: function (deck, value) {
      return mx.decks[normalize(deck)].highFrequency(value);
    },
    tempo: function (deck, value) {
      return mx.decks[normalize(deck)].tempo(value);
    },
    state: function (deck) {
      return mx.decks[normalize(deck)].currentState();
    }
  };
});
