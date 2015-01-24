window.app.factory('DubDelayUnit', ['Lodash', 'AudioContext', 'AudioUnit', function (lodash, AudioContext, AudioUnit) {
  function DubDelayUnit () {
    this.node = AudioContext.createDelay();
    this.feedback = AudioContext.createGain();
    this.feedback.gain.value = 0.8;
    this.filter = AudioContext.createBiquadFilter();
    this.filter.frequency.value = 1000;

    //connect everything
    this.node.connect(this.feedback);
    this.feedback.connect(this.filter);
    this.filter.connect(this.node);
  }

  DubDelayUnit.prototype = new AudioUnit();

  DubDelayUnit.prototype.delayTime = function (value) {
    if (lodash.isNumber(value)) {
      this.node.delayTime.value = value;
    }

    return this.node.delayTime.value;
  };

  DubDelayUnit.prototype.filterFrequency = function (value) {
    if (lodash.isNumber(value)) {
      this.filter.frequency.value = value;
    }

    return this.filter.frequency.value;
  };

  DubDelayUnit.prototype.feedback = function (value) {
    if (lodash.isNumber(value)) {
      this.feedback.gain.value = value;
    }

    return this.feedback.gain.value;
  };

  return DubDelayUnit;
}]);
