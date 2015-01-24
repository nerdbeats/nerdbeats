window.app.factory('DubDelayUnit', ['AudioContext', 'AudioUnit', function (AudioContext, AudioUnit) {
  function DubDelayUnit () {
    this.node = null;
  }

  DubDelayUnit.prototype = new AudioUnit();


  return AudioUnit;
}]);
