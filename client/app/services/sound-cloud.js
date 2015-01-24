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
    },
    stream: function (id) {
      var def = $q.defer();

      api.stream('/tracks/' + id, function (track, err) {
        if (!err) {
          def.resolve(track);
        } else {
          def.reject(err);
        }
      });

      return def.promise
    },
    getStreamUrl: function (id) {
      return api._prepareStreamUrl('/tracks/' + id);
    }
  };
});
