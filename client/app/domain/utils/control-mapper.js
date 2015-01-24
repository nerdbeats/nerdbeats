window.app.factory('ControlMapper', ['Lodash', function (lodash) {
  function ControlMapper() {
    var map, value, node;


    this.target = function (target) {
      if (lodash.isObject(target)) {
        node = target;
      }

      return node;
    };

    this.map = function (newMap) {
      if (lodash.isObject(newMap)) {
        map = newMap;
      }

      return map;
    };

    this.value = function (newValue) {
      if (lodash.isObject(newValue)) {
        value = newValue;
      }

      return value;
    };

  }

  return ControlMapper;
}]);
