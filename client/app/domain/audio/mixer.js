window.app.factory('Mixer', ['AudioUnit', 'Deck', function (AudioUnit, Deck) {
  function Mixer() {
    this.decks = [];
  }

  Mixer.prototype = new AudioUnit();

  Mixer.prototype.loadTrackTo = function (deckIndex, track) {

  };
}]);
