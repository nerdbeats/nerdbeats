window.app.service('AudioFactoryService', [
    'Lodash',
    'AudioContext',
    'AudioBusUnit'
  ],
  function (lodash, ctx, AudioBus) {
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
      createBus: function (input) {
        return new AudioBus(input);
      },
      createGain: function () {
        return this.getContext().createGain();
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
      createDelay: function (options) {
        var node = this.getContext().createDelay();
        options = options || {};

        if (lodash.isNumber(options.delayTime)) {
          node.delayTime.value = options.delayTime;
        }

        return node;
      }
    };
  });
