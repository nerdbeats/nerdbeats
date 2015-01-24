window.app.service('AudioFactoryService', [
    'Lodash',
    'AudioContext',
    'DubDelay'
  ],
  function (lodash, ctx, DubDelay) {
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
      createDubDelay: function (options) {
        var node = new DubDelay();
        options = options || {};

        if (lodash.isNumber(options.delayTime)) {
          node.delayTime.value = options.delayTime;
        }

        return node;
      },
      createDistorion:function (options) {
        var makeDistortionCurve = function () {
            var k = typeof amount === 'number' ? amount : 50,
              n_samples = this.getContext().sampleRate,
              curve = new Float32Array(n_samples),
              deg = Math.PI / 180,
              i = 0,
              x;
            for ( ; i < n_samples; ++i ) {
              x = i * 2 / n_samples - 1;
              curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
            }
            return curve;
          };
        var node = this.getContext().createWaveShaper();
        options = lodash.defaults(options || {}, {
          curve: 400,
          oversample: '4x'
        });

        distortion.curve = makeDistortionCurve.call(this, options.curve);
        distortion.oversample = options.oversample;

        return node;
      }
    };
  });
