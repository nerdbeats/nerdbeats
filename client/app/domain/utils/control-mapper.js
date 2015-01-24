window.app.factory('ControlMapper', ['Lodash', 'ValueHelper', function (lodash, helper) {
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
        if (lodash.isObject(map)) {
          value = newValue;

          lodash.each(map, function (ration, target) {
            helper.set(node, target, ration * newValue);
          });
        }
      }

      return value;
    };

  }

  return ControlMapper;
}]);
