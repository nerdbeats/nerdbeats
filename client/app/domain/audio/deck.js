window.app.factory('Deck', ['Lodash', 'AudioBusUnit', function (lodash, AudioBusUnit) {
  function Deck() {}

  Deck.prototype = new AudioBusUnit();

  Deck.prototype.play = function () {
    this.node.start(0);
  };

  Deck.prototype.stop = function () {
    this.node.stop(0);
  };
}]);
