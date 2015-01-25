window.app.factory('WahWahUnit', ['Lodash', 'AudioUnit', 'Tuna', function (lodash, AudioUnit, Tuna) {
  function WahWahUnit () {
    this.node = new Tuna.WahWah({
      automode: true,                //true/false
      baseFrequency: 0.5,            //0 to 1
      excursionOctaves: 2,           //1 to 6
      sweep: 0.2,                    //0 to 1
      resonance: 10,                 //1 to 100
      sensitivity: 0.5,              //-1 to 1
      bypass: 0
    });
  }

  WahWahUnit.prototype = new AudioUnit();

  WahWahUnit.prototype.baseFrequency = function (value) {
    if (lodash.isNumber(value)) {
      this.node.baseFrequency = value;
    }

    return this.node.baseFrequency;
  };

  WahWahUnit.prototype.excursionOctaves = function (value) {
    if (lodash.isNumber(value)) {
      this.node.excursionOctaves = value;
    }

    return this.node.excursionOctaves;
  };

  WahWahUnit.prototype.sweep = function (value) {
    if (lodash.isNumber(value)) {
      this.node.sweep = value;
    }

    return this.node.sweep;
  };

  WahWahUnit.prototype.resonance = function (value) {
    if (lodash.isNumber(value)) {
      this.node.resonance = value;
    }

    return this.node.resonance;
  };

  WahWahUnit.prototype.sensitivity = function (value) {
    if (lodash.isNumber(value)) {
      this.node.sensitivity = value;
    }

    return this.node.sensitivity;
  };

  return WahWahUnit;
}]);
