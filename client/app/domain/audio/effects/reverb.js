window.app.factory('ReverbUnit', ['Lodash', 'AudioUnit', 'Tuna', function (lodash, AudioUnit, Tuna) {
  function ReverbUnit () {
    this.node = new Tuna.Convolver({
      highCut: 22050,                         //20 to 22050
      lowCut: 20,                             //20 to 22050
      dryLevel: 1,                            //0 to 1+
      wetLevel: 1,                            //0 to 1+
      level: 1,                               //0 to 1+, adjusts total output of both wet and dry
      impulse: "bower_components/tuna/impulses/impulse_rev.wav",    //the path to your impulse response
      bypass: 0
    });
  }

  ReverbUnit.prototype = new AudioUnit();

  ReverbUnit.prototype.highCut = function (value) {
    if (lodash.isNumber(value)) {
      this.node.highCut = value;
    }

    return this.node.highCut;
  };

  ReverbUnit.prototype.lowCut = function (value) {
    if (lodash.isNumber(value)) {
      this.node.lowCut = value;
    }

    return this.node.lowCut;
  };

  ReverbUnit.prototype.dryLevel = function (value) {
    if (lodash.isNumber(value)) {
      this.node.dryLevel = value;
    }

    return this.node.dryLevel;
  };

  ReverbUnit.prototype.wetLevel = function (value) {
    if (lodash.isNumber(value)) {
      this.node.wetLevel = value;
    }

    return this.node.wetLevel;
  };

  ReverbUnit.prototype.level = function (value) {
    if (lodash.isNumber(value)) {
      this.node.level = value;
    }

    return this.node.level;
  };

  return ReverbUnit;
}]);
