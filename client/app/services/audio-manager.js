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
    play: function (deck) {
      mx[deck].play();
      return this;
    },
    stop: function (deck) {
      mx[deck].stop();
      return this;
    }
  };
});
