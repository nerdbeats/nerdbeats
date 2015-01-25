window.app.factory('PhaserUnit', ['Lodash', 'AudioUnit', 'Tuna', function (lodash, AudioUnit, Tuna) {
  function PhaserUnit () {
    this.node = new Tuna.Phaser({
      rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
      depth: 0.3,                    //0 to 1
      feedback: 0.2,                 //0 to 1+
      stereoPhase: 30,               //0 to 180
      baseModulationFrequency: 700,  //500 to 1500
      bypass: 0
    });
  }

  PhaserUnit.prototype = new AudioUnit();

  PhaserUnit.prototype.depth = function (value) {
    if (lodash.isNumber(value)) {
      this.node.depth = value;
    }

    return this.node.depth;
  };

  PhaserUnit.prototype.rate = function (value) {
    if (lodash.isNumber(value)) {
      this.node.rate = value;
    }

    return this.node.rate;
  };

  PhaserUnit.prototype.feedback = function (value) {
    if (lodash.isNumber(value)) {
      this.node.feedback = value;
    }

    return this.node.feedback;
  };

  PhaserUnit.prototype.stereoPhase = function (value) {
    if (lodash.isNumber(value)) {
      this.node.stereoPhase = value;
    }

    return this.node.stereoPhase;
  };

  return PhaserUnit;
}]);
