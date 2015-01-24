window.app.service('SoundCloudService', function ($window, $http, $q, config) {
  var api = $window.SC;
  api.initialize({
    client_id: config.api.soundCloud.clientId
  });

  return {
    find: function (criteria) {
      var def = $q.defer();

      api.get('/tracks', criteria, function (tracks, err) {
        if (!err) {
          def.resolve(tracks);
        } else {
          def.reject(err);
        }
      });

      return def.promise;
    }
  };
});
