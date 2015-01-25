window.app.factory('FilterUnit', ['Lodash', 'AudioUnit', 'Tuna', function (lodash, AudioUnit, Tuna) {
  function FilterUnit () {
    this.node = new Tuna.Filter({
      frequency: 20,         //20 to 22050
      Q: 1,                  //0.001 to 100
      gain: 0,               //-40 to 40
      filterType: 'lowpass',         //0 to 7, corresponds to the filter types in the native filter node: lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass in that order
      bypass: 0
    });
  }

  FilterUnit.prototype = new AudioUnit();

  FilterUnit.prototype.frequency = function (value) {
    if (lodash.isNumber(value)) {
      this.node.frequency = value;
    }

    return this.node.frequency;
  };

  FilterUnit.prototype.q = function (value) {
    if (lodash.isNumber(value)) {
      this.node.Q = value;
    }

    return this.node.Q;
  };

  FilterUnit.prototype.gain = function (value) {
    if (lodash.isNumber(value)) {
      this.node.gain = value;
    }

    return this.node.gain;
  };

  FilterUnit.prototype.type = function (value) {
    if (lodash.isString(value)) {
      this.node.filterType = value;
    }

    return this.node.filterType;
  };

  return FilterUnit;
}]);
