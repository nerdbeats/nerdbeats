window.app.factory('ControlMapper', ['Lodash', function (lodash) {

  return {
    'set' : function (target, property, value) {
      var path = property.split('.');
      var currentTarget = target;

      lodash.each(path, function (p) {
        var part = currentTarget[p];

        if (lodash.isFunction(part)) {
          currentTarget = currentTarget[part]();
        } else if (lodash.isObject(part)) {
          currentTarget = currentTarget[part];
        }
      });
    },
    'get' : function (target, property) {

    }
  };
}]);
