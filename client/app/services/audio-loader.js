window.app.factory('AudioLoaderService', function ($http, $q, SoundCloudService, AudioContext, BufferAudioSourceUnit, StreamAudioSourceUnit) {
  return {
    getStream: function (id) {
      return SoundCloudService.stream(id).then(function (sound) {
        var unit = new StreamAudioSourceUnit();
        unit.src(sound.url);
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
          }, function(e){
            def.reject(e);
          });
        } else {
          def.reject(err);
        }
      }, function(err){
        def.reject(err);
      })

      return def.promise;
    }
  };
});
