window.app.service('AudioLoaderService', function ($http, $q, SoundCloudService, AudioContext, BufferAudioSourceUnit, StreamAudioSourceUnit) {
  return {
    getStream: function (id) {
      return SoundCloudService.stream(id).then(function (sound) {
        var unit = new StreamAudioSourceUnit();
        unit.src(sound.src);
        return unit;
      });
    },
    getBuffer: function (id) {
      var def = $q.defer();

      $http.get(SoundCloudService.getStreamUrl(id), {
        responseType: 'arraybuffer'
      }).then(function (response, err) {
        if (!err) {
          AudioContext.decodeAudioData(response.data, function (buffer) {
            var unit = new BufferAudioSourceUnit();
            unit.src(buffer);
            def.resolve(unit);
          });
        } else {
          def.reject(err);
        }
      });

      return def.promise;
    }
  };
});
