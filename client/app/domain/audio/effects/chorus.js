window.app.factory('ChorusUnit', ['Lodash', 'AudioUnit', 'Tuna', function (lodash, AudioUnit, Tuna) {
  function ChorusUnit () {
    this.node = new Tuna.Chorus({
      rate: 1.5,         //0.01 to 8+
      feedback: 0.2,     //0 to 1+
      delay: 0.0045,     //0 to 1
      bypass: 0          //the value 1 starts the effect as bypassed, 0 or 1
    });
  }

  ChorusUnit.prototype = new AudioUnit();

  ChorusUnit.prototype.rate = function (value) {
    if (lodash.isNumber(value)) {
      this.node.rate = value;
    }

    return this.node.rate;
  };

  ChorusUnit.prototype.feedback = function (value) {
    if (lodash.isNumber(value)) {
      this.node.feedback = value;
    }

    return this.node.feedback;
  };

  ChorusUnit.prototype.delay = function (value) {
    if (lodash.isNumber(value)) {
      this.node.delay = value;
    }

    return this.node.delay;
  };

  return ChorusUnit;
}]);
