window.app.factory('AudioFactoryService',
  function (Lodash, AudioContext, DelayUnit, OverdriveUnit, PhaserUnit, ChorusUnit, TremoloUnit, WahWahUnit) {
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
        var node = this.getContext().createBiquadFilter();
        options = options || {};

        if (lodash.isString(options.type)) {

          node.type = options.type;
        }

        if (lodash.isNumber(options.frequency)) {
          node.frequency.value = options.frequency;
        }

        if (lodash.isNumber(options.detune)) {
          node.detune.value = options.detune;
        }

        if (lodash.isNumber(options.q)) {
          node.Q.value = options.q;
        }

        if (lodash.isNumber(options.gain)) {
          node.gain.value = options.gain;
        }

        return node;
      },
      createLPFilter: function () {
        return this.createFilter({
          frequency: 1000
        });
      },
      createHPFilter: function () {
        return this.createFilter({
          type: 'highpass',
          frequency: 500
        });
      },
      createBPFilter: function () {
        return this.createFilter({
          type: 'bandpass',
          frequency: 2500,
          q: 40
        });
      },
      createOverdrive: function () {
        return new OverdriveUnit();
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
