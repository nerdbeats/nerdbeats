window.app.factory('ValueHelper', ['Lodash', function (lodash) {

  return {
    'set' : function (target, property, value) {
      var path = property.split('.');
      var lastIdx = path.length - 1;
      var currentTarget = target;

      lodash.each(path, function (p, idx) {
        var part = currentTarget[p];

        if (idx !== lastIdx) {
          if (lodash.isFunction(part)) {
            currentTarget = currentTarget[p]();
          } else {
            currentTarget = currentTarget[p];
          }
        } else {
          if (lodash.isFunction(part)) {
            currentTarget[p](value);
          } else {
            currentTarget[p] = value;
          }
        }
      });
    },
    'get' : function (target, property) {
      var path = property.split('.');
      var lastIdx = path.length - 1;
      var currentTarget = target;
      var result = null;

      lodash.each(path, function (p, idx) {
        var part = currentTarget[p];

        if (idx !== lastIdx) {
          if (lodash.isFunction(part)) {
            currentTarget = currentTarget[p]();
          } else {
            currentTarget = currentTarget[p];
          }
        } else {
          if (lodash.isFunction(part)) {
            result = currentTarget[p]();
          } else {
            result = currentTarget[p];
          }
        }
      });

      return result;
    }
  };
}]);
