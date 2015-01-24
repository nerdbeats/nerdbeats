window.app.service('AudioLoaderService', function ($http, $q, SoundCloudService, AudioContext) {
  return {
    getStream: function (id) {
      return SoundCloudService.stream(id);
    },
    getBuffer: function (id) {
      var def = $q.defer();

      $http.get(SoundCloudService.getStreamUrl(id), {
        responseType: 'arraybuffer'
      }).then(function (response, err) {
        if (!err) {
          AudioContext.decodeAudioData(response.data, function (buffer) {
            def.resolve(buffer);
          });
        } else {
          def.reject(err);
        }
      });

      return def.promise;
    }
  };
});
