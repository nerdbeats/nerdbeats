window.app.factory('AudioBusUnit', ['Lodash','AudioUnit', function (lodash, AudioUnit) {
  function AudioBusUnit() {
    this.inserts = [];
    this.output = null;
  }

  AudioBusUnit.prototype = new AudioUnit();

  AudioBusUnit.prototype.input = function (input) {
    if (lodash.isObject(input)) {
      if (lodash.isObject(this.node)) {
        this.node.disconnect();
      }

      this.node = input;
      var output = lodash.last(this.inserts) || this.output;

      if (lodash.isObject(output)) {
        this.node.connect(output);
      }

      this.trigger('input:changed', [input]);
    }

    return this.node;
  };

  AudioBusUnit.prototype.addInsert = function (newInsert, position) {
    var insert;

    if (lodash.isNumber(position)) {
      insert = this.inserts[position];
      this.inserts.splice(position, 0, newInsert);
    } else {
      insert = lodash.last(this.inserts);
      this.inserts.push(newInsert);
    }

    if (lodash.isUndefined(insert)) {
      insert = this.node;
    }

    insert.disconnect();
    insert.connect(newInsert);

    this.trigger('insert:added', [newInsert]);

    if (lodash.isObject(this.output)) {
      newInsert.connect(this.output);
    }
  };

  AudioBusUnit.prototype.removeInsert = function (index) {
    var insert, prevInsert, nextInsert;

    if (lodash.isNumber(index)) {
      prevInsert = this.inserts[index -1];
      insert = this.inserts[index];
      nextInsert = this.inserts[index + 1];

      if (lodash.isObject(insert)) {
        // remove from chain
        this.inserts.splice(index, 1);

        if (!lodash.isObject(prevInsert)) {
          prevInsert = this.node;
        }

        if (!lodash.isObject(nextInsert)) {
          nextInsert = this.output;
        }

        insert.disconnect();
        prevInsert.connect(nextInsert);
        this.trigger('insert:removed', [insert, index]);
      }
    }
  };

  AudioBusUnit.prototype.connect = function (target) {
    var source = lodash.last(this.inserts) || this;
    this.output = target;
    AudioUnit.prototype.connect.call(source, this.output);
  };

  AudioBusUnit.prototype.disconnect = function () {
    var source = lodash.last(this.inserts) || this;
    this.output = null;
    AudioUnit.prototype.disconnect.call(source);
  };

  return AudioBusUnit;
}]);
