window.app.factory('DelayUnit', ['Lodash', 'AudioUnit', 'Tuna', function (lodash, AudioUnit, Tuna) {
  function DelayUnit () {
    this.node = new Tuna.Delay({
      feedback: 0.45,    //0 to 1+
      delayTime: 150,    //how many milliseconds should the wet signal be delayed?
      wetLevel: 0.25,    //0 to 1+
      dryLevel: 1,       //0 to 1+
      cutoff: 20,        //cutoff frequency of the built in highpass-filter. 20 to 22050
      bypass: 0
    });
  }

  DelayUnit.prototype = new AudioUnit();

  DelayUnit.prototype.feedback = function (value) {
    if (lodash.isNumber(value)) {
      this.node.feedback = value;
    }

    return this.node.feedback;
  };

  DelayUnit.prototype.delayTime = function (value) {
    if (lodash.isNumber(value)) {
      this.node.delayTime = value;
    }

    return this.node.delayTime;
  };

  DelayUnit.prototype.wetLevel = function (value) {
    if (lodash.isNumber(value)) {
      this.node.wetLevel = value;
    }

    return this.node.wetLevel;
  };

  DelayUnit.prototype.dryLevel = function (value) {
    if (lodash.isNumber(value)) {
      this.node.dryLevel = value;
    }

    return this.node.dryLevel;
  };

  DelayUnit.prototype.cutoff = function (value) {
    if (lodash.isNumber(value)) {
      this.node.cutoff = value;
    }

    return this.node.cutoff;
  };

  return DelayUnit;
}]);
