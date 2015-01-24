window.app.factory('ChorusUnit', ['Lodash', 'AudioContext', 'AudioUnit', function (lodash, AudioContext, AudioUnit) {
  function ChorusUnit () {
    this.node = AudioContext.createDelay();
    this.node.delayTime.value = 0.1;

    this.osc = AudioContext.createOscillator();
    this.gain = AudioContext.createGain();
    this.gain.gain.value = 0.5;

    this.osc.type = this.osc.SINE;
  }

  ChorusUnit.prototype = new AudioUnit();

  return ChorusUnit;
}]);
