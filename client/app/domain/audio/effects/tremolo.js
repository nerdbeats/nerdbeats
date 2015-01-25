window.app.factory('TremoloUnit', ['Lodash', 'AudioUnit', 'Tuna', function (lodash, AudioUnit, Tuna) {
  function TremoloUnit () {
    this.node = new Tuna.Tremolo({
      intensity: 0.3,    //0 to 1
      rate: 0.1,         //0.001 to 8
      stereoPhase: 0,    //0 to 180
      bypass: 0
    });
  }

  TremoloUnit.prototype = new AudioUnit();

  TremoloUnit.prototype.intensity = function (value) {
    if (lodash.isNumber(value)) {
      this.node.intensity = value;
    }

    return this.node.intensity;
  };

  TremoloUnit.prototype.rate = function (value) {
    if (lodash.isNumber(value)) {
      this.node.rate = value;
    }

    return this.node.rate;
  };

  TremoloUnit.prototype.stereoPhase = function (value) {
    if (lodash.isNumber(value)) {
      this.node.stereoPhase = value;
    }

    return this.node.stereoPhase;
  };

  return TremoloUnit;
}]);
