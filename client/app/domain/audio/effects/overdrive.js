window.app.factory('OverdriveUnit', ['Lodash', 'AudioUnit', 'Tuna', function (lodash, AudioUnit, Tuna) {
  function OverdriveUnit () {
    this.node = new Tuna.Overdrive({
      outputGain: 0.5,         //0 to 1+
      drive: 0.7,              //0 to 1
      curveAmount: 1,          //0 to 1
      algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
      bypass: 0
    });
  }

  OverdriveUnit.prototype = new AudioUnit();

  OverdriveUnit.prototype.drive = function (value) {
    if (lodash.isNumber(value)) {
      this.node.drive = value;
    }

    return this.node.drive;
  };

  OverdriveUnit.prototype.curveAmount = function (value) {
    if (lodash.isNumber(value)) {
      this.node.curveAmount = value;
    }

    return this.node.curveAmount;
  };

  OverdriveUnit.prototype.algorithmIndex = function (value) {
    if (lodash.isNumber(value)) {
      this.node.curveAmount = value;
    }

    return this.node.algorithmIndex;
  };

  return OverdriveUnit;
}]);
