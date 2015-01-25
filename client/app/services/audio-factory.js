window.app.factory('AudioFactoryService',
  function (Lodash, AudioContext, DelayUnit, OverdriveUnit, PhaserUnit, ChorusUnit, TremoloUnit, WahWahUnit, FilterUnit, ReverbUnit) {
    lodash = Lodash;
    ctx = AudioContext;
    return {
      getContext: function () {
        return ctx;
      },
      createBuffer: function (duration) {
        var sampleRate = this.getContext().sampleRate;
        var frameCount = sampleRate * duration;

        return this.getContext().createBuffer(2, frameCount, sampleRate);
      },
      createBufferSource: function (buffer) {
        var node = this.getContext().createBufferSource();

        if (lodash.isObject(buffer)) {
          node.buffer = buffer;
        }

        return node;
      },
      createGain: function () {
        return this.getContext().createGain();
      },
      createDelay: function () {
        return new DelayUnit();
      },
      createFilter: function (options) {
        var node = new FilterUnit();
        options = options || {};

        node.type(options.type);
        node.frequency(options.frequency);
        node.q(options.q);
        node.gain(options.gain);

        return node;
      },
      createLPFilter: function () {
        return this.createFilter({
          type: 'lowpass',
          frequency: 1000
        });
      },
      createHPFilter: function () {
        return this.createFilter({
          type: 'highpass',
          frequency: 500,
          q: 50
        });
      },
      createBPFilter: function () {
        return this.createFilter({
          type: 'bandpass',
          frequency: 1000,
          q: 50
        });
      },
      createOverdrive: function (options) {
        var node = new OverdriveUnit();
        options = options || {};
        node.algorithmIndex(options.algorithm);
        return node;
      },
      createReverb: function () {
        return new ReverbUnit();
      },
      createPhaser: function () {
        return new PhaserUnit();
      },
      createChorus: function () {
        return new ChorusUnit();
      },
      createTremolo: function () {
        return new TremoloUnit();
      },
      createWahWah: function () {
        return new WahWahUnit();
      }
    };
  });
