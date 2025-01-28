/*! For license information please see 8002.a828a5a4.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [8002],
    {
      './node_modules/@otplib/core/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var HashAlgorithms,
          Buffer = __webpack_require__('./node_modules/buffer/index.js').Buffer
        function objectValues(value) {
          return Object.keys(value).map(key => value[key])
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          ((HashAlgorithms =
            exports.HashAlgorithms || (exports.HashAlgorithms = {})).SHA1 =
            'sha1'),
          (HashAlgorithms.SHA256 = 'sha256'),
          (HashAlgorithms.SHA512 = 'sha512')
        const HASH_ALGORITHMS = objectValues(exports.HashAlgorithms)
        var KeyEncodings
        ;((KeyEncodings =
          exports.KeyEncodings || (exports.KeyEncodings = {})).ASCII = 'ascii'),
          (KeyEncodings.BASE64 = 'base64'),
          (KeyEncodings.HEX = 'hex'),
          (KeyEncodings.LATIN1 = 'latin1'),
          (KeyEncodings.UTF8 = 'utf8')
        const KEY_ENCODINGS = objectValues(exports.KeyEncodings)
        var Strategy
        ;((Strategy = exports.Strategy || (exports.Strategy = {})).HOTP =
          'hotp'),
          (Strategy.TOTP = 'totp')
        const STRATEGY = objectValues(exports.Strategy),
          createDigestPlaceholder = () => {
            throw new Error(
              'Please provide an options.createDigest implementation.'
            )
          }
        function isTokenValid(value) {
          return /^(\d+)$/.test(value)
        }
        function padStart(value, maxLength, fillString) {
          if (value.length >= maxLength) return value
          return `${Array(maxLength + 1).join(fillString)}${value}`.slice(
            -1 * maxLength
          )
        }
        function keyuri(options) {
          const tmpl = `otpauth://${options.type}/{labelPrefix}:{accountName}?secret={secret}{query}`,
            params = []
          if (STRATEGY.indexOf(options.type) < 0)
            throw new Error(
              `Expecting options.type to be one of ${STRATEGY.join(', ')}. Received ${options.type}.`
            )
          if ('hotp' === options.type) {
            if (null == options.counter || 'number' != typeof options.counter)
              throw new Error(
                'Expecting options.counter to be a number when options.type is "hotp".'
              )
            params.push(`&counter=${options.counter}`)
          }
          return (
            'totp' === options.type &&
              options.step &&
              params.push(`&period=${options.step}`),
            options.digits && params.push(`&digits=${options.digits}`),
            options.algorithm &&
              params.push(`&algorithm=${options.algorithm.toUpperCase()}`),
            options.issuer &&
              params.push(`&issuer=${encodeURIComponent(options.issuer)}`),
            tmpl
              .replace(
                '{labelPrefix}',
                encodeURIComponent(options.issuer || options.accountName)
              )
              .replace('{accountName}', encodeURIComponent(options.accountName))
              .replace('{secret}', options.secret)
              .replace('{query}', params.join(''))
          )
        }
        class OTP {
          constructor(defaultOptions = {}) {
            ;(this._defaultOptions = Object.freeze({ ...defaultOptions })),
              (this._options = Object.freeze({}))
          }
          create(defaultOptions = {}) {
            return new OTP(defaultOptions)
          }
          clone(defaultOptions = {}) {
            const instance = this.create({
              ...this._defaultOptions,
              ...defaultOptions,
            })
            return (instance.options = this._options), instance
          }
          get options() {
            return Object.freeze({ ...this._defaultOptions, ...this._options })
          }
          set options(options) {
            this._options = Object.freeze({ ...this._options, ...options })
          }
          allOptions() {
            return this.options
          }
          resetOptions() {
            this._options = Object.freeze({})
          }
        }
        function hotpOptionsValidator(options) {
          if ('function' != typeof options.createDigest)
            throw new Error('Expecting options.createDigest to be a function.')
          if ('function' != typeof options.createHmacKey)
            throw new Error('Expecting options.createHmacKey to be a function.')
          if ('number' != typeof options.digits)
            throw new Error('Expecting options.digits to be a number.')
          if (
            !options.algorithm ||
            HASH_ALGORITHMS.indexOf(options.algorithm) < 0
          )
            throw new Error(
              `Expecting options.algorithm to be one of ${HASH_ALGORITHMS.join(', ')}. Received ${options.algorithm}.`
            )
          if (!options.encoding || KEY_ENCODINGS.indexOf(options.encoding) < 0)
            throw new Error(
              `Expecting options.encoding to be one of ${KEY_ENCODINGS.join(', ')}. Received ${options.encoding}.`
            )
        }
        const hotpCreateHmacKey = (algorithm, secret, encoding) =>
          Buffer.from(secret, encoding).toString('hex')
        function hotpDefaultOptions() {
          return {
            algorithm: exports.HashAlgorithms.SHA1,
            createHmacKey: hotpCreateHmacKey,
            createDigest: createDigestPlaceholder,
            digits: 6,
            encoding: exports.KeyEncodings.ASCII,
          }
        }
        function hotpOptions(opt) {
          const options = { ...hotpDefaultOptions(), ...opt }
          return hotpOptionsValidator(options), Object.freeze(options)
        }
        function hotpCounter(counter) {
          return padStart(counter.toString(16), 16, '0')
        }
        function hotpDigestToToken(hexDigest, digits) {
          const digest = Buffer.from(hexDigest, 'hex'),
            offset = 15 & digest[digest.length - 1],
            token =
              (((127 & digest[offset]) << 24) |
                ((255 & digest[offset + 1]) << 16) |
                ((255 & digest[offset + 2]) << 8) |
                (255 & digest[offset + 3])) %
              Math.pow(10, digits)
          return padStart(String(token), digits, '0')
        }
        function hotpToken(secret, counter, options) {
          const hexDigest =
            options.digest ||
            (function hotpDigest(secret, counter, options) {
              const hexCounter = hotpCounter(counter),
                hmacKey = options.createHmacKey(
                  options.algorithm,
                  secret,
                  options.encoding
                )
              return options.createDigest(
                options.algorithm,
                hmacKey,
                hexCounter
              )
            })(secret, counter, options)
          return hotpDigestToToken(hexDigest, options.digits)
        }
        function hotpCheck(token, secret, counter, options) {
          if (!isTokenValid(token)) return !1
          return token === hotpToken(secret, counter, options)
        }
        function hotpKeyuri(accountName, issuer, secret, counter, options) {
          return keyuri({
            algorithm: options.algorithm,
            digits: options.digits,
            type: exports.Strategy.HOTP,
            accountName,
            counter,
            issuer,
            secret,
          })
        }
        class HOTP extends OTP {
          create(defaultOptions = {}) {
            return new HOTP(defaultOptions)
          }
          allOptions() {
            return hotpOptions(this.options)
          }
          generate(secret, counter) {
            return hotpToken(secret, counter, this.allOptions())
          }
          check(token, secret, counter) {
            return hotpCheck(token, secret, counter, this.allOptions())
          }
          verify(opts) {
            if ('object' != typeof opts)
              throw new Error('Expecting argument 0 of verify to be an object')
            return this.check(opts.token, opts.secret, opts.counter)
          }
          keyuri(accountName, issuer, secret, counter) {
            return hotpKeyuri(
              accountName,
              issuer,
              secret,
              counter,
              this.allOptions()
            )
          }
        }
        function parseWindowBounds(win) {
          if ('number' == typeof win) return [Math.abs(win), Math.abs(win)]
          if (Array.isArray(win)) {
            const [past, future] = win
            if ('number' == typeof past && 'number' == typeof future)
              return [Math.abs(past), Math.abs(future)]
          }
          throw new Error(
            'Expecting options.window to be an number or [number, number].'
          )
        }
        function totpOptionsValidator(options) {
          if (
            (hotpOptionsValidator(options),
            parseWindowBounds(options.window),
            'number' != typeof options.epoch)
          )
            throw new Error('Expecting options.epoch to be a number.')
          if ('number' != typeof options.step)
            throw new Error('Expecting options.step to be a number.')
        }
        const totpPadSecret = (secret, encoding, minLength) => {
            const currentLength = secret.length,
              hexSecret = Buffer.from(secret, encoding).toString('hex')
            if (currentLength < minLength) {
              const newSecret = new Array(minLength - currentLength + 1).join(
                hexSecret
              )
              return Buffer.from(newSecret, 'hex')
                .slice(0, minLength)
                .toString('hex')
            }
            return hexSecret
          },
          totpCreateHmacKey = (algorithm, secret, encoding) => {
            switch (algorithm) {
              case exports.HashAlgorithms.SHA1:
                return totpPadSecret(secret, encoding, 20)
              case exports.HashAlgorithms.SHA256:
                return totpPadSecret(secret, encoding, 32)
              case exports.HashAlgorithms.SHA512:
                return totpPadSecret(secret, encoding, 64)
              default:
                throw new Error(
                  `Expecting algorithm to be one of ${HASH_ALGORITHMS.join(', ')}. Received ${algorithm}.`
                )
            }
          }
        function totpDefaultOptions() {
          return {
            algorithm: exports.HashAlgorithms.SHA1,
            createDigest: createDigestPlaceholder,
            createHmacKey: totpCreateHmacKey,
            digits: 6,
            encoding: exports.KeyEncodings.ASCII,
            epoch: Date.now(),
            step: 30,
            window: 0,
          }
        }
        function totpOptions(opt) {
          const options = { ...totpDefaultOptions(), ...opt }
          return totpOptionsValidator(options), Object.freeze(options)
        }
        function totpCounter(epoch, step) {
          return Math.floor(epoch / step / 1e3)
        }
        function totpToken(secret, options) {
          return hotpToken(
            secret,
            totpCounter(options.epoch, options.step),
            options
          )
        }
        function totpEpochsInWindow(
          epoch,
          direction,
          deltaPerEpoch,
          numOfEpoches
        ) {
          const result = []
          if (0 === numOfEpoches) return result
          for (let i = 1; i <= numOfEpoches; i++) {
            const delta = direction * i * deltaPerEpoch
            result.push(epoch + delta)
          }
          return result
        }
        function totpEpochAvailable(epoch, step, win) {
          const bounds = parseWindowBounds(win),
            delta = 1e3 * step
          return {
            current: epoch,
            past: totpEpochsInWindow(epoch, -1, delta, bounds[0]),
            future: totpEpochsInWindow(epoch, 1, delta, bounds[1]),
          }
        }
        function totpCheck(token, secret, options) {
          if (!isTokenValid(token)) return !1
          return token === totpToken(secret, options)
        }
        function totpCheckByEpoch(epochs, token, secret, options) {
          let position = null
          return (
            epochs.some(
              (epoch, idx) =>
                !!totpCheck(token, secret, { ...options, epoch }) &&
                ((position = idx + 1), !0)
            ),
            position
          )
        }
        function totpCheckWithWindow(token, secret, options) {
          if (totpCheck(token, secret, options)) return 0
          const epochs = totpEpochAvailable(
              options.epoch,
              options.step,
              options.window
            ),
            backward = totpCheckByEpoch(epochs.past, token, secret, options)
          return null !== backward
            ? -1 * backward
            : totpCheckByEpoch(epochs.future, token, secret, options)
        }
        function totpTimeUsed(epoch, step) {
          return Math.floor(epoch / 1e3) % step
        }
        function totpTimeRemaining(epoch, step) {
          return step - totpTimeUsed(epoch, step)
        }
        function totpKeyuri(accountName, issuer, secret, options) {
          return keyuri({
            algorithm: options.algorithm,
            digits: options.digits,
            step: options.step,
            type: exports.Strategy.TOTP,
            accountName,
            issuer,
            secret,
          })
        }
        class TOTP extends HOTP {
          create(defaultOptions = {}) {
            return new TOTP(defaultOptions)
          }
          allOptions() {
            return totpOptions(this.options)
          }
          generate(secret) {
            return totpToken(secret, this.allOptions())
          }
          checkDelta(token, secret) {
            return totpCheckWithWindow(token, secret, this.allOptions())
          }
          check(token, secret) {
            return 'number' == typeof this.checkDelta(token, secret)
          }
          verify(opts) {
            if ('object' != typeof opts)
              throw new Error('Expecting argument 0 of verify to be an object')
            return this.check(opts.token, opts.secret)
          }
          timeRemaining() {
            const options = this.allOptions()
            return totpTimeRemaining(options.epoch, options.step)
          }
          timeUsed() {
            const options = this.allOptions()
            return totpTimeUsed(options.epoch, options.step)
          }
          keyuri(accountName, issuer, secret) {
            return totpKeyuri(accountName, issuer, secret, this.allOptions())
          }
        }
        function authenticatorOptionValidator(options) {
          if (
            (totpOptionsValidator(options),
            'function' != typeof options.keyDecoder)
          )
            throw new Error('Expecting options.keyDecoder to be a function.')
          if (options.keyEncoder && 'function' != typeof options.keyEncoder)
            throw new Error('Expecting options.keyEncoder to be a function.')
        }
        function authenticatorDefaultOptions() {
          return {
            algorithm: exports.HashAlgorithms.SHA1,
            createDigest: createDigestPlaceholder,
            createHmacKey: totpCreateHmacKey,
            digits: 6,
            encoding: exports.KeyEncodings.HEX,
            epoch: Date.now(),
            step: 30,
            window: 0,
          }
        }
        function authenticatorOptions(opt) {
          const options = { ...authenticatorDefaultOptions(), ...opt }
          return authenticatorOptionValidator(options), Object.freeze(options)
        }
        function authenticatorEncoder(secret, options) {
          return options.keyEncoder(secret, options.encoding)
        }
        function authenticatorDecoder(secret, options) {
          return options.keyDecoder(secret, options.encoding)
        }
        function authenticatorGenerateSecret(numberOfBytes, options) {
          return authenticatorEncoder(
            options.createRandomBytes(numberOfBytes, options.encoding),
            options
          )
        }
        function authenticatorToken(secret, options) {
          return totpToken(authenticatorDecoder(secret, options), options)
        }
        function authenticatorCheckWithWindow(token, secret, options) {
          return totpCheckWithWindow(
            token,
            authenticatorDecoder(secret, options),
            options
          )
        }
        class Authenticator extends TOTP {
          create(defaultOptions = {}) {
            return new Authenticator(defaultOptions)
          }
          allOptions() {
            return authenticatorOptions(this.options)
          }
          generate(secret) {
            return authenticatorToken(secret, this.allOptions())
          }
          checkDelta(token, secret) {
            return authenticatorCheckWithWindow(
              token,
              secret,
              this.allOptions()
            )
          }
          encode(secret) {
            return authenticatorEncoder(secret, this.allOptions())
          }
          decode(secret) {
            return authenticatorDecoder(secret, this.allOptions())
          }
          generateSecret(numberOfBytes = 10) {
            return authenticatorGenerateSecret(numberOfBytes, this.allOptions())
          }
        }
        ;(exports.Authenticator = Authenticator),
          (exports.HASH_ALGORITHMS = HASH_ALGORITHMS),
          (exports.HOTP = HOTP),
          (exports.KEY_ENCODINGS = KEY_ENCODINGS),
          (exports.OTP = OTP),
          (exports.STRATEGY = STRATEGY),
          (exports.TOTP = TOTP),
          (exports.authenticatorCheckWithWindow = authenticatorCheckWithWindow),
          (exports.authenticatorDecoder = authenticatorDecoder),
          (exports.authenticatorDefaultOptions = authenticatorDefaultOptions),
          (exports.authenticatorEncoder = authenticatorEncoder),
          (exports.authenticatorGenerateSecret = authenticatorGenerateSecret),
          (exports.authenticatorOptionValidator = authenticatorOptionValidator),
          (exports.authenticatorOptions = authenticatorOptions),
          (exports.authenticatorToken = authenticatorToken),
          (exports.createDigestPlaceholder = createDigestPlaceholder),
          (exports.hotpCheck = hotpCheck),
          (exports.hotpCounter = hotpCounter),
          (exports.hotpCreateHmacKey = hotpCreateHmacKey),
          (exports.hotpDefaultOptions = hotpDefaultOptions),
          (exports.hotpDigestToToken = hotpDigestToToken),
          (exports.hotpKeyuri = hotpKeyuri),
          (exports.hotpOptions = hotpOptions),
          (exports.hotpOptionsValidator = hotpOptionsValidator),
          (exports.hotpToken = hotpToken),
          (exports.isTokenValid = isTokenValid),
          (exports.keyuri = keyuri),
          (exports.objectValues = objectValues),
          (exports.padStart = padStart),
          (exports.totpCheck = totpCheck),
          (exports.totpCheckByEpoch = totpCheckByEpoch),
          (exports.totpCheckWithWindow = totpCheckWithWindow),
          (exports.totpCounter = totpCounter),
          (exports.totpCreateHmacKey = totpCreateHmacKey),
          (exports.totpDefaultOptions = totpDefaultOptions),
          (exports.totpEpochAvailable = totpEpochAvailable),
          (exports.totpKeyuri = totpKeyuri),
          (exports.totpOptions = totpOptions),
          (exports.totpOptionsValidator = totpOptionsValidator),
          (exports.totpPadSecret = totpPadSecret),
          (exports.totpTimeRemaining = totpTimeRemaining),
          (exports.totpTimeUsed = totpTimeUsed),
          (exports.totpToken = totpToken)
      },
      './node_modules/@otplib/plugin-crypto/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
          './node_modules/buffer/index.js'
        ).Buffer
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var crypto = (function _interopDefault(ex) {
          return ex && 'object' == typeof ex && 'default' in ex
            ? ex.default
            : ex
        })(__webpack_require__('./node_modules/crypto-browserify/index.js'))
        ;(exports.createDigest = (algorithm, hmacKey, counter) =>
          crypto
            .createHmac(algorithm, Buffer.from(hmacKey, 'hex'))
            .update(Buffer.from(counter, 'hex'))
            .digest()
            .toString('hex')),
          (exports.createRandomBytes = (size, encoding) =>
            crypto.randomBytes(size).toString(encoding))
      },
      './node_modules/@otplib/plugin-thirty-two/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
          './node_modules/buffer/index.js'
        ).Buffer
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var thirtyTwo = (function _interopDefault(ex) {
          return ex && 'object' == typeof ex && 'default' in ex
            ? ex.default
            : ex
        })(
          __webpack_require__(
            './node_modules/thirty-two/lib/thirty-two/index.js'
          )
        )
        ;(exports.keyDecoder = (encodedSecret, encoding) =>
          thirtyTwo.decode(encodedSecret).toString(encoding)),
          (exports.keyEncoder = (secret, encoding) =>
            thirtyTwo
              .encode(Buffer.from(secret, encoding).toString('ascii'))
              .toString()
              .replace(/=/g, ''))
      },
      './node_modules/@otplib/preset-default/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var pluginCrypto = __webpack_require__(
            './node_modules/@otplib/plugin-crypto/index.js'
          ),
          pluginThirtyTwo = __webpack_require__(
            './node_modules/@otplib/plugin-thirty-two/index.js'
          ),
          core = __webpack_require__('./node_modules/@otplib/core/index.js')
        const hotp = new core.HOTP({ createDigest: pluginCrypto.createDigest }),
          totp = new core.TOTP({ createDigest: pluginCrypto.createDigest }),
          authenticator = new core.Authenticator({
            createDigest: pluginCrypto.createDigest,
            createRandomBytes: pluginCrypto.createRandomBytes,
            keyDecoder: pluginThirtyTwo.keyDecoder,
            keyEncoder: pluginThirtyTwo.keyEncoder,
          })
        ;(exports.authenticator = authenticator),
          (exports.hotp = hotp),
          (exports.totp = totp)
      },
      './node_modules/asn1.js/lib/asn1.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var asn1 = exports
        ;(asn1.bignum = __webpack_require__('./node_modules/bn.js/lib/bn.js')),
          (asn1.define = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/api.js'
          ).define),
          (asn1.base = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/base/index.js'
          )),
          (asn1.constants = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/constants/index.js'
          )),
          (asn1.decoders = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/decoders/index.js'
          )),
          (asn1.encoders = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/encoders/index.js'
          ))
      },
      './node_modules/asn1.js/lib/asn1/api.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var asn1 = __webpack_require__('./node_modules/asn1.js/lib/asn1.js'),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          )
        function Entity(name, body) {
          ;(this.name = name),
            (this.body = body),
            (this.decoders = {}),
            (this.encoders = {})
        }
        ;(exports.define = function define(name, body) {
          return new Entity(name, body)
        }),
          (Entity.prototype._createNamed = function createNamed(base) {
            var named
            try {
              named = __webpack_require__(
                './node_modules/vm-browserify/index.js'
              ).runInThisContext(
                '(function ' +
                  this.name +
                  '(entity) {\n  this._initNamed(entity);\n})'
              )
            } catch (e) {
              named = function (entity) {
                this._initNamed(entity)
              }
            }
            return (
              inherits(named, base),
              (named.prototype._initNamed = function initnamed(entity) {
                base.call(this, entity)
              }),
              new named(this)
            )
          }),
          (Entity.prototype._getDecoder = function _getDecoder(enc) {
            return (
              (enc = enc || 'der'),
              this.decoders.hasOwnProperty(enc) ||
                (this.decoders[enc] = this._createNamed(asn1.decoders[enc])),
              this.decoders[enc]
            )
          }),
          (Entity.prototype.decode = function decode(data, enc, options) {
            return this._getDecoder(enc).decode(data, options)
          }),
          (Entity.prototype._getEncoder = function _getEncoder(enc) {
            return (
              (enc = enc || 'der'),
              this.encoders.hasOwnProperty(enc) ||
                (this.encoders[enc] = this._createNamed(asn1.encoders[enc])),
              this.encoders[enc]
            )
          }),
          (Entity.prototype.encode = function encode(data, enc, reporter) {
            return this._getEncoder(enc).encode(data, reporter)
          })
      },
      './node_modules/asn1.js/lib/asn1/base/buffer.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Reporter = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/base/index.js'
          ).Reporter,
          Buffer = __webpack_require__('./node_modules/buffer/index.js').Buffer
        function DecoderBuffer(base, options) {
          Reporter.call(this, options),
            Buffer.isBuffer(base)
              ? ((this.base = base),
                (this.offset = 0),
                (this.length = base.length))
              : this.error('Input not Buffer')
        }
        function EncoderBuffer(value, reporter) {
          if (Array.isArray(value))
            (this.length = 0),
              (this.value = value.map(function (item) {
                return (
                  item instanceof EncoderBuffer ||
                    (item = new EncoderBuffer(item, reporter)),
                  (this.length += item.length),
                  item
                )
              }, this))
          else if ('number' == typeof value) {
            if (!(0 <= value && value <= 255))
              return reporter.error('non-byte EncoderBuffer value')
            ;(this.value = value), (this.length = 1)
          } else if ('string' == typeof value)
            (this.value = value), (this.length = Buffer.byteLength(value))
          else {
            if (!Buffer.isBuffer(value))
              return reporter.error('Unsupported type: ' + typeof value)
            ;(this.value = value), (this.length = value.length)
          }
        }
        inherits(DecoderBuffer, Reporter),
          (exports.t = DecoderBuffer),
          (DecoderBuffer.prototype.save = function save() {
            return {
              offset: this.offset,
              reporter: Reporter.prototype.save.call(this),
            }
          }),
          (DecoderBuffer.prototype.restore = function restore(save) {
            var res = new DecoderBuffer(this.base)
            return (
              (res.offset = save.offset),
              (res.length = this.offset),
              (this.offset = save.offset),
              Reporter.prototype.restore.call(this, save.reporter),
              res
            )
          }),
          (DecoderBuffer.prototype.isEmpty = function isEmpty() {
            return this.offset === this.length
          }),
          (DecoderBuffer.prototype.readUInt8 = function readUInt8(fail) {
            return this.offset + 1 <= this.length
              ? this.base.readUInt8(this.offset++, !0)
              : this.error(fail || 'DecoderBuffer overrun')
          }),
          (DecoderBuffer.prototype.skip = function skip(bytes, fail) {
            if (!(this.offset + bytes <= this.length))
              return this.error(fail || 'DecoderBuffer overrun')
            var res = new DecoderBuffer(this.base)
            return (
              (res._reporterState = this._reporterState),
              (res.offset = this.offset),
              (res.length = this.offset + bytes),
              (this.offset += bytes),
              res
            )
          }),
          (DecoderBuffer.prototype.raw = function raw(save) {
            return this.base.slice(
              save ? save.offset : this.offset,
              this.length
            )
          }),
          (exports.d = EncoderBuffer),
          (EncoderBuffer.prototype.join = function join(out, offset) {
            return (
              out || (out = new Buffer(this.length)),
              offset || (offset = 0),
              0 === this.length ||
                (Array.isArray(this.value)
                  ? this.value.forEach(function (item) {
                      item.join(out, offset), (offset += item.length)
                    })
                  : ('number' == typeof this.value
                      ? (out[offset] = this.value)
                      : 'string' == typeof this.value
                        ? out.write(this.value, offset)
                        : Buffer.isBuffer(this.value) &&
                          this.value.copy(out, offset),
                    (offset += this.length))),
              out
            )
          })
      },
      './node_modules/asn1.js/lib/asn1/base/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var base = exports
        ;(base.Reporter = __webpack_require__(
          './node_modules/asn1.js/lib/asn1/base/reporter.js'
        ).a),
          (base.DecoderBuffer = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/base/buffer.js'
          ).t),
          (base.EncoderBuffer = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/base/buffer.js'
          ).d),
          (base.Node = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/base/node.js'
          ))
      },
      './node_modules/asn1.js/lib/asn1/base/node.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Reporter = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/base/index.js'
          ).Reporter,
          EncoderBuffer = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/base/index.js'
          ).EncoderBuffer,
          DecoderBuffer = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/base/index.js'
          ).DecoderBuffer,
          assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          ),
          tags = [
            'seq',
            'seqof',
            'set',
            'setof',
            'objid',
            'bool',
            'gentime',
            'utctime',
            'null_',
            'enum',
            'int',
            'objDesc',
            'bitstr',
            'bmpstr',
            'charstr',
            'genstr',
            'graphstr',
            'ia5str',
            'iso646str',
            'numstr',
            'octstr',
            'printstr',
            't61str',
            'unistr',
            'utf8str',
            'videostr',
          ],
          methods = [
            'key',
            'obj',
            'use',
            'optional',
            'explicit',
            'implicit',
            'def',
            'choice',
            'any',
            'contains',
          ].concat(tags)
        function Node(enc, parent) {
          var state = {}
          ;(this._baseState = state),
            (state.enc = enc),
            (state.parent = parent || null),
            (state.children = null),
            (state.tag = null),
            (state.args = null),
            (state.reverseArgs = null),
            (state.choice = null),
            (state.optional = !1),
            (state.any = !1),
            (state.obj = !1),
            (state.use = null),
            (state.useDecoder = null),
            (state.key = null),
            (state.default = null),
            (state.explicit = null),
            (state.implicit = null),
            (state.contains = null),
            state.parent || ((state.children = []), this._wrap())
        }
        module.exports = Node
        var stateProps = [
          'enc',
          'parent',
          'children',
          'tag',
          'args',
          'reverseArgs',
          'choice',
          'optional',
          'any',
          'obj',
          'use',
          'alteredUse',
          'key',
          'default',
          'explicit',
          'implicit',
          'contains',
        ]
        ;(Node.prototype.clone = function clone() {
          var state = this._baseState,
            cstate = {}
          stateProps.forEach(function (prop) {
            cstate[prop] = state[prop]
          })
          var res = new this.constructor(cstate.parent)
          return (res._baseState = cstate), res
        }),
          (Node.prototype._wrap = function wrap() {
            var state = this._baseState
            methods.forEach(function (method) {
              this[method] = function _wrappedMethod() {
                var clone = new this.constructor(this)
                return (
                  state.children.push(clone),
                  clone[method].apply(clone, arguments)
                )
              }
            }, this)
          }),
          (Node.prototype._init = function init(body) {
            var state = this._baseState
            assert(null === state.parent),
              body.call(this),
              (state.children = state.children.filter(function (child) {
                return child._baseState.parent === this
              }, this)),
              assert.equal(
                state.children.length,
                1,
                'Root node can have only one child'
              )
          }),
          (Node.prototype._useArgs = function useArgs(args) {
            var state = this._baseState,
              children = args.filter(function (arg) {
                return arg instanceof this.constructor
              }, this)
            ;(args = args.filter(function (arg) {
              return !(arg instanceof this.constructor)
            }, this)),
              0 !== children.length &&
                (assert(null === state.children),
                (state.children = children),
                children.forEach(function (child) {
                  child._baseState.parent = this
                }, this)),
              0 !== args.length &&
                (assert(null === state.args),
                (state.args = args),
                (state.reverseArgs = args.map(function (arg) {
                  if ('object' != typeof arg || arg.constructor !== Object)
                    return arg
                  var res = {}
                  return (
                    Object.keys(arg).forEach(function (key) {
                      key == (0 | key) && (key |= 0)
                      var value = arg[key]
                      res[value] = key
                    }),
                    res
                  )
                })))
          }),
          [
            '_peekTag',
            '_decodeTag',
            '_use',
            '_decodeStr',
            '_decodeObjid',
            '_decodeTime',
            '_decodeNull',
            '_decodeInt',
            '_decodeBool',
            '_decodeList',
            '_encodeComposite',
            '_encodeStr',
            '_encodeObjid',
            '_encodeTime',
            '_encodeNull',
            '_encodeInt',
            '_encodeBool',
          ].forEach(function (method) {
            Node.prototype[method] = function _overrided() {
              var state = this._baseState
              throw new Error(
                method + ' not implemented for encoding: ' + state.enc
              )
            }
          }),
          tags.forEach(function (tag) {
            Node.prototype[tag] = function _tagMethod() {
              var state = this._baseState,
                args = Array.prototype.slice.call(arguments)
              return (
                assert(null === state.tag),
                (state.tag = tag),
                this._useArgs(args),
                this
              )
            }
          }),
          (Node.prototype.use = function use(item) {
            assert(item)
            var state = this._baseState
            return assert(null === state.use), (state.use = item), this
          }),
          (Node.prototype.optional = function optional() {
            return (this._baseState.optional = !0), this
          }),
          (Node.prototype.def = function def(val) {
            var state = this._baseState
            return (
              assert(null === state.default),
              (state.default = val),
              (state.optional = !0),
              this
            )
          }),
          (Node.prototype.explicit = function explicit(num) {
            var state = this._baseState
            return (
              assert(null === state.explicit && null === state.implicit),
              (state.explicit = num),
              this
            )
          }),
          (Node.prototype.implicit = function implicit(num) {
            var state = this._baseState
            return (
              assert(null === state.explicit && null === state.implicit),
              (state.implicit = num),
              this
            )
          }),
          (Node.prototype.obj = function obj() {
            var state = this._baseState,
              args = Array.prototype.slice.call(arguments)
            return (
              (state.obj = !0), 0 !== args.length && this._useArgs(args), this
            )
          }),
          (Node.prototype.key = function key(newKey) {
            var state = this._baseState
            return assert(null === state.key), (state.key = newKey), this
          }),
          (Node.prototype.any = function any() {
            return (this._baseState.any = !0), this
          }),
          (Node.prototype.choice = function choice(obj) {
            var state = this._baseState
            return (
              assert(null === state.choice),
              (state.choice = obj),
              this._useArgs(
                Object.keys(obj).map(function (key) {
                  return obj[key]
                })
              ),
              this
            )
          }),
          (Node.prototype.contains = function contains(item) {
            var state = this._baseState
            return assert(null === state.use), (state.contains = item), this
          }),
          (Node.prototype._decode = function decode(input, options) {
            var state = this._baseState
            if (null === state.parent)
              return input.wrapResult(state.children[0]._decode(input, options))
            var prevObj,
              result = state.default,
              present = !0,
              prevKey = null
            if (
              (null !== state.key && (prevKey = input.enterKey(state.key)),
              state.optional)
            ) {
              var tag = null
              if (
                (null !== state.explicit
                  ? (tag = state.explicit)
                  : null !== state.implicit
                    ? (tag = state.implicit)
                    : null !== state.tag && (tag = state.tag),
                null !== tag || state.any)
              ) {
                if (
                  ((present = this._peekTag(input, tag, state.any)),
                  input.isError(present))
                )
                  return present
              } else {
                var save = input.save()
                try {
                  null === state.choice
                    ? this._decodeGeneric(state.tag, input, options)
                    : this._decodeChoice(input, options),
                    (present = !0)
                } catch (e) {
                  present = !1
                }
                input.restore(save)
              }
            }
            if (
              (state.obj && present && (prevObj = input.enterObject()), present)
            ) {
              if (null !== state.explicit) {
                var explicit = this._decodeTag(input, state.explicit)
                if (input.isError(explicit)) return explicit
                input = explicit
              }
              var start = input.offset
              if (null === state.use && null === state.choice) {
                if (state.any) save = input.save()
                var body = this._decodeTag(
                  input,
                  null !== state.implicit ? state.implicit : state.tag,
                  state.any
                )
                if (input.isError(body)) return body
                state.any ? (result = input.raw(save)) : (input = body)
              }
              if (
                (options &&
                  options.track &&
                  null !== state.tag &&
                  options.track(input.path(), start, input.length, 'tagged'),
                options &&
                  options.track &&
                  null !== state.tag &&
                  options.track(
                    input.path(),
                    input.offset,
                    input.length,
                    'content'
                  ),
                state.any ||
                  (result =
                    null === state.choice
                      ? this._decodeGeneric(state.tag, input, options)
                      : this._decodeChoice(input, options)),
                input.isError(result))
              )
                return result
              if (
                (state.any ||
                  null !== state.choice ||
                  null === state.children ||
                  state.children.forEach(function decodeChildren(child) {
                    child._decode(input, options)
                  }),
                state.contains &&
                  ('octstr' === state.tag || 'bitstr' === state.tag))
              ) {
                var data = new DecoderBuffer(result)
                result = this._getUse(
                  state.contains,
                  input._reporterState.obj
                )._decode(data, options)
              }
            }
            return (
              state.obj && present && (result = input.leaveObject(prevObj)),
              null === state.key || (null === result && !0 !== present)
                ? null !== prevKey && input.exitKey(prevKey)
                : input.leaveKey(prevKey, state.key, result),
              result
            )
          }),
          (Node.prototype._decodeGeneric = function decodeGeneric(
            tag,
            input,
            options
          ) {
            var state = this._baseState
            return 'seq' === tag || 'set' === tag
              ? null
              : 'seqof' === tag || 'setof' === tag
                ? this._decodeList(input, tag, state.args[0], options)
                : /str$/.test(tag)
                  ? this._decodeStr(input, tag, options)
                  : 'objid' === tag && state.args
                    ? this._decodeObjid(
                        input,
                        state.args[0],
                        state.args[1],
                        options
                      )
                    : 'objid' === tag
                      ? this._decodeObjid(input, null, null, options)
                      : 'gentime' === tag || 'utctime' === tag
                        ? this._decodeTime(input, tag, options)
                        : 'null_' === tag
                          ? this._decodeNull(input, options)
                          : 'bool' === tag
                            ? this._decodeBool(input, options)
                            : 'objDesc' === tag
                              ? this._decodeStr(input, tag, options)
                              : 'int' === tag || 'enum' === tag
                                ? this._decodeInt(
                                    input,
                                    state.args && state.args[0],
                                    options
                                  )
                                : null !== state.use
                                  ? this._getUse(
                                      state.use,
                                      input._reporterState.obj
                                    )._decode(input, options)
                                  : input.error('unknown tag: ' + tag)
          }),
          (Node.prototype._getUse = function _getUse(entity, obj) {
            var state = this._baseState
            return (
              (state.useDecoder = this._use(entity, obj)),
              assert(null === state.useDecoder._baseState.parent),
              (state.useDecoder = state.useDecoder._baseState.children[0]),
              state.implicit !== state.useDecoder._baseState.implicit &&
                ((state.useDecoder = state.useDecoder.clone()),
                (state.useDecoder._baseState.implicit = state.implicit)),
              state.useDecoder
            )
          }),
          (Node.prototype._decodeChoice = function decodeChoice(
            input,
            options
          ) {
            var state = this._baseState,
              result = null,
              match = !1
            return (
              Object.keys(state.choice).some(function (key) {
                var save = input.save(),
                  node = state.choice[key]
                try {
                  var value = node._decode(input, options)
                  if (input.isError(value)) return !1
                  ;(result = { type: key, value }), (match = !0)
                } catch (e) {
                  return input.restore(save), !1
                }
                return !0
              }, this),
              match ? result : input.error('Choice not matched')
            )
          }),
          (Node.prototype._createEncoderBuffer = function createEncoderBuffer(
            data
          ) {
            return new EncoderBuffer(data, this.reporter)
          }),
          (Node.prototype._encode = function encode(data, reporter, parent) {
            var state = this._baseState
            if (null === state.default || state.default !== data) {
              var result = this._encodeValue(data, reporter, parent)
              if (
                void 0 !== result &&
                !this._skipDefault(result, reporter, parent)
              )
                return result
            }
          }),
          (Node.prototype._encodeValue = function encode(
            data,
            reporter,
            parent
          ) {
            var state = this._baseState
            if (null === state.parent)
              return state.children[0]._encode(data, reporter || new Reporter())
            var result = null
            if (
              ((this.reporter = reporter), state.optional && void 0 === data)
            ) {
              if (null === state.default) return
              data = state.default
            }
            var content = null,
              primitive = !1
            if (state.any) result = this._createEncoderBuffer(data)
            else if (state.choice) result = this._encodeChoice(data, reporter)
            else if (state.contains)
              (content = this._getUse(state.contains, parent)._encode(
                data,
                reporter
              )),
                (primitive = !0)
            else if (state.children)
              (content = state.children
                .map(function (child) {
                  if ('null_' === child._baseState.tag)
                    return child._encode(null, reporter, data)
                  if (null === child._baseState.key)
                    return reporter.error('Child should have a key')
                  var prevKey = reporter.enterKey(child._baseState.key)
                  if ('object' != typeof data)
                    return reporter.error(
                      'Child expected, but input is not object'
                    )
                  var res = child._encode(
                    data[child._baseState.key],
                    reporter,
                    data
                  )
                  return reporter.leaveKey(prevKey), res
                }, this)
                .filter(function (child) {
                  return child
                })),
                (content = this._createEncoderBuffer(content))
            else if ('seqof' === state.tag || 'setof' === state.tag) {
              if (!state.args || 1 !== state.args.length)
                return reporter.error('Too many args for : ' + state.tag)
              if (!Array.isArray(data))
                return reporter.error('seqof/setof, but data is not Array')
              var child = this.clone()
              ;(child._baseState.implicit = null),
                (content = this._createEncoderBuffer(
                  data.map(function (item) {
                    var state = this._baseState
                    return this._getUse(state.args[0], data)._encode(
                      item,
                      reporter
                    )
                  }, child)
                ))
            } else
              null !== state.use
                ? (result = this._getUse(state.use, parent)._encode(
                    data,
                    reporter
                  ))
                : ((content = this._encodePrimitive(state.tag, data)),
                  (primitive = !0))
            if (!state.any && null === state.choice) {
              var tag = null !== state.implicit ? state.implicit : state.tag,
                cls = null === state.implicit ? 'universal' : 'context'
              null === tag
                ? null === state.use &&
                  reporter.error('Tag could be omitted only for .use()')
                : null === state.use &&
                  (result = this._encodeComposite(tag, primitive, cls, content))
            }
            return (
              null !== state.explicit &&
                (result = this._encodeComposite(
                  state.explicit,
                  !1,
                  'context',
                  result
                )),
              result
            )
          }),
          (Node.prototype._encodeChoice = function encodeChoice(
            data,
            reporter
          ) {
            var state = this._baseState,
              node = state.choice[data.type]
            return (
              node ||
                assert(
                  !1,
                  data.type +
                    ' not found in ' +
                    JSON.stringify(Object.keys(state.choice))
                ),
              node._encode(data.value, reporter)
            )
          }),
          (Node.prototype._encodePrimitive = function encodePrimitive(
            tag,
            data
          ) {
            var state = this._baseState
            if (/str$/.test(tag)) return this._encodeStr(data, tag)
            if ('objid' === tag && state.args)
              return this._encodeObjid(
                data,
                state.reverseArgs[0],
                state.args[1]
              )
            if ('objid' === tag) return this._encodeObjid(data, null, null)
            if ('gentime' === tag || 'utctime' === tag)
              return this._encodeTime(data, tag)
            if ('null_' === tag) return this._encodeNull()
            if ('int' === tag || 'enum' === tag)
              return this._encodeInt(data, state.args && state.reverseArgs[0])
            if ('bool' === tag) return this._encodeBool(data)
            if ('objDesc' === tag) return this._encodeStr(data, tag)
            throw new Error('Unsupported tag: ' + tag)
          }),
          (Node.prototype._isNumstr = function isNumstr(str) {
            return /^[0-9 ]*$/.test(str)
          }),
          (Node.prototype._isPrintstr = function isPrintstr(str) {
            return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(str)
          })
      },
      './node_modules/asn1.js/lib/asn1/base/reporter.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
          './node_modules/inherits/inherits_browser.js'
        )
        function Reporter(options) {
          this._reporterState = {
            obj: null,
            path: [],
            options: options || {},
            errors: [],
          }
        }
        function ReporterError(path, msg) {
          ;(this.path = path), this.rethrow(msg)
        }
        ;(exports.a = Reporter),
          (Reporter.prototype.isError = function isError(obj) {
            return obj instanceof ReporterError
          }),
          (Reporter.prototype.save = function save() {
            var state = this._reporterState
            return { obj: state.obj, pathLen: state.path.length }
          }),
          (Reporter.prototype.restore = function restore(data) {
            var state = this._reporterState
            ;(state.obj = data.obj),
              (state.path = state.path.slice(0, data.pathLen))
          }),
          (Reporter.prototype.enterKey = function enterKey(key) {
            return this._reporterState.path.push(key)
          }),
          (Reporter.prototype.exitKey = function exitKey(index) {
            var state = this._reporterState
            state.path = state.path.slice(0, index - 1)
          }),
          (Reporter.prototype.leaveKey = function leaveKey(index, key, value) {
            var state = this._reporterState
            this.exitKey(index), null !== state.obj && (state.obj[key] = value)
          }),
          (Reporter.prototype.path = function path() {
            return this._reporterState.path.join('/')
          }),
          (Reporter.prototype.enterObject = function enterObject() {
            var state = this._reporterState,
              prev = state.obj
            return (state.obj = {}), prev
          }),
          (Reporter.prototype.leaveObject = function leaveObject(prev) {
            var state = this._reporterState,
              now = state.obj
            return (state.obj = prev), now
          }),
          (Reporter.prototype.error = function error(msg) {
            var err,
              state = this._reporterState,
              inherited = msg instanceof ReporterError
            if (
              ((err = inherited
                ? msg
                : new ReporterError(
                    state.path
                      .map(function (elem) {
                        return '[' + JSON.stringify(elem) + ']'
                      })
                      .join(''),
                    msg.message || msg,
                    msg.stack
                  )),
              !state.options.partial)
            )
              throw err
            return inherited || state.errors.push(err), err
          }),
          (Reporter.prototype.wrapResult = function wrapResult(result) {
            var state = this._reporterState
            return state.options.partial
              ? {
                  result: this.isError(result) ? null : result,
                  errors: state.errors,
                }
              : result
          }),
          inherits(ReporterError, Error),
          (ReporterError.prototype.rethrow = function rethrow(msg) {
            if (
              ((this.message = msg + ' at: ' + (this.path || '(shallow)')),
              Error.captureStackTrace &&
                Error.captureStackTrace(this, ReporterError),
              !this.stack)
            )
              try {
                throw new Error(this.message)
              } catch (e) {
                this.stack = e.stack
              }
            return this
          })
      },
      './node_modules/asn1.js/lib/asn1/constants/der.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var constants = __webpack_require__(
          './node_modules/asn1.js/lib/asn1/constants/index.js'
        )
        ;(exports.tagClass = {
          0: 'universal',
          1: 'application',
          2: 'context',
          3: 'private',
        }),
          (exports.tagClassByName = constants._reverse(exports.tagClass)),
          (exports.tag = {
            0: 'end',
            1: 'bool',
            2: 'int',
            3: 'bitstr',
            4: 'octstr',
            5: 'null_',
            6: 'objid',
            7: 'objDesc',
            8: 'external',
            9: 'real',
            10: 'enum',
            11: 'embed',
            12: 'utf8str',
            13: 'relativeOid',
            16: 'seq',
            17: 'set',
            18: 'numstr',
            19: 'printstr',
            20: 't61str',
            21: 'videostr',
            22: 'ia5str',
            23: 'utctime',
            24: 'gentime',
            25: 'graphstr',
            26: 'iso646str',
            27: 'genstr',
            28: 'unistr',
            29: 'charstr',
            30: 'bmpstr',
          }),
          (exports.tagByName = constants._reverse(exports.tag))
      },
      './node_modules/asn1.js/lib/asn1/constants/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var constants = exports
        ;(constants._reverse = function reverse(map) {
          var res = {}
          return (
            Object.keys(map).forEach(function (key) {
              ;(0 | key) == key && (key |= 0)
              var value = map[key]
              res[value] = key
            }),
            res
          )
        }),
          (constants.der = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/constants/der.js'
          ))
      },
      './node_modules/asn1.js/lib/asn1/decoders/der.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          asn1 = __webpack_require__('./node_modules/asn1.js/lib/asn1.js'),
          base = asn1.base,
          bignum = asn1.bignum,
          der = asn1.constants.der
        function DERDecoder(entity) {
          ;(this.enc = 'der'),
            (this.name = entity.name),
            (this.entity = entity),
            (this.tree = new DERNode()),
            this.tree._init(entity.body)
        }
        function DERNode(parent) {
          base.Node.call(this, 'der', parent)
        }
        function derDecodeTag(buf, fail) {
          var tag = buf.readUInt8(fail)
          if (buf.isError(tag)) return tag
          var cls = der.tagClass[tag >> 6],
            primitive = !(32 & tag)
          if (31 & ~tag) tag &= 31
          else {
            var oct = tag
            for (tag = 0; !(128 & ~oct); ) {
              if (((oct = buf.readUInt8(fail)), buf.isError(oct))) return oct
              ;(tag <<= 7), (tag |= 127 & oct)
            }
          }
          return { cls, primitive, tag, tagStr: der.tag[tag] }
        }
        function derDecodeLen(buf, primitive, fail) {
          var len = buf.readUInt8(fail)
          if (buf.isError(len)) return len
          if (!primitive && 128 === len) return null
          if (!(128 & len)) return len
          var num = 127 & len
          if (num > 4) return buf.error('length octect is too long')
          len = 0
          for (var i = 0; i < num; i++) {
            len <<= 8
            var j = buf.readUInt8(fail)
            if (buf.isError(j)) return j
            len |= j
          }
          return len
        }
        ;(module.exports = DERDecoder),
          (DERDecoder.prototype.decode = function decode(data, options) {
            return (
              data instanceof base.DecoderBuffer ||
                (data = new base.DecoderBuffer(data, options)),
              this.tree._decode(data, options)
            )
          }),
          inherits(DERNode, base.Node),
          (DERNode.prototype._peekTag = function peekTag(buffer, tag, any) {
            if (buffer.isEmpty()) return !1
            var state = buffer.save(),
              decodedTag = derDecodeTag(
                buffer,
                'Failed to peek tag: "' + tag + '"'
              )
            return buffer.isError(decodedTag)
              ? decodedTag
              : (buffer.restore(state),
                decodedTag.tag === tag ||
                  decodedTag.tagStr === tag ||
                  decodedTag.tagStr + 'of' === tag ||
                  any)
          }),
          (DERNode.prototype._decodeTag = function decodeTag(buffer, tag, any) {
            var decodedTag = derDecodeTag(
              buffer,
              'Failed to decode tag of "' + tag + '"'
            )
            if (buffer.isError(decodedTag)) return decodedTag
            var len = derDecodeLen(
              buffer,
              decodedTag.primitive,
              'Failed to get length of "' + tag + '"'
            )
            if (buffer.isError(len)) return len
            if (
              !any &&
              decodedTag.tag !== tag &&
              decodedTag.tagStr !== tag &&
              decodedTag.tagStr + 'of' !== tag
            )
              return buffer.error('Failed to match tag: "' + tag + '"')
            if (decodedTag.primitive || null !== len)
              return buffer.skip(len, 'Failed to match body of: "' + tag + '"')
            var state = buffer.save(),
              res = this._skipUntilEnd(
                buffer,
                'Failed to skip indefinite length body: "' + this.tag + '"'
              )
            return buffer.isError(res)
              ? res
              : ((len = buffer.offset - state.offset),
                buffer.restore(state),
                buffer.skip(len, 'Failed to match body of: "' + tag + '"'))
          }),
          (DERNode.prototype._skipUntilEnd = function skipUntilEnd(
            buffer,
            fail
          ) {
            for (;;) {
              var tag = derDecodeTag(buffer, fail)
              if (buffer.isError(tag)) return tag
              var res,
                len = derDecodeLen(buffer, tag.primitive, fail)
              if (buffer.isError(len)) return len
              if (
                ((res =
                  tag.primitive || null !== len
                    ? buffer.skip(len)
                    : this._skipUntilEnd(buffer, fail)),
                buffer.isError(res))
              )
                return res
              if ('end' === tag.tagStr) break
            }
          }),
          (DERNode.prototype._decodeList = function decodeList(
            buffer,
            tag,
            decoder,
            options
          ) {
            for (var result = []; !buffer.isEmpty(); ) {
              var possibleEnd = this._peekTag(buffer, 'end')
              if (buffer.isError(possibleEnd)) return possibleEnd
              var res = decoder.decode(buffer, 'der', options)
              if (buffer.isError(res) && possibleEnd) break
              result.push(res)
            }
            return result
          }),
          (DERNode.prototype._decodeStr = function decodeStr(buffer, tag) {
            if ('bitstr' === tag) {
              var unused = buffer.readUInt8()
              return buffer.isError(unused)
                ? unused
                : { unused, data: buffer.raw() }
            }
            if ('bmpstr' === tag) {
              var raw = buffer.raw()
              if (raw.length % 2 == 1)
                return buffer.error(
                  'Decoding of string type: bmpstr length mismatch'
                )
              for (var str = '', i = 0; i < raw.length / 2; i++)
                str += String.fromCharCode(raw.readUInt16BE(2 * i))
              return str
            }
            if ('numstr' === tag) {
              var numstr = buffer.raw().toString('ascii')
              return this._isNumstr(numstr)
                ? numstr
                : buffer.error(
                    'Decoding of string type: numstr unsupported characters'
                  )
            }
            if ('octstr' === tag) return buffer.raw()
            if ('objDesc' === tag) return buffer.raw()
            if ('printstr' === tag) {
              var printstr = buffer.raw().toString('ascii')
              return this._isPrintstr(printstr)
                ? printstr
                : buffer.error(
                    'Decoding of string type: printstr unsupported characters'
                  )
            }
            return /str$/.test(tag)
              ? buffer.raw().toString()
              : buffer.error('Decoding of string type: ' + tag + ' unsupported')
          }),
          (DERNode.prototype._decodeObjid = function decodeObjid(
            buffer,
            values,
            relative
          ) {
            for (var result, identifiers = [], ident = 0; !buffer.isEmpty(); ) {
              var subident = buffer.readUInt8()
              ;(ident <<= 7),
                (ident |= 127 & subident),
                128 & subident || (identifiers.push(ident), (ident = 0))
            }
            128 & subident && identifiers.push(ident)
            var first = (identifiers[0] / 40) | 0,
              second = identifiers[0] % 40
            if (
              ((result = relative
                ? identifiers
                : [first, second].concat(identifiers.slice(1))),
              values)
            ) {
              var tmp = values[result.join(' ')]
              void 0 === tmp && (tmp = values[result.join('.')]),
                void 0 !== tmp && (result = tmp)
            }
            return result
          }),
          (DERNode.prototype._decodeTime = function decodeTime(buffer, tag) {
            var str = buffer.raw().toString()
            if ('gentime' === tag)
              var year = 0 | str.slice(0, 4),
                mon = 0 | str.slice(4, 6),
                day = 0 | str.slice(6, 8),
                hour = 0 | str.slice(8, 10),
                min = 0 | str.slice(10, 12),
                sec = 0 | str.slice(12, 14)
            else {
              if ('utctime' !== tag)
                return buffer.error(
                  'Decoding ' + tag + ' time is not supported yet'
                )
              ;(year = 0 | str.slice(0, 2)),
                (mon = 0 | str.slice(2, 4)),
                (day = 0 | str.slice(4, 6)),
                (hour = 0 | str.slice(6, 8)),
                (min = 0 | str.slice(8, 10)),
                (sec = 0 | str.slice(10, 12))
              year = year < 70 ? 2e3 + year : 1900 + year
            }
            return Date.UTC(year, mon - 1, day, hour, min, sec, 0)
          }),
          (DERNode.prototype._decodeNull = function decodeNull(buffer) {
            return null
          }),
          (DERNode.prototype._decodeBool = function decodeBool(buffer) {
            var res = buffer.readUInt8()
            return buffer.isError(res) ? res : 0 !== res
          }),
          (DERNode.prototype._decodeInt = function decodeInt(buffer, values) {
            var raw = buffer.raw(),
              res = new bignum(raw)
            return values && (res = values[res.toString(10)] || res), res
          }),
          (DERNode.prototype._use = function use(entity, obj) {
            return (
              'function' == typeof entity && (entity = entity(obj)),
              entity._getDecoder('der').tree
            )
          })
      },
      './node_modules/asn1.js/lib/asn1/decoders/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var decoders = exports
        ;(decoders.der = __webpack_require__(
          './node_modules/asn1.js/lib/asn1/decoders/der.js'
        )),
          (decoders.pem = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/decoders/pem.js'
          ))
      },
      './node_modules/asn1.js/lib/asn1/decoders/pem.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Buffer = __webpack_require__('./node_modules/buffer/index.js').Buffer,
          DERDecoder = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/decoders/der.js'
          )
        function PEMDecoder(entity) {
          DERDecoder.call(this, entity), (this.enc = 'pem')
        }
        inherits(PEMDecoder, DERDecoder),
          (module.exports = PEMDecoder),
          (PEMDecoder.prototype.decode = function decode(data, options) {
            for (
              var lines = data.toString().split(/[\r\n]+/g),
                label = options.label.toUpperCase(),
                re = /^-----(BEGIN|END) ([^-]+)-----$/,
                start = -1,
                end = -1,
                i = 0;
              i < lines.length;
              i++
            ) {
              var match = lines[i].match(re)
              if (null !== match && match[2] === label) {
                if (-1 !== start) {
                  if ('END' !== match[1]) break
                  end = i
                  break
                }
                if ('BEGIN' !== match[1]) break
                start = i
              }
            }
            if (-1 === start || -1 === end)
              throw new Error('PEM section not found for: ' + label)
            var base64 = lines.slice(start + 1, end).join('')
            base64.replace(/[^a-z0-9\+\/=]+/gi, '')
            var input = new Buffer(base64, 'base64')
            return DERDecoder.prototype.decode.call(this, input, options)
          })
      },
      './node_modules/asn1.js/lib/asn1/encoders/der.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Buffer = __webpack_require__('./node_modules/buffer/index.js').Buffer,
          asn1 = __webpack_require__('./node_modules/asn1.js/lib/asn1.js'),
          base = asn1.base,
          der = asn1.constants.der
        function DEREncoder(entity) {
          ;(this.enc = 'der'),
            (this.name = entity.name),
            (this.entity = entity),
            (this.tree = new DERNode()),
            this.tree._init(entity.body)
        }
        function DERNode(parent) {
          base.Node.call(this, 'der', parent)
        }
        function two(num) {
          return num < 10 ? '0' + num : num
        }
        ;(module.exports = DEREncoder),
          (DEREncoder.prototype.encode = function encode(data, reporter) {
            return this.tree._encode(data, reporter).join()
          }),
          inherits(DERNode, base.Node),
          (DERNode.prototype._encodeComposite = function encodeComposite(
            tag,
            primitive,
            cls,
            content
          ) {
            var header,
              encodedTag = (function encodeTag(tag, primitive, cls, reporter) {
                var res
                'seqof' === tag
                  ? (tag = 'seq')
                  : 'setof' === tag && (tag = 'set')
                if (der.tagByName.hasOwnProperty(tag)) res = der.tagByName[tag]
                else {
                  if ('number' != typeof tag || (0 | tag) !== tag)
                    return reporter.error('Unknown tag: ' + tag)
                  res = tag
                }
                if (res >= 31)
                  return reporter.error('Multi-octet tag encoding unsupported')
                primitive || (res |= 32)
                return (res |= der.tagClassByName[cls || 'universal'] << 6), res
              })(tag, primitive, cls, this.reporter)
            if (content.length < 128)
              return (
                ((header = new Buffer(2))[0] = encodedTag),
                (header[1] = content.length),
                this._createEncoderBuffer([header, content])
              )
            for (var lenOctets = 1, i = content.length; i >= 256; i >>= 8)
              lenOctets++
            ;((header = new Buffer(2 + lenOctets))[0] = encodedTag),
              (header[1] = 128 | lenOctets)
            i = 1 + lenOctets
            for (var j = content.length; j > 0; i--, j >>= 8)
              header[i] = 255 & j
            return this._createEncoderBuffer([header, content])
          }),
          (DERNode.prototype._encodeStr = function encodeStr(str, tag) {
            if ('bitstr' === tag)
              return this._createEncoderBuffer([0 | str.unused, str.data])
            if ('bmpstr' === tag) {
              for (
                var buf = new Buffer(2 * str.length), i = 0;
                i < str.length;
                i++
              )
                buf.writeUInt16BE(str.charCodeAt(i), 2 * i)
              return this._createEncoderBuffer(buf)
            }
            return 'numstr' === tag
              ? this._isNumstr(str)
                ? this._createEncoderBuffer(str)
                : this.reporter.error(
                    'Encoding of string type: numstr supports only digits and space'
                  )
              : 'printstr' === tag
                ? this._isPrintstr(str)
                  ? this._createEncoderBuffer(str)
                  : this.reporter.error(
                      'Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark'
                    )
                : /str$/.test(tag) || 'objDesc' === tag
                  ? this._createEncoderBuffer(str)
                  : this.reporter.error(
                      'Encoding of string type: ' + tag + ' unsupported'
                    )
          }),
          (DERNode.prototype._encodeObjid = function encodeObjid(
            id,
            values,
            relative
          ) {
            if ('string' == typeof id) {
              if (!values)
                return this.reporter.error(
                  'string objid given, but no values map found'
                )
              if (!values.hasOwnProperty(id))
                return this.reporter.error('objid not found in values map')
              id = values[id].split(/[\s\.]+/g)
              for (var i = 0; i < id.length; i++) id[i] |= 0
            } else if (Array.isArray(id)) {
              id = id.slice()
              for (i = 0; i < id.length; i++) id[i] |= 0
            }
            if (!Array.isArray(id))
              return this.reporter.error(
                'objid() should be either array or string, got: ' +
                  JSON.stringify(id)
              )
            if (!relative) {
              if (id[1] >= 40)
                return this.reporter.error('Second objid identifier OOB')
              id.splice(0, 2, 40 * id[0] + id[1])
            }
            var size = 0
            for (i = 0; i < id.length; i++) {
              var ident = id[i]
              for (size++; ident >= 128; ident >>= 7) size++
            }
            var objid = new Buffer(size),
              offset = objid.length - 1
            for (i = id.length - 1; i >= 0; i--) {
              ident = id[i]
              for (objid[offset--] = 127 & ident; (ident >>= 7) > 0; )
                objid[offset--] = 128 | (127 & ident)
            }
            return this._createEncoderBuffer(objid)
          }),
          (DERNode.prototype._encodeTime = function encodeTime(time, tag) {
            var str,
              date = new Date(time)
            return (
              'gentime' === tag
                ? (str = [
                    two(date.getFullYear()),
                    two(date.getUTCMonth() + 1),
                    two(date.getUTCDate()),
                    two(date.getUTCHours()),
                    two(date.getUTCMinutes()),
                    two(date.getUTCSeconds()),
                    'Z',
                  ].join(''))
                : 'utctime' === tag
                  ? (str = [
                      two(date.getFullYear() % 100),
                      two(date.getUTCMonth() + 1),
                      two(date.getUTCDate()),
                      two(date.getUTCHours()),
                      two(date.getUTCMinutes()),
                      two(date.getUTCSeconds()),
                      'Z',
                    ].join(''))
                  : this.reporter.error(
                      'Encoding ' + tag + ' time is not supported yet'
                    ),
              this._encodeStr(str, 'octstr')
            )
          }),
          (DERNode.prototype._encodeNull = function encodeNull() {
            return this._createEncoderBuffer('')
          }),
          (DERNode.prototype._encodeInt = function encodeInt(num, values) {
            if ('string' == typeof num) {
              if (!values)
                return this.reporter.error(
                  'String int or enum given, but no values map'
                )
              if (!values.hasOwnProperty(num))
                return this.reporter.error(
                  "Values map doesn't contain: " + JSON.stringify(num)
                )
              num = values[num]
            }
            if ('number' != typeof num && !Buffer.isBuffer(num)) {
              var numArray = num.toArray()
              !num.sign && 128 & numArray[0] && numArray.unshift(0),
                (num = new Buffer(numArray))
            }
            if (Buffer.isBuffer(num)) {
              var size = num.length
              0 === num.length && size++
              var out = new Buffer(size)
              return (
                num.copy(out),
                0 === num.length && (out[0] = 0),
                this._createEncoderBuffer(out)
              )
            }
            if (num < 128) return this._createEncoderBuffer(num)
            if (num < 256) return this._createEncoderBuffer([0, num])
            size = 1
            for (var i = num; i >= 256; i >>= 8) size++
            for (i = (out = new Array(size)).length - 1; i >= 0; i--)
              (out[i] = 255 & num), (num >>= 8)
            return (
              128 & out[0] && out.unshift(0),
              this._createEncoderBuffer(new Buffer(out))
            )
          }),
          (DERNode.prototype._encodeBool = function encodeBool(value) {
            return this._createEncoderBuffer(value ? 255 : 0)
          }),
          (DERNode.prototype._use = function use(entity, obj) {
            return (
              'function' == typeof entity && (entity = entity(obj)),
              entity._getEncoder('der').tree
            )
          }),
          (DERNode.prototype._skipDefault = function skipDefault(
            dataBuffer,
            reporter,
            parent
          ) {
            var i,
              state = this._baseState
            if (null === state.default) return !1
            var data = dataBuffer.join()
            if (
              (void 0 === state.defaultBuffer &&
                (state.defaultBuffer = this._encodeValue(
                  state.default,
                  reporter,
                  parent
                ).join()),
              data.length !== state.defaultBuffer.length)
            )
              return !1
            for (i = 0; i < data.length; i++)
              if (data[i] !== state.defaultBuffer[i]) return !1
            return !0
          })
      },
      './node_modules/asn1.js/lib/asn1/encoders/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var encoders = exports
        ;(encoders.der = __webpack_require__(
          './node_modules/asn1.js/lib/asn1/encoders/der.js'
        )),
          (encoders.pem = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/encoders/pem.js'
          ))
      },
      './node_modules/asn1.js/lib/asn1/encoders/pem.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          DEREncoder = __webpack_require__(
            './node_modules/asn1.js/lib/asn1/encoders/der.js'
          )
        function PEMEncoder(entity) {
          DEREncoder.call(this, entity), (this.enc = 'pem')
        }
        inherits(PEMEncoder, DEREncoder),
          (module.exports = PEMEncoder),
          (PEMEncoder.prototype.encode = function encode(data, options) {
            for (
              var p = DEREncoder.prototype.encode
                  .call(this, data)
                  .toString('base64'),
                out = ['-----BEGIN ' + options.label + '-----'],
                i = 0;
              i < p.length;
              i += 64
            )
              out.push(p.slice(i, i + 64))
            return (
              out.push('-----END ' + options.label + '-----'), out.join('\n')
            )
          })
      },
      './node_modules/bn.js/lib/bn.js': function (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) {
        !(function (module, exports) {
          'use strict'
          function assert(val, msg) {
            if (!val) throw new Error(msg || 'Assertion failed')
          }
          function inherits(ctor, superCtor) {
            ctor.super_ = superCtor
            var TempCtor = function () {}
            ;(TempCtor.prototype = superCtor.prototype),
              (ctor.prototype = new TempCtor()),
              (ctor.prototype.constructor = ctor)
          }
          function BN(number, base, endian) {
            if (BN.isBN(number)) return number
            ;(this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== number &&
                (('le' !== base && 'be' !== base) ||
                  ((endian = base), (base = 10)),
                this._init(number || 0, base || 10, endian || 'be'))
          }
          var Buffer
          'object' == typeof module ? (module.exports = BN) : (exports.BN = BN),
            (BN.BN = BN),
            (BN.wordSize = 26)
          try {
            Buffer =
              'undefined' != typeof window && void 0 !== window.Buffer
                ? window.Buffer
                : __webpack_require__('?8131').Buffer
          } catch (e) {}
          function parseHex4Bits(string, index) {
            var c = string.charCodeAt(index)
            return c >= 65 && c <= 70
              ? c - 55
              : c >= 97 && c <= 102
                ? c - 87
                : (c - 48) & 15
          }
          function parseHexByte(string, lowerBound, index) {
            var r = parseHex4Bits(string, index)
            return (
              index - 1 >= lowerBound &&
                (r |= parseHex4Bits(string, index - 1) << 4),
              r
            )
          }
          function parseBase(str, start, end, mul) {
            for (
              var r = 0, len = Math.min(str.length, end), i = start;
              i < len;
              i++
            ) {
              var c = str.charCodeAt(i) - 48
              ;(r *= mul),
                (r += c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c)
            }
            return r
          }
          ;(BN.isBN = function isBN(num) {
            return (
              num instanceof BN ||
              (null !== num &&
                'object' == typeof num &&
                num.constructor.wordSize === BN.wordSize &&
                Array.isArray(num.words))
            )
          }),
            (BN.max = function max(left, right) {
              return left.cmp(right) > 0 ? left : right
            }),
            (BN.min = function min(left, right) {
              return left.cmp(right) < 0 ? left : right
            }),
            (BN.prototype._init = function init(number, base, endian) {
              if ('number' == typeof number)
                return this._initNumber(number, base, endian)
              if ('object' == typeof number)
                return this._initArray(number, base, endian)
              'hex' === base && (base = 16),
                assert(base === (0 | base) && base >= 2 && base <= 36)
              var start = 0
              '-' === (number = number.toString().replace(/\s+/g, ''))[0] &&
                (start++, (this.negative = 1)),
                start < number.length &&
                  (16 === base
                    ? this._parseHex(number, start, endian)
                    : (this._parseBase(number, base, start),
                      'le' === endian &&
                        this._initArray(this.toArray(), base, endian)))
            }),
            (BN.prototype._initNumber = function _initNumber(
              number,
              base,
              endian
            ) {
              number < 0 && ((this.negative = 1), (number = -number)),
                number < 67108864
                  ? ((this.words = [67108863 & number]), (this.length = 1))
                  : number < 4503599627370496
                    ? ((this.words = [
                        67108863 & number,
                        (number / 67108864) & 67108863,
                      ]),
                      (this.length = 2))
                    : (assert(number < 9007199254740992),
                      (this.words = [
                        67108863 & number,
                        (number / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                'le' === endian && this._initArray(this.toArray(), base, endian)
            }),
            (BN.prototype._initArray = function _initArray(
              number,
              base,
              endian
            ) {
              if (
                (assert('number' == typeof number.length), number.length <= 0)
              )
                return (this.words = [0]), (this.length = 1), this
              ;(this.length = Math.ceil(number.length / 3)),
                (this.words = new Array(this.length))
              for (var i = 0; i < this.length; i++) this.words[i] = 0
              var j,
                w,
                off = 0
              if ('be' === endian)
                for (i = number.length - 1, j = 0; i >= 0; i -= 3)
                  (w =
                    number[i] | (number[i - 1] << 8) | (number[i - 2] << 16)),
                    (this.words[j] |= (w << off) & 67108863),
                    (this.words[j + 1] = (w >>> (26 - off)) & 67108863),
                    (off += 24) >= 26 && ((off -= 26), j++)
              else if ('le' === endian)
                for (i = 0, j = 0; i < number.length; i += 3)
                  (w =
                    number[i] | (number[i + 1] << 8) | (number[i + 2] << 16)),
                    (this.words[j] |= (w << off) & 67108863),
                    (this.words[j + 1] = (w >>> (26 - off)) & 67108863),
                    (off += 24) >= 26 && ((off -= 26), j++)
              return this.strip()
            }),
            (BN.prototype._parseHex = function _parseHex(
              number,
              start,
              endian
            ) {
              ;(this.length = Math.ceil((number.length - start) / 6)),
                (this.words = new Array(this.length))
              for (var i = 0; i < this.length; i++) this.words[i] = 0
              var w,
                off = 0,
                j = 0
              if ('be' === endian)
                for (i = number.length - 1; i >= start; i -= 2)
                  (w = parseHexByte(number, start, i) << off),
                    (this.words[j] |= 67108863 & w),
                    off >= 18
                      ? ((off -= 18), (j += 1), (this.words[j] |= w >>> 26))
                      : (off += 8)
              else
                for (
                  i = (number.length - start) % 2 == 0 ? start + 1 : start;
                  i < number.length;
                  i += 2
                )
                  (w = parseHexByte(number, start, i) << off),
                    (this.words[j] |= 67108863 & w),
                    off >= 18
                      ? ((off -= 18), (j += 1), (this.words[j] |= w >>> 26))
                      : (off += 8)
              this.strip()
            }),
            (BN.prototype._parseBase = function _parseBase(
              number,
              base,
              start
            ) {
              ;(this.words = [0]), (this.length = 1)
              for (
                var limbLen = 0, limbPow = 1;
                limbPow <= 67108863;
                limbPow *= base
              )
                limbLen++
              limbLen--, (limbPow = (limbPow / base) | 0)
              for (
                var total = number.length - start,
                  mod = total % limbLen,
                  end = Math.min(total, total - mod) + start,
                  word = 0,
                  i = start;
                i < end;
                i += limbLen
              )
                (word = parseBase(number, i, i + limbLen, base)),
                  this.imuln(limbPow),
                  this.words[0] + word < 67108864
                    ? (this.words[0] += word)
                    : this._iaddn(word)
              if (0 !== mod) {
                var pow = 1
                for (
                  word = parseBase(number, i, number.length, base), i = 0;
                  i < mod;
                  i++
                )
                  pow *= base
                this.imuln(pow),
                  this.words[0] + word < 67108864
                    ? (this.words[0] += word)
                    : this._iaddn(word)
              }
              this.strip()
            }),
            (BN.prototype.copy = function copy(dest) {
              dest.words = new Array(this.length)
              for (var i = 0; i < this.length; i++)
                dest.words[i] = this.words[i]
              ;(dest.length = this.length),
                (dest.negative = this.negative),
                (dest.red = this.red)
            }),
            (BN.prototype.clone = function clone() {
              var r = new BN(null)
              return this.copy(r), r
            }),
            (BN.prototype._expand = function _expand(size) {
              for (; this.length < size; ) this.words[this.length++] = 0
              return this
            }),
            (BN.prototype.strip = function strip() {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--
              return this._normSign()
            }),
            (BN.prototype._normSign = function _normSign() {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              )
            }),
            (BN.prototype.inspect = function inspect() {
              return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
            })
          var zeros = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000',
            ],
            groupSizes = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            groupBases = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ]
          function smallMulTo(self, num, out) {
            out.negative = num.negative ^ self.negative
            var len = (self.length + num.length) | 0
            ;(out.length = len), (len = (len - 1) | 0)
            var a = 0 | self.words[0],
              b = 0 | num.words[0],
              r = a * b,
              lo = 67108863 & r,
              carry = (r / 67108864) | 0
            out.words[0] = lo
            for (var k = 1; k < len; k++) {
              for (
                var ncarry = carry >>> 26,
                  rword = 67108863 & carry,
                  maxJ = Math.min(k, num.length - 1),
                  j = Math.max(0, k - self.length + 1);
                j <= maxJ;
                j++
              ) {
                var i = (k - j) | 0
                ;(ncarry +=
                  ((r =
                    (a = 0 | self.words[i]) * (b = 0 | num.words[j]) + rword) /
                    67108864) |
                  0),
                  (rword = 67108863 & r)
              }
              ;(out.words[k] = 0 | rword), (carry = 0 | ncarry)
            }
            return (
              0 !== carry ? (out.words[k] = 0 | carry) : out.length--,
              out.strip()
            )
          }
          ;(BN.prototype.toString = function toString(base, padding) {
            var out
            if (
              ((padding = 0 | padding || 1),
              16 === (base = base || 10) || 'hex' === base)
            ) {
              out = ''
              for (var off = 0, carry = 0, i = 0; i < this.length; i++) {
                var w = this.words[i],
                  word = (16777215 & ((w << off) | carry)).toString(16)
                ;(carry = (w >>> (24 - off)) & 16777215),
                  (off += 2) >= 26 && ((off -= 26), i--),
                  (out =
                    0 !== carry || i !== this.length - 1
                      ? zeros[6 - word.length] + word + out
                      : word + out)
              }
              for (
                0 !== carry && (out = carry.toString(16) + out);
                out.length % padding != 0;

              )
                out = '0' + out
              return 0 !== this.negative && (out = '-' + out), out
            }
            if (base === (0 | base) && base >= 2 && base <= 36) {
              var groupSize = groupSizes[base],
                groupBase = groupBases[base]
              out = ''
              var c = this.clone()
              for (c.negative = 0; !c.isZero(); ) {
                var r = c.modn(groupBase).toString(base)
                out = (c = c.idivn(groupBase)).isZero()
                  ? r + out
                  : zeros[groupSize - r.length] + r + out
              }
              for (
                this.isZero() && (out = '0' + out);
                out.length % padding != 0;

              )
                out = '0' + out
              return 0 !== this.negative && (out = '-' + out), out
            }
            assert(!1, 'Base should be between 2 and 36')
          }),
            (BN.prototype.toNumber = function toNumber() {
              var ret = this.words[0]
              return (
                2 === this.length
                  ? (ret += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (ret += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      assert(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -ret : ret
              )
            }),
            (BN.prototype.toJSON = function toJSON() {
              return this.toString(16)
            }),
            (BN.prototype.toBuffer = function toBuffer(endian, length) {
              return (
                assert(void 0 !== Buffer),
                this.toArrayLike(Buffer, endian, length)
              )
            }),
            (BN.prototype.toArray = function toArray(endian, length) {
              return this.toArrayLike(Array, endian, length)
            }),
            (BN.prototype.toArrayLike = function toArrayLike(
              ArrayType,
              endian,
              length
            ) {
              var byteLength = this.byteLength(),
                reqLength = length || Math.max(1, byteLength)
              assert(
                byteLength <= reqLength,
                'byte array longer than desired length'
              ),
                assert(reqLength > 0, 'Requested array length <= 0'),
                this.strip()
              var b,
                i,
                littleEndian = 'le' === endian,
                res = new ArrayType(reqLength),
                q = this.clone()
              if (littleEndian) {
                for (i = 0; !q.isZero(); i++)
                  (b = q.andln(255)), q.iushrn(8), (res[i] = b)
                for (; i < reqLength; i++) res[i] = 0
              } else {
                for (i = 0; i < reqLength - byteLength; i++) res[i] = 0
                for (i = 0; !q.isZero(); i++)
                  (b = q.andln(255)), q.iushrn(8), (res[reqLength - i - 1] = b)
              }
              return res
            }),
            Math.clz32
              ? (BN.prototype._countBits = function _countBits(w) {
                  return 32 - Math.clz32(w)
                })
              : (BN.prototype._countBits = function _countBits(w) {
                  var t = w,
                    r = 0
                  return (
                    t >= 4096 && ((r += 13), (t >>>= 13)),
                    t >= 64 && ((r += 7), (t >>>= 7)),
                    t >= 8 && ((r += 4), (t >>>= 4)),
                    t >= 2 && ((r += 2), (t >>>= 2)),
                    r + t
                  )
                }),
            (BN.prototype._zeroBits = function _zeroBits(w) {
              if (0 === w) return 26
              var t = w,
                r = 0
              return (
                8191 & t || ((r += 13), (t >>>= 13)),
                127 & t || ((r += 7), (t >>>= 7)),
                15 & t || ((r += 4), (t >>>= 4)),
                3 & t || ((r += 2), (t >>>= 2)),
                1 & t || r++,
                r
              )
            }),
            (BN.prototype.bitLength = function bitLength() {
              var w = this.words[this.length - 1],
                hi = this._countBits(w)
              return 26 * (this.length - 1) + hi
            }),
            (BN.prototype.zeroBits = function zeroBits() {
              if (this.isZero()) return 0
              for (var r = 0, i = 0; i < this.length; i++) {
                var b = this._zeroBits(this.words[i])
                if (((r += b), 26 !== b)) break
              }
              return r
            }),
            (BN.prototype.byteLength = function byteLength() {
              return Math.ceil(this.bitLength() / 8)
            }),
            (BN.prototype.toTwos = function toTwos(width) {
              return 0 !== this.negative
                ? this.abs().inotn(width).iaddn(1)
                : this.clone()
            }),
            (BN.prototype.fromTwos = function fromTwos(width) {
              return this.testn(width - 1)
                ? this.notn(width).iaddn(1).ineg()
                : this.clone()
            }),
            (BN.prototype.isNeg = function isNeg() {
              return 0 !== this.negative
            }),
            (BN.prototype.neg = function neg() {
              return this.clone().ineg()
            }),
            (BN.prototype.ineg = function ineg() {
              return this.isZero() || (this.negative ^= 1), this
            }),
            (BN.prototype.iuor = function iuor(num) {
              for (; this.length < num.length; ) this.words[this.length++] = 0
              for (var i = 0; i < num.length; i++)
                this.words[i] = this.words[i] | num.words[i]
              return this.strip()
            }),
            (BN.prototype.ior = function ior(num) {
              return assert(!(this.negative | num.negative)), this.iuor(num)
            }),
            (BN.prototype.or = function or(num) {
              return this.length > num.length
                ? this.clone().ior(num)
                : num.clone().ior(this)
            }),
            (BN.prototype.uor = function uor(num) {
              return this.length > num.length
                ? this.clone().iuor(num)
                : num.clone().iuor(this)
            }),
            (BN.prototype.iuand = function iuand(num) {
              var b
              b = this.length > num.length ? num : this
              for (var i = 0; i < b.length; i++)
                this.words[i] = this.words[i] & num.words[i]
              return (this.length = b.length), this.strip()
            }),
            (BN.prototype.iand = function iand(num) {
              return assert(!(this.negative | num.negative)), this.iuand(num)
            }),
            (BN.prototype.and = function and(num) {
              return this.length > num.length
                ? this.clone().iand(num)
                : num.clone().iand(this)
            }),
            (BN.prototype.uand = function uand(num) {
              return this.length > num.length
                ? this.clone().iuand(num)
                : num.clone().iuand(this)
            }),
            (BN.prototype.iuxor = function iuxor(num) {
              var a, b
              this.length > num.length
                ? ((a = this), (b = num))
                : ((a = num), (b = this))
              for (var i = 0; i < b.length; i++)
                this.words[i] = a.words[i] ^ b.words[i]
              if (this !== a)
                for (; i < a.length; i++) this.words[i] = a.words[i]
              return (this.length = a.length), this.strip()
            }),
            (BN.prototype.ixor = function ixor(num) {
              return assert(!(this.negative | num.negative)), this.iuxor(num)
            }),
            (BN.prototype.xor = function xor(num) {
              return this.length > num.length
                ? this.clone().ixor(num)
                : num.clone().ixor(this)
            }),
            (BN.prototype.uxor = function uxor(num) {
              return this.length > num.length
                ? this.clone().iuxor(num)
                : num.clone().iuxor(this)
            }),
            (BN.prototype.inotn = function inotn(width) {
              assert('number' == typeof width && width >= 0)
              var bytesNeeded = 0 | Math.ceil(width / 26),
                bitsLeft = width % 26
              this._expand(bytesNeeded), bitsLeft > 0 && bytesNeeded--
              for (var i = 0; i < bytesNeeded; i++)
                this.words[i] = 67108863 & ~this.words[i]
              return (
                bitsLeft > 0 &&
                  (this.words[i] =
                    ~this.words[i] & (67108863 >> (26 - bitsLeft))),
                this.strip()
              )
            }),
            (BN.prototype.notn = function notn(width) {
              return this.clone().inotn(width)
            }),
            (BN.prototype.setn = function setn(bit, val) {
              assert('number' == typeof bit && bit >= 0)
              var off = (bit / 26) | 0,
                wbit = bit % 26
              return (
                this._expand(off + 1),
                (this.words[off] = val
                  ? this.words[off] | (1 << wbit)
                  : this.words[off] & ~(1 << wbit)),
                this.strip()
              )
            }),
            (BN.prototype.iadd = function iadd(num) {
              var r, a, b
              if (0 !== this.negative && 0 === num.negative)
                return (
                  (this.negative = 0),
                  (r = this.isub(num)),
                  (this.negative ^= 1),
                  this._normSign()
                )
              if (0 === this.negative && 0 !== num.negative)
                return (
                  (num.negative = 0),
                  (r = this.isub(num)),
                  (num.negative = 1),
                  r._normSign()
                )
              this.length > num.length
                ? ((a = this), (b = num))
                : ((a = num), (b = this))
              for (var carry = 0, i = 0; i < b.length; i++)
                (r = (0 | a.words[i]) + (0 | b.words[i]) + carry),
                  (this.words[i] = 67108863 & r),
                  (carry = r >>> 26)
              for (; 0 !== carry && i < a.length; i++)
                (r = (0 | a.words[i]) + carry),
                  (this.words[i] = 67108863 & r),
                  (carry = r >>> 26)
              if (((this.length = a.length), 0 !== carry))
                (this.words[this.length] = carry), this.length++
              else if (a !== this)
                for (; i < a.length; i++) this.words[i] = a.words[i]
              return this
            }),
            (BN.prototype.add = function add(num) {
              var res
              return 0 !== num.negative && 0 === this.negative
                ? ((num.negative = 0),
                  (res = this.sub(num)),
                  (num.negative ^= 1),
                  res)
                : 0 === num.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (res = num.sub(this)),
                    (this.negative = 1),
                    res)
                  : this.length > num.length
                    ? this.clone().iadd(num)
                    : num.clone().iadd(this)
            }),
            (BN.prototype.isub = function isub(num) {
              if (0 !== num.negative) {
                num.negative = 0
                var r = this.iadd(num)
                return (num.negative = 1), r._normSign()
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(num),
                  (this.negative = 1),
                  this._normSign()
                )
              var a,
                b,
                cmp = this.cmp(num)
              if (0 === cmp)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                )
              cmp > 0 ? ((a = this), (b = num)) : ((a = num), (b = this))
              for (var carry = 0, i = 0; i < b.length; i++)
                (carry =
                  (r = (0 | a.words[i]) - (0 | b.words[i]) + carry) >> 26),
                  (this.words[i] = 67108863 & r)
              for (; 0 !== carry && i < a.length; i++)
                (carry = (r = (0 | a.words[i]) + carry) >> 26),
                  (this.words[i] = 67108863 & r)
              if (0 === carry && i < a.length && a !== this)
                for (; i < a.length; i++) this.words[i] = a.words[i]
              return (
                (this.length = Math.max(this.length, i)),
                a !== this && (this.negative = 1),
                this.strip()
              )
            }),
            (BN.prototype.sub = function sub(num) {
              return this.clone().isub(num)
            })
          var comb10MulTo = function comb10MulTo(self, num, out) {
            var lo,
              mid,
              hi,
              a = self.words,
              b = num.words,
              o = out.words,
              c = 0,
              a0 = 0 | a[0],
              al0 = 8191 & a0,
              ah0 = a0 >>> 13,
              a1 = 0 | a[1],
              al1 = 8191 & a1,
              ah1 = a1 >>> 13,
              a2 = 0 | a[2],
              al2 = 8191 & a2,
              ah2 = a2 >>> 13,
              a3 = 0 | a[3],
              al3 = 8191 & a3,
              ah3 = a3 >>> 13,
              a4 = 0 | a[4],
              al4 = 8191 & a4,
              ah4 = a4 >>> 13,
              a5 = 0 | a[5],
              al5 = 8191 & a5,
              ah5 = a5 >>> 13,
              a6 = 0 | a[6],
              al6 = 8191 & a6,
              ah6 = a6 >>> 13,
              a7 = 0 | a[7],
              al7 = 8191 & a7,
              ah7 = a7 >>> 13,
              a8 = 0 | a[8],
              al8 = 8191 & a8,
              ah8 = a8 >>> 13,
              a9 = 0 | a[9],
              al9 = 8191 & a9,
              ah9 = a9 >>> 13,
              b0 = 0 | b[0],
              bl0 = 8191 & b0,
              bh0 = b0 >>> 13,
              b1 = 0 | b[1],
              bl1 = 8191 & b1,
              bh1 = b1 >>> 13,
              b2 = 0 | b[2],
              bl2 = 8191 & b2,
              bh2 = b2 >>> 13,
              b3 = 0 | b[3],
              bl3 = 8191 & b3,
              bh3 = b3 >>> 13,
              b4 = 0 | b[4],
              bl4 = 8191 & b4,
              bh4 = b4 >>> 13,
              b5 = 0 | b[5],
              bl5 = 8191 & b5,
              bh5 = b5 >>> 13,
              b6 = 0 | b[6],
              bl6 = 8191 & b6,
              bh6 = b6 >>> 13,
              b7 = 0 | b[7],
              bl7 = 8191 & b7,
              bh7 = b7 >>> 13,
              b8 = 0 | b[8],
              bl8 = 8191 & b8,
              bh8 = b8 >>> 13,
              b9 = 0 | b[9],
              bl9 = 8191 & b9,
              bh9 = b9 >>> 13
            ;(out.negative = self.negative ^ num.negative), (out.length = 19)
            var w0 =
              (((c + (lo = Math.imul(al0, bl0))) | 0) +
                ((8191 &
                  (mid =
                    ((mid = Math.imul(al0, bh0)) + Math.imul(ah0, bl0)) | 0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = Math.imul(ah0, bh0)) + (mid >>> 13)) | 0) +
                (w0 >>> 26)) |
              0),
              (w0 &= 67108863),
              (lo = Math.imul(al1, bl0)),
              (mid = ((mid = Math.imul(al1, bh0)) + Math.imul(ah1, bl0)) | 0),
              (hi = Math.imul(ah1, bh0))
            var w1 =
              (((c + (lo = (lo + Math.imul(al0, bl1)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh1)) | 0) +
                      Math.imul(ah0, bl1)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh1)) | 0) + (mid >>> 13)) | 0) +
                (w1 >>> 26)) |
              0),
              (w1 &= 67108863),
              (lo = Math.imul(al2, bl0)),
              (mid = ((mid = Math.imul(al2, bh0)) + Math.imul(ah2, bl0)) | 0),
              (hi = Math.imul(ah2, bh0)),
              (lo = (lo + Math.imul(al1, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh1)) | 0) +
                  Math.imul(ah1, bl1)) |
                0),
              (hi = (hi + Math.imul(ah1, bh1)) | 0)
            var w2 =
              (((c + (lo = (lo + Math.imul(al0, bl2)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh2)) | 0) +
                      Math.imul(ah0, bl2)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh2)) | 0) + (mid >>> 13)) | 0) +
                (w2 >>> 26)) |
              0),
              (w2 &= 67108863),
              (lo = Math.imul(al3, bl0)),
              (mid = ((mid = Math.imul(al3, bh0)) + Math.imul(ah3, bl0)) | 0),
              (hi = Math.imul(ah3, bh0)),
              (lo = (lo + Math.imul(al2, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh1)) | 0) +
                  Math.imul(ah2, bl1)) |
                0),
              (hi = (hi + Math.imul(ah2, bh1)) | 0),
              (lo = (lo + Math.imul(al1, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh2)) | 0) +
                  Math.imul(ah1, bl2)) |
                0),
              (hi = (hi + Math.imul(ah1, bh2)) | 0)
            var w3 =
              (((c + (lo = (lo + Math.imul(al0, bl3)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh3)) | 0) +
                      Math.imul(ah0, bl3)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh3)) | 0) + (mid >>> 13)) | 0) +
                (w3 >>> 26)) |
              0),
              (w3 &= 67108863),
              (lo = Math.imul(al4, bl0)),
              (mid = ((mid = Math.imul(al4, bh0)) + Math.imul(ah4, bl0)) | 0),
              (hi = Math.imul(ah4, bh0)),
              (lo = (lo + Math.imul(al3, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh1)) | 0) +
                  Math.imul(ah3, bl1)) |
                0),
              (hi = (hi + Math.imul(ah3, bh1)) | 0),
              (lo = (lo + Math.imul(al2, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh2)) | 0) +
                  Math.imul(ah2, bl2)) |
                0),
              (hi = (hi + Math.imul(ah2, bh2)) | 0),
              (lo = (lo + Math.imul(al1, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh3)) | 0) +
                  Math.imul(ah1, bl3)) |
                0),
              (hi = (hi + Math.imul(ah1, bh3)) | 0)
            var w4 =
              (((c + (lo = (lo + Math.imul(al0, bl4)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh4)) | 0) +
                      Math.imul(ah0, bl4)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh4)) | 0) + (mid >>> 13)) | 0) +
                (w4 >>> 26)) |
              0),
              (w4 &= 67108863),
              (lo = Math.imul(al5, bl0)),
              (mid = ((mid = Math.imul(al5, bh0)) + Math.imul(ah5, bl0)) | 0),
              (hi = Math.imul(ah5, bh0)),
              (lo = (lo + Math.imul(al4, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh1)) | 0) +
                  Math.imul(ah4, bl1)) |
                0),
              (hi = (hi + Math.imul(ah4, bh1)) | 0),
              (lo = (lo + Math.imul(al3, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh2)) | 0) +
                  Math.imul(ah3, bl2)) |
                0),
              (hi = (hi + Math.imul(ah3, bh2)) | 0),
              (lo = (lo + Math.imul(al2, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh3)) | 0) +
                  Math.imul(ah2, bl3)) |
                0),
              (hi = (hi + Math.imul(ah2, bh3)) | 0),
              (lo = (lo + Math.imul(al1, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh4)) | 0) +
                  Math.imul(ah1, bl4)) |
                0),
              (hi = (hi + Math.imul(ah1, bh4)) | 0)
            var w5 =
              (((c + (lo = (lo + Math.imul(al0, bl5)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh5)) | 0) +
                      Math.imul(ah0, bl5)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh5)) | 0) + (mid >>> 13)) | 0) +
                (w5 >>> 26)) |
              0),
              (w5 &= 67108863),
              (lo = Math.imul(al6, bl0)),
              (mid = ((mid = Math.imul(al6, bh0)) + Math.imul(ah6, bl0)) | 0),
              (hi = Math.imul(ah6, bh0)),
              (lo = (lo + Math.imul(al5, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh1)) | 0) +
                  Math.imul(ah5, bl1)) |
                0),
              (hi = (hi + Math.imul(ah5, bh1)) | 0),
              (lo = (lo + Math.imul(al4, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh2)) | 0) +
                  Math.imul(ah4, bl2)) |
                0),
              (hi = (hi + Math.imul(ah4, bh2)) | 0),
              (lo = (lo + Math.imul(al3, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh3)) | 0) +
                  Math.imul(ah3, bl3)) |
                0),
              (hi = (hi + Math.imul(ah3, bh3)) | 0),
              (lo = (lo + Math.imul(al2, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh4)) | 0) +
                  Math.imul(ah2, bl4)) |
                0),
              (hi = (hi + Math.imul(ah2, bh4)) | 0),
              (lo = (lo + Math.imul(al1, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh5)) | 0) +
                  Math.imul(ah1, bl5)) |
                0),
              (hi = (hi + Math.imul(ah1, bh5)) | 0)
            var w6 =
              (((c + (lo = (lo + Math.imul(al0, bl6)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh6)) | 0) +
                      Math.imul(ah0, bl6)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh6)) | 0) + (mid >>> 13)) | 0) +
                (w6 >>> 26)) |
              0),
              (w6 &= 67108863),
              (lo = Math.imul(al7, bl0)),
              (mid = ((mid = Math.imul(al7, bh0)) + Math.imul(ah7, bl0)) | 0),
              (hi = Math.imul(ah7, bh0)),
              (lo = (lo + Math.imul(al6, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh1)) | 0) +
                  Math.imul(ah6, bl1)) |
                0),
              (hi = (hi + Math.imul(ah6, bh1)) | 0),
              (lo = (lo + Math.imul(al5, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh2)) | 0) +
                  Math.imul(ah5, bl2)) |
                0),
              (hi = (hi + Math.imul(ah5, bh2)) | 0),
              (lo = (lo + Math.imul(al4, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh3)) | 0) +
                  Math.imul(ah4, bl3)) |
                0),
              (hi = (hi + Math.imul(ah4, bh3)) | 0),
              (lo = (lo + Math.imul(al3, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh4)) | 0) +
                  Math.imul(ah3, bl4)) |
                0),
              (hi = (hi + Math.imul(ah3, bh4)) | 0),
              (lo = (lo + Math.imul(al2, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh5)) | 0) +
                  Math.imul(ah2, bl5)) |
                0),
              (hi = (hi + Math.imul(ah2, bh5)) | 0),
              (lo = (lo + Math.imul(al1, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh6)) | 0) +
                  Math.imul(ah1, bl6)) |
                0),
              (hi = (hi + Math.imul(ah1, bh6)) | 0)
            var w7 =
              (((c + (lo = (lo + Math.imul(al0, bl7)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh7)) | 0) +
                      Math.imul(ah0, bl7)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh7)) | 0) + (mid >>> 13)) | 0) +
                (w7 >>> 26)) |
              0),
              (w7 &= 67108863),
              (lo = Math.imul(al8, bl0)),
              (mid = ((mid = Math.imul(al8, bh0)) + Math.imul(ah8, bl0)) | 0),
              (hi = Math.imul(ah8, bh0)),
              (lo = (lo + Math.imul(al7, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh1)) | 0) +
                  Math.imul(ah7, bl1)) |
                0),
              (hi = (hi + Math.imul(ah7, bh1)) | 0),
              (lo = (lo + Math.imul(al6, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh2)) | 0) +
                  Math.imul(ah6, bl2)) |
                0),
              (hi = (hi + Math.imul(ah6, bh2)) | 0),
              (lo = (lo + Math.imul(al5, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh3)) | 0) +
                  Math.imul(ah5, bl3)) |
                0),
              (hi = (hi + Math.imul(ah5, bh3)) | 0),
              (lo = (lo + Math.imul(al4, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh4)) | 0) +
                  Math.imul(ah4, bl4)) |
                0),
              (hi = (hi + Math.imul(ah4, bh4)) | 0),
              (lo = (lo + Math.imul(al3, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh5)) | 0) +
                  Math.imul(ah3, bl5)) |
                0),
              (hi = (hi + Math.imul(ah3, bh5)) | 0),
              (lo = (lo + Math.imul(al2, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh6)) | 0) +
                  Math.imul(ah2, bl6)) |
                0),
              (hi = (hi + Math.imul(ah2, bh6)) | 0),
              (lo = (lo + Math.imul(al1, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh7)) | 0) +
                  Math.imul(ah1, bl7)) |
                0),
              (hi = (hi + Math.imul(ah1, bh7)) | 0)
            var w8 =
              (((c + (lo = (lo + Math.imul(al0, bl8)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh8)) | 0) +
                      Math.imul(ah0, bl8)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh8)) | 0) + (mid >>> 13)) | 0) +
                (w8 >>> 26)) |
              0),
              (w8 &= 67108863),
              (lo = Math.imul(al9, bl0)),
              (mid = ((mid = Math.imul(al9, bh0)) + Math.imul(ah9, bl0)) | 0),
              (hi = Math.imul(ah9, bh0)),
              (lo = (lo + Math.imul(al8, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh1)) | 0) +
                  Math.imul(ah8, bl1)) |
                0),
              (hi = (hi + Math.imul(ah8, bh1)) | 0),
              (lo = (lo + Math.imul(al7, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh2)) | 0) +
                  Math.imul(ah7, bl2)) |
                0),
              (hi = (hi + Math.imul(ah7, bh2)) | 0),
              (lo = (lo + Math.imul(al6, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh3)) | 0) +
                  Math.imul(ah6, bl3)) |
                0),
              (hi = (hi + Math.imul(ah6, bh3)) | 0),
              (lo = (lo + Math.imul(al5, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh4)) | 0) +
                  Math.imul(ah5, bl4)) |
                0),
              (hi = (hi + Math.imul(ah5, bh4)) | 0),
              (lo = (lo + Math.imul(al4, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh5)) | 0) +
                  Math.imul(ah4, bl5)) |
                0),
              (hi = (hi + Math.imul(ah4, bh5)) | 0),
              (lo = (lo + Math.imul(al3, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh6)) | 0) +
                  Math.imul(ah3, bl6)) |
                0),
              (hi = (hi + Math.imul(ah3, bh6)) | 0),
              (lo = (lo + Math.imul(al2, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh7)) | 0) +
                  Math.imul(ah2, bl7)) |
                0),
              (hi = (hi + Math.imul(ah2, bh7)) | 0),
              (lo = (lo + Math.imul(al1, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh8)) | 0) +
                  Math.imul(ah1, bl8)) |
                0),
              (hi = (hi + Math.imul(ah1, bh8)) | 0)
            var w9 =
              (((c + (lo = (lo + Math.imul(al0, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh9)) | 0) +
                      Math.imul(ah0, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w9 >>> 26)) |
              0),
              (w9 &= 67108863),
              (lo = Math.imul(al9, bl1)),
              (mid = ((mid = Math.imul(al9, bh1)) + Math.imul(ah9, bl1)) | 0),
              (hi = Math.imul(ah9, bh1)),
              (lo = (lo + Math.imul(al8, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh2)) | 0) +
                  Math.imul(ah8, bl2)) |
                0),
              (hi = (hi + Math.imul(ah8, bh2)) | 0),
              (lo = (lo + Math.imul(al7, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh3)) | 0) +
                  Math.imul(ah7, bl3)) |
                0),
              (hi = (hi + Math.imul(ah7, bh3)) | 0),
              (lo = (lo + Math.imul(al6, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh4)) | 0) +
                  Math.imul(ah6, bl4)) |
                0),
              (hi = (hi + Math.imul(ah6, bh4)) | 0),
              (lo = (lo + Math.imul(al5, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh5)) | 0) +
                  Math.imul(ah5, bl5)) |
                0),
              (hi = (hi + Math.imul(ah5, bh5)) | 0),
              (lo = (lo + Math.imul(al4, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh6)) | 0) +
                  Math.imul(ah4, bl6)) |
                0),
              (hi = (hi + Math.imul(ah4, bh6)) | 0),
              (lo = (lo + Math.imul(al3, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh7)) | 0) +
                  Math.imul(ah3, bl7)) |
                0),
              (hi = (hi + Math.imul(ah3, bh7)) | 0),
              (lo = (lo + Math.imul(al2, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh8)) | 0) +
                  Math.imul(ah2, bl8)) |
                0),
              (hi = (hi + Math.imul(ah2, bh8)) | 0)
            var w10 =
              (((c + (lo = (lo + Math.imul(al1, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al1, bh9)) | 0) +
                      Math.imul(ah1, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah1, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w10 >>> 26)) |
              0),
              (w10 &= 67108863),
              (lo = Math.imul(al9, bl2)),
              (mid = ((mid = Math.imul(al9, bh2)) + Math.imul(ah9, bl2)) | 0),
              (hi = Math.imul(ah9, bh2)),
              (lo = (lo + Math.imul(al8, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh3)) | 0) +
                  Math.imul(ah8, bl3)) |
                0),
              (hi = (hi + Math.imul(ah8, bh3)) | 0),
              (lo = (lo + Math.imul(al7, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh4)) | 0) +
                  Math.imul(ah7, bl4)) |
                0),
              (hi = (hi + Math.imul(ah7, bh4)) | 0),
              (lo = (lo + Math.imul(al6, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh5)) | 0) +
                  Math.imul(ah6, bl5)) |
                0),
              (hi = (hi + Math.imul(ah6, bh5)) | 0),
              (lo = (lo + Math.imul(al5, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh6)) | 0) +
                  Math.imul(ah5, bl6)) |
                0),
              (hi = (hi + Math.imul(ah5, bh6)) | 0),
              (lo = (lo + Math.imul(al4, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh7)) | 0) +
                  Math.imul(ah4, bl7)) |
                0),
              (hi = (hi + Math.imul(ah4, bh7)) | 0),
              (lo = (lo + Math.imul(al3, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh8)) | 0) +
                  Math.imul(ah3, bl8)) |
                0),
              (hi = (hi + Math.imul(ah3, bh8)) | 0)
            var w11 =
              (((c + (lo = (lo + Math.imul(al2, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al2, bh9)) | 0) +
                      Math.imul(ah2, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah2, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w11 >>> 26)) |
              0),
              (w11 &= 67108863),
              (lo = Math.imul(al9, bl3)),
              (mid = ((mid = Math.imul(al9, bh3)) + Math.imul(ah9, bl3)) | 0),
              (hi = Math.imul(ah9, bh3)),
              (lo = (lo + Math.imul(al8, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh4)) | 0) +
                  Math.imul(ah8, bl4)) |
                0),
              (hi = (hi + Math.imul(ah8, bh4)) | 0),
              (lo = (lo + Math.imul(al7, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh5)) | 0) +
                  Math.imul(ah7, bl5)) |
                0),
              (hi = (hi + Math.imul(ah7, bh5)) | 0),
              (lo = (lo + Math.imul(al6, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh6)) | 0) +
                  Math.imul(ah6, bl6)) |
                0),
              (hi = (hi + Math.imul(ah6, bh6)) | 0),
              (lo = (lo + Math.imul(al5, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh7)) | 0) +
                  Math.imul(ah5, bl7)) |
                0),
              (hi = (hi + Math.imul(ah5, bh7)) | 0),
              (lo = (lo + Math.imul(al4, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh8)) | 0) +
                  Math.imul(ah4, bl8)) |
                0),
              (hi = (hi + Math.imul(ah4, bh8)) | 0)
            var w12 =
              (((c + (lo = (lo + Math.imul(al3, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al3, bh9)) | 0) +
                      Math.imul(ah3, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah3, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w12 >>> 26)) |
              0),
              (w12 &= 67108863),
              (lo = Math.imul(al9, bl4)),
              (mid = ((mid = Math.imul(al9, bh4)) + Math.imul(ah9, bl4)) | 0),
              (hi = Math.imul(ah9, bh4)),
              (lo = (lo + Math.imul(al8, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh5)) | 0) +
                  Math.imul(ah8, bl5)) |
                0),
              (hi = (hi + Math.imul(ah8, bh5)) | 0),
              (lo = (lo + Math.imul(al7, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh6)) | 0) +
                  Math.imul(ah7, bl6)) |
                0),
              (hi = (hi + Math.imul(ah7, bh6)) | 0),
              (lo = (lo + Math.imul(al6, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh7)) | 0) +
                  Math.imul(ah6, bl7)) |
                0),
              (hi = (hi + Math.imul(ah6, bh7)) | 0),
              (lo = (lo + Math.imul(al5, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh8)) | 0) +
                  Math.imul(ah5, bl8)) |
                0),
              (hi = (hi + Math.imul(ah5, bh8)) | 0)
            var w13 =
              (((c + (lo = (lo + Math.imul(al4, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al4, bh9)) | 0) +
                      Math.imul(ah4, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah4, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w13 >>> 26)) |
              0),
              (w13 &= 67108863),
              (lo = Math.imul(al9, bl5)),
              (mid = ((mid = Math.imul(al9, bh5)) + Math.imul(ah9, bl5)) | 0),
              (hi = Math.imul(ah9, bh5)),
              (lo = (lo + Math.imul(al8, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh6)) | 0) +
                  Math.imul(ah8, bl6)) |
                0),
              (hi = (hi + Math.imul(ah8, bh6)) | 0),
              (lo = (lo + Math.imul(al7, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh7)) | 0) +
                  Math.imul(ah7, bl7)) |
                0),
              (hi = (hi + Math.imul(ah7, bh7)) | 0),
              (lo = (lo + Math.imul(al6, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh8)) | 0) +
                  Math.imul(ah6, bl8)) |
                0),
              (hi = (hi + Math.imul(ah6, bh8)) | 0)
            var w14 =
              (((c + (lo = (lo + Math.imul(al5, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al5, bh9)) | 0) +
                      Math.imul(ah5, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah5, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w14 >>> 26)) |
              0),
              (w14 &= 67108863),
              (lo = Math.imul(al9, bl6)),
              (mid = ((mid = Math.imul(al9, bh6)) + Math.imul(ah9, bl6)) | 0),
              (hi = Math.imul(ah9, bh6)),
              (lo = (lo + Math.imul(al8, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh7)) | 0) +
                  Math.imul(ah8, bl7)) |
                0),
              (hi = (hi + Math.imul(ah8, bh7)) | 0),
              (lo = (lo + Math.imul(al7, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh8)) | 0) +
                  Math.imul(ah7, bl8)) |
                0),
              (hi = (hi + Math.imul(ah7, bh8)) | 0)
            var w15 =
              (((c + (lo = (lo + Math.imul(al6, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al6, bh9)) | 0) +
                      Math.imul(ah6, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah6, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w15 >>> 26)) |
              0),
              (w15 &= 67108863),
              (lo = Math.imul(al9, bl7)),
              (mid = ((mid = Math.imul(al9, bh7)) + Math.imul(ah9, bl7)) | 0),
              (hi = Math.imul(ah9, bh7)),
              (lo = (lo + Math.imul(al8, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh8)) | 0) +
                  Math.imul(ah8, bl8)) |
                0),
              (hi = (hi + Math.imul(ah8, bh8)) | 0)
            var w16 =
              (((c + (lo = (lo + Math.imul(al7, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al7, bh9)) | 0) +
                      Math.imul(ah7, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah7, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w16 >>> 26)) |
              0),
              (w16 &= 67108863),
              (lo = Math.imul(al9, bl8)),
              (mid = ((mid = Math.imul(al9, bh8)) + Math.imul(ah9, bl8)) | 0),
              (hi = Math.imul(ah9, bh8))
            var w17 =
              (((c + (lo = (lo + Math.imul(al8, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al8, bh9)) | 0) +
                      Math.imul(ah8, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah8, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w17 >>> 26)) |
              0),
              (w17 &= 67108863)
            var w18 =
              (((c + (lo = Math.imul(al9, bl9))) | 0) +
                ((8191 &
                  (mid =
                    ((mid = Math.imul(al9, bh9)) + Math.imul(ah9, bl9)) | 0)) <<
                  13)) |
              0
            return (
              (c =
                ((((hi = Math.imul(ah9, bh9)) + (mid >>> 13)) | 0) +
                  (w18 >>> 26)) |
                0),
              (w18 &= 67108863),
              (o[0] = w0),
              (o[1] = w1),
              (o[2] = w2),
              (o[3] = w3),
              (o[4] = w4),
              (o[5] = w5),
              (o[6] = w6),
              (o[7] = w7),
              (o[8] = w8),
              (o[9] = w9),
              (o[10] = w10),
              (o[11] = w11),
              (o[12] = w12),
              (o[13] = w13),
              (o[14] = w14),
              (o[15] = w15),
              (o[16] = w16),
              (o[17] = w17),
              (o[18] = w18),
              0 !== c && ((o[19] = c), out.length++),
              out
            )
          }
          function jumboMulTo(self, num, out) {
            return new FFTM().mulp(self, num, out)
          }
          function FFTM(x, y) {
            ;(this.x = x), (this.y = y)
          }
          Math.imul || (comb10MulTo = smallMulTo),
            (BN.prototype.mulTo = function mulTo(num, out) {
              var res,
                len = this.length + num.length
              return (
                (res =
                  10 === this.length && 10 === num.length
                    ? comb10MulTo(this, num, out)
                    : len < 63
                      ? smallMulTo(this, num, out)
                      : len < 1024
                        ? (function bigMulTo(self, num, out) {
                            ;(out.negative = num.negative ^ self.negative),
                              (out.length = self.length + num.length)
                            for (
                              var carry = 0, hncarry = 0, k = 0;
                              k < out.length - 1;
                              k++
                            ) {
                              var ncarry = hncarry
                              hncarry = 0
                              for (
                                var rword = 67108863 & carry,
                                  maxJ = Math.min(k, num.length - 1),
                                  j = Math.max(0, k - self.length + 1);
                                j <= maxJ;
                                j++
                              ) {
                                var i = k - j,
                                  r = (0 | self.words[i]) * (0 | num.words[j]),
                                  lo = 67108863 & r
                                ;(rword = 67108863 & (lo = (lo + rword) | 0)),
                                  (hncarry +=
                                    (ncarry =
                                      ((ncarry =
                                        (ncarry + ((r / 67108864) | 0)) | 0) +
                                        (lo >>> 26)) |
                                      0) >>> 26),
                                  (ncarry &= 67108863)
                              }
                              ;(out.words[k] = rword),
                                (carry = ncarry),
                                (ncarry = hncarry)
                            }
                            return (
                              0 !== carry
                                ? (out.words[k] = carry)
                                : out.length--,
                              out.strip()
                            )
                          })(this, num, out)
                        : jumboMulTo(this, num, out)),
                res
              )
            }),
            (FFTM.prototype.makeRBT = function makeRBT(N) {
              for (
                var t = new Array(N), l = BN.prototype._countBits(N) - 1, i = 0;
                i < N;
                i++
              )
                t[i] = this.revBin(i, l, N)
              return t
            }),
            (FFTM.prototype.revBin = function revBin(x, l, N) {
              if (0 === x || x === N - 1) return x
              for (var rb = 0, i = 0; i < l; i++)
                (rb |= (1 & x) << (l - i - 1)), (x >>= 1)
              return rb
            }),
            (FFTM.prototype.permute = function permute(
              rbt,
              rws,
              iws,
              rtws,
              itws,
              N
            ) {
              for (var i = 0; i < N; i++)
                (rtws[i] = rws[rbt[i]]), (itws[i] = iws[rbt[i]])
            }),
            (FFTM.prototype.transform = function transform(
              rws,
              iws,
              rtws,
              itws,
              N,
              rbt
            ) {
              this.permute(rbt, rws, iws, rtws, itws, N)
              for (var s = 1; s < N; s <<= 1)
                for (
                  var l = s << 1,
                    rtwdf = Math.cos((2 * Math.PI) / l),
                    itwdf = Math.sin((2 * Math.PI) / l),
                    p = 0;
                  p < N;
                  p += l
                )
                  for (var rtwdf_ = rtwdf, itwdf_ = itwdf, j = 0; j < s; j++) {
                    var re = rtws[p + j],
                      ie = itws[p + j],
                      ro = rtws[p + j + s],
                      io = itws[p + j + s],
                      rx = rtwdf_ * ro - itwdf_ * io
                    ;(io = rtwdf_ * io + itwdf_ * ro),
                      (ro = rx),
                      (rtws[p + j] = re + ro),
                      (itws[p + j] = ie + io),
                      (rtws[p + j + s] = re - ro),
                      (itws[p + j + s] = ie - io),
                      j !== l &&
                        ((rx = rtwdf * rtwdf_ - itwdf * itwdf_),
                        (itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_),
                        (rtwdf_ = rx))
                  }
            }),
            (FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
              var N = 1 | Math.max(m, n),
                odd = 1 & N,
                i = 0
              for (N = (N / 2) | 0; N; N >>>= 1) i++
              return 1 << (i + 1 + odd)
            }),
            (FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
              if (!(N <= 1))
                for (var i = 0; i < N / 2; i++) {
                  var t = rws[i]
                  ;(rws[i] = rws[N - i - 1]),
                    (rws[N - i - 1] = t),
                    (t = iws[i]),
                    (iws[i] = -iws[N - i - 1]),
                    (iws[N - i - 1] = -t)
                }
            }),
            (FFTM.prototype.normalize13b = function normalize13b(ws, N) {
              for (var carry = 0, i = 0; i < N / 2; i++) {
                var w =
                  8192 * Math.round(ws[2 * i + 1] / N) +
                  Math.round(ws[2 * i] / N) +
                  carry
                ;(ws[i] = 67108863 & w),
                  (carry = w < 67108864 ? 0 : (w / 67108864) | 0)
              }
              return ws
            }),
            (FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
              for (var carry = 0, i = 0; i < len; i++)
                (carry += 0 | ws[i]),
                  (rws[2 * i] = 8191 & carry),
                  (carry >>>= 13),
                  (rws[2 * i + 1] = 8191 & carry),
                  (carry >>>= 13)
              for (i = 2 * len; i < N; ++i) rws[i] = 0
              assert(0 === carry), assert(!(-8192 & carry))
            }),
            (FFTM.prototype.stub = function stub(N) {
              for (var ph = new Array(N), i = 0; i < N; i++) ph[i] = 0
              return ph
            }),
            (FFTM.prototype.mulp = function mulp(x, y, out) {
              var N = 2 * this.guessLen13b(x.length, y.length),
                rbt = this.makeRBT(N),
                _ = this.stub(N),
                rws = new Array(N),
                rwst = new Array(N),
                iwst = new Array(N),
                nrws = new Array(N),
                nrwst = new Array(N),
                niwst = new Array(N),
                rmws = out.words
              ;(rmws.length = N),
                this.convert13b(x.words, x.length, rws, N),
                this.convert13b(y.words, y.length, nrws, N),
                this.transform(rws, _, rwst, iwst, N, rbt),
                this.transform(nrws, _, nrwst, niwst, N, rbt)
              for (var i = 0; i < N; i++) {
                var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i]
                ;(iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i]),
                  (rwst[i] = rx)
              }
              return (
                this.conjugate(rwst, iwst, N),
                this.transform(rwst, iwst, rmws, _, N, rbt),
                this.conjugate(rmws, _, N),
                this.normalize13b(rmws, N),
                (out.negative = x.negative ^ y.negative),
                (out.length = x.length + y.length),
                out.strip()
              )
            }),
            (BN.prototype.mul = function mul(num) {
              var out = new BN(null)
              return (
                (out.words = new Array(this.length + num.length)),
                this.mulTo(num, out)
              )
            }),
            (BN.prototype.mulf = function mulf(num) {
              var out = new BN(null)
              return (
                (out.words = new Array(this.length + num.length)),
                jumboMulTo(this, num, out)
              )
            }),
            (BN.prototype.imul = function imul(num) {
              return this.clone().mulTo(num, this)
            }),
            (BN.prototype.imuln = function imuln(num) {
              assert('number' == typeof num), assert(num < 67108864)
              for (var carry = 0, i = 0; i < this.length; i++) {
                var w = (0 | this.words[i]) * num,
                  lo = (67108863 & w) + (67108863 & carry)
                ;(carry >>= 26),
                  (carry += (w / 67108864) | 0),
                  (carry += lo >>> 26),
                  (this.words[i] = 67108863 & lo)
              }
              return (
                0 !== carry && ((this.words[i] = carry), this.length++), this
              )
            }),
            (BN.prototype.muln = function muln(num) {
              return this.clone().imuln(num)
            }),
            (BN.prototype.sqr = function sqr() {
              return this.mul(this)
            }),
            (BN.prototype.isqr = function isqr() {
              return this.imul(this.clone())
            }),
            (BN.prototype.pow = function pow(num) {
              var w = (function toBitArray(num) {
                for (
                  var w = new Array(num.bitLength()), bit = 0;
                  bit < w.length;
                  bit++
                ) {
                  var off = (bit / 26) | 0,
                    wbit = bit % 26
                  w[bit] = (num.words[off] & (1 << wbit)) >>> wbit
                }
                return w
              })(num)
              if (0 === w.length) return new BN(1)
              for (
                var res = this, i = 0;
                i < w.length && 0 === w[i];
                i++, res = res.sqr()
              );
              if (++i < w.length)
                for (var q = res.sqr(); i < w.length; i++, q = q.sqr())
                  0 !== w[i] && (res = res.mul(q))
              return res
            }),
            (BN.prototype.iushln = function iushln(bits) {
              assert('number' == typeof bits && bits >= 0)
              var i,
                r = bits % 26,
                s = (bits - r) / 26,
                carryMask = (67108863 >>> (26 - r)) << (26 - r)
              if (0 !== r) {
                var carry = 0
                for (i = 0; i < this.length; i++) {
                  var newCarry = this.words[i] & carryMask,
                    c = ((0 | this.words[i]) - newCarry) << r
                  ;(this.words[i] = c | carry), (carry = newCarry >>> (26 - r))
                }
                carry && ((this.words[i] = carry), this.length++)
              }
              if (0 !== s) {
                for (i = this.length - 1; i >= 0; i--)
                  this.words[i + s] = this.words[i]
                for (i = 0; i < s; i++) this.words[i] = 0
                this.length += s
              }
              return this.strip()
            }),
            (BN.prototype.ishln = function ishln(bits) {
              return assert(0 === this.negative), this.iushln(bits)
            }),
            (BN.prototype.iushrn = function iushrn(bits, hint, extended) {
              var h
              assert('number' == typeof bits && bits >= 0),
                (h = hint ? (hint - (hint % 26)) / 26 : 0)
              var r = bits % 26,
                s = Math.min((bits - r) / 26, this.length),
                mask = 67108863 ^ ((67108863 >>> r) << r),
                maskedWords = extended
              if (((h -= s), (h = Math.max(0, h)), maskedWords)) {
                for (var i = 0; i < s; i++) maskedWords.words[i] = this.words[i]
                maskedWords.length = s
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, i = 0; i < this.length; i++)
                  this.words[i] = this.words[i + s]
              else (this.words[0] = 0), (this.length = 1)
              var carry = 0
              for (
                i = this.length - 1;
                i >= 0 && (0 !== carry || i >= h);
                i--
              ) {
                var word = 0 | this.words[i]
                ;(this.words[i] = (carry << (26 - r)) | (word >>> r)),
                  (carry = word & mask)
              }
              return (
                maskedWords &&
                  0 !== carry &&
                  (maskedWords.words[maskedWords.length++] = carry),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              )
            }),
            (BN.prototype.ishrn = function ishrn(bits, hint, extended) {
              return (
                assert(0 === this.negative), this.iushrn(bits, hint, extended)
              )
            }),
            (BN.prototype.shln = function shln(bits) {
              return this.clone().ishln(bits)
            }),
            (BN.prototype.ushln = function ushln(bits) {
              return this.clone().iushln(bits)
            }),
            (BN.prototype.shrn = function shrn(bits) {
              return this.clone().ishrn(bits)
            }),
            (BN.prototype.ushrn = function ushrn(bits) {
              return this.clone().iushrn(bits)
            }),
            (BN.prototype.testn = function testn(bit) {
              assert('number' == typeof bit && bit >= 0)
              var r = bit % 26,
                s = (bit - r) / 26,
                q = 1 << r
              return !(this.length <= s) && !!(this.words[s] & q)
            }),
            (BN.prototype.imaskn = function imaskn(bits) {
              assert('number' == typeof bits && bits >= 0)
              var r = bits % 26,
                s = (bits - r) / 26
              if (
                (assert(
                  0 === this.negative,
                  'imaskn works only with positive numbers'
                ),
                this.length <= s)
              )
                return this
              if (
                (0 !== r && s++,
                (this.length = Math.min(s, this.length)),
                0 !== r)
              ) {
                var mask = 67108863 ^ ((67108863 >>> r) << r)
                this.words[this.length - 1] &= mask
              }
              return this.strip()
            }),
            (BN.prototype.maskn = function maskn(bits) {
              return this.clone().imaskn(bits)
            }),
            (BN.prototype.iaddn = function iaddn(num) {
              return (
                assert('number' == typeof num),
                assert(num < 67108864),
                num < 0
                  ? this.isubn(-num)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) < num
                      ? ((this.words[0] = num - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(num),
                        (this.negative = 1),
                        this)
                    : this._iaddn(num)
              )
            }),
            (BN.prototype._iaddn = function _iaddn(num) {
              this.words[0] += num
              for (var i = 0; i < this.length && this.words[i] >= 67108864; i++)
                (this.words[i] -= 67108864),
                  i === this.length - 1
                    ? (this.words[i + 1] = 1)
                    : this.words[i + 1]++
              return (this.length = Math.max(this.length, i + 1)), this
            }),
            (BN.prototype.isubn = function isubn(num) {
              if (
                (assert('number' == typeof num),
                assert(num < 67108864),
                num < 0)
              )
                return this.iaddn(-num)
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(num),
                  (this.negative = 1),
                  this
                )
              if (
                ((this.words[0] -= num), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1)
              else
                for (var i = 0; i < this.length && this.words[i] < 0; i++)
                  (this.words[i] += 67108864), (this.words[i + 1] -= 1)
              return this.strip()
            }),
            (BN.prototype.addn = function addn(num) {
              return this.clone().iaddn(num)
            }),
            (BN.prototype.subn = function subn(num) {
              return this.clone().isubn(num)
            }),
            (BN.prototype.iabs = function iabs() {
              return (this.negative = 0), this
            }),
            (BN.prototype.abs = function abs() {
              return this.clone().iabs()
            }),
            (BN.prototype._ishlnsubmul = function _ishlnsubmul(
              num,
              mul,
              shift
            ) {
              var i,
                w,
                len = num.length + shift
              this._expand(len)
              var carry = 0
              for (i = 0; i < num.length; i++) {
                w = (0 | this.words[i + shift]) + carry
                var right = (0 | num.words[i]) * mul
                ;(carry =
                  ((w -= 67108863 & right) >> 26) - ((right / 67108864) | 0)),
                  (this.words[i + shift] = 67108863 & w)
              }
              for (; i < this.length - shift; i++)
                (carry = (w = (0 | this.words[i + shift]) + carry) >> 26),
                  (this.words[i + shift] = 67108863 & w)
              if (0 === carry) return this.strip()
              for (assert(-1 === carry), carry = 0, i = 0; i < this.length; i++)
                (carry = (w = -(0 | this.words[i]) + carry) >> 26),
                  (this.words[i] = 67108863 & w)
              return (this.negative = 1), this.strip()
            }),
            (BN.prototype._wordDiv = function _wordDiv(num, mode) {
              var shift = (this.length, num.length),
                a = this.clone(),
                b = num,
                bhi = 0 | b.words[b.length - 1]
              0 !== (shift = 26 - this._countBits(bhi)) &&
                ((b = b.ushln(shift)),
                a.iushln(shift),
                (bhi = 0 | b.words[b.length - 1]))
              var q,
                m = a.length - b.length
              if ('mod' !== mode) {
                ;((q = new BN(null)).length = m + 1),
                  (q.words = new Array(q.length))
                for (var i = 0; i < q.length; i++) q.words[i] = 0
              }
              var diff = a.clone()._ishlnsubmul(b, 1, m)
              0 === diff.negative && ((a = diff), q && (q.words[m] = 1))
              for (var j = m - 1; j >= 0; j--) {
                var qj =
                  67108864 * (0 | a.words[b.length + j]) +
                  (0 | a.words[b.length + j - 1])
                for (
                  qj = Math.min((qj / bhi) | 0, 67108863),
                    a._ishlnsubmul(b, qj, j);
                  0 !== a.negative;

                )
                  qj--,
                    (a.negative = 0),
                    a._ishlnsubmul(b, 1, j),
                    a.isZero() || (a.negative ^= 1)
                q && (q.words[j] = qj)
              }
              return (
                q && q.strip(),
                a.strip(),
                'div' !== mode && 0 !== shift && a.iushrn(shift),
                { div: q || null, mod: a }
              )
            }),
            (BN.prototype.divmod = function divmod(num, mode, positive) {
              return (
                assert(!num.isZero()),
                this.isZero()
                  ? { div: new BN(0), mod: new BN(0) }
                  : 0 !== this.negative && 0 === num.negative
                    ? ((res = this.neg().divmod(num, mode)),
                      'mod' !== mode && (div = res.div.neg()),
                      'div' !== mode &&
                        ((mod = res.mod.neg()),
                        positive && 0 !== mod.negative && mod.iadd(num)),
                      { div, mod })
                    : 0 === this.negative && 0 !== num.negative
                      ? ((res = this.divmod(num.neg(), mode)),
                        'mod' !== mode && (div = res.div.neg()),
                        { div, mod: res.mod })
                      : this.negative & num.negative
                        ? ((res = this.neg().divmod(num.neg(), mode)),
                          'div' !== mode &&
                            ((mod = res.mod.neg()),
                            positive && 0 !== mod.negative && mod.isub(num)),
                          { div: res.div, mod })
                        : num.length > this.length || this.cmp(num) < 0
                          ? { div: new BN(0), mod: this }
                          : 1 === num.length
                            ? 'div' === mode
                              ? { div: this.divn(num.words[0]), mod: null }
                              : 'mod' === mode
                                ? {
                                    div: null,
                                    mod: new BN(this.modn(num.words[0])),
                                  }
                                : {
                                    div: this.divn(num.words[0]),
                                    mod: new BN(this.modn(num.words[0])),
                                  }
                            : this._wordDiv(num, mode)
              )
              var div, mod, res
            }),
            (BN.prototype.div = function div(num) {
              return this.divmod(num, 'div', !1).div
            }),
            (BN.prototype.mod = function mod(num) {
              return this.divmod(num, 'mod', !1).mod
            }),
            (BN.prototype.umod = function umod(num) {
              return this.divmod(num, 'mod', !0).mod
            }),
            (BN.prototype.divRound = function divRound(num) {
              var dm = this.divmod(num)
              if (dm.mod.isZero()) return dm.div
              var mod = 0 !== dm.div.negative ? dm.mod.isub(num) : dm.mod,
                half = num.ushrn(1),
                r2 = num.andln(1),
                cmp = mod.cmp(half)
              return cmp < 0 || (1 === r2 && 0 === cmp)
                ? dm.div
                : 0 !== dm.div.negative
                  ? dm.div.isubn(1)
                  : dm.div.iaddn(1)
            }),
            (BN.prototype.modn = function modn(num) {
              assert(num <= 67108863)
              for (
                var p = (1 << 26) % num, acc = 0, i = this.length - 1;
                i >= 0;
                i--
              )
                acc = (p * acc + (0 | this.words[i])) % num
              return acc
            }),
            (BN.prototype.idivn = function idivn(num) {
              assert(num <= 67108863)
              for (var carry = 0, i = this.length - 1; i >= 0; i--) {
                var w = (0 | this.words[i]) + 67108864 * carry
                ;(this.words[i] = (w / num) | 0), (carry = w % num)
              }
              return this.strip()
            }),
            (BN.prototype.divn = function divn(num) {
              return this.clone().idivn(num)
            }),
            (BN.prototype.egcd = function egcd(p) {
              assert(0 === p.negative), assert(!p.isZero())
              var x = this,
                y = p.clone()
              x = 0 !== x.negative ? x.umod(p) : x.clone()
              for (
                var A = new BN(1),
                  B = new BN(0),
                  C = new BN(0),
                  D = new BN(1),
                  g = 0;
                x.isEven() && y.isEven();

              )
                x.iushrn(1), y.iushrn(1), ++g
              for (var yp = y.clone(), xp = x.clone(); !x.isZero(); ) {
                for (
                  var i = 0, im = 1;
                  !(x.words[0] & im) && i < 26;
                  ++i, im <<= 1
                );
                if (i > 0)
                  for (x.iushrn(i); i-- > 0; )
                    (A.isOdd() || B.isOdd()) && (A.iadd(yp), B.isub(xp)),
                      A.iushrn(1),
                      B.iushrn(1)
                for (
                  var j = 0, jm = 1;
                  !(y.words[0] & jm) && j < 26;
                  ++j, jm <<= 1
                );
                if (j > 0)
                  for (y.iushrn(j); j-- > 0; )
                    (C.isOdd() || D.isOdd()) && (C.iadd(yp), D.isub(xp)),
                      C.iushrn(1),
                      D.iushrn(1)
                x.cmp(y) >= 0
                  ? (x.isub(y), A.isub(C), B.isub(D))
                  : (y.isub(x), C.isub(A), D.isub(B))
              }
              return { a: C, b: D, gcd: y.iushln(g) }
            }),
            (BN.prototype._invmp = function _invmp(p) {
              assert(0 === p.negative), assert(!p.isZero())
              var a = this,
                b = p.clone()
              a = 0 !== a.negative ? a.umod(p) : a.clone()
              for (
                var res, x1 = new BN(1), x2 = new BN(0), delta = b.clone();
                a.cmpn(1) > 0 && b.cmpn(1) > 0;

              ) {
                for (
                  var i = 0, im = 1;
                  !(a.words[0] & im) && i < 26;
                  ++i, im <<= 1
                );
                if (i > 0)
                  for (a.iushrn(i); i-- > 0; )
                    x1.isOdd() && x1.iadd(delta), x1.iushrn(1)
                for (
                  var j = 0, jm = 1;
                  !(b.words[0] & jm) && j < 26;
                  ++j, jm <<= 1
                );
                if (j > 0)
                  for (b.iushrn(j); j-- > 0; )
                    x2.isOdd() && x2.iadd(delta), x2.iushrn(1)
                a.cmp(b) >= 0
                  ? (a.isub(b), x1.isub(x2))
                  : (b.isub(a), x2.isub(x1))
              }
              return (
                (res = 0 === a.cmpn(1) ? x1 : x2).cmpn(0) < 0 && res.iadd(p),
                res
              )
            }),
            (BN.prototype.gcd = function gcd(num) {
              if (this.isZero()) return num.abs()
              if (num.isZero()) return this.abs()
              var a = this.clone(),
                b = num.clone()
              ;(a.negative = 0), (b.negative = 0)
              for (var shift = 0; a.isEven() && b.isEven(); shift++)
                a.iushrn(1), b.iushrn(1)
              for (;;) {
                for (; a.isEven(); ) a.iushrn(1)
                for (; b.isEven(); ) b.iushrn(1)
                var r = a.cmp(b)
                if (r < 0) {
                  var t = a
                  ;(a = b), (b = t)
                } else if (0 === r || 0 === b.cmpn(1)) break
                a.isub(b)
              }
              return b.iushln(shift)
            }),
            (BN.prototype.invm = function invm(num) {
              return this.egcd(num).a.umod(num)
            }),
            (BN.prototype.isEven = function isEven() {
              return !(1 & this.words[0])
            }),
            (BN.prototype.isOdd = function isOdd() {
              return !(1 & ~this.words[0])
            }),
            (BN.prototype.andln = function andln(num) {
              return this.words[0] & num
            }),
            (BN.prototype.bincn = function bincn(bit) {
              assert('number' == typeof bit)
              var r = bit % 26,
                s = (bit - r) / 26,
                q = 1 << r
              if (this.length <= s)
                return this._expand(s + 1), (this.words[s] |= q), this
              for (var carry = q, i = s; 0 !== carry && i < this.length; i++) {
                var w = 0 | this.words[i]
                ;(carry = (w += carry) >>> 26),
                  (w &= 67108863),
                  (this.words[i] = w)
              }
              return (
                0 !== carry && ((this.words[i] = carry), this.length++), this
              )
            }),
            (BN.prototype.isZero = function isZero() {
              return 1 === this.length && 0 === this.words[0]
            }),
            (BN.prototype.cmpn = function cmpn(num) {
              var res,
                negative = num < 0
              if (0 !== this.negative && !negative) return -1
              if (0 === this.negative && negative) return 1
              if ((this.strip(), this.length > 1)) res = 1
              else {
                negative && (num = -num),
                  assert(num <= 67108863, 'Number is too big')
                var w = 0 | this.words[0]
                res = w === num ? 0 : w < num ? -1 : 1
              }
              return 0 !== this.negative ? 0 | -res : res
            }),
            (BN.prototype.cmp = function cmp(num) {
              if (0 !== this.negative && 0 === num.negative) return -1
              if (0 === this.negative && 0 !== num.negative) return 1
              var res = this.ucmp(num)
              return 0 !== this.negative ? 0 | -res : res
            }),
            (BN.prototype.ucmp = function ucmp(num) {
              if (this.length > num.length) return 1
              if (this.length < num.length) return -1
              for (var res = 0, i = this.length - 1; i >= 0; i--) {
                var a = 0 | this.words[i],
                  b = 0 | num.words[i]
                if (a !== b) {
                  a < b ? (res = -1) : a > b && (res = 1)
                  break
                }
              }
              return res
            }),
            (BN.prototype.gtn = function gtn(num) {
              return 1 === this.cmpn(num)
            }),
            (BN.prototype.gt = function gt(num) {
              return 1 === this.cmp(num)
            }),
            (BN.prototype.gten = function gten(num) {
              return this.cmpn(num) >= 0
            }),
            (BN.prototype.gte = function gte(num) {
              return this.cmp(num) >= 0
            }),
            (BN.prototype.ltn = function ltn(num) {
              return -1 === this.cmpn(num)
            }),
            (BN.prototype.lt = function lt(num) {
              return -1 === this.cmp(num)
            }),
            (BN.prototype.lten = function lten(num) {
              return this.cmpn(num) <= 0
            }),
            (BN.prototype.lte = function lte(num) {
              return this.cmp(num) <= 0
            }),
            (BN.prototype.eqn = function eqn(num) {
              return 0 === this.cmpn(num)
            }),
            (BN.prototype.eq = function eq(num) {
              return 0 === this.cmp(num)
            }),
            (BN.red = function red(num) {
              return new Red(num)
            }),
            (BN.prototype.toRed = function toRed(ctx) {
              return (
                assert(!this.red, 'Already a number in reduction context'),
                assert(0 === this.negative, 'red works only with positives'),
                ctx.convertTo(this)._forceRed(ctx)
              )
            }),
            (BN.prototype.fromRed = function fromRed() {
              return (
                assert(
                  this.red,
                  'fromRed works only with numbers in reduction context'
                ),
                this.red.convertFrom(this)
              )
            }),
            (BN.prototype._forceRed = function _forceRed(ctx) {
              return (this.red = ctx), this
            }),
            (BN.prototype.forceRed = function forceRed(ctx) {
              return (
                assert(!this.red, 'Already a number in reduction context'),
                this._forceRed(ctx)
              )
            }),
            (BN.prototype.redAdd = function redAdd(num) {
              return (
                assert(this.red, 'redAdd works only with red numbers'),
                this.red.add(this, num)
              )
            }),
            (BN.prototype.redIAdd = function redIAdd(num) {
              return (
                assert(this.red, 'redIAdd works only with red numbers'),
                this.red.iadd(this, num)
              )
            }),
            (BN.prototype.redSub = function redSub(num) {
              return (
                assert(this.red, 'redSub works only with red numbers'),
                this.red.sub(this, num)
              )
            }),
            (BN.prototype.redISub = function redISub(num) {
              return (
                assert(this.red, 'redISub works only with red numbers'),
                this.red.isub(this, num)
              )
            }),
            (BN.prototype.redShl = function redShl(num) {
              return (
                assert(this.red, 'redShl works only with red numbers'),
                this.red.shl(this, num)
              )
            }),
            (BN.prototype.redMul = function redMul(num) {
              return (
                assert(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, num),
                this.red.mul(this, num)
              )
            }),
            (BN.prototype.redIMul = function redIMul(num) {
              return (
                assert(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, num),
                this.red.imul(this, num)
              )
            }),
            (BN.prototype.redSqr = function redSqr() {
              return (
                assert(this.red, 'redSqr works only with red numbers'),
                this.red._verify1(this),
                this.red.sqr(this)
              )
            }),
            (BN.prototype.redISqr = function redISqr() {
              return (
                assert(this.red, 'redISqr works only with red numbers'),
                this.red._verify1(this),
                this.red.isqr(this)
              )
            }),
            (BN.prototype.redSqrt = function redSqrt() {
              return (
                assert(this.red, 'redSqrt works only with red numbers'),
                this.red._verify1(this),
                this.red.sqrt(this)
              )
            }),
            (BN.prototype.redInvm = function redInvm() {
              return (
                assert(this.red, 'redInvm works only with red numbers'),
                this.red._verify1(this),
                this.red.invm(this)
              )
            }),
            (BN.prototype.redNeg = function redNeg() {
              return (
                assert(this.red, 'redNeg works only with red numbers'),
                this.red._verify1(this),
                this.red.neg(this)
              )
            }),
            (BN.prototype.redPow = function redPow(num) {
              return (
                assert(this.red && !num.red, 'redPow(normalNum)'),
                this.red._verify1(this),
                this.red.pow(this, num)
              )
            })
          var primes = { k256: null, p224: null, p192: null, p25519: null }
          function MPrime(name, p) {
            ;(this.name = name),
              (this.p = new BN(p, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new BN(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp())
          }
          function K256() {
            MPrime.call(
              this,
              'k256',
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
            )
          }
          function P224() {
            MPrime.call(
              this,
              'p224',
              'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
            )
          }
          function P192() {
            MPrime.call(
              this,
              'p192',
              'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
            )
          }
          function P25519() {
            MPrime.call(
              this,
              '25519',
              '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
            )
          }
          function Red(m) {
            if ('string' == typeof m) {
              var prime = BN._prime(m)
              ;(this.m = prime.p), (this.prime = prime)
            } else
              assert(m.gtn(1), 'modulus must be greater than 1'),
                (this.m = m),
                (this.prime = null)
          }
          function Mont(m) {
            Red.call(this, m),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new BN(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv))
          }
          ;(MPrime.prototype._tmp = function _tmp() {
            var tmp = new BN(null)
            return (tmp.words = new Array(Math.ceil(this.n / 13))), tmp
          }),
            (MPrime.prototype.ireduce = function ireduce(num) {
              var rlen,
                r = num
              do {
                this.split(r, this.tmp),
                  (rlen = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
              } while (rlen > this.n)
              var cmp = rlen < this.n ? -1 : r.ucmp(this.p)
              return (
                0 === cmp
                  ? ((r.words[0] = 0), (r.length = 1))
                  : cmp > 0
                    ? r.isub(this.p)
                    : void 0 !== r.strip
                      ? r.strip()
                      : r._strip(),
                r
              )
            }),
            (MPrime.prototype.split = function split(input, out) {
              input.iushrn(this.n, 0, out)
            }),
            (MPrime.prototype.imulK = function imulK(num) {
              return num.imul(this.k)
            }),
            inherits(K256, MPrime),
            (K256.prototype.split = function split(input, output) {
              for (
                var outLen = Math.min(input.length, 9), i = 0;
                i < outLen;
                i++
              )
                output.words[i] = input.words[i]
              if (((output.length = outLen), input.length <= 9))
                return (input.words[0] = 0), void (input.length = 1)
              var prev = input.words[9]
              for (
                output.words[output.length++] = 4194303 & prev, i = 10;
                i < input.length;
                i++
              ) {
                var next = 0 | input.words[i]
                ;(input.words[i - 10] =
                  ((4194303 & next) << 4) | (prev >>> 22)),
                  (prev = next)
              }
              ;(prev >>>= 22),
                (input.words[i - 10] = prev),
                0 === prev && input.length > 10
                  ? (input.length -= 10)
                  : (input.length -= 9)
            }),
            (K256.prototype.imulK = function imulK(num) {
              ;(num.words[num.length] = 0),
                (num.words[num.length + 1] = 0),
                (num.length += 2)
              for (var lo = 0, i = 0; i < num.length; i++) {
                var w = 0 | num.words[i]
                ;(lo += 977 * w),
                  (num.words[i] = 67108863 & lo),
                  (lo = 64 * w + ((lo / 67108864) | 0))
              }
              return (
                0 === num.words[num.length - 1] &&
                  (num.length--,
                  0 === num.words[num.length - 1] && num.length--),
                num
              )
            }),
            inherits(P224, MPrime),
            inherits(P192, MPrime),
            inherits(P25519, MPrime),
            (P25519.prototype.imulK = function imulK(num) {
              for (var carry = 0, i = 0; i < num.length; i++) {
                var hi = 19 * (0 | num.words[i]) + carry,
                  lo = 67108863 & hi
                ;(hi >>>= 26), (num.words[i] = lo), (carry = hi)
              }
              return 0 !== carry && (num.words[num.length++] = carry), num
            }),
            (BN._prime = function prime(name) {
              if (primes[name]) return primes[name]
              var prime
              if ('k256' === name) prime = new K256()
              else if ('p224' === name) prime = new P224()
              else if ('p192' === name) prime = new P192()
              else {
                if ('p25519' !== name) throw new Error('Unknown prime ' + name)
                prime = new P25519()
              }
              return (primes[name] = prime), prime
            }),
            (Red.prototype._verify1 = function _verify1(a) {
              assert(0 === a.negative, 'red works only with positives'),
                assert(a.red, 'red works only with red numbers')
            }),
            (Red.prototype._verify2 = function _verify2(a, b) {
              assert(
                !(a.negative | b.negative),
                'red works only with positives'
              ),
                assert(
                  a.red && a.red === b.red,
                  'red works only with red numbers'
                )
            }),
            (Red.prototype.imod = function imod(a) {
              return this.prime
                ? this.prime.ireduce(a)._forceRed(this)
                : a.umod(this.m)._forceRed(this)
            }),
            (Red.prototype.neg = function neg(a) {
              return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
            }),
            (Red.prototype.add = function add(a, b) {
              this._verify2(a, b)
              var res = a.add(b)
              return (
                res.cmp(this.m) >= 0 && res.isub(this.m), res._forceRed(this)
              )
            }),
            (Red.prototype.iadd = function iadd(a, b) {
              this._verify2(a, b)
              var res = a.iadd(b)
              return res.cmp(this.m) >= 0 && res.isub(this.m), res
            }),
            (Red.prototype.sub = function sub(a, b) {
              this._verify2(a, b)
              var res = a.sub(b)
              return res.cmpn(0) < 0 && res.iadd(this.m), res._forceRed(this)
            }),
            (Red.prototype.isub = function isub(a, b) {
              this._verify2(a, b)
              var res = a.isub(b)
              return res.cmpn(0) < 0 && res.iadd(this.m), res
            }),
            (Red.prototype.shl = function shl(a, num) {
              return this._verify1(a), this.imod(a.ushln(num))
            }),
            (Red.prototype.imul = function imul(a, b) {
              return this._verify2(a, b), this.imod(a.imul(b))
            }),
            (Red.prototype.mul = function mul(a, b) {
              return this._verify2(a, b), this.imod(a.mul(b))
            }),
            (Red.prototype.isqr = function isqr(a) {
              return this.imul(a, a.clone())
            }),
            (Red.prototype.sqr = function sqr(a) {
              return this.mul(a, a)
            }),
            (Red.prototype.sqrt = function sqrt(a) {
              if (a.isZero()) return a.clone()
              var mod3 = this.m.andln(3)
              if ((assert(mod3 % 2 == 1), 3 === mod3)) {
                var pow = this.m.add(new BN(1)).iushrn(2)
                return this.pow(a, pow)
              }
              for (
                var q = this.m.subn(1), s = 0;
                !q.isZero() && 0 === q.andln(1);

              )
                s++, q.iushrn(1)
              assert(!q.isZero())
              var one = new BN(1).toRed(this),
                nOne = one.redNeg(),
                lpow = this.m.subn(1).iushrn(1),
                z = this.m.bitLength()
              for (
                z = new BN(2 * z * z).toRed(this);
                0 !== this.pow(z, lpow).cmp(nOne);

              )
                z.redIAdd(nOne)
              for (
                var c = this.pow(z, q),
                  r = this.pow(a, q.addn(1).iushrn(1)),
                  t = this.pow(a, q),
                  m = s;
                0 !== t.cmp(one);

              ) {
                for (var tmp = t, i = 0; 0 !== tmp.cmp(one); i++)
                  tmp = tmp.redSqr()
                assert(i < m)
                var b = this.pow(c, new BN(1).iushln(m - i - 1))
                ;(r = r.redMul(b)), (c = b.redSqr()), (t = t.redMul(c)), (m = i)
              }
              return r
            }),
            (Red.prototype.invm = function invm(a) {
              var inv = a._invmp(this.m)
              return 0 !== inv.negative
                ? ((inv.negative = 0), this.imod(inv).redNeg())
                : this.imod(inv)
            }),
            (Red.prototype.pow = function pow(a, num) {
              if (num.isZero()) return new BN(1).toRed(this)
              if (0 === num.cmpn(1)) return a.clone()
              var wnd = new Array(16)
              ;(wnd[0] = new BN(1).toRed(this)), (wnd[1] = a)
              for (var i = 2; i < wnd.length; i++)
                wnd[i] = this.mul(wnd[i - 1], a)
              var res = wnd[0],
                current = 0,
                currentLen = 0,
                start = num.bitLength() % 26
              for (
                0 === start && (start = 26), i = num.length - 1;
                i >= 0;
                i--
              ) {
                for (var word = num.words[i], j = start - 1; j >= 0; j--) {
                  var bit = (word >> j) & 1
                  res !== wnd[0] && (res = this.sqr(res)),
                    0 !== bit || 0 !== current
                      ? ((current <<= 1),
                        (current |= bit),
                        (4 === ++currentLen || (0 === i && 0 === j)) &&
                          ((res = this.mul(res, wnd[current])),
                          (currentLen = 0),
                          (current = 0)))
                      : (currentLen = 0)
                }
                start = 26
              }
              return res
            }),
            (Red.prototype.convertTo = function convertTo(num) {
              var r = num.umod(this.m)
              return r === num ? r.clone() : r
            }),
            (Red.prototype.convertFrom = function convertFrom(num) {
              var res = num.clone()
              return (res.red = null), res
            }),
            (BN.mont = function mont(num) {
              return new Mont(num)
            }),
            inherits(Mont, Red),
            (Mont.prototype.convertTo = function convertTo(num) {
              return this.imod(num.ushln(this.shift))
            }),
            (Mont.prototype.convertFrom = function convertFrom(num) {
              var r = this.imod(num.mul(this.rinv))
              return (r.red = null), r
            }),
            (Mont.prototype.imul = function imul(a, b) {
              if (a.isZero() || b.isZero())
                return (a.words[0] = 0), (a.length = 1), a
              var t = a.imul(b),
                c = t
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                u = t.isub(c).iushrn(this.shift),
                res = u
              return (
                u.cmp(this.m) >= 0
                  ? (res = u.isub(this.m))
                  : u.cmpn(0) < 0 && (res = u.iadd(this.m)),
                res._forceRed(this)
              )
            }),
            (Mont.prototype.mul = function mul(a, b) {
              if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this)
              var t = a.mul(b),
                c = t
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                u = t.isub(c).iushrn(this.shift),
                res = u
              return (
                u.cmp(this.m) >= 0
                  ? (res = u.isub(this.m))
                  : u.cmpn(0) < 0 && (res = u.iadd(this.m)),
                res._forceRed(this)
              )
            }),
            (Mont.prototype.invm = function invm(a) {
              return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
            })
        })((module = __webpack_require__.nmd(module)), this)
      },
      './node_modules/brorand/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var r
        function Rand(rand) {
          this.rand = rand
        }
        if (
          ((module.exports = function rand(len) {
            return r || (r = new Rand(null)), r.generate(len)
          }),
          (module.exports.Rand = Rand),
          (Rand.prototype.generate = function generate(len) {
            return this._rand(len)
          }),
          (Rand.prototype._rand = function _rand(n) {
            if (this.rand.getBytes) return this.rand.getBytes(n)
            for (var res = new Uint8Array(n), i = 0; i < res.length; i++)
              res[i] = this.rand.getByte()
            return res
          }),
          'object' == typeof self)
        )
          self.crypto && self.crypto.getRandomValues
            ? (Rand.prototype._rand = function _rand(n) {
                var arr = new Uint8Array(n)
                return self.crypto.getRandomValues(arr), arr
              })
            : self.msCrypto && self.msCrypto.getRandomValues
              ? (Rand.prototype._rand = function _rand(n) {
                  var arr = new Uint8Array(n)
                  return self.msCrypto.getRandomValues(arr), arr
                })
              : 'object' == typeof window &&
                (Rand.prototype._rand = function () {
                  throw new Error('Not implemented yet')
                })
        else
          try {
            var crypto = __webpack_require__('?3fc0')
            if ('function' != typeof crypto.randomBytes)
              throw new Error('Not supported')
            Rand.prototype._rand = function _rand(n) {
              return crypto.randomBytes(n)
            }
          } catch (e) {}
      },
      './node_modules/browserify-aes/aes.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
          './node_modules/safe-buffer/index.js'
        ).Buffer
        function asUInt32Array(buf) {
          Buffer.isBuffer(buf) || (buf = Buffer.from(buf))
          for (
            var len = (buf.length / 4) | 0, out = new Array(len), i = 0;
            i < len;
            i++
          )
            out[i] = buf.readUInt32BE(4 * i)
          return out
        }
        function scrubVec(v) {
          for (; 0 < v.length; v++) v[0] = 0
        }
        function cryptBlock(M, keySchedule, SUB_MIX, SBOX, nRounds) {
          for (
            var t0,
              t1,
              t2,
              t3,
              SUB_MIX0 = SUB_MIX[0],
              SUB_MIX1 = SUB_MIX[1],
              SUB_MIX2 = SUB_MIX[2],
              SUB_MIX3 = SUB_MIX[3],
              s0 = M[0] ^ keySchedule[0],
              s1 = M[1] ^ keySchedule[1],
              s2 = M[2] ^ keySchedule[2],
              s3 = M[3] ^ keySchedule[3],
              ksRow = 4,
              round = 1;
            round < nRounds;
            round++
          )
            (t0 =
              SUB_MIX0[s0 >>> 24] ^
              SUB_MIX1[(s1 >>> 16) & 255] ^
              SUB_MIX2[(s2 >>> 8) & 255] ^
              SUB_MIX3[255 & s3] ^
              keySchedule[ksRow++]),
              (t1 =
                SUB_MIX0[s1 >>> 24] ^
                SUB_MIX1[(s2 >>> 16) & 255] ^
                SUB_MIX2[(s3 >>> 8) & 255] ^
                SUB_MIX3[255 & s0] ^
                keySchedule[ksRow++]),
              (t2 =
                SUB_MIX0[s2 >>> 24] ^
                SUB_MIX1[(s3 >>> 16) & 255] ^
                SUB_MIX2[(s0 >>> 8) & 255] ^
                SUB_MIX3[255 & s1] ^
                keySchedule[ksRow++]),
              (t3 =
                SUB_MIX0[s3 >>> 24] ^
                SUB_MIX1[(s0 >>> 16) & 255] ^
                SUB_MIX2[(s1 >>> 8) & 255] ^
                SUB_MIX3[255 & s2] ^
                keySchedule[ksRow++]),
              (s0 = t0),
              (s1 = t1),
              (s2 = t2),
              (s3 = t3)
          return (
            (t0 =
              ((SBOX[s0 >>> 24] << 24) |
                (SBOX[(s1 >>> 16) & 255] << 16) |
                (SBOX[(s2 >>> 8) & 255] << 8) |
                SBOX[255 & s3]) ^
              keySchedule[ksRow++]),
            (t1 =
              ((SBOX[s1 >>> 24] << 24) |
                (SBOX[(s2 >>> 16) & 255] << 16) |
                (SBOX[(s3 >>> 8) & 255] << 8) |
                SBOX[255 & s0]) ^
              keySchedule[ksRow++]),
            (t2 =
              ((SBOX[s2 >>> 24] << 24) |
                (SBOX[(s3 >>> 16) & 255] << 16) |
                (SBOX[(s0 >>> 8) & 255] << 8) |
                SBOX[255 & s1]) ^
              keySchedule[ksRow++]),
            (t3 =
              ((SBOX[s3 >>> 24] << 24) |
                (SBOX[(s0 >>> 16) & 255] << 16) |
                (SBOX[(s1 >>> 8) & 255] << 8) |
                SBOX[255 & s2]) ^
              keySchedule[ksRow++]),
            [(t0 >>>= 0), (t1 >>>= 0), (t2 >>>= 0), (t3 >>>= 0)]
          )
        }
        var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
          G = (function () {
            for (var d = new Array(256), j = 0; j < 256; j++)
              d[j] = j < 128 ? j << 1 : (j << 1) ^ 283
            for (
              var SBOX = [],
                INV_SBOX = [],
                SUB_MIX = [[], [], [], []],
                INV_SUB_MIX = [[], [], [], []],
                x = 0,
                xi = 0,
                i = 0;
              i < 256;
              ++i
            ) {
              var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4)
              ;(sx = (sx >>> 8) ^ (255 & sx) ^ 99),
                (SBOX[x] = sx),
                (INV_SBOX[sx] = x)
              var x2 = d[x],
                x4 = d[x2],
                x8 = d[x4],
                t = (257 * d[sx]) ^ (16843008 * sx)
              ;(SUB_MIX[0][x] = (t << 24) | (t >>> 8)),
                (SUB_MIX[1][x] = (t << 16) | (t >>> 16)),
                (SUB_MIX[2][x] = (t << 8) | (t >>> 24)),
                (SUB_MIX[3][x] = t),
                (t =
                  (16843009 * x8) ^ (65537 * x4) ^ (257 * x2) ^ (16843008 * x)),
                (INV_SUB_MIX[0][sx] = (t << 24) | (t >>> 8)),
                (INV_SUB_MIX[1][sx] = (t << 16) | (t >>> 16)),
                (INV_SUB_MIX[2][sx] = (t << 8) | (t >>> 24)),
                (INV_SUB_MIX[3][sx] = t),
                0 === x
                  ? (x = xi = 1)
                  : ((x = x2 ^ d[d[d[x8 ^ x2]]]), (xi ^= d[d[xi]]))
            }
            return { SBOX, INV_SBOX, SUB_MIX, INV_SUB_MIX }
          })()
        function AES(key) {
          ;(this._key = asUInt32Array(key)), this._reset()
        }
        ;(AES.blockSize = 16),
          (AES.keySize = 32),
          (AES.prototype.blockSize = AES.blockSize),
          (AES.prototype.keySize = AES.keySize),
          (AES.prototype._reset = function () {
            for (
              var keyWords = this._key,
                keySize = keyWords.length,
                nRounds = keySize + 6,
                ksRows = 4 * (nRounds + 1),
                keySchedule = [],
                k = 0;
              k < keySize;
              k++
            )
              keySchedule[k] = keyWords[k]
            for (k = keySize; k < ksRows; k++) {
              var t = keySchedule[k - 1]
              k % keySize == 0
                ? ((t = (t << 8) | (t >>> 24)),
                  (t =
                    (G.SBOX[t >>> 24] << 24) |
                    (G.SBOX[(t >>> 16) & 255] << 16) |
                    (G.SBOX[(t >>> 8) & 255] << 8) |
                    G.SBOX[255 & t]),
                  (t ^= RCON[(k / keySize) | 0] << 24))
                : keySize > 6 &&
                  k % keySize == 4 &&
                  (t =
                    (G.SBOX[t >>> 24] << 24) |
                    (G.SBOX[(t >>> 16) & 255] << 16) |
                    (G.SBOX[(t >>> 8) & 255] << 8) |
                    G.SBOX[255 & t]),
                (keySchedule[k] = keySchedule[k - keySize] ^ t)
            }
            for (var invKeySchedule = [], ik = 0; ik < ksRows; ik++) {
              var ksR = ksRows - ik,
                tt = keySchedule[ksR - (ik % 4 ? 0 : 4)]
              invKeySchedule[ik] =
                ik < 4 || ksR <= 4
                  ? tt
                  : G.INV_SUB_MIX[0][G.SBOX[tt >>> 24]] ^
                    G.INV_SUB_MIX[1][G.SBOX[(tt >>> 16) & 255]] ^
                    G.INV_SUB_MIX[2][G.SBOX[(tt >>> 8) & 255]] ^
                    G.INV_SUB_MIX[3][G.SBOX[255 & tt]]
            }
            ;(this._nRounds = nRounds),
              (this._keySchedule = keySchedule),
              (this._invKeySchedule = invKeySchedule)
          }),
          (AES.prototype.encryptBlockRaw = function (M) {
            return cryptBlock(
              (M = asUInt32Array(M)),
              this._keySchedule,
              G.SUB_MIX,
              G.SBOX,
              this._nRounds
            )
          }),
          (AES.prototype.encryptBlock = function (M) {
            var out = this.encryptBlockRaw(M),
              buf = Buffer.allocUnsafe(16)
            return (
              buf.writeUInt32BE(out[0], 0),
              buf.writeUInt32BE(out[1], 4),
              buf.writeUInt32BE(out[2], 8),
              buf.writeUInt32BE(out[3], 12),
              buf
            )
          }),
          (AES.prototype.decryptBlock = function (M) {
            var m1 = (M = asUInt32Array(M))[1]
            ;(M[1] = M[3]), (M[3] = m1)
            var out = cryptBlock(
                M,
                this._invKeySchedule,
                G.INV_SUB_MIX,
                G.INV_SBOX,
                this._nRounds
              ),
              buf = Buffer.allocUnsafe(16)
            return (
              buf.writeUInt32BE(out[0], 0),
              buf.writeUInt32BE(out[3], 4),
              buf.writeUInt32BE(out[2], 8),
              buf.writeUInt32BE(out[1], 12),
              buf
            )
          }),
          (AES.prototype.scrub = function () {
            scrubVec(this._keySchedule),
              scrubVec(this._invKeySchedule),
              scrubVec(this._key)
          }),
          (module.exports.AES = AES)
      },
      './node_modules/browserify-aes/authCipher.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var aes = __webpack_require__('./node_modules/browserify-aes/aes.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          Transform = __webpack_require__(
            './node_modules/cipher-base/index.js'
          ),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          GHASH = __webpack_require__('./node_modules/browserify-aes/ghash.js'),
          xor = __webpack_require__('./node_modules/buffer-xor/index.js'),
          incr32 = __webpack_require__(
            './node_modules/browserify-aes/incr32.js'
          )
        function StreamCipher(mode, key, iv, decrypt) {
          Transform.call(this)
          var h = Buffer.alloc(4, 0)
          this._cipher = new aes.AES(key)
          var ck = this._cipher.encryptBlock(h)
          ;(this._ghash = new GHASH(ck)),
            (iv = (function calcIv(self, iv, ck) {
              if (12 === iv.length)
                return (
                  (self._finID = Buffer.concat([
                    iv,
                    Buffer.from([0, 0, 0, 1]),
                  ])),
                  Buffer.concat([iv, Buffer.from([0, 0, 0, 2])])
                )
              var ghash = new GHASH(ck),
                len = iv.length,
                toPad = len % 16
              ghash.update(iv),
                toPad &&
                  ((toPad = 16 - toPad), ghash.update(Buffer.alloc(toPad, 0))),
                ghash.update(Buffer.alloc(8, 0))
              var ivBits = 8 * len,
                tail = Buffer.alloc(8)
              tail.writeUIntBE(ivBits, 0, 8),
                ghash.update(tail),
                (self._finID = ghash.state)
              var out = Buffer.from(self._finID)
              return incr32(out), out
            })(this, iv, ck)),
            (this._prev = Buffer.from(iv)),
            (this._cache = Buffer.allocUnsafe(0)),
            (this._secCache = Buffer.allocUnsafe(0)),
            (this._decrypt = decrypt),
            (this._alen = 0),
            (this._len = 0),
            (this._mode = mode),
            (this._authTag = null),
            (this._called = !1)
        }
        inherits(StreamCipher, Transform),
          (StreamCipher.prototype._update = function (chunk) {
            if (!this._called && this._alen) {
              var rump = 16 - (this._alen % 16)
              rump < 16 &&
                ((rump = Buffer.alloc(rump, 0)), this._ghash.update(rump))
            }
            this._called = !0
            var out = this._mode.encrypt(this, chunk)
            return (
              this._decrypt
                ? this._ghash.update(chunk)
                : this._ghash.update(out),
              (this._len += chunk.length),
              out
            )
          }),
          (StreamCipher.prototype._final = function () {
            if (this._decrypt && !this._authTag)
              throw new Error(
                'Unsupported state or unable to authenticate data'
              )
            var tag = xor(
              this._ghash.final(8 * this._alen, 8 * this._len),
              this._cipher.encryptBlock(this._finID)
            )
            if (
              this._decrypt &&
              (function xorTest(a, b) {
                var out = 0
                a.length !== b.length && out++
                for (
                  var len = Math.min(a.length, b.length), i = 0;
                  i < len;
                  ++i
                )
                  out += a[i] ^ b[i]
                return out
              })(tag, this._authTag)
            )
              throw new Error(
                'Unsupported state or unable to authenticate data'
              )
            ;(this._authTag = tag), this._cipher.scrub()
          }),
          (StreamCipher.prototype.getAuthTag = function getAuthTag() {
            if (this._decrypt || !Buffer.isBuffer(this._authTag))
              throw new Error('Attempting to get auth tag in unsupported state')
            return this._authTag
          }),
          (StreamCipher.prototype.setAuthTag = function setAuthTag(tag) {
            if (!this._decrypt)
              throw new Error('Attempting to set auth tag in unsupported state')
            this._authTag = tag
          }),
          (StreamCipher.prototype.setAAD = function setAAD(buf) {
            if (this._called)
              throw new Error('Attempting to set AAD in unsupported state')
            this._ghash.update(buf), (this._alen += buf.length)
          }),
          (module.exports = StreamCipher)
      },
      './node_modules/browserify-aes/browser.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var ciphers = __webpack_require__(
            './node_modules/browserify-aes/encrypter.js'
          ),
          deciphers = __webpack_require__(
            './node_modules/browserify-aes/decrypter.js'
          ),
          modes = __webpack_require__(
            './node_modules/browserify-aes/modes/list.json'
          )
        ;(exports.createCipher = exports.Cipher = ciphers.createCipher),
          (exports.createCipheriv = exports.Cipheriv = ciphers.createCipheriv),
          (exports.createDecipher = exports.Decipher =
            deciphers.createDecipher),
          (exports.createDecipheriv = exports.Decipheriv =
            deciphers.createDecipheriv),
          (exports.listCiphers = exports.getCiphers =
            function getCiphers() {
              return Object.keys(modes)
            })
      },
      './node_modules/browserify-aes/decrypter.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var AuthCipher = __webpack_require__(
            './node_modules/browserify-aes/authCipher.js'
          ),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          MODES = __webpack_require__(
            './node_modules/browserify-aes/modes/index.js'
          ),
          StreamCipher = __webpack_require__(
            './node_modules/browserify-aes/streamCipher.js'
          ),
          Transform = __webpack_require__(
            './node_modules/cipher-base/index.js'
          ),
          aes = __webpack_require__('./node_modules/browserify-aes/aes.js'),
          ebtk = __webpack_require__('./node_modules/evp_bytestokey/index.js')
        function Decipher(mode, key, iv) {
          Transform.call(this),
            (this._cache = new Splitter()),
            (this._last = void 0),
            (this._cipher = new aes.AES(key)),
            (this._prev = Buffer.from(iv)),
            (this._mode = mode),
            (this._autopadding = !0)
        }
        function Splitter() {
          this.cache = Buffer.allocUnsafe(0)
        }
        function createDecipheriv(suite, password, iv) {
          var config = MODES[suite.toLowerCase()]
          if (!config) throw new TypeError('invalid suite type')
          if (
            ('string' == typeof iv && (iv = Buffer.from(iv)),
            'GCM' !== config.mode && iv.length !== config.iv)
          )
            throw new TypeError('invalid iv length ' + iv.length)
          if (
            ('string' == typeof password && (password = Buffer.from(password)),
            password.length !== config.key / 8)
          )
            throw new TypeError('invalid key length ' + password.length)
          return 'stream' === config.type
            ? new StreamCipher(config.module, password, iv, !0)
            : 'auth' === config.type
              ? new AuthCipher(config.module, password, iv, !0)
              : new Decipher(config.module, password, iv)
        }
        __webpack_require__('./node_modules/inherits/inherits_browser.js')(
          Decipher,
          Transform
        ),
          (Decipher.prototype._update = function (data) {
            var chunk, thing
            this._cache.add(data)
            for (var out = []; (chunk = this._cache.get(this._autopadding)); )
              (thing = this._mode.decrypt(this, chunk)), out.push(thing)
            return Buffer.concat(out)
          }),
          (Decipher.prototype._final = function () {
            var chunk = this._cache.flush()
            if (this._autopadding)
              return (function unpad(last) {
                var padded = last[15]
                if (padded < 1 || padded > 16)
                  throw new Error('unable to decrypt data')
                var i = -1
                for (; ++i < padded; )
                  if (last[i + (16 - padded)] !== padded)
                    throw new Error('unable to decrypt data')
                if (16 === padded) return
                return last.slice(0, 16 - padded)
              })(this._mode.decrypt(this, chunk))
            if (chunk) throw new Error('data not multiple of block length')
          }),
          (Decipher.prototype.setAutoPadding = function (setTo) {
            return (this._autopadding = !!setTo), this
          }),
          (Splitter.prototype.add = function (data) {
            this.cache = Buffer.concat([this.cache, data])
          }),
          (Splitter.prototype.get = function (autoPadding) {
            var out
            if (autoPadding) {
              if (this.cache.length > 16)
                return (
                  (out = this.cache.slice(0, 16)),
                  (this.cache = this.cache.slice(16)),
                  out
                )
            } else if (this.cache.length >= 16)
              return (
                (out = this.cache.slice(0, 16)),
                (this.cache = this.cache.slice(16)),
                out
              )
            return null
          }),
          (Splitter.prototype.flush = function () {
            if (this.cache.length) return this.cache
          }),
          (exports.createDecipher = function createDecipher(suite, password) {
            var config = MODES[suite.toLowerCase()]
            if (!config) throw new TypeError('invalid suite type')
            var keys = ebtk(password, !1, config.key, config.iv)
            return createDecipheriv(suite, keys.key, keys.iv)
          }),
          (exports.createDecipheriv = createDecipheriv)
      },
      './node_modules/browserify-aes/encrypter.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var MODES = __webpack_require__(
            './node_modules/browserify-aes/modes/index.js'
          ),
          AuthCipher = __webpack_require__(
            './node_modules/browserify-aes/authCipher.js'
          ),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          StreamCipher = __webpack_require__(
            './node_modules/browserify-aes/streamCipher.js'
          ),
          Transform = __webpack_require__(
            './node_modules/cipher-base/index.js'
          ),
          aes = __webpack_require__('./node_modules/browserify-aes/aes.js'),
          ebtk = __webpack_require__('./node_modules/evp_bytestokey/index.js')
        function Cipher(mode, key, iv) {
          Transform.call(this),
            (this._cache = new Splitter()),
            (this._cipher = new aes.AES(key)),
            (this._prev = Buffer.from(iv)),
            (this._mode = mode),
            (this._autopadding = !0)
        }
        __webpack_require__('./node_modules/inherits/inherits_browser.js')(
          Cipher,
          Transform
        ),
          (Cipher.prototype._update = function (data) {
            var chunk, thing
            this._cache.add(data)
            for (var out = []; (chunk = this._cache.get()); )
              (thing = this._mode.encrypt(this, chunk)), out.push(thing)
            return Buffer.concat(out)
          })
        var PADDING = Buffer.alloc(16, 16)
        function Splitter() {
          this.cache = Buffer.allocUnsafe(0)
        }
        function createCipheriv(suite, password, iv) {
          var config = MODES[suite.toLowerCase()]
          if (!config) throw new TypeError('invalid suite type')
          if (
            ('string' == typeof password && (password = Buffer.from(password)),
            password.length !== config.key / 8)
          )
            throw new TypeError('invalid key length ' + password.length)
          if (
            ('string' == typeof iv && (iv = Buffer.from(iv)),
            'GCM' !== config.mode && iv.length !== config.iv)
          )
            throw new TypeError('invalid iv length ' + iv.length)
          return 'stream' === config.type
            ? new StreamCipher(config.module, password, iv)
            : 'auth' === config.type
              ? new AuthCipher(config.module, password, iv)
              : new Cipher(config.module, password, iv)
        }
        ;(Cipher.prototype._final = function () {
          var chunk = this._cache.flush()
          if (this._autopadding)
            return (
              (chunk = this._mode.encrypt(this, chunk)),
              this._cipher.scrub(),
              chunk
            )
          if (!chunk.equals(PADDING))
            throw (
              (this._cipher.scrub(),
              new Error('data not multiple of block length'))
            )
        }),
          (Cipher.prototype.setAutoPadding = function (setTo) {
            return (this._autopadding = !!setTo), this
          }),
          (Splitter.prototype.add = function (data) {
            this.cache = Buffer.concat([this.cache, data])
          }),
          (Splitter.prototype.get = function () {
            if (this.cache.length > 15) {
              var out = this.cache.slice(0, 16)
              return (this.cache = this.cache.slice(16)), out
            }
            return null
          }),
          (Splitter.prototype.flush = function () {
            for (
              var len = 16 - this.cache.length,
                padBuff = Buffer.allocUnsafe(len),
                i = -1;
              ++i < len;

            )
              padBuff.writeUInt8(len, i)
            return Buffer.concat([this.cache, padBuff])
          }),
          (exports.createCipheriv = createCipheriv),
          (exports.createCipher = function createCipher(suite, password) {
            var config = MODES[suite.toLowerCase()]
            if (!config) throw new TypeError('invalid suite type')
            var keys = ebtk(password, !1, config.key, config.iv)
            return createCipheriv(suite, keys.key, keys.iv)
          })
      },
      './node_modules/browserify-aes/ghash.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          ZEROES = Buffer.alloc(16, 0)
        function fromArray(out) {
          var buf = Buffer.allocUnsafe(16)
          return (
            buf.writeUInt32BE(out[0] >>> 0, 0),
            buf.writeUInt32BE(out[1] >>> 0, 4),
            buf.writeUInt32BE(out[2] >>> 0, 8),
            buf.writeUInt32BE(out[3] >>> 0, 12),
            buf
          )
        }
        function GHASH(key) {
          ;(this.h = key),
            (this.state = Buffer.alloc(16, 0)),
            (this.cache = Buffer.allocUnsafe(0))
        }
        ;(GHASH.prototype.ghash = function (block) {
          for (var i = -1; ++i < block.length; ) this.state[i] ^= block[i]
          this._multiply()
        }),
          (GHASH.prototype._multiply = function () {
            for (
              var j,
                lsbVi,
                Vi = (function toArray(buf) {
                  return [
                    buf.readUInt32BE(0),
                    buf.readUInt32BE(4),
                    buf.readUInt32BE(8),
                    buf.readUInt32BE(12),
                  ]
                })(this.h),
                Zi = [0, 0, 0, 0],
                i = -1;
              ++i < 128;

            ) {
              for (
                !!(this.state[~~(i / 8)] & (1 << (7 - (i % 8)))) &&
                  ((Zi[0] ^= Vi[0]),
                  (Zi[1] ^= Vi[1]),
                  (Zi[2] ^= Vi[2]),
                  (Zi[3] ^= Vi[3])),
                  lsbVi = !!(1 & Vi[3]),
                  j = 3;
                j > 0;
                j--
              )
                Vi[j] = (Vi[j] >>> 1) | ((1 & Vi[j - 1]) << 31)
              ;(Vi[0] = Vi[0] >>> 1), lsbVi && (Vi[0] = Vi[0] ^ (225 << 24))
            }
            this.state = fromArray(Zi)
          }),
          (GHASH.prototype.update = function (buf) {
            var chunk
            for (
              this.cache = Buffer.concat([this.cache, buf]);
              this.cache.length >= 16;

            )
              (chunk = this.cache.slice(0, 16)),
                (this.cache = this.cache.slice(16)),
                this.ghash(chunk)
          }),
          (GHASH.prototype.final = function (abl, bl) {
            return (
              this.cache.length &&
                this.ghash(Buffer.concat([this.cache, ZEROES], 16)),
              this.ghash(fromArray([0, abl, 0, bl])),
              this.state
            )
          }),
          (module.exports = GHASH)
      },
      './node_modules/browserify-aes/incr32.js': module => {
        module.exports = function incr32(iv) {
          for (var item, len = iv.length; len--; ) {
            if (255 !== (item = iv.readUInt8(len))) {
              item++, iv.writeUInt8(item, len)
              break
            }
            iv.writeUInt8(0, len)
          }
        }
      },
      './node_modules/browserify-aes/modes/cbc.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var xor = __webpack_require__('./node_modules/buffer-xor/index.js')
        ;(exports.encrypt = function (self, block) {
          var data = xor(block, self._prev)
          return (self._prev = self._cipher.encryptBlock(data)), self._prev
        }),
          (exports.decrypt = function (self, block) {
            var pad = self._prev
            self._prev = block
            var out = self._cipher.decryptBlock(block)
            return xor(out, pad)
          })
      },
      './node_modules/browserify-aes/modes/cfb.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          xor = __webpack_require__('./node_modules/buffer-xor/index.js')
        function encryptStart(self, data, decrypt) {
          var len = data.length,
            out = xor(data, self._cache)
          return (
            (self._cache = self._cache.slice(len)),
            (self._prev = Buffer.concat([self._prev, decrypt ? data : out])),
            out
          )
        }
        exports.encrypt = function (self, data, decrypt) {
          for (var len, out = Buffer.allocUnsafe(0); data.length; ) {
            if (
              (0 === self._cache.length &&
                ((self._cache = self._cipher.encryptBlock(self._prev)),
                (self._prev = Buffer.allocUnsafe(0))),
              !(self._cache.length <= data.length))
            ) {
              out = Buffer.concat([out, encryptStart(self, data, decrypt)])
              break
            }
            ;(len = self._cache.length),
              (out = Buffer.concat([
                out,
                encryptStart(self, data.slice(0, len), decrypt),
              ])),
              (data = data.slice(len))
          }
          return out
        }
      },
      './node_modules/browserify-aes/modes/cfb1.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
          './node_modules/safe-buffer/index.js'
        ).Buffer
        function encryptByte(self, byteParam, decrypt) {
          for (var bit, value, i = -1, out = 0; ++i < 8; )
            (bit = byteParam & (1 << (7 - i)) ? 128 : 0),
              (out +=
                (128 &
                  (value = self._cipher.encryptBlock(self._prev)[0] ^ bit)) >>
                i % 8),
              (self._prev = shiftIn(self._prev, decrypt ? bit : value))
          return out
        }
        function shiftIn(buffer, value) {
          var len = buffer.length,
            i = -1,
            out = Buffer.allocUnsafe(buffer.length)
          for (
            buffer = Buffer.concat([buffer, Buffer.from([value])]);
            ++i < len;

          )
            out[i] = (buffer[i] << 1) | (buffer[i + 1] >> 7)
          return out
        }
        exports.encrypt = function (self, chunk, decrypt) {
          for (
            var len = chunk.length, out = Buffer.allocUnsafe(len), i = -1;
            ++i < len;

          )
            out[i] = encryptByte(self, chunk[i], decrypt)
          return out
        }
      },
      './node_modules/browserify-aes/modes/cfb8.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
          './node_modules/safe-buffer/index.js'
        ).Buffer
        function encryptByte(self, byteParam, decrypt) {
          var out = self._cipher.encryptBlock(self._prev)[0] ^ byteParam
          return (
            (self._prev = Buffer.concat([
              self._prev.slice(1),
              Buffer.from([decrypt ? byteParam : out]),
            ])),
            out
          )
        }
        exports.encrypt = function (self, chunk, decrypt) {
          for (
            var len = chunk.length, out = Buffer.allocUnsafe(len), i = -1;
            ++i < len;

          )
            out[i] = encryptByte(self, chunk[i], decrypt)
          return out
        }
      },
      './node_modules/browserify-aes/modes/ctr.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var xor = __webpack_require__('./node_modules/buffer-xor/index.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          incr32 = __webpack_require__(
            './node_modules/browserify-aes/incr32.js'
          )
        function getBlock(self) {
          var out = self._cipher.encryptBlockRaw(self._prev)
          return incr32(self._prev), out
        }
        exports.encrypt = function (self, chunk) {
          var chunkNum = Math.ceil(chunk.length / 16),
            start = self._cache.length
          self._cache = Buffer.concat([
            self._cache,
            Buffer.allocUnsafe(16 * chunkNum),
          ])
          for (var i = 0; i < chunkNum; i++) {
            var out = getBlock(self),
              offset = start + 16 * i
            self._cache.writeUInt32BE(out[0], offset + 0),
              self._cache.writeUInt32BE(out[1], offset + 4),
              self._cache.writeUInt32BE(out[2], offset + 8),
              self._cache.writeUInt32BE(out[3], offset + 12)
          }
          var pad = self._cache.slice(0, chunk.length)
          return (
            (self._cache = self._cache.slice(chunk.length)), xor(chunk, pad)
          )
        }
      },
      './node_modules/browserify-aes/modes/ecb.js': (
        __unused_webpack_module,
        exports
      ) => {
        ;(exports.encrypt = function (self, block) {
          return self._cipher.encryptBlock(block)
        }),
          (exports.decrypt = function (self, block) {
            return self._cipher.decryptBlock(block)
          })
      },
      './node_modules/browserify-aes/modes/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var modeModules = {
            ECB: __webpack_require__(
              './node_modules/browserify-aes/modes/ecb.js'
            ),
            CBC: __webpack_require__(
              './node_modules/browserify-aes/modes/cbc.js'
            ),
            CFB: __webpack_require__(
              './node_modules/browserify-aes/modes/cfb.js'
            ),
            CFB8: __webpack_require__(
              './node_modules/browserify-aes/modes/cfb8.js'
            ),
            CFB1: __webpack_require__(
              './node_modules/browserify-aes/modes/cfb1.js'
            ),
            OFB: __webpack_require__(
              './node_modules/browserify-aes/modes/ofb.js'
            ),
            CTR: __webpack_require__(
              './node_modules/browserify-aes/modes/ctr.js'
            ),
            GCM: __webpack_require__(
              './node_modules/browserify-aes/modes/ctr.js'
            ),
          },
          modes = __webpack_require__(
            './node_modules/browserify-aes/modes/list.json'
          )
        for (var key in modes) modes[key].module = modeModules[modes[key].mode]
        module.exports = modes
      },
      './node_modules/browserify-aes/modes/ofb.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
            './node_modules/buffer/index.js'
          ).Buffer,
          xor = __webpack_require__('./node_modules/buffer-xor/index.js')
        function getBlock(self) {
          return (
            (self._prev = self._cipher.encryptBlock(self._prev)), self._prev
          )
        }
        exports.encrypt = function (self, chunk) {
          for (; self._cache.length < chunk.length; )
            self._cache = Buffer.concat([self._cache, getBlock(self)])
          var pad = self._cache.slice(0, chunk.length)
          return (
            (self._cache = self._cache.slice(chunk.length)), xor(chunk, pad)
          )
        }
      },
      './node_modules/browserify-aes/streamCipher.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var aes = __webpack_require__('./node_modules/browserify-aes/aes.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          Transform = __webpack_require__('./node_modules/cipher-base/index.js')
        function StreamCipher(mode, key, iv, decrypt) {
          Transform.call(this),
            (this._cipher = new aes.AES(key)),
            (this._prev = Buffer.from(iv)),
            (this._cache = Buffer.allocUnsafe(0)),
            (this._secCache = Buffer.allocUnsafe(0)),
            (this._decrypt = decrypt),
            (this._mode = mode)
        }
        __webpack_require__('./node_modules/inherits/inherits_browser.js')(
          StreamCipher,
          Transform
        ),
          (StreamCipher.prototype._update = function (chunk) {
            return this._mode.encrypt(this, chunk, this._decrypt)
          }),
          (StreamCipher.prototype._final = function () {
            this._cipher.scrub()
          }),
          (module.exports = StreamCipher)
      },
      './node_modules/browserify-cipher/browser.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var DES = __webpack_require__('./node_modules/browserify-des/index.js'),
          aes = __webpack_require__('./node_modules/browserify-aes/browser.js'),
          aesModes = __webpack_require__(
            './node_modules/browserify-aes/modes/index.js'
          ),
          desModes = __webpack_require__(
            './node_modules/browserify-des/modes.js'
          ),
          ebtk = __webpack_require__('./node_modules/evp_bytestokey/index.js')
        function createCipheriv(suite, key, iv) {
          if (((suite = suite.toLowerCase()), aesModes[suite]))
            return aes.createCipheriv(suite, key, iv)
          if (desModes[suite]) return new DES({ key, iv, mode: suite })
          throw new TypeError('invalid suite type')
        }
        function createDecipheriv(suite, key, iv) {
          if (((suite = suite.toLowerCase()), aesModes[suite]))
            return aes.createDecipheriv(suite, key, iv)
          if (desModes[suite])
            return new DES({ key, iv, mode: suite, decrypt: !0 })
          throw new TypeError('invalid suite type')
        }
        ;(exports.createCipher = exports.Cipher =
          function createCipher(suite, password) {
            var keyLen, ivLen
            if (((suite = suite.toLowerCase()), aesModes[suite]))
              (keyLen = aesModes[suite].key), (ivLen = aesModes[suite].iv)
            else {
              if (!desModes[suite]) throw new TypeError('invalid suite type')
              ;(keyLen = 8 * desModes[suite].key), (ivLen = desModes[suite].iv)
            }
            var keys = ebtk(password, !1, keyLen, ivLen)
            return createCipheriv(suite, keys.key, keys.iv)
          }),
          (exports.createCipheriv = exports.Cipheriv = createCipheriv),
          (exports.createDecipher = exports.Decipher =
            function createDecipher(suite, password) {
              var keyLen, ivLen
              if (((suite = suite.toLowerCase()), aesModes[suite]))
                (keyLen = aesModes[suite].key), (ivLen = aesModes[suite].iv)
              else {
                if (!desModes[suite]) throw new TypeError('invalid suite type')
                ;(keyLen = 8 * desModes[suite].key),
                  (ivLen = desModes[suite].iv)
              }
              var keys = ebtk(password, !1, keyLen, ivLen)
              return createDecipheriv(suite, keys.key, keys.iv)
            }),
          (exports.createDecipheriv = exports.Decipheriv = createDecipheriv),
          (exports.listCiphers = exports.getCiphers =
            function getCiphers() {
              return Object.keys(desModes).concat(aes.getCiphers())
            })
      },
      './node_modules/browserify-des/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var CipherBase = __webpack_require__(
            './node_modules/cipher-base/index.js'
          ),
          des = __webpack_require__('./node_modules/des.js/lib/des.js'),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          modes = {
            'des-ede3-cbc': des.CBC.instantiate(des.EDE),
            'des-ede3': des.EDE,
            'des-ede-cbc': des.CBC.instantiate(des.EDE),
            'des-ede': des.EDE,
            'des-cbc': des.CBC.instantiate(des.DES),
            'des-ecb': des.DES,
          }
        function DES(opts) {
          CipherBase.call(this)
          var type,
            modeName = opts.mode.toLowerCase(),
            mode = modes[modeName]
          type = opts.decrypt ? 'decrypt' : 'encrypt'
          var key = opts.key
          Buffer.isBuffer(key) || (key = Buffer.from(key)),
            ('des-ede' !== modeName && 'des-ede-cbc' !== modeName) ||
              (key = Buffer.concat([key, key.slice(0, 8)]))
          var iv = opts.iv
          Buffer.isBuffer(iv) || (iv = Buffer.from(iv)),
            (this._des = mode.create({ key, iv, type }))
        }
        ;(modes.des = modes['des-cbc']),
          (modes.des3 = modes['des-ede3-cbc']),
          (module.exports = DES),
          inherits(DES, CipherBase),
          (DES.prototype._update = function (data) {
            return Buffer.from(this._des.update(data))
          }),
          (DES.prototype._final = function () {
            return Buffer.from(this._des.final())
          })
      },
      './node_modules/browserify-des/modes.js': (
        __unused_webpack_module,
        exports
      ) => {
        ;(exports['des-ecb'] = { key: 8, iv: 0 }),
          (exports['des-cbc'] = exports.des = { key: 8, iv: 8 }),
          (exports['des-ede3-cbc'] = exports.des3 = { key: 24, iv: 8 }),
          (exports['des-ede3'] = { key: 24, iv: 0 }),
          (exports['des-ede-cbc'] = { key: 16, iv: 8 }),
          (exports['des-ede'] = { key: 16, iv: 0 })
      },
      './node_modules/browserify-rsa/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var BN = __webpack_require__(
            './node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js'
          ),
          randomBytes = __webpack_require__(
            './node_modules/randombytes/browser.js'
          ),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer
        function getr(priv) {
          var r,
            len = priv.modulus.byteLength()
          do {
            r = new BN(randomBytes(len))
          } while (
            r.cmp(priv.modulus) >= 0 ||
            !r.umod(priv.prime1) ||
            !r.umod(priv.prime2)
          )
          return r
        }
        function crt(msg, priv) {
          var blinds = (function blind(priv) {
              var r = getr(priv)
              return {
                blinder: r
                  .toRed(BN.mont(priv.modulus))
                  .redPow(new BN(priv.publicExponent))
                  .fromRed(),
                unblinder: r.invm(priv.modulus),
              }
            })(priv),
            len = priv.modulus.byteLength(),
            blinded = new BN(msg).mul(blinds.blinder).umod(priv.modulus),
            c1 = blinded.toRed(BN.mont(priv.prime1)),
            c2 = blinded.toRed(BN.mont(priv.prime2)),
            qinv = priv.coefficient,
            p = priv.prime1,
            q = priv.prime2,
            m1 = c1.redPow(priv.exponent1).fromRed(),
            m2 = c2.redPow(priv.exponent2).fromRed(),
            h = m1.isub(m2).imul(qinv).umod(p).imul(q)
          return m2
            .iadd(h)
            .imul(blinds.unblinder)
            .umod(priv.modulus)
            .toArrayLike(Buffer, 'be', len)
        }
        ;(crt.getr = getr), (module.exports = crt)
      },
      './node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js': function (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) {
        !(function (module, exports) {
          'use strict'
          function assert(val, msg) {
            if (!val) throw new Error(msg || 'Assertion failed')
          }
          function inherits(ctor, superCtor) {
            ctor.super_ = superCtor
            var TempCtor = function () {}
            ;(TempCtor.prototype = superCtor.prototype),
              (ctor.prototype = new TempCtor()),
              (ctor.prototype.constructor = ctor)
          }
          function BN(number, base, endian) {
            if (BN.isBN(number)) return number
            ;(this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== number &&
                (('le' !== base && 'be' !== base) ||
                  ((endian = base), (base = 10)),
                this._init(number || 0, base || 10, endian || 'be'))
          }
          var Buffer
          'object' == typeof module ? (module.exports = BN) : (exports.BN = BN),
            (BN.BN = BN),
            (BN.wordSize = 26)
          try {
            Buffer =
              'undefined' != typeof window && void 0 !== window.Buffer
                ? window.Buffer
                : __webpack_require__('?f9d4').Buffer
          } catch (e) {}
          function parseHex4Bits(string, index) {
            var c = string.charCodeAt(index)
            return c >= 48 && c <= 57
              ? c - 48
              : c >= 65 && c <= 70
                ? c - 55
                : c >= 97 && c <= 102
                  ? c - 87
                  : void assert(!1, 'Invalid character in ' + string)
          }
          function parseHexByte(string, lowerBound, index) {
            var r = parseHex4Bits(string, index)
            return (
              index - 1 >= lowerBound &&
                (r |= parseHex4Bits(string, index - 1) << 4),
              r
            )
          }
          function parseBase(str, start, end, mul) {
            for (
              var r = 0, b = 0, len = Math.min(str.length, end), i = start;
              i < len;
              i++
            ) {
              var c = str.charCodeAt(i) - 48
              ;(r *= mul),
                (b = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
                assert(c >= 0 && b < mul, 'Invalid character'),
                (r += b)
            }
            return r
          }
          function move(dest, src) {
            ;(dest.words = src.words),
              (dest.length = src.length),
              (dest.negative = src.negative),
              (dest.red = src.red)
          }
          if (
            ((BN.isBN = function isBN(num) {
              return (
                num instanceof BN ||
                (null !== num &&
                  'object' == typeof num &&
                  num.constructor.wordSize === BN.wordSize &&
                  Array.isArray(num.words))
              )
            }),
            (BN.max = function max(left, right) {
              return left.cmp(right) > 0 ? left : right
            }),
            (BN.min = function min(left, right) {
              return left.cmp(right) < 0 ? left : right
            }),
            (BN.prototype._init = function init(number, base, endian) {
              if ('number' == typeof number)
                return this._initNumber(number, base, endian)
              if ('object' == typeof number)
                return this._initArray(number, base, endian)
              'hex' === base && (base = 16),
                assert(base === (0 | base) && base >= 2 && base <= 36)
              var start = 0
              '-' === (number = number.toString().replace(/\s+/g, ''))[0] &&
                (start++, (this.negative = 1)),
                start < number.length &&
                  (16 === base
                    ? this._parseHex(number, start, endian)
                    : (this._parseBase(number, base, start),
                      'le' === endian &&
                        this._initArray(this.toArray(), base, endian)))
            }),
            (BN.prototype._initNumber = function _initNumber(
              number,
              base,
              endian
            ) {
              number < 0 && ((this.negative = 1), (number = -number)),
                number < 67108864
                  ? ((this.words = [67108863 & number]), (this.length = 1))
                  : number < 4503599627370496
                    ? ((this.words = [
                        67108863 & number,
                        (number / 67108864) & 67108863,
                      ]),
                      (this.length = 2))
                    : (assert(number < 9007199254740992),
                      (this.words = [
                        67108863 & number,
                        (number / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                'le' === endian && this._initArray(this.toArray(), base, endian)
            }),
            (BN.prototype._initArray = function _initArray(
              number,
              base,
              endian
            ) {
              if (
                (assert('number' == typeof number.length), number.length <= 0)
              )
                return (this.words = [0]), (this.length = 1), this
              ;(this.length = Math.ceil(number.length / 3)),
                (this.words = new Array(this.length))
              for (var i = 0; i < this.length; i++) this.words[i] = 0
              var j,
                w,
                off = 0
              if ('be' === endian)
                for (i = number.length - 1, j = 0; i >= 0; i -= 3)
                  (w =
                    number[i] | (number[i - 1] << 8) | (number[i - 2] << 16)),
                    (this.words[j] |= (w << off) & 67108863),
                    (this.words[j + 1] = (w >>> (26 - off)) & 67108863),
                    (off += 24) >= 26 && ((off -= 26), j++)
              else if ('le' === endian)
                for (i = 0, j = 0; i < number.length; i += 3)
                  (w =
                    number[i] | (number[i + 1] << 8) | (number[i + 2] << 16)),
                    (this.words[j] |= (w << off) & 67108863),
                    (this.words[j + 1] = (w >>> (26 - off)) & 67108863),
                    (off += 24) >= 26 && ((off -= 26), j++)
              return this._strip()
            }),
            (BN.prototype._parseHex = function _parseHex(
              number,
              start,
              endian
            ) {
              ;(this.length = Math.ceil((number.length - start) / 6)),
                (this.words = new Array(this.length))
              for (var i = 0; i < this.length; i++) this.words[i] = 0
              var w,
                off = 0,
                j = 0
              if ('be' === endian)
                for (i = number.length - 1; i >= start; i -= 2)
                  (w = parseHexByte(number, start, i) << off),
                    (this.words[j] |= 67108863 & w),
                    off >= 18
                      ? ((off -= 18), (j += 1), (this.words[j] |= w >>> 26))
                      : (off += 8)
              else
                for (
                  i = (number.length - start) % 2 == 0 ? start + 1 : start;
                  i < number.length;
                  i += 2
                )
                  (w = parseHexByte(number, start, i) << off),
                    (this.words[j] |= 67108863 & w),
                    off >= 18
                      ? ((off -= 18), (j += 1), (this.words[j] |= w >>> 26))
                      : (off += 8)
              this._strip()
            }),
            (BN.prototype._parseBase = function _parseBase(
              number,
              base,
              start
            ) {
              ;(this.words = [0]), (this.length = 1)
              for (
                var limbLen = 0, limbPow = 1;
                limbPow <= 67108863;
                limbPow *= base
              )
                limbLen++
              limbLen--, (limbPow = (limbPow / base) | 0)
              for (
                var total = number.length - start,
                  mod = total % limbLen,
                  end = Math.min(total, total - mod) + start,
                  word = 0,
                  i = start;
                i < end;
                i += limbLen
              )
                (word = parseBase(number, i, i + limbLen, base)),
                  this.imuln(limbPow),
                  this.words[0] + word < 67108864
                    ? (this.words[0] += word)
                    : this._iaddn(word)
              if (0 !== mod) {
                var pow = 1
                for (
                  word = parseBase(number, i, number.length, base), i = 0;
                  i < mod;
                  i++
                )
                  pow *= base
                this.imuln(pow),
                  this.words[0] + word < 67108864
                    ? (this.words[0] += word)
                    : this._iaddn(word)
              }
              this._strip()
            }),
            (BN.prototype.copy = function copy(dest) {
              dest.words = new Array(this.length)
              for (var i = 0; i < this.length; i++)
                dest.words[i] = this.words[i]
              ;(dest.length = this.length),
                (dest.negative = this.negative),
                (dest.red = this.red)
            }),
            (BN.prototype._move = function _move(dest) {
              move(dest, this)
            }),
            (BN.prototype.clone = function clone() {
              var r = new BN(null)
              return this.copy(r), r
            }),
            (BN.prototype._expand = function _expand(size) {
              for (; this.length < size; ) this.words[this.length++] = 0
              return this
            }),
            (BN.prototype._strip = function strip() {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--
              return this._normSign()
            }),
            (BN.prototype._normSign = function _normSign() {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              )
            }),
            'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
          )
            try {
              BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect
            } catch (e) {
              BN.prototype.inspect = inspect
            }
          else BN.prototype.inspect = inspect
          function inspect() {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
          }
          var zeros = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000',
            ],
            groupSizes = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            groupBases = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ]
          ;(BN.prototype.toString = function toString(base, padding) {
            var out
            if (
              ((padding = 0 | padding || 1),
              16 === (base = base || 10) || 'hex' === base)
            ) {
              out = ''
              for (var off = 0, carry = 0, i = 0; i < this.length; i++) {
                var w = this.words[i],
                  word = (16777215 & ((w << off) | carry)).toString(16)
                ;(carry = (w >>> (24 - off)) & 16777215),
                  (off += 2) >= 26 && ((off -= 26), i--),
                  (out =
                    0 !== carry || i !== this.length - 1
                      ? zeros[6 - word.length] + word + out
                      : word + out)
              }
              for (
                0 !== carry && (out = carry.toString(16) + out);
                out.length % padding != 0;

              )
                out = '0' + out
              return 0 !== this.negative && (out = '-' + out), out
            }
            if (base === (0 | base) && base >= 2 && base <= 36) {
              var groupSize = groupSizes[base],
                groupBase = groupBases[base]
              out = ''
              var c = this.clone()
              for (c.negative = 0; !c.isZero(); ) {
                var r = c.modrn(groupBase).toString(base)
                out = (c = c.idivn(groupBase)).isZero()
                  ? r + out
                  : zeros[groupSize - r.length] + r + out
              }
              for (
                this.isZero() && (out = '0' + out);
                out.length % padding != 0;

              )
                out = '0' + out
              return 0 !== this.negative && (out = '-' + out), out
            }
            assert(!1, 'Base should be between 2 and 36')
          }),
            (BN.prototype.toNumber = function toNumber() {
              var ret = this.words[0]
              return (
                2 === this.length
                  ? (ret += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (ret += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      assert(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -ret : ret
              )
            }),
            (BN.prototype.toJSON = function toJSON() {
              return this.toString(16, 2)
            }),
            Buffer &&
              (BN.prototype.toBuffer = function toBuffer(endian, length) {
                return this.toArrayLike(Buffer, endian, length)
              }),
            (BN.prototype.toArray = function toArray(endian, length) {
              return this.toArrayLike(Array, endian, length)
            })
          function smallMulTo(self, num, out) {
            out.negative = num.negative ^ self.negative
            var len = (self.length + num.length) | 0
            ;(out.length = len), (len = (len - 1) | 0)
            var a = 0 | self.words[0],
              b = 0 | num.words[0],
              r = a * b,
              lo = 67108863 & r,
              carry = (r / 67108864) | 0
            out.words[0] = lo
            for (var k = 1; k < len; k++) {
              for (
                var ncarry = carry >>> 26,
                  rword = 67108863 & carry,
                  maxJ = Math.min(k, num.length - 1),
                  j = Math.max(0, k - self.length + 1);
                j <= maxJ;
                j++
              ) {
                var i = (k - j) | 0
                ;(ncarry +=
                  ((r =
                    (a = 0 | self.words[i]) * (b = 0 | num.words[j]) + rword) /
                    67108864) |
                  0),
                  (rword = 67108863 & r)
              }
              ;(out.words[k] = 0 | rword), (carry = 0 | ncarry)
            }
            return (
              0 !== carry ? (out.words[k] = 0 | carry) : out.length--,
              out._strip()
            )
          }
          ;(BN.prototype.toArrayLike = function toArrayLike(
            ArrayType,
            endian,
            length
          ) {
            this._strip()
            var byteLength = this.byteLength(),
              reqLength = length || Math.max(1, byteLength)
            assert(
              byteLength <= reqLength,
              'byte array longer than desired length'
            ),
              assert(reqLength > 0, 'Requested array length <= 0')
            var res = (function allocate(ArrayType, size) {
              return ArrayType.allocUnsafe
                ? ArrayType.allocUnsafe(size)
                : new ArrayType(size)
            })(ArrayType, reqLength)
            return (
              this['_toArrayLike' + ('le' === endian ? 'LE' : 'BE')](
                res,
                byteLength
              ),
              res
            )
          }),
            (BN.prototype._toArrayLikeLE = function _toArrayLikeLE(
              res,
              byteLength
            ) {
              for (
                var position = 0, carry = 0, i = 0, shift = 0;
                i < this.length;
                i++
              ) {
                var word = (this.words[i] << shift) | carry
                ;(res[position++] = 255 & word),
                  position < res.length &&
                    (res[position++] = (word >> 8) & 255),
                  position < res.length &&
                    (res[position++] = (word >> 16) & 255),
                  6 === shift
                    ? (position < res.length &&
                        (res[position++] = (word >> 24) & 255),
                      (carry = 0),
                      (shift = 0))
                    : ((carry = word >>> 24), (shift += 2))
              }
              if (position < res.length)
                for (res[position++] = carry; position < res.length; )
                  res[position++] = 0
            }),
            (BN.prototype._toArrayLikeBE = function _toArrayLikeBE(
              res,
              byteLength
            ) {
              for (
                var position = res.length - 1, carry = 0, i = 0, shift = 0;
                i < this.length;
                i++
              ) {
                var word = (this.words[i] << shift) | carry
                ;(res[position--] = 255 & word),
                  position >= 0 && (res[position--] = (word >> 8) & 255),
                  position >= 0 && (res[position--] = (word >> 16) & 255),
                  6 === shift
                    ? (position >= 0 && (res[position--] = (word >> 24) & 255),
                      (carry = 0),
                      (shift = 0))
                    : ((carry = word >>> 24), (shift += 2))
              }
              if (position >= 0)
                for (res[position--] = carry; position >= 0; )
                  res[position--] = 0
            }),
            Math.clz32
              ? (BN.prototype._countBits = function _countBits(w) {
                  return 32 - Math.clz32(w)
                })
              : (BN.prototype._countBits = function _countBits(w) {
                  var t = w,
                    r = 0
                  return (
                    t >= 4096 && ((r += 13), (t >>>= 13)),
                    t >= 64 && ((r += 7), (t >>>= 7)),
                    t >= 8 && ((r += 4), (t >>>= 4)),
                    t >= 2 && ((r += 2), (t >>>= 2)),
                    r + t
                  )
                }),
            (BN.prototype._zeroBits = function _zeroBits(w) {
              if (0 === w) return 26
              var t = w,
                r = 0
              return (
                8191 & t || ((r += 13), (t >>>= 13)),
                127 & t || ((r += 7), (t >>>= 7)),
                15 & t || ((r += 4), (t >>>= 4)),
                3 & t || ((r += 2), (t >>>= 2)),
                1 & t || r++,
                r
              )
            }),
            (BN.prototype.bitLength = function bitLength() {
              var w = this.words[this.length - 1],
                hi = this._countBits(w)
              return 26 * (this.length - 1) + hi
            }),
            (BN.prototype.zeroBits = function zeroBits() {
              if (this.isZero()) return 0
              for (var r = 0, i = 0; i < this.length; i++) {
                var b = this._zeroBits(this.words[i])
                if (((r += b), 26 !== b)) break
              }
              return r
            }),
            (BN.prototype.byteLength = function byteLength() {
              return Math.ceil(this.bitLength() / 8)
            }),
            (BN.prototype.toTwos = function toTwos(width) {
              return 0 !== this.negative
                ? this.abs().inotn(width).iaddn(1)
                : this.clone()
            }),
            (BN.prototype.fromTwos = function fromTwos(width) {
              return this.testn(width - 1)
                ? this.notn(width).iaddn(1).ineg()
                : this.clone()
            }),
            (BN.prototype.isNeg = function isNeg() {
              return 0 !== this.negative
            }),
            (BN.prototype.neg = function neg() {
              return this.clone().ineg()
            }),
            (BN.prototype.ineg = function ineg() {
              return this.isZero() || (this.negative ^= 1), this
            }),
            (BN.prototype.iuor = function iuor(num) {
              for (; this.length < num.length; ) this.words[this.length++] = 0
              for (var i = 0; i < num.length; i++)
                this.words[i] = this.words[i] | num.words[i]
              return this._strip()
            }),
            (BN.prototype.ior = function ior(num) {
              return assert(!(this.negative | num.negative)), this.iuor(num)
            }),
            (BN.prototype.or = function or(num) {
              return this.length > num.length
                ? this.clone().ior(num)
                : num.clone().ior(this)
            }),
            (BN.prototype.uor = function uor(num) {
              return this.length > num.length
                ? this.clone().iuor(num)
                : num.clone().iuor(this)
            }),
            (BN.prototype.iuand = function iuand(num) {
              var b
              b = this.length > num.length ? num : this
              for (var i = 0; i < b.length; i++)
                this.words[i] = this.words[i] & num.words[i]
              return (this.length = b.length), this._strip()
            }),
            (BN.prototype.iand = function iand(num) {
              return assert(!(this.negative | num.negative)), this.iuand(num)
            }),
            (BN.prototype.and = function and(num) {
              return this.length > num.length
                ? this.clone().iand(num)
                : num.clone().iand(this)
            }),
            (BN.prototype.uand = function uand(num) {
              return this.length > num.length
                ? this.clone().iuand(num)
                : num.clone().iuand(this)
            }),
            (BN.prototype.iuxor = function iuxor(num) {
              var a, b
              this.length > num.length
                ? ((a = this), (b = num))
                : ((a = num), (b = this))
              for (var i = 0; i < b.length; i++)
                this.words[i] = a.words[i] ^ b.words[i]
              if (this !== a)
                for (; i < a.length; i++) this.words[i] = a.words[i]
              return (this.length = a.length), this._strip()
            }),
            (BN.prototype.ixor = function ixor(num) {
              return assert(!(this.negative | num.negative)), this.iuxor(num)
            }),
            (BN.prototype.xor = function xor(num) {
              return this.length > num.length
                ? this.clone().ixor(num)
                : num.clone().ixor(this)
            }),
            (BN.prototype.uxor = function uxor(num) {
              return this.length > num.length
                ? this.clone().iuxor(num)
                : num.clone().iuxor(this)
            }),
            (BN.prototype.inotn = function inotn(width) {
              assert('number' == typeof width && width >= 0)
              var bytesNeeded = 0 | Math.ceil(width / 26),
                bitsLeft = width % 26
              this._expand(bytesNeeded), bitsLeft > 0 && bytesNeeded--
              for (var i = 0; i < bytesNeeded; i++)
                this.words[i] = 67108863 & ~this.words[i]
              return (
                bitsLeft > 0 &&
                  (this.words[i] =
                    ~this.words[i] & (67108863 >> (26 - bitsLeft))),
                this._strip()
              )
            }),
            (BN.prototype.notn = function notn(width) {
              return this.clone().inotn(width)
            }),
            (BN.prototype.setn = function setn(bit, val) {
              assert('number' == typeof bit && bit >= 0)
              var off = (bit / 26) | 0,
                wbit = bit % 26
              return (
                this._expand(off + 1),
                (this.words[off] = val
                  ? this.words[off] | (1 << wbit)
                  : this.words[off] & ~(1 << wbit)),
                this._strip()
              )
            }),
            (BN.prototype.iadd = function iadd(num) {
              var r, a, b
              if (0 !== this.negative && 0 === num.negative)
                return (
                  (this.negative = 0),
                  (r = this.isub(num)),
                  (this.negative ^= 1),
                  this._normSign()
                )
              if (0 === this.negative && 0 !== num.negative)
                return (
                  (num.negative = 0),
                  (r = this.isub(num)),
                  (num.negative = 1),
                  r._normSign()
                )
              this.length > num.length
                ? ((a = this), (b = num))
                : ((a = num), (b = this))
              for (var carry = 0, i = 0; i < b.length; i++)
                (r = (0 | a.words[i]) + (0 | b.words[i]) + carry),
                  (this.words[i] = 67108863 & r),
                  (carry = r >>> 26)
              for (; 0 !== carry && i < a.length; i++)
                (r = (0 | a.words[i]) + carry),
                  (this.words[i] = 67108863 & r),
                  (carry = r >>> 26)
              if (((this.length = a.length), 0 !== carry))
                (this.words[this.length] = carry), this.length++
              else if (a !== this)
                for (; i < a.length; i++) this.words[i] = a.words[i]
              return this
            }),
            (BN.prototype.add = function add(num) {
              var res
              return 0 !== num.negative && 0 === this.negative
                ? ((num.negative = 0),
                  (res = this.sub(num)),
                  (num.negative ^= 1),
                  res)
                : 0 === num.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (res = num.sub(this)),
                    (this.negative = 1),
                    res)
                  : this.length > num.length
                    ? this.clone().iadd(num)
                    : num.clone().iadd(this)
            }),
            (BN.prototype.isub = function isub(num) {
              if (0 !== num.negative) {
                num.negative = 0
                var r = this.iadd(num)
                return (num.negative = 1), r._normSign()
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(num),
                  (this.negative = 1),
                  this._normSign()
                )
              var a,
                b,
                cmp = this.cmp(num)
              if (0 === cmp)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                )
              cmp > 0 ? ((a = this), (b = num)) : ((a = num), (b = this))
              for (var carry = 0, i = 0; i < b.length; i++)
                (carry =
                  (r = (0 | a.words[i]) - (0 | b.words[i]) + carry) >> 26),
                  (this.words[i] = 67108863 & r)
              for (; 0 !== carry && i < a.length; i++)
                (carry = (r = (0 | a.words[i]) + carry) >> 26),
                  (this.words[i] = 67108863 & r)
              if (0 === carry && i < a.length && a !== this)
                for (; i < a.length; i++) this.words[i] = a.words[i]
              return (
                (this.length = Math.max(this.length, i)),
                a !== this && (this.negative = 1),
                this._strip()
              )
            }),
            (BN.prototype.sub = function sub(num) {
              return this.clone().isub(num)
            })
          var comb10MulTo = function comb10MulTo(self, num, out) {
            var lo,
              mid,
              hi,
              a = self.words,
              b = num.words,
              o = out.words,
              c = 0,
              a0 = 0 | a[0],
              al0 = 8191 & a0,
              ah0 = a0 >>> 13,
              a1 = 0 | a[1],
              al1 = 8191 & a1,
              ah1 = a1 >>> 13,
              a2 = 0 | a[2],
              al2 = 8191 & a2,
              ah2 = a2 >>> 13,
              a3 = 0 | a[3],
              al3 = 8191 & a3,
              ah3 = a3 >>> 13,
              a4 = 0 | a[4],
              al4 = 8191 & a4,
              ah4 = a4 >>> 13,
              a5 = 0 | a[5],
              al5 = 8191 & a5,
              ah5 = a5 >>> 13,
              a6 = 0 | a[6],
              al6 = 8191 & a6,
              ah6 = a6 >>> 13,
              a7 = 0 | a[7],
              al7 = 8191 & a7,
              ah7 = a7 >>> 13,
              a8 = 0 | a[8],
              al8 = 8191 & a8,
              ah8 = a8 >>> 13,
              a9 = 0 | a[9],
              al9 = 8191 & a9,
              ah9 = a9 >>> 13,
              b0 = 0 | b[0],
              bl0 = 8191 & b0,
              bh0 = b0 >>> 13,
              b1 = 0 | b[1],
              bl1 = 8191 & b1,
              bh1 = b1 >>> 13,
              b2 = 0 | b[2],
              bl2 = 8191 & b2,
              bh2 = b2 >>> 13,
              b3 = 0 | b[3],
              bl3 = 8191 & b3,
              bh3 = b3 >>> 13,
              b4 = 0 | b[4],
              bl4 = 8191 & b4,
              bh4 = b4 >>> 13,
              b5 = 0 | b[5],
              bl5 = 8191 & b5,
              bh5 = b5 >>> 13,
              b6 = 0 | b[6],
              bl6 = 8191 & b6,
              bh6 = b6 >>> 13,
              b7 = 0 | b[7],
              bl7 = 8191 & b7,
              bh7 = b7 >>> 13,
              b8 = 0 | b[8],
              bl8 = 8191 & b8,
              bh8 = b8 >>> 13,
              b9 = 0 | b[9],
              bl9 = 8191 & b9,
              bh9 = b9 >>> 13
            ;(out.negative = self.negative ^ num.negative), (out.length = 19)
            var w0 =
              (((c + (lo = Math.imul(al0, bl0))) | 0) +
                ((8191 &
                  (mid =
                    ((mid = Math.imul(al0, bh0)) + Math.imul(ah0, bl0)) | 0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = Math.imul(ah0, bh0)) + (mid >>> 13)) | 0) +
                (w0 >>> 26)) |
              0),
              (w0 &= 67108863),
              (lo = Math.imul(al1, bl0)),
              (mid = ((mid = Math.imul(al1, bh0)) + Math.imul(ah1, bl0)) | 0),
              (hi = Math.imul(ah1, bh0))
            var w1 =
              (((c + (lo = (lo + Math.imul(al0, bl1)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh1)) | 0) +
                      Math.imul(ah0, bl1)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh1)) | 0) + (mid >>> 13)) | 0) +
                (w1 >>> 26)) |
              0),
              (w1 &= 67108863),
              (lo = Math.imul(al2, bl0)),
              (mid = ((mid = Math.imul(al2, bh0)) + Math.imul(ah2, bl0)) | 0),
              (hi = Math.imul(ah2, bh0)),
              (lo = (lo + Math.imul(al1, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh1)) | 0) +
                  Math.imul(ah1, bl1)) |
                0),
              (hi = (hi + Math.imul(ah1, bh1)) | 0)
            var w2 =
              (((c + (lo = (lo + Math.imul(al0, bl2)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh2)) | 0) +
                      Math.imul(ah0, bl2)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh2)) | 0) + (mid >>> 13)) | 0) +
                (w2 >>> 26)) |
              0),
              (w2 &= 67108863),
              (lo = Math.imul(al3, bl0)),
              (mid = ((mid = Math.imul(al3, bh0)) + Math.imul(ah3, bl0)) | 0),
              (hi = Math.imul(ah3, bh0)),
              (lo = (lo + Math.imul(al2, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh1)) | 0) +
                  Math.imul(ah2, bl1)) |
                0),
              (hi = (hi + Math.imul(ah2, bh1)) | 0),
              (lo = (lo + Math.imul(al1, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh2)) | 0) +
                  Math.imul(ah1, bl2)) |
                0),
              (hi = (hi + Math.imul(ah1, bh2)) | 0)
            var w3 =
              (((c + (lo = (lo + Math.imul(al0, bl3)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh3)) | 0) +
                      Math.imul(ah0, bl3)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh3)) | 0) + (mid >>> 13)) | 0) +
                (w3 >>> 26)) |
              0),
              (w3 &= 67108863),
              (lo = Math.imul(al4, bl0)),
              (mid = ((mid = Math.imul(al4, bh0)) + Math.imul(ah4, bl0)) | 0),
              (hi = Math.imul(ah4, bh0)),
              (lo = (lo + Math.imul(al3, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh1)) | 0) +
                  Math.imul(ah3, bl1)) |
                0),
              (hi = (hi + Math.imul(ah3, bh1)) | 0),
              (lo = (lo + Math.imul(al2, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh2)) | 0) +
                  Math.imul(ah2, bl2)) |
                0),
              (hi = (hi + Math.imul(ah2, bh2)) | 0),
              (lo = (lo + Math.imul(al1, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh3)) | 0) +
                  Math.imul(ah1, bl3)) |
                0),
              (hi = (hi + Math.imul(ah1, bh3)) | 0)
            var w4 =
              (((c + (lo = (lo + Math.imul(al0, bl4)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh4)) | 0) +
                      Math.imul(ah0, bl4)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh4)) | 0) + (mid >>> 13)) | 0) +
                (w4 >>> 26)) |
              0),
              (w4 &= 67108863),
              (lo = Math.imul(al5, bl0)),
              (mid = ((mid = Math.imul(al5, bh0)) + Math.imul(ah5, bl0)) | 0),
              (hi = Math.imul(ah5, bh0)),
              (lo = (lo + Math.imul(al4, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh1)) | 0) +
                  Math.imul(ah4, bl1)) |
                0),
              (hi = (hi + Math.imul(ah4, bh1)) | 0),
              (lo = (lo + Math.imul(al3, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh2)) | 0) +
                  Math.imul(ah3, bl2)) |
                0),
              (hi = (hi + Math.imul(ah3, bh2)) | 0),
              (lo = (lo + Math.imul(al2, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh3)) | 0) +
                  Math.imul(ah2, bl3)) |
                0),
              (hi = (hi + Math.imul(ah2, bh3)) | 0),
              (lo = (lo + Math.imul(al1, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh4)) | 0) +
                  Math.imul(ah1, bl4)) |
                0),
              (hi = (hi + Math.imul(ah1, bh4)) | 0)
            var w5 =
              (((c + (lo = (lo + Math.imul(al0, bl5)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh5)) | 0) +
                      Math.imul(ah0, bl5)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh5)) | 0) + (mid >>> 13)) | 0) +
                (w5 >>> 26)) |
              0),
              (w5 &= 67108863),
              (lo = Math.imul(al6, bl0)),
              (mid = ((mid = Math.imul(al6, bh0)) + Math.imul(ah6, bl0)) | 0),
              (hi = Math.imul(ah6, bh0)),
              (lo = (lo + Math.imul(al5, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh1)) | 0) +
                  Math.imul(ah5, bl1)) |
                0),
              (hi = (hi + Math.imul(ah5, bh1)) | 0),
              (lo = (lo + Math.imul(al4, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh2)) | 0) +
                  Math.imul(ah4, bl2)) |
                0),
              (hi = (hi + Math.imul(ah4, bh2)) | 0),
              (lo = (lo + Math.imul(al3, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh3)) | 0) +
                  Math.imul(ah3, bl3)) |
                0),
              (hi = (hi + Math.imul(ah3, bh3)) | 0),
              (lo = (lo + Math.imul(al2, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh4)) | 0) +
                  Math.imul(ah2, bl4)) |
                0),
              (hi = (hi + Math.imul(ah2, bh4)) | 0),
              (lo = (lo + Math.imul(al1, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh5)) | 0) +
                  Math.imul(ah1, bl5)) |
                0),
              (hi = (hi + Math.imul(ah1, bh5)) | 0)
            var w6 =
              (((c + (lo = (lo + Math.imul(al0, bl6)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh6)) | 0) +
                      Math.imul(ah0, bl6)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh6)) | 0) + (mid >>> 13)) | 0) +
                (w6 >>> 26)) |
              0),
              (w6 &= 67108863),
              (lo = Math.imul(al7, bl0)),
              (mid = ((mid = Math.imul(al7, bh0)) + Math.imul(ah7, bl0)) | 0),
              (hi = Math.imul(ah7, bh0)),
              (lo = (lo + Math.imul(al6, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh1)) | 0) +
                  Math.imul(ah6, bl1)) |
                0),
              (hi = (hi + Math.imul(ah6, bh1)) | 0),
              (lo = (lo + Math.imul(al5, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh2)) | 0) +
                  Math.imul(ah5, bl2)) |
                0),
              (hi = (hi + Math.imul(ah5, bh2)) | 0),
              (lo = (lo + Math.imul(al4, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh3)) | 0) +
                  Math.imul(ah4, bl3)) |
                0),
              (hi = (hi + Math.imul(ah4, bh3)) | 0),
              (lo = (lo + Math.imul(al3, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh4)) | 0) +
                  Math.imul(ah3, bl4)) |
                0),
              (hi = (hi + Math.imul(ah3, bh4)) | 0),
              (lo = (lo + Math.imul(al2, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh5)) | 0) +
                  Math.imul(ah2, bl5)) |
                0),
              (hi = (hi + Math.imul(ah2, bh5)) | 0),
              (lo = (lo + Math.imul(al1, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh6)) | 0) +
                  Math.imul(ah1, bl6)) |
                0),
              (hi = (hi + Math.imul(ah1, bh6)) | 0)
            var w7 =
              (((c + (lo = (lo + Math.imul(al0, bl7)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh7)) | 0) +
                      Math.imul(ah0, bl7)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh7)) | 0) + (mid >>> 13)) | 0) +
                (w7 >>> 26)) |
              0),
              (w7 &= 67108863),
              (lo = Math.imul(al8, bl0)),
              (mid = ((mid = Math.imul(al8, bh0)) + Math.imul(ah8, bl0)) | 0),
              (hi = Math.imul(ah8, bh0)),
              (lo = (lo + Math.imul(al7, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh1)) | 0) +
                  Math.imul(ah7, bl1)) |
                0),
              (hi = (hi + Math.imul(ah7, bh1)) | 0),
              (lo = (lo + Math.imul(al6, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh2)) | 0) +
                  Math.imul(ah6, bl2)) |
                0),
              (hi = (hi + Math.imul(ah6, bh2)) | 0),
              (lo = (lo + Math.imul(al5, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh3)) | 0) +
                  Math.imul(ah5, bl3)) |
                0),
              (hi = (hi + Math.imul(ah5, bh3)) | 0),
              (lo = (lo + Math.imul(al4, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh4)) | 0) +
                  Math.imul(ah4, bl4)) |
                0),
              (hi = (hi + Math.imul(ah4, bh4)) | 0),
              (lo = (lo + Math.imul(al3, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh5)) | 0) +
                  Math.imul(ah3, bl5)) |
                0),
              (hi = (hi + Math.imul(ah3, bh5)) | 0),
              (lo = (lo + Math.imul(al2, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh6)) | 0) +
                  Math.imul(ah2, bl6)) |
                0),
              (hi = (hi + Math.imul(ah2, bh6)) | 0),
              (lo = (lo + Math.imul(al1, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh7)) | 0) +
                  Math.imul(ah1, bl7)) |
                0),
              (hi = (hi + Math.imul(ah1, bh7)) | 0)
            var w8 =
              (((c + (lo = (lo + Math.imul(al0, bl8)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh8)) | 0) +
                      Math.imul(ah0, bl8)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh8)) | 0) + (mid >>> 13)) | 0) +
                (w8 >>> 26)) |
              0),
              (w8 &= 67108863),
              (lo = Math.imul(al9, bl0)),
              (mid = ((mid = Math.imul(al9, bh0)) + Math.imul(ah9, bl0)) | 0),
              (hi = Math.imul(ah9, bh0)),
              (lo = (lo + Math.imul(al8, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh1)) | 0) +
                  Math.imul(ah8, bl1)) |
                0),
              (hi = (hi + Math.imul(ah8, bh1)) | 0),
              (lo = (lo + Math.imul(al7, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh2)) | 0) +
                  Math.imul(ah7, bl2)) |
                0),
              (hi = (hi + Math.imul(ah7, bh2)) | 0),
              (lo = (lo + Math.imul(al6, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh3)) | 0) +
                  Math.imul(ah6, bl3)) |
                0),
              (hi = (hi + Math.imul(ah6, bh3)) | 0),
              (lo = (lo + Math.imul(al5, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh4)) | 0) +
                  Math.imul(ah5, bl4)) |
                0),
              (hi = (hi + Math.imul(ah5, bh4)) | 0),
              (lo = (lo + Math.imul(al4, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh5)) | 0) +
                  Math.imul(ah4, bl5)) |
                0),
              (hi = (hi + Math.imul(ah4, bh5)) | 0),
              (lo = (lo + Math.imul(al3, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh6)) | 0) +
                  Math.imul(ah3, bl6)) |
                0),
              (hi = (hi + Math.imul(ah3, bh6)) | 0),
              (lo = (lo + Math.imul(al2, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh7)) | 0) +
                  Math.imul(ah2, bl7)) |
                0),
              (hi = (hi + Math.imul(ah2, bh7)) | 0),
              (lo = (lo + Math.imul(al1, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh8)) | 0) +
                  Math.imul(ah1, bl8)) |
                0),
              (hi = (hi + Math.imul(ah1, bh8)) | 0)
            var w9 =
              (((c + (lo = (lo + Math.imul(al0, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh9)) | 0) +
                      Math.imul(ah0, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w9 >>> 26)) |
              0),
              (w9 &= 67108863),
              (lo = Math.imul(al9, bl1)),
              (mid = ((mid = Math.imul(al9, bh1)) + Math.imul(ah9, bl1)) | 0),
              (hi = Math.imul(ah9, bh1)),
              (lo = (lo + Math.imul(al8, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh2)) | 0) +
                  Math.imul(ah8, bl2)) |
                0),
              (hi = (hi + Math.imul(ah8, bh2)) | 0),
              (lo = (lo + Math.imul(al7, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh3)) | 0) +
                  Math.imul(ah7, bl3)) |
                0),
              (hi = (hi + Math.imul(ah7, bh3)) | 0),
              (lo = (lo + Math.imul(al6, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh4)) | 0) +
                  Math.imul(ah6, bl4)) |
                0),
              (hi = (hi + Math.imul(ah6, bh4)) | 0),
              (lo = (lo + Math.imul(al5, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh5)) | 0) +
                  Math.imul(ah5, bl5)) |
                0),
              (hi = (hi + Math.imul(ah5, bh5)) | 0),
              (lo = (lo + Math.imul(al4, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh6)) | 0) +
                  Math.imul(ah4, bl6)) |
                0),
              (hi = (hi + Math.imul(ah4, bh6)) | 0),
              (lo = (lo + Math.imul(al3, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh7)) | 0) +
                  Math.imul(ah3, bl7)) |
                0),
              (hi = (hi + Math.imul(ah3, bh7)) | 0),
              (lo = (lo + Math.imul(al2, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh8)) | 0) +
                  Math.imul(ah2, bl8)) |
                0),
              (hi = (hi + Math.imul(ah2, bh8)) | 0)
            var w10 =
              (((c + (lo = (lo + Math.imul(al1, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al1, bh9)) | 0) +
                      Math.imul(ah1, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah1, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w10 >>> 26)) |
              0),
              (w10 &= 67108863),
              (lo = Math.imul(al9, bl2)),
              (mid = ((mid = Math.imul(al9, bh2)) + Math.imul(ah9, bl2)) | 0),
              (hi = Math.imul(ah9, bh2)),
              (lo = (lo + Math.imul(al8, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh3)) | 0) +
                  Math.imul(ah8, bl3)) |
                0),
              (hi = (hi + Math.imul(ah8, bh3)) | 0),
              (lo = (lo + Math.imul(al7, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh4)) | 0) +
                  Math.imul(ah7, bl4)) |
                0),
              (hi = (hi + Math.imul(ah7, bh4)) | 0),
              (lo = (lo + Math.imul(al6, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh5)) | 0) +
                  Math.imul(ah6, bl5)) |
                0),
              (hi = (hi + Math.imul(ah6, bh5)) | 0),
              (lo = (lo + Math.imul(al5, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh6)) | 0) +
                  Math.imul(ah5, bl6)) |
                0),
              (hi = (hi + Math.imul(ah5, bh6)) | 0),
              (lo = (lo + Math.imul(al4, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh7)) | 0) +
                  Math.imul(ah4, bl7)) |
                0),
              (hi = (hi + Math.imul(ah4, bh7)) | 0),
              (lo = (lo + Math.imul(al3, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh8)) | 0) +
                  Math.imul(ah3, bl8)) |
                0),
              (hi = (hi + Math.imul(ah3, bh8)) | 0)
            var w11 =
              (((c + (lo = (lo + Math.imul(al2, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al2, bh9)) | 0) +
                      Math.imul(ah2, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah2, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w11 >>> 26)) |
              0),
              (w11 &= 67108863),
              (lo = Math.imul(al9, bl3)),
              (mid = ((mid = Math.imul(al9, bh3)) + Math.imul(ah9, bl3)) | 0),
              (hi = Math.imul(ah9, bh3)),
              (lo = (lo + Math.imul(al8, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh4)) | 0) +
                  Math.imul(ah8, bl4)) |
                0),
              (hi = (hi + Math.imul(ah8, bh4)) | 0),
              (lo = (lo + Math.imul(al7, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh5)) | 0) +
                  Math.imul(ah7, bl5)) |
                0),
              (hi = (hi + Math.imul(ah7, bh5)) | 0),
              (lo = (lo + Math.imul(al6, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh6)) | 0) +
                  Math.imul(ah6, bl6)) |
                0),
              (hi = (hi + Math.imul(ah6, bh6)) | 0),
              (lo = (lo + Math.imul(al5, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh7)) | 0) +
                  Math.imul(ah5, bl7)) |
                0),
              (hi = (hi + Math.imul(ah5, bh7)) | 0),
              (lo = (lo + Math.imul(al4, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh8)) | 0) +
                  Math.imul(ah4, bl8)) |
                0),
              (hi = (hi + Math.imul(ah4, bh8)) | 0)
            var w12 =
              (((c + (lo = (lo + Math.imul(al3, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al3, bh9)) | 0) +
                      Math.imul(ah3, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah3, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w12 >>> 26)) |
              0),
              (w12 &= 67108863),
              (lo = Math.imul(al9, bl4)),
              (mid = ((mid = Math.imul(al9, bh4)) + Math.imul(ah9, bl4)) | 0),
              (hi = Math.imul(ah9, bh4)),
              (lo = (lo + Math.imul(al8, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh5)) | 0) +
                  Math.imul(ah8, bl5)) |
                0),
              (hi = (hi + Math.imul(ah8, bh5)) | 0),
              (lo = (lo + Math.imul(al7, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh6)) | 0) +
                  Math.imul(ah7, bl6)) |
                0),
              (hi = (hi + Math.imul(ah7, bh6)) | 0),
              (lo = (lo + Math.imul(al6, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh7)) | 0) +
                  Math.imul(ah6, bl7)) |
                0),
              (hi = (hi + Math.imul(ah6, bh7)) | 0),
              (lo = (lo + Math.imul(al5, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh8)) | 0) +
                  Math.imul(ah5, bl8)) |
                0),
              (hi = (hi + Math.imul(ah5, bh8)) | 0)
            var w13 =
              (((c + (lo = (lo + Math.imul(al4, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al4, bh9)) | 0) +
                      Math.imul(ah4, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah4, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w13 >>> 26)) |
              0),
              (w13 &= 67108863),
              (lo = Math.imul(al9, bl5)),
              (mid = ((mid = Math.imul(al9, bh5)) + Math.imul(ah9, bl5)) | 0),
              (hi = Math.imul(ah9, bh5)),
              (lo = (lo + Math.imul(al8, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh6)) | 0) +
                  Math.imul(ah8, bl6)) |
                0),
              (hi = (hi + Math.imul(ah8, bh6)) | 0),
              (lo = (lo + Math.imul(al7, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh7)) | 0) +
                  Math.imul(ah7, bl7)) |
                0),
              (hi = (hi + Math.imul(ah7, bh7)) | 0),
              (lo = (lo + Math.imul(al6, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh8)) | 0) +
                  Math.imul(ah6, bl8)) |
                0),
              (hi = (hi + Math.imul(ah6, bh8)) | 0)
            var w14 =
              (((c + (lo = (lo + Math.imul(al5, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al5, bh9)) | 0) +
                      Math.imul(ah5, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah5, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w14 >>> 26)) |
              0),
              (w14 &= 67108863),
              (lo = Math.imul(al9, bl6)),
              (mid = ((mid = Math.imul(al9, bh6)) + Math.imul(ah9, bl6)) | 0),
              (hi = Math.imul(ah9, bh6)),
              (lo = (lo + Math.imul(al8, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh7)) | 0) +
                  Math.imul(ah8, bl7)) |
                0),
              (hi = (hi + Math.imul(ah8, bh7)) | 0),
              (lo = (lo + Math.imul(al7, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh8)) | 0) +
                  Math.imul(ah7, bl8)) |
                0),
              (hi = (hi + Math.imul(ah7, bh8)) | 0)
            var w15 =
              (((c + (lo = (lo + Math.imul(al6, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al6, bh9)) | 0) +
                      Math.imul(ah6, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah6, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w15 >>> 26)) |
              0),
              (w15 &= 67108863),
              (lo = Math.imul(al9, bl7)),
              (mid = ((mid = Math.imul(al9, bh7)) + Math.imul(ah9, bl7)) | 0),
              (hi = Math.imul(ah9, bh7)),
              (lo = (lo + Math.imul(al8, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh8)) | 0) +
                  Math.imul(ah8, bl8)) |
                0),
              (hi = (hi + Math.imul(ah8, bh8)) | 0)
            var w16 =
              (((c + (lo = (lo + Math.imul(al7, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al7, bh9)) | 0) +
                      Math.imul(ah7, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah7, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w16 >>> 26)) |
              0),
              (w16 &= 67108863),
              (lo = Math.imul(al9, bl8)),
              (mid = ((mid = Math.imul(al9, bh8)) + Math.imul(ah9, bl8)) | 0),
              (hi = Math.imul(ah9, bh8))
            var w17 =
              (((c + (lo = (lo + Math.imul(al8, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al8, bh9)) | 0) +
                      Math.imul(ah8, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah8, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w17 >>> 26)) |
              0),
              (w17 &= 67108863)
            var w18 =
              (((c + (lo = Math.imul(al9, bl9))) | 0) +
                ((8191 &
                  (mid =
                    ((mid = Math.imul(al9, bh9)) + Math.imul(ah9, bl9)) | 0)) <<
                  13)) |
              0
            return (
              (c =
                ((((hi = Math.imul(ah9, bh9)) + (mid >>> 13)) | 0) +
                  (w18 >>> 26)) |
                0),
              (w18 &= 67108863),
              (o[0] = w0),
              (o[1] = w1),
              (o[2] = w2),
              (o[3] = w3),
              (o[4] = w4),
              (o[5] = w5),
              (o[6] = w6),
              (o[7] = w7),
              (o[8] = w8),
              (o[9] = w9),
              (o[10] = w10),
              (o[11] = w11),
              (o[12] = w12),
              (o[13] = w13),
              (o[14] = w14),
              (o[15] = w15),
              (o[16] = w16),
              (o[17] = w17),
              (o[18] = w18),
              0 !== c && ((o[19] = c), out.length++),
              out
            )
          }
          function bigMulTo(self, num, out) {
            ;(out.negative = num.negative ^ self.negative),
              (out.length = self.length + num.length)
            for (var carry = 0, hncarry = 0, k = 0; k < out.length - 1; k++) {
              var ncarry = hncarry
              hncarry = 0
              for (
                var rword = 67108863 & carry,
                  maxJ = Math.min(k, num.length - 1),
                  j = Math.max(0, k - self.length + 1);
                j <= maxJ;
                j++
              ) {
                var i = k - j,
                  r = (0 | self.words[i]) * (0 | num.words[j]),
                  lo = 67108863 & r
                ;(rword = 67108863 & (lo = (lo + rword) | 0)),
                  (hncarry +=
                    (ncarry =
                      ((ncarry = (ncarry + ((r / 67108864) | 0)) | 0) +
                        (lo >>> 26)) |
                      0) >>> 26),
                  (ncarry &= 67108863)
              }
              ;(out.words[k] = rword), (carry = ncarry), (ncarry = hncarry)
            }
            return (
              0 !== carry ? (out.words[k] = carry) : out.length--, out._strip()
            )
          }
          function jumboMulTo(self, num, out) {
            return bigMulTo(self, num, out)
          }
          function FFTM(x, y) {
            ;(this.x = x), (this.y = y)
          }
          Math.imul || (comb10MulTo = smallMulTo),
            (BN.prototype.mulTo = function mulTo(num, out) {
              var len = this.length + num.length
              return 10 === this.length && 10 === num.length
                ? comb10MulTo(this, num, out)
                : len < 63
                  ? smallMulTo(this, num, out)
                  : len < 1024
                    ? bigMulTo(this, num, out)
                    : jumboMulTo(this, num, out)
            }),
            (FFTM.prototype.makeRBT = function makeRBT(N) {
              for (
                var t = new Array(N), l = BN.prototype._countBits(N) - 1, i = 0;
                i < N;
                i++
              )
                t[i] = this.revBin(i, l, N)
              return t
            }),
            (FFTM.prototype.revBin = function revBin(x, l, N) {
              if (0 === x || x === N - 1) return x
              for (var rb = 0, i = 0; i < l; i++)
                (rb |= (1 & x) << (l - i - 1)), (x >>= 1)
              return rb
            }),
            (FFTM.prototype.permute = function permute(
              rbt,
              rws,
              iws,
              rtws,
              itws,
              N
            ) {
              for (var i = 0; i < N; i++)
                (rtws[i] = rws[rbt[i]]), (itws[i] = iws[rbt[i]])
            }),
            (FFTM.prototype.transform = function transform(
              rws,
              iws,
              rtws,
              itws,
              N,
              rbt
            ) {
              this.permute(rbt, rws, iws, rtws, itws, N)
              for (var s = 1; s < N; s <<= 1)
                for (
                  var l = s << 1,
                    rtwdf = Math.cos((2 * Math.PI) / l),
                    itwdf = Math.sin((2 * Math.PI) / l),
                    p = 0;
                  p < N;
                  p += l
                )
                  for (var rtwdf_ = rtwdf, itwdf_ = itwdf, j = 0; j < s; j++) {
                    var re = rtws[p + j],
                      ie = itws[p + j],
                      ro = rtws[p + j + s],
                      io = itws[p + j + s],
                      rx = rtwdf_ * ro - itwdf_ * io
                    ;(io = rtwdf_ * io + itwdf_ * ro),
                      (ro = rx),
                      (rtws[p + j] = re + ro),
                      (itws[p + j] = ie + io),
                      (rtws[p + j + s] = re - ro),
                      (itws[p + j + s] = ie - io),
                      j !== l &&
                        ((rx = rtwdf * rtwdf_ - itwdf * itwdf_),
                        (itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_),
                        (rtwdf_ = rx))
                  }
            }),
            (FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
              var N = 1 | Math.max(m, n),
                odd = 1 & N,
                i = 0
              for (N = (N / 2) | 0; N; N >>>= 1) i++
              return 1 << (i + 1 + odd)
            }),
            (FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
              if (!(N <= 1))
                for (var i = 0; i < N / 2; i++) {
                  var t = rws[i]
                  ;(rws[i] = rws[N - i - 1]),
                    (rws[N - i - 1] = t),
                    (t = iws[i]),
                    (iws[i] = -iws[N - i - 1]),
                    (iws[N - i - 1] = -t)
                }
            }),
            (FFTM.prototype.normalize13b = function normalize13b(ws, N) {
              for (var carry = 0, i = 0; i < N / 2; i++) {
                var w =
                  8192 * Math.round(ws[2 * i + 1] / N) +
                  Math.round(ws[2 * i] / N) +
                  carry
                ;(ws[i] = 67108863 & w),
                  (carry = w < 67108864 ? 0 : (w / 67108864) | 0)
              }
              return ws
            }),
            (FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
              for (var carry = 0, i = 0; i < len; i++)
                (carry += 0 | ws[i]),
                  (rws[2 * i] = 8191 & carry),
                  (carry >>>= 13),
                  (rws[2 * i + 1] = 8191 & carry),
                  (carry >>>= 13)
              for (i = 2 * len; i < N; ++i) rws[i] = 0
              assert(0 === carry), assert(!(-8192 & carry))
            }),
            (FFTM.prototype.stub = function stub(N) {
              for (var ph = new Array(N), i = 0; i < N; i++) ph[i] = 0
              return ph
            }),
            (FFTM.prototype.mulp = function mulp(x, y, out) {
              var N = 2 * this.guessLen13b(x.length, y.length),
                rbt = this.makeRBT(N),
                _ = this.stub(N),
                rws = new Array(N),
                rwst = new Array(N),
                iwst = new Array(N),
                nrws = new Array(N),
                nrwst = new Array(N),
                niwst = new Array(N),
                rmws = out.words
              ;(rmws.length = N),
                this.convert13b(x.words, x.length, rws, N),
                this.convert13b(y.words, y.length, nrws, N),
                this.transform(rws, _, rwst, iwst, N, rbt),
                this.transform(nrws, _, nrwst, niwst, N, rbt)
              for (var i = 0; i < N; i++) {
                var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i]
                ;(iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i]),
                  (rwst[i] = rx)
              }
              return (
                this.conjugate(rwst, iwst, N),
                this.transform(rwst, iwst, rmws, _, N, rbt),
                this.conjugate(rmws, _, N),
                this.normalize13b(rmws, N),
                (out.negative = x.negative ^ y.negative),
                (out.length = x.length + y.length),
                out._strip()
              )
            }),
            (BN.prototype.mul = function mul(num) {
              var out = new BN(null)
              return (
                (out.words = new Array(this.length + num.length)),
                this.mulTo(num, out)
              )
            }),
            (BN.prototype.mulf = function mulf(num) {
              var out = new BN(null)
              return (
                (out.words = new Array(this.length + num.length)),
                jumboMulTo(this, num, out)
              )
            }),
            (BN.prototype.imul = function imul(num) {
              return this.clone().mulTo(num, this)
            }),
            (BN.prototype.imuln = function imuln(num) {
              var isNegNum = num < 0
              isNegNum && (num = -num),
                assert('number' == typeof num),
                assert(num < 67108864)
              for (var carry = 0, i = 0; i < this.length; i++) {
                var w = (0 | this.words[i]) * num,
                  lo = (67108863 & w) + (67108863 & carry)
                ;(carry >>= 26),
                  (carry += (w / 67108864) | 0),
                  (carry += lo >>> 26),
                  (this.words[i] = 67108863 & lo)
              }
              return (
                0 !== carry && ((this.words[i] = carry), this.length++),
                isNegNum ? this.ineg() : this
              )
            }),
            (BN.prototype.muln = function muln(num) {
              return this.clone().imuln(num)
            }),
            (BN.prototype.sqr = function sqr() {
              return this.mul(this)
            }),
            (BN.prototype.isqr = function isqr() {
              return this.imul(this.clone())
            }),
            (BN.prototype.pow = function pow(num) {
              var w = (function toBitArray(num) {
                for (
                  var w = new Array(num.bitLength()), bit = 0;
                  bit < w.length;
                  bit++
                ) {
                  var off = (bit / 26) | 0,
                    wbit = bit % 26
                  w[bit] = (num.words[off] >>> wbit) & 1
                }
                return w
              })(num)
              if (0 === w.length) return new BN(1)
              for (
                var res = this, i = 0;
                i < w.length && 0 === w[i];
                i++, res = res.sqr()
              );
              if (++i < w.length)
                for (var q = res.sqr(); i < w.length; i++, q = q.sqr())
                  0 !== w[i] && (res = res.mul(q))
              return res
            }),
            (BN.prototype.iushln = function iushln(bits) {
              assert('number' == typeof bits && bits >= 0)
              var i,
                r = bits % 26,
                s = (bits - r) / 26,
                carryMask = (67108863 >>> (26 - r)) << (26 - r)
              if (0 !== r) {
                var carry = 0
                for (i = 0; i < this.length; i++) {
                  var newCarry = this.words[i] & carryMask,
                    c = ((0 | this.words[i]) - newCarry) << r
                  ;(this.words[i] = c | carry), (carry = newCarry >>> (26 - r))
                }
                carry && ((this.words[i] = carry), this.length++)
              }
              if (0 !== s) {
                for (i = this.length - 1; i >= 0; i--)
                  this.words[i + s] = this.words[i]
                for (i = 0; i < s; i++) this.words[i] = 0
                this.length += s
              }
              return this._strip()
            }),
            (BN.prototype.ishln = function ishln(bits) {
              return assert(0 === this.negative), this.iushln(bits)
            }),
            (BN.prototype.iushrn = function iushrn(bits, hint, extended) {
              var h
              assert('number' == typeof bits && bits >= 0),
                (h = hint ? (hint - (hint % 26)) / 26 : 0)
              var r = bits % 26,
                s = Math.min((bits - r) / 26, this.length),
                mask = 67108863 ^ ((67108863 >>> r) << r),
                maskedWords = extended
              if (((h -= s), (h = Math.max(0, h)), maskedWords)) {
                for (var i = 0; i < s; i++) maskedWords.words[i] = this.words[i]
                maskedWords.length = s
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, i = 0; i < this.length; i++)
                  this.words[i] = this.words[i + s]
              else (this.words[0] = 0), (this.length = 1)
              var carry = 0
              for (
                i = this.length - 1;
                i >= 0 && (0 !== carry || i >= h);
                i--
              ) {
                var word = 0 | this.words[i]
                ;(this.words[i] = (carry << (26 - r)) | (word >>> r)),
                  (carry = word & mask)
              }
              return (
                maskedWords &&
                  0 !== carry &&
                  (maskedWords.words[maskedWords.length++] = carry),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              )
            }),
            (BN.prototype.ishrn = function ishrn(bits, hint, extended) {
              return (
                assert(0 === this.negative), this.iushrn(bits, hint, extended)
              )
            }),
            (BN.prototype.shln = function shln(bits) {
              return this.clone().ishln(bits)
            }),
            (BN.prototype.ushln = function ushln(bits) {
              return this.clone().iushln(bits)
            }),
            (BN.prototype.shrn = function shrn(bits) {
              return this.clone().ishrn(bits)
            }),
            (BN.prototype.ushrn = function ushrn(bits) {
              return this.clone().iushrn(bits)
            }),
            (BN.prototype.testn = function testn(bit) {
              assert('number' == typeof bit && bit >= 0)
              var r = bit % 26,
                s = (bit - r) / 26,
                q = 1 << r
              return !(this.length <= s) && !!(this.words[s] & q)
            }),
            (BN.prototype.imaskn = function imaskn(bits) {
              assert('number' == typeof bits && bits >= 0)
              var r = bits % 26,
                s = (bits - r) / 26
              if (
                (assert(
                  0 === this.negative,
                  'imaskn works only with positive numbers'
                ),
                this.length <= s)
              )
                return this
              if (
                (0 !== r && s++,
                (this.length = Math.min(s, this.length)),
                0 !== r)
              ) {
                var mask = 67108863 ^ ((67108863 >>> r) << r)
                this.words[this.length - 1] &= mask
              }
              return this._strip()
            }),
            (BN.prototype.maskn = function maskn(bits) {
              return this.clone().imaskn(bits)
            }),
            (BN.prototype.iaddn = function iaddn(num) {
              return (
                assert('number' == typeof num),
                assert(num < 67108864),
                num < 0
                  ? this.isubn(-num)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= num
                      ? ((this.words[0] = num - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(num),
                        (this.negative = 1),
                        this)
                    : this._iaddn(num)
              )
            }),
            (BN.prototype._iaddn = function _iaddn(num) {
              this.words[0] += num
              for (var i = 0; i < this.length && this.words[i] >= 67108864; i++)
                (this.words[i] -= 67108864),
                  i === this.length - 1
                    ? (this.words[i + 1] = 1)
                    : this.words[i + 1]++
              return (this.length = Math.max(this.length, i + 1)), this
            }),
            (BN.prototype.isubn = function isubn(num) {
              if (
                (assert('number' == typeof num),
                assert(num < 67108864),
                num < 0)
              )
                return this.iaddn(-num)
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(num),
                  (this.negative = 1),
                  this
                )
              if (
                ((this.words[0] -= num), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1)
              else
                for (var i = 0; i < this.length && this.words[i] < 0; i++)
                  (this.words[i] += 67108864), (this.words[i + 1] -= 1)
              return this._strip()
            }),
            (BN.prototype.addn = function addn(num) {
              return this.clone().iaddn(num)
            }),
            (BN.prototype.subn = function subn(num) {
              return this.clone().isubn(num)
            }),
            (BN.prototype.iabs = function iabs() {
              return (this.negative = 0), this
            }),
            (BN.prototype.abs = function abs() {
              return this.clone().iabs()
            }),
            (BN.prototype._ishlnsubmul = function _ishlnsubmul(
              num,
              mul,
              shift
            ) {
              var i,
                w,
                len = num.length + shift
              this._expand(len)
              var carry = 0
              for (i = 0; i < num.length; i++) {
                w = (0 | this.words[i + shift]) + carry
                var right = (0 | num.words[i]) * mul
                ;(carry =
                  ((w -= 67108863 & right) >> 26) - ((right / 67108864) | 0)),
                  (this.words[i + shift] = 67108863 & w)
              }
              for (; i < this.length - shift; i++)
                (carry = (w = (0 | this.words[i + shift]) + carry) >> 26),
                  (this.words[i + shift] = 67108863 & w)
              if (0 === carry) return this._strip()
              for (assert(-1 === carry), carry = 0, i = 0; i < this.length; i++)
                (carry = (w = -(0 | this.words[i]) + carry) >> 26),
                  (this.words[i] = 67108863 & w)
              return (this.negative = 1), this._strip()
            }),
            (BN.prototype._wordDiv = function _wordDiv(num, mode) {
              var shift = (this.length, num.length),
                a = this.clone(),
                b = num,
                bhi = 0 | b.words[b.length - 1]
              0 !== (shift = 26 - this._countBits(bhi)) &&
                ((b = b.ushln(shift)),
                a.iushln(shift),
                (bhi = 0 | b.words[b.length - 1]))
              var q,
                m = a.length - b.length
              if ('mod' !== mode) {
                ;((q = new BN(null)).length = m + 1),
                  (q.words = new Array(q.length))
                for (var i = 0; i < q.length; i++) q.words[i] = 0
              }
              var diff = a.clone()._ishlnsubmul(b, 1, m)
              0 === diff.negative && ((a = diff), q && (q.words[m] = 1))
              for (var j = m - 1; j >= 0; j--) {
                var qj =
                  67108864 * (0 | a.words[b.length + j]) +
                  (0 | a.words[b.length + j - 1])
                for (
                  qj = Math.min((qj / bhi) | 0, 67108863),
                    a._ishlnsubmul(b, qj, j);
                  0 !== a.negative;

                )
                  qj--,
                    (a.negative = 0),
                    a._ishlnsubmul(b, 1, j),
                    a.isZero() || (a.negative ^= 1)
                q && (q.words[j] = qj)
              }
              return (
                q && q._strip(),
                a._strip(),
                'div' !== mode && 0 !== shift && a.iushrn(shift),
                { div: q || null, mod: a }
              )
            }),
            (BN.prototype.divmod = function divmod(num, mode, positive) {
              return (
                assert(!num.isZero()),
                this.isZero()
                  ? { div: new BN(0), mod: new BN(0) }
                  : 0 !== this.negative && 0 === num.negative
                    ? ((res = this.neg().divmod(num, mode)),
                      'mod' !== mode && (div = res.div.neg()),
                      'div' !== mode &&
                        ((mod = res.mod.neg()),
                        positive && 0 !== mod.negative && mod.iadd(num)),
                      { div, mod })
                    : 0 === this.negative && 0 !== num.negative
                      ? ((res = this.divmod(num.neg(), mode)),
                        'mod' !== mode && (div = res.div.neg()),
                        { div, mod: res.mod })
                      : this.negative & num.negative
                        ? ((res = this.neg().divmod(num.neg(), mode)),
                          'div' !== mode &&
                            ((mod = res.mod.neg()),
                            positive && 0 !== mod.negative && mod.isub(num)),
                          { div: res.div, mod })
                        : num.length > this.length || this.cmp(num) < 0
                          ? { div: new BN(0), mod: this }
                          : 1 === num.length
                            ? 'div' === mode
                              ? { div: this.divn(num.words[0]), mod: null }
                              : 'mod' === mode
                                ? {
                                    div: null,
                                    mod: new BN(this.modrn(num.words[0])),
                                  }
                                : {
                                    div: this.divn(num.words[0]),
                                    mod: new BN(this.modrn(num.words[0])),
                                  }
                            : this._wordDiv(num, mode)
              )
              var div, mod, res
            }),
            (BN.prototype.div = function div(num) {
              return this.divmod(num, 'div', !1).div
            }),
            (BN.prototype.mod = function mod(num) {
              return this.divmod(num, 'mod', !1).mod
            }),
            (BN.prototype.umod = function umod(num) {
              return this.divmod(num, 'mod', !0).mod
            }),
            (BN.prototype.divRound = function divRound(num) {
              var dm = this.divmod(num)
              if (dm.mod.isZero()) return dm.div
              var mod = 0 !== dm.div.negative ? dm.mod.isub(num) : dm.mod,
                half = num.ushrn(1),
                r2 = num.andln(1),
                cmp = mod.cmp(half)
              return cmp < 0 || (1 === r2 && 0 === cmp)
                ? dm.div
                : 0 !== dm.div.negative
                  ? dm.div.isubn(1)
                  : dm.div.iaddn(1)
            }),
            (BN.prototype.modrn = function modrn(num) {
              var isNegNum = num < 0
              isNegNum && (num = -num), assert(num <= 67108863)
              for (
                var p = (1 << 26) % num, acc = 0, i = this.length - 1;
                i >= 0;
                i--
              )
                acc = (p * acc + (0 | this.words[i])) % num
              return isNegNum ? -acc : acc
            }),
            (BN.prototype.modn = function modn(num) {
              return this.modrn(num)
            }),
            (BN.prototype.idivn = function idivn(num) {
              var isNegNum = num < 0
              isNegNum && (num = -num), assert(num <= 67108863)
              for (var carry = 0, i = this.length - 1; i >= 0; i--) {
                var w = (0 | this.words[i]) + 67108864 * carry
                ;(this.words[i] = (w / num) | 0), (carry = w % num)
              }
              return this._strip(), isNegNum ? this.ineg() : this
            }),
            (BN.prototype.divn = function divn(num) {
              return this.clone().idivn(num)
            }),
            (BN.prototype.egcd = function egcd(p) {
              assert(0 === p.negative), assert(!p.isZero())
              var x = this,
                y = p.clone()
              x = 0 !== x.negative ? x.umod(p) : x.clone()
              for (
                var A = new BN(1),
                  B = new BN(0),
                  C = new BN(0),
                  D = new BN(1),
                  g = 0;
                x.isEven() && y.isEven();

              )
                x.iushrn(1), y.iushrn(1), ++g
              for (var yp = y.clone(), xp = x.clone(); !x.isZero(); ) {
                for (
                  var i = 0, im = 1;
                  !(x.words[0] & im) && i < 26;
                  ++i, im <<= 1
                );
                if (i > 0)
                  for (x.iushrn(i); i-- > 0; )
                    (A.isOdd() || B.isOdd()) && (A.iadd(yp), B.isub(xp)),
                      A.iushrn(1),
                      B.iushrn(1)
                for (
                  var j = 0, jm = 1;
                  !(y.words[0] & jm) && j < 26;
                  ++j, jm <<= 1
                );
                if (j > 0)
                  for (y.iushrn(j); j-- > 0; )
                    (C.isOdd() || D.isOdd()) && (C.iadd(yp), D.isub(xp)),
                      C.iushrn(1),
                      D.iushrn(1)
                x.cmp(y) >= 0
                  ? (x.isub(y), A.isub(C), B.isub(D))
                  : (y.isub(x), C.isub(A), D.isub(B))
              }
              return { a: C, b: D, gcd: y.iushln(g) }
            }),
            (BN.prototype._invmp = function _invmp(p) {
              assert(0 === p.negative), assert(!p.isZero())
              var a = this,
                b = p.clone()
              a = 0 !== a.negative ? a.umod(p) : a.clone()
              for (
                var res, x1 = new BN(1), x2 = new BN(0), delta = b.clone();
                a.cmpn(1) > 0 && b.cmpn(1) > 0;

              ) {
                for (
                  var i = 0, im = 1;
                  !(a.words[0] & im) && i < 26;
                  ++i, im <<= 1
                );
                if (i > 0)
                  for (a.iushrn(i); i-- > 0; )
                    x1.isOdd() && x1.iadd(delta), x1.iushrn(1)
                for (
                  var j = 0, jm = 1;
                  !(b.words[0] & jm) && j < 26;
                  ++j, jm <<= 1
                );
                if (j > 0)
                  for (b.iushrn(j); j-- > 0; )
                    x2.isOdd() && x2.iadd(delta), x2.iushrn(1)
                a.cmp(b) >= 0
                  ? (a.isub(b), x1.isub(x2))
                  : (b.isub(a), x2.isub(x1))
              }
              return (
                (res = 0 === a.cmpn(1) ? x1 : x2).cmpn(0) < 0 && res.iadd(p),
                res
              )
            }),
            (BN.prototype.gcd = function gcd(num) {
              if (this.isZero()) return num.abs()
              if (num.isZero()) return this.abs()
              var a = this.clone(),
                b = num.clone()
              ;(a.negative = 0), (b.negative = 0)
              for (var shift = 0; a.isEven() && b.isEven(); shift++)
                a.iushrn(1), b.iushrn(1)
              for (;;) {
                for (; a.isEven(); ) a.iushrn(1)
                for (; b.isEven(); ) b.iushrn(1)
                var r = a.cmp(b)
                if (r < 0) {
                  var t = a
                  ;(a = b), (b = t)
                } else if (0 === r || 0 === b.cmpn(1)) break
                a.isub(b)
              }
              return b.iushln(shift)
            }),
            (BN.prototype.invm = function invm(num) {
              return this.egcd(num).a.umod(num)
            }),
            (BN.prototype.isEven = function isEven() {
              return !(1 & this.words[0])
            }),
            (BN.prototype.isOdd = function isOdd() {
              return !(1 & ~this.words[0])
            }),
            (BN.prototype.andln = function andln(num) {
              return this.words[0] & num
            }),
            (BN.prototype.bincn = function bincn(bit) {
              assert('number' == typeof bit)
              var r = bit % 26,
                s = (bit - r) / 26,
                q = 1 << r
              if (this.length <= s)
                return this._expand(s + 1), (this.words[s] |= q), this
              for (var carry = q, i = s; 0 !== carry && i < this.length; i++) {
                var w = 0 | this.words[i]
                ;(carry = (w += carry) >>> 26),
                  (w &= 67108863),
                  (this.words[i] = w)
              }
              return (
                0 !== carry && ((this.words[i] = carry), this.length++), this
              )
            }),
            (BN.prototype.isZero = function isZero() {
              return 1 === this.length && 0 === this.words[0]
            }),
            (BN.prototype.cmpn = function cmpn(num) {
              var res,
                negative = num < 0
              if (0 !== this.negative && !negative) return -1
              if (0 === this.negative && negative) return 1
              if ((this._strip(), this.length > 1)) res = 1
              else {
                negative && (num = -num),
                  assert(num <= 67108863, 'Number is too big')
                var w = 0 | this.words[0]
                res = w === num ? 0 : w < num ? -1 : 1
              }
              return 0 !== this.negative ? 0 | -res : res
            }),
            (BN.prototype.cmp = function cmp(num) {
              if (0 !== this.negative && 0 === num.negative) return -1
              if (0 === this.negative && 0 !== num.negative) return 1
              var res = this.ucmp(num)
              return 0 !== this.negative ? 0 | -res : res
            }),
            (BN.prototype.ucmp = function ucmp(num) {
              if (this.length > num.length) return 1
              if (this.length < num.length) return -1
              for (var res = 0, i = this.length - 1; i >= 0; i--) {
                var a = 0 | this.words[i],
                  b = 0 | num.words[i]
                if (a !== b) {
                  a < b ? (res = -1) : a > b && (res = 1)
                  break
                }
              }
              return res
            }),
            (BN.prototype.gtn = function gtn(num) {
              return 1 === this.cmpn(num)
            }),
            (BN.prototype.gt = function gt(num) {
              return 1 === this.cmp(num)
            }),
            (BN.prototype.gten = function gten(num) {
              return this.cmpn(num) >= 0
            }),
            (BN.prototype.gte = function gte(num) {
              return this.cmp(num) >= 0
            }),
            (BN.prototype.ltn = function ltn(num) {
              return -1 === this.cmpn(num)
            }),
            (BN.prototype.lt = function lt(num) {
              return -1 === this.cmp(num)
            }),
            (BN.prototype.lten = function lten(num) {
              return this.cmpn(num) <= 0
            }),
            (BN.prototype.lte = function lte(num) {
              return this.cmp(num) <= 0
            }),
            (BN.prototype.eqn = function eqn(num) {
              return 0 === this.cmpn(num)
            }),
            (BN.prototype.eq = function eq(num) {
              return 0 === this.cmp(num)
            }),
            (BN.red = function red(num) {
              return new Red(num)
            }),
            (BN.prototype.toRed = function toRed(ctx) {
              return (
                assert(!this.red, 'Already a number in reduction context'),
                assert(0 === this.negative, 'red works only with positives'),
                ctx.convertTo(this)._forceRed(ctx)
              )
            }),
            (BN.prototype.fromRed = function fromRed() {
              return (
                assert(
                  this.red,
                  'fromRed works only with numbers in reduction context'
                ),
                this.red.convertFrom(this)
              )
            }),
            (BN.prototype._forceRed = function _forceRed(ctx) {
              return (this.red = ctx), this
            }),
            (BN.prototype.forceRed = function forceRed(ctx) {
              return (
                assert(!this.red, 'Already a number in reduction context'),
                this._forceRed(ctx)
              )
            }),
            (BN.prototype.redAdd = function redAdd(num) {
              return (
                assert(this.red, 'redAdd works only with red numbers'),
                this.red.add(this, num)
              )
            }),
            (BN.prototype.redIAdd = function redIAdd(num) {
              return (
                assert(this.red, 'redIAdd works only with red numbers'),
                this.red.iadd(this, num)
              )
            }),
            (BN.prototype.redSub = function redSub(num) {
              return (
                assert(this.red, 'redSub works only with red numbers'),
                this.red.sub(this, num)
              )
            }),
            (BN.prototype.redISub = function redISub(num) {
              return (
                assert(this.red, 'redISub works only with red numbers'),
                this.red.isub(this, num)
              )
            }),
            (BN.prototype.redShl = function redShl(num) {
              return (
                assert(this.red, 'redShl works only with red numbers'),
                this.red.shl(this, num)
              )
            }),
            (BN.prototype.redMul = function redMul(num) {
              return (
                assert(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, num),
                this.red.mul(this, num)
              )
            }),
            (BN.prototype.redIMul = function redIMul(num) {
              return (
                assert(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, num),
                this.red.imul(this, num)
              )
            }),
            (BN.prototype.redSqr = function redSqr() {
              return (
                assert(this.red, 'redSqr works only with red numbers'),
                this.red._verify1(this),
                this.red.sqr(this)
              )
            }),
            (BN.prototype.redISqr = function redISqr() {
              return (
                assert(this.red, 'redISqr works only with red numbers'),
                this.red._verify1(this),
                this.red.isqr(this)
              )
            }),
            (BN.prototype.redSqrt = function redSqrt() {
              return (
                assert(this.red, 'redSqrt works only with red numbers'),
                this.red._verify1(this),
                this.red.sqrt(this)
              )
            }),
            (BN.prototype.redInvm = function redInvm() {
              return (
                assert(this.red, 'redInvm works only with red numbers'),
                this.red._verify1(this),
                this.red.invm(this)
              )
            }),
            (BN.prototype.redNeg = function redNeg() {
              return (
                assert(this.red, 'redNeg works only with red numbers'),
                this.red._verify1(this),
                this.red.neg(this)
              )
            }),
            (BN.prototype.redPow = function redPow(num) {
              return (
                assert(this.red && !num.red, 'redPow(normalNum)'),
                this.red._verify1(this),
                this.red.pow(this, num)
              )
            })
          var primes = { k256: null, p224: null, p192: null, p25519: null }
          function MPrime(name, p) {
            ;(this.name = name),
              (this.p = new BN(p, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new BN(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp())
          }
          function K256() {
            MPrime.call(
              this,
              'k256',
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
            )
          }
          function P224() {
            MPrime.call(
              this,
              'p224',
              'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
            )
          }
          function P192() {
            MPrime.call(
              this,
              'p192',
              'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
            )
          }
          function P25519() {
            MPrime.call(
              this,
              '25519',
              '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
            )
          }
          function Red(m) {
            if ('string' == typeof m) {
              var prime = BN._prime(m)
              ;(this.m = prime.p), (this.prime = prime)
            } else
              assert(m.gtn(1), 'modulus must be greater than 1'),
                (this.m = m),
                (this.prime = null)
          }
          function Mont(m) {
            Red.call(this, m),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new BN(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv))
          }
          ;(MPrime.prototype._tmp = function _tmp() {
            var tmp = new BN(null)
            return (tmp.words = new Array(Math.ceil(this.n / 13))), tmp
          }),
            (MPrime.prototype.ireduce = function ireduce(num) {
              var rlen,
                r = num
              do {
                this.split(r, this.tmp),
                  (rlen = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
              } while (rlen > this.n)
              var cmp = rlen < this.n ? -1 : r.ucmp(this.p)
              return (
                0 === cmp
                  ? ((r.words[0] = 0), (r.length = 1))
                  : cmp > 0
                    ? r.isub(this.p)
                    : void 0 !== r.strip
                      ? r.strip()
                      : r._strip(),
                r
              )
            }),
            (MPrime.prototype.split = function split(input, out) {
              input.iushrn(this.n, 0, out)
            }),
            (MPrime.prototype.imulK = function imulK(num) {
              return num.imul(this.k)
            }),
            inherits(K256, MPrime),
            (K256.prototype.split = function split(input, output) {
              for (
                var outLen = Math.min(input.length, 9), i = 0;
                i < outLen;
                i++
              )
                output.words[i] = input.words[i]
              if (((output.length = outLen), input.length <= 9))
                return (input.words[0] = 0), void (input.length = 1)
              var prev = input.words[9]
              for (
                output.words[output.length++] = 4194303 & prev, i = 10;
                i < input.length;
                i++
              ) {
                var next = 0 | input.words[i]
                ;(input.words[i - 10] =
                  ((4194303 & next) << 4) | (prev >>> 22)),
                  (prev = next)
              }
              ;(prev >>>= 22),
                (input.words[i - 10] = prev),
                0 === prev && input.length > 10
                  ? (input.length -= 10)
                  : (input.length -= 9)
            }),
            (K256.prototype.imulK = function imulK(num) {
              ;(num.words[num.length] = 0),
                (num.words[num.length + 1] = 0),
                (num.length += 2)
              for (var lo = 0, i = 0; i < num.length; i++) {
                var w = 0 | num.words[i]
                ;(lo += 977 * w),
                  (num.words[i] = 67108863 & lo),
                  (lo = 64 * w + ((lo / 67108864) | 0))
              }
              return (
                0 === num.words[num.length - 1] &&
                  (num.length--,
                  0 === num.words[num.length - 1] && num.length--),
                num
              )
            }),
            inherits(P224, MPrime),
            inherits(P192, MPrime),
            inherits(P25519, MPrime),
            (P25519.prototype.imulK = function imulK(num) {
              for (var carry = 0, i = 0; i < num.length; i++) {
                var hi = 19 * (0 | num.words[i]) + carry,
                  lo = 67108863 & hi
                ;(hi >>>= 26), (num.words[i] = lo), (carry = hi)
              }
              return 0 !== carry && (num.words[num.length++] = carry), num
            }),
            (BN._prime = function prime(name) {
              if (primes[name]) return primes[name]
              var prime
              if ('k256' === name) prime = new K256()
              else if ('p224' === name) prime = new P224()
              else if ('p192' === name) prime = new P192()
              else {
                if ('p25519' !== name) throw new Error('Unknown prime ' + name)
                prime = new P25519()
              }
              return (primes[name] = prime), prime
            }),
            (Red.prototype._verify1 = function _verify1(a) {
              assert(0 === a.negative, 'red works only with positives'),
                assert(a.red, 'red works only with red numbers')
            }),
            (Red.prototype._verify2 = function _verify2(a, b) {
              assert(
                !(a.negative | b.negative),
                'red works only with positives'
              ),
                assert(
                  a.red && a.red === b.red,
                  'red works only with red numbers'
                )
            }),
            (Red.prototype.imod = function imod(a) {
              return this.prime
                ? this.prime.ireduce(a)._forceRed(this)
                : (move(a, a.umod(this.m)._forceRed(this)), a)
            }),
            (Red.prototype.neg = function neg(a) {
              return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
            }),
            (Red.prototype.add = function add(a, b) {
              this._verify2(a, b)
              var res = a.add(b)
              return (
                res.cmp(this.m) >= 0 && res.isub(this.m), res._forceRed(this)
              )
            }),
            (Red.prototype.iadd = function iadd(a, b) {
              this._verify2(a, b)
              var res = a.iadd(b)
              return res.cmp(this.m) >= 0 && res.isub(this.m), res
            }),
            (Red.prototype.sub = function sub(a, b) {
              this._verify2(a, b)
              var res = a.sub(b)
              return res.cmpn(0) < 0 && res.iadd(this.m), res._forceRed(this)
            }),
            (Red.prototype.isub = function isub(a, b) {
              this._verify2(a, b)
              var res = a.isub(b)
              return res.cmpn(0) < 0 && res.iadd(this.m), res
            }),
            (Red.prototype.shl = function shl(a, num) {
              return this._verify1(a), this.imod(a.ushln(num))
            }),
            (Red.prototype.imul = function imul(a, b) {
              return this._verify2(a, b), this.imod(a.imul(b))
            }),
            (Red.prototype.mul = function mul(a, b) {
              return this._verify2(a, b), this.imod(a.mul(b))
            }),
            (Red.prototype.isqr = function isqr(a) {
              return this.imul(a, a.clone())
            }),
            (Red.prototype.sqr = function sqr(a) {
              return this.mul(a, a)
            }),
            (Red.prototype.sqrt = function sqrt(a) {
              if (a.isZero()) return a.clone()
              var mod3 = this.m.andln(3)
              if ((assert(mod3 % 2 == 1), 3 === mod3)) {
                var pow = this.m.add(new BN(1)).iushrn(2)
                return this.pow(a, pow)
              }
              for (
                var q = this.m.subn(1), s = 0;
                !q.isZero() && 0 === q.andln(1);

              )
                s++, q.iushrn(1)
              assert(!q.isZero())
              var one = new BN(1).toRed(this),
                nOne = one.redNeg(),
                lpow = this.m.subn(1).iushrn(1),
                z = this.m.bitLength()
              for (
                z = new BN(2 * z * z).toRed(this);
                0 !== this.pow(z, lpow).cmp(nOne);

              )
                z.redIAdd(nOne)
              for (
                var c = this.pow(z, q),
                  r = this.pow(a, q.addn(1).iushrn(1)),
                  t = this.pow(a, q),
                  m = s;
                0 !== t.cmp(one);

              ) {
                for (var tmp = t, i = 0; 0 !== tmp.cmp(one); i++)
                  tmp = tmp.redSqr()
                assert(i < m)
                var b = this.pow(c, new BN(1).iushln(m - i - 1))
                ;(r = r.redMul(b)), (c = b.redSqr()), (t = t.redMul(c)), (m = i)
              }
              return r
            }),
            (Red.prototype.invm = function invm(a) {
              var inv = a._invmp(this.m)
              return 0 !== inv.negative
                ? ((inv.negative = 0), this.imod(inv).redNeg())
                : this.imod(inv)
            }),
            (Red.prototype.pow = function pow(a, num) {
              if (num.isZero()) return new BN(1).toRed(this)
              if (0 === num.cmpn(1)) return a.clone()
              var wnd = new Array(16)
              ;(wnd[0] = new BN(1).toRed(this)), (wnd[1] = a)
              for (var i = 2; i < wnd.length; i++)
                wnd[i] = this.mul(wnd[i - 1], a)
              var res = wnd[0],
                current = 0,
                currentLen = 0,
                start = num.bitLength() % 26
              for (
                0 === start && (start = 26), i = num.length - 1;
                i >= 0;
                i--
              ) {
                for (var word = num.words[i], j = start - 1; j >= 0; j--) {
                  var bit = (word >> j) & 1
                  res !== wnd[0] && (res = this.sqr(res)),
                    0 !== bit || 0 !== current
                      ? ((current <<= 1),
                        (current |= bit),
                        (4 === ++currentLen || (0 === i && 0 === j)) &&
                          ((res = this.mul(res, wnd[current])),
                          (currentLen = 0),
                          (current = 0)))
                      : (currentLen = 0)
                }
                start = 26
              }
              return res
            }),
            (Red.prototype.convertTo = function convertTo(num) {
              var r = num.umod(this.m)
              return r === num ? r.clone() : r
            }),
            (Red.prototype.convertFrom = function convertFrom(num) {
              var res = num.clone()
              return (res.red = null), res
            }),
            (BN.mont = function mont(num) {
              return new Mont(num)
            }),
            inherits(Mont, Red),
            (Mont.prototype.convertTo = function convertTo(num) {
              return this.imod(num.ushln(this.shift))
            }),
            (Mont.prototype.convertFrom = function convertFrom(num) {
              var r = this.imod(num.mul(this.rinv))
              return (r.red = null), r
            }),
            (Mont.prototype.imul = function imul(a, b) {
              if (a.isZero() || b.isZero())
                return (a.words[0] = 0), (a.length = 1), a
              var t = a.imul(b),
                c = t
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                u = t.isub(c).iushrn(this.shift),
                res = u
              return (
                u.cmp(this.m) >= 0
                  ? (res = u.isub(this.m))
                  : u.cmpn(0) < 0 && (res = u.iadd(this.m)),
                res._forceRed(this)
              )
            }),
            (Mont.prototype.mul = function mul(a, b) {
              if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this)
              var t = a.mul(b),
                c = t
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                u = t.isub(c).iushrn(this.shift),
                res = u
              return (
                u.cmp(this.m) >= 0
                  ? (res = u.isub(this.m))
                  : u.cmpn(0) < 0 && (res = u.iadd(this.m)),
                res._forceRed(this)
              )
            }),
            (Mont.prototype.invm = function invm(a) {
              return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
            })
        })((module = __webpack_require__.nmd(module)), this)
      },
      './node_modules/browserify-sign/algos.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        module.exports = __webpack_require__(
          './node_modules/browserify-sign/browser/algorithms.json'
        )
      },
      './node_modules/browserify-sign/browser/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          createHash = __webpack_require__(
            './node_modules/create-hash/browser.js'
          ),
          stream = __webpack_require__(
            './node_modules/browserify-sign/node_modules/readable-stream/readable-browser.js'
          ),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          sign = __webpack_require__(
            './node_modules/browserify-sign/browser/sign.js'
          ),
          verify = __webpack_require__(
            './node_modules/browserify-sign/browser/verify.js'
          ),
          algorithms = __webpack_require__(
            './node_modules/browserify-sign/browser/algorithms.json'
          )
        function Sign(algorithm) {
          stream.Writable.call(this)
          var data = algorithms[algorithm]
          if (!data) throw new Error('Unknown message digest')
          ;(this._hashType = data.hash),
            (this._hash = createHash(data.hash)),
            (this._tag = data.id),
            (this._signType = data.sign)
        }
        function Verify(algorithm) {
          stream.Writable.call(this)
          var data = algorithms[algorithm]
          if (!data) throw new Error('Unknown message digest')
          ;(this._hash = createHash(data.hash)),
            (this._tag = data.id),
            (this._signType = data.sign)
        }
        function createSign(algorithm) {
          return new Sign(algorithm)
        }
        function createVerify(algorithm) {
          return new Verify(algorithm)
        }
        Object.keys(algorithms).forEach(function (key) {
          ;(algorithms[key].id = Buffer.from(algorithms[key].id, 'hex')),
            (algorithms[key.toLowerCase()] = algorithms[key])
        }),
          inherits(Sign, stream.Writable),
          (Sign.prototype._write = function _write(data, _, done) {
            this._hash.update(data), done()
          }),
          (Sign.prototype.update = function update(data, enc) {
            return (
              this._hash.update(
                'string' == typeof data ? Buffer.from(data, enc) : data
              ),
              this
            )
          }),
          (Sign.prototype.sign = function signMethod(key, enc) {
            this.end()
            var hash = this._hash.digest(),
              sig = sign(hash, key, this._hashType, this._signType, this._tag)
            return enc ? sig.toString(enc) : sig
          }),
          inherits(Verify, stream.Writable),
          (Verify.prototype._write = function _write(data, _, done) {
            this._hash.update(data), done()
          }),
          (Verify.prototype.update = function update(data, enc) {
            return (
              this._hash.update(
                'string' == typeof data ? Buffer.from(data, enc) : data
              ),
              this
            )
          }),
          (Verify.prototype.verify = function verifyMethod(key, sig, enc) {
            var sigBuffer = 'string' == typeof sig ? Buffer.from(sig, enc) : sig
            this.end()
            var hash = this._hash.digest()
            return verify(sigBuffer, hash, key, this._signType, this._tag)
          }),
          (module.exports = {
            Sign: createSign,
            Verify: createVerify,
            createSign,
            createVerify,
          })
      },
      './node_modules/browserify-sign/browser/sign.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          createHmac = __webpack_require__(
            './node_modules/create-hmac/browser.js'
          ),
          crt = __webpack_require__('./node_modules/browserify-rsa/index.js'),
          EC = __webpack_require__(
            './node_modules/elliptic/lib/elliptic.js'
          ).ec,
          BN = __webpack_require__(
            './node_modules/browserify-sign/node_modules/bn.js/lib/bn.js'
          ),
          parseKeys = __webpack_require__('./node_modules/parse-asn1/index.js'),
          curves = __webpack_require__(
            './node_modules/browserify-sign/browser/curves.json'
          )
        function getKey(x, q, hash, algo) {
          if ((x = Buffer.from(x.toArray())).length < q.byteLength()) {
            var zeros = Buffer.alloc(q.byteLength() - x.length)
            x = Buffer.concat([zeros, x])
          }
          var hlen = hash.length,
            hbits = (function bits2octets(bits, q) {
              ;(bits = bits2int(bits, q)), (bits = bits.mod(q))
              var out = Buffer.from(bits.toArray())
              if (out.length < q.byteLength()) {
                var zeros = Buffer.alloc(q.byteLength() - out.length)
                out = Buffer.concat([zeros, out])
              }
              return out
            })(hash, q),
            v = Buffer.alloc(hlen)
          v.fill(1)
          var k = Buffer.alloc(hlen)
          return (
            (k = createHmac(algo, k)
              .update(v)
              .update(Buffer.from([0]))
              .update(x)
              .update(hbits)
              .digest()),
            (v = createHmac(algo, k).update(v).digest()),
            {
              k: (k = createHmac(algo, k)
                .update(v)
                .update(Buffer.from([1]))
                .update(x)
                .update(hbits)
                .digest()),
              v: (v = createHmac(algo, k).update(v).digest()),
            }
          )
        }
        function bits2int(obits, q) {
          var bits = new BN(obits),
            shift = (obits.length << 3) - q.bitLength()
          return shift > 0 && bits.ishrn(shift), bits
        }
        function makeKey(q, kv, algo) {
          var t, k
          do {
            for (t = Buffer.alloc(0); 8 * t.length < q.bitLength(); )
              (kv.v = createHmac(algo, kv.k).update(kv.v).digest()),
                (t = Buffer.concat([t, kv.v]))
            ;(k = bits2int(t, q)),
              (kv.k = createHmac(algo, kv.k)
                .update(kv.v)
                .update(Buffer.from([0]))
                .digest()),
              (kv.v = createHmac(algo, kv.k).update(kv.v).digest())
          } while (-1 !== k.cmp(q))
          return k
        }
        function makeR(g, k, p, q) {
          return g.toRed(BN.mont(p)).redPow(k).fromRed().mod(q)
        }
        ;(module.exports = function sign(hash, key, hashType, signType, tag) {
          var priv = parseKeys(key)
          if (priv.curve) {
            if ('ecdsa' !== signType && 'ecdsa/rsa' !== signType)
              throw new Error('wrong private key type')
            return (function ecSign(hash, priv) {
              var curveId = curves[priv.curve.join('.')]
              if (!curveId)
                throw new Error('unknown curve ' + priv.curve.join('.'))
              var key = new EC(curveId).keyFromPrivate(priv.privateKey),
                out = key.sign(hash)
              return Buffer.from(out.toDER())
            })(hash, priv)
          }
          if ('dsa' === priv.type) {
            if ('dsa' !== signType) throw new Error('wrong private key type')
            return (function dsaSign(hash, priv, algo) {
              var k,
                x = priv.params.priv_key,
                p = priv.params.p,
                q = priv.params.q,
                g = priv.params.g,
                r = new BN(0),
                H = bits2int(hash, q).mod(q),
                s = !1,
                kv = getKey(x, q, hash, algo)
              for (; !1 === s; )
                (r = makeR(g, (k = makeKey(q, kv, algo)), p, q)),
                  0 ===
                    (s = k
                      .invm(q)
                      .imul(H.add(x.mul(r)))
                      .mod(q)).cmpn(0) && ((s = !1), (r = new BN(0)))
              return (function toDER(r, s) {
                ;(r = r.toArray()),
                  (s = s.toArray()),
                  128 & r[0] && (r = [0].concat(r))
                128 & s[0] && (s = [0].concat(s))
                var total = r.length + s.length + 4,
                  res = [48, total, 2, r.length]
                return (res = res.concat(r, [2, s.length], s)), Buffer.from(res)
              })(r, s)
            })(hash, priv, hashType)
          }
          if ('rsa' !== signType && 'ecdsa/rsa' !== signType)
            throw new Error('wrong private key type')
          if (void 0 !== key.padding && 1 !== key.padding)
            throw new Error('illegal or unsupported padding mode')
          hash = Buffer.concat([tag, hash])
          for (
            var len = priv.modulus.byteLength(), pad = [0, 1];
            hash.length + pad.length + 1 < len;

          )
            pad.push(255)
          pad.push(0)
          for (var i = -1; ++i < hash.length; ) pad.push(hash[i])
          return crt(pad, priv)
        }),
          (module.exports.getKey = getKey),
          (module.exports.makeKey = makeKey)
      },
      './node_modules/browserify-sign/browser/verify.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          BN = __webpack_require__(
            './node_modules/browserify-sign/node_modules/bn.js/lib/bn.js'
          ),
          EC = __webpack_require__(
            './node_modules/elliptic/lib/elliptic.js'
          ).ec,
          parseKeys = __webpack_require__('./node_modules/parse-asn1/index.js'),
          curves = __webpack_require__(
            './node_modules/browserify-sign/browser/curves.json'
          )
        function checkValue(b, q) {
          if (b.cmpn(0) <= 0) throw new Error('invalid sig')
          if (b.cmp(q) >= 0) throw new Error('invalid sig')
        }
        module.exports = function verify(sig, hash, key, signType, tag) {
          var pub = parseKeys(key)
          if ('ec' === pub.type) {
            if ('ecdsa' !== signType && 'ecdsa/rsa' !== signType)
              throw new Error('wrong public key type')
            return (function ecVerify(sig, hash, pub) {
              var curveId = curves[pub.data.algorithm.curve.join('.')]
              if (!curveId)
                throw new Error(
                  'unknown curve ' + pub.data.algorithm.curve.join('.')
                )
              var curve = new EC(curveId),
                pubkey = pub.data.subjectPrivateKey.data
              return curve.verify(hash, sig, pubkey)
            })(sig, hash, pub)
          }
          if ('dsa' === pub.type) {
            if ('dsa' !== signType) throw new Error('wrong public key type')
            return (function dsaVerify(sig, hash, pub) {
              var p = pub.data.p,
                q = pub.data.q,
                g = pub.data.g,
                y = pub.data.pub_key,
                unpacked = parseKeys.signature.decode(sig, 'der'),
                s = unpacked.s,
                r = unpacked.r
              checkValue(s, q), checkValue(r, q)
              var montp = BN.mont(p),
                w = s.invm(q),
                v = g
                  .toRed(montp)
                  .redPow(new BN(hash).mul(w).mod(q))
                  .fromRed()
                  .mul(y.toRed(montp).redPow(r.mul(w).mod(q)).fromRed())
                  .mod(p)
                  .mod(q)
              return 0 === v.cmp(r)
            })(sig, hash, pub)
          }
          if ('rsa' !== signType && 'ecdsa/rsa' !== signType)
            throw new Error('wrong public key type')
          hash = Buffer.concat([tag, hash])
          for (
            var len = pub.modulus.byteLength(), pad = [1], padNum = 0;
            hash.length + pad.length + 2 < len;

          )
            pad.push(255), (padNum += 1)
          pad.push(0)
          for (var i = -1; ++i < hash.length; ) pad.push(hash[i])
          pad = Buffer.from(pad)
          var red = BN.mont(pub.modulus)
          ;(sig = (sig = new BN(sig).toRed(red)).redPow(
            new BN(pub.publicExponent)
          )),
            (sig = Buffer.from(sig.fromRed().toArray()))
          var out = padNum < 8 ? 1 : 0
          for (
            len = Math.min(sig.length, pad.length),
              sig.length !== pad.length && (out = 1),
              i = -1;
            ++i < len;

          )
            out |= sig[i] ^ pad[i]
          return 0 === out
        }
      },
      './node_modules/browserify-sign/node_modules/bn.js/lib/bn.js': function (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) {
        !(function (module, exports) {
          'use strict'
          function assert(val, msg) {
            if (!val) throw new Error(msg || 'Assertion failed')
          }
          function inherits(ctor, superCtor) {
            ctor.super_ = superCtor
            var TempCtor = function () {}
            ;(TempCtor.prototype = superCtor.prototype),
              (ctor.prototype = new TempCtor()),
              (ctor.prototype.constructor = ctor)
          }
          function BN(number, base, endian) {
            if (BN.isBN(number)) return number
            ;(this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== number &&
                (('le' !== base && 'be' !== base) ||
                  ((endian = base), (base = 10)),
                this._init(number || 0, base || 10, endian || 'be'))
          }
          var Buffer
          'object' == typeof module ? (module.exports = BN) : (exports.BN = BN),
            (BN.BN = BN),
            (BN.wordSize = 26)
          try {
            Buffer =
              'undefined' != typeof window && void 0 !== window.Buffer
                ? window.Buffer
                : __webpack_require__('?7a28').Buffer
          } catch (e) {}
          function parseHex4Bits(string, index) {
            var c = string.charCodeAt(index)
            return c >= 48 && c <= 57
              ? c - 48
              : c >= 65 && c <= 70
                ? c - 55
                : c >= 97 && c <= 102
                  ? c - 87
                  : void assert(!1, 'Invalid character in ' + string)
          }
          function parseHexByte(string, lowerBound, index) {
            var r = parseHex4Bits(string, index)
            return (
              index - 1 >= lowerBound &&
                (r |= parseHex4Bits(string, index - 1) << 4),
              r
            )
          }
          function parseBase(str, start, end, mul) {
            for (
              var r = 0, b = 0, len = Math.min(str.length, end), i = start;
              i < len;
              i++
            ) {
              var c = str.charCodeAt(i) - 48
              ;(r *= mul),
                (b = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
                assert(c >= 0 && b < mul, 'Invalid character'),
                (r += b)
            }
            return r
          }
          function move(dest, src) {
            ;(dest.words = src.words),
              (dest.length = src.length),
              (dest.negative = src.negative),
              (dest.red = src.red)
          }
          if (
            ((BN.isBN = function isBN(num) {
              return (
                num instanceof BN ||
                (null !== num &&
                  'object' == typeof num &&
                  num.constructor.wordSize === BN.wordSize &&
                  Array.isArray(num.words))
              )
            }),
            (BN.max = function max(left, right) {
              return left.cmp(right) > 0 ? left : right
            }),
            (BN.min = function min(left, right) {
              return left.cmp(right) < 0 ? left : right
            }),
            (BN.prototype._init = function init(number, base, endian) {
              if ('number' == typeof number)
                return this._initNumber(number, base, endian)
              if ('object' == typeof number)
                return this._initArray(number, base, endian)
              'hex' === base && (base = 16),
                assert(base === (0 | base) && base >= 2 && base <= 36)
              var start = 0
              '-' === (number = number.toString().replace(/\s+/g, ''))[0] &&
                (start++, (this.negative = 1)),
                start < number.length &&
                  (16 === base
                    ? this._parseHex(number, start, endian)
                    : (this._parseBase(number, base, start),
                      'le' === endian &&
                        this._initArray(this.toArray(), base, endian)))
            }),
            (BN.prototype._initNumber = function _initNumber(
              number,
              base,
              endian
            ) {
              number < 0 && ((this.negative = 1), (number = -number)),
                number < 67108864
                  ? ((this.words = [67108863 & number]), (this.length = 1))
                  : number < 4503599627370496
                    ? ((this.words = [
                        67108863 & number,
                        (number / 67108864) & 67108863,
                      ]),
                      (this.length = 2))
                    : (assert(number < 9007199254740992),
                      (this.words = [
                        67108863 & number,
                        (number / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                'le' === endian && this._initArray(this.toArray(), base, endian)
            }),
            (BN.prototype._initArray = function _initArray(
              number,
              base,
              endian
            ) {
              if (
                (assert('number' == typeof number.length), number.length <= 0)
              )
                return (this.words = [0]), (this.length = 1), this
              ;(this.length = Math.ceil(number.length / 3)),
                (this.words = new Array(this.length))
              for (var i = 0; i < this.length; i++) this.words[i] = 0
              var j,
                w,
                off = 0
              if ('be' === endian)
                for (i = number.length - 1, j = 0; i >= 0; i -= 3)
                  (w =
                    number[i] | (number[i - 1] << 8) | (number[i - 2] << 16)),
                    (this.words[j] |= (w << off) & 67108863),
                    (this.words[j + 1] = (w >>> (26 - off)) & 67108863),
                    (off += 24) >= 26 && ((off -= 26), j++)
              else if ('le' === endian)
                for (i = 0, j = 0; i < number.length; i += 3)
                  (w =
                    number[i] | (number[i + 1] << 8) | (number[i + 2] << 16)),
                    (this.words[j] |= (w << off) & 67108863),
                    (this.words[j + 1] = (w >>> (26 - off)) & 67108863),
                    (off += 24) >= 26 && ((off -= 26), j++)
              return this._strip()
            }),
            (BN.prototype._parseHex = function _parseHex(
              number,
              start,
              endian
            ) {
              ;(this.length = Math.ceil((number.length - start) / 6)),
                (this.words = new Array(this.length))
              for (var i = 0; i < this.length; i++) this.words[i] = 0
              var w,
                off = 0,
                j = 0
              if ('be' === endian)
                for (i = number.length - 1; i >= start; i -= 2)
                  (w = parseHexByte(number, start, i) << off),
                    (this.words[j] |= 67108863 & w),
                    off >= 18
                      ? ((off -= 18), (j += 1), (this.words[j] |= w >>> 26))
                      : (off += 8)
              else
                for (
                  i = (number.length - start) % 2 == 0 ? start + 1 : start;
                  i < number.length;
                  i += 2
                )
                  (w = parseHexByte(number, start, i) << off),
                    (this.words[j] |= 67108863 & w),
                    off >= 18
                      ? ((off -= 18), (j += 1), (this.words[j] |= w >>> 26))
                      : (off += 8)
              this._strip()
            }),
            (BN.prototype._parseBase = function _parseBase(
              number,
              base,
              start
            ) {
              ;(this.words = [0]), (this.length = 1)
              for (
                var limbLen = 0, limbPow = 1;
                limbPow <= 67108863;
                limbPow *= base
              )
                limbLen++
              limbLen--, (limbPow = (limbPow / base) | 0)
              for (
                var total = number.length - start,
                  mod = total % limbLen,
                  end = Math.min(total, total - mod) + start,
                  word = 0,
                  i = start;
                i < end;
                i += limbLen
              )
                (word = parseBase(number, i, i + limbLen, base)),
                  this.imuln(limbPow),
                  this.words[0] + word < 67108864
                    ? (this.words[0] += word)
                    : this._iaddn(word)
              if (0 !== mod) {
                var pow = 1
                for (
                  word = parseBase(number, i, number.length, base), i = 0;
                  i < mod;
                  i++
                )
                  pow *= base
                this.imuln(pow),
                  this.words[0] + word < 67108864
                    ? (this.words[0] += word)
                    : this._iaddn(word)
              }
              this._strip()
            }),
            (BN.prototype.copy = function copy(dest) {
              dest.words = new Array(this.length)
              for (var i = 0; i < this.length; i++)
                dest.words[i] = this.words[i]
              ;(dest.length = this.length),
                (dest.negative = this.negative),
                (dest.red = this.red)
            }),
            (BN.prototype._move = function _move(dest) {
              move(dest, this)
            }),
            (BN.prototype.clone = function clone() {
              var r = new BN(null)
              return this.copy(r), r
            }),
            (BN.prototype._expand = function _expand(size) {
              for (; this.length < size; ) this.words[this.length++] = 0
              return this
            }),
            (BN.prototype._strip = function strip() {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--
              return this._normSign()
            }),
            (BN.prototype._normSign = function _normSign() {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              )
            }),
            'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
          )
            try {
              BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect
            } catch (e) {
              BN.prototype.inspect = inspect
            }
          else BN.prototype.inspect = inspect
          function inspect() {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
          }
          var zeros = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000',
            ],
            groupSizes = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            groupBases = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ]
          ;(BN.prototype.toString = function toString(base, padding) {
            var out
            if (
              ((padding = 0 | padding || 1),
              16 === (base = base || 10) || 'hex' === base)
            ) {
              out = ''
              for (var off = 0, carry = 0, i = 0; i < this.length; i++) {
                var w = this.words[i],
                  word = (16777215 & ((w << off) | carry)).toString(16)
                ;(carry = (w >>> (24 - off)) & 16777215),
                  (off += 2) >= 26 && ((off -= 26), i--),
                  (out =
                    0 !== carry || i !== this.length - 1
                      ? zeros[6 - word.length] + word + out
                      : word + out)
              }
              for (
                0 !== carry && (out = carry.toString(16) + out);
                out.length % padding != 0;

              )
                out = '0' + out
              return 0 !== this.negative && (out = '-' + out), out
            }
            if (base === (0 | base) && base >= 2 && base <= 36) {
              var groupSize = groupSizes[base],
                groupBase = groupBases[base]
              out = ''
              var c = this.clone()
              for (c.negative = 0; !c.isZero(); ) {
                var r = c.modrn(groupBase).toString(base)
                out = (c = c.idivn(groupBase)).isZero()
                  ? r + out
                  : zeros[groupSize - r.length] + r + out
              }
              for (
                this.isZero() && (out = '0' + out);
                out.length % padding != 0;

              )
                out = '0' + out
              return 0 !== this.negative && (out = '-' + out), out
            }
            assert(!1, 'Base should be between 2 and 36')
          }),
            (BN.prototype.toNumber = function toNumber() {
              var ret = this.words[0]
              return (
                2 === this.length
                  ? (ret += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (ret += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      assert(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -ret : ret
              )
            }),
            (BN.prototype.toJSON = function toJSON() {
              return this.toString(16, 2)
            }),
            Buffer &&
              (BN.prototype.toBuffer = function toBuffer(endian, length) {
                return this.toArrayLike(Buffer, endian, length)
              }),
            (BN.prototype.toArray = function toArray(endian, length) {
              return this.toArrayLike(Array, endian, length)
            })
          function smallMulTo(self, num, out) {
            out.negative = num.negative ^ self.negative
            var len = (self.length + num.length) | 0
            ;(out.length = len), (len = (len - 1) | 0)
            var a = 0 | self.words[0],
              b = 0 | num.words[0],
              r = a * b,
              lo = 67108863 & r,
              carry = (r / 67108864) | 0
            out.words[0] = lo
            for (var k = 1; k < len; k++) {
              for (
                var ncarry = carry >>> 26,
                  rword = 67108863 & carry,
                  maxJ = Math.min(k, num.length - 1),
                  j = Math.max(0, k - self.length + 1);
                j <= maxJ;
                j++
              ) {
                var i = (k - j) | 0
                ;(ncarry +=
                  ((r =
                    (a = 0 | self.words[i]) * (b = 0 | num.words[j]) + rword) /
                    67108864) |
                  0),
                  (rword = 67108863 & r)
              }
              ;(out.words[k] = 0 | rword), (carry = 0 | ncarry)
            }
            return (
              0 !== carry ? (out.words[k] = 0 | carry) : out.length--,
              out._strip()
            )
          }
          ;(BN.prototype.toArrayLike = function toArrayLike(
            ArrayType,
            endian,
            length
          ) {
            this._strip()
            var byteLength = this.byteLength(),
              reqLength = length || Math.max(1, byteLength)
            assert(
              byteLength <= reqLength,
              'byte array longer than desired length'
            ),
              assert(reqLength > 0, 'Requested array length <= 0')
            var res = (function allocate(ArrayType, size) {
              return ArrayType.allocUnsafe
                ? ArrayType.allocUnsafe(size)
                : new ArrayType(size)
            })(ArrayType, reqLength)
            return (
              this['_toArrayLike' + ('le' === endian ? 'LE' : 'BE')](
                res,
                byteLength
              ),
              res
            )
          }),
            (BN.prototype._toArrayLikeLE = function _toArrayLikeLE(
              res,
              byteLength
            ) {
              for (
                var position = 0, carry = 0, i = 0, shift = 0;
                i < this.length;
                i++
              ) {
                var word = (this.words[i] << shift) | carry
                ;(res[position++] = 255 & word),
                  position < res.length &&
                    (res[position++] = (word >> 8) & 255),
                  position < res.length &&
                    (res[position++] = (word >> 16) & 255),
                  6 === shift
                    ? (position < res.length &&
                        (res[position++] = (word >> 24) & 255),
                      (carry = 0),
                      (shift = 0))
                    : ((carry = word >>> 24), (shift += 2))
              }
              if (position < res.length)
                for (res[position++] = carry; position < res.length; )
                  res[position++] = 0
            }),
            (BN.prototype._toArrayLikeBE = function _toArrayLikeBE(
              res,
              byteLength
            ) {
              for (
                var position = res.length - 1, carry = 0, i = 0, shift = 0;
                i < this.length;
                i++
              ) {
                var word = (this.words[i] << shift) | carry
                ;(res[position--] = 255 & word),
                  position >= 0 && (res[position--] = (word >> 8) & 255),
                  position >= 0 && (res[position--] = (word >> 16) & 255),
                  6 === shift
                    ? (position >= 0 && (res[position--] = (word >> 24) & 255),
                      (carry = 0),
                      (shift = 0))
                    : ((carry = word >>> 24), (shift += 2))
              }
              if (position >= 0)
                for (res[position--] = carry; position >= 0; )
                  res[position--] = 0
            }),
            Math.clz32
              ? (BN.prototype._countBits = function _countBits(w) {
                  return 32 - Math.clz32(w)
                })
              : (BN.prototype._countBits = function _countBits(w) {
                  var t = w,
                    r = 0
                  return (
                    t >= 4096 && ((r += 13), (t >>>= 13)),
                    t >= 64 && ((r += 7), (t >>>= 7)),
                    t >= 8 && ((r += 4), (t >>>= 4)),
                    t >= 2 && ((r += 2), (t >>>= 2)),
                    r + t
                  )
                }),
            (BN.prototype._zeroBits = function _zeroBits(w) {
              if (0 === w) return 26
              var t = w,
                r = 0
              return (
                8191 & t || ((r += 13), (t >>>= 13)),
                127 & t || ((r += 7), (t >>>= 7)),
                15 & t || ((r += 4), (t >>>= 4)),
                3 & t || ((r += 2), (t >>>= 2)),
                1 & t || r++,
                r
              )
            }),
            (BN.prototype.bitLength = function bitLength() {
              var w = this.words[this.length - 1],
                hi = this._countBits(w)
              return 26 * (this.length - 1) + hi
            }),
            (BN.prototype.zeroBits = function zeroBits() {
              if (this.isZero()) return 0
              for (var r = 0, i = 0; i < this.length; i++) {
                var b = this._zeroBits(this.words[i])
                if (((r += b), 26 !== b)) break
              }
              return r
            }),
            (BN.prototype.byteLength = function byteLength() {
              return Math.ceil(this.bitLength() / 8)
            }),
            (BN.prototype.toTwos = function toTwos(width) {
              return 0 !== this.negative
                ? this.abs().inotn(width).iaddn(1)
                : this.clone()
            }),
            (BN.prototype.fromTwos = function fromTwos(width) {
              return this.testn(width - 1)
                ? this.notn(width).iaddn(1).ineg()
                : this.clone()
            }),
            (BN.prototype.isNeg = function isNeg() {
              return 0 !== this.negative
            }),
            (BN.prototype.neg = function neg() {
              return this.clone().ineg()
            }),
            (BN.prototype.ineg = function ineg() {
              return this.isZero() || (this.negative ^= 1), this
            }),
            (BN.prototype.iuor = function iuor(num) {
              for (; this.length < num.length; ) this.words[this.length++] = 0
              for (var i = 0; i < num.length; i++)
                this.words[i] = this.words[i] | num.words[i]
              return this._strip()
            }),
            (BN.prototype.ior = function ior(num) {
              return assert(!(this.negative | num.negative)), this.iuor(num)
            }),
            (BN.prototype.or = function or(num) {
              return this.length > num.length
                ? this.clone().ior(num)
                : num.clone().ior(this)
            }),
            (BN.prototype.uor = function uor(num) {
              return this.length > num.length
                ? this.clone().iuor(num)
                : num.clone().iuor(this)
            }),
            (BN.prototype.iuand = function iuand(num) {
              var b
              b = this.length > num.length ? num : this
              for (var i = 0; i < b.length; i++)
                this.words[i] = this.words[i] & num.words[i]
              return (this.length = b.length), this._strip()
            }),
            (BN.prototype.iand = function iand(num) {
              return assert(!(this.negative | num.negative)), this.iuand(num)
            }),
            (BN.prototype.and = function and(num) {
              return this.length > num.length
                ? this.clone().iand(num)
                : num.clone().iand(this)
            }),
            (BN.prototype.uand = function uand(num) {
              return this.length > num.length
                ? this.clone().iuand(num)
                : num.clone().iuand(this)
            }),
            (BN.prototype.iuxor = function iuxor(num) {
              var a, b
              this.length > num.length
                ? ((a = this), (b = num))
                : ((a = num), (b = this))
              for (var i = 0; i < b.length; i++)
                this.words[i] = a.words[i] ^ b.words[i]
              if (this !== a)
                for (; i < a.length; i++) this.words[i] = a.words[i]
              return (this.length = a.length), this._strip()
            }),
            (BN.prototype.ixor = function ixor(num) {
              return assert(!(this.negative | num.negative)), this.iuxor(num)
            }),
            (BN.prototype.xor = function xor(num) {
              return this.length > num.length
                ? this.clone().ixor(num)
                : num.clone().ixor(this)
            }),
            (BN.prototype.uxor = function uxor(num) {
              return this.length > num.length
                ? this.clone().iuxor(num)
                : num.clone().iuxor(this)
            }),
            (BN.prototype.inotn = function inotn(width) {
              assert('number' == typeof width && width >= 0)
              var bytesNeeded = 0 | Math.ceil(width / 26),
                bitsLeft = width % 26
              this._expand(bytesNeeded), bitsLeft > 0 && bytesNeeded--
              for (var i = 0; i < bytesNeeded; i++)
                this.words[i] = 67108863 & ~this.words[i]
              return (
                bitsLeft > 0 &&
                  (this.words[i] =
                    ~this.words[i] & (67108863 >> (26 - bitsLeft))),
                this._strip()
              )
            }),
            (BN.prototype.notn = function notn(width) {
              return this.clone().inotn(width)
            }),
            (BN.prototype.setn = function setn(bit, val) {
              assert('number' == typeof bit && bit >= 0)
              var off = (bit / 26) | 0,
                wbit = bit % 26
              return (
                this._expand(off + 1),
                (this.words[off] = val
                  ? this.words[off] | (1 << wbit)
                  : this.words[off] & ~(1 << wbit)),
                this._strip()
              )
            }),
            (BN.prototype.iadd = function iadd(num) {
              var r, a, b
              if (0 !== this.negative && 0 === num.negative)
                return (
                  (this.negative = 0),
                  (r = this.isub(num)),
                  (this.negative ^= 1),
                  this._normSign()
                )
              if (0 === this.negative && 0 !== num.negative)
                return (
                  (num.negative = 0),
                  (r = this.isub(num)),
                  (num.negative = 1),
                  r._normSign()
                )
              this.length > num.length
                ? ((a = this), (b = num))
                : ((a = num), (b = this))
              for (var carry = 0, i = 0; i < b.length; i++)
                (r = (0 | a.words[i]) + (0 | b.words[i]) + carry),
                  (this.words[i] = 67108863 & r),
                  (carry = r >>> 26)
              for (; 0 !== carry && i < a.length; i++)
                (r = (0 | a.words[i]) + carry),
                  (this.words[i] = 67108863 & r),
                  (carry = r >>> 26)
              if (((this.length = a.length), 0 !== carry))
                (this.words[this.length] = carry), this.length++
              else if (a !== this)
                for (; i < a.length; i++) this.words[i] = a.words[i]
              return this
            }),
            (BN.prototype.add = function add(num) {
              var res
              return 0 !== num.negative && 0 === this.negative
                ? ((num.negative = 0),
                  (res = this.sub(num)),
                  (num.negative ^= 1),
                  res)
                : 0 === num.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (res = num.sub(this)),
                    (this.negative = 1),
                    res)
                  : this.length > num.length
                    ? this.clone().iadd(num)
                    : num.clone().iadd(this)
            }),
            (BN.prototype.isub = function isub(num) {
              if (0 !== num.negative) {
                num.negative = 0
                var r = this.iadd(num)
                return (num.negative = 1), r._normSign()
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(num),
                  (this.negative = 1),
                  this._normSign()
                )
              var a,
                b,
                cmp = this.cmp(num)
              if (0 === cmp)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                )
              cmp > 0 ? ((a = this), (b = num)) : ((a = num), (b = this))
              for (var carry = 0, i = 0; i < b.length; i++)
                (carry =
                  (r = (0 | a.words[i]) - (0 | b.words[i]) + carry) >> 26),
                  (this.words[i] = 67108863 & r)
              for (; 0 !== carry && i < a.length; i++)
                (carry = (r = (0 | a.words[i]) + carry) >> 26),
                  (this.words[i] = 67108863 & r)
              if (0 === carry && i < a.length && a !== this)
                for (; i < a.length; i++) this.words[i] = a.words[i]
              return (
                (this.length = Math.max(this.length, i)),
                a !== this && (this.negative = 1),
                this._strip()
              )
            }),
            (BN.prototype.sub = function sub(num) {
              return this.clone().isub(num)
            })
          var comb10MulTo = function comb10MulTo(self, num, out) {
            var lo,
              mid,
              hi,
              a = self.words,
              b = num.words,
              o = out.words,
              c = 0,
              a0 = 0 | a[0],
              al0 = 8191 & a0,
              ah0 = a0 >>> 13,
              a1 = 0 | a[1],
              al1 = 8191 & a1,
              ah1 = a1 >>> 13,
              a2 = 0 | a[2],
              al2 = 8191 & a2,
              ah2 = a2 >>> 13,
              a3 = 0 | a[3],
              al3 = 8191 & a3,
              ah3 = a3 >>> 13,
              a4 = 0 | a[4],
              al4 = 8191 & a4,
              ah4 = a4 >>> 13,
              a5 = 0 | a[5],
              al5 = 8191 & a5,
              ah5 = a5 >>> 13,
              a6 = 0 | a[6],
              al6 = 8191 & a6,
              ah6 = a6 >>> 13,
              a7 = 0 | a[7],
              al7 = 8191 & a7,
              ah7 = a7 >>> 13,
              a8 = 0 | a[8],
              al8 = 8191 & a8,
              ah8 = a8 >>> 13,
              a9 = 0 | a[9],
              al9 = 8191 & a9,
              ah9 = a9 >>> 13,
              b0 = 0 | b[0],
              bl0 = 8191 & b0,
              bh0 = b0 >>> 13,
              b1 = 0 | b[1],
              bl1 = 8191 & b1,
              bh1 = b1 >>> 13,
              b2 = 0 | b[2],
              bl2 = 8191 & b2,
              bh2 = b2 >>> 13,
              b3 = 0 | b[3],
              bl3 = 8191 & b3,
              bh3 = b3 >>> 13,
              b4 = 0 | b[4],
              bl4 = 8191 & b4,
              bh4 = b4 >>> 13,
              b5 = 0 | b[5],
              bl5 = 8191 & b5,
              bh5 = b5 >>> 13,
              b6 = 0 | b[6],
              bl6 = 8191 & b6,
              bh6 = b6 >>> 13,
              b7 = 0 | b[7],
              bl7 = 8191 & b7,
              bh7 = b7 >>> 13,
              b8 = 0 | b[8],
              bl8 = 8191 & b8,
              bh8 = b8 >>> 13,
              b9 = 0 | b[9],
              bl9 = 8191 & b9,
              bh9 = b9 >>> 13
            ;(out.negative = self.negative ^ num.negative), (out.length = 19)
            var w0 =
              (((c + (lo = Math.imul(al0, bl0))) | 0) +
                ((8191 &
                  (mid =
                    ((mid = Math.imul(al0, bh0)) + Math.imul(ah0, bl0)) | 0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = Math.imul(ah0, bh0)) + (mid >>> 13)) | 0) +
                (w0 >>> 26)) |
              0),
              (w0 &= 67108863),
              (lo = Math.imul(al1, bl0)),
              (mid = ((mid = Math.imul(al1, bh0)) + Math.imul(ah1, bl0)) | 0),
              (hi = Math.imul(ah1, bh0))
            var w1 =
              (((c + (lo = (lo + Math.imul(al0, bl1)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh1)) | 0) +
                      Math.imul(ah0, bl1)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh1)) | 0) + (mid >>> 13)) | 0) +
                (w1 >>> 26)) |
              0),
              (w1 &= 67108863),
              (lo = Math.imul(al2, bl0)),
              (mid = ((mid = Math.imul(al2, bh0)) + Math.imul(ah2, bl0)) | 0),
              (hi = Math.imul(ah2, bh0)),
              (lo = (lo + Math.imul(al1, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh1)) | 0) +
                  Math.imul(ah1, bl1)) |
                0),
              (hi = (hi + Math.imul(ah1, bh1)) | 0)
            var w2 =
              (((c + (lo = (lo + Math.imul(al0, bl2)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh2)) | 0) +
                      Math.imul(ah0, bl2)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh2)) | 0) + (mid >>> 13)) | 0) +
                (w2 >>> 26)) |
              0),
              (w2 &= 67108863),
              (lo = Math.imul(al3, bl0)),
              (mid = ((mid = Math.imul(al3, bh0)) + Math.imul(ah3, bl0)) | 0),
              (hi = Math.imul(ah3, bh0)),
              (lo = (lo + Math.imul(al2, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh1)) | 0) +
                  Math.imul(ah2, bl1)) |
                0),
              (hi = (hi + Math.imul(ah2, bh1)) | 0),
              (lo = (lo + Math.imul(al1, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh2)) | 0) +
                  Math.imul(ah1, bl2)) |
                0),
              (hi = (hi + Math.imul(ah1, bh2)) | 0)
            var w3 =
              (((c + (lo = (lo + Math.imul(al0, bl3)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh3)) | 0) +
                      Math.imul(ah0, bl3)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh3)) | 0) + (mid >>> 13)) | 0) +
                (w3 >>> 26)) |
              0),
              (w3 &= 67108863),
              (lo = Math.imul(al4, bl0)),
              (mid = ((mid = Math.imul(al4, bh0)) + Math.imul(ah4, bl0)) | 0),
              (hi = Math.imul(ah4, bh0)),
              (lo = (lo + Math.imul(al3, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh1)) | 0) +
                  Math.imul(ah3, bl1)) |
                0),
              (hi = (hi + Math.imul(ah3, bh1)) | 0),
              (lo = (lo + Math.imul(al2, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh2)) | 0) +
                  Math.imul(ah2, bl2)) |
                0),
              (hi = (hi + Math.imul(ah2, bh2)) | 0),
              (lo = (lo + Math.imul(al1, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh3)) | 0) +
                  Math.imul(ah1, bl3)) |
                0),
              (hi = (hi + Math.imul(ah1, bh3)) | 0)
            var w4 =
              (((c + (lo = (lo + Math.imul(al0, bl4)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh4)) | 0) +
                      Math.imul(ah0, bl4)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh4)) | 0) + (mid >>> 13)) | 0) +
                (w4 >>> 26)) |
              0),
              (w4 &= 67108863),
              (lo = Math.imul(al5, bl0)),
              (mid = ((mid = Math.imul(al5, bh0)) + Math.imul(ah5, bl0)) | 0),
              (hi = Math.imul(ah5, bh0)),
              (lo = (lo + Math.imul(al4, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh1)) | 0) +
                  Math.imul(ah4, bl1)) |
                0),
              (hi = (hi + Math.imul(ah4, bh1)) | 0),
              (lo = (lo + Math.imul(al3, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh2)) | 0) +
                  Math.imul(ah3, bl2)) |
                0),
              (hi = (hi + Math.imul(ah3, bh2)) | 0),
              (lo = (lo + Math.imul(al2, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh3)) | 0) +
                  Math.imul(ah2, bl3)) |
                0),
              (hi = (hi + Math.imul(ah2, bh3)) | 0),
              (lo = (lo + Math.imul(al1, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh4)) | 0) +
                  Math.imul(ah1, bl4)) |
                0),
              (hi = (hi + Math.imul(ah1, bh4)) | 0)
            var w5 =
              (((c + (lo = (lo + Math.imul(al0, bl5)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh5)) | 0) +
                      Math.imul(ah0, bl5)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh5)) | 0) + (mid >>> 13)) | 0) +
                (w5 >>> 26)) |
              0),
              (w5 &= 67108863),
              (lo = Math.imul(al6, bl0)),
              (mid = ((mid = Math.imul(al6, bh0)) + Math.imul(ah6, bl0)) | 0),
              (hi = Math.imul(ah6, bh0)),
              (lo = (lo + Math.imul(al5, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh1)) | 0) +
                  Math.imul(ah5, bl1)) |
                0),
              (hi = (hi + Math.imul(ah5, bh1)) | 0),
              (lo = (lo + Math.imul(al4, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh2)) | 0) +
                  Math.imul(ah4, bl2)) |
                0),
              (hi = (hi + Math.imul(ah4, bh2)) | 0),
              (lo = (lo + Math.imul(al3, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh3)) | 0) +
                  Math.imul(ah3, bl3)) |
                0),
              (hi = (hi + Math.imul(ah3, bh3)) | 0),
              (lo = (lo + Math.imul(al2, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh4)) | 0) +
                  Math.imul(ah2, bl4)) |
                0),
              (hi = (hi + Math.imul(ah2, bh4)) | 0),
              (lo = (lo + Math.imul(al1, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh5)) | 0) +
                  Math.imul(ah1, bl5)) |
                0),
              (hi = (hi + Math.imul(ah1, bh5)) | 0)
            var w6 =
              (((c + (lo = (lo + Math.imul(al0, bl6)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh6)) | 0) +
                      Math.imul(ah0, bl6)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh6)) | 0) + (mid >>> 13)) | 0) +
                (w6 >>> 26)) |
              0),
              (w6 &= 67108863),
              (lo = Math.imul(al7, bl0)),
              (mid = ((mid = Math.imul(al7, bh0)) + Math.imul(ah7, bl0)) | 0),
              (hi = Math.imul(ah7, bh0)),
              (lo = (lo + Math.imul(al6, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh1)) | 0) +
                  Math.imul(ah6, bl1)) |
                0),
              (hi = (hi + Math.imul(ah6, bh1)) | 0),
              (lo = (lo + Math.imul(al5, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh2)) | 0) +
                  Math.imul(ah5, bl2)) |
                0),
              (hi = (hi + Math.imul(ah5, bh2)) | 0),
              (lo = (lo + Math.imul(al4, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh3)) | 0) +
                  Math.imul(ah4, bl3)) |
                0),
              (hi = (hi + Math.imul(ah4, bh3)) | 0),
              (lo = (lo + Math.imul(al3, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh4)) | 0) +
                  Math.imul(ah3, bl4)) |
                0),
              (hi = (hi + Math.imul(ah3, bh4)) | 0),
              (lo = (lo + Math.imul(al2, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh5)) | 0) +
                  Math.imul(ah2, bl5)) |
                0),
              (hi = (hi + Math.imul(ah2, bh5)) | 0),
              (lo = (lo + Math.imul(al1, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh6)) | 0) +
                  Math.imul(ah1, bl6)) |
                0),
              (hi = (hi + Math.imul(ah1, bh6)) | 0)
            var w7 =
              (((c + (lo = (lo + Math.imul(al0, bl7)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh7)) | 0) +
                      Math.imul(ah0, bl7)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh7)) | 0) + (mid >>> 13)) | 0) +
                (w7 >>> 26)) |
              0),
              (w7 &= 67108863),
              (lo = Math.imul(al8, bl0)),
              (mid = ((mid = Math.imul(al8, bh0)) + Math.imul(ah8, bl0)) | 0),
              (hi = Math.imul(ah8, bh0)),
              (lo = (lo + Math.imul(al7, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh1)) | 0) +
                  Math.imul(ah7, bl1)) |
                0),
              (hi = (hi + Math.imul(ah7, bh1)) | 0),
              (lo = (lo + Math.imul(al6, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh2)) | 0) +
                  Math.imul(ah6, bl2)) |
                0),
              (hi = (hi + Math.imul(ah6, bh2)) | 0),
              (lo = (lo + Math.imul(al5, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh3)) | 0) +
                  Math.imul(ah5, bl3)) |
                0),
              (hi = (hi + Math.imul(ah5, bh3)) | 0),
              (lo = (lo + Math.imul(al4, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh4)) | 0) +
                  Math.imul(ah4, bl4)) |
                0),
              (hi = (hi + Math.imul(ah4, bh4)) | 0),
              (lo = (lo + Math.imul(al3, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh5)) | 0) +
                  Math.imul(ah3, bl5)) |
                0),
              (hi = (hi + Math.imul(ah3, bh5)) | 0),
              (lo = (lo + Math.imul(al2, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh6)) | 0) +
                  Math.imul(ah2, bl6)) |
                0),
              (hi = (hi + Math.imul(ah2, bh6)) | 0),
              (lo = (lo + Math.imul(al1, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh7)) | 0) +
                  Math.imul(ah1, bl7)) |
                0),
              (hi = (hi + Math.imul(ah1, bh7)) | 0)
            var w8 =
              (((c + (lo = (lo + Math.imul(al0, bl8)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh8)) | 0) +
                      Math.imul(ah0, bl8)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh8)) | 0) + (mid >>> 13)) | 0) +
                (w8 >>> 26)) |
              0),
              (w8 &= 67108863),
              (lo = Math.imul(al9, bl0)),
              (mid = ((mid = Math.imul(al9, bh0)) + Math.imul(ah9, bl0)) | 0),
              (hi = Math.imul(ah9, bh0)),
              (lo = (lo + Math.imul(al8, bl1)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh1)) | 0) +
                  Math.imul(ah8, bl1)) |
                0),
              (hi = (hi + Math.imul(ah8, bh1)) | 0),
              (lo = (lo + Math.imul(al7, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh2)) | 0) +
                  Math.imul(ah7, bl2)) |
                0),
              (hi = (hi + Math.imul(ah7, bh2)) | 0),
              (lo = (lo + Math.imul(al6, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh3)) | 0) +
                  Math.imul(ah6, bl3)) |
                0),
              (hi = (hi + Math.imul(ah6, bh3)) | 0),
              (lo = (lo + Math.imul(al5, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh4)) | 0) +
                  Math.imul(ah5, bl4)) |
                0),
              (hi = (hi + Math.imul(ah5, bh4)) | 0),
              (lo = (lo + Math.imul(al4, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh5)) | 0) +
                  Math.imul(ah4, bl5)) |
                0),
              (hi = (hi + Math.imul(ah4, bh5)) | 0),
              (lo = (lo + Math.imul(al3, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh6)) | 0) +
                  Math.imul(ah3, bl6)) |
                0),
              (hi = (hi + Math.imul(ah3, bh6)) | 0),
              (lo = (lo + Math.imul(al2, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh7)) | 0) +
                  Math.imul(ah2, bl7)) |
                0),
              (hi = (hi + Math.imul(ah2, bh7)) | 0),
              (lo = (lo + Math.imul(al1, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al1, bh8)) | 0) +
                  Math.imul(ah1, bl8)) |
                0),
              (hi = (hi + Math.imul(ah1, bh8)) | 0)
            var w9 =
              (((c + (lo = (lo + Math.imul(al0, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al0, bh9)) | 0) +
                      Math.imul(ah0, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah0, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w9 >>> 26)) |
              0),
              (w9 &= 67108863),
              (lo = Math.imul(al9, bl1)),
              (mid = ((mid = Math.imul(al9, bh1)) + Math.imul(ah9, bl1)) | 0),
              (hi = Math.imul(ah9, bh1)),
              (lo = (lo + Math.imul(al8, bl2)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh2)) | 0) +
                  Math.imul(ah8, bl2)) |
                0),
              (hi = (hi + Math.imul(ah8, bh2)) | 0),
              (lo = (lo + Math.imul(al7, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh3)) | 0) +
                  Math.imul(ah7, bl3)) |
                0),
              (hi = (hi + Math.imul(ah7, bh3)) | 0),
              (lo = (lo + Math.imul(al6, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh4)) | 0) +
                  Math.imul(ah6, bl4)) |
                0),
              (hi = (hi + Math.imul(ah6, bh4)) | 0),
              (lo = (lo + Math.imul(al5, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh5)) | 0) +
                  Math.imul(ah5, bl5)) |
                0),
              (hi = (hi + Math.imul(ah5, bh5)) | 0),
              (lo = (lo + Math.imul(al4, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh6)) | 0) +
                  Math.imul(ah4, bl6)) |
                0),
              (hi = (hi + Math.imul(ah4, bh6)) | 0),
              (lo = (lo + Math.imul(al3, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh7)) | 0) +
                  Math.imul(ah3, bl7)) |
                0),
              (hi = (hi + Math.imul(ah3, bh7)) | 0),
              (lo = (lo + Math.imul(al2, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al2, bh8)) | 0) +
                  Math.imul(ah2, bl8)) |
                0),
              (hi = (hi + Math.imul(ah2, bh8)) | 0)
            var w10 =
              (((c + (lo = (lo + Math.imul(al1, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al1, bh9)) | 0) +
                      Math.imul(ah1, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah1, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w10 >>> 26)) |
              0),
              (w10 &= 67108863),
              (lo = Math.imul(al9, bl2)),
              (mid = ((mid = Math.imul(al9, bh2)) + Math.imul(ah9, bl2)) | 0),
              (hi = Math.imul(ah9, bh2)),
              (lo = (lo + Math.imul(al8, bl3)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh3)) | 0) +
                  Math.imul(ah8, bl3)) |
                0),
              (hi = (hi + Math.imul(ah8, bh3)) | 0),
              (lo = (lo + Math.imul(al7, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh4)) | 0) +
                  Math.imul(ah7, bl4)) |
                0),
              (hi = (hi + Math.imul(ah7, bh4)) | 0),
              (lo = (lo + Math.imul(al6, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh5)) | 0) +
                  Math.imul(ah6, bl5)) |
                0),
              (hi = (hi + Math.imul(ah6, bh5)) | 0),
              (lo = (lo + Math.imul(al5, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh6)) | 0) +
                  Math.imul(ah5, bl6)) |
                0),
              (hi = (hi + Math.imul(ah5, bh6)) | 0),
              (lo = (lo + Math.imul(al4, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh7)) | 0) +
                  Math.imul(ah4, bl7)) |
                0),
              (hi = (hi + Math.imul(ah4, bh7)) | 0),
              (lo = (lo + Math.imul(al3, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al3, bh8)) | 0) +
                  Math.imul(ah3, bl8)) |
                0),
              (hi = (hi + Math.imul(ah3, bh8)) | 0)
            var w11 =
              (((c + (lo = (lo + Math.imul(al2, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al2, bh9)) | 0) +
                      Math.imul(ah2, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah2, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w11 >>> 26)) |
              0),
              (w11 &= 67108863),
              (lo = Math.imul(al9, bl3)),
              (mid = ((mid = Math.imul(al9, bh3)) + Math.imul(ah9, bl3)) | 0),
              (hi = Math.imul(ah9, bh3)),
              (lo = (lo + Math.imul(al8, bl4)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh4)) | 0) +
                  Math.imul(ah8, bl4)) |
                0),
              (hi = (hi + Math.imul(ah8, bh4)) | 0),
              (lo = (lo + Math.imul(al7, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh5)) | 0) +
                  Math.imul(ah7, bl5)) |
                0),
              (hi = (hi + Math.imul(ah7, bh5)) | 0),
              (lo = (lo + Math.imul(al6, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh6)) | 0) +
                  Math.imul(ah6, bl6)) |
                0),
              (hi = (hi + Math.imul(ah6, bh6)) | 0),
              (lo = (lo + Math.imul(al5, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh7)) | 0) +
                  Math.imul(ah5, bl7)) |
                0),
              (hi = (hi + Math.imul(ah5, bh7)) | 0),
              (lo = (lo + Math.imul(al4, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al4, bh8)) | 0) +
                  Math.imul(ah4, bl8)) |
                0),
              (hi = (hi + Math.imul(ah4, bh8)) | 0)
            var w12 =
              (((c + (lo = (lo + Math.imul(al3, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al3, bh9)) | 0) +
                      Math.imul(ah3, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah3, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w12 >>> 26)) |
              0),
              (w12 &= 67108863),
              (lo = Math.imul(al9, bl4)),
              (mid = ((mid = Math.imul(al9, bh4)) + Math.imul(ah9, bl4)) | 0),
              (hi = Math.imul(ah9, bh4)),
              (lo = (lo + Math.imul(al8, bl5)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh5)) | 0) +
                  Math.imul(ah8, bl5)) |
                0),
              (hi = (hi + Math.imul(ah8, bh5)) | 0),
              (lo = (lo + Math.imul(al7, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh6)) | 0) +
                  Math.imul(ah7, bl6)) |
                0),
              (hi = (hi + Math.imul(ah7, bh6)) | 0),
              (lo = (lo + Math.imul(al6, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh7)) | 0) +
                  Math.imul(ah6, bl7)) |
                0),
              (hi = (hi + Math.imul(ah6, bh7)) | 0),
              (lo = (lo + Math.imul(al5, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al5, bh8)) | 0) +
                  Math.imul(ah5, bl8)) |
                0),
              (hi = (hi + Math.imul(ah5, bh8)) | 0)
            var w13 =
              (((c + (lo = (lo + Math.imul(al4, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al4, bh9)) | 0) +
                      Math.imul(ah4, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah4, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w13 >>> 26)) |
              0),
              (w13 &= 67108863),
              (lo = Math.imul(al9, bl5)),
              (mid = ((mid = Math.imul(al9, bh5)) + Math.imul(ah9, bl5)) | 0),
              (hi = Math.imul(ah9, bh5)),
              (lo = (lo + Math.imul(al8, bl6)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh6)) | 0) +
                  Math.imul(ah8, bl6)) |
                0),
              (hi = (hi + Math.imul(ah8, bh6)) | 0),
              (lo = (lo + Math.imul(al7, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh7)) | 0) +
                  Math.imul(ah7, bl7)) |
                0),
              (hi = (hi + Math.imul(ah7, bh7)) | 0),
              (lo = (lo + Math.imul(al6, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al6, bh8)) | 0) +
                  Math.imul(ah6, bl8)) |
                0),
              (hi = (hi + Math.imul(ah6, bh8)) | 0)
            var w14 =
              (((c + (lo = (lo + Math.imul(al5, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al5, bh9)) | 0) +
                      Math.imul(ah5, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah5, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w14 >>> 26)) |
              0),
              (w14 &= 67108863),
              (lo = Math.imul(al9, bl6)),
              (mid = ((mid = Math.imul(al9, bh6)) + Math.imul(ah9, bl6)) | 0),
              (hi = Math.imul(ah9, bh6)),
              (lo = (lo + Math.imul(al8, bl7)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh7)) | 0) +
                  Math.imul(ah8, bl7)) |
                0),
              (hi = (hi + Math.imul(ah8, bh7)) | 0),
              (lo = (lo + Math.imul(al7, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al7, bh8)) | 0) +
                  Math.imul(ah7, bl8)) |
                0),
              (hi = (hi + Math.imul(ah7, bh8)) | 0)
            var w15 =
              (((c + (lo = (lo + Math.imul(al6, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al6, bh9)) | 0) +
                      Math.imul(ah6, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah6, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w15 >>> 26)) |
              0),
              (w15 &= 67108863),
              (lo = Math.imul(al9, bl7)),
              (mid = ((mid = Math.imul(al9, bh7)) + Math.imul(ah9, bl7)) | 0),
              (hi = Math.imul(ah9, bh7)),
              (lo = (lo + Math.imul(al8, bl8)) | 0),
              (mid =
                ((mid = (mid + Math.imul(al8, bh8)) | 0) +
                  Math.imul(ah8, bl8)) |
                0),
              (hi = (hi + Math.imul(ah8, bh8)) | 0)
            var w16 =
              (((c + (lo = (lo + Math.imul(al7, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al7, bh9)) | 0) +
                      Math.imul(ah7, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah7, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w16 >>> 26)) |
              0),
              (w16 &= 67108863),
              (lo = Math.imul(al9, bl8)),
              (mid = ((mid = Math.imul(al9, bh8)) + Math.imul(ah9, bl8)) | 0),
              (hi = Math.imul(ah9, bh8))
            var w17 =
              (((c + (lo = (lo + Math.imul(al8, bl9)) | 0)) | 0) +
                ((8191 &
                  (mid =
                    ((mid = (mid + Math.imul(al8, bh9)) | 0) +
                      Math.imul(ah8, bl9)) |
                    0)) <<
                  13)) |
              0
            ;(c =
              ((((hi = (hi + Math.imul(ah8, bh9)) | 0) + (mid >>> 13)) | 0) +
                (w17 >>> 26)) |
              0),
              (w17 &= 67108863)
            var w18 =
              (((c + (lo = Math.imul(al9, bl9))) | 0) +
                ((8191 &
                  (mid =
                    ((mid = Math.imul(al9, bh9)) + Math.imul(ah9, bl9)) | 0)) <<
                  13)) |
              0
            return (
              (c =
                ((((hi = Math.imul(ah9, bh9)) + (mid >>> 13)) | 0) +
                  (w18 >>> 26)) |
                0),
              (w18 &= 67108863),
              (o[0] = w0),
              (o[1] = w1),
              (o[2] = w2),
              (o[3] = w3),
              (o[4] = w4),
              (o[5] = w5),
              (o[6] = w6),
              (o[7] = w7),
              (o[8] = w8),
              (o[9] = w9),
              (o[10] = w10),
              (o[11] = w11),
              (o[12] = w12),
              (o[13] = w13),
              (o[14] = w14),
              (o[15] = w15),
              (o[16] = w16),
              (o[17] = w17),
              (o[18] = w18),
              0 !== c && ((o[19] = c), out.length++),
              out
            )
          }
          function bigMulTo(self, num, out) {
            ;(out.negative = num.negative ^ self.negative),
              (out.length = self.length + num.length)
            for (var carry = 0, hncarry = 0, k = 0; k < out.length - 1; k++) {
              var ncarry = hncarry
              hncarry = 0
              for (
                var rword = 67108863 & carry,
                  maxJ = Math.min(k, num.length - 1),
                  j = Math.max(0, k - self.length + 1);
                j <= maxJ;
                j++
              ) {
                var i = k - j,
                  r = (0 | self.words[i]) * (0 | num.words[j]),
                  lo = 67108863 & r
                ;(rword = 67108863 & (lo = (lo + rword) | 0)),
                  (hncarry +=
                    (ncarry =
                      ((ncarry = (ncarry + ((r / 67108864) | 0)) | 0) +
                        (lo >>> 26)) |
                      0) >>> 26),
                  (ncarry &= 67108863)
              }
              ;(out.words[k] = rword), (carry = ncarry), (ncarry = hncarry)
            }
            return (
              0 !== carry ? (out.words[k] = carry) : out.length--, out._strip()
            )
          }
          function jumboMulTo(self, num, out) {
            return bigMulTo(self, num, out)
          }
          function FFTM(x, y) {
            ;(this.x = x), (this.y = y)
          }
          Math.imul || (comb10MulTo = smallMulTo),
            (BN.prototype.mulTo = function mulTo(num, out) {
              var len = this.length + num.length
              return 10 === this.length && 10 === num.length
                ? comb10MulTo(this, num, out)
                : len < 63
                  ? smallMulTo(this, num, out)
                  : len < 1024
                    ? bigMulTo(this, num, out)
                    : jumboMulTo(this, num, out)
            }),
            (FFTM.prototype.makeRBT = function makeRBT(N) {
              for (
                var t = new Array(N), l = BN.prototype._countBits(N) - 1, i = 0;
                i < N;
                i++
              )
                t[i] = this.revBin(i, l, N)
              return t
            }),
            (FFTM.prototype.revBin = function revBin(x, l, N) {
              if (0 === x || x === N - 1) return x
              for (var rb = 0, i = 0; i < l; i++)
                (rb |= (1 & x) << (l - i - 1)), (x >>= 1)
              return rb
            }),
            (FFTM.prototype.permute = function permute(
              rbt,
              rws,
              iws,
              rtws,
              itws,
              N
            ) {
              for (var i = 0; i < N; i++)
                (rtws[i] = rws[rbt[i]]), (itws[i] = iws[rbt[i]])
            }),
            (FFTM.prototype.transform = function transform(
              rws,
              iws,
              rtws,
              itws,
              N,
              rbt
            ) {
              this.permute(rbt, rws, iws, rtws, itws, N)
              for (var s = 1; s < N; s <<= 1)
                for (
                  var l = s << 1,
                    rtwdf = Math.cos((2 * Math.PI) / l),
                    itwdf = Math.sin((2 * Math.PI) / l),
                    p = 0;
                  p < N;
                  p += l
                )
                  for (var rtwdf_ = rtwdf, itwdf_ = itwdf, j = 0; j < s; j++) {
                    var re = rtws[p + j],
                      ie = itws[p + j],
                      ro = rtws[p + j + s],
                      io = itws[p + j + s],
                      rx = rtwdf_ * ro - itwdf_ * io
                    ;(io = rtwdf_ * io + itwdf_ * ro),
                      (ro = rx),
                      (rtws[p + j] = re + ro),
                      (itws[p + j] = ie + io),
                      (rtws[p + j + s] = re - ro),
                      (itws[p + j + s] = ie - io),
                      j !== l &&
                        ((rx = rtwdf * rtwdf_ - itwdf * itwdf_),
                        (itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_),
                        (rtwdf_ = rx))
                  }
            }),
            (FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
              var N = 1 | Math.max(m, n),
                odd = 1 & N,
                i = 0
              for (N = (N / 2) | 0; N; N >>>= 1) i++
              return 1 << (i + 1 + odd)
            }),
            (FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
              if (!(N <= 1))
                for (var i = 0; i < N / 2; i++) {
                  var t = rws[i]
                  ;(rws[i] = rws[N - i - 1]),
                    (rws[N - i - 1] = t),
                    (t = iws[i]),
                    (iws[i] = -iws[N - i - 1]),
                    (iws[N - i - 1] = -t)
                }
            }),
            (FFTM.prototype.normalize13b = function normalize13b(ws, N) {
              for (var carry = 0, i = 0; i < N / 2; i++) {
                var w =
                  8192 * Math.round(ws[2 * i + 1] / N) +
                  Math.round(ws[2 * i] / N) +
                  carry
                ;(ws[i] = 67108863 & w),
                  (carry = w < 67108864 ? 0 : (w / 67108864) | 0)
              }
              return ws
            }),
            (FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
              for (var carry = 0, i = 0; i < len; i++)
                (carry += 0 | ws[i]),
                  (rws[2 * i] = 8191 & carry),
                  (carry >>>= 13),
                  (rws[2 * i + 1] = 8191 & carry),
                  (carry >>>= 13)
              for (i = 2 * len; i < N; ++i) rws[i] = 0
              assert(0 === carry), assert(!(-8192 & carry))
            }),
            (FFTM.prototype.stub = function stub(N) {
              for (var ph = new Array(N), i = 0; i < N; i++) ph[i] = 0
              return ph
            }),
            (FFTM.prototype.mulp = function mulp(x, y, out) {
              var N = 2 * this.guessLen13b(x.length, y.length),
                rbt = this.makeRBT(N),
                _ = this.stub(N),
                rws = new Array(N),
                rwst = new Array(N),
                iwst = new Array(N),
                nrws = new Array(N),
                nrwst = new Array(N),
                niwst = new Array(N),
                rmws = out.words
              ;(rmws.length = N),
                this.convert13b(x.words, x.length, rws, N),
                this.convert13b(y.words, y.length, nrws, N),
                this.transform(rws, _, rwst, iwst, N, rbt),
                this.transform(nrws, _, nrwst, niwst, N, rbt)
              for (var i = 0; i < N; i++) {
                var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i]
                ;(iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i]),
                  (rwst[i] = rx)
              }
              return (
                this.conjugate(rwst, iwst, N),
                this.transform(rwst, iwst, rmws, _, N, rbt),
                this.conjugate(rmws, _, N),
                this.normalize13b(rmws, N),
                (out.negative = x.negative ^ y.negative),
                (out.length = x.length + y.length),
                out._strip()
              )
            }),
            (BN.prototype.mul = function mul(num) {
              var out = new BN(null)
              return (
                (out.words = new Array(this.length + num.length)),
                this.mulTo(num, out)
              )
            }),
            (BN.prototype.mulf = function mulf(num) {
              var out = new BN(null)
              return (
                (out.words = new Array(this.length + num.length)),
                jumboMulTo(this, num, out)
              )
            }),
            (BN.prototype.imul = function imul(num) {
              return this.clone().mulTo(num, this)
            }),
            (BN.prototype.imuln = function imuln(num) {
              var isNegNum = num < 0
              isNegNum && (num = -num),
                assert('number' == typeof num),
                assert(num < 67108864)
              for (var carry = 0, i = 0; i < this.length; i++) {
                var w = (0 | this.words[i]) * num,
                  lo = (67108863 & w) + (67108863 & carry)
                ;(carry >>= 26),
                  (carry += (w / 67108864) | 0),
                  (carry += lo >>> 26),
                  (this.words[i] = 67108863 & lo)
              }
              return (
                0 !== carry && ((this.words[i] = carry), this.length++),
                isNegNum ? this.ineg() : this
              )
            }),
            (BN.prototype.muln = function muln(num) {
              return this.clone().imuln(num)
            }),
            (BN.prototype.sqr = function sqr() {
              return this.mul(this)
            }),
            (BN.prototype.isqr = function isqr() {
              return this.imul(this.clone())
            }),
            (BN.prototype.pow = function pow(num) {
              var w = (function toBitArray(num) {
                for (
                  var w = new Array(num.bitLength()), bit = 0;
                  bit < w.length;
                  bit++
                ) {
                  var off = (bit / 26) | 0,
                    wbit = bit % 26
                  w[bit] = (num.words[off] >>> wbit) & 1
                }
                return w
              })(num)
              if (0 === w.length) return new BN(1)
              for (
                var res = this, i = 0;
                i < w.length && 0 === w[i];
                i++, res = res.sqr()
              );
              if (++i < w.length)
                for (var q = res.sqr(); i < w.length; i++, q = q.sqr())
                  0 !== w[i] && (res = res.mul(q))
              return res
            }),
            (BN.prototype.iushln = function iushln(bits) {
              assert('number' == typeof bits && bits >= 0)
              var i,
                r = bits % 26,
                s = (bits - r) / 26,
                carryMask = (67108863 >>> (26 - r)) << (26 - r)
              if (0 !== r) {
                var carry = 0
                for (i = 0; i < this.length; i++) {
                  var newCarry = this.words[i] & carryMask,
                    c = ((0 | this.words[i]) - newCarry) << r
                  ;(this.words[i] = c | carry), (carry = newCarry >>> (26 - r))
                }
                carry && ((this.words[i] = carry), this.length++)
              }
              if (0 !== s) {
                for (i = this.length - 1; i >= 0; i--)
                  this.words[i + s] = this.words[i]
                for (i = 0; i < s; i++) this.words[i] = 0
                this.length += s
              }
              return this._strip()
            }),
            (BN.prototype.ishln = function ishln(bits) {
              return assert(0 === this.negative), this.iushln(bits)
            }),
            (BN.prototype.iushrn = function iushrn(bits, hint, extended) {
              var h
              assert('number' == typeof bits && bits >= 0),
                (h = hint ? (hint - (hint % 26)) / 26 : 0)
              var r = bits % 26,
                s = Math.min((bits - r) / 26, this.length),
                mask = 67108863 ^ ((67108863 >>> r) << r),
                maskedWords = extended
              if (((h -= s), (h = Math.max(0, h)), maskedWords)) {
                for (var i = 0; i < s; i++) maskedWords.words[i] = this.words[i]
                maskedWords.length = s
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, i = 0; i < this.length; i++)
                  this.words[i] = this.words[i + s]
              else (this.words[0] = 0), (this.length = 1)
              var carry = 0
              for (
                i = this.length - 1;
                i >= 0 && (0 !== carry || i >= h);
                i--
              ) {
                var word = 0 | this.words[i]
                ;(this.words[i] = (carry << (26 - r)) | (word >>> r)),
                  (carry = word & mask)
              }
              return (
                maskedWords &&
                  0 !== carry &&
                  (maskedWords.words[maskedWords.length++] = carry),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              )
            }),
            (BN.prototype.ishrn = function ishrn(bits, hint, extended) {
              return (
                assert(0 === this.negative), this.iushrn(bits, hint, extended)
              )
            }),
            (BN.prototype.shln = function shln(bits) {
              return this.clone().ishln(bits)
            }),
            (BN.prototype.ushln = function ushln(bits) {
              return this.clone().iushln(bits)
            }),
            (BN.prototype.shrn = function shrn(bits) {
              return this.clone().ishrn(bits)
            }),
            (BN.prototype.ushrn = function ushrn(bits) {
              return this.clone().iushrn(bits)
            }),
            (BN.prototype.testn = function testn(bit) {
              assert('number' == typeof bit && bit >= 0)
              var r = bit % 26,
                s = (bit - r) / 26,
                q = 1 << r
              return !(this.length <= s) && !!(this.words[s] & q)
            }),
            (BN.prototype.imaskn = function imaskn(bits) {
              assert('number' == typeof bits && bits >= 0)
              var r = bits % 26,
                s = (bits - r) / 26
              if (
                (assert(
                  0 === this.negative,
                  'imaskn works only with positive numbers'
                ),
                this.length <= s)
              )
                return this
              if (
                (0 !== r && s++,
                (this.length = Math.min(s, this.length)),
                0 !== r)
              ) {
                var mask = 67108863 ^ ((67108863 >>> r) << r)
                this.words[this.length - 1] &= mask
              }
              return this._strip()
            }),
            (BN.prototype.maskn = function maskn(bits) {
              return this.clone().imaskn(bits)
            }),
            (BN.prototype.iaddn = function iaddn(num) {
              return (
                assert('number' == typeof num),
                assert(num < 67108864),
                num < 0
                  ? this.isubn(-num)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= num
                      ? ((this.words[0] = num - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(num),
                        (this.negative = 1),
                        this)
                    : this._iaddn(num)
              )
            }),
            (BN.prototype._iaddn = function _iaddn(num) {
              this.words[0] += num
              for (var i = 0; i < this.length && this.words[i] >= 67108864; i++)
                (this.words[i] -= 67108864),
                  i === this.length - 1
                    ? (this.words[i + 1] = 1)
                    : this.words[i + 1]++
              return (this.length = Math.max(this.length, i + 1)), this
            }),
            (BN.prototype.isubn = function isubn(num) {
              if (
                (assert('number' == typeof num),
                assert(num < 67108864),
                num < 0)
              )
                return this.iaddn(-num)
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(num),
                  (this.negative = 1),
                  this
                )
              if (
                ((this.words[0] -= num), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1)
              else
                for (var i = 0; i < this.length && this.words[i] < 0; i++)
                  (this.words[i] += 67108864), (this.words[i + 1] -= 1)
              return this._strip()
            }),
            (BN.prototype.addn = function addn(num) {
              return this.clone().iaddn(num)
            }),
            (BN.prototype.subn = function subn(num) {
              return this.clone().isubn(num)
            }),
            (BN.prototype.iabs = function iabs() {
              return (this.negative = 0), this
            }),
            (BN.prototype.abs = function abs() {
              return this.clone().iabs()
            }),
            (BN.prototype._ishlnsubmul = function _ishlnsubmul(
              num,
              mul,
              shift
            ) {
              var i,
                w,
                len = num.length + shift
              this._expand(len)
              var carry = 0
              for (i = 0; i < num.length; i++) {
                w = (0 | this.words[i + shift]) + carry
                var right = (0 | num.words[i]) * mul
                ;(carry =
                  ((w -= 67108863 & right) >> 26) - ((right / 67108864) | 0)),
                  (this.words[i + shift] = 67108863 & w)
              }
              for (; i < this.length - shift; i++)
                (carry = (w = (0 | this.words[i + shift]) + carry) >> 26),
                  (this.words[i + shift] = 67108863 & w)
              if (0 === carry) return this._strip()
              for (assert(-1 === carry), carry = 0, i = 0; i < this.length; i++)
                (carry = (w = -(0 | this.words[i]) + carry) >> 26),
                  (this.words[i] = 67108863 & w)
              return (this.negative = 1), this._strip()
            }),
            (BN.prototype._wordDiv = function _wordDiv(num, mode) {
              var shift = (this.length, num.length),
                a = this.clone(),
                b = num,
                bhi = 0 | b.words[b.length - 1]
              0 !== (shift = 26 - this._countBits(bhi)) &&
                ((b = b.ushln(shift)),
                a.iushln(shift),
                (bhi = 0 | b.words[b.length - 1]))
              var q,
                m = a.length - b.length
              if ('mod' !== mode) {
                ;((q = new BN(null)).length = m + 1),
                  (q.words = new Array(q.length))
                for (var i = 0; i < q.length; i++) q.words[i] = 0
              }
              var diff = a.clone()._ishlnsubmul(b, 1, m)
              0 === diff.negative && ((a = diff), q && (q.words[m] = 1))
              for (var j = m - 1; j >= 0; j--) {
                var qj =
                  67108864 * (0 | a.words[b.length + j]) +
                  (0 | a.words[b.length + j - 1])
                for (
                  qj = Math.min((qj / bhi) | 0, 67108863),
                    a._ishlnsubmul(b, qj, j);
                  0 !== a.negative;

                )
                  qj--,
                    (a.negative = 0),
                    a._ishlnsubmul(b, 1, j),
                    a.isZero() || (a.negative ^= 1)
                q && (q.words[j] = qj)
              }
              return (
                q && q._strip(),
                a._strip(),
                'div' !== mode && 0 !== shift && a.iushrn(shift),
                { div: q || null, mod: a }
              )
            }),
            (BN.prototype.divmod = function divmod(num, mode, positive) {
              return (
                assert(!num.isZero()),
                this.isZero()
                  ? { div: new BN(0), mod: new BN(0) }
                  : 0 !== this.negative && 0 === num.negative
                    ? ((res = this.neg().divmod(num, mode)),
                      'mod' !== mode && (div = res.div.neg()),
                      'div' !== mode &&
                        ((mod = res.mod.neg()),
                        positive && 0 !== mod.negative && mod.iadd(num)),
                      { div, mod })
                    : 0 === this.negative && 0 !== num.negative
                      ? ((res = this.divmod(num.neg(), mode)),
                        'mod' !== mode && (div = res.div.neg()),
                        { div, mod: res.mod })
                      : this.negative & num.negative
                        ? ((res = this.neg().divmod(num.neg(), mode)),
                          'div' !== mode &&
                            ((mod = res.mod.neg()),
                            positive && 0 !== mod.negative && mod.isub(num)),
                          { div: res.div, mod })
                        : num.length > this.length || this.cmp(num) < 0
                          ? { div: new BN(0), mod: this }
                          : 1 === num.length
                            ? 'div' === mode
                              ? { div: this.divn(num.words[0]), mod: null }
                              : 'mod' === mode
                                ? {
                                    div: null,
                                    mod: new BN(this.modrn(num.words[0])),
                                  }
                                : {
                                    div: this.divn(num.words[0]),
                                    mod: new BN(this.modrn(num.words[0])),
                                  }
                            : this._wordDiv(num, mode)
              )
              var div, mod, res
            }),
            (BN.prototype.div = function div(num) {
              return this.divmod(num, 'div', !1).div
            }),
            (BN.prototype.mod = function mod(num) {
              return this.divmod(num, 'mod', !1).mod
            }),
            (BN.prototype.umod = function umod(num) {
              return this.divmod(num, 'mod', !0).mod
            }),
            (BN.prototype.divRound = function divRound(num) {
              var dm = this.divmod(num)
              if (dm.mod.isZero()) return dm.div
              var mod = 0 !== dm.div.negative ? dm.mod.isub(num) : dm.mod,
                half = num.ushrn(1),
                r2 = num.andln(1),
                cmp = mod.cmp(half)
              return cmp < 0 || (1 === r2 && 0 === cmp)
                ? dm.div
                : 0 !== dm.div.negative
                  ? dm.div.isubn(1)
                  : dm.div.iaddn(1)
            }),
            (BN.prototype.modrn = function modrn(num) {
              var isNegNum = num < 0
              isNegNum && (num = -num), assert(num <= 67108863)
              for (
                var p = (1 << 26) % num, acc = 0, i = this.length - 1;
                i >= 0;
                i--
              )
                acc = (p * acc + (0 | this.words[i])) % num
              return isNegNum ? -acc : acc
            }),
            (BN.prototype.modn = function modn(num) {
              return this.modrn(num)
            }),
            (BN.prototype.idivn = function idivn(num) {
              var isNegNum = num < 0
              isNegNum && (num = -num), assert(num <= 67108863)
              for (var carry = 0, i = this.length - 1; i >= 0; i--) {
                var w = (0 | this.words[i]) + 67108864 * carry
                ;(this.words[i] = (w / num) | 0), (carry = w % num)
              }
              return this._strip(), isNegNum ? this.ineg() : this
            }),
            (BN.prototype.divn = function divn(num) {
              return this.clone().idivn(num)
            }),
            (BN.prototype.egcd = function egcd(p) {
              assert(0 === p.negative), assert(!p.isZero())
              var x = this,
                y = p.clone()
              x = 0 !== x.negative ? x.umod(p) : x.clone()
              for (
                var A = new BN(1),
                  B = new BN(0),
                  C = new BN(0),
                  D = new BN(1),
                  g = 0;
                x.isEven() && y.isEven();

              )
                x.iushrn(1), y.iushrn(1), ++g
              for (var yp = y.clone(), xp = x.clone(); !x.isZero(); ) {
                for (
                  var i = 0, im = 1;
                  !(x.words[0] & im) && i < 26;
                  ++i, im <<= 1
                );
                if (i > 0)
                  for (x.iushrn(i); i-- > 0; )
                    (A.isOdd() || B.isOdd()) && (A.iadd(yp), B.isub(xp)),
                      A.iushrn(1),
                      B.iushrn(1)
                for (
                  var j = 0, jm = 1;
                  !(y.words[0] & jm) && j < 26;
                  ++j, jm <<= 1
                );
                if (j > 0)
                  for (y.iushrn(j); j-- > 0; )
                    (C.isOdd() || D.isOdd()) && (C.iadd(yp), D.isub(xp)),
                      C.iushrn(1),
                      D.iushrn(1)
                x.cmp(y) >= 0
                  ? (x.isub(y), A.isub(C), B.isub(D))
                  : (y.isub(x), C.isub(A), D.isub(B))
              }
              return { a: C, b: D, gcd: y.iushln(g) }
            }),
            (BN.prototype._invmp = function _invmp(p) {
              assert(0 === p.negative), assert(!p.isZero())
              var a = this,
                b = p.clone()
              a = 0 !== a.negative ? a.umod(p) : a.clone()
              for (
                var res, x1 = new BN(1), x2 = new BN(0), delta = b.clone();
                a.cmpn(1) > 0 && b.cmpn(1) > 0;

              ) {
                for (
                  var i = 0, im = 1;
                  !(a.words[0] & im) && i < 26;
                  ++i, im <<= 1
                );
                if (i > 0)
                  for (a.iushrn(i); i-- > 0; )
                    x1.isOdd() && x1.iadd(delta), x1.iushrn(1)
                for (
                  var j = 0, jm = 1;
                  !(b.words[0] & jm) && j < 26;
                  ++j, jm <<= 1
                );
                if (j > 0)
                  for (b.iushrn(j); j-- > 0; )
                    x2.isOdd() && x2.iadd(delta), x2.iushrn(1)
                a.cmp(b) >= 0
                  ? (a.isub(b), x1.isub(x2))
                  : (b.isub(a), x2.isub(x1))
              }
              return (
                (res = 0 === a.cmpn(1) ? x1 : x2).cmpn(0) < 0 && res.iadd(p),
                res
              )
            }),
            (BN.prototype.gcd = function gcd(num) {
              if (this.isZero()) return num.abs()
              if (num.isZero()) return this.abs()
              var a = this.clone(),
                b = num.clone()
              ;(a.negative = 0), (b.negative = 0)
              for (var shift = 0; a.isEven() && b.isEven(); shift++)
                a.iushrn(1), b.iushrn(1)
              for (;;) {
                for (; a.isEven(); ) a.iushrn(1)
                for (; b.isEven(); ) b.iushrn(1)
                var r = a.cmp(b)
                if (r < 0) {
                  var t = a
                  ;(a = b), (b = t)
                } else if (0 === r || 0 === b.cmpn(1)) break
                a.isub(b)
              }
              return b.iushln(shift)
            }),
            (BN.prototype.invm = function invm(num) {
              return this.egcd(num).a.umod(num)
            }),
            (BN.prototype.isEven = function isEven() {
              return !(1 & this.words[0])
            }),
            (BN.prototype.isOdd = function isOdd() {
              return !(1 & ~this.words[0])
            }),
            (BN.prototype.andln = function andln(num) {
              return this.words[0] & num
            }),
            (BN.prototype.bincn = function bincn(bit) {
              assert('number' == typeof bit)
              var r = bit % 26,
                s = (bit - r) / 26,
                q = 1 << r
              if (this.length <= s)
                return this._expand(s + 1), (this.words[s] |= q), this
              for (var carry = q, i = s; 0 !== carry && i < this.length; i++) {
                var w = 0 | this.words[i]
                ;(carry = (w += carry) >>> 26),
                  (w &= 67108863),
                  (this.words[i] = w)
              }
              return (
                0 !== carry && ((this.words[i] = carry), this.length++), this
              )
            }),
            (BN.prototype.isZero = function isZero() {
              return 1 === this.length && 0 === this.words[0]
            }),
            (BN.prototype.cmpn = function cmpn(num) {
              var res,
                negative = num < 0
              if (0 !== this.negative && !negative) return -1
              if (0 === this.negative && negative) return 1
              if ((this._strip(), this.length > 1)) res = 1
              else {
                negative && (num = -num),
                  assert(num <= 67108863, 'Number is too big')
                var w = 0 | this.words[0]
                res = w === num ? 0 : w < num ? -1 : 1
              }
              return 0 !== this.negative ? 0 | -res : res
            }),
            (BN.prototype.cmp = function cmp(num) {
              if (0 !== this.negative && 0 === num.negative) return -1
              if (0 === this.negative && 0 !== num.negative) return 1
              var res = this.ucmp(num)
              return 0 !== this.negative ? 0 | -res : res
            }),
            (BN.prototype.ucmp = function ucmp(num) {
              if (this.length > num.length) return 1
              if (this.length < num.length) return -1
              for (var res = 0, i = this.length - 1; i >= 0; i--) {
                var a = 0 | this.words[i],
                  b = 0 | num.words[i]
                if (a !== b) {
                  a < b ? (res = -1) : a > b && (res = 1)
                  break
                }
              }
              return res
            }),
            (BN.prototype.gtn = function gtn(num) {
              return 1 === this.cmpn(num)
            }),
            (BN.prototype.gt = function gt(num) {
              return 1 === this.cmp(num)
            }),
            (BN.prototype.gten = function gten(num) {
              return this.cmpn(num) >= 0
            }),
            (BN.prototype.gte = function gte(num) {
              return this.cmp(num) >= 0
            }),
            (BN.prototype.ltn = function ltn(num) {
              return -1 === this.cmpn(num)
            }),
            (BN.prototype.lt = function lt(num) {
              return -1 === this.cmp(num)
            }),
            (BN.prototype.lten = function lten(num) {
              return this.cmpn(num) <= 0
            }),
            (BN.prototype.lte = function lte(num) {
              return this.cmp(num) <= 0
            }),
            (BN.prototype.eqn = function eqn(num) {
              return 0 === this.cmpn(num)
            }),
            (BN.prototype.eq = function eq(num) {
              return 0 === this.cmp(num)
            }),
            (BN.red = function red(num) {
              return new Red(num)
            }),
            (BN.prototype.toRed = function toRed(ctx) {
              return (
                assert(!this.red, 'Already a number in reduction context'),
                assert(0 === this.negative, 'red works only with positives'),
                ctx.convertTo(this)._forceRed(ctx)
              )
            }),
            (BN.prototype.fromRed = function fromRed() {
              return (
                assert(
                  this.red,
                  'fromRed works only with numbers in reduction context'
                ),
                this.red.convertFrom(this)
              )
            }),
            (BN.prototype._forceRed = function _forceRed(ctx) {
              return (this.red = ctx), this
            }),
            (BN.prototype.forceRed = function forceRed(ctx) {
              return (
                assert(!this.red, 'Already a number in reduction context'),
                this._forceRed(ctx)
              )
            }),
            (BN.prototype.redAdd = function redAdd(num) {
              return (
                assert(this.red, 'redAdd works only with red numbers'),
                this.red.add(this, num)
              )
            }),
            (BN.prototype.redIAdd = function redIAdd(num) {
              return (
                assert(this.red, 'redIAdd works only with red numbers'),
                this.red.iadd(this, num)
              )
            }),
            (BN.prototype.redSub = function redSub(num) {
              return (
                assert(this.red, 'redSub works only with red numbers'),
                this.red.sub(this, num)
              )
            }),
            (BN.prototype.redISub = function redISub(num) {
              return (
                assert(this.red, 'redISub works only with red numbers'),
                this.red.isub(this, num)
              )
            }),
            (BN.prototype.redShl = function redShl(num) {
              return (
                assert(this.red, 'redShl works only with red numbers'),
                this.red.shl(this, num)
              )
            }),
            (BN.prototype.redMul = function redMul(num) {
              return (
                assert(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, num),
                this.red.mul(this, num)
              )
            }),
            (BN.prototype.redIMul = function redIMul(num) {
              return (
                assert(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, num),
                this.red.imul(this, num)
              )
            }),
            (BN.prototype.redSqr = function redSqr() {
              return (
                assert(this.red, 'redSqr works only with red numbers'),
                this.red._verify1(this),
                this.red.sqr(this)
              )
            }),
            (BN.prototype.redISqr = function redISqr() {
              return (
                assert(this.red, 'redISqr works only with red numbers'),
                this.red._verify1(this),
                this.red.isqr(this)
              )
            }),
            (BN.prototype.redSqrt = function redSqrt() {
              return (
                assert(this.red, 'redSqrt works only with red numbers'),
                this.red._verify1(this),
                this.red.sqrt(this)
              )
            }),
            (BN.prototype.redInvm = function redInvm() {
              return (
                assert(this.red, 'redInvm works only with red numbers'),
                this.red._verify1(this),
                this.red.invm(this)
              )
            }),
            (BN.prototype.redNeg = function redNeg() {
              return (
                assert(this.red, 'redNeg works only with red numbers'),
                this.red._verify1(this),
                this.red.neg(this)
              )
            }),
            (BN.prototype.redPow = function redPow(num) {
              return (
                assert(this.red && !num.red, 'redPow(normalNum)'),
                this.red._verify1(this),
                this.red.pow(this, num)
              )
            })
          var primes = { k256: null, p224: null, p192: null, p25519: null }
          function MPrime(name, p) {
            ;(this.name = name),
              (this.p = new BN(p, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new BN(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp())
          }
          function K256() {
            MPrime.call(
              this,
              'k256',
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
            )
          }
          function P224() {
            MPrime.call(
              this,
              'p224',
              'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
            )
          }
          function P192() {
            MPrime.call(
              this,
              'p192',
              'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
            )
          }
          function P25519() {
            MPrime.call(
              this,
              '25519',
              '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
            )
          }
          function Red(m) {
            if ('string' == typeof m) {
              var prime = BN._prime(m)
              ;(this.m = prime.p), (this.prime = prime)
            } else
              assert(m.gtn(1), 'modulus must be greater than 1'),
                (this.m = m),
                (this.prime = null)
          }
          function Mont(m) {
            Red.call(this, m),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new BN(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv))
          }
          ;(MPrime.prototype._tmp = function _tmp() {
            var tmp = new BN(null)
            return (tmp.words = new Array(Math.ceil(this.n / 13))), tmp
          }),
            (MPrime.prototype.ireduce = function ireduce(num) {
              var rlen,
                r = num
              do {
                this.split(r, this.tmp),
                  (rlen = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
              } while (rlen > this.n)
              var cmp = rlen < this.n ? -1 : r.ucmp(this.p)
              return (
                0 === cmp
                  ? ((r.words[0] = 0), (r.length = 1))
                  : cmp > 0
                    ? r.isub(this.p)
                    : void 0 !== r.strip
                      ? r.strip()
                      : r._strip(),
                r
              )
            }),
            (MPrime.prototype.split = function split(input, out) {
              input.iushrn(this.n, 0, out)
            }),
            (MPrime.prototype.imulK = function imulK(num) {
              return num.imul(this.k)
            }),
            inherits(K256, MPrime),
            (K256.prototype.split = function split(input, output) {
              for (
                var outLen = Math.min(input.length, 9), i = 0;
                i < outLen;
                i++
              )
                output.words[i] = input.words[i]
              if (((output.length = outLen), input.length <= 9))
                return (input.words[0] = 0), void (input.length = 1)
              var prev = input.words[9]
              for (
                output.words[output.length++] = 4194303 & prev, i = 10;
                i < input.length;
                i++
              ) {
                var next = 0 | input.words[i]
                ;(input.words[i - 10] =
                  ((4194303 & next) << 4) | (prev >>> 22)),
                  (prev = next)
              }
              ;(prev >>>= 22),
                (input.words[i - 10] = prev),
                0 === prev && input.length > 10
                  ? (input.length -= 10)
                  : (input.length -= 9)
            }),
            (K256.prototype.imulK = function imulK(num) {
              ;(num.words[num.length] = 0),
                (num.words[num.length + 1] = 0),
                (num.length += 2)
              for (var lo = 0, i = 0; i < num.length; i++) {
                var w = 0 | num.words[i]
                ;(lo += 977 * w),
                  (num.words[i] = 67108863 & lo),
                  (lo = 64 * w + ((lo / 67108864) | 0))
              }
              return (
                0 === num.words[num.length - 1] &&
                  (num.length--,
                  0 === num.words[num.length - 1] && num.length--),
                num
              )
            }),
            inherits(P224, MPrime),
            inherits(P192, MPrime),
            inherits(P25519, MPrime),
            (P25519.prototype.imulK = function imulK(num) {
              for (var carry = 0, i = 0; i < num.length; i++) {
                var hi = 19 * (0 | num.words[i]) + carry,
                  lo = 67108863 & hi
                ;(hi >>>= 26), (num.words[i] = lo), (carry = hi)
              }
              return 0 !== carry && (num.words[num.length++] = carry), num
            }),
            (BN._prime = function prime(name) {
              if (primes[name]) return primes[name]
              var prime
              if ('k256' === name) prime = new K256()
              else if ('p224' === name) prime = new P224()
              else if ('p192' === name) prime = new P192()
              else {
                if ('p25519' !== name) throw new Error('Unknown prime ' + name)
                prime = new P25519()
              }
              return (primes[name] = prime), prime
            }),
            (Red.prototype._verify1 = function _verify1(a) {
              assert(0 === a.negative, 'red works only with positives'),
                assert(a.red, 'red works only with red numbers')
            }),
            (Red.prototype._verify2 = function _verify2(a, b) {
              assert(
                !(a.negative | b.negative),
                'red works only with positives'
              ),
                assert(
                  a.red && a.red === b.red,
                  'red works only with red numbers'
                )
            }),
            (Red.prototype.imod = function imod(a) {
              return this.prime
                ? this.prime.ireduce(a)._forceRed(this)
                : (move(a, a.umod(this.m)._forceRed(this)), a)
            }),
            (Red.prototype.neg = function neg(a) {
              return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
            }),
            (Red.prototype.add = function add(a, b) {
              this._verify2(a, b)
              var res = a.add(b)
              return (
                res.cmp(this.m) >= 0 && res.isub(this.m), res._forceRed(this)
              )
            }),
            (Red.prototype.iadd = function iadd(a, b) {
              this._verify2(a, b)
              var res = a.iadd(b)
              return res.cmp(this.m) >= 0 && res.isub(this.m), res
            }),
            (Red.prototype.sub = function sub(a, b) {
              this._verify2(a, b)
              var res = a.sub(b)
              return res.cmpn(0) < 0 && res.iadd(this.m), res._forceRed(this)
            }),
            (Red.prototype.isub = function isub(a, b) {
              this._verify2(a, b)
              var res = a.isub(b)
              return res.cmpn(0) < 0 && res.iadd(this.m), res
            }),
            (Red.prototype.shl = function shl(a, num) {
              return this._verify1(a), this.imod(a.ushln(num))
            }),
            (Red.prototype.imul = function imul(a, b) {
              return this._verify2(a, b), this.imod(a.imul(b))
            }),
            (Red.prototype.mul = function mul(a, b) {
              return this._verify2(a, b), this.imod(a.mul(b))
            }),
            (Red.prototype.isqr = function isqr(a) {
              return this.imul(a, a.clone())
            }),
            (Red.prototype.sqr = function sqr(a) {
              return this.mul(a, a)
            }),
            (Red.prototype.sqrt = function sqrt(a) {
              if (a.isZero()) return a.clone()
              var mod3 = this.m.andln(3)
              if ((assert(mod3 % 2 == 1), 3 === mod3)) {
                var pow = this.m.add(new BN(1)).iushrn(2)
                return this.pow(a, pow)
              }
              for (
                var q = this.m.subn(1), s = 0;
                !q.isZero() && 0 === q.andln(1);

              )
                s++, q.iushrn(1)
              assert(!q.isZero())
              var one = new BN(1).toRed(this),
                nOne = one.redNeg(),
                lpow = this.m.subn(1).iushrn(1),
                z = this.m.bitLength()
              for (
                z = new BN(2 * z * z).toRed(this);
                0 !== this.pow(z, lpow).cmp(nOne);

              )
                z.redIAdd(nOne)
              for (
                var c = this.pow(z, q),
                  r = this.pow(a, q.addn(1).iushrn(1)),
                  t = this.pow(a, q),
                  m = s;
                0 !== t.cmp(one);

              ) {
                for (var tmp = t, i = 0; 0 !== tmp.cmp(one); i++)
                  tmp = tmp.redSqr()
                assert(i < m)
                var b = this.pow(c, new BN(1).iushln(m - i - 1))
                ;(r = r.redMul(b)), (c = b.redSqr()), (t = t.redMul(c)), (m = i)
              }
              return r
            }),
            (Red.prototype.invm = function invm(a) {
              var inv = a._invmp(this.m)
              return 0 !== inv.negative
                ? ((inv.negative = 0), this.imod(inv).redNeg())
                : this.imod(inv)
            }),
            (Red.prototype.pow = function pow(a, num) {
              if (num.isZero()) return new BN(1).toRed(this)
              if (0 === num.cmpn(1)) return a.clone()
              var wnd = new Array(16)
              ;(wnd[0] = new BN(1).toRed(this)), (wnd[1] = a)
              for (var i = 2; i < wnd.length; i++)
                wnd[i] = this.mul(wnd[i - 1], a)
              var res = wnd[0],
                current = 0,
                currentLen = 0,
                start = num.bitLength() % 26
              for (
                0 === start && (start = 26), i = num.length - 1;
                i >= 0;
                i--
              ) {
                for (var word = num.words[i], j = start - 1; j >= 0; j--) {
                  var bit = (word >> j) & 1
                  res !== wnd[0] && (res = this.sqr(res)),
                    0 !== bit || 0 !== current
                      ? ((current <<= 1),
                        (current |= bit),
                        (4 === ++currentLen || (0 === i && 0 === j)) &&
                          ((res = this.mul(res, wnd[current])),
                          (currentLen = 0),
                          (current = 0)))
                      : (currentLen = 0)
                }
                start = 26
              }
              return res
            }),
            (Red.prototype.convertTo = function convertTo(num) {
              var r = num.umod(this.m)
              return r === num ? r.clone() : r
            }),
            (Red.prototype.convertFrom = function convertFrom(num) {
              var res = num.clone()
              return (res.red = null), res
            }),
            (BN.mont = function mont(num) {
              return new Mont(num)
            }),
            inherits(Mont, Red),
            (Mont.prototype.convertTo = function convertTo(num) {
              return this.imod(num.ushln(this.shift))
            }),
            (Mont.prototype.convertFrom = function convertFrom(num) {
              var r = this.imod(num.mul(this.rinv))
              return (r.red = null), r
            }),
            (Mont.prototype.imul = function imul(a, b) {
              if (a.isZero() || b.isZero())
                return (a.words[0] = 0), (a.length = 1), a
              var t = a.imul(b),
                c = t
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                u = t.isub(c).iushrn(this.shift),
                res = u
              return (
                u.cmp(this.m) >= 0
                  ? (res = u.isub(this.m))
                  : u.cmpn(0) < 0 && (res = u.iadd(this.m)),
                res._forceRed(this)
              )
            }),
            (Mont.prototype.mul = function mul(a, b) {
              if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this)
              var t = a.mul(b),
                c = t
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                u = t.isub(c).iushrn(this.shift),
                res = u
              return (
                u.cmp(this.m) >= 0
                  ? (res = u.isub(this.m))
                  : u.cmpn(0) < 0 && (res = u.iadd(this.m)),
                res._forceRed(this)
              )
            }),
            (Mont.prototype.invm = function invm(a) {
              return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
            })
        })((module = __webpack_require__.nmd(module)), this)
      },
      './node_modules/browserify-sign/node_modules/isarray/index.js':
        module => {
          var toString = {}.toString
          module.exports =
            Array.isArray ||
            function (arr) {
              return '[object Array]' == toString.call(arr)
            }
        },
      './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js':
        (module, __unused_webpack_exports, __webpack_require__) => {
          'use strict'
          var pna = __webpack_require__(
              './node_modules/process-nextick-args/index.js'
            ),
            objectKeys =
              Object.keys ||
              function (obj) {
                var keys = []
                for (var key in obj) keys.push(key)
                return keys
              }
          module.exports = Duplex
          var util = Object.create(
            __webpack_require__('./node_modules/core-util-is/lib/util.js')
          )
          util.inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          )
          var Readable = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_readable.js'
            ),
            Writable = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_writable.js'
            )
          util.inherits(Duplex, Readable)
          for (
            var keys = objectKeys(Writable.prototype), v = 0;
            v < keys.length;
            v++
          ) {
            var method = keys[v]
            Duplex.prototype[method] ||
              (Duplex.prototype[method] = Writable.prototype[method])
          }
          function Duplex(options) {
            if (!(this instanceof Duplex)) return new Duplex(options)
            Readable.call(this, options),
              Writable.call(this, options),
              options && !1 === options.readable && (this.readable = !1),
              options && !1 === options.writable && (this.writable = !1),
              (this.allowHalfOpen = !0),
              options &&
                !1 === options.allowHalfOpen &&
                (this.allowHalfOpen = !1),
              this.once('end', onend)
          }
          function onend() {
            this.allowHalfOpen ||
              this._writableState.ended ||
              pna.nextTick(onEndNT, this)
          }
          function onEndNT(self) {
            self.end()
          }
          Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark
            },
          }),
            Object.defineProperty(Duplex.prototype, 'destroyed', {
              get: function () {
                return (
                  void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  this._readableState.destroyed &&
                  this._writableState.destroyed
                )
              },
              set: function (value) {
                void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  ((this._readableState.destroyed = value),
                  (this._writableState.destroyed = value))
              },
            }),
            (Duplex.prototype._destroy = function (err, cb) {
              this.push(null), this.end(), pna.nextTick(cb, err)
            })
        },
      './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_passthrough.js':
        (module, __unused_webpack_exports, __webpack_require__) => {
          'use strict'
          module.exports = PassThrough
          var Transform = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_transform.js'
            ),
            util = Object.create(
              __webpack_require__('./node_modules/core-util-is/lib/util.js')
            )
          function PassThrough(options) {
            if (!(this instanceof PassThrough)) return new PassThrough(options)
            Transform.call(this, options)
          }
          ;(util.inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          )),
            util.inherits(PassThrough, Transform),
            (PassThrough.prototype._transform = function (chunk, encoding, cb) {
              cb(null, chunk)
            })
        },
      './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_readable.js':
        (module, __unused_webpack_exports, __webpack_require__) => {
          'use strict'
          var process = __webpack_require__(
              './node_modules/process/browser.js'
            ),
            pna = __webpack_require__(
              './node_modules/process-nextick-args/index.js'
            )
          module.exports = Readable
          var Duplex,
            isArray = __webpack_require__(
              './node_modules/browserify-sign/node_modules/isarray/index.js'
            )
          Readable.ReadableState = ReadableState
          __webpack_require__('./node_modules/events/events.js').EventEmitter
          var EElistenerCount = function (emitter, type) {
              return emitter.listeners(type).length
            },
            Stream = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/stream-browser.js'
            ),
            Buffer = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/node_modules/safe-buffer/index.js'
            ).Buffer,
            OurUint8Array =
              (void 0 !== __webpack_require__.g
                ? __webpack_require__.g
                : 'undefined' != typeof window
                  ? window
                  : 'undefined' != typeof self
                    ? self
                    : {}
              ).Uint8Array || function () {}
          var util = Object.create(
            __webpack_require__('./node_modules/core-util-is/lib/util.js')
          )
          util.inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          )
          var debugUtil = __webpack_require__('?593c'),
            debug = void 0
          debug =
            debugUtil && debugUtil.debuglog
              ? debugUtil.debuglog('stream')
              : function () {}
          var StringDecoder,
            BufferList = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/BufferList.js'
            ),
            destroyImpl = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/destroy.js'
            )
          util.inherits(Readable, Stream)
          var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume']
          function ReadableState(options, stream) {
            options = options || {}
            var isDuplex =
              stream instanceof
              (Duplex =
                Duplex ||
                __webpack_require__(
                  './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js'
                ))
            ;(this.objectMode = !!options.objectMode),
              isDuplex &&
                (this.objectMode =
                  this.objectMode || !!options.readableObjectMode)
            var hwm = options.highWaterMark,
              readableHwm = options.readableHighWaterMark,
              defaultHwm = this.objectMode ? 16 : 16384
            ;(this.highWaterMark =
              hwm || 0 === hwm
                ? hwm
                : isDuplex && (readableHwm || 0 === readableHwm)
                  ? readableHwm
                  : defaultHwm),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.buffer = new BufferList()),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = null),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.resumeScheduled = !1),
              (this.destroyed = !1),
              (this.defaultEncoding = options.defaultEncoding || 'utf8'),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              options.encoding &&
                (StringDecoder ||
                  (StringDecoder = __webpack_require__(
                    './node_modules/browserify-sign/node_modules/string_decoder/lib/string_decoder.js'
                  ).I),
                (this.decoder = new StringDecoder(options.encoding)),
                (this.encoding = options.encoding))
          }
          function Readable(options) {
            if (
              ((Duplex =
                Duplex ||
                __webpack_require__(
                  './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js'
                )),
              !(this instanceof Readable))
            )
              return new Readable(options)
            ;(this._readableState = new ReadableState(options, this)),
              (this.readable = !0),
              options &&
                ('function' == typeof options.read &&
                  (this._read = options.read),
                'function' == typeof options.destroy &&
                  (this._destroy = options.destroy)),
              Stream.call(this)
          }
          function readableAddChunk(
            stream,
            chunk,
            encoding,
            addToFront,
            skipChunkCheck
          ) {
            var er,
              state = stream._readableState
            null === chunk
              ? ((state.reading = !1),
                (function onEofChunk(stream, state) {
                  if (state.ended) return
                  if (state.decoder) {
                    var chunk = state.decoder.end()
                    chunk &&
                      chunk.length &&
                      (state.buffer.push(chunk),
                      (state.length += state.objectMode ? 1 : chunk.length))
                  }
                  ;(state.ended = !0), emitReadable(stream)
                })(stream, state))
              : (skipChunkCheck ||
                  (er = (function chunkInvalid(state, chunk) {
                    var er
                    ;(function _isUint8Array(obj) {
                      return (
                        Buffer.isBuffer(obj) || obj instanceof OurUint8Array
                      )
                    })(chunk) ||
                      'string' == typeof chunk ||
                      void 0 === chunk ||
                      state.objectMode ||
                      (er = new TypeError('Invalid non-string/buffer chunk'))
                    return er
                  })(state, chunk)),
                er
                  ? stream.emit('error', er)
                  : state.objectMode || (chunk && chunk.length > 0)
                    ? ('string' == typeof chunk ||
                        state.objectMode ||
                        Object.getPrototypeOf(chunk) === Buffer.prototype ||
                        (chunk = (function _uint8ArrayToBuffer(chunk) {
                          return Buffer.from(chunk)
                        })(chunk)),
                      addToFront
                        ? state.endEmitted
                          ? stream.emit(
                              'error',
                              new Error('stream.unshift() after end event')
                            )
                          : addChunk(stream, state, chunk, !0)
                        : state.ended
                          ? stream.emit(
                              'error',
                              new Error('stream.push() after EOF')
                            )
                          : ((state.reading = !1),
                            state.decoder && !encoding
                              ? ((chunk = state.decoder.write(chunk)),
                                state.objectMode || 0 !== chunk.length
                                  ? addChunk(stream, state, chunk, !1)
                                  : maybeReadMore(stream, state))
                              : addChunk(stream, state, chunk, !1)))
                    : addToFront || (state.reading = !1))
            return (function needMoreData(state) {
              return (
                !state.ended &&
                (state.needReadable ||
                  state.length < state.highWaterMark ||
                  0 === state.length)
              )
            })(state)
          }
          function addChunk(stream, state, chunk, addToFront) {
            state.flowing && 0 === state.length && !state.sync
              ? (stream.emit('data', chunk), stream.read(0))
              : ((state.length += state.objectMode ? 1 : chunk.length),
                addToFront
                  ? state.buffer.unshift(chunk)
                  : state.buffer.push(chunk),
                state.needReadable && emitReadable(stream)),
              maybeReadMore(stream, state)
          }
          Object.defineProperty(Readable.prototype, 'destroyed', {
            get: function () {
              return (
                void 0 !== this._readableState && this._readableState.destroyed
              )
            },
            set: function (value) {
              this._readableState && (this._readableState.destroyed = value)
            },
          }),
            (Readable.prototype.destroy = destroyImpl.destroy),
            (Readable.prototype._undestroy = destroyImpl.undestroy),
            (Readable.prototype._destroy = function (err, cb) {
              this.push(null), cb(err)
            }),
            (Readable.prototype.push = function (chunk, encoding) {
              var skipChunkCheck,
                state = this._readableState
              return (
                state.objectMode
                  ? (skipChunkCheck = !0)
                  : 'string' == typeof chunk &&
                    ((encoding = encoding || state.defaultEncoding) !==
                      state.encoding &&
                      ((chunk = Buffer.from(chunk, encoding)), (encoding = '')),
                    (skipChunkCheck = !0)),
                readableAddChunk(this, chunk, encoding, !1, skipChunkCheck)
              )
            }),
            (Readable.prototype.unshift = function (chunk) {
              return readableAddChunk(this, chunk, null, !0, !1)
            }),
            (Readable.prototype.isPaused = function () {
              return !1 === this._readableState.flowing
            }),
            (Readable.prototype.setEncoding = function (enc) {
              return (
                StringDecoder ||
                  (StringDecoder = __webpack_require__(
                    './node_modules/browserify-sign/node_modules/string_decoder/lib/string_decoder.js'
                  ).I),
                (this._readableState.decoder = new StringDecoder(enc)),
                (this._readableState.encoding = enc),
                this
              )
            })
          function howMuchToRead(n, state) {
            return n <= 0 || (0 === state.length && state.ended)
              ? 0
              : state.objectMode
                ? 1
                : n != n
                  ? state.flowing && state.length
                    ? state.buffer.head.data.length
                    : state.length
                  : (n > state.highWaterMark &&
                      (state.highWaterMark = (function computeNewHighWaterMark(
                        n
                      ) {
                        return (
                          n >= 8388608
                            ? (n = 8388608)
                            : (n--,
                              (n |= n >>> 1),
                              (n |= n >>> 2),
                              (n |= n >>> 4),
                              (n |= n >>> 8),
                              (n |= n >>> 16),
                              n++),
                          n
                        )
                      })(n)),
                    n <= state.length
                      ? n
                      : state.ended
                        ? state.length
                        : ((state.needReadable = !0), 0))
          }
          function emitReadable(stream) {
            var state = stream._readableState
            ;(state.needReadable = !1),
              state.emittedReadable ||
                (debug('emitReadable', state.flowing),
                (state.emittedReadable = !0),
                state.sync
                  ? pna.nextTick(emitReadable_, stream)
                  : emitReadable_(stream))
          }
          function emitReadable_(stream) {
            debug('emit readable'), stream.emit('readable'), flow(stream)
          }
          function maybeReadMore(stream, state) {
            state.readingMore ||
              ((state.readingMore = !0),
              pna.nextTick(maybeReadMore_, stream, state))
          }
          function maybeReadMore_(stream, state) {
            for (
              var len = state.length;
              !state.reading &&
              !state.flowing &&
              !state.ended &&
              state.length < state.highWaterMark &&
              (debug('maybeReadMore read 0'),
              stream.read(0),
              len !== state.length);

            )
              len = state.length
            state.readingMore = !1
          }
          function nReadingNextTick(self) {
            debug('readable nexttick read 0'), self.read(0)
          }
          function resume_(stream, state) {
            state.reading || (debug('resume read 0'), stream.read(0)),
              (state.resumeScheduled = !1),
              (state.awaitDrain = 0),
              stream.emit('resume'),
              flow(stream),
              state.flowing && !state.reading && stream.read(0)
          }
          function flow(stream) {
            var state = stream._readableState
            for (
              debug('flow', state.flowing);
              state.flowing && null !== stream.read();

            );
          }
          function fromList(n, state) {
            return 0 === state.length
              ? null
              : (state.objectMode
                  ? (ret = state.buffer.shift())
                  : !n || n >= state.length
                    ? ((ret = state.decoder
                        ? state.buffer.join('')
                        : 1 === state.buffer.length
                          ? state.buffer.head.data
                          : state.buffer.concat(state.length)),
                      state.buffer.clear())
                    : (ret = (function fromListPartial(n, list, hasStrings) {
                        var ret
                        n < list.head.data.length
                          ? ((ret = list.head.data.slice(0, n)),
                            (list.head.data = list.head.data.slice(n)))
                          : (ret =
                              n === list.head.data.length
                                ? list.shift()
                                : hasStrings
                                  ? (function copyFromBufferString(n, list) {
                                      var p = list.head,
                                        c = 1,
                                        ret = p.data
                                      n -= ret.length
                                      for (; (p = p.next); ) {
                                        var str = p.data,
                                          nb = n > str.length ? str.length : n
                                        if (
                                          (nb === str.length
                                            ? (ret += str)
                                            : (ret += str.slice(0, n)),
                                          0 === (n -= nb))
                                        ) {
                                          nb === str.length
                                            ? (++c,
                                              p.next
                                                ? (list.head = p.next)
                                                : (list.head = list.tail =
                                                    null))
                                            : ((list.head = p),
                                              (p.data = str.slice(nb)))
                                          break
                                        }
                                        ++c
                                      }
                                      return (list.length -= c), ret
                                    })(n, list)
                                  : (function copyFromBuffer(n, list) {
                                      var ret = Buffer.allocUnsafe(n),
                                        p = list.head,
                                        c = 1
                                      p.data.copy(ret), (n -= p.data.length)
                                      for (; (p = p.next); ) {
                                        var buf = p.data,
                                          nb = n > buf.length ? buf.length : n
                                        if (
                                          (buf.copy(ret, ret.length - n, 0, nb),
                                          0 === (n -= nb))
                                        ) {
                                          nb === buf.length
                                            ? (++c,
                                              p.next
                                                ? (list.head = p.next)
                                                : (list.head = list.tail =
                                                    null))
                                            : ((list.head = p),
                                              (p.data = buf.slice(nb)))
                                          break
                                        }
                                        ++c
                                      }
                                      return (list.length -= c), ret
                                    })(n, list))
                        return ret
                      })(n, state.buffer, state.decoder)),
                ret)
            var ret
          }
          function endReadable(stream) {
            var state = stream._readableState
            if (state.length > 0)
              throw new Error('"endReadable()" called on non-empty stream')
            state.endEmitted ||
              ((state.ended = !0), pna.nextTick(endReadableNT, state, stream))
          }
          function endReadableNT(state, stream) {
            state.endEmitted ||
              0 !== state.length ||
              ((state.endEmitted = !0),
              (stream.readable = !1),
              stream.emit('end'))
          }
          function indexOf(xs, x) {
            for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i
            return -1
          }
          ;(Readable.prototype.read = function (n) {
            debug('read', n), (n = parseInt(n, 10))
            var state = this._readableState,
              nOrig = n
            if (
              (0 !== n && (state.emittedReadable = !1),
              0 === n &&
                state.needReadable &&
                (state.length >= state.highWaterMark || state.ended))
            )
              return (
                debug('read: emitReadable', state.length, state.ended),
                0 === state.length && state.ended
                  ? endReadable(this)
                  : emitReadable(this),
                null
              )
            if (0 === (n = howMuchToRead(n, state)) && state.ended)
              return 0 === state.length && endReadable(this), null
            var ret,
              doRead = state.needReadable
            return (
              debug('need readable', doRead),
              (0 === state.length || state.length - n < state.highWaterMark) &&
                debug('length less than watermark', (doRead = !0)),
              state.ended || state.reading
                ? debug('reading or ended', (doRead = !1))
                : doRead &&
                  (debug('do read'),
                  (state.reading = !0),
                  (state.sync = !0),
                  0 === state.length && (state.needReadable = !0),
                  this._read(state.highWaterMark),
                  (state.sync = !1),
                  state.reading || (n = howMuchToRead(nOrig, state))),
              null === (ret = n > 0 ? fromList(n, state) : null)
                ? ((state.needReadable = !0), (n = 0))
                : (state.length -= n),
              0 === state.length &&
                (state.ended || (state.needReadable = !0),
                nOrig !== n && state.ended && endReadable(this)),
              null !== ret && this.emit('data', ret),
              ret
            )
          }),
            (Readable.prototype._read = function (n) {
              this.emit('error', new Error('_read() is not implemented'))
            }),
            (Readable.prototype.pipe = function (dest, pipeOpts) {
              var src = this,
                state = this._readableState
              switch (state.pipesCount) {
                case 0:
                  state.pipes = dest
                  break
                case 1:
                  state.pipes = [state.pipes, dest]
                  break
                default:
                  state.pipes.push(dest)
              }
              ;(state.pipesCount += 1),
                debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts)
              var endFn =
                (!pipeOpts || !1 !== pipeOpts.end) &&
                dest !== process.stdout &&
                dest !== process.stderr
                  ? onend
                  : unpipe
              function onunpipe(readable, unpipeInfo) {
                debug('onunpipe'),
                  readable === src &&
                    unpipeInfo &&
                    !1 === unpipeInfo.hasUnpiped &&
                    ((unpipeInfo.hasUnpiped = !0),
                    (function cleanup() {
                      debug('cleanup'),
                        dest.removeListener('close', onclose),
                        dest.removeListener('finish', onfinish),
                        dest.removeListener('drain', ondrain),
                        dest.removeListener('error', onerror),
                        dest.removeListener('unpipe', onunpipe),
                        src.removeListener('end', onend),
                        src.removeListener('end', unpipe),
                        src.removeListener('data', ondata),
                        (cleanedUp = !0),
                        !state.awaitDrain ||
                          (dest._writableState &&
                            !dest._writableState.needDrain) ||
                          ondrain()
                    })())
              }
              function onend() {
                debug('onend'), dest.end()
              }
              state.endEmitted ? pna.nextTick(endFn) : src.once('end', endFn),
                dest.on('unpipe', onunpipe)
              var ondrain = (function pipeOnDrain(src) {
                return function () {
                  var state = src._readableState
                  debug('pipeOnDrain', state.awaitDrain),
                    state.awaitDrain && state.awaitDrain--,
                    0 === state.awaitDrain &&
                      EElistenerCount(src, 'data') &&
                      ((state.flowing = !0), flow(src))
                }
              })(src)
              dest.on('drain', ondrain)
              var cleanedUp = !1
              var increasedAwaitDrain = !1
              function ondata(chunk) {
                debug('ondata'),
                  (increasedAwaitDrain = !1),
                  !1 !== dest.write(chunk) ||
                    increasedAwaitDrain ||
                    (((1 === state.pipesCount && state.pipes === dest) ||
                      (state.pipesCount > 1 &&
                        -1 !== indexOf(state.pipes, dest))) &&
                      !cleanedUp &&
                      (debug('false write response, pause', state.awaitDrain),
                      state.awaitDrain++,
                      (increasedAwaitDrain = !0)),
                    src.pause())
              }
              function onerror(er) {
                debug('onerror', er),
                  unpipe(),
                  dest.removeListener('error', onerror),
                  0 === EElistenerCount(dest, 'error') && dest.emit('error', er)
              }
              function onclose() {
                dest.removeListener('finish', onfinish), unpipe()
              }
              function onfinish() {
                debug('onfinish'),
                  dest.removeListener('close', onclose),
                  unpipe()
              }
              function unpipe() {
                debug('unpipe'), src.unpipe(dest)
              }
              return (
                src.on('data', ondata),
                (function prependListener(emitter, event, fn) {
                  if ('function' == typeof emitter.prependListener)
                    return emitter.prependListener(event, fn)
                  emitter._events && emitter._events[event]
                    ? isArray(emitter._events[event])
                      ? emitter._events[event].unshift(fn)
                      : (emitter._events[event] = [fn, emitter._events[event]])
                    : emitter.on(event, fn)
                })(dest, 'error', onerror),
                dest.once('close', onclose),
                dest.once('finish', onfinish),
                dest.emit('pipe', src),
                state.flowing || (debug('pipe resume'), src.resume()),
                dest
              )
            }),
            (Readable.prototype.unpipe = function (dest) {
              var state = this._readableState,
                unpipeInfo = { hasUnpiped: !1 }
              if (0 === state.pipesCount) return this
              if (1 === state.pipesCount)
                return (
                  (dest && dest !== state.pipes) ||
                    (dest || (dest = state.pipes),
                    (state.pipes = null),
                    (state.pipesCount = 0),
                    (state.flowing = !1),
                    dest && dest.emit('unpipe', this, unpipeInfo)),
                  this
                )
              if (!dest) {
                var dests = state.pipes,
                  len = state.pipesCount
                ;(state.pipes = null),
                  (state.pipesCount = 0),
                  (state.flowing = !1)
                for (var i = 0; i < len; i++)
                  dests[i].emit('unpipe', this, { hasUnpiped: !1 })
                return this
              }
              var index = indexOf(state.pipes, dest)
              return (
                -1 === index ||
                  (state.pipes.splice(index, 1),
                  (state.pipesCount -= 1),
                  1 === state.pipesCount && (state.pipes = state.pipes[0]),
                  dest.emit('unpipe', this, unpipeInfo)),
                this
              )
            }),
            (Readable.prototype.on = function (ev, fn) {
              var res = Stream.prototype.on.call(this, ev, fn)
              if ('data' === ev)
                !1 !== this._readableState.flowing && this.resume()
              else if ('readable' === ev) {
                var state = this._readableState
                state.endEmitted ||
                  state.readableListening ||
                  ((state.readableListening = state.needReadable = !0),
                  (state.emittedReadable = !1),
                  state.reading
                    ? state.length && emitReadable(this)
                    : pna.nextTick(nReadingNextTick, this))
              }
              return res
            }),
            (Readable.prototype.addListener = Readable.prototype.on),
            (Readable.prototype.resume = function () {
              var state = this._readableState
              return (
                state.flowing ||
                  (debug('resume'),
                  (state.flowing = !0),
                  (function resume(stream, state) {
                    state.resumeScheduled ||
                      ((state.resumeScheduled = !0),
                      pna.nextTick(resume_, stream, state))
                  })(this, state)),
                this
              )
            }),
            (Readable.prototype.pause = function () {
              return (
                debug('call pause flowing=%j', this._readableState.flowing),
                !1 !== this._readableState.flowing &&
                  (debug('pause'),
                  (this._readableState.flowing = !1),
                  this.emit('pause')),
                this
              )
            }),
            (Readable.prototype.wrap = function (stream) {
              var _this = this,
                state = this._readableState,
                paused = !1
              for (var i in (stream.on('end', function () {
                if ((debug('wrapped end'), state.decoder && !state.ended)) {
                  var chunk = state.decoder.end()
                  chunk && chunk.length && _this.push(chunk)
                }
                _this.push(null)
              }),
              stream.on('data', function (chunk) {
                ;(debug('wrapped data'),
                state.decoder && (chunk = state.decoder.write(chunk)),
                state.objectMode && null == chunk) ||
                  ((state.objectMode || (chunk && chunk.length)) &&
                    (_this.push(chunk) || ((paused = !0), stream.pause())))
              }),
              stream))
                void 0 === this[i] &&
                  'function' == typeof stream[i] &&
                  (this[i] = (function (method) {
                    return function () {
                      return stream[method].apply(stream, arguments)
                    }
                  })(i))
              for (var n = 0; n < kProxyEvents.length; n++)
                stream.on(
                  kProxyEvents[n],
                  this.emit.bind(this, kProxyEvents[n])
                )
              return (
                (this._read = function (n) {
                  debug('wrapped _read', n),
                    paused && ((paused = !1), stream.resume())
                }),
                this
              )
            }),
            Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
              enumerable: !1,
              get: function () {
                return this._readableState.highWaterMark
              },
            }),
            (Readable._fromList = fromList)
        },
      './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_transform.js':
        (module, __unused_webpack_exports, __webpack_require__) => {
          'use strict'
          module.exports = Transform
          var Duplex = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js'
            ),
            util = Object.create(
              __webpack_require__('./node_modules/core-util-is/lib/util.js')
            )
          function afterTransform(er, data) {
            var ts = this._transformState
            ts.transforming = !1
            var cb = ts.writecb
            if (!cb)
              return this.emit(
                'error',
                new Error('write callback called multiple times')
              )
            ;(ts.writechunk = null),
              (ts.writecb = null),
              null != data && this.push(data),
              cb(er)
            var rs = this._readableState
            ;(rs.reading = !1),
              (rs.needReadable || rs.length < rs.highWaterMark) &&
                this._read(rs.highWaterMark)
          }
          function Transform(options) {
            if (!(this instanceof Transform)) return new Transform(options)
            Duplex.call(this, options),
              (this._transformState = {
                afterTransform: afterTransform.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null,
              }),
              (this._readableState.needReadable = !0),
              (this._readableState.sync = !1),
              options &&
                ('function' == typeof options.transform &&
                  (this._transform = options.transform),
                'function' == typeof options.flush &&
                  (this._flush = options.flush)),
              this.on('prefinish', prefinish)
          }
          function prefinish() {
            var _this = this
            'function' == typeof this._flush
              ? this._flush(function (er, data) {
                  done(_this, er, data)
                })
              : done(this, null, null)
          }
          function done(stream, er, data) {
            if (er) return stream.emit('error', er)
            if (
              (null != data && stream.push(data), stream._writableState.length)
            )
              throw new Error('Calling transform done when ws.length != 0')
            if (stream._transformState.transforming)
              throw new Error('Calling transform done when still transforming')
            return stream.push(null)
          }
          ;(util.inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          )),
            util.inherits(Transform, Duplex),
            (Transform.prototype.push = function (chunk, encoding) {
              return (
                (this._transformState.needTransform = !1),
                Duplex.prototype.push.call(this, chunk, encoding)
              )
            }),
            (Transform.prototype._transform = function (chunk, encoding, cb) {
              throw new Error('_transform() is not implemented')
            }),
            (Transform.prototype._write = function (chunk, encoding, cb) {
              var ts = this._transformState
              if (
                ((ts.writecb = cb),
                (ts.writechunk = chunk),
                (ts.writeencoding = encoding),
                !ts.transforming)
              ) {
                var rs = this._readableState
                ;(ts.needTransform ||
                  rs.needReadable ||
                  rs.length < rs.highWaterMark) &&
                  this._read(rs.highWaterMark)
              }
            }),
            (Transform.prototype._read = function (n) {
              var ts = this._transformState
              null !== ts.writechunk && ts.writecb && !ts.transforming
                ? ((ts.transforming = !0),
                  this._transform(
                    ts.writechunk,
                    ts.writeencoding,
                    ts.afterTransform
                  ))
                : (ts.needTransform = !0)
            }),
            (Transform.prototype._destroy = function (err, cb) {
              var _this2 = this
              Duplex.prototype._destroy.call(this, err, function (err2) {
                cb(err2), _this2.emit('close')
              })
            })
        },
      './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_writable.js':
        (module, __unused_webpack_exports, __webpack_require__) => {
          'use strict'
          var process = __webpack_require__(
              './node_modules/process/browser.js'
            ),
            pna = __webpack_require__(
              './node_modules/process-nextick-args/index.js'
            )
          function CorkedRequest(state) {
            var _this = this
            ;(this.next = null),
              (this.entry = null),
              (this.finish = function () {
                !(function onCorkedFinish(corkReq, state, err) {
                  var entry = corkReq.entry
                  corkReq.entry = null
                  for (; entry; ) {
                    var cb = entry.callback
                    state.pendingcb--, cb(err), (entry = entry.next)
                  }
                  state.corkedRequestsFree.next = corkReq
                })(_this, state)
              })
          }
          module.exports = Writable
          var Duplex,
            asyncWrite =
              !process.browser &&
              ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1
                ? setImmediate
                : pna.nextTick
          Writable.WritableState = WritableState
          var util = Object.create(
            __webpack_require__('./node_modules/core-util-is/lib/util.js')
          )
          util.inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          )
          var internalUtil = {
              deprecate: __webpack_require__(
                './node_modules/util-deprecate/browser.js'
              ),
            },
            Stream = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/stream-browser.js'
            ),
            Buffer = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/node_modules/safe-buffer/index.js'
            ).Buffer,
            OurUint8Array =
              (void 0 !== __webpack_require__.g
                ? __webpack_require__.g
                : 'undefined' != typeof window
                  ? window
                  : 'undefined' != typeof self
                    ? self
                    : {}
              ).Uint8Array || function () {}
          var realHasInstance,
            destroyImpl = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/destroy.js'
            )
          function nop() {}
          function WritableState(options, stream) {
            ;(Duplex =
              Duplex ||
              __webpack_require__(
                './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js'
              )),
              (options = options || {})
            var isDuplex = stream instanceof Duplex
            ;(this.objectMode = !!options.objectMode),
              isDuplex &&
                (this.objectMode =
                  this.objectMode || !!options.writableObjectMode)
            var hwm = options.highWaterMark,
              writableHwm = options.writableHighWaterMark,
              defaultHwm = this.objectMode ? 16 : 16384
            ;(this.highWaterMark =
              hwm || 0 === hwm
                ? hwm
                : isDuplex && (writableHwm || 0 === writableHwm)
                  ? writableHwm
                  : defaultHwm),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.finalCalled = !1),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1),
              (this.destroyed = !1)
            var noDecode = !1 === options.decodeStrings
            ;(this.decodeStrings = !noDecode),
              (this.defaultEncoding = options.defaultEncoding || 'utf8'),
              (this.length = 0),
              (this.writing = !1),
              (this.corked = 0),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function (er) {
                !(function onwrite(stream, er) {
                  var state = stream._writableState,
                    sync = state.sync,
                    cb = state.writecb
                  if (
                    ((function onwriteStateUpdate(state) {
                      ;(state.writing = !1),
                        (state.writecb = null),
                        (state.length -= state.writelen),
                        (state.writelen = 0)
                    })(state),
                    er)
                  )
                    !(function onwriteError(stream, state, sync, er, cb) {
                      --state.pendingcb,
                        sync
                          ? (pna.nextTick(cb, er),
                            pna.nextTick(finishMaybe, stream, state),
                            (stream._writableState.errorEmitted = !0),
                            stream.emit('error', er))
                          : (cb(er),
                            (stream._writableState.errorEmitted = !0),
                            stream.emit('error', er),
                            finishMaybe(stream, state))
                    })(stream, state, sync, er, cb)
                  else {
                    var finished = needFinish(state)
                    finished ||
                      state.corked ||
                      state.bufferProcessing ||
                      !state.bufferedRequest ||
                      clearBuffer(stream, state),
                      sync
                        ? asyncWrite(afterWrite, stream, state, finished, cb)
                        : afterWrite(stream, state, finished, cb)
                  }
                })(stream, er)
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.bufferedRequest = null),
              (this.lastBufferedRequest = null),
              (this.pendingcb = 0),
              (this.prefinished = !1),
              (this.errorEmitted = !1),
              (this.bufferedRequestCount = 0),
              (this.corkedRequestsFree = new CorkedRequest(this))
          }
          function Writable(options) {
            if (
              ((Duplex =
                Duplex ||
                __webpack_require__(
                  './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js'
                )),
              !(realHasInstance.call(Writable, this) || this instanceof Duplex))
            )
              return new Writable(options)
            ;(this._writableState = new WritableState(options, this)),
              (this.writable = !0),
              options &&
                ('function' == typeof options.write &&
                  (this._write = options.write),
                'function' == typeof options.writev &&
                  (this._writev = options.writev),
                'function' == typeof options.destroy &&
                  (this._destroy = options.destroy),
                'function' == typeof options.final &&
                  (this._final = options.final)),
              Stream.call(this)
          }
          function doWrite(stream, state, writev, len, chunk, encoding, cb) {
            ;(state.writelen = len),
              (state.writecb = cb),
              (state.writing = !0),
              (state.sync = !0),
              writev
                ? stream._writev(chunk, state.onwrite)
                : stream._write(chunk, encoding, state.onwrite),
              (state.sync = !1)
          }
          function afterWrite(stream, state, finished, cb) {
            finished ||
              (function onwriteDrain(stream, state) {
                0 === state.length &&
                  state.needDrain &&
                  ((state.needDrain = !1), stream.emit('drain'))
              })(stream, state),
              state.pendingcb--,
              cb(),
              finishMaybe(stream, state)
          }
          function clearBuffer(stream, state) {
            state.bufferProcessing = !0
            var entry = state.bufferedRequest
            if (stream._writev && entry && entry.next) {
              var l = state.bufferedRequestCount,
                buffer = new Array(l),
                holder = state.corkedRequestsFree
              holder.entry = entry
              for (var count = 0, allBuffers = !0; entry; )
                (buffer[count] = entry),
                  entry.isBuf || (allBuffers = !1),
                  (entry = entry.next),
                  (count += 1)
              ;(buffer.allBuffers = allBuffers),
                doWrite(
                  stream,
                  state,
                  !0,
                  state.length,
                  buffer,
                  '',
                  holder.finish
                ),
                state.pendingcb++,
                (state.lastBufferedRequest = null),
                holder.next
                  ? ((state.corkedRequestsFree = holder.next),
                    (holder.next = null))
                  : (state.corkedRequestsFree = new CorkedRequest(state)),
                (state.bufferedRequestCount = 0)
            } else {
              for (; entry; ) {
                var chunk = entry.chunk,
                  encoding = entry.encoding,
                  cb = entry.callback
                if (
                  (doWrite(
                    stream,
                    state,
                    !1,
                    state.objectMode ? 1 : chunk.length,
                    chunk,
                    encoding,
                    cb
                  ),
                  (entry = entry.next),
                  state.bufferedRequestCount--,
                  state.writing)
                )
                  break
              }
              null === entry && (state.lastBufferedRequest = null)
            }
            ;(state.bufferedRequest = entry), (state.bufferProcessing = !1)
          }
          function needFinish(state) {
            return (
              state.ending &&
              0 === state.length &&
              null === state.bufferedRequest &&
              !state.finished &&
              !state.writing
            )
          }
          function callFinal(stream, state) {
            stream._final(function (err) {
              state.pendingcb--,
                err && stream.emit('error', err),
                (state.prefinished = !0),
                stream.emit('prefinish'),
                finishMaybe(stream, state)
            })
          }
          function finishMaybe(stream, state) {
            var need = needFinish(state)
            return (
              need &&
                (!(function prefinish(stream, state) {
                  state.prefinished ||
                    state.finalCalled ||
                    ('function' == typeof stream._final
                      ? (state.pendingcb++,
                        (state.finalCalled = !0),
                        pna.nextTick(callFinal, stream, state))
                      : ((state.prefinished = !0), stream.emit('prefinish')))
                })(stream, state),
                0 === state.pendingcb &&
                  ((state.finished = !0), stream.emit('finish'))),
              need
            )
          }
          util.inherits(Writable, Stream),
            (WritableState.prototype.getBuffer = function getBuffer() {
              for (var current = this.bufferedRequest, out = []; current; )
                out.push(current), (current = current.next)
              return out
            }),
            (function () {
              try {
                Object.defineProperty(WritableState.prototype, 'buffer', {
                  get: internalUtil.deprecate(
                    function () {
                      return this.getBuffer()
                    },
                    '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                    'DEP0003'
                  ),
                })
              } catch (_) {}
            })(),
            'function' == typeof Symbol &&
            Symbol.hasInstance &&
            'function' == typeof Function.prototype[Symbol.hasInstance]
              ? ((realHasInstance = Function.prototype[Symbol.hasInstance]),
                Object.defineProperty(Writable, Symbol.hasInstance, {
                  value: function (object) {
                    return (
                      !!realHasInstance.call(this, object) ||
                      (this === Writable &&
                        object &&
                        object._writableState instanceof WritableState)
                    )
                  },
                }))
              : (realHasInstance = function (object) {
                  return object instanceof this
                }),
            (Writable.prototype.pipe = function () {
              this.emit('error', new Error('Cannot pipe, not readable'))
            }),
            (Writable.prototype.write = function (chunk, encoding, cb) {
              var state = this._writableState,
                ret = !1,
                isBuf =
                  !state.objectMode &&
                  (function _isUint8Array(obj) {
                    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array
                  })(chunk)
              return (
                isBuf &&
                  !Buffer.isBuffer(chunk) &&
                  (chunk = (function _uint8ArrayToBuffer(chunk) {
                    return Buffer.from(chunk)
                  })(chunk)),
                'function' == typeof encoding &&
                  ((cb = encoding), (encoding = null)),
                isBuf
                  ? (encoding = 'buffer')
                  : encoding || (encoding = state.defaultEncoding),
                'function' != typeof cb && (cb = nop),
                state.ended
                  ? (function writeAfterEnd(stream, cb) {
                      var er = new Error('write after end')
                      stream.emit('error', er), pna.nextTick(cb, er)
                    })(this, cb)
                  : (isBuf ||
                      (function validChunk(stream, state, chunk, cb) {
                        var valid = !0,
                          er = !1
                        return (
                          null === chunk
                            ? (er = new TypeError(
                                'May not write null values to stream'
                              ))
                            : 'string' == typeof chunk ||
                              void 0 === chunk ||
                              state.objectMode ||
                              (er = new TypeError(
                                'Invalid non-string/buffer chunk'
                              )),
                          er &&
                            (stream.emit('error', er),
                            pna.nextTick(cb, er),
                            (valid = !1)),
                          valid
                        )
                      })(this, state, chunk, cb)) &&
                    (state.pendingcb++,
                    (ret = (function writeOrBuffer(
                      stream,
                      state,
                      isBuf,
                      chunk,
                      encoding,
                      cb
                    ) {
                      if (!isBuf) {
                        var newChunk = (function decodeChunk(
                          state,
                          chunk,
                          encoding
                        ) {
                          state.objectMode ||
                            !1 === state.decodeStrings ||
                            'string' != typeof chunk ||
                            (chunk = Buffer.from(chunk, encoding))
                          return chunk
                        })(state, chunk, encoding)
                        chunk !== newChunk &&
                          ((isBuf = !0),
                          (encoding = 'buffer'),
                          (chunk = newChunk))
                      }
                      var len = state.objectMode ? 1 : chunk.length
                      state.length += len
                      var ret = state.length < state.highWaterMark
                      ret || (state.needDrain = !0)
                      if (state.writing || state.corked) {
                        var last = state.lastBufferedRequest
                        ;(state.lastBufferedRequest = {
                          chunk,
                          encoding,
                          isBuf,
                          callback: cb,
                          next: null,
                        }),
                          last
                            ? (last.next = state.lastBufferedRequest)
                            : (state.bufferedRequest =
                                state.lastBufferedRequest),
                          (state.bufferedRequestCount += 1)
                      } else
                        doWrite(stream, state, !1, len, chunk, encoding, cb)
                      return ret
                    })(this, state, isBuf, chunk, encoding, cb))),
                ret
              )
            }),
            (Writable.prototype.cork = function () {
              this._writableState.corked++
            }),
            (Writable.prototype.uncork = function () {
              var state = this._writableState
              state.corked &&
                (state.corked--,
                state.writing ||
                  state.corked ||
                  state.bufferProcessing ||
                  !state.bufferedRequest ||
                  clearBuffer(this, state))
            }),
            (Writable.prototype.setDefaultEncoding =
              function setDefaultEncoding(encoding) {
                if (
                  ('string' == typeof encoding &&
                    (encoding = encoding.toLowerCase()),
                  !(
                    [
                      'hex',
                      'utf8',
                      'utf-8',
                      'ascii',
                      'binary',
                      'base64',
                      'ucs2',
                      'ucs-2',
                      'utf16le',
                      'utf-16le',
                      'raw',
                    ].indexOf((encoding + '').toLowerCase()) > -1
                  ))
                )
                  throw new TypeError('Unknown encoding: ' + encoding)
                return (this._writableState.defaultEncoding = encoding), this
              }),
            Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
              enumerable: !1,
              get: function () {
                return this._writableState.highWaterMark
              },
            }),
            (Writable.prototype._write = function (chunk, encoding, cb) {
              cb(new Error('_write() is not implemented'))
            }),
            (Writable.prototype._writev = null),
            (Writable.prototype.end = function (chunk, encoding, cb) {
              var state = this._writableState
              'function' == typeof chunk
                ? ((cb = chunk), (chunk = null), (encoding = null))
                : 'function' == typeof encoding &&
                  ((cb = encoding), (encoding = null)),
                null != chunk && this.write(chunk, encoding),
                state.corked && ((state.corked = 1), this.uncork()),
                state.ending ||
                  (function endWritable(stream, state, cb) {
                    ;(state.ending = !0),
                      finishMaybe(stream, state),
                      cb &&
                        (state.finished
                          ? pna.nextTick(cb)
                          : stream.once('finish', cb))
                    ;(state.ended = !0), (stream.writable = !1)
                  })(this, state, cb)
            }),
            Object.defineProperty(Writable.prototype, 'destroyed', {
              get: function () {
                return (
                  void 0 !== this._writableState &&
                  this._writableState.destroyed
                )
              },
              set: function (value) {
                this._writableState && (this._writableState.destroyed = value)
              },
            }),
            (Writable.prototype.destroy = destroyImpl.destroy),
            (Writable.prototype._undestroy = destroyImpl.undestroy),
            (Writable.prototype._destroy = function (err, cb) {
              this.end(), cb(err)
            })
        },
      './node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/BufferList.js':
        (module, __unused_webpack_exports, __webpack_require__) => {
          'use strict'
          var Buffer = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/node_modules/safe-buffer/index.js'
            ).Buffer,
            util = __webpack_require__('?cad2')
          ;(module.exports = (function () {
            function BufferList() {
              !(function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor))
                  throw new TypeError('Cannot call a class as a function')
              })(this, BufferList),
                (this.head = null),
                (this.tail = null),
                (this.length = 0)
            }
            return (
              (BufferList.prototype.push = function push(v) {
                var entry = { data: v, next: null }
                this.length > 0
                  ? (this.tail.next = entry)
                  : (this.head = entry),
                  (this.tail = entry),
                  ++this.length
              }),
              (BufferList.prototype.unshift = function unshift(v) {
                var entry = { data: v, next: this.head }
                0 === this.length && (this.tail = entry),
                  (this.head = entry),
                  ++this.length
              }),
              (BufferList.prototype.shift = function shift() {
                if (0 !== this.length) {
                  var ret = this.head.data
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    ret
                  )
                }
              }),
              (BufferList.prototype.clear = function clear() {
                ;(this.head = this.tail = null), (this.length = 0)
              }),
              (BufferList.prototype.join = function join(s) {
                if (0 === this.length) return ''
                for (var p = this.head, ret = '' + p.data; (p = p.next); )
                  ret += s + p.data
                return ret
              }),
              (BufferList.prototype.concat = function concat(n) {
                if (0 === this.length) return Buffer.alloc(0)
                for (
                  var src,
                    target,
                    offset,
                    ret = Buffer.allocUnsafe(n >>> 0),
                    p = this.head,
                    i = 0;
                  p;

                )
                  (src = p.data),
                    (target = ret),
                    (offset = i),
                    src.copy(target, offset),
                    (i += p.data.length),
                    (p = p.next)
                return ret
              }),
              BufferList
            )
          })()),
            util &&
              util.inspect &&
              util.inspect.custom &&
              (module.exports.prototype[util.inspect.custom] = function () {
                var obj = util.inspect({ length: this.length })
                return this.constructor.name + ' ' + obj
              })
        },
      './node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/destroy.js':
        (module, __unused_webpack_exports, __webpack_require__) => {
          'use strict'
          var pna = __webpack_require__(
            './node_modules/process-nextick-args/index.js'
          )
          function emitErrorNT(self, err) {
            self.emit('error', err)
          }
          module.exports = {
            destroy: function destroy(err, cb) {
              var _this = this,
                readableDestroyed =
                  this._readableState && this._readableState.destroyed,
                writableDestroyed =
                  this._writableState && this._writableState.destroyed
              return readableDestroyed || writableDestroyed
                ? (cb
                    ? cb(err)
                    : err &&
                      (this._writableState
                        ? this._writableState.errorEmitted ||
                          ((this._writableState.errorEmitted = !0),
                          pna.nextTick(emitErrorNT, this, err))
                        : pna.nextTick(emitErrorNT, this, err)),
                  this)
                : (this._readableState && (this._readableState.destroyed = !0),
                  this._writableState && (this._writableState.destroyed = !0),
                  this._destroy(err || null, function (err) {
                    !cb && err
                      ? _this._writableState
                        ? _this._writableState.errorEmitted ||
                          ((_this._writableState.errorEmitted = !0),
                          pna.nextTick(emitErrorNT, _this, err))
                        : pna.nextTick(emitErrorNT, _this, err)
                      : cb && cb(err)
                  }),
                  this)
            },
            undestroy: function undestroy() {
              this._readableState &&
                ((this._readableState.destroyed = !1),
                (this._readableState.reading = !1),
                (this._readableState.ended = !1),
                (this._readableState.endEmitted = !1)),
                this._writableState &&
                  ((this._writableState.destroyed = !1),
                  (this._writableState.ended = !1),
                  (this._writableState.ending = !1),
                  (this._writableState.finalCalled = !1),
                  (this._writableState.prefinished = !1),
                  (this._writableState.finished = !1),
                  (this._writableState.errorEmitted = !1))
            },
          }
        },
      './node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/stream-browser.js':
        (module, __unused_webpack_exports, __webpack_require__) => {
          module.exports = __webpack_require__(
            './node_modules/events/events.js'
          ).EventEmitter
        },
      './node_modules/browserify-sign/node_modules/readable-stream/node_modules/safe-buffer/index.js':
        (module, exports, __webpack_require__) => {
          var buffer = __webpack_require__('./node_modules/buffer/index.js'),
            Buffer = buffer.Buffer
          function copyProps(src, dst) {
            for (var key in src) dst[key] = src[key]
          }
          function SafeBuffer(arg, encodingOrOffset, length) {
            return Buffer(arg, encodingOrOffset, length)
          }
          Buffer.from &&
          Buffer.alloc &&
          Buffer.allocUnsafe &&
          Buffer.allocUnsafeSlow
            ? (module.exports = buffer)
            : (copyProps(buffer, exports), (exports.Buffer = SafeBuffer)),
            copyProps(Buffer, SafeBuffer),
            (SafeBuffer.from = function (arg, encodingOrOffset, length) {
              if ('number' == typeof arg)
                throw new TypeError('Argument must not be a number')
              return Buffer(arg, encodingOrOffset, length)
            }),
            (SafeBuffer.alloc = function (size, fill, encoding) {
              if ('number' != typeof size)
                throw new TypeError('Argument must be a number')
              var buf = Buffer(size)
              return (
                void 0 !== fill
                  ? 'string' == typeof encoding
                    ? buf.fill(fill, encoding)
                    : buf.fill(fill)
                  : buf.fill(0),
                buf
              )
            }),
            (SafeBuffer.allocUnsafe = function (size) {
              if ('number' != typeof size)
                throw new TypeError('Argument must be a number')
              return Buffer(size)
            }),
            (SafeBuffer.allocUnsafeSlow = function (size) {
              if ('number' != typeof size)
                throw new TypeError('Argument must be a number')
              return buffer.SlowBuffer(size)
            })
        },
      './node_modules/browserify-sign/node_modules/readable-stream/readable-browser.js':
        (module, exports, __webpack_require__) => {
          ;((exports = module.exports =
            __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_readable.js'
            )).Stream = exports),
            (exports.Readable = exports),
            (exports.Writable = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_writable.js'
            )),
            (exports.Duplex = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js'
            )),
            (exports.Transform = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_transform.js'
            )),
            (exports.PassThrough = __webpack_require__(
              './node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_passthrough.js'
            ))
        },
      './node_modules/browserify-sign/node_modules/string_decoder/lib/string_decoder.js':
        (__unused_webpack_module, exports, __webpack_require__) => {
          'use strict'
          var Buffer = __webpack_require__(
              './node_modules/browserify-sign/node_modules/string_decoder/node_modules/safe-buffer/index.js'
            ).Buffer,
            isEncoding =
              Buffer.isEncoding ||
              function (encoding) {
                switch ((encoding = '' + encoding) && encoding.toLowerCase()) {
                  case 'hex':
                  case 'utf8':
                  case 'utf-8':
                  case 'ascii':
                  case 'binary':
                  case 'base64':
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                  case 'raw':
                    return !0
                  default:
                    return !1
                }
              }
          function StringDecoder(encoding) {
            var nb
            switch (
              ((this.encoding = (function normalizeEncoding(enc) {
                var nenc = (function _normalizeEncoding(enc) {
                  if (!enc) return 'utf8'
                  for (var retried; ; )
                    switch (enc) {
                      case 'utf8':
                      case 'utf-8':
                        return 'utf8'
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return 'utf16le'
                      case 'latin1':
                      case 'binary':
                        return 'latin1'
                      case 'base64':
                      case 'ascii':
                      case 'hex':
                        return enc
                      default:
                        if (retried) return
                        ;(enc = ('' + enc).toLowerCase()), (retried = !0)
                    }
                })(enc)
                if (
                  'string' != typeof nenc &&
                  (Buffer.isEncoding === isEncoding || !isEncoding(enc))
                )
                  throw new Error('Unknown encoding: ' + enc)
                return nenc || enc
              })(encoding)),
              this.encoding)
            ) {
              case 'utf16le':
                ;(this.text = utf16Text), (this.end = utf16End), (nb = 4)
                break
              case 'utf8':
                ;(this.fillLast = utf8FillLast), (nb = 4)
                break
              case 'base64':
                ;(this.text = base64Text), (this.end = base64End), (nb = 3)
                break
              default:
                return (this.write = simpleWrite), void (this.end = simpleEnd)
            }
            ;(this.lastNeed = 0),
              (this.lastTotal = 0),
              (this.lastChar = Buffer.allocUnsafe(nb))
          }
          function utf8CheckByte(byte) {
            return byte <= 127
              ? 0
              : byte >> 5 == 6
                ? 2
                : byte >> 4 == 14
                  ? 3
                  : byte >> 3 == 30
                    ? 4
                    : byte >> 6 == 2
                      ? -1
                      : -2
          }
          function utf8FillLast(buf) {
            var p = this.lastTotal - this.lastNeed,
              r = (function utf8CheckExtraBytes(self, buf, p) {
                if (128 != (192 & buf[0])) return (self.lastNeed = 0), '�'
                if (self.lastNeed > 1 && buf.length > 1) {
                  if (128 != (192 & buf[1])) return (self.lastNeed = 1), '�'
                  if (
                    self.lastNeed > 2 &&
                    buf.length > 2 &&
                    128 != (192 & buf[2])
                  )
                    return (self.lastNeed = 2), '�'
                }
              })(this, buf)
            return void 0 !== r
              ? r
              : this.lastNeed <= buf.length
                ? (buf.copy(this.lastChar, p, 0, this.lastNeed),
                  this.lastChar.toString(this.encoding, 0, this.lastTotal))
                : (buf.copy(this.lastChar, p, 0, buf.length),
                  void (this.lastNeed -= buf.length))
          }
          function utf16Text(buf, i) {
            if ((buf.length - i) % 2 == 0) {
              var r = buf.toString('utf16le', i)
              if (r) {
                var c = r.charCodeAt(r.length - 1)
                if (c >= 55296 && c <= 56319)
                  return (
                    (this.lastNeed = 2),
                    (this.lastTotal = 4),
                    (this.lastChar[0] = buf[buf.length - 2]),
                    (this.lastChar[1] = buf[buf.length - 1]),
                    r.slice(0, -1)
                  )
              }
              return r
            }
            return (
              (this.lastNeed = 1),
              (this.lastTotal = 2),
              (this.lastChar[0] = buf[buf.length - 1]),
              buf.toString('utf16le', i, buf.length - 1)
            )
          }
          function utf16End(buf) {
            var r = buf && buf.length ? this.write(buf) : ''
            if (this.lastNeed) {
              var end = this.lastTotal - this.lastNeed
              return r + this.lastChar.toString('utf16le', 0, end)
            }
            return r
          }
          function base64Text(buf, i) {
            var n = (buf.length - i) % 3
            return 0 === n
              ? buf.toString('base64', i)
              : ((this.lastNeed = 3 - n),
                (this.lastTotal = 3),
                1 === n
                  ? (this.lastChar[0] = buf[buf.length - 1])
                  : ((this.lastChar[0] = buf[buf.length - 2]),
                    (this.lastChar[1] = buf[buf.length - 1])),
                buf.toString('base64', i, buf.length - n))
          }
          function base64End(buf) {
            var r = buf && buf.length ? this.write(buf) : ''
            return this.lastNeed
              ? r + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
              : r
          }
          function simpleWrite(buf) {
            return buf.toString(this.encoding)
          }
          function simpleEnd(buf) {
            return buf && buf.length ? this.write(buf) : ''
          }
          ;(exports.I = StringDecoder),
            (StringDecoder.prototype.write = function (buf) {
              if (0 === buf.length) return ''
              var r, i
              if (this.lastNeed) {
                if (void 0 === (r = this.fillLast(buf))) return ''
                ;(i = this.lastNeed), (this.lastNeed = 0)
              } else i = 0
              return i < buf.length
                ? r
                  ? r + this.text(buf, i)
                  : this.text(buf, i)
                : r || ''
            }),
            (StringDecoder.prototype.end = function utf8End(buf) {
              var r = buf && buf.length ? this.write(buf) : ''
              return this.lastNeed ? r + '�' : r
            }),
            (StringDecoder.prototype.text = function utf8Text(buf, i) {
              var total = (function utf8CheckIncomplete(self, buf, i) {
                var j = buf.length - 1
                if (j < i) return 0
                var nb = utf8CheckByte(buf[j])
                if (nb >= 0) return nb > 0 && (self.lastNeed = nb - 1), nb
                if (--j < i || -2 === nb) return 0
                if (((nb = utf8CheckByte(buf[j])), nb >= 0))
                  return nb > 0 && (self.lastNeed = nb - 2), nb
                if (--j < i || -2 === nb) return 0
                if (((nb = utf8CheckByte(buf[j])), nb >= 0))
                  return (
                    nb > 0 && (2 === nb ? (nb = 0) : (self.lastNeed = nb - 3)),
                    nb
                  )
                return 0
              })(this, buf, i)
              if (!this.lastNeed) return buf.toString('utf8', i)
              this.lastTotal = total
              var end = buf.length - (total - this.lastNeed)
              return (
                buf.copy(this.lastChar, 0, end), buf.toString('utf8', i, end)
              )
            }),
            (StringDecoder.prototype.fillLast = function (buf) {
              if (this.lastNeed <= buf.length)
                return (
                  buf.copy(
                    this.lastChar,
                    this.lastTotal - this.lastNeed,
                    0,
                    this.lastNeed
                  ),
                  this.lastChar.toString(this.encoding, 0, this.lastTotal)
                )
              buf.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                buf.length
              ),
                (this.lastNeed -= buf.length)
            })
        },
      './node_modules/browserify-sign/node_modules/string_decoder/node_modules/safe-buffer/index.js':
        (module, exports, __webpack_require__) => {
          var buffer = __webpack_require__('./node_modules/buffer/index.js'),
            Buffer = buffer.Buffer
          function copyProps(src, dst) {
            for (var key in src) dst[key] = src[key]
          }
          function SafeBuffer(arg, encodingOrOffset, length) {
            return Buffer(arg, encodingOrOffset, length)
          }
          Buffer.from &&
          Buffer.alloc &&
          Buffer.allocUnsafe &&
          Buffer.allocUnsafeSlow
            ? (module.exports = buffer)
            : (copyProps(buffer, exports), (exports.Buffer = SafeBuffer)),
            copyProps(Buffer, SafeBuffer),
            (SafeBuffer.from = function (arg, encodingOrOffset, length) {
              if ('number' == typeof arg)
                throw new TypeError('Argument must not be a number')
              return Buffer(arg, encodingOrOffset, length)
            }),
            (SafeBuffer.alloc = function (size, fill, encoding) {
              if ('number' != typeof size)
                throw new TypeError('Argument must be a number')
              var buf = Buffer(size)
              return (
                void 0 !== fill
                  ? 'string' == typeof encoding
                    ? buf.fill(fill, encoding)
                    : buf.fill(fill)
                  : buf.fill(0),
                buf
              )
            }),
            (SafeBuffer.allocUnsafe = function (size) {
              if ('number' != typeof size)
                throw new TypeError('Argument must be a number')
              return Buffer(size)
            }),
            (SafeBuffer.allocUnsafeSlow = function (size) {
              if ('number' != typeof size)
                throw new TypeError('Argument must be a number')
              return buffer.SlowBuffer(size)
            })
        },
      './node_modules/buffer-xor/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
          './node_modules/buffer/index.js'
        ).Buffer
        module.exports = function xor(a, b) {
          for (
            var length = Math.min(a.length, b.length),
              buffer = new Buffer(length),
              i = 0;
            i < length;
            ++i
          )
            buffer[i] = a[i] ^ b[i]
          return buffer
        }
      },
      './node_modules/cipher-base/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          Transform = __webpack_require__(
            './node_modules/stream-browserify/index.js'
          ).Transform,
          StringDecoder = __webpack_require__(
            './node_modules/string_decoder/lib/string_decoder.js'
          ).I
        function CipherBase(hashMode) {
          Transform.call(this),
            (this.hashMode = 'string' == typeof hashMode),
            this.hashMode
              ? (this[hashMode] = this._finalOrDigest)
              : (this.final = this._finalOrDigest),
            this._final && ((this.__final = this._final), (this._final = null)),
            (this._decoder = null),
            (this._encoding = null)
        }
        __webpack_require__('./node_modules/inherits/inherits_browser.js')(
          CipherBase,
          Transform
        )
        var useUint8Array = 'undefined' != typeof Uint8Array,
          useArrayBuffer =
            'undefined' != typeof ArrayBuffer &&
            'undefined' != typeof Uint8Array &&
            ArrayBuffer.isView &&
            (Buffer.prototype instanceof Uint8Array ||
              Buffer.TYPED_ARRAY_SUPPORT)
        ;(CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
          var bufferData = (function toBuffer(data, encoding) {
              if (data instanceof Buffer) return data
              if ('string' == typeof data) return Buffer.from(data, encoding)
              if (useArrayBuffer && ArrayBuffer.isView(data)) {
                if (0 === data.byteLength) return Buffer.alloc(0)
                var res = Buffer.from(
                  data.buffer,
                  data.byteOffset,
                  data.byteLength
                )
                if (res.byteLength === data.byteLength) return res
              }
              if (useUint8Array && data instanceof Uint8Array)
                return Buffer.from(data)
              if (
                Buffer.isBuffer(data) &&
                data.constructor &&
                'function' == typeof data.constructor.isBuffer &&
                data.constructor.isBuffer(data)
              )
                return Buffer.from(data)
              throw new TypeError(
                'The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.'
              )
            })(data, inputEnc),
            outData = this._update(bufferData)
          return this.hashMode
            ? this
            : (outputEnc && (outData = this._toString(outData, outputEnc)),
              outData)
        }),
          (CipherBase.prototype.setAutoPadding = function () {}),
          (CipherBase.prototype.getAuthTag = function () {
            throw new Error('trying to get auth tag in unsupported state')
          }),
          (CipherBase.prototype.setAuthTag = function () {
            throw new Error('trying to set auth tag in unsupported state')
          }),
          (CipherBase.prototype.setAAD = function () {
            throw new Error('trying to set aad in unsupported state')
          }),
          (CipherBase.prototype._transform = function (data, _, next) {
            var err
            try {
              this.hashMode ? this._update(data) : this.push(this._update(data))
            } catch (e) {
              err = e
            } finally {
              next(err)
            }
          }),
          (CipherBase.prototype._flush = function (done) {
            var err
            try {
              this.push(this.__final())
            } catch (e) {
              err = e
            }
            done(err)
          }),
          (CipherBase.prototype._finalOrDigest = function (outputEnc) {
            var outData = this.__final() || Buffer.alloc(0)
            return (
              outputEnc && (outData = this._toString(outData, outputEnc, !0)),
              outData
            )
          }),
          (CipherBase.prototype._toString = function (value, enc, fin) {
            if (
              (this._decoder ||
                ((this._decoder = new StringDecoder(enc)),
                (this._encoding = enc)),
              this._encoding !== enc)
            )
              throw new Error('can’t switch encodings')
            var out = this._decoder.write(value)
            return fin && (out += this._decoder.end()), out
          }),
          (module.exports = CipherBase)
      },
      './node_modules/core-util-is/lib/util.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        function objectToString(o) {
          return Object.prototype.toString.call(o)
        }
        ;(exports.isArray = function isArray(arg) {
          return Array.isArray
            ? Array.isArray(arg)
            : '[object Array]' === objectToString(arg)
        }),
          (exports.isBoolean = function isBoolean(arg) {
            return 'boolean' == typeof arg
          }),
          (exports.isNull = function isNull(arg) {
            return null === arg
          }),
          (exports.isNullOrUndefined = function isNullOrUndefined(arg) {
            return null == arg
          }),
          (exports.isNumber = function isNumber(arg) {
            return 'number' == typeof arg
          }),
          (exports.isString = function isString(arg) {
            return 'string' == typeof arg
          }),
          (exports.isSymbol = function isSymbol(arg) {
            return 'symbol' == typeof arg
          }),
          (exports.isUndefined = function isUndefined(arg) {
            return void 0 === arg
          }),
          (exports.isRegExp = function isRegExp(re) {
            return '[object RegExp]' === objectToString(re)
          }),
          (exports.isObject = function isObject(arg) {
            return 'object' == typeof arg && null !== arg
          }),
          (exports.isDate = function isDate(d) {
            return '[object Date]' === objectToString(d)
          }),
          (exports.isError = function isError(e) {
            return '[object Error]' === objectToString(e) || e instanceof Error
          }),
          (exports.isFunction = function isFunction(arg) {
            return 'function' == typeof arg
          }),
          (exports.isPrimitive = function isPrimitive(arg) {
            return (
              null === arg ||
              'boolean' == typeof arg ||
              'number' == typeof arg ||
              'string' == typeof arg ||
              'symbol' == typeof arg ||
              void 0 === arg
            )
          }),
          (exports.isBuffer = __webpack_require__(
            './node_modules/buffer/index.js'
          ).Buffer.isBuffer)
      },
      './node_modules/create-ecdh/browser.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
            './node_modules/buffer/index.js'
          ).Buffer,
          elliptic = __webpack_require__(
            './node_modules/elliptic/lib/elliptic.js'
          ),
          BN = __webpack_require__('./node_modules/bn.js/lib/bn.js')
        module.exports = function createECDH(curve) {
          return new ECDH(curve)
        }
        var aliases = {
          secp256k1: { name: 'secp256k1', byteLength: 32 },
          secp224r1: { name: 'p224', byteLength: 28 },
          prime256v1: { name: 'p256', byteLength: 32 },
          prime192v1: { name: 'p192', byteLength: 24 },
          ed25519: { name: 'ed25519', byteLength: 32 },
          secp384r1: { name: 'p384', byteLength: 48 },
          secp521r1: { name: 'p521', byteLength: 66 },
        }
        function ECDH(curve) {
          ;(this.curveType = aliases[curve]),
            this.curveType || (this.curveType = { name: curve }),
            (this.curve = new elliptic.ec(this.curveType.name)),
            (this.keys = void 0)
        }
        function formatReturnValue(bn, enc, len) {
          Array.isArray(bn) || (bn = bn.toArray())
          var buf = new Buffer(bn)
          if (len && buf.length < len) {
            var zeros = new Buffer(len - buf.length)
            zeros.fill(0), (buf = Buffer.concat([zeros, buf]))
          }
          return enc ? buf.toString(enc) : buf
        }
        ;(aliases.p224 = aliases.secp224r1),
          (aliases.p256 = aliases.secp256r1 = aliases.prime256v1),
          (aliases.p192 = aliases.secp192r1 = aliases.prime192v1),
          (aliases.p384 = aliases.secp384r1),
          (aliases.p521 = aliases.secp521r1),
          (ECDH.prototype.generateKeys = function (enc, format) {
            return (
              (this.keys = this.curve.genKeyPair()),
              this.getPublicKey(enc, format)
            )
          }),
          (ECDH.prototype.computeSecret = function (other, inenc, enc) {
            return (
              (inenc = inenc || 'utf8'),
              Buffer.isBuffer(other) || (other = new Buffer(other, inenc)),
              formatReturnValue(
                this.curve
                  .keyFromPublic(other)
                  .getPublic()
                  .mul(this.keys.getPrivate())
                  .getX(),
                enc,
                this.curveType.byteLength
              )
            )
          }),
          (ECDH.prototype.getPublicKey = function (enc, format) {
            var key = this.keys.getPublic('compressed' === format, !0)
            return (
              'hybrid' === format &&
                (key[key.length - 1] % 2 ? (key[0] = 7) : (key[0] = 6)),
              formatReturnValue(key, enc)
            )
          }),
          (ECDH.prototype.getPrivateKey = function (enc) {
            return formatReturnValue(this.keys.getPrivate(), enc)
          }),
          (ECDH.prototype.setPublicKey = function (pub, enc) {
            return (
              (enc = enc || 'utf8'),
              Buffer.isBuffer(pub) || (pub = new Buffer(pub, enc)),
              this.keys._importPublic(pub),
              this
            )
          }),
          (ECDH.prototype.setPrivateKey = function (priv, enc) {
            ;(enc = enc || 'utf8'),
              Buffer.isBuffer(priv) || (priv = new Buffer(priv, enc))
            var _priv = new BN(priv)
            return (
              (_priv = _priv.toString(16)),
              (this.keys = this.curve.genKeyPair()),
              this.keys._importPrivate(_priv),
              this
            )
          })
      },
      './node_modules/create-hash/browser.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          MD5 = __webpack_require__('./node_modules/md5.js/index.js'),
          RIPEMD160 = __webpack_require__('./node_modules/ripemd160/index.js'),
          sha = __webpack_require__('./node_modules/sha.js/index.js'),
          Base = __webpack_require__('./node_modules/cipher-base/index.js')
        function Hash(hash) {
          Base.call(this, 'digest'), (this._hash = hash)
        }
        inherits(Hash, Base),
          (Hash.prototype._update = function (data) {
            this._hash.update(data)
          }),
          (Hash.prototype._final = function () {
            return this._hash.digest()
          }),
          (module.exports = function createHash(alg) {
            return 'md5' === (alg = alg.toLowerCase())
              ? new MD5()
              : 'rmd160' === alg || 'ripemd160' === alg
                ? new RIPEMD160()
                : new Hash(sha(alg))
          })
      },
      './node_modules/create-hash/md5.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var MD5 = __webpack_require__('./node_modules/md5.js/index.js')
        module.exports = function (buffer) {
          return new MD5().update(buffer).digest()
        }
      },
      './node_modules/create-hmac/browser.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Legacy = __webpack_require__('./node_modules/create-hmac/legacy.js'),
          Base = __webpack_require__('./node_modules/cipher-base/index.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          md5 = __webpack_require__('./node_modules/create-hash/md5.js'),
          RIPEMD160 = __webpack_require__('./node_modules/ripemd160/index.js'),
          sha = __webpack_require__('./node_modules/sha.js/index.js'),
          ZEROS = Buffer.alloc(128)
        function Hmac(alg, key) {
          Base.call(this, 'digest'),
            'string' == typeof key && (key = Buffer.from(key))
          var blocksize = 'sha512' === alg || 'sha384' === alg ? 128 : 64
          ;((this._alg = alg), (this._key = key), key.length > blocksize)
            ? (key = ('rmd160' === alg ? new RIPEMD160() : sha(alg))
                .update(key)
                .digest())
            : key.length < blocksize &&
              (key = Buffer.concat([key, ZEROS], blocksize))
          for (
            var ipad = (this._ipad = Buffer.allocUnsafe(blocksize)),
              opad = (this._opad = Buffer.allocUnsafe(blocksize)),
              i = 0;
            i < blocksize;
            i++
          )
            (ipad[i] = 54 ^ key[i]), (opad[i] = 92 ^ key[i])
          ;(this._hash = 'rmd160' === alg ? new RIPEMD160() : sha(alg)),
            this._hash.update(ipad)
        }
        inherits(Hmac, Base),
          (Hmac.prototype._update = function (data) {
            this._hash.update(data)
          }),
          (Hmac.prototype._final = function () {
            var h = this._hash.digest()
            return ('rmd160' === this._alg ? new RIPEMD160() : sha(this._alg))
              .update(this._opad)
              .update(h)
              .digest()
          }),
          (module.exports = function createHmac(alg, key) {
            return 'rmd160' === (alg = alg.toLowerCase()) || 'ripemd160' === alg
              ? new Hmac('rmd160', key)
              : 'md5' === alg
                ? new Legacy(md5, key)
                : new Hmac(alg, key)
          })
      },
      './node_modules/create-hmac/legacy.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          Base = __webpack_require__('./node_modules/cipher-base/index.js'),
          ZEROS = Buffer.alloc(128)
        function Hmac(alg, key) {
          Base.call(this, 'digest'),
            'string' == typeof key && (key = Buffer.from(key)),
            (this._alg = alg),
            (this._key = key),
            key.length > 64
              ? (key = alg(key))
              : key.length < 64 && (key = Buffer.concat([key, ZEROS], 64))
          for (
            var ipad = (this._ipad = Buffer.allocUnsafe(64)),
              opad = (this._opad = Buffer.allocUnsafe(64)),
              i = 0;
            i < 64;
            i++
          )
            (ipad[i] = 54 ^ key[i]), (opad[i] = 92 ^ key[i])
          this._hash = [ipad]
        }
        inherits(Hmac, Base),
          (Hmac.prototype._update = function (data) {
            this._hash.push(data)
          }),
          (Hmac.prototype._final = function () {
            var h = this._alg(Buffer.concat(this._hash))
            return this._alg(Buffer.concat([this._opad, h]))
          }),
          (module.exports = Hmac)
      },
      './node_modules/crypto-browserify/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        ;(exports.randomBytes =
          exports.rng =
          exports.pseudoRandomBytes =
          exports.prng =
            __webpack_require__('./node_modules/randombytes/browser.js')),
          (exports.createHash = exports.Hash =
            __webpack_require__('./node_modules/create-hash/browser.js')),
          (exports.createHmac = exports.Hmac =
            __webpack_require__('./node_modules/create-hmac/browser.js'))
        var algos = __webpack_require__(
            './node_modules/browserify-sign/algos.js'
          ),
          algoKeys = Object.keys(algos),
          hashes = [
            'sha1',
            'sha224',
            'sha256',
            'sha384',
            'sha512',
            'md5',
            'rmd160',
          ].concat(algoKeys)
        exports.getHashes = function () {
          return hashes
        }
        var p = __webpack_require__('./node_modules/pbkdf2/browser.js')
        ;(exports.pbkdf2 = p.pbkdf2), (exports.pbkdf2Sync = p.pbkdf2Sync)
        var aes = __webpack_require__(
          './node_modules/browserify-cipher/browser.js'
        )
        ;(exports.Cipher = aes.Cipher),
          (exports.createCipher = aes.createCipher),
          (exports.Cipheriv = aes.Cipheriv),
          (exports.createCipheriv = aes.createCipheriv),
          (exports.Decipher = aes.Decipher),
          (exports.createDecipher = aes.createDecipher),
          (exports.Decipheriv = aes.Decipheriv),
          (exports.createDecipheriv = aes.createDecipheriv),
          (exports.getCiphers = aes.getCiphers),
          (exports.listCiphers = aes.listCiphers)
        var dh = __webpack_require__('./node_modules/diffie-hellman/browser.js')
        ;(exports.DiffieHellmanGroup = dh.DiffieHellmanGroup),
          (exports.createDiffieHellmanGroup = dh.createDiffieHellmanGroup),
          (exports.getDiffieHellman = dh.getDiffieHellman),
          (exports.createDiffieHellman = dh.createDiffieHellman),
          (exports.DiffieHellman = dh.DiffieHellman)
        var sign = __webpack_require__(
          './node_modules/browserify-sign/browser/index.js'
        )
        ;(exports.createSign = sign.createSign),
          (exports.Sign = sign.Sign),
          (exports.createVerify = sign.createVerify),
          (exports.Verify = sign.Verify),
          (exports.createECDH = __webpack_require__(
            './node_modules/create-ecdh/browser.js'
          ))
        var publicEncrypt = __webpack_require__(
          './node_modules/public-encrypt/browser.js'
        )
        ;(exports.publicEncrypt = publicEncrypt.publicEncrypt),
          (exports.privateEncrypt = publicEncrypt.privateEncrypt),
          (exports.publicDecrypt = publicEncrypt.publicDecrypt),
          (exports.privateDecrypt = publicEncrypt.privateDecrypt)
        var rf = __webpack_require__('./node_modules/randomfill/browser.js')
        ;(exports.randomFill = rf.randomFill),
          (exports.randomFillSync = rf.randomFillSync),
          (exports.createCredentials = function () {
            throw new Error(
              'sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/browserify/crypto-browserify'
            )
          }),
          (exports.constants = {
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            ALPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6,
          })
      },
      './node_modules/des.js/lib/des.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        ;(exports.utils = __webpack_require__(
          './node_modules/des.js/lib/des/utils.js'
        )),
          (exports.Cipher = __webpack_require__(
            './node_modules/des.js/lib/des/cipher.js'
          )),
          (exports.DES = __webpack_require__(
            './node_modules/des.js/lib/des/des.js'
          )),
          (exports.CBC = __webpack_require__(
            './node_modules/des.js/lib/des/cbc.js'
          )),
          (exports.EDE = __webpack_require__(
            './node_modules/des.js/lib/des/ede.js'
          ))
      },
      './node_modules/des.js/lib/des/cbc.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          ),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          proto = {}
        function CBCState(iv) {
          assert.equal(iv.length, 8, 'Invalid IV length'),
            (this.iv = new Array(8))
          for (var i = 0; i < this.iv.length; i++) this.iv[i] = iv[i]
        }
        ;(exports.instantiate = function instantiate(Base) {
          function CBC(options) {
            Base.call(this, options), this._cbcInit()
          }
          inherits(CBC, Base)
          for (var keys = Object.keys(proto), i = 0; i < keys.length; i++) {
            var key = keys[i]
            CBC.prototype[key] = proto[key]
          }
          return (
            (CBC.create = function create(options) {
              return new CBC(options)
            }),
            CBC
          )
        }),
          (proto._cbcInit = function _cbcInit() {
            var state = new CBCState(this.options.iv)
            this._cbcState = state
          }),
          (proto._update = function _update(inp, inOff, out, outOff) {
            var state = this._cbcState,
              superProto = this.constructor.super_.prototype,
              iv = state.iv
            if ('encrypt' === this.type) {
              for (var i = 0; i < this.blockSize; i++) iv[i] ^= inp[inOff + i]
              superProto._update.call(this, iv, 0, out, outOff)
              for (i = 0; i < this.blockSize; i++) iv[i] = out[outOff + i]
            } else {
              superProto._update.call(this, inp, inOff, out, outOff)
              for (i = 0; i < this.blockSize; i++) out[outOff + i] ^= iv[i]
              for (i = 0; i < this.blockSize; i++) iv[i] = inp[inOff + i]
            }
          })
      },
      './node_modules/des.js/lib/des/cipher.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var assert = __webpack_require__(
          './node_modules/minimalistic-assert/index.js'
        )
        function Cipher(options) {
          ;(this.options = options),
            (this.type = this.options.type),
            (this.blockSize = 8),
            this._init(),
            (this.buffer = new Array(this.blockSize)),
            (this.bufferOff = 0),
            (this.padding = !1 !== options.padding)
        }
        ;(module.exports = Cipher),
          (Cipher.prototype._init = function _init() {}),
          (Cipher.prototype.update = function update(data) {
            return 0 === data.length
              ? []
              : 'decrypt' === this.type
                ? this._updateDecrypt(data)
                : this._updateEncrypt(data)
          }),
          (Cipher.prototype._buffer = function _buffer(data, off) {
            for (
              var min = Math.min(
                  this.buffer.length - this.bufferOff,
                  data.length - off
                ),
                i = 0;
              i < min;
              i++
            )
              this.buffer[this.bufferOff + i] = data[off + i]
            return (this.bufferOff += min), min
          }),
          (Cipher.prototype._flushBuffer = function _flushBuffer(out, off) {
            return (
              this._update(this.buffer, 0, out, off),
              (this.bufferOff = 0),
              this.blockSize
            )
          }),
          (Cipher.prototype._updateEncrypt = function _updateEncrypt(data) {
            var inputOff = 0,
              outputOff = 0,
              count = ((this.bufferOff + data.length) / this.blockSize) | 0,
              out = new Array(count * this.blockSize)
            0 !== this.bufferOff &&
              ((inputOff += this._buffer(data, inputOff)),
              this.bufferOff === this.buffer.length &&
                (outputOff += this._flushBuffer(out, outputOff)))
            for (
              var max =
                data.length - ((data.length - inputOff) % this.blockSize);
              inputOff < max;
              inputOff += this.blockSize
            )
              this._update(data, inputOff, out, outputOff),
                (outputOff += this.blockSize)
            for (; inputOff < data.length; inputOff++, this.bufferOff++)
              this.buffer[this.bufferOff] = data[inputOff]
            return out
          }),
          (Cipher.prototype._updateDecrypt = function _updateDecrypt(data) {
            for (
              var inputOff = 0,
                outputOff = 0,
                count =
                  Math.ceil((this.bufferOff + data.length) / this.blockSize) -
                  1,
                out = new Array(count * this.blockSize);
              count > 0;
              count--
            )
              (inputOff += this._buffer(data, inputOff)),
                (outputOff += this._flushBuffer(out, outputOff))
            return (inputOff += this._buffer(data, inputOff)), out
          }),
          (Cipher.prototype.final = function final(buffer) {
            var first, last
            return (
              buffer && (first = this.update(buffer)),
              (last =
                'encrypt' === this.type
                  ? this._finalEncrypt()
                  : this._finalDecrypt()),
              first ? first.concat(last) : last
            )
          }),
          (Cipher.prototype._pad = function _pad(buffer, off) {
            if (0 === off) return !1
            for (; off < buffer.length; ) buffer[off++] = 0
            return !0
          }),
          (Cipher.prototype._finalEncrypt = function _finalEncrypt() {
            if (!this._pad(this.buffer, this.bufferOff)) return []
            var out = new Array(this.blockSize)
            return this._update(this.buffer, 0, out, 0), out
          }),
          (Cipher.prototype._unpad = function _unpad(buffer) {
            return buffer
          }),
          (Cipher.prototype._finalDecrypt = function _finalDecrypt() {
            assert.equal(
              this.bufferOff,
              this.blockSize,
              'Not enough data to decrypt'
            )
            var out = new Array(this.blockSize)
            return this._flushBuffer(out, 0), this._unpad(out)
          })
      },
      './node_modules/des.js/lib/des/des.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          ),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          utils = __webpack_require__('./node_modules/des.js/lib/des/utils.js'),
          Cipher = __webpack_require__(
            './node_modules/des.js/lib/des/cipher.js'
          )
        function DESState() {
          ;(this.tmp = new Array(2)), (this.keys = null)
        }
        function DES(options) {
          Cipher.call(this, options)
          var state = new DESState()
          ;(this._desState = state), this.deriveKeys(state, options.key)
        }
        inherits(DES, Cipher),
          (module.exports = DES),
          (DES.create = function create(options) {
            return new DES(options)
          })
        var shiftTable = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1]
        ;(DES.prototype.deriveKeys = function deriveKeys(state, key) {
          ;(state.keys = new Array(32)),
            assert.equal(key.length, this.blockSize, 'Invalid key length')
          var kL = utils.readUInt32BE(key, 0),
            kR = utils.readUInt32BE(key, 4)
          utils.pc1(kL, kR, state.tmp, 0),
            (kL = state.tmp[0]),
            (kR = state.tmp[1])
          for (var i = 0; i < state.keys.length; i += 2) {
            var shift = shiftTable[i >>> 1]
            ;(kL = utils.r28shl(kL, shift)),
              (kR = utils.r28shl(kR, shift)),
              utils.pc2(kL, kR, state.keys, i)
          }
        }),
          (DES.prototype._update = function _update(inp, inOff, out, outOff) {
            var state = this._desState,
              l = utils.readUInt32BE(inp, inOff),
              r = utils.readUInt32BE(inp, inOff + 4)
            utils.ip(l, r, state.tmp, 0),
              (l = state.tmp[0]),
              (r = state.tmp[1]),
              'encrypt' === this.type
                ? this._encrypt(state, l, r, state.tmp, 0)
                : this._decrypt(state, l, r, state.tmp, 0),
              (l = state.tmp[0]),
              (r = state.tmp[1]),
              utils.writeUInt32BE(out, l, outOff),
              utils.writeUInt32BE(out, r, outOff + 4)
          }),
          (DES.prototype._pad = function _pad(buffer, off) {
            if (!1 === this.padding) return !1
            for (
              var value = buffer.length - off, i = off;
              i < buffer.length;
              i++
            )
              buffer[i] = value
            return !0
          }),
          (DES.prototype._unpad = function _unpad(buffer) {
            if (!1 === this.padding) return buffer
            for (
              var pad = buffer[buffer.length - 1], i = buffer.length - pad;
              i < buffer.length;
              i++
            )
              assert.equal(buffer[i], pad)
            return buffer.slice(0, buffer.length - pad)
          }),
          (DES.prototype._encrypt = function _encrypt(
            state,
            lStart,
            rStart,
            out,
            off
          ) {
            for (
              var l = lStart, r = rStart, i = 0;
              i < state.keys.length;
              i += 2
            ) {
              var keyL = state.keys[i],
                keyR = state.keys[i + 1]
              utils.expand(r, state.tmp, 0),
                (keyL ^= state.tmp[0]),
                (keyR ^= state.tmp[1])
              var s = utils.substitute(keyL, keyR),
                t = r
              ;(r = (l ^ utils.permute(s)) >>> 0), (l = t)
            }
            utils.rip(r, l, out, off)
          }),
          (DES.prototype._decrypt = function _decrypt(
            state,
            lStart,
            rStart,
            out,
            off
          ) {
            for (
              var l = rStart, r = lStart, i = state.keys.length - 2;
              i >= 0;
              i -= 2
            ) {
              var keyL = state.keys[i],
                keyR = state.keys[i + 1]
              utils.expand(l, state.tmp, 0),
                (keyL ^= state.tmp[0]),
                (keyR ^= state.tmp[1])
              var s = utils.substitute(keyL, keyR),
                t = l
              ;(l = (r ^ utils.permute(s)) >>> 0), (r = t)
            }
            utils.rip(l, r, out, off)
          })
      },
      './node_modules/des.js/lib/des/ede.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          ),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Cipher = __webpack_require__(
            './node_modules/des.js/lib/des/cipher.js'
          ),
          DES = __webpack_require__('./node_modules/des.js/lib/des/des.js')
        function EDEState(type, key) {
          assert.equal(key.length, 24, 'Invalid key length')
          var k1 = key.slice(0, 8),
            k2 = key.slice(8, 16),
            k3 = key.slice(16, 24)
          this.ciphers =
            'encrypt' === type
              ? [
                  DES.create({ type: 'encrypt', key: k1 }),
                  DES.create({ type: 'decrypt', key: k2 }),
                  DES.create({ type: 'encrypt', key: k3 }),
                ]
              : [
                  DES.create({ type: 'decrypt', key: k3 }),
                  DES.create({ type: 'encrypt', key: k2 }),
                  DES.create({ type: 'decrypt', key: k1 }),
                ]
        }
        function EDE(options) {
          Cipher.call(this, options)
          var state = new EDEState(this.type, this.options.key)
          this._edeState = state
        }
        inherits(EDE, Cipher),
          (module.exports = EDE),
          (EDE.create = function create(options) {
            return new EDE(options)
          }),
          (EDE.prototype._update = function _update(inp, inOff, out, outOff) {
            var state = this._edeState
            state.ciphers[0]._update(inp, inOff, out, outOff),
              state.ciphers[1]._update(out, outOff, out, outOff),
              state.ciphers[2]._update(out, outOff, out, outOff)
          }),
          (EDE.prototype._pad = DES.prototype._pad),
          (EDE.prototype._unpad = DES.prototype._unpad)
      },
      './node_modules/des.js/lib/des/utils.js': (
        __unused_webpack_module,
        exports
      ) => {
        'use strict'
        ;(exports.readUInt32BE = function readUInt32BE(bytes, off) {
          return (
            ((bytes[0 + off] << 24) |
              (bytes[1 + off] << 16) |
              (bytes[2 + off] << 8) |
              bytes[3 + off]) >>>
            0
          )
        }),
          (exports.writeUInt32BE = function writeUInt32BE(bytes, value, off) {
            ;(bytes[0 + off] = value >>> 24),
              (bytes[1 + off] = (value >>> 16) & 255),
              (bytes[2 + off] = (value >>> 8) & 255),
              (bytes[3 + off] = 255 & value)
          }),
          (exports.ip = function ip(inL, inR, out, off) {
            for (var outL = 0, outR = 0, i = 6; i >= 0; i -= 2) {
              for (var j = 0; j <= 24; j += 8)
                (outL <<= 1), (outL |= (inR >>> (j + i)) & 1)
              for (j = 0; j <= 24; j += 8)
                (outL <<= 1), (outL |= (inL >>> (j + i)) & 1)
            }
            for (i = 6; i >= 0; i -= 2) {
              for (j = 1; j <= 25; j += 8)
                (outR <<= 1), (outR |= (inR >>> (j + i)) & 1)
              for (j = 1; j <= 25; j += 8)
                (outR <<= 1), (outR |= (inL >>> (j + i)) & 1)
            }
            ;(out[off + 0] = outL >>> 0), (out[off + 1] = outR >>> 0)
          }),
          (exports.rip = function rip(inL, inR, out, off) {
            for (var outL = 0, outR = 0, i = 0; i < 4; i++)
              for (var j = 24; j >= 0; j -= 8)
                (outL <<= 1),
                  (outL |= (inR >>> (j + i)) & 1),
                  (outL <<= 1),
                  (outL |= (inL >>> (j + i)) & 1)
            for (i = 4; i < 8; i++)
              for (j = 24; j >= 0; j -= 8)
                (outR <<= 1),
                  (outR |= (inR >>> (j + i)) & 1),
                  (outR <<= 1),
                  (outR |= (inL >>> (j + i)) & 1)
            ;(out[off + 0] = outL >>> 0), (out[off + 1] = outR >>> 0)
          }),
          (exports.pc1 = function pc1(inL, inR, out, off) {
            for (var outL = 0, outR = 0, i = 7; i >= 5; i--) {
              for (var j = 0; j <= 24; j += 8)
                (outL <<= 1), (outL |= (inR >> (j + i)) & 1)
              for (j = 0; j <= 24; j += 8)
                (outL <<= 1), (outL |= (inL >> (j + i)) & 1)
            }
            for (j = 0; j <= 24; j += 8)
              (outL <<= 1), (outL |= (inR >> (j + i)) & 1)
            for (i = 1; i <= 3; i++) {
              for (j = 0; j <= 24; j += 8)
                (outR <<= 1), (outR |= (inR >> (j + i)) & 1)
              for (j = 0; j <= 24; j += 8)
                (outR <<= 1), (outR |= (inL >> (j + i)) & 1)
            }
            for (j = 0; j <= 24; j += 8)
              (outR <<= 1), (outR |= (inL >> (j + i)) & 1)
            ;(out[off + 0] = outL >>> 0), (out[off + 1] = outR >>> 0)
          }),
          (exports.r28shl = function r28shl(num, shift) {
            return ((num << shift) & 268435455) | (num >>> (28 - shift))
          })
        var pc2table = [
          14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12,
          21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7,
          17, 0, 22, 3, 10, 14, 6, 20, 27, 24,
        ]
        ;(exports.pc2 = function pc2(inL, inR, out, off) {
          for (
            var outL = 0, outR = 0, len = pc2table.length >>> 1, i = 0;
            i < len;
            i++
          )
            (outL <<= 1), (outL |= (inL >>> pc2table[i]) & 1)
          for (i = len; i < pc2table.length; i++)
            (outR <<= 1), (outR |= (inR >>> pc2table[i]) & 1)
          ;(out[off + 0] = outL >>> 0), (out[off + 1] = outR >>> 0)
        }),
          (exports.expand = function expand(r, out, off) {
            var outL = 0,
              outR = 0
            outL = ((1 & r) << 5) | (r >>> 27)
            for (var i = 23; i >= 15; i -= 4)
              (outL <<= 6), (outL |= (r >>> i) & 63)
            for (i = 11; i >= 3; i -= 4) (outR |= (r >>> i) & 63), (outR <<= 6)
            ;(outR |= ((31 & r) << 1) | (r >>> 31)),
              (out[off + 0] = outL >>> 0),
              (out[off + 1] = outR >>> 0)
          })
        var sTable = [
          14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6,
          6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13,
          4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6,
          0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7,
          0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11,
          1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5,
          2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1,
          2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4,
          13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11,
          10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0,
          10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6,
          15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14,
          11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7,
          11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4,
          11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12,
          0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7,
          2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11,
          8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14,
          4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7,
          15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6,
          8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9,
          15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4,
          8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14,
          12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0,
          15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11,
        ]
        exports.substitute = function substitute(inL, inR) {
          for (var out = 0, i = 0; i < 4; i++) {
            ;(out <<= 4),
              (out |= sTable[64 * i + ((inL >>> (18 - 6 * i)) & 63)])
          }
          for (i = 0; i < 4; i++) {
            ;(out <<= 4),
              (out |= sTable[256 + 64 * i + ((inR >>> (18 - 6 * i)) & 63)])
          }
          return out >>> 0
        }
        var permuteTable = [
          16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8,
          18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7,
        ]
        ;(exports.permute = function permute(num) {
          for (var out = 0, i = 0; i < permuteTable.length; i++)
            (out <<= 1), (out |= (num >>> permuteTable[i]) & 1)
          return out >>> 0
        }),
          (exports.padSplit = function padSplit(num, size, group) {
            for (var str = num.toString(2); str.length < size; ) str = '0' + str
            for (var out = [], i = 0; i < size; i += group)
              out.push(str.slice(i, i + group))
            return out.join(' ')
          })
      },
      './node_modules/diffie-hellman/browser.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
            './node_modules/buffer/index.js'
          ).Buffer,
          generatePrime = __webpack_require__(
            './node_modules/diffie-hellman/lib/generatePrime.js'
          ),
          primes = __webpack_require__(
            './node_modules/diffie-hellman/lib/primes.json'
          ),
          DH = __webpack_require__('./node_modules/diffie-hellman/lib/dh.js')
        var ENCODINGS = { binary: !0, hex: !0, base64: !0 }
        ;(exports.DiffieHellmanGroup =
          exports.createDiffieHellmanGroup =
          exports.getDiffieHellman =
            function getDiffieHellman(mod) {
              var prime = new Buffer(primes[mod].prime, 'hex'),
                gen = new Buffer(primes[mod].gen, 'hex')
              return new DH(prime, gen)
            }),
          (exports.createDiffieHellman = exports.DiffieHellman =
            function createDiffieHellman(prime, enc, generator, genc) {
              return Buffer.isBuffer(enc) || void 0 === ENCODINGS[enc]
                ? createDiffieHellman(prime, 'binary', enc, generator)
                : ((enc = enc || 'binary'),
                  (genc = genc || 'binary'),
                  (generator = generator || new Buffer([2])),
                  Buffer.isBuffer(generator) ||
                    (generator = new Buffer(generator, genc)),
                  'number' == typeof prime
                    ? new DH(generatePrime(prime, generator), generator, !0)
                    : (Buffer.isBuffer(prime) ||
                        (prime = new Buffer(prime, enc)),
                      new DH(prime, generator, !0)))
            })
      },
      './node_modules/diffie-hellman/lib/dh.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
            './node_modules/buffer/index.js'
          ).Buffer,
          BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          millerRabin = new (__webpack_require__(
            './node_modules/miller-rabin/lib/mr.js'
          ))(),
          TWENTYFOUR = new BN(24),
          ELEVEN = new BN(11),
          TEN = new BN(10),
          THREE = new BN(3),
          SEVEN = new BN(7),
          primes = __webpack_require__(
            './node_modules/diffie-hellman/lib/generatePrime.js'
          ),
          randomBytes = __webpack_require__(
            './node_modules/randombytes/browser.js'
          )
        function setPublicKey(pub, enc) {
          return (
            (enc = enc || 'utf8'),
            Buffer.isBuffer(pub) || (pub = new Buffer(pub, enc)),
            (this._pub = new BN(pub)),
            this
          )
        }
        function setPrivateKey(priv, enc) {
          return (
            (enc = enc || 'utf8'),
            Buffer.isBuffer(priv) || (priv = new Buffer(priv, enc)),
            (this._priv = new BN(priv)),
            this
          )
        }
        module.exports = DH
        var primeCache = {}
        function DH(prime, generator, malleable) {
          this.setGenerator(generator),
            (this.__prime = new BN(prime)),
            (this._prime = BN.mont(this.__prime)),
            (this._primeLen = prime.length),
            (this._pub = void 0),
            (this._priv = void 0),
            (this._primeCode = void 0),
            malleable
              ? ((this.setPublicKey = setPublicKey),
                (this.setPrivateKey = setPrivateKey))
              : (this._primeCode = 8)
        }
        function formatReturnValue(bn, enc) {
          var buf = new Buffer(bn.toArray())
          return enc ? buf.toString(enc) : buf
        }
        Object.defineProperty(DH.prototype, 'verifyError', {
          enumerable: !0,
          get: function () {
            return (
              'number' != typeof this._primeCode &&
                (this._primeCode = (function checkPrime(prime, generator) {
                  var gen = generator.toString('hex'),
                    hex = [gen, prime.toString(16)].join('_')
                  if (hex in primeCache) return primeCache[hex]
                  var rem,
                    error = 0
                  if (
                    prime.isEven() ||
                    !primes.simpleSieve ||
                    !primes.fermatTest(prime) ||
                    !millerRabin.test(prime)
                  )
                    return (
                      (error += 1),
                      (error += '02' === gen || '05' === gen ? 8 : 4),
                      (primeCache[hex] = error),
                      error
                    )
                  switch (
                    (millerRabin.test(prime.shrn(1)) || (error += 2), gen)
                  ) {
                    case '02':
                      prime.mod(TWENTYFOUR).cmp(ELEVEN) && (error += 8)
                      break
                    case '05':
                      ;(rem = prime.mod(TEN)).cmp(THREE) &&
                        rem.cmp(SEVEN) &&
                        (error += 8)
                      break
                    default:
                      error += 4
                  }
                  return (primeCache[hex] = error), error
                })(this.__prime, this.__gen)),
              this._primeCode
            )
          },
        }),
          (DH.prototype.generateKeys = function () {
            return (
              this._priv || (this._priv = new BN(randomBytes(this._primeLen))),
              (this._pub = this._gen
                .toRed(this._prime)
                .redPow(this._priv)
                .fromRed()),
              this.getPublicKey()
            )
          }),
          (DH.prototype.computeSecret = function (other) {
            var secret = (other = (other = new BN(other)).toRed(this._prime))
                .redPow(this._priv)
                .fromRed(),
              out = new Buffer(secret.toArray()),
              prime = this.getPrime()
            if (out.length < prime.length) {
              var front = new Buffer(prime.length - out.length)
              front.fill(0), (out = Buffer.concat([front, out]))
            }
            return out
          }),
          (DH.prototype.getPublicKey = function getPublicKey(enc) {
            return formatReturnValue(this._pub, enc)
          }),
          (DH.prototype.getPrivateKey = function getPrivateKey(enc) {
            return formatReturnValue(this._priv, enc)
          }),
          (DH.prototype.getPrime = function (enc) {
            return formatReturnValue(this.__prime, enc)
          }),
          (DH.prototype.getGenerator = function (enc) {
            return formatReturnValue(this._gen, enc)
          }),
          (DH.prototype.setGenerator = function (gen, enc) {
            return (
              (enc = enc || 'utf8'),
              Buffer.isBuffer(gen) || (gen = new Buffer(gen, enc)),
              (this.__gen = gen),
              (this._gen = new BN(gen)),
              this
            )
          })
      },
      './node_modules/diffie-hellman/lib/generatePrime.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var randomBytes = __webpack_require__(
          './node_modules/randombytes/browser.js'
        )
        ;(module.exports = findPrime),
          (findPrime.simpleSieve = simpleSieve),
          (findPrime.fermatTest = fermatTest)
        var BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          TWENTYFOUR = new BN(24),
          millerRabin = new (__webpack_require__(
            './node_modules/miller-rabin/lib/mr.js'
          ))(),
          ONE = new BN(1),
          TWO = new BN(2),
          FIVE = new BN(5),
          TEN = (new BN(16), new BN(8), new BN(10)),
          THREE = new BN(3),
          ELEVEN = (new BN(7), new BN(11)),
          FOUR = new BN(4),
          primes = (new BN(12), null)
        function _getPrimes() {
          if (null !== primes) return primes
          var res = []
          res[0] = 2
          for (var i = 1, k = 3; k < 1048576; k += 2) {
            for (
              var sqrt = Math.ceil(Math.sqrt(k)), j = 0;
              j < i && res[j] <= sqrt && k % res[j] != 0;
              j++
            );
            ;(i !== j && res[j] <= sqrt) || (res[i++] = k)
          }
          return (primes = res), res
        }
        function simpleSieve(p) {
          for (var primes = _getPrimes(), i = 0; i < primes.length; i++)
            if (0 === p.modn(primes[i])) return 0 === p.cmpn(primes[i])
          return !0
        }
        function fermatTest(p) {
          var red = BN.mont(p)
          return 0 === TWO.toRed(red).redPow(p.subn(1)).fromRed().cmpn(1)
        }
        function findPrime(bits, gen) {
          if (bits < 16)
            return new BN(2 === gen || 5 === gen ? [140, 123] : [140, 39])
          var num, n2
          for (gen = new BN(gen); ; ) {
            for (
              num = new BN(randomBytes(Math.ceil(bits / 8)));
              num.bitLength() > bits;

            )
              num.ishrn(1)
            if (
              (num.isEven() && num.iadd(ONE),
              num.testn(1) || num.iadd(TWO),
              gen.cmp(TWO))
            ) {
              if (!gen.cmp(FIVE))
                for (; num.mod(TEN).cmp(THREE); ) num.iadd(FOUR)
            } else for (; num.mod(TWENTYFOUR).cmp(ELEVEN); ) num.iadd(FOUR)
            if (
              simpleSieve((n2 = num.shrn(1))) &&
              simpleSieve(num) &&
              fermatTest(n2) &&
              fermatTest(num) &&
              millerRabin.test(n2) &&
              millerRabin.test(num)
            )
              return num
          }
        }
      },
      './node_modules/elliptic/lib/elliptic.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var elliptic = exports
        ;(elliptic.version = __webpack_require__(
          './node_modules/elliptic/package.json'
        ).rE),
          (elliptic.utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          )),
          (elliptic.rand = __webpack_require__(
            './node_modules/brorand/index.js'
          )),
          (elliptic.curve = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curve/index.js'
          )),
          (elliptic.curves = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curves.js'
          )),
          (elliptic.ec = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/ec/index.js'
          )),
          (elliptic.eddsa = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/eddsa/index.js'
          ))
      },
      './node_modules/elliptic/lib/elliptic/curve/base.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ),
          getNAF = utils.getNAF,
          getJSF = utils.getJSF,
          assert = utils.assert
        function BaseCurve(type, conf) {
          ;(this.type = type),
            (this.p = new BN(conf.p, 16)),
            (this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p)),
            (this.zero = new BN(0).toRed(this.red)),
            (this.one = new BN(1).toRed(this.red)),
            (this.two = new BN(2).toRed(this.red)),
            (this.n = conf.n && new BN(conf.n, 16)),
            (this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed)),
            (this._wnafT1 = new Array(4)),
            (this._wnafT2 = new Array(4)),
            (this._wnafT3 = new Array(4)),
            (this._wnafT4 = new Array(4)),
            (this._bitLength = this.n ? this.n.bitLength() : 0)
          var adjustCount = this.n && this.p.div(this.n)
          !adjustCount || adjustCount.cmpn(100) > 0
            ? (this.redN = null)
            : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)))
        }
        function BasePoint(curve, type) {
          ;(this.curve = curve), (this.type = type), (this.precomputed = null)
        }
        ;(module.exports = BaseCurve),
          (BaseCurve.prototype.point = function point() {
            throw new Error('Not implemented')
          }),
          (BaseCurve.prototype.validate = function validate() {
            throw new Error('Not implemented')
          }),
          (BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
            assert(p.precomputed)
            var doubles = p._getDoubles(),
              naf = getNAF(k, 1, this._bitLength),
              I = (1 << (doubles.step + 1)) - (doubles.step % 2 == 0 ? 2 : 1)
            I /= 3
            var j,
              nafW,
              repr = []
            for (j = 0; j < naf.length; j += doubles.step) {
              nafW = 0
              for (var l = j + doubles.step - 1; l >= j; l--)
                nafW = (nafW << 1) + naf[l]
              repr.push(nafW)
            }
            for (
              var a = this.jpoint(null, null, null),
                b = this.jpoint(null, null, null),
                i = I;
              i > 0;
              i--
            ) {
              for (j = 0; j < repr.length; j++)
                (nafW = repr[j]) === i
                  ? (b = b.mixedAdd(doubles.points[j]))
                  : nafW === -i && (b = b.mixedAdd(doubles.points[j].neg()))
              a = a.add(b)
            }
            return a.toP()
          }),
          (BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
            var w = 4,
              nafPoints = p._getNAFPoints(w)
            w = nafPoints.wnd
            for (
              var wnd = nafPoints.points,
                naf = getNAF(k, w, this._bitLength),
                acc = this.jpoint(null, null, null),
                i = naf.length - 1;
              i >= 0;
              i--
            ) {
              for (var l = 0; i >= 0 && 0 === naf[i]; i--) l++
              if ((i >= 0 && l++, (acc = acc.dblp(l)), i < 0)) break
              var z = naf[i]
              assert(0 !== z),
                (acc =
                  'affine' === p.type
                    ? z > 0
                      ? acc.mixedAdd(wnd[(z - 1) >> 1])
                      : acc.mixedAdd(wnd[(-z - 1) >> 1].neg())
                    : z > 0
                      ? acc.add(wnd[(z - 1) >> 1])
                      : acc.add(wnd[(-z - 1) >> 1].neg()))
            }
            return 'affine' === p.type ? acc.toP() : acc
          }),
          (BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(
            defW,
            points,
            coeffs,
            len,
            jacobianResult
          ) {
            var i,
              j,
              p,
              wndWidth = this._wnafT1,
              wnd = this._wnafT2,
              naf = this._wnafT3,
              max = 0
            for (i = 0; i < len; i++) {
              var nafPoints = (p = points[i])._getNAFPoints(defW)
              ;(wndWidth[i] = nafPoints.wnd), (wnd[i] = nafPoints.points)
            }
            for (i = len - 1; i >= 1; i -= 2) {
              var a = i - 1,
                b = i
              if (1 === wndWidth[a] && 1 === wndWidth[b]) {
                var comb = [points[a], null, null, points[b]]
                0 === points[a].y.cmp(points[b].y)
                  ? ((comb[1] = points[a].add(points[b])),
                    (comb[2] = points[a].toJ().mixedAdd(points[b].neg())))
                  : 0 === points[a].y.cmp(points[b].y.redNeg())
                    ? ((comb[1] = points[a].toJ().mixedAdd(points[b])),
                      (comb[2] = points[a].add(points[b].neg())))
                    : ((comb[1] = points[a].toJ().mixedAdd(points[b])),
                      (comb[2] = points[a].toJ().mixedAdd(points[b].neg())))
                var index = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                  jsf = getJSF(coeffs[a], coeffs[b])
                for (
                  max = Math.max(jsf[0].length, max),
                    naf[a] = new Array(max),
                    naf[b] = new Array(max),
                    j = 0;
                  j < max;
                  j++
                ) {
                  var ja = 0 | jsf[0][j],
                    jb = 0 | jsf[1][j]
                  ;(naf[a][j] = index[3 * (ja + 1) + (jb + 1)]),
                    (naf[b][j] = 0),
                    (wnd[a] = comb)
                }
              } else
                (naf[a] = getNAF(coeffs[a], wndWidth[a], this._bitLength)),
                  (naf[b] = getNAF(coeffs[b], wndWidth[b], this._bitLength)),
                  (max = Math.max(naf[a].length, max)),
                  (max = Math.max(naf[b].length, max))
            }
            var acc = this.jpoint(null, null, null),
              tmp = this._wnafT4
            for (i = max; i >= 0; i--) {
              for (var k = 0; i >= 0; ) {
                var zero = !0
                for (j = 0; j < len; j++)
                  (tmp[j] = 0 | naf[j][i]), 0 !== tmp[j] && (zero = !1)
                if (!zero) break
                k++, i--
              }
              if ((i >= 0 && k++, (acc = acc.dblp(k)), i < 0)) break
              for (j = 0; j < len; j++) {
                var z = tmp[j]
                0 !== z &&
                  (z > 0
                    ? (p = wnd[j][(z - 1) >> 1])
                    : z < 0 && (p = wnd[j][(-z - 1) >> 1].neg()),
                  (acc = 'affine' === p.type ? acc.mixedAdd(p) : acc.add(p)))
              }
            }
            for (i = 0; i < len; i++) wnd[i] = null
            return jacobianResult ? acc : acc.toP()
          }),
          (BaseCurve.BasePoint = BasePoint),
          (BasePoint.prototype.eq = function eq() {
            throw new Error('Not implemented')
          }),
          (BasePoint.prototype.validate = function validate() {
            return this.curve.validate(this)
          }),
          (BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
            bytes = utils.toArray(bytes, enc)
            var len = this.p.byteLength()
            if (
              (4 === bytes[0] || 6 === bytes[0] || 7 === bytes[0]) &&
              bytes.length - 1 == 2 * len
            )
              return (
                6 === bytes[0]
                  ? assert(bytes[bytes.length - 1] % 2 == 0)
                  : 7 === bytes[0] && assert(bytes[bytes.length - 1] % 2 == 1),
                this.point(
                  bytes.slice(1, 1 + len),
                  bytes.slice(1 + len, 1 + 2 * len)
                )
              )
            if ((2 === bytes[0] || 3 === bytes[0]) && bytes.length - 1 === len)
              return this.pointFromX(bytes.slice(1, 1 + len), 3 === bytes[0])
            throw new Error('Unknown point format')
          }),
          (BasePoint.prototype.encodeCompressed = function encodeCompressed(
            enc
          ) {
            return this.encode(enc, !0)
          }),
          (BasePoint.prototype._encode = function _encode(compact) {
            var len = this.curve.p.byteLength(),
              x = this.getX().toArray('be', len)
            return compact
              ? [this.getY().isEven() ? 2 : 3].concat(x)
              : [4].concat(x, this.getY().toArray('be', len))
          }),
          (BasePoint.prototype.encode = function encode(enc, compact) {
            return utils.encode(this._encode(compact), enc)
          }),
          (BasePoint.prototype.precompute = function precompute(power) {
            if (this.precomputed) return this
            var precomputed = { doubles: null, naf: null, beta: null }
            return (
              (precomputed.naf = this._getNAFPoints(8)),
              (precomputed.doubles = this._getDoubles(4, power)),
              (precomputed.beta = this._getBeta()),
              (this.precomputed = precomputed),
              this
            )
          }),
          (BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
            if (!this.precomputed) return !1
            var doubles = this.precomputed.doubles
            return (
              !!doubles &&
              doubles.points.length >=
                Math.ceil((k.bitLength() + 1) / doubles.step)
            )
          }),
          (BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
            if (this.precomputed && this.precomputed.doubles)
              return this.precomputed.doubles
            for (
              var doubles = [this], acc = this, i = 0;
              i < power;
              i += step
            ) {
              for (var j = 0; j < step; j++) acc = acc.dbl()
              doubles.push(acc)
            }
            return { step, points: doubles }
          }),
          (BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
            if (this.precomputed && this.precomputed.naf)
              return this.precomputed.naf
            for (
              var res = [this],
                max = (1 << wnd) - 1,
                dbl = 1 === max ? null : this.dbl(),
                i = 1;
              i < max;
              i++
            )
              res[i] = res[i - 1].add(dbl)
            return { wnd, points: res }
          }),
          (BasePoint.prototype._getBeta = function _getBeta() {
            return null
          }),
          (BasePoint.prototype.dblp = function dblp(k) {
            for (var r = this, i = 0; i < k; i++) r = r.dbl()
            return r
          })
      },
      './node_modules/elliptic/lib/elliptic/curve/edwards.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ),
          BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Base = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curve/base.js'
          ),
          assert = utils.assert
        function EdwardsCurve(conf) {
          ;(this.twisted = 1 != (0 | conf.a)),
            (this.mOneA = this.twisted && -1 == (0 | conf.a)),
            (this.extended = this.mOneA),
            Base.call(this, 'edwards', conf),
            (this.a = new BN(conf.a, 16).umod(this.red.m)),
            (this.a = this.a.toRed(this.red)),
            (this.c = new BN(conf.c, 16).toRed(this.red)),
            (this.c2 = this.c.redSqr()),
            (this.d = new BN(conf.d, 16).toRed(this.red)),
            (this.dd = this.d.redAdd(this.d)),
            assert(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
            (this.oneC = 1 == (0 | conf.c))
        }
        function Point(curve, x, y, z, t) {
          Base.BasePoint.call(this, curve, 'projective'),
            null === x && null === y && null === z
              ? ((this.x = this.curve.zero),
                (this.y = this.curve.one),
                (this.z = this.curve.one),
                (this.t = this.curve.zero),
                (this.zOne = !0))
              : ((this.x = new BN(x, 16)),
                (this.y = new BN(y, 16)),
                (this.z = z ? new BN(z, 16) : this.curve.one),
                (this.t = t && new BN(t, 16)),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                this.z.red || (this.z = this.z.toRed(this.curve.red)),
                this.t &&
                  !this.t.red &&
                  (this.t = this.t.toRed(this.curve.red)),
                (this.zOne = this.z === this.curve.one),
                this.curve.extended &&
                  !this.t &&
                  ((this.t = this.x.redMul(this.y)),
                  this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
        }
        inherits(EdwardsCurve, Base),
          (module.exports = EdwardsCurve),
          (EdwardsCurve.prototype._mulA = function _mulA(num) {
            return this.mOneA ? num.redNeg() : this.a.redMul(num)
          }),
          (EdwardsCurve.prototype._mulC = function _mulC(num) {
            return this.oneC ? num : this.c.redMul(num)
          }),
          (EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
            return this.point(x, y, z, t)
          }),
          (EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
            ;(x = new BN(x, 16)).red || (x = x.toRed(this.red))
            var x2 = x.redSqr(),
              rhs = this.c2.redSub(this.a.redMul(x2)),
              lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2)),
              y2 = rhs.redMul(lhs.redInvm()),
              y = y2.redSqrt()
            if (0 !== y.redSqr().redSub(y2).cmp(this.zero))
              throw new Error('invalid point')
            var isOdd = y.fromRed().isOdd()
            return (
              ((odd && !isOdd) || (!odd && isOdd)) && (y = y.redNeg()),
              this.point(x, y)
            )
          }),
          (EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
            ;(y = new BN(y, 16)).red || (y = y.toRed(this.red))
            var y2 = y.redSqr(),
              lhs = y2.redSub(this.c2),
              rhs = y2.redMul(this.d).redMul(this.c2).redSub(this.a),
              x2 = lhs.redMul(rhs.redInvm())
            if (0 === x2.cmp(this.zero)) {
              if (odd) throw new Error('invalid point')
              return this.point(this.zero, y)
            }
            var x = x2.redSqrt()
            if (0 !== x.redSqr().redSub(x2).cmp(this.zero))
              throw new Error('invalid point')
            return (
              x.fromRed().isOdd() !== odd && (x = x.redNeg()), this.point(x, y)
            )
          }),
          (EdwardsCurve.prototype.validate = function validate(point) {
            if (point.isInfinity()) return !0
            point.normalize()
            var x2 = point.x.redSqr(),
              y2 = point.y.redSqr(),
              lhs = x2.redMul(this.a).redAdd(y2),
              rhs = this.c2.redMul(
                this.one.redAdd(this.d.redMul(x2).redMul(y2))
              )
            return 0 === lhs.cmp(rhs)
          }),
          inherits(Point, Base.BasePoint),
          (EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
            return Point.fromJSON(this, obj)
          }),
          (EdwardsCurve.prototype.point = function point(x, y, z, t) {
            return new Point(this, x, y, z, t)
          }),
          (Point.fromJSON = function fromJSON(curve, obj) {
            return new Point(curve, obj[0], obj[1], obj[2])
          }),
          (Point.prototype.inspect = function inspect() {
            return this.isInfinity()
              ? '<EC Point Infinity>'
              : '<EC Point x: ' +
                  this.x.fromRed().toString(16, 2) +
                  ' y: ' +
                  this.y.fromRed().toString(16, 2) +
                  ' z: ' +
                  this.z.fromRed().toString(16, 2) +
                  '>'
          }),
          (Point.prototype.isInfinity = function isInfinity() {
            return (
              0 === this.x.cmpn(0) &&
              (0 === this.y.cmp(this.z) ||
                (this.zOne && 0 === this.y.cmp(this.curve.c)))
            )
          }),
          (Point.prototype._extDbl = function _extDbl() {
            var a = this.x.redSqr(),
              b = this.y.redSqr(),
              c = this.z.redSqr()
            c = c.redIAdd(c)
            var d = this.curve._mulA(a),
              e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b),
              g = d.redAdd(b),
              f = g.redSub(c),
              h = d.redSub(b),
              nx = e.redMul(f),
              ny = g.redMul(h),
              nt = e.redMul(h),
              nz = f.redMul(g)
            return this.curve.point(nx, ny, nz, nt)
          }),
          (Point.prototype._projDbl = function _projDbl() {
            var nx,
              ny,
              nz,
              e,
              h,
              j,
              b = this.x.redAdd(this.y).redSqr(),
              c = this.x.redSqr(),
              d = this.y.redSqr()
            if (this.curve.twisted) {
              var f = (e = this.curve._mulA(c)).redAdd(d)
              this.zOne
                ? ((nx = b
                    .redSub(c)
                    .redSub(d)
                    .redMul(f.redSub(this.curve.two))),
                  (ny = f.redMul(e.redSub(d))),
                  (nz = f.redSqr().redSub(f).redSub(f)))
                : ((h = this.z.redSqr()),
                  (j = f.redSub(h).redISub(h)),
                  (nx = b.redSub(c).redISub(d).redMul(j)),
                  (ny = f.redMul(e.redSub(d))),
                  (nz = f.redMul(j)))
            } else
              (e = c.redAdd(d)),
                (h = this.curve._mulC(this.z).redSqr()),
                (j = e.redSub(h).redSub(h)),
                (nx = this.curve._mulC(b.redISub(e)).redMul(j)),
                (ny = this.curve._mulC(e).redMul(c.redISub(d))),
                (nz = e.redMul(j))
            return this.curve.point(nx, ny, nz)
          }),
          (Point.prototype.dbl = function dbl() {
            return this.isInfinity()
              ? this
              : this.curve.extended
                ? this._extDbl()
                : this._projDbl()
          }),
          (Point.prototype._extAdd = function _extAdd(p) {
            var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x)),
              b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x)),
              c = this.t.redMul(this.curve.dd).redMul(p.t),
              d = this.z.redMul(p.z.redAdd(p.z)),
              e = b.redSub(a),
              f = d.redSub(c),
              g = d.redAdd(c),
              h = b.redAdd(a),
              nx = e.redMul(f),
              ny = g.redMul(h),
              nt = e.redMul(h),
              nz = f.redMul(g)
            return this.curve.point(nx, ny, nz, nt)
          }),
          (Point.prototype._projAdd = function _projAdd(p) {
            var ny,
              nz,
              a = this.z.redMul(p.z),
              b = a.redSqr(),
              c = this.x.redMul(p.x),
              d = this.y.redMul(p.y),
              e = this.curve.d.redMul(c).redMul(d),
              f = b.redSub(e),
              g = b.redAdd(e),
              tmp = this.x
                .redAdd(this.y)
                .redMul(p.x.redAdd(p.y))
                .redISub(c)
                .redISub(d),
              nx = a.redMul(f).redMul(tmp)
            return (
              this.curve.twisted
                ? ((ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)))),
                  (nz = f.redMul(g)))
                : ((ny = a.redMul(g).redMul(d.redSub(c))),
                  (nz = this.curve._mulC(f).redMul(g))),
              this.curve.point(nx, ny, nz)
            )
          }),
          (Point.prototype.add = function add(p) {
            return this.isInfinity()
              ? p
              : p.isInfinity()
                ? this
                : this.curve.extended
                  ? this._extAdd(p)
                  : this._projAdd(p)
          }),
          (Point.prototype.mul = function mul(k) {
            return this._hasDoubles(k)
              ? this.curve._fixedNafMul(this, k)
              : this.curve._wnafMul(this, k)
          }),
          (Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
            return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, !1)
          }),
          (Point.prototype.jmulAdd = function jmulAdd(k1, p, k2) {
            return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, !0)
          }),
          (Point.prototype.normalize = function normalize() {
            if (this.zOne) return this
            var zi = this.z.redInvm()
            return (
              (this.x = this.x.redMul(zi)),
              (this.y = this.y.redMul(zi)),
              this.t && (this.t = this.t.redMul(zi)),
              (this.z = this.curve.one),
              (this.zOne = !0),
              this
            )
          }),
          (Point.prototype.neg = function neg() {
            return this.curve.point(
              this.x.redNeg(),
              this.y,
              this.z,
              this.t && this.t.redNeg()
            )
          }),
          (Point.prototype.getX = function getX() {
            return this.normalize(), this.x.fromRed()
          }),
          (Point.prototype.getY = function getY() {
            return this.normalize(), this.y.fromRed()
          }),
          (Point.prototype.eq = function eq(other) {
            return (
              this === other ||
              (0 === this.getX().cmp(other.getX()) &&
                0 === this.getY().cmp(other.getY()))
            )
          }),
          (Point.prototype.eqXToP = function eqXToP(x) {
            var rx = x.toRed(this.curve.red).redMul(this.z)
            if (0 === this.x.cmp(rx)) return !0
            for (var xc = x.clone(), t = this.curve.redN.redMul(this.z); ; ) {
              if ((xc.iadd(this.curve.n), xc.cmp(this.curve.p) >= 0)) return !1
              if ((rx.redIAdd(t), 0 === this.x.cmp(rx))) return !0
            }
          }),
          (Point.prototype.toP = Point.prototype.normalize),
          (Point.prototype.mixedAdd = Point.prototype.add)
      },
      './node_modules/elliptic/lib/elliptic/curve/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var curve = exports
        ;(curve.base = __webpack_require__(
          './node_modules/elliptic/lib/elliptic/curve/base.js'
        )),
          (curve.short = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curve/short.js'
          )),
          (curve.mont = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curve/mont.js'
          )),
          (curve.edwards = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curve/edwards.js'
          ))
      },
      './node_modules/elliptic/lib/elliptic/curve/mont.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Base = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curve/base.js'
          ),
          utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          )
        function MontCurve(conf) {
          Base.call(this, 'mont', conf),
            (this.a = new BN(conf.a, 16).toRed(this.red)),
            (this.b = new BN(conf.b, 16).toRed(this.red)),
            (this.i4 = new BN(4).toRed(this.red).redInvm()),
            (this.two = new BN(2).toRed(this.red)),
            (this.a24 = this.i4.redMul(this.a.redAdd(this.two)))
        }
        function Point(curve, x, z) {
          Base.BasePoint.call(this, curve, 'projective'),
            null === x && null === z
              ? ((this.x = this.curve.one), (this.z = this.curve.zero))
              : ((this.x = new BN(x, 16)),
                (this.z = new BN(z, 16)),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.z.red || (this.z = this.z.toRed(this.curve.red)))
        }
        inherits(MontCurve, Base),
          (module.exports = MontCurve),
          (MontCurve.prototype.validate = function validate(point) {
            var x = point.normalize().x,
              x2 = x.redSqr(),
              rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x)
            return 0 === rhs.redSqrt().redSqr().cmp(rhs)
          }),
          inherits(Point, Base.BasePoint),
          (MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
            return this.point(utils.toArray(bytes, enc), 1)
          }),
          (MontCurve.prototype.point = function point(x, z) {
            return new Point(this, x, z)
          }),
          (MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
            return Point.fromJSON(this, obj)
          }),
          (Point.prototype.precompute = function precompute() {}),
          (Point.prototype._encode = function _encode() {
            return this.getX().toArray('be', this.curve.p.byteLength())
          }),
          (Point.fromJSON = function fromJSON(curve, obj) {
            return new Point(curve, obj[0], obj[1] || curve.one)
          }),
          (Point.prototype.inspect = function inspect() {
            return this.isInfinity()
              ? '<EC Point Infinity>'
              : '<EC Point x: ' +
                  this.x.fromRed().toString(16, 2) +
                  ' z: ' +
                  this.z.fromRed().toString(16, 2) +
                  '>'
          }),
          (Point.prototype.isInfinity = function isInfinity() {
            return 0 === this.z.cmpn(0)
          }),
          (Point.prototype.dbl = function dbl() {
            var aa = this.x.redAdd(this.z).redSqr(),
              bb = this.x.redSub(this.z).redSqr(),
              c = aa.redSub(bb),
              nx = aa.redMul(bb),
              nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)))
            return this.curve.point(nx, nz)
          }),
          (Point.prototype.add = function add() {
            throw new Error('Not supported on Montgomery curve')
          }),
          (Point.prototype.diffAdd = function diffAdd(p, diff) {
            var a = this.x.redAdd(this.z),
              b = this.x.redSub(this.z),
              c = p.x.redAdd(p.z),
              da = p.x.redSub(p.z).redMul(a),
              cb = c.redMul(b),
              nx = diff.z.redMul(da.redAdd(cb).redSqr()),
              nz = diff.x.redMul(da.redISub(cb).redSqr())
            return this.curve.point(nx, nz)
          }),
          (Point.prototype.mul = function mul(k) {
            for (
              var t = k.clone(),
                a = this,
                b = this.curve.point(null, null),
                bits = [];
              0 !== t.cmpn(0);
              t.iushrn(1)
            )
              bits.push(t.andln(1))
            for (var i = bits.length - 1; i >= 0; i--)
              0 === bits[i]
                ? ((a = a.diffAdd(b, this)), (b = b.dbl()))
                : ((b = a.diffAdd(b, this)), (a = a.dbl()))
            return b
          }),
          (Point.prototype.mulAdd = function mulAdd() {
            throw new Error('Not supported on Montgomery curve')
          }),
          (Point.prototype.jumlAdd = function jumlAdd() {
            throw new Error('Not supported on Montgomery curve')
          }),
          (Point.prototype.eq = function eq(other) {
            return 0 === this.getX().cmp(other.getX())
          }),
          (Point.prototype.normalize = function normalize() {
            return (
              (this.x = this.x.redMul(this.z.redInvm())),
              (this.z = this.curve.one),
              this
            )
          }),
          (Point.prototype.getX = function getX() {
            return this.normalize(), this.x.fromRed()
          })
      },
      './node_modules/elliptic/lib/elliptic/curve/short.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ),
          BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Base = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curve/base.js'
          ),
          assert = utils.assert
        function ShortCurve(conf) {
          Base.call(this, 'short', conf),
            (this.a = new BN(conf.a, 16).toRed(this.red)),
            (this.b = new BN(conf.b, 16).toRed(this.red)),
            (this.tinv = this.two.redInvm()),
            (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
            (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
            (this.endo = this._getEndomorphism(conf)),
            (this._endoWnafT1 = new Array(4)),
            (this._endoWnafT2 = new Array(4))
        }
        function Point(curve, x, y, isRed) {
          Base.BasePoint.call(this, curve, 'affine'),
            null === x && null === y
              ? ((this.x = null), (this.y = null), (this.inf = !0))
              : ((this.x = new BN(x, 16)),
                (this.y = new BN(y, 16)),
                isRed &&
                  (this.x.forceRed(this.curve.red),
                  this.y.forceRed(this.curve.red)),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                (this.inf = !1))
        }
        function JPoint(curve, x, y, z) {
          Base.BasePoint.call(this, curve, 'jacobian'),
            null === x && null === y && null === z
              ? ((this.x = this.curve.one),
                (this.y = this.curve.one),
                (this.z = new BN(0)))
              : ((this.x = new BN(x, 16)),
                (this.y = new BN(y, 16)),
                (this.z = new BN(z, 16))),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            (this.zOne = this.z === this.curve.one)
        }
        inherits(ShortCurve, Base),
          (module.exports = ShortCurve),
          (ShortCurve.prototype._getEndomorphism = function _getEndomorphism(
            conf
          ) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
              var beta, lambda
              if (conf.beta) beta = new BN(conf.beta, 16).toRed(this.red)
              else {
                var betas = this._getEndoRoots(this.p)
                beta = (beta =
                  betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1]).toRed(
                  this.red
                )
              }
              if (conf.lambda) lambda = new BN(conf.lambda, 16)
              else {
                var lambdas = this._getEndoRoots(this.n)
                0 === this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta))
                  ? (lambda = lambdas[0])
                  : ((lambda = lambdas[1]),
                    assert(
                      0 === this.g.mul(lambda).x.cmp(this.g.x.redMul(beta))
                    ))
              }
              return {
                beta,
                lambda,
                basis: conf.basis
                  ? conf.basis.map(function (vec) {
                      return { a: new BN(vec.a, 16), b: new BN(vec.b, 16) }
                    })
                  : this._getEndoBasis(lambda),
              }
            }
          }),
          (ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
            var red = num === this.p ? this.red : BN.mont(num),
              tinv = new BN(2).toRed(red).redInvm(),
              ntinv = tinv.redNeg(),
              s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv)
            return [ntinv.redAdd(s).fromRed(), ntinv.redSub(s).fromRed()]
          }),
          (ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
            for (
              var a0,
                b0,
                a1,
                b1,
                a2,
                b2,
                prevR,
                r,
                x,
                aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
                u = lambda,
                v = this.n.clone(),
                x1 = new BN(1),
                y1 = new BN(0),
                x2 = new BN(0),
                y2 = new BN(1),
                i = 0;
              0 !== u.cmpn(0);

            ) {
              var q = v.div(u)
              ;(r = v.sub(q.mul(u))), (x = x2.sub(q.mul(x1)))
              var y = y2.sub(q.mul(y1))
              if (!a1 && r.cmp(aprxSqrt) < 0)
                (a0 = prevR.neg()), (b0 = x1), (a1 = r.neg()), (b1 = x)
              else if (a1 && 2 == ++i) break
              ;(prevR = r),
                (v = u),
                (u = r),
                (x2 = x1),
                (x1 = x),
                (y2 = y1),
                (y1 = y)
            }
            ;(a2 = r.neg()), (b2 = x)
            var len1 = a1.sqr().add(b1.sqr())
            return (
              a2.sqr().add(b2.sqr()).cmp(len1) >= 0 && ((a2 = a0), (b2 = b0)),
              a1.negative && ((a1 = a1.neg()), (b1 = b1.neg())),
              a2.negative && ((a2 = a2.neg()), (b2 = b2.neg())),
              [
                { a: a1, b: b1 },
                { a: a2, b: b2 },
              ]
            )
          }),
          (ShortCurve.prototype._endoSplit = function _endoSplit(k) {
            var basis = this.endo.basis,
              v1 = basis[0],
              v2 = basis[1],
              c1 = v2.b.mul(k).divRound(this.n),
              c2 = v1.b.neg().mul(k).divRound(this.n),
              p1 = c1.mul(v1.a),
              p2 = c2.mul(v2.a),
              q1 = c1.mul(v1.b),
              q2 = c2.mul(v2.b)
            return { k1: k.sub(p1).sub(p2), k2: q1.add(q2).neg() }
          }),
          (ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
            ;(x = new BN(x, 16)).red || (x = x.toRed(this.red))
            var y2 = x
                .redSqr()
                .redMul(x)
                .redIAdd(x.redMul(this.a))
                .redIAdd(this.b),
              y = y2.redSqrt()
            if (0 !== y.redSqr().redSub(y2).cmp(this.zero))
              throw new Error('invalid point')
            var isOdd = y.fromRed().isOdd()
            return (
              ((odd && !isOdd) || (!odd && isOdd)) && (y = y.redNeg()),
              this.point(x, y)
            )
          }),
          (ShortCurve.prototype.validate = function validate(point) {
            if (point.inf) return !0
            var x = point.x,
              y = point.y,
              ax = this.a.redMul(x),
              rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b)
            return 0 === y.redSqr().redISub(rhs).cmpn(0)
          }),
          (ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(
            points,
            coeffs,
            jacobianResult
          ) {
            for (
              var npoints = this._endoWnafT1, ncoeffs = this._endoWnafT2, i = 0;
              i < points.length;
              i++
            ) {
              var split = this._endoSplit(coeffs[i]),
                p = points[i],
                beta = p._getBeta()
              split.k1.negative && (split.k1.ineg(), (p = p.neg(!0))),
                split.k2.negative && (split.k2.ineg(), (beta = beta.neg(!0))),
                (npoints[2 * i] = p),
                (npoints[2 * i + 1] = beta),
                (ncoeffs[2 * i] = split.k1),
                (ncoeffs[2 * i + 1] = split.k2)
            }
            for (
              var res = this._wnafMulAdd(
                  1,
                  npoints,
                  ncoeffs,
                  2 * i,
                  jacobianResult
                ),
                j = 0;
              j < 2 * i;
              j++
            )
              (npoints[j] = null), (ncoeffs[j] = null)
            return res
          }),
          inherits(Point, Base.BasePoint),
          (ShortCurve.prototype.point = function point(x, y, isRed) {
            return new Point(this, x, y, isRed)
          }),
          (ShortCurve.prototype.pointFromJSON = function pointFromJSON(
            obj,
            red
          ) {
            return Point.fromJSON(this, obj, red)
          }),
          (Point.prototype._getBeta = function _getBeta() {
            if (this.curve.endo) {
              var pre = this.precomputed
              if (pre && pre.beta) return pre.beta
              var beta = this.curve.point(
                this.x.redMul(this.curve.endo.beta),
                this.y
              )
              if (pre) {
                var curve = this.curve,
                  endoMul = function (p) {
                    return curve.point(p.x.redMul(curve.endo.beta), p.y)
                  }
                ;(pre.beta = beta),
                  (beta.precomputed = {
                    beta: null,
                    naf: pre.naf && {
                      wnd: pre.naf.wnd,
                      points: pre.naf.points.map(endoMul),
                    },
                    doubles: pre.doubles && {
                      step: pre.doubles.step,
                      points: pre.doubles.points.map(endoMul),
                    },
                  })
              }
              return beta
            }
          }),
          (Point.prototype.toJSON = function toJSON() {
            return this.precomputed
              ? [
                  this.x,
                  this.y,
                  this.precomputed && {
                    doubles: this.precomputed.doubles && {
                      step: this.precomputed.doubles.step,
                      points: this.precomputed.doubles.points.slice(1),
                    },
                    naf: this.precomputed.naf && {
                      wnd: this.precomputed.naf.wnd,
                      points: this.precomputed.naf.points.slice(1),
                    },
                  },
                ]
              : [this.x, this.y]
          }),
          (Point.fromJSON = function fromJSON(curve, obj, red) {
            'string' == typeof obj && (obj = JSON.parse(obj))
            var res = curve.point(obj[0], obj[1], red)
            if (!obj[2]) return res
            function obj2point(obj) {
              return curve.point(obj[0], obj[1], red)
            }
            var pre = obj[2]
            return (
              (res.precomputed = {
                beta: null,
                doubles: pre.doubles && {
                  step: pre.doubles.step,
                  points: [res].concat(pre.doubles.points.map(obj2point)),
                },
                naf: pre.naf && {
                  wnd: pre.naf.wnd,
                  points: [res].concat(pre.naf.points.map(obj2point)),
                },
              }),
              res
            )
          }),
          (Point.prototype.inspect = function inspect() {
            return this.isInfinity()
              ? '<EC Point Infinity>'
              : '<EC Point x: ' +
                  this.x.fromRed().toString(16, 2) +
                  ' y: ' +
                  this.y.fromRed().toString(16, 2) +
                  '>'
          }),
          (Point.prototype.isInfinity = function isInfinity() {
            return this.inf
          }),
          (Point.prototype.add = function add(p) {
            if (this.inf) return p
            if (p.inf) return this
            if (this.eq(p)) return this.dbl()
            if (this.neg().eq(p)) return this.curve.point(null, null)
            if (0 === this.x.cmp(p.x)) return this.curve.point(null, null)
            var c = this.y.redSub(p.y)
            0 !== c.cmpn(0) && (c = c.redMul(this.x.redSub(p.x).redInvm()))
            var nx = c.redSqr().redISub(this.x).redISub(p.x),
              ny = c.redMul(this.x.redSub(nx)).redISub(this.y)
            return this.curve.point(nx, ny)
          }),
          (Point.prototype.dbl = function dbl() {
            if (this.inf) return this
            var ys1 = this.y.redAdd(this.y)
            if (0 === ys1.cmpn(0)) return this.curve.point(null, null)
            var a = this.curve.a,
              x2 = this.x.redSqr(),
              dyinv = ys1.redInvm(),
              c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv),
              nx = c.redSqr().redISub(this.x.redAdd(this.x)),
              ny = c.redMul(this.x.redSub(nx)).redISub(this.y)
            return this.curve.point(nx, ny)
          }),
          (Point.prototype.getX = function getX() {
            return this.x.fromRed()
          }),
          (Point.prototype.getY = function getY() {
            return this.y.fromRed()
          }),
          (Point.prototype.mul = function mul(k) {
            return (
              (k = new BN(k, 16)),
              this.isInfinity()
                ? this
                : this._hasDoubles(k)
                  ? this.curve._fixedNafMul(this, k)
                  : this.curve.endo
                    ? this.curve._endoWnafMulAdd([this], [k])
                    : this.curve._wnafMul(this, k)
            )
          }),
          (Point.prototype.mulAdd = function mulAdd(k1, p2, k2) {
            var points = [this, p2],
              coeffs = [k1, k2]
            return this.curve.endo
              ? this.curve._endoWnafMulAdd(points, coeffs)
              : this.curve._wnafMulAdd(1, points, coeffs, 2)
          }),
          (Point.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
            var points = [this, p2],
              coeffs = [k1, k2]
            return this.curve.endo
              ? this.curve._endoWnafMulAdd(points, coeffs, !0)
              : this.curve._wnafMulAdd(1, points, coeffs, 2, !0)
          }),
          (Point.prototype.eq = function eq(p) {
            return (
              this === p ||
              (this.inf === p.inf &&
                (this.inf || (0 === this.x.cmp(p.x) && 0 === this.y.cmp(p.y))))
            )
          }),
          (Point.prototype.neg = function neg(_precompute) {
            if (this.inf) return this
            var res = this.curve.point(this.x, this.y.redNeg())
            if (_precompute && this.precomputed) {
              var pre = this.precomputed,
                negate = function (p) {
                  return p.neg()
                }
              res.precomputed = {
                naf: pre.naf && {
                  wnd: pre.naf.wnd,
                  points: pre.naf.points.map(negate),
                },
                doubles: pre.doubles && {
                  step: pre.doubles.step,
                  points: pre.doubles.points.map(negate),
                },
              }
            }
            return res
          }),
          (Point.prototype.toJ = function toJ() {
            return this.inf
              ? this.curve.jpoint(null, null, null)
              : this.curve.jpoint(this.x, this.y, this.curve.one)
          }),
          inherits(JPoint, Base.BasePoint),
          (ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
            return new JPoint(this, x, y, z)
          }),
          (JPoint.prototype.toP = function toP() {
            if (this.isInfinity()) return this.curve.point(null, null)
            var zinv = this.z.redInvm(),
              zinv2 = zinv.redSqr(),
              ax = this.x.redMul(zinv2),
              ay = this.y.redMul(zinv2).redMul(zinv)
            return this.curve.point(ax, ay)
          }),
          (JPoint.prototype.neg = function neg() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
          }),
          (JPoint.prototype.add = function add(p) {
            if (this.isInfinity()) return p
            if (p.isInfinity()) return this
            var pz2 = p.z.redSqr(),
              z2 = this.z.redSqr(),
              u1 = this.x.redMul(pz2),
              u2 = p.x.redMul(z2),
              s1 = this.y.redMul(pz2.redMul(p.z)),
              s2 = p.y.redMul(z2.redMul(this.z)),
              h = u1.redSub(u2),
              r = s1.redSub(s2)
            if (0 === h.cmpn(0))
              return 0 !== r.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl()
            var h2 = h.redSqr(),
              h3 = h2.redMul(h),
              v = u1.redMul(h2),
              nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v),
              ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3)),
              nz = this.z.redMul(p.z).redMul(h)
            return this.curve.jpoint(nx, ny, nz)
          }),
          (JPoint.prototype.mixedAdd = function mixedAdd(p) {
            if (this.isInfinity()) return p.toJ()
            if (p.isInfinity()) return this
            var z2 = this.z.redSqr(),
              u1 = this.x,
              u2 = p.x.redMul(z2),
              s1 = this.y,
              s2 = p.y.redMul(z2).redMul(this.z),
              h = u1.redSub(u2),
              r = s1.redSub(s2)
            if (0 === h.cmpn(0))
              return 0 !== r.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl()
            var h2 = h.redSqr(),
              h3 = h2.redMul(h),
              v = u1.redMul(h2),
              nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v),
              ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3)),
              nz = this.z.redMul(h)
            return this.curve.jpoint(nx, ny, nz)
          }),
          (JPoint.prototype.dblp = function dblp(pow) {
            if (0 === pow) return this
            if (this.isInfinity()) return this
            if (!pow) return this.dbl()
            var i
            if (this.curve.zeroA || this.curve.threeA) {
              var r = this
              for (i = 0; i < pow; i++) r = r.dbl()
              return r
            }
            var a = this.curve.a,
              tinv = this.curve.tinv,
              jx = this.x,
              jy = this.y,
              jz = this.z,
              jz4 = jz.redSqr().redSqr(),
              jyd = jy.redAdd(jy)
            for (i = 0; i < pow; i++) {
              var jx2 = jx.redSqr(),
                jyd2 = jyd.redSqr(),
                jyd4 = jyd2.redSqr(),
                c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4)),
                t1 = jx.redMul(jyd2),
                nx = c.redSqr().redISub(t1.redAdd(t1)),
                t2 = t1.redISub(nx),
                dny = c.redMul(t2)
              dny = dny.redIAdd(dny).redISub(jyd4)
              var nz = jyd.redMul(jz)
              i + 1 < pow && (jz4 = jz4.redMul(jyd4)),
                (jx = nx),
                (jz = nz),
                (jyd = dny)
            }
            return this.curve.jpoint(jx, jyd.redMul(tinv), jz)
          }),
          (JPoint.prototype.dbl = function dbl() {
            return this.isInfinity()
              ? this
              : this.curve.zeroA
                ? this._zeroDbl()
                : this.curve.threeA
                  ? this._threeDbl()
                  : this._dbl()
          }),
          (JPoint.prototype._zeroDbl = function _zeroDbl() {
            var nx, ny, nz
            if (this.zOne) {
              var xx = this.x.redSqr(),
                yy = this.y.redSqr(),
                yyyy = yy.redSqr(),
                s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy)
              s = s.redIAdd(s)
              var m = xx.redAdd(xx).redIAdd(xx),
                t = m.redSqr().redISub(s).redISub(s),
                yyyy8 = yyyy.redIAdd(yyyy)
              ;(yyyy8 = (yyyy8 = yyyy8.redIAdd(yyyy8)).redIAdd(yyyy8)),
                (nx = t),
                (ny = m.redMul(s.redISub(t)).redISub(yyyy8)),
                (nz = this.y.redAdd(this.y))
            } else {
              var a = this.x.redSqr(),
                b = this.y.redSqr(),
                c = b.redSqr(),
                d = this.x.redAdd(b).redSqr().redISub(a).redISub(c)
              d = d.redIAdd(d)
              var e = a.redAdd(a).redIAdd(a),
                f = e.redSqr(),
                c8 = c.redIAdd(c)
              ;(c8 = (c8 = c8.redIAdd(c8)).redIAdd(c8)),
                (nx = f.redISub(d).redISub(d)),
                (ny = e.redMul(d.redISub(nx)).redISub(c8)),
                (nz = (nz = this.y.redMul(this.z)).redIAdd(nz))
            }
            return this.curve.jpoint(nx, ny, nz)
          }),
          (JPoint.prototype._threeDbl = function _threeDbl() {
            var nx, ny, nz
            if (this.zOne) {
              var xx = this.x.redSqr(),
                yy = this.y.redSqr(),
                yyyy = yy.redSqr(),
                s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy)
              s = s.redIAdd(s)
              var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a),
                t = m.redSqr().redISub(s).redISub(s)
              nx = t
              var yyyy8 = yyyy.redIAdd(yyyy)
              ;(yyyy8 = (yyyy8 = yyyy8.redIAdd(yyyy8)).redIAdd(yyyy8)),
                (ny = m.redMul(s.redISub(t)).redISub(yyyy8)),
                (nz = this.y.redAdd(this.y))
            } else {
              var delta = this.z.redSqr(),
                gamma = this.y.redSqr(),
                beta = this.x.redMul(gamma),
                alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta))
              alpha = alpha.redAdd(alpha).redIAdd(alpha)
              var beta4 = beta.redIAdd(beta),
                beta8 = (beta4 = beta4.redIAdd(beta4)).redAdd(beta4)
              ;(nx = alpha.redSqr().redISub(beta8)),
                (nz = this.y
                  .redAdd(this.z)
                  .redSqr()
                  .redISub(gamma)
                  .redISub(delta))
              var ggamma8 = gamma.redSqr()
              ;(ggamma8 = (ggamma8 = (ggamma8 =
                ggamma8.redIAdd(ggamma8)).redIAdd(ggamma8)).redIAdd(ggamma8)),
                (ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8))
            }
            return this.curve.jpoint(nx, ny, nz)
          }),
          (JPoint.prototype._dbl = function _dbl() {
            var a = this.curve.a,
              jx = this.x,
              jy = this.y,
              jz = this.z,
              jz4 = jz.redSqr().redSqr(),
              jx2 = jx.redSqr(),
              jy2 = jy.redSqr(),
              c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4)),
              jxd4 = jx.redAdd(jx),
              t1 = (jxd4 = jxd4.redIAdd(jxd4)).redMul(jy2),
              nx = c.redSqr().redISub(t1.redAdd(t1)),
              t2 = t1.redISub(nx),
              jyd8 = jy2.redSqr()
            jyd8 = (jyd8 = (jyd8 = jyd8.redIAdd(jyd8)).redIAdd(jyd8)).redIAdd(
              jyd8
            )
            var ny = c.redMul(t2).redISub(jyd8),
              nz = jy.redAdd(jy).redMul(jz)
            return this.curve.jpoint(nx, ny, nz)
          }),
          (JPoint.prototype.trpl = function trpl() {
            if (!this.curve.zeroA) return this.dbl().add(this)
            var xx = this.x.redSqr(),
              yy = this.y.redSqr(),
              zz = this.z.redSqr(),
              yyyy = yy.redSqr(),
              m = xx.redAdd(xx).redIAdd(xx),
              mm = m.redSqr(),
              e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy),
              ee = (e = (e = (e = e.redIAdd(e)).redAdd(e).redIAdd(e)).redISub(
                mm
              )).redSqr(),
              t = yyyy.redIAdd(yyyy)
            t = (t = (t = t.redIAdd(t)).redIAdd(t)).redIAdd(t)
            var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t),
              yyu4 = yy.redMul(u)
            yyu4 = (yyu4 = yyu4.redIAdd(yyu4)).redIAdd(yyu4)
            var nx = this.x.redMul(ee).redISub(yyu4)
            nx = (nx = nx.redIAdd(nx)).redIAdd(nx)
            var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)))
            ny = (ny = (ny = ny.redIAdd(ny)).redIAdd(ny)).redIAdd(ny)
            var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee)
            return this.curve.jpoint(nx, ny, nz)
          }),
          (JPoint.prototype.mul = function mul(k, kbase) {
            return (k = new BN(k, kbase)), this.curve._wnafMul(this, k)
          }),
          (JPoint.prototype.eq = function eq(p) {
            if ('affine' === p.type) return this.eq(p.toJ())
            if (this === p) return !0
            var z2 = this.z.redSqr(),
              pz2 = p.z.redSqr()
            if (0 !== this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0))
              return !1
            var z3 = z2.redMul(this.z),
              pz3 = pz2.redMul(p.z)
            return 0 === this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0)
          }),
          (JPoint.prototype.eqXToP = function eqXToP(x) {
            var zs = this.z.redSqr(),
              rx = x.toRed(this.curve.red).redMul(zs)
            if (0 === this.x.cmp(rx)) return !0
            for (var xc = x.clone(), t = this.curve.redN.redMul(zs); ; ) {
              if ((xc.iadd(this.curve.n), xc.cmp(this.curve.p) >= 0)) return !1
              if ((rx.redIAdd(t), 0 === this.x.cmp(rx))) return !0
            }
          }),
          (JPoint.prototype.inspect = function inspect() {
            return this.isInfinity()
              ? '<EC JPoint Infinity>'
              : '<EC JPoint x: ' +
                  this.x.toString(16, 2) +
                  ' y: ' +
                  this.y.toString(16, 2) +
                  ' z: ' +
                  this.z.toString(16, 2) +
                  '>'
          }),
          (JPoint.prototype.isInfinity = function isInfinity() {
            return 0 === this.z.cmpn(0)
          })
      },
      './node_modules/elliptic/lib/elliptic/curves.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var pre,
          curves = exports,
          hash = __webpack_require__('./node_modules/hash.js/lib/hash.js'),
          curve = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curve/index.js'
          ),
          assert = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ).assert
        function PresetCurve(options) {
          'short' === options.type
            ? (this.curve = new curve.short(options))
            : 'edwards' === options.type
              ? (this.curve = new curve.edwards(options))
              : (this.curve = new curve.mont(options)),
            (this.g = this.curve.g),
            (this.n = this.curve.n),
            (this.hash = options.hash),
            assert(this.g.validate(), 'Invalid curve'),
            assert(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O')
        }
        function defineCurve(name, options) {
          Object.defineProperty(curves, name, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              var curve = new PresetCurve(options)
              return (
                Object.defineProperty(curves, name, {
                  configurable: !0,
                  enumerable: !0,
                  value: curve,
                }),
                curve
              )
            },
          })
        }
        ;(curves.PresetCurve = PresetCurve),
          defineCurve('p192', {
            type: 'short',
            prime: 'p192',
            p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
            a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
            b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
            n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
            hash: hash.sha256,
            gRed: !1,
            g: [
              '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
              '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
            ],
          }),
          defineCurve('p224', {
            type: 'short',
            prime: 'p224',
            p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
            a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
            b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
            n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
            hash: hash.sha256,
            gRed: !1,
            g: [
              'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
              'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
            ],
          }),
          defineCurve('p256', {
            type: 'short',
            prime: null,
            p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
            a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
            b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
            n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
            hash: hash.sha256,
            gRed: !1,
            g: [
              '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
              '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
            ],
          }),
          defineCurve('p384', {
            type: 'short',
            prime: null,
            p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
            a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
            b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
            n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
            hash: hash.sha384,
            gRed: !1,
            g: [
              'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
              '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
            ],
          }),
          defineCurve('p521', {
            type: 'short',
            prime: null,
            p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
            a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
            b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
            n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
            hash: hash.sha512,
            gRed: !1,
            g: [
              '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
              '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650',
            ],
          }),
          defineCurve('curve25519', {
            type: 'mont',
            prime: 'p25519',
            p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
            a: '76d06',
            b: '1',
            n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
            hash: hash.sha256,
            gRed: !1,
            g: ['9'],
          }),
          defineCurve('ed25519', {
            type: 'edwards',
            prime: 'p25519',
            p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
            a: '-1',
            c: '1',
            d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
            n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
            hash: hash.sha256,
            gRed: !1,
            g: [
              '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
              '6666666666666666666666666666666666666666666666666666666666666658',
            ],
          })
        try {
          pre = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js'
          )
        } catch (e) {
          pre = void 0
        }
        defineCurve('secp256k1', {
          type: 'short',
          prime: 'k256',
          p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
          a: '0',
          b: '7',
          n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
          h: '1',
          hash: hash.sha256,
          beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
          lambda:
            '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
          basis: [
            {
              a: '3086d221a7d46bcde86c90e49284eb15',
              b: '-e4437ed6010e88286f547fa90abfe4c3',
            },
            {
              a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
              b: '3086d221a7d46bcde86c90e49284eb15',
            },
          ],
          gRed: !1,
          g: [
            '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
            '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
            pre,
          ],
        })
      },
      './node_modules/elliptic/lib/elliptic/ec/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          HmacDRBG = __webpack_require__(
            './node_modules/hmac-drbg/lib/hmac-drbg.js'
          ),
          utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ),
          curves = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curves.js'
          ),
          rand = __webpack_require__('./node_modules/brorand/index.js'),
          assert = utils.assert,
          KeyPair = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/ec/key.js'
          ),
          Signature = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/ec/signature.js'
          )
        function EC(options) {
          if (!(this instanceof EC)) return new EC(options)
          'string' == typeof options &&
            (assert(
              Object.prototype.hasOwnProperty.call(curves, options),
              'Unknown curve ' + options
            ),
            (options = curves[options])),
            options instanceof curves.PresetCurve &&
              (options = { curve: options }),
            (this.curve = options.curve.curve),
            (this.n = this.curve.n),
            (this.nh = this.n.ushrn(1)),
            (this.g = this.curve.g),
            (this.g = options.curve.g),
            this.g.precompute(options.curve.n.bitLength() + 1),
            (this.hash = options.hash || options.curve.hash)
        }
        ;(module.exports = EC),
          (EC.prototype.keyPair = function keyPair(options) {
            return new KeyPair(this, options)
          }),
          (EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
            return KeyPair.fromPrivate(this, priv, enc)
          }),
          (EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
            return KeyPair.fromPublic(this, pub, enc)
          }),
          (EC.prototype.genKeyPair = function genKeyPair(options) {
            options || (options = {})
            for (
              var drbg = new HmacDRBG({
                  hash: this.hash,
                  pers: options.pers,
                  persEnc: options.persEnc || 'utf8',
                  entropy: options.entropy || rand(this.hash.hmacStrength),
                  entropyEnc: (options.entropy && options.entropyEnc) || 'utf8',
                  nonce: this.n.toArray(),
                }),
                bytes = this.n.byteLength(),
                ns2 = this.n.sub(new BN(2));
              ;

            ) {
              var priv = new BN(drbg.generate(bytes))
              if (!(priv.cmp(ns2) > 0))
                return priv.iaddn(1), this.keyFromPrivate(priv)
            }
          }),
          (EC.prototype._truncateToN = function _truncateToN(
            msg,
            truncOnly,
            bitLength
          ) {
            var byteLength
            if (BN.isBN(msg) || 'number' == typeof msg)
              byteLength = (msg = new BN(msg, 16)).byteLength()
            else if ('object' == typeof msg)
              (byteLength = msg.length), (msg = new BN(msg, 16))
            else {
              var str = msg.toString()
              ;(byteLength = (str.length + 1) >>> 1), (msg = new BN(str, 16))
            }
            'number' != typeof bitLength && (bitLength = 8 * byteLength)
            var delta = bitLength - this.n.bitLength()
            return (
              delta > 0 && (msg = msg.ushrn(delta)),
              !truncOnly && msg.cmp(this.n) >= 0 ? msg.sub(this.n) : msg
            )
          }),
          (EC.prototype.sign = function sign(msg, key, enc, options) {
            if (
              ('object' == typeof enc && ((options = enc), (enc = null)),
              options || (options = {}),
              'string' != typeof msg && 'number' != typeof msg && !BN.isBN(msg))
            ) {
              assert(
                'object' == typeof msg && msg && 'number' == typeof msg.length,
                'Expected message to be an array-like, a hex string, or a BN instance'
              ),
                assert(msg.length >>> 0 === msg.length)
              for (var i = 0; i < msg.length; i++)
                assert((255 & msg[i]) === msg[i])
            }
            ;(key = this.keyFromPrivate(key, enc)),
              (msg = this._truncateToN(msg, !1, options.msgBitLength)),
              assert(!msg.isNeg(), 'Can not sign a negative message')
            var bytes = this.n.byteLength(),
              bkey = key.getPrivate().toArray('be', bytes),
              nonce = msg.toArray('be', bytes)
            assert(new BN(nonce).eq(msg), 'Can not sign message')
            for (
              var drbg = new HmacDRBG({
                  hash: this.hash,
                  entropy: bkey,
                  nonce,
                  pers: options.pers,
                  persEnc: options.persEnc || 'utf8',
                }),
                ns1 = this.n.sub(new BN(1)),
                iter = 0;
              ;
              iter++
            ) {
              var k = options.k
                ? options.k(iter)
                : new BN(drbg.generate(this.n.byteLength()))
              if (
                !(
                  (k = this._truncateToN(k, !0)).cmpn(1) <= 0 || k.cmp(ns1) >= 0
                )
              ) {
                var kp = this.g.mul(k)
                if (!kp.isInfinity()) {
                  var kpX = kp.getX(),
                    r = kpX.umod(this.n)
                  if (0 !== r.cmpn(0)) {
                    var s = k
                      .invm(this.n)
                      .mul(r.mul(key.getPrivate()).iadd(msg))
                    if (0 !== (s = s.umod(this.n)).cmpn(0)) {
                      var recoveryParam =
                        (kp.getY().isOdd() ? 1 : 0) | (0 !== kpX.cmp(r) ? 2 : 0)
                      return (
                        options.canonical &&
                          s.cmp(this.nh) > 0 &&
                          ((s = this.n.sub(s)), (recoveryParam ^= 1)),
                        new Signature({ r, s, recoveryParam })
                      )
                    }
                  }
                }
              }
            }
          }),
          (EC.prototype.verify = function verify(
            msg,
            signature,
            key,
            enc,
            options
          ) {
            options || (options = {}),
              (msg = this._truncateToN(msg, !1, options.msgBitLength)),
              (key = this.keyFromPublic(key, enc))
            var r = (signature = new Signature(signature, 'hex')).r,
              s = signature.s
            if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0) return !1
            if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1
            var p,
              sinv = s.invm(this.n),
              u1 = sinv.mul(msg).umod(this.n),
              u2 = sinv.mul(r).umod(this.n)
            return this.curve._maxwellTrick
              ? !(p = this.g.jmulAdd(u1, key.getPublic(), u2)).isInfinity() &&
                  p.eqXToP(r)
              : !(p = this.g.mulAdd(u1, key.getPublic(), u2)).isInfinity() &&
                  0 === p.getX().umod(this.n).cmp(r)
          }),
          (EC.prototype.recoverPubKey = function (msg, signature, j, enc) {
            assert((3 & j) === j, 'The recovery param is more than two bits'),
              (signature = new Signature(signature, enc))
            var n = this.n,
              e = new BN(msg),
              r = signature.r,
              s = signature.s,
              isYOdd = 1 & j,
              isSecondKey = j >> 1
            if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
              throw new Error('Unable to find sencond key candinate')
            r = isSecondKey
              ? this.curve.pointFromX(r.add(this.curve.n), isYOdd)
              : this.curve.pointFromX(r, isYOdd)
            var rInv = signature.r.invm(n),
              s1 = n.sub(e).mul(rInv).umod(n),
              s2 = s.mul(rInv).umod(n)
            return this.g.mulAdd(s1, r, s2)
          }),
          (EC.prototype.getKeyRecoveryParam = function (e, signature, Q, enc) {
            if (
              null !== (signature = new Signature(signature, enc)).recoveryParam
            )
              return signature.recoveryParam
            for (var i = 0; i < 4; i++) {
              var Qprime
              try {
                Qprime = this.recoverPubKey(e, signature, i)
              } catch (e) {
                continue
              }
              if (Qprime.eq(Q)) return i
            }
            throw new Error('Unable to find valid recovery factor')
          })
      },
      './node_modules/elliptic/lib/elliptic/ec/key.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          assert = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ).assert
        function KeyPair(ec, options) {
          ;(this.ec = ec),
            (this.priv = null),
            (this.pub = null),
            options.priv && this._importPrivate(options.priv, options.privEnc),
            options.pub && this._importPublic(options.pub, options.pubEnc)
        }
        ;(module.exports = KeyPair),
          (KeyPair.fromPublic = function fromPublic(ec, pub, enc) {
            return pub instanceof KeyPair
              ? pub
              : new KeyPair(ec, { pub, pubEnc: enc })
          }),
          (KeyPair.fromPrivate = function fromPrivate(ec, priv, enc) {
            return priv instanceof KeyPair
              ? priv
              : new KeyPair(ec, { priv, privEnc: enc })
          }),
          (KeyPair.prototype.validate = function validate() {
            var pub = this.getPublic()
            return pub.isInfinity()
              ? { result: !1, reason: 'Invalid public key' }
              : pub.validate()
                ? pub.mul(this.ec.curve.n).isInfinity()
                  ? { result: !0, reason: null }
                  : { result: !1, reason: 'Public key * N != O' }
                : { result: !1, reason: 'Public key is not a point' }
          }),
          (KeyPair.prototype.getPublic = function getPublic(compact, enc) {
            return (
              'string' == typeof compact && ((enc = compact), (compact = null)),
              this.pub || (this.pub = this.ec.g.mul(this.priv)),
              enc ? this.pub.encode(enc, compact) : this.pub
            )
          }),
          (KeyPair.prototype.getPrivate = function getPrivate(enc) {
            return 'hex' === enc ? this.priv.toString(16, 2) : this.priv
          }),
          (KeyPair.prototype._importPrivate = function _importPrivate(
            key,
            enc
          ) {
            ;(this.priv = new BN(key, enc || 16)),
              (this.priv = this.priv.umod(this.ec.curve.n))
          }),
          (KeyPair.prototype._importPublic = function _importPublic(key, enc) {
            if (key.x || key.y)
              return (
                'mont' === this.ec.curve.type
                  ? assert(key.x, 'Need x coordinate')
                  : ('short' !== this.ec.curve.type &&
                      'edwards' !== this.ec.curve.type) ||
                    assert(key.x && key.y, 'Need both x and y coordinate'),
                void (this.pub = this.ec.curve.point(key.x, key.y))
              )
            this.pub = this.ec.curve.decodePoint(key, enc)
          }),
          (KeyPair.prototype.derive = function derive(pub) {
            return (
              pub.validate() ||
                assert(pub.validate(), 'public point not validated'),
              pub.mul(this.priv).getX()
            )
          }),
          (KeyPair.prototype.sign = function sign(msg, enc, options) {
            return this.ec.sign(msg, this, enc, options)
          }),
          (KeyPair.prototype.verify = function verify(msg, signature, options) {
            return this.ec.verify(msg, signature, this, void 0, options)
          }),
          (KeyPair.prototype.inspect = function inspect() {
            return (
              '<Key priv: ' +
              (this.priv && this.priv.toString(16, 2)) +
              ' pub: ' +
              (this.pub && this.pub.inspect()) +
              ' >'
            )
          })
      },
      './node_modules/elliptic/lib/elliptic/ec/signature.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ),
          assert = utils.assert
        function Signature(options, enc) {
          if (options instanceof Signature) return options
          this._importDER(options, enc) ||
            (assert(options.r && options.s, 'Signature without r or s'),
            (this.r = new BN(options.r, 16)),
            (this.s = new BN(options.s, 16)),
            void 0 === options.recoveryParam
              ? (this.recoveryParam = null)
              : (this.recoveryParam = options.recoveryParam))
        }
        function Position() {
          this.place = 0
        }
        function getLength(buf, p) {
          var initial = buf[p.place++]
          if (!(128 & initial)) return initial
          var octetLen = 15 & initial
          if (0 === octetLen || octetLen > 4) return !1
          if (0 === buf[p.place]) return !1
          for (var val = 0, i = 0, off = p.place; i < octetLen; i++, off++)
            (val <<= 8), (val |= buf[off]), (val >>>= 0)
          return !(val <= 127) && ((p.place = off), val)
        }
        function rmPadding(buf) {
          for (
            var i = 0, len = buf.length - 1;
            !buf[i] && !(128 & buf[i + 1]) && i < len;

          )
            i++
          return 0 === i ? buf : buf.slice(i)
        }
        function constructLength(arr, len) {
          if (len < 128) arr.push(len)
          else {
            var octets = 1 + ((Math.log(len) / Math.LN2) >>> 3)
            for (arr.push(128 | octets); --octets; )
              arr.push((len >>> (octets << 3)) & 255)
            arr.push(len)
          }
        }
        ;(module.exports = Signature),
          (Signature.prototype._importDER = function _importDER(data, enc) {
            data = utils.toArray(data, enc)
            var p = new Position()
            if (48 !== data[p.place++]) return !1
            var len = getLength(data, p)
            if (!1 === len) return !1
            if (len + p.place !== data.length) return !1
            if (2 !== data[p.place++]) return !1
            var rlen = getLength(data, p)
            if (!1 === rlen) return !1
            if (128 & data[p.place]) return !1
            var r = data.slice(p.place, rlen + p.place)
            if (((p.place += rlen), 2 !== data[p.place++])) return !1
            var slen = getLength(data, p)
            if (!1 === slen) return !1
            if (data.length !== slen + p.place) return !1
            if (128 & data[p.place]) return !1
            var s = data.slice(p.place, slen + p.place)
            if (0 === r[0]) {
              if (!(128 & r[1])) return !1
              r = r.slice(1)
            }
            if (0 === s[0]) {
              if (!(128 & s[1])) return !1
              s = s.slice(1)
            }
            return (
              (this.r = new BN(r)),
              (this.s = new BN(s)),
              (this.recoveryParam = null),
              !0
            )
          }),
          (Signature.prototype.toDER = function toDER(enc) {
            var r = this.r.toArray(),
              s = this.s.toArray()
            for (
              128 & r[0] && (r = [0].concat(r)),
                128 & s[0] && (s = [0].concat(s)),
                r = rmPadding(r),
                s = rmPadding(s);
              !(s[0] || 128 & s[1]);

            )
              s = s.slice(1)
            var arr = [2]
            constructLength(arr, r.length),
              (arr = arr.concat(r)).push(2),
              constructLength(arr, s.length)
            var backHalf = arr.concat(s),
              res = [48]
            return (
              constructLength(res, backHalf.length),
              (res = res.concat(backHalf)),
              utils.encode(res, enc)
            )
          })
      },
      './node_modules/elliptic/lib/elliptic/eddsa/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var hash = __webpack_require__('./node_modules/hash.js/lib/hash.js'),
          curves = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/curves.js'
          ),
          utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ),
          assert = utils.assert,
          parseBytes = utils.parseBytes,
          KeyPair = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/eddsa/key.js'
          ),
          Signature = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/eddsa/signature.js'
          )
        function EDDSA(curve) {
          if (
            (assert('ed25519' === curve, 'only tested with ed25519 so far'),
            !(this instanceof EDDSA))
          )
            return new EDDSA(curve)
          ;(curve = curves[curve].curve),
            (this.curve = curve),
            (this.g = curve.g),
            this.g.precompute(curve.n.bitLength() + 1),
            (this.pointClass = curve.point().constructor),
            (this.encodingLength = Math.ceil(curve.n.bitLength() / 8)),
            (this.hash = hash.sha512)
        }
        ;(module.exports = EDDSA),
          (EDDSA.prototype.sign = function sign(message, secret) {
            message = parseBytes(message)
            var key = this.keyFromSecret(secret),
              r = this.hashInt(key.messagePrefix(), message),
              R = this.g.mul(r),
              Rencoded = this.encodePoint(R),
              s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(
                key.priv()
              ),
              S = r.add(s_).umod(this.curve.n)
            return this.makeSignature({ R, S, Rencoded })
          }),
          (EDDSA.prototype.verify = function verify(message, sig, pub) {
            if (
              ((message = parseBytes(message)),
              (sig = this.makeSignature(sig)).S().gte(sig.eddsa.curve.n) ||
                sig.S().isNeg())
            )
              return !1
            var key = this.keyFromPublic(pub),
              h = this.hashInt(sig.Rencoded(), key.pubBytes(), message),
              SG = this.g.mul(sig.S())
            return sig.R().add(key.pub().mul(h)).eq(SG)
          }),
          (EDDSA.prototype.hashInt = function hashInt() {
            for (var hash = this.hash(), i = 0; i < arguments.length; i++)
              hash.update(arguments[i])
            return utils.intFromLE(hash.digest()).umod(this.curve.n)
          }),
          (EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
            return KeyPair.fromPublic(this, pub)
          }),
          (EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
            return KeyPair.fromSecret(this, secret)
          }),
          (EDDSA.prototype.makeSignature = function makeSignature(sig) {
            return sig instanceof Signature ? sig : new Signature(this, sig)
          }),
          (EDDSA.prototype.encodePoint = function encodePoint(point) {
            var enc = point.getY().toArray('le', this.encodingLength)
            return (
              (enc[this.encodingLength - 1] |= point.getX().isOdd() ? 128 : 0),
              enc
            )
          }),
          (EDDSA.prototype.decodePoint = function decodePoint(bytes) {
            var lastIx = (bytes = utils.parseBytes(bytes)).length - 1,
              normed = bytes.slice(0, lastIx).concat(-129 & bytes[lastIx]),
              xIsOdd = !!(128 & bytes[lastIx]),
              y = utils.intFromLE(normed)
            return this.curve.pointFromY(y, xIsOdd)
          }),
          (EDDSA.prototype.encodeInt = function encodeInt(num) {
            return num.toArray('le', this.encodingLength)
          }),
          (EDDSA.prototype.decodeInt = function decodeInt(bytes) {
            return utils.intFromLE(bytes)
          }),
          (EDDSA.prototype.isPoint = function isPoint(val) {
            return val instanceof this.pointClass
          })
      },
      './node_modules/elliptic/lib/elliptic/eddsa/key.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ),
          assert = utils.assert,
          parseBytes = utils.parseBytes,
          cachedProperty = utils.cachedProperty
        function KeyPair(eddsa, params) {
          ;(this.eddsa = eddsa),
            (this._secret = parseBytes(params.secret)),
            eddsa.isPoint(params.pub)
              ? (this._pub = params.pub)
              : (this._pubBytes = parseBytes(params.pub))
        }
        ;(KeyPair.fromPublic = function fromPublic(eddsa, pub) {
          return pub instanceof KeyPair ? pub : new KeyPair(eddsa, { pub })
        }),
          (KeyPair.fromSecret = function fromSecret(eddsa, secret) {
            return secret instanceof KeyPair
              ? secret
              : new KeyPair(eddsa, { secret })
          }),
          (KeyPair.prototype.secret = function secret() {
            return this._secret
          }),
          cachedProperty(KeyPair, 'pubBytes', function pubBytes() {
            return this.eddsa.encodePoint(this.pub())
          }),
          cachedProperty(KeyPair, 'pub', function pub() {
            return this._pubBytes
              ? this.eddsa.decodePoint(this._pubBytes)
              : this.eddsa.g.mul(this.priv())
          }),
          cachedProperty(KeyPair, 'privBytes', function privBytes() {
            var eddsa = this.eddsa,
              hash = this.hash(),
              lastIx = eddsa.encodingLength - 1,
              a = hash.slice(0, eddsa.encodingLength)
            return (a[0] &= 248), (a[lastIx] &= 127), (a[lastIx] |= 64), a
          }),
          cachedProperty(KeyPair, 'priv', function priv() {
            return this.eddsa.decodeInt(this.privBytes())
          }),
          cachedProperty(KeyPair, 'hash', function hash() {
            return this.eddsa.hash().update(this.secret()).digest()
          }),
          cachedProperty(KeyPair, 'messagePrefix', function messagePrefix() {
            return this.hash().slice(this.eddsa.encodingLength)
          }),
          (KeyPair.prototype.sign = function sign(message) {
            return (
              assert(this._secret, 'KeyPair can only verify'),
              this.eddsa.sign(message, this)
            )
          }),
          (KeyPair.prototype.verify = function verify(message, sig) {
            return this.eddsa.verify(message, sig, this)
          }),
          (KeyPair.prototype.getSecret = function getSecret(enc) {
            return (
              assert(this._secret, 'KeyPair is public only'),
              utils.encode(this.secret(), enc)
            )
          }),
          (KeyPair.prototype.getPublic = function getPublic(enc) {
            return utils.encode(this.pubBytes(), enc)
          }),
          (module.exports = KeyPair)
      },
      './node_modules/elliptic/lib/elliptic/eddsa/signature.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          utils = __webpack_require__(
            './node_modules/elliptic/lib/elliptic/utils.js'
          ),
          assert = utils.assert,
          cachedProperty = utils.cachedProperty,
          parseBytes = utils.parseBytes
        function Signature(eddsa, sig) {
          ;(this.eddsa = eddsa),
            'object' != typeof sig && (sig = parseBytes(sig)),
            Array.isArray(sig) &&
              (assert(
                sig.length === 2 * eddsa.encodingLength,
                'Signature has invalid size'
              ),
              (sig = {
                R: sig.slice(0, eddsa.encodingLength),
                S: sig.slice(eddsa.encodingLength),
              })),
            assert(sig.R && sig.S, 'Signature without R or S'),
            eddsa.isPoint(sig.R) && (this._R = sig.R),
            sig.S instanceof BN && (this._S = sig.S),
            (this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded),
            (this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded)
        }
        cachedProperty(Signature, 'S', function S() {
          return this.eddsa.decodeInt(this.Sencoded())
        }),
          cachedProperty(Signature, 'R', function R() {
            return this.eddsa.decodePoint(this.Rencoded())
          }),
          cachedProperty(Signature, 'Rencoded', function Rencoded() {
            return this.eddsa.encodePoint(this.R())
          }),
          cachedProperty(Signature, 'Sencoded', function Sencoded() {
            return this.eddsa.encodeInt(this.S())
          }),
          (Signature.prototype.toBytes = function toBytes() {
            return this.Rencoded().concat(this.Sencoded())
          }),
          (Signature.prototype.toHex = function toHex() {
            return utils.encode(this.toBytes(), 'hex').toUpperCase()
          }),
          (module.exports = Signature)
      },
      './node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js':
        module => {
          module.exports = {
            doubles: {
              step: 4,
              points: [
                [
                  'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
                  'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821',
                ],
                [
                  '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
                  '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf',
                ],
                [
                  '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
                  'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695',
                ],
                [
                  '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
                  '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9',
                ],
                [
                  '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
                  '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36',
                ],
                [
                  '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
                  '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f',
                ],
                [
                  'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
                  '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999',
                ],
                [
                  '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
                  'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09',
                ],
                [
                  'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
                  '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d',
                ],
                [
                  'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
                  'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088',
                ],
                [
                  'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
                  '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d',
                ],
                [
                  '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
                  '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8',
                ],
                [
                  '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
                  '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a',
                ],
                [
                  '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
                  '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453',
                ],
                [
                  '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
                  '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160',
                ],
                [
                  '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
                  '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0',
                ],
                [
                  '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
                  '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6',
                ],
                [
                  '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
                  '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589',
                ],
                [
                  '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
                  'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17',
                ],
                [
                  'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
                  '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda',
                ],
                [
                  'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
                  '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd',
                ],
                [
                  '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
                  '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2',
                ],
                [
                  '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
                  '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6',
                ],
                [
                  'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
                  '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f',
                ],
                [
                  '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
                  'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01',
                ],
                [
                  'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
                  '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3',
                ],
                [
                  'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
                  'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f',
                ],
                [
                  'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
                  '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7',
                ],
                [
                  'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
                  'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78',
                ],
                [
                  'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
                  '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1',
                ],
                [
                  '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
                  'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150',
                ],
                [
                  '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
                  '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82',
                ],
                [
                  'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
                  '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc',
                ],
                [
                  '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
                  'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b',
                ],
                [
                  'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
                  '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51',
                ],
                [
                  'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
                  '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45',
                ],
                [
                  'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
                  'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120',
                ],
                [
                  '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
                  '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84',
                ],
                [
                  '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
                  '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d',
                ],
                [
                  '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
                  'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d',
                ],
                [
                  '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
                  '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8',
                ],
                [
                  'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
                  '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8',
                ],
                [
                  '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
                  '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac',
                ],
                [
                  '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
                  'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f',
                ],
                [
                  '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
                  '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962',
                ],
                [
                  'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
                  '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907',
                ],
                [
                  '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
                  'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec',
                ],
                [
                  'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
                  'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d',
                ],
                [
                  'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
                  '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414',
                ],
                [
                  '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
                  'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd',
                ],
                [
                  '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
                  'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0',
                ],
                [
                  'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
                  '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811',
                ],
                [
                  'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
                  '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1',
                ],
                [
                  'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
                  '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c',
                ],
                [
                  '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
                  'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73',
                ],
                [
                  '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
                  '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd',
                ],
                [
                  'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
                  'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405',
                ],
                [
                  '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
                  'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589',
                ],
                [
                  '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
                  '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e',
                ],
                [
                  '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
                  '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27',
                ],
                [
                  'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
                  'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1',
                ],
                [
                  '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
                  '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482',
                ],
                [
                  '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
                  '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945',
                ],
                [
                  'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
                  '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573',
                ],
                [
                  'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
                  'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82',
                ],
              ],
            },
            naf: {
              wnd: 7,
              points: [
                [
                  'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
                  '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672',
                ],
                [
                  '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
                  'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6',
                ],
                [
                  '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
                  '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da',
                ],
                [
                  'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
                  'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37',
                ],
                [
                  '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
                  'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b',
                ],
                [
                  'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
                  'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81',
                ],
                [
                  'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
                  '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58',
                ],
                [
                  'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
                  '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77',
                ],
                [
                  '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
                  '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a',
                ],
                [
                  '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
                  '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c',
                ],
                [
                  '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
                  '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67',
                ],
                [
                  '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
                  '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402',
                ],
                [
                  'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
                  'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55',
                ],
                [
                  'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
                  '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482',
                ],
                [
                  '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
                  'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82',
                ],
                [
                  '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
                  'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396',
                ],
                [
                  '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
                  '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49',
                ],
                [
                  '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
                  '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf',
                ],
                [
                  '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
                  '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a',
                ],
                [
                  '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
                  'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7',
                ],
                [
                  'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
                  'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933',
                ],
                [
                  '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
                  '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a',
                ],
                [
                  '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
                  '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6',
                ],
                [
                  'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
                  'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37',
                ],
                [
                  '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
                  '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e',
                ],
                [
                  'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
                  'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6',
                ],
                [
                  'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
                  'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476',
                ],
                [
                  '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
                  '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40',
                ],
                [
                  '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
                  '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61',
                ],
                [
                  '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
                  '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683',
                ],
                [
                  'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
                  '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5',
                ],
                [
                  '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
                  '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b',
                ],
                [
                  'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
                  '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417',
                ],
                [
                  '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
                  'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868',
                ],
                [
                  '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
                  'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a',
                ],
                [
                  'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
                  'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6',
                ],
                [
                  '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
                  '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996',
                ],
                [
                  '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
                  'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e',
                ],
                [
                  'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
                  'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d',
                ],
                [
                  '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
                  '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2',
                ],
                [
                  '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
                  'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e',
                ],
                [
                  '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
                  '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437',
                ],
                [
                  '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
                  'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311',
                ],
                [
                  'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
                  '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4',
                ],
                [
                  '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
                  '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575',
                ],
                [
                  '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
                  'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d',
                ],
                [
                  '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
                  'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d',
                ],
                [
                  'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
                  'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629',
                ],
                [
                  'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
                  'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06',
                ],
                [
                  '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
                  '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374',
                ],
                [
                  '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
                  '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee',
                ],
                [
                  'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
                  '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1',
                ],
                [
                  'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
                  'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b',
                ],
                [
                  '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
                  '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661',
                ],
                [
                  '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
                  '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6',
                ],
                [
                  'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
                  '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e',
                ],
                [
                  '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
                  '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d',
                ],
                [
                  'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
                  'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc',
                ],
                [
                  '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
                  'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4',
                ],
                [
                  '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
                  '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c',
                ],
                [
                  'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
                  '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b',
                ],
                [
                  'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
                  '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913',
                ],
                [
                  '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
                  '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154',
                ],
                [
                  '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
                  '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865',
                ],
                [
                  '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
                  'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc',
                ],
                [
                  '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
                  'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224',
                ],
                [
                  '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
                  '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e',
                ],
                [
                  '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
                  '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6',
                ],
                [
                  '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
                  '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511',
                ],
                [
                  '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
                  'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b',
                ],
                [
                  'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
                  'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2',
                ],
                [
                  '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
                  'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c',
                ],
                [
                  'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
                  '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3',
                ],
                [
                  'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
                  '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d',
                ],
                [
                  'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
                  '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700',
                ],
                [
                  'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
                  '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4',
                ],
                [
                  '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
                  'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196',
                ],
                [
                  '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
                  '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4',
                ],
                [
                  '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
                  'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257',
                ],
                [
                  'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
                  'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13',
                ],
                [
                  'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
                  '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096',
                ],
                [
                  'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
                  'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38',
                ],
                [
                  'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
                  '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f',
                ],
                [
                  '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
                  '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448',
                ],
                [
                  'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
                  '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a',
                ],
                [
                  'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
                  '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4',
                ],
                [
                  '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
                  '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437',
                ],
                [
                  '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
                  'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7',
                ],
                [
                  'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
                  '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d',
                ],
                [
                  'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
                  '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a',
                ],
                [
                  'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
                  '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54',
                ],
                [
                  '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
                  '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77',
                ],
                [
                  'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
                  'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517',
                ],
                [
                  '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
                  'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10',
                ],
                [
                  'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
                  'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125',
                ],
                [
                  'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
                  '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e',
                ],
                [
                  '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
                  'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1',
                ],
                [
                  'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
                  '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2',
                ],
                [
                  'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
                  '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423',
                ],
                [
                  'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
                  '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8',
                ],
                [
                  '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
                  'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758',
                ],
                [
                  '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
                  'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375',
                ],
                [
                  'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
                  '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d',
                ],
                [
                  '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
                  'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec',
                ],
                [
                  '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
                  '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0',
                ],
                [
                  '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
                  'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c',
                ],
                [
                  'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
                  'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4',
                ],
                [
                  '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
                  'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f',
                ],
                [
                  '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
                  '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649',
                ],
                [
                  '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
                  'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826',
                ],
                [
                  '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
                  '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5',
                ],
                [
                  'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
                  'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87',
                ],
                [
                  '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
                  '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b',
                ],
                [
                  'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
                  '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc',
                ],
                [
                  '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
                  '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c',
                ],
                [
                  'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
                  'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f',
                ],
                [
                  'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
                  '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a',
                ],
                [
                  'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
                  'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46',
                ],
                [
                  '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
                  'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f',
                ],
                [
                  '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
                  '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03',
                ],
                [
                  '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
                  'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08',
                ],
                [
                  '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
                  '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8',
                ],
                [
                  '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
                  '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373',
                ],
                [
                  '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
                  'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3',
                ],
                [
                  '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
                  '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8',
                ],
                [
                  '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
                  '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1',
                ],
                [
                  '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
                  '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9',
                ],
              ],
            },
          }
        },
      './node_modules/elliptic/lib/elliptic/utils.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = exports,
          BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          minAssert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          ),
          minUtils = __webpack_require__(
            './node_modules/minimalistic-crypto-utils/lib/utils.js'
          )
        ;(utils.assert = minAssert),
          (utils.toArray = minUtils.toArray),
          (utils.zero2 = minUtils.zero2),
          (utils.toHex = minUtils.toHex),
          (utils.encode = minUtils.encode),
          (utils.getNAF = function getNAF(num, w, bits) {
            var i,
              naf = new Array(Math.max(num.bitLength(), bits) + 1)
            for (i = 0; i < naf.length; i += 1) naf[i] = 0
            var ws = 1 << (w + 1),
              k = num.clone()
            for (i = 0; i < naf.length; i++) {
              var z,
                mod = k.andln(ws - 1)
              k.isOdd()
                ? ((z = mod > (ws >> 1) - 1 ? (ws >> 1) - mod : mod),
                  k.isubn(z))
                : (z = 0),
                (naf[i] = z),
                k.iushrn(1)
            }
            return naf
          }),
          (utils.getJSF = function getJSF(k1, k2) {
            var jsf = [[], []]
            ;(k1 = k1.clone()), (k2 = k2.clone())
            for (
              var m8, d1 = 0, d2 = 0;
              k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0;

            ) {
              var u1,
                u2,
                m14 = (k1.andln(3) + d1) & 3,
                m24 = (k2.andln(3) + d2) & 3
              3 === m14 && (m14 = -1),
                3 === m24 && (m24 = -1),
                (u1 =
                  1 & m14
                    ? (3 !== (m8 = (k1.andln(7) + d1) & 7) && 5 !== m8) ||
                      2 !== m24
                      ? m14
                      : -m14
                    : 0),
                jsf[0].push(u1),
                (u2 =
                  1 & m24
                    ? (3 !== (m8 = (k2.andln(7) + d2) & 7) && 5 !== m8) ||
                      2 !== m14
                      ? m24
                      : -m24
                    : 0),
                jsf[1].push(u2),
                2 * d1 === u1 + 1 && (d1 = 1 - d1),
                2 * d2 === u2 + 1 && (d2 = 1 - d2),
                k1.iushrn(1),
                k2.iushrn(1)
            }
            return jsf
          }),
          (utils.cachedProperty = function cachedProperty(obj, name, computer) {
            var key = '_' + name
            obj.prototype[name] = function cachedProperty() {
              return void 0 !== this[key]
                ? this[key]
                : (this[key] = computer.call(this))
            }
          }),
          (utils.parseBytes = function parseBytes(bytes) {
            return 'string' == typeof bytes
              ? utils.toArray(bytes, 'hex')
              : bytes
          }),
          (utils.intFromLE = function intFromLE(bytes) {
            return new BN(bytes, 'hex', 'le')
          })
      },
      './node_modules/evp_bytestokey/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          MD5 = __webpack_require__('./node_modules/md5.js/index.js')
        module.exports = function EVP_BytesToKey(
          password,
          salt,
          keyBits,
          ivLen
        ) {
          if (
            (Buffer.isBuffer(password) ||
              (password = Buffer.from(password, 'binary')),
            salt &&
              (Buffer.isBuffer(salt) || (salt = Buffer.from(salt, 'binary')),
              8 !== salt.length))
          )
            throw new RangeError('salt should be Buffer with 8 byte length')
          for (
            var keyLen = keyBits / 8,
              key = Buffer.alloc(keyLen),
              iv = Buffer.alloc(ivLen || 0),
              tmp = Buffer.alloc(0);
            keyLen > 0 || ivLen > 0;

          ) {
            var hash = new MD5()
            hash.update(tmp),
              hash.update(password),
              salt && hash.update(salt),
              (tmp = hash.digest())
            var used = 0
            if (keyLen > 0) {
              var keyStart = key.length - keyLen
              ;(used = Math.min(keyLen, tmp.length)),
                tmp.copy(key, keyStart, 0, used),
                (keyLen -= used)
            }
            if (used < tmp.length && ivLen > 0) {
              var ivStart = iv.length - ivLen,
                length = Math.min(ivLen, tmp.length - used)
              tmp.copy(iv, ivStart, used, used + length), (ivLen -= length)
            }
          }
          return tmp.fill(0), { key, iv }
        }
      },
      './node_modules/hash.js/lib/hash.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var hash = exports
        ;(hash.utils = __webpack_require__(
          './node_modules/hash.js/lib/hash/utils.js'
        )),
          (hash.common = __webpack_require__(
            './node_modules/hash.js/lib/hash/common.js'
          )),
          (hash.sha = __webpack_require__(
            './node_modules/hash.js/lib/hash/sha.js'
          )),
          (hash.ripemd = __webpack_require__(
            './node_modules/hash.js/lib/hash/ripemd.js'
          )),
          (hash.hmac = __webpack_require__(
            './node_modules/hash.js/lib/hash/hmac.js'
          )),
          (hash.sha1 = hash.sha.sha1),
          (hash.sha256 = hash.sha.sha256),
          (hash.sha224 = hash.sha.sha224),
          (hash.sha384 = hash.sha.sha384),
          (hash.sha512 = hash.sha.sha512),
          (hash.ripemd160 = hash.ripemd.ripemd160)
      },
      './node_modules/hash.js/lib/hash/common.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/hash.js/lib/hash/utils.js'
          ),
          assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          )
        function BlockHash() {
          ;(this.pending = null),
            (this.pendingTotal = 0),
            (this.blockSize = this.constructor.blockSize),
            (this.outSize = this.constructor.outSize),
            (this.hmacStrength = this.constructor.hmacStrength),
            (this.padLength = this.constructor.padLength / 8),
            (this.endian = 'big'),
            (this._delta8 = this.blockSize / 8),
            (this._delta32 = this.blockSize / 32)
        }
        ;(exports.BlockHash = BlockHash),
          (BlockHash.prototype.update = function update(msg, enc) {
            if (
              ((msg = utils.toArray(msg, enc)),
              this.pending
                ? (this.pending = this.pending.concat(msg))
                : (this.pending = msg),
              (this.pendingTotal += msg.length),
              this.pending.length >= this._delta8)
            ) {
              var r = (msg = this.pending).length % this._delta8
              ;(this.pending = msg.slice(msg.length - r, msg.length)),
                0 === this.pending.length && (this.pending = null),
                (msg = utils.join32(msg, 0, msg.length - r, this.endian))
              for (var i = 0; i < msg.length; i += this._delta32)
                this._update(msg, i, i + this._delta32)
            }
            return this
          }),
          (BlockHash.prototype.digest = function digest(enc) {
            return (
              this.update(this._pad()),
              assert(null === this.pending),
              this._digest(enc)
            )
          }),
          (BlockHash.prototype._pad = function pad() {
            var len = this.pendingTotal,
              bytes = this._delta8,
              k = bytes - ((len + this.padLength) % bytes),
              res = new Array(k + this.padLength)
            res[0] = 128
            for (var i = 1; i < k; i++) res[i] = 0
            if (((len <<= 3), 'big' === this.endian)) {
              for (var t = 8; t < this.padLength; t++) res[i++] = 0
              ;(res[i++] = 0),
                (res[i++] = 0),
                (res[i++] = 0),
                (res[i++] = 0),
                (res[i++] = (len >>> 24) & 255),
                (res[i++] = (len >>> 16) & 255),
                (res[i++] = (len >>> 8) & 255),
                (res[i++] = 255 & len)
            } else
              for (
                res[i++] = 255 & len,
                  res[i++] = (len >>> 8) & 255,
                  res[i++] = (len >>> 16) & 255,
                  res[i++] = (len >>> 24) & 255,
                  res[i++] = 0,
                  res[i++] = 0,
                  res[i++] = 0,
                  res[i++] = 0,
                  t = 8;
                t < this.padLength;
                t++
              )
                res[i++] = 0
            return res
          })
      },
      './node_modules/hash.js/lib/hash/hmac.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/hash.js/lib/hash/utils.js'
          ),
          assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          )
        function Hmac(hash, key, enc) {
          if (!(this instanceof Hmac)) return new Hmac(hash, key, enc)
          ;(this.Hash = hash),
            (this.blockSize = hash.blockSize / 8),
            (this.outSize = hash.outSize / 8),
            (this.inner = null),
            (this.outer = null),
            this._init(utils.toArray(key, enc))
        }
        ;(module.exports = Hmac),
          (Hmac.prototype._init = function init(key) {
            key.length > this.blockSize &&
              (key = new this.Hash().update(key).digest()),
              assert(key.length <= this.blockSize)
            for (var i = key.length; i < this.blockSize; i++) key.push(0)
            for (i = 0; i < key.length; i++) key[i] ^= 54
            for (
              this.inner = new this.Hash().update(key), i = 0;
              i < key.length;
              i++
            )
              key[i] ^= 106
            this.outer = new this.Hash().update(key)
          }),
          (Hmac.prototype.update = function update(msg, enc) {
            return this.inner.update(msg, enc), this
          }),
          (Hmac.prototype.digest = function digest(enc) {
            return (
              this.outer.update(this.inner.digest()), this.outer.digest(enc)
            )
          })
      },
      './node_modules/hash.js/lib/hash/ripemd.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/hash.js/lib/hash/utils.js'
          ),
          common = __webpack_require__(
            './node_modules/hash.js/lib/hash/common.js'
          ),
          rotl32 = utils.rotl32,
          sum32 = utils.sum32,
          sum32_3 = utils.sum32_3,
          sum32_4 = utils.sum32_4,
          BlockHash = common.BlockHash
        function RIPEMD160() {
          if (!(this instanceof RIPEMD160)) return new RIPEMD160()
          BlockHash.call(this),
            (this.h = [
              1732584193, 4023233417, 2562383102, 271733878, 3285377520,
            ]),
            (this.endian = 'little')
        }
        function f(j, x, y, z) {
          return j <= 15
            ? x ^ y ^ z
            : j <= 31
              ? (x & y) | (~x & z)
              : j <= 47
                ? (x | ~y) ^ z
                : j <= 63
                  ? (x & z) | (y & ~z)
                  : x ^ (y | ~z)
        }
        function K(j) {
          return j <= 15
            ? 0
            : j <= 31
              ? 1518500249
              : j <= 47
                ? 1859775393
                : j <= 63
                  ? 2400959708
                  : 2840853838
        }
        function Kh(j) {
          return j <= 15
            ? 1352829926
            : j <= 31
              ? 1548603684
              : j <= 47
                ? 1836072691
                : j <= 63
                  ? 2053994217
                  : 0
        }
        utils.inherits(RIPEMD160, BlockHash),
          (exports.ripemd160 = RIPEMD160),
          (RIPEMD160.blockSize = 512),
          (RIPEMD160.outSize = 160),
          (RIPEMD160.hmacStrength = 192),
          (RIPEMD160.padLength = 64),
          (RIPEMD160.prototype._update = function update(msg, start) {
            for (
              var A = this.h[0],
                B = this.h[1],
                C = this.h[2],
                D = this.h[3],
                E = this.h[4],
                Ah = A,
                Bh = B,
                Ch = C,
                Dh = D,
                Eh = E,
                j = 0;
              j < 80;
              j++
            ) {
              var T = sum32(
                rotl32(
                  sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)),
                  s[j]
                ),
                E
              )
              ;(A = E),
                (E = D),
                (D = rotl32(C, 10)),
                (C = B),
                (B = T),
                (T = sum32(
                  rotl32(
                    sum32_4(
                      Ah,
                      f(79 - j, Bh, Ch, Dh),
                      msg[rh[j] + start],
                      Kh(j)
                    ),
                    sh[j]
                  ),
                  Eh
                )),
                (Ah = Eh),
                (Eh = Dh),
                (Dh = rotl32(Ch, 10)),
                (Ch = Bh),
                (Bh = T)
            }
            ;(T = sum32_3(this.h[1], C, Dh)),
              (this.h[1] = sum32_3(this.h[2], D, Eh)),
              (this.h[2] = sum32_3(this.h[3], E, Ah)),
              (this.h[3] = sum32_3(this.h[4], A, Bh)),
              (this.h[4] = sum32_3(this.h[0], B, Ch)),
              (this.h[0] = T)
          }),
          (RIPEMD160.prototype._digest = function digest(enc) {
            return 'hex' === enc
              ? utils.toHex32(this.h, 'little')
              : utils.split32(this.h, 'little')
          })
        var r = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1,
            10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1,
            2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15,
            14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
          ],
          rh = [
            5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7,
            0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9,
            11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13,
            9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
          ],
          s = [
            11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
            11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
            15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14,
            5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8,
            5, 6,
          ],
          sh = [
            8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15,
            7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6,
            14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9,
            12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13,
            11, 11,
          ]
      },
      './node_modules/hash.js/lib/hash/sha.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        ;(exports.sha1 = __webpack_require__(
          './node_modules/hash.js/lib/hash/sha/1.js'
        )),
          (exports.sha224 = __webpack_require__(
            './node_modules/hash.js/lib/hash/sha/224.js'
          )),
          (exports.sha256 = __webpack_require__(
            './node_modules/hash.js/lib/hash/sha/256.js'
          )),
          (exports.sha384 = __webpack_require__(
            './node_modules/hash.js/lib/hash/sha/384.js'
          )),
          (exports.sha512 = __webpack_require__(
            './node_modules/hash.js/lib/hash/sha/512.js'
          ))
      },
      './node_modules/hash.js/lib/hash/sha/1.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/hash.js/lib/hash/utils.js'
          ),
          common = __webpack_require__(
            './node_modules/hash.js/lib/hash/common.js'
          ),
          shaCommon = __webpack_require__(
            './node_modules/hash.js/lib/hash/sha/common.js'
          ),
          rotl32 = utils.rotl32,
          sum32 = utils.sum32,
          sum32_5 = utils.sum32_5,
          ft_1 = shaCommon.ft_1,
          BlockHash = common.BlockHash,
          sha1_K = [1518500249, 1859775393, 2400959708, 3395469782]
        function SHA1() {
          if (!(this instanceof SHA1)) return new SHA1()
          BlockHash.call(this),
            (this.h = [
              1732584193, 4023233417, 2562383102, 271733878, 3285377520,
            ]),
            (this.W = new Array(80))
        }
        utils.inherits(SHA1, BlockHash),
          (module.exports = SHA1),
          (SHA1.blockSize = 512),
          (SHA1.outSize = 160),
          (SHA1.hmacStrength = 80),
          (SHA1.padLength = 64),
          (SHA1.prototype._update = function _update(msg, start) {
            for (var W = this.W, i = 0; i < 16; i++) W[i] = msg[start + i]
            for (; i < W.length; i++)
              W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1)
            var a = this.h[0],
              b = this.h[1],
              c = this.h[2],
              d = this.h[3],
              e = this.h[4]
            for (i = 0; i < W.length; i++) {
              var s = ~~(i / 20),
                t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s])
              ;(e = d), (d = c), (c = rotl32(b, 30)), (b = a), (a = t)
            }
            ;(this.h[0] = sum32(this.h[0], a)),
              (this.h[1] = sum32(this.h[1], b)),
              (this.h[2] = sum32(this.h[2], c)),
              (this.h[3] = sum32(this.h[3], d)),
              (this.h[4] = sum32(this.h[4], e))
          }),
          (SHA1.prototype._digest = function digest(enc) {
            return 'hex' === enc
              ? utils.toHex32(this.h, 'big')
              : utils.split32(this.h, 'big')
          })
      },
      './node_modules/hash.js/lib/hash/sha/224.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/hash.js/lib/hash/utils.js'
          ),
          SHA256 = __webpack_require__(
            './node_modules/hash.js/lib/hash/sha/256.js'
          )
        function SHA224() {
          if (!(this instanceof SHA224)) return new SHA224()
          SHA256.call(this),
            (this.h = [
              3238371032, 914150663, 812702999, 4144912697, 4290775857,
              1750603025, 1694076839, 3204075428,
            ])
        }
        utils.inherits(SHA224, SHA256),
          (module.exports = SHA224),
          (SHA224.blockSize = 512),
          (SHA224.outSize = 224),
          (SHA224.hmacStrength = 192),
          (SHA224.padLength = 64),
          (SHA224.prototype._digest = function digest(enc) {
            return 'hex' === enc
              ? utils.toHex32(this.h.slice(0, 7), 'big')
              : utils.split32(this.h.slice(0, 7), 'big')
          })
      },
      './node_modules/hash.js/lib/hash/sha/256.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/hash.js/lib/hash/utils.js'
          ),
          common = __webpack_require__(
            './node_modules/hash.js/lib/hash/common.js'
          ),
          shaCommon = __webpack_require__(
            './node_modules/hash.js/lib/hash/sha/common.js'
          ),
          assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          ),
          sum32 = utils.sum32,
          sum32_4 = utils.sum32_4,
          sum32_5 = utils.sum32_5,
          ch32 = shaCommon.ch32,
          maj32 = shaCommon.maj32,
          s0_256 = shaCommon.s0_256,
          s1_256 = shaCommon.s1_256,
          g0_256 = shaCommon.g0_256,
          g1_256 = shaCommon.g1_256,
          BlockHash = common.BlockHash,
          sha256_K = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ]
        function SHA256() {
          if (!(this instanceof SHA256)) return new SHA256()
          BlockHash.call(this),
            (this.h = [
              1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
              2600822924, 528734635, 1541459225,
            ]),
            (this.k = sha256_K),
            (this.W = new Array(64))
        }
        utils.inherits(SHA256, BlockHash),
          (module.exports = SHA256),
          (SHA256.blockSize = 512),
          (SHA256.outSize = 256),
          (SHA256.hmacStrength = 192),
          (SHA256.padLength = 64),
          (SHA256.prototype._update = function _update(msg, start) {
            for (var W = this.W, i = 0; i < 16; i++) W[i] = msg[start + i]
            for (; i < W.length; i++)
              W[i] = sum32_4(
                g1_256(W[i - 2]),
                W[i - 7],
                g0_256(W[i - 15]),
                W[i - 16]
              )
            var a = this.h[0],
              b = this.h[1],
              c = this.h[2],
              d = this.h[3],
              e = this.h[4],
              f = this.h[5],
              g = this.h[6],
              h = this.h[7]
            for (assert(this.k.length === W.length), i = 0; i < W.length; i++) {
              var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]),
                T2 = sum32(s0_256(a), maj32(a, b, c))
              ;(h = g),
                (g = f),
                (f = e),
                (e = sum32(d, T1)),
                (d = c),
                (c = b),
                (b = a),
                (a = sum32(T1, T2))
            }
            ;(this.h[0] = sum32(this.h[0], a)),
              (this.h[1] = sum32(this.h[1], b)),
              (this.h[2] = sum32(this.h[2], c)),
              (this.h[3] = sum32(this.h[3], d)),
              (this.h[4] = sum32(this.h[4], e)),
              (this.h[5] = sum32(this.h[5], f)),
              (this.h[6] = sum32(this.h[6], g)),
              (this.h[7] = sum32(this.h[7], h))
          }),
          (SHA256.prototype._digest = function digest(enc) {
            return 'hex' === enc
              ? utils.toHex32(this.h, 'big')
              : utils.split32(this.h, 'big')
          })
      },
      './node_modules/hash.js/lib/hash/sha/384.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/hash.js/lib/hash/utils.js'
          ),
          SHA512 = __webpack_require__(
            './node_modules/hash.js/lib/hash/sha/512.js'
          )
        function SHA384() {
          if (!(this instanceof SHA384)) return new SHA384()
          SHA512.call(this),
            (this.h = [
              3418070365, 3238371032, 1654270250, 914150663, 2438529370,
              812702999, 355462360, 4144912697, 1731405415, 4290775857,
              2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
              3204075428,
            ])
        }
        utils.inherits(SHA384, SHA512),
          (module.exports = SHA384),
          (SHA384.blockSize = 1024),
          (SHA384.outSize = 384),
          (SHA384.hmacStrength = 192),
          (SHA384.padLength = 128),
          (SHA384.prototype._digest = function digest(enc) {
            return 'hex' === enc
              ? utils.toHex32(this.h.slice(0, 12), 'big')
              : utils.split32(this.h.slice(0, 12), 'big')
          })
      },
      './node_modules/hash.js/lib/hash/sha/512.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var utils = __webpack_require__(
            './node_modules/hash.js/lib/hash/utils.js'
          ),
          common = __webpack_require__(
            './node_modules/hash.js/lib/hash/common.js'
          ),
          assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          ),
          rotr64_hi = utils.rotr64_hi,
          rotr64_lo = utils.rotr64_lo,
          shr64_hi = utils.shr64_hi,
          shr64_lo = utils.shr64_lo,
          sum64 = utils.sum64,
          sum64_hi = utils.sum64_hi,
          sum64_lo = utils.sum64_lo,
          sum64_4_hi = utils.sum64_4_hi,
          sum64_4_lo = utils.sum64_4_lo,
          sum64_5_hi = utils.sum64_5_hi,
          sum64_5_lo = utils.sum64_5_lo,
          BlockHash = common.BlockHash,
          sha512_K = [
            1116352408, 3609767458, 1899447441, 602891725, 3049323471,
            3964484399, 3921009573, 2173295548, 961987163, 4081628472,
            1508970993, 3053834265, 2453635748, 2937671579, 2870763221,
            3664609560, 3624381080, 2734883394, 310598401, 1164996542,
            607225278, 1323610764, 1426881987, 3590304994, 1925078388,
            4068182383, 2162078206, 991336113, 2614888103, 633803317,
            3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
            944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
            1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
            1996064986, 2198950837, 2554220882, 3999719339, 2821834349,
            766784016, 2952996808, 2566594879, 3210313671, 3203337956,
            3336571891, 1034457026, 3584528711, 2466948901, 113926993,
            3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912,
            1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
            1695183700, 2343527390, 1986661051, 1014477480, 2177026350,
            1206759142, 2456956037, 344077627, 2730485921, 1290863460,
            2820302411, 3158454273, 3259730800, 3505952657, 3345764771,
            106217008, 3516065817, 3606008344, 3600352804, 1432725776,
            4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752,
            506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280,
            958139571, 3318307427, 1322822218, 3812723403, 1537002063,
            2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
            2024104815, 1125592928, 2227730452, 2716904306, 2361852424,
            442776044, 2428436474, 593698344, 2756734187, 3733110249,
            3204031479, 2999351573, 3329325298, 3815920427, 3391569614,
            3928383900, 3515267271, 566280711, 3940187606, 3454069534,
            4118630271, 4000239992, 116418474, 1914138554, 174292421,
            2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733,
            587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580,
            2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
            1607167915, 987167468, 1816402316, 1246189591,
          ]
        function SHA512() {
          if (!(this instanceof SHA512)) return new SHA512()
          BlockHash.call(this),
            (this.h = [
              1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
              4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
              2600822924, 725511199, 528734635, 4215389547, 1541459225,
              327033209,
            ]),
            (this.k = sha512_K),
            (this.W = new Array(160))
        }
        function ch64_hi(xh, xl, yh, yl, zh) {
          var r = (xh & yh) ^ (~xh & zh)
          return r < 0 && (r += 4294967296), r
        }
        function ch64_lo(xh, xl, yh, yl, zh, zl) {
          var r = (xl & yl) ^ (~xl & zl)
          return r < 0 && (r += 4294967296), r
        }
        function maj64_hi(xh, xl, yh, yl, zh) {
          var r = (xh & yh) ^ (xh & zh) ^ (yh & zh)
          return r < 0 && (r += 4294967296), r
        }
        function maj64_lo(xh, xl, yh, yl, zh, zl) {
          var r = (xl & yl) ^ (xl & zl) ^ (yl & zl)
          return r < 0 && (r += 4294967296), r
        }
        function s0_512_hi(xh, xl) {
          var r =
            rotr64_hi(xh, xl, 28) ^ rotr64_hi(xl, xh, 2) ^ rotr64_hi(xl, xh, 7)
          return r < 0 && (r += 4294967296), r
        }
        function s0_512_lo(xh, xl) {
          var r =
            rotr64_lo(xh, xl, 28) ^ rotr64_lo(xl, xh, 2) ^ rotr64_lo(xl, xh, 7)
          return r < 0 && (r += 4294967296), r
        }
        function s1_512_hi(xh, xl) {
          var r =
            rotr64_hi(xh, xl, 14) ^ rotr64_hi(xh, xl, 18) ^ rotr64_hi(xl, xh, 9)
          return r < 0 && (r += 4294967296), r
        }
        function s1_512_lo(xh, xl) {
          var r =
            rotr64_lo(xh, xl, 14) ^ rotr64_lo(xh, xl, 18) ^ rotr64_lo(xl, xh, 9)
          return r < 0 && (r += 4294967296), r
        }
        function g0_512_hi(xh, xl) {
          var r =
            rotr64_hi(xh, xl, 1) ^ rotr64_hi(xh, xl, 8) ^ shr64_hi(xh, xl, 7)
          return r < 0 && (r += 4294967296), r
        }
        function g0_512_lo(xh, xl) {
          var r =
            rotr64_lo(xh, xl, 1) ^ rotr64_lo(xh, xl, 8) ^ shr64_lo(xh, xl, 7)
          return r < 0 && (r += 4294967296), r
        }
        function g1_512_hi(xh, xl) {
          var r =
            rotr64_hi(xh, xl, 19) ^ rotr64_hi(xl, xh, 29) ^ shr64_hi(xh, xl, 6)
          return r < 0 && (r += 4294967296), r
        }
        function g1_512_lo(xh, xl) {
          var r =
            rotr64_lo(xh, xl, 19) ^ rotr64_lo(xl, xh, 29) ^ shr64_lo(xh, xl, 6)
          return r < 0 && (r += 4294967296), r
        }
        utils.inherits(SHA512, BlockHash),
          (module.exports = SHA512),
          (SHA512.blockSize = 1024),
          (SHA512.outSize = 512),
          (SHA512.hmacStrength = 192),
          (SHA512.padLength = 128),
          (SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
            for (var W = this.W, i = 0; i < 32; i++) W[i] = msg[start + i]
            for (; i < W.length; i += 2) {
              var c0_hi = g1_512_hi(W[i - 4], W[i - 3]),
                c0_lo = g1_512_lo(W[i - 4], W[i - 3]),
                c1_hi = W[i - 14],
                c1_lo = W[i - 13],
                c2_hi = g0_512_hi(W[i - 30], W[i - 29]),
                c2_lo = g0_512_lo(W[i - 30], W[i - 29]),
                c3_hi = W[i - 32],
                c3_lo = W[i - 31]
              ;(W[i] = sum64_4_hi(
                c0_hi,
                c0_lo,
                c1_hi,
                c1_lo,
                c2_hi,
                c2_lo,
                c3_hi,
                c3_lo
              )),
                (W[i + 1] = sum64_4_lo(
                  c0_hi,
                  c0_lo,
                  c1_hi,
                  c1_lo,
                  c2_hi,
                  c2_lo,
                  c3_hi,
                  c3_lo
                ))
            }
          }),
          (SHA512.prototype._update = function _update(msg, start) {
            this._prepareBlock(msg, start)
            var W = this.W,
              ah = this.h[0],
              al = this.h[1],
              bh = this.h[2],
              bl = this.h[3],
              ch = this.h[4],
              cl = this.h[5],
              dh = this.h[6],
              dl = this.h[7],
              eh = this.h[8],
              el = this.h[9],
              fh = this.h[10],
              fl = this.h[11],
              gh = this.h[12],
              gl = this.h[13],
              hh = this.h[14],
              hl = this.h[15]
            assert(this.k.length === W.length)
            for (var i = 0; i < W.length; i += 2) {
              var c0_hi = hh,
                c0_lo = hl,
                c1_hi = s1_512_hi(eh, el),
                c1_lo = s1_512_lo(eh, el),
                c2_hi = ch64_hi(eh, el, fh, fl, gh),
                c2_lo = ch64_lo(eh, el, fh, fl, gh, gl),
                c3_hi = this.k[i],
                c3_lo = this.k[i + 1],
                c4_hi = W[i],
                c4_lo = W[i + 1],
                T1_hi = sum64_5_hi(
                  c0_hi,
                  c0_lo,
                  c1_hi,
                  c1_lo,
                  c2_hi,
                  c2_lo,
                  c3_hi,
                  c3_lo,
                  c4_hi,
                  c4_lo
                ),
                T1_lo = sum64_5_lo(
                  c0_hi,
                  c0_lo,
                  c1_hi,
                  c1_lo,
                  c2_hi,
                  c2_lo,
                  c3_hi,
                  c3_lo,
                  c4_hi,
                  c4_lo
                )
              ;(c0_hi = s0_512_hi(ah, al)),
                (c0_lo = s0_512_lo(ah, al)),
                (c1_hi = maj64_hi(ah, al, bh, bl, ch)),
                (c1_lo = maj64_lo(ah, al, bh, bl, ch, cl))
              var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo),
                T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo)
              ;(hh = gh),
                (hl = gl),
                (gh = fh),
                (gl = fl),
                (fh = eh),
                (fl = el),
                (eh = sum64_hi(dh, dl, T1_hi, T1_lo)),
                (el = sum64_lo(dl, dl, T1_hi, T1_lo)),
                (dh = ch),
                (dl = cl),
                (ch = bh),
                (cl = bl),
                (bh = ah),
                (bl = al),
                (ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo)),
                (al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo))
            }
            sum64(this.h, 0, ah, al),
              sum64(this.h, 2, bh, bl),
              sum64(this.h, 4, ch, cl),
              sum64(this.h, 6, dh, dl),
              sum64(this.h, 8, eh, el),
              sum64(this.h, 10, fh, fl),
              sum64(this.h, 12, gh, gl),
              sum64(this.h, 14, hh, hl)
          }),
          (SHA512.prototype._digest = function digest(enc) {
            return 'hex' === enc
              ? utils.toHex32(this.h, 'big')
              : utils.split32(this.h, 'big')
          })
      },
      './node_modules/hash.js/lib/hash/sha/common.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var rotr32 = __webpack_require__(
          './node_modules/hash.js/lib/hash/utils.js'
        ).rotr32
        function ch32(x, y, z) {
          return (x & y) ^ (~x & z)
        }
        function maj32(x, y, z) {
          return (x & y) ^ (x & z) ^ (y & z)
        }
        function p32(x, y, z) {
          return x ^ y ^ z
        }
        ;(exports.ft_1 = function ft_1(s, x, y, z) {
          return 0 === s
            ? ch32(x, y, z)
            : 1 === s || 3 === s
              ? p32(x, y, z)
              : 2 === s
                ? maj32(x, y, z)
                : void 0
        }),
          (exports.ch32 = ch32),
          (exports.maj32 = maj32),
          (exports.p32 = p32),
          (exports.s0_256 = function s0_256(x) {
            return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22)
          }),
          (exports.s1_256 = function s1_256(x) {
            return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25)
          }),
          (exports.g0_256 = function g0_256(x) {
            return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3)
          }),
          (exports.g1_256 = function g1_256(x) {
            return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10)
          })
      },
      './node_modules/hash.js/lib/hash/utils.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          ),
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          )
        function isSurrogatePair(msg, i) {
          return (
            55296 == (64512 & msg.charCodeAt(i)) &&
            !(i < 0 || i + 1 >= msg.length) &&
            56320 == (64512 & msg.charCodeAt(i + 1))
          )
        }
        function htonl(w) {
          return (
            ((w >>> 24) |
              ((w >>> 8) & 65280) |
              ((w << 8) & 16711680) |
              ((255 & w) << 24)) >>>
            0
          )
        }
        function zero2(word) {
          return 1 === word.length ? '0' + word : word
        }
        function zero8(word) {
          return 7 === word.length
            ? '0' + word
            : 6 === word.length
              ? '00' + word
              : 5 === word.length
                ? '000' + word
                : 4 === word.length
                  ? '0000' + word
                  : 3 === word.length
                    ? '00000' + word
                    : 2 === word.length
                      ? '000000' + word
                      : 1 === word.length
                        ? '0000000' + word
                        : word
        }
        ;(exports.inherits = inherits),
          (exports.toArray = function toArray(msg, enc) {
            if (Array.isArray(msg)) return msg.slice()
            if (!msg) return []
            var res = []
            if ('string' == typeof msg)
              if (enc) {
                if ('hex' === enc)
                  for (
                    (msg = msg.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
                      (msg = '0' + msg),
                      i = 0;
                    i < msg.length;
                    i += 2
                  )
                    res.push(parseInt(msg[i] + msg[i + 1], 16))
              } else
                for (var p = 0, i = 0; i < msg.length; i++) {
                  var c = msg.charCodeAt(i)
                  c < 128
                    ? (res[p++] = c)
                    : c < 2048
                      ? ((res[p++] = (c >> 6) | 192),
                        (res[p++] = (63 & c) | 128))
                      : isSurrogatePair(msg, i)
                        ? ((c =
                            65536 +
                            ((1023 & c) << 10) +
                            (1023 & msg.charCodeAt(++i))),
                          (res[p++] = (c >> 18) | 240),
                          (res[p++] = ((c >> 12) & 63) | 128),
                          (res[p++] = ((c >> 6) & 63) | 128),
                          (res[p++] = (63 & c) | 128))
                        : ((res[p++] = (c >> 12) | 224),
                          (res[p++] = ((c >> 6) & 63) | 128),
                          (res[p++] = (63 & c) | 128))
                }
            else for (i = 0; i < msg.length; i++) res[i] = 0 | msg[i]
            return res
          }),
          (exports.toHex = function toHex(msg) {
            for (var res = '', i = 0; i < msg.length; i++)
              res += zero2(msg[i].toString(16))
            return res
          }),
          (exports.htonl = htonl),
          (exports.toHex32 = function toHex32(msg, endian) {
            for (var res = '', i = 0; i < msg.length; i++) {
              var w = msg[i]
              'little' === endian && (w = htonl(w)),
                (res += zero8(w.toString(16)))
            }
            return res
          }),
          (exports.zero2 = zero2),
          (exports.zero8 = zero8),
          (exports.join32 = function join32(msg, start, end, endian) {
            var len = end - start
            assert(len % 4 == 0)
            for (
              var res = new Array(len / 4), i = 0, k = start;
              i < res.length;
              i++, k += 4
            ) {
              var w
              ;(w =
                'big' === endian
                  ? (msg[k] << 24) |
                    (msg[k + 1] << 16) |
                    (msg[k + 2] << 8) |
                    msg[k + 3]
                  : (msg[k + 3] << 24) |
                    (msg[k + 2] << 16) |
                    (msg[k + 1] << 8) |
                    msg[k]),
                (res[i] = w >>> 0)
            }
            return res
          }),
          (exports.split32 = function split32(msg, endian) {
            for (
              var res = new Array(4 * msg.length), i = 0, k = 0;
              i < msg.length;
              i++, k += 4
            ) {
              var m = msg[i]
              'big' === endian
                ? ((res[k] = m >>> 24),
                  (res[k + 1] = (m >>> 16) & 255),
                  (res[k + 2] = (m >>> 8) & 255),
                  (res[k + 3] = 255 & m))
                : ((res[k + 3] = m >>> 24),
                  (res[k + 2] = (m >>> 16) & 255),
                  (res[k + 1] = (m >>> 8) & 255),
                  (res[k] = 255 & m))
            }
            return res
          }),
          (exports.rotr32 = function rotr32(w, b) {
            return (w >>> b) | (w << (32 - b))
          }),
          (exports.rotl32 = function rotl32(w, b) {
            return (w << b) | (w >>> (32 - b))
          }),
          (exports.sum32 = function sum32(a, b) {
            return (a + b) >>> 0
          }),
          (exports.sum32_3 = function sum32_3(a, b, c) {
            return (a + b + c) >>> 0
          }),
          (exports.sum32_4 = function sum32_4(a, b, c, d) {
            return (a + b + c + d) >>> 0
          }),
          (exports.sum32_5 = function sum32_5(a, b, c, d, e) {
            return (a + b + c + d + e) >>> 0
          }),
          (exports.sum64 = function sum64(buf, pos, ah, al) {
            var bh = buf[pos],
              lo = (al + buf[pos + 1]) >>> 0,
              hi = (lo < al ? 1 : 0) + ah + bh
            ;(buf[pos] = hi >>> 0), (buf[pos + 1] = lo)
          }),
          (exports.sum64_hi = function sum64_hi(ah, al, bh, bl) {
            return (((al + bl) >>> 0 < al ? 1 : 0) + ah + bh) >>> 0
          }),
          (exports.sum64_lo = function sum64_lo(ah, al, bh, bl) {
            return (al + bl) >>> 0
          }),
          (exports.sum64_4_hi = function sum64_4_hi(
            ah,
            al,
            bh,
            bl,
            ch,
            cl,
            dh,
            dl
          ) {
            var carry = 0,
              lo = al
            return (
              (carry += (lo = (lo + bl) >>> 0) < al ? 1 : 0),
              (carry += (lo = (lo + cl) >>> 0) < cl ? 1 : 0),
              (ah +
                bh +
                ch +
                dh +
                (carry += (lo = (lo + dl) >>> 0) < dl ? 1 : 0)) >>>
                0
            )
          }),
          (exports.sum64_4_lo = function sum64_4_lo(
            ah,
            al,
            bh,
            bl,
            ch,
            cl,
            dh,
            dl
          ) {
            return (al + bl + cl + dl) >>> 0
          }),
          (exports.sum64_5_hi = function sum64_5_hi(
            ah,
            al,
            bh,
            bl,
            ch,
            cl,
            dh,
            dl,
            eh,
            el
          ) {
            var carry = 0,
              lo = al
            return (
              (carry += (lo = (lo + bl) >>> 0) < al ? 1 : 0),
              (carry += (lo = (lo + cl) >>> 0) < cl ? 1 : 0),
              (carry += (lo = (lo + dl) >>> 0) < dl ? 1 : 0),
              (ah +
                bh +
                ch +
                dh +
                eh +
                (carry += (lo = (lo + el) >>> 0) < el ? 1 : 0)) >>>
                0
            )
          }),
          (exports.sum64_5_lo = function sum64_5_lo(
            ah,
            al,
            bh,
            bl,
            ch,
            cl,
            dh,
            dl,
            eh,
            el
          ) {
            return (al + bl + cl + dl + el) >>> 0
          }),
          (exports.rotr64_hi = function rotr64_hi(ah, al, num) {
            return ((al << (32 - num)) | (ah >>> num)) >>> 0
          }),
          (exports.rotr64_lo = function rotr64_lo(ah, al, num) {
            return ((ah << (32 - num)) | (al >>> num)) >>> 0
          }),
          (exports.shr64_hi = function shr64_hi(ah, al, num) {
            return ah >>> num
          }),
          (exports.shr64_lo = function shr64_lo(ah, al, num) {
            return ((ah << (32 - num)) | (al >>> num)) >>> 0
          })
      },
      './node_modules/hmac-drbg/lib/hmac-drbg.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var hash = __webpack_require__('./node_modules/hash.js/lib/hash.js'),
          utils = __webpack_require__(
            './node_modules/minimalistic-crypto-utils/lib/utils.js'
          ),
          assert = __webpack_require__(
            './node_modules/minimalistic-assert/index.js'
          )
        function HmacDRBG(options) {
          if (!(this instanceof HmacDRBG)) return new HmacDRBG(options)
          ;(this.hash = options.hash),
            (this.predResist = !!options.predResist),
            (this.outLen = this.hash.outSize),
            (this.minEntropy = options.minEntropy || this.hash.hmacStrength),
            (this._reseed = null),
            (this.reseedInterval = null),
            (this.K = null),
            (this.V = null)
          var entropy = utils.toArray(
              options.entropy,
              options.entropyEnc || 'hex'
            ),
            nonce = utils.toArray(options.nonce, options.nonceEnc || 'hex'),
            pers = utils.toArray(options.pers, options.persEnc || 'hex')
          assert(
            entropy.length >= this.minEntropy / 8,
            'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
          ),
            this._init(entropy, nonce, pers)
        }
        ;(module.exports = HmacDRBG),
          (HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
            var seed = entropy.concat(nonce).concat(pers)
            ;(this.K = new Array(this.outLen / 8)),
              (this.V = new Array(this.outLen / 8))
            for (var i = 0; i < this.V.length; i++)
              (this.K[i] = 0), (this.V[i] = 1)
            this._update(seed),
              (this._reseed = 1),
              (this.reseedInterval = 281474976710656)
          }),
          (HmacDRBG.prototype._hmac = function hmac() {
            return new hash.hmac(this.hash, this.K)
          }),
          (HmacDRBG.prototype._update = function update(seed) {
            var kmac = this._hmac().update(this.V).update([0])
            seed && (kmac = kmac.update(seed)),
              (this.K = kmac.digest()),
              (this.V = this._hmac().update(this.V).digest()),
              seed &&
                ((this.K = this._hmac()
                  .update(this.V)
                  .update([1])
                  .update(seed)
                  .digest()),
                (this.V = this._hmac().update(this.V).digest()))
          }),
          (HmacDRBG.prototype.reseed = function reseed(
            entropy,
            entropyEnc,
            add,
            addEnc
          ) {
            'string' != typeof entropyEnc &&
              ((addEnc = add), (add = entropyEnc), (entropyEnc = null)),
              (entropy = utils.toArray(entropy, entropyEnc)),
              (add = utils.toArray(add, addEnc)),
              assert(
                entropy.length >= this.minEntropy / 8,
                'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
              ),
              this._update(entropy.concat(add || [])),
              (this._reseed = 1)
          }),
          (HmacDRBG.prototype.generate = function generate(
            len,
            enc,
            add,
            addEnc
          ) {
            if (this._reseed > this.reseedInterval)
              throw new Error('Reseed is required')
            'string' != typeof enc &&
              ((addEnc = add), (add = enc), (enc = null)),
              add &&
                ((add = utils.toArray(add, addEnc || 'hex')), this._update(add))
            for (var temp = []; temp.length < len; )
              (this.V = this._hmac().update(this.V).digest()),
                (temp = temp.concat(this.V))
            var res = temp.slice(0, len)
            return this._update(add), this._reseed++, utils.encode(res, enc)
          })
      },
      './node_modules/md5.js/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          HashBase = __webpack_require__(
            './node_modules/md5.js/node_modules/hash-base/index.js'
          ),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          ARRAY16 = new Array(16)
        function MD5() {
          HashBase.call(this, 64),
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878)
        }
        function rotl(x, n) {
          return (x << n) | (x >>> (32 - n))
        }
        function fnF(a, b, c, d, m, k, s) {
          return (rotl((a + ((b & c) | (~b & d)) + m + k) | 0, s) + b) | 0
        }
        function fnG(a, b, c, d, m, k, s) {
          return (rotl((a + ((b & d) | (c & ~d)) + m + k) | 0, s) + b) | 0
        }
        function fnH(a, b, c, d, m, k, s) {
          return (rotl((a + (b ^ c ^ d) + m + k) | 0, s) + b) | 0
        }
        function fnI(a, b, c, d, m, k, s) {
          return (rotl((a + (c ^ (b | ~d)) + m + k) | 0, s) + b) | 0
        }
        inherits(MD5, HashBase),
          (MD5.prototype._update = function () {
            for (var M = ARRAY16, i = 0; i < 16; ++i)
              M[i] = this._block.readInt32LE(4 * i)
            var a = this._a,
              b = this._b,
              c = this._c,
              d = this._d
            ;(a = fnF(a, b, c, d, M[0], 3614090360, 7)),
              (d = fnF(d, a, b, c, M[1], 3905402710, 12)),
              (c = fnF(c, d, a, b, M[2], 606105819, 17)),
              (b = fnF(b, c, d, a, M[3], 3250441966, 22)),
              (a = fnF(a, b, c, d, M[4], 4118548399, 7)),
              (d = fnF(d, a, b, c, M[5], 1200080426, 12)),
              (c = fnF(c, d, a, b, M[6], 2821735955, 17)),
              (b = fnF(b, c, d, a, M[7], 4249261313, 22)),
              (a = fnF(a, b, c, d, M[8], 1770035416, 7)),
              (d = fnF(d, a, b, c, M[9], 2336552879, 12)),
              (c = fnF(c, d, a, b, M[10], 4294925233, 17)),
              (b = fnF(b, c, d, a, M[11], 2304563134, 22)),
              (a = fnF(a, b, c, d, M[12], 1804603682, 7)),
              (d = fnF(d, a, b, c, M[13], 4254626195, 12)),
              (c = fnF(c, d, a, b, M[14], 2792965006, 17)),
              (a = fnG(
                a,
                (b = fnF(b, c, d, a, M[15], 1236535329, 22)),
                c,
                d,
                M[1],
                4129170786,
                5
              )),
              (d = fnG(d, a, b, c, M[6], 3225465664, 9)),
              (c = fnG(c, d, a, b, M[11], 643717713, 14)),
              (b = fnG(b, c, d, a, M[0], 3921069994, 20)),
              (a = fnG(a, b, c, d, M[5], 3593408605, 5)),
              (d = fnG(d, a, b, c, M[10], 38016083, 9)),
              (c = fnG(c, d, a, b, M[15], 3634488961, 14)),
              (b = fnG(b, c, d, a, M[4], 3889429448, 20)),
              (a = fnG(a, b, c, d, M[9], 568446438, 5)),
              (d = fnG(d, a, b, c, M[14], 3275163606, 9)),
              (c = fnG(c, d, a, b, M[3], 4107603335, 14)),
              (b = fnG(b, c, d, a, M[8], 1163531501, 20)),
              (a = fnG(a, b, c, d, M[13], 2850285829, 5)),
              (d = fnG(d, a, b, c, M[2], 4243563512, 9)),
              (c = fnG(c, d, a, b, M[7], 1735328473, 14)),
              (a = fnH(
                a,
                (b = fnG(b, c, d, a, M[12], 2368359562, 20)),
                c,
                d,
                M[5],
                4294588738,
                4
              )),
              (d = fnH(d, a, b, c, M[8], 2272392833, 11)),
              (c = fnH(c, d, a, b, M[11], 1839030562, 16)),
              (b = fnH(b, c, d, a, M[14], 4259657740, 23)),
              (a = fnH(a, b, c, d, M[1], 2763975236, 4)),
              (d = fnH(d, a, b, c, M[4], 1272893353, 11)),
              (c = fnH(c, d, a, b, M[7], 4139469664, 16)),
              (b = fnH(b, c, d, a, M[10], 3200236656, 23)),
              (a = fnH(a, b, c, d, M[13], 681279174, 4)),
              (d = fnH(d, a, b, c, M[0], 3936430074, 11)),
              (c = fnH(c, d, a, b, M[3], 3572445317, 16)),
              (b = fnH(b, c, d, a, M[6], 76029189, 23)),
              (a = fnH(a, b, c, d, M[9], 3654602809, 4)),
              (d = fnH(d, a, b, c, M[12], 3873151461, 11)),
              (c = fnH(c, d, a, b, M[15], 530742520, 16)),
              (a = fnI(
                a,
                (b = fnH(b, c, d, a, M[2], 3299628645, 23)),
                c,
                d,
                M[0],
                4096336452,
                6
              )),
              (d = fnI(d, a, b, c, M[7], 1126891415, 10)),
              (c = fnI(c, d, a, b, M[14], 2878612391, 15)),
              (b = fnI(b, c, d, a, M[5], 4237533241, 21)),
              (a = fnI(a, b, c, d, M[12], 1700485571, 6)),
              (d = fnI(d, a, b, c, M[3], 2399980690, 10)),
              (c = fnI(c, d, a, b, M[10], 4293915773, 15)),
              (b = fnI(b, c, d, a, M[1], 2240044497, 21)),
              (a = fnI(a, b, c, d, M[8], 1873313359, 6)),
              (d = fnI(d, a, b, c, M[15], 4264355552, 10)),
              (c = fnI(c, d, a, b, M[6], 2734768916, 15)),
              (b = fnI(b, c, d, a, M[13], 1309151649, 21)),
              (a = fnI(a, b, c, d, M[4], 4149444226, 6)),
              (d = fnI(d, a, b, c, M[11], 3174756917, 10)),
              (c = fnI(c, d, a, b, M[2], 718787259, 15)),
              (b = fnI(b, c, d, a, M[9], 3951481745, 21)),
              (this._a = (this._a + a) | 0),
              (this._b = (this._b + b) | 0),
              (this._c = (this._c + c) | 0),
              (this._d = (this._d + d) | 0)
          }),
          (MD5.prototype._digest = function () {
            ;(this._block[this._blockOffset++] = 128),
              this._blockOffset > 56 &&
                (this._block.fill(0, this._blockOffset, 64),
                this._update(),
                (this._blockOffset = 0)),
              this._block.fill(0, this._blockOffset, 56),
              this._block.writeUInt32LE(this._length[0], 56),
              this._block.writeUInt32LE(this._length[1], 60),
              this._update()
            var buffer = Buffer.allocUnsafe(16)
            return (
              buffer.writeInt32LE(this._a, 0),
              buffer.writeInt32LE(this._b, 4),
              buffer.writeInt32LE(this._c, 8),
              buffer.writeInt32LE(this._d, 12),
              buffer
            )
          }),
          (module.exports = MD5)
      },
      './node_modules/md5.js/node_modules/hash-base/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          Transform = __webpack_require__(
            './node_modules/readable-stream/readable-browser.js'
          ).Transform
        function HashBase(blockSize) {
          Transform.call(this),
            (this._block = Buffer.allocUnsafe(blockSize)),
            (this._blockSize = blockSize),
            (this._blockOffset = 0),
            (this._length = [0, 0, 0, 0]),
            (this._finalized = !1)
        }
        __webpack_require__('./node_modules/inherits/inherits_browser.js')(
          HashBase,
          Transform
        ),
          (HashBase.prototype._transform = function (
            chunk,
            encoding,
            callback
          ) {
            var error = null
            try {
              this.update(chunk, encoding)
            } catch (err) {
              error = err
            }
            callback(error)
          }),
          (HashBase.prototype._flush = function (callback) {
            var error = null
            try {
              this.push(this.digest())
            } catch (err) {
              error = err
            }
            callback(error)
          }),
          (HashBase.prototype.update = function (data, encoding) {
            if (
              ((function throwIfNotStringOrBuffer(val, prefix) {
                if (!Buffer.isBuffer(val) && 'string' != typeof val)
                  throw new TypeError(prefix + ' must be a string or a buffer')
              })(data, 'Data'),
              this._finalized)
            )
              throw new Error('Digest already called')
            Buffer.isBuffer(data) || (data = Buffer.from(data, encoding))
            for (
              var block = this._block, offset = 0;
              this._blockOffset + data.length - offset >= this._blockSize;

            ) {
              for (var i = this._blockOffset; i < this._blockSize; )
                block[i++] = data[offset++]
              this._update(), (this._blockOffset = 0)
            }
            for (; offset < data.length; )
              block[this._blockOffset++] = data[offset++]
            for (var j = 0, carry = 8 * data.length; carry > 0; ++j)
              (this._length[j] += carry),
                (carry = (this._length[j] / 4294967296) | 0) > 0 &&
                  (this._length[j] -= 4294967296 * carry)
            return this
          }),
          (HashBase.prototype._update = function () {
            throw new Error('_update is not implemented')
          }),
          (HashBase.prototype.digest = function (encoding) {
            if (this._finalized) throw new Error('Digest already called')
            this._finalized = !0
            var digest = this._digest()
            void 0 !== encoding && (digest = digest.toString(encoding)),
              this._block.fill(0),
              (this._blockOffset = 0)
            for (var i = 0; i < 4; ++i) this._length[i] = 0
            return digest
          }),
          (HashBase.prototype._digest = function () {
            throw new Error('_digest is not implemented')
          }),
          (module.exports = HashBase)
      },
      './node_modules/miller-rabin/lib/mr.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var bn = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          brorand = __webpack_require__('./node_modules/brorand/index.js')
        function MillerRabin(rand) {
          this.rand = rand || new brorand.Rand()
        }
        ;(module.exports = MillerRabin),
          (MillerRabin.create = function create(rand) {
            return new MillerRabin(rand)
          }),
          (MillerRabin.prototype._randbelow = function _randbelow(n) {
            var len = n.bitLength(),
              min_bytes = Math.ceil(len / 8)
            do {
              var a = new bn(this.rand.generate(min_bytes))
            } while (a.cmp(n) >= 0)
            return a
          }),
          (MillerRabin.prototype._randrange = function _randrange(start, stop) {
            var size = stop.sub(start)
            return start.add(this._randbelow(size))
          }),
          (MillerRabin.prototype.test = function test(n, k, cb) {
            var len = n.bitLength(),
              red = bn.mont(n),
              rone = new bn(1).toRed(red)
            k || (k = Math.max(1, (len / 48) | 0))
            for (var n1 = n.subn(1), s = 0; !n1.testn(s); s++);
            for (var d = n.shrn(s), rn1 = n1.toRed(red); k > 0; k--) {
              var a = this._randrange(new bn(2), n1)
              cb && cb(a)
              var x = a.toRed(red).redPow(d)
              if (0 !== x.cmp(rone) && 0 !== x.cmp(rn1)) {
                for (var i = 1; i < s; i++) {
                  if (0 === (x = x.redSqr()).cmp(rone)) return !1
                  if (0 === x.cmp(rn1)) break
                }
                if (i === s) return !1
              }
            }
            return !0
          }),
          (MillerRabin.prototype.getDivisor = function getDivisor(n, k) {
            var len = n.bitLength(),
              red = bn.mont(n),
              rone = new bn(1).toRed(red)
            k || (k = Math.max(1, (len / 48) | 0))
            for (var n1 = n.subn(1), s = 0; !n1.testn(s); s++);
            for (var d = n.shrn(s), rn1 = n1.toRed(red); k > 0; k--) {
              var a = this._randrange(new bn(2), n1),
                g = n.gcd(a)
              if (0 !== g.cmpn(1)) return g
              var x = a.toRed(red).redPow(d)
              if (0 !== x.cmp(rone) && 0 !== x.cmp(rn1)) {
                for (var i = 1; i < s; i++) {
                  if (0 === (x = x.redSqr()).cmp(rone))
                    return x.fromRed().subn(1).gcd(n)
                  if (0 === x.cmp(rn1)) break
                }
                if (i === s) return (x = x.redSqr()).fromRed().subn(1).gcd(n)
              }
            }
            return !1
          })
      },
      './node_modules/minimalistic-assert/index.js': module => {
        function assert(val, msg) {
          if (!val) throw new Error(msg || 'Assertion failed')
        }
        ;(module.exports = assert),
          (assert.equal = function assertEqual(l, r, msg) {
            if (l != r)
              throw new Error(msg || 'Assertion failed: ' + l + ' != ' + r)
          })
      },
      './node_modules/minimalistic-crypto-utils/lib/utils.js': (
        __unused_webpack_module,
        exports
      ) => {
        'use strict'
        var utils = exports
        function zero2(word) {
          return 1 === word.length ? '0' + word : word
        }
        function toHex(msg) {
          for (var res = '', i = 0; i < msg.length; i++)
            res += zero2(msg[i].toString(16))
          return res
        }
        ;(utils.toArray = function toArray(msg, enc) {
          if (Array.isArray(msg)) return msg.slice()
          if (!msg) return []
          var res = []
          if ('string' != typeof msg) {
            for (var i = 0; i < msg.length; i++) res[i] = 0 | msg[i]
            return res
          }
          if ('hex' === enc) {
            ;(msg = msg.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
              (msg = '0' + msg)
            for (i = 0; i < msg.length; i += 2)
              res.push(parseInt(msg[i] + msg[i + 1], 16))
          } else
            for (i = 0; i < msg.length; i++) {
              var c = msg.charCodeAt(i),
                hi = c >> 8,
                lo = 255 & c
              hi ? res.push(hi, lo) : res.push(lo)
            }
          return res
        }),
          (utils.zero2 = zero2),
          (utils.toHex = toHex),
          (utils.encode = function encode(arr, enc) {
            return 'hex' === enc ? toHex(arr) : arr
          })
      },
      './node_modules/otplib/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var presetDefault = __webpack_require__(
          './node_modules/@otplib/preset-default/index.js'
        )
        Object.keys(presetDefault).forEach(function (k) {
          'default' !== k &&
            Object.defineProperty(exports, k, {
              enumerable: !0,
              get: function () {
                return presetDefault[k]
              },
            })
        })
      },
      './node_modules/parse-asn1/asn1.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var asn1 = __webpack_require__('./node_modules/asn1.js/lib/asn1.js')
        exports.certificate = __webpack_require__(
          './node_modules/parse-asn1/certificate.js'
        )
        var RSAPrivateKey = asn1.define('RSAPrivateKey', function () {
          this.seq().obj(
            this.key('version').int(),
            this.key('modulus').int(),
            this.key('publicExponent').int(),
            this.key('privateExponent').int(),
            this.key('prime1').int(),
            this.key('prime2').int(),
            this.key('exponent1').int(),
            this.key('exponent2').int(),
            this.key('coefficient').int()
          )
        })
        exports.RSAPrivateKey = RSAPrivateKey
        var RSAPublicKey = asn1.define('RSAPublicKey', function () {
          this.seq().obj(
            this.key('modulus').int(),
            this.key('publicExponent').int()
          )
        })
        exports.RSAPublicKey = RSAPublicKey
        var AlgorithmIdentifier = asn1.define(
            'AlgorithmIdentifier',
            function () {
              this.seq().obj(
                this.key('algorithm').objid(),
                this.key('none').null_().optional(),
                this.key('curve').objid().optional(),
                this.key('params')
                  .seq()
                  .obj(
                    this.key('p').int(),
                    this.key('q').int(),
                    this.key('g').int()
                  )
                  .optional()
              )
            }
          ),
          PublicKey = asn1.define('SubjectPublicKeyInfo', function () {
            this.seq().obj(
              this.key('algorithm').use(AlgorithmIdentifier),
              this.key('subjectPublicKey').bitstr()
            )
          })
        exports.PublicKey = PublicKey
        var PrivateKeyInfo = asn1.define('PrivateKeyInfo', function () {
          this.seq().obj(
            this.key('version').int(),
            this.key('algorithm').use(AlgorithmIdentifier),
            this.key('subjectPrivateKey').octstr()
          )
        })
        exports.PrivateKey = PrivateKeyInfo
        var EncryptedPrivateKeyInfo = asn1.define(
          'EncryptedPrivateKeyInfo',
          function () {
            this.seq().obj(
              this.key('algorithm')
                .seq()
                .obj(
                  this.key('id').objid(),
                  this.key('decrypt')
                    .seq()
                    .obj(
                      this.key('kde')
                        .seq()
                        .obj(
                          this.key('id').objid(),
                          this.key('kdeparams')
                            .seq()
                            .obj(
                              this.key('salt').octstr(),
                              this.key('iters').int()
                            )
                        ),
                      this.key('cipher')
                        .seq()
                        .obj(this.key('algo').objid(), this.key('iv').octstr())
                    )
                ),
              this.key('subjectPrivateKey').octstr()
            )
          }
        )
        exports.EncryptedPrivateKey = EncryptedPrivateKeyInfo
        var DSAPrivateKey = asn1.define('DSAPrivateKey', function () {
          this.seq().obj(
            this.key('version').int(),
            this.key('p').int(),
            this.key('q').int(),
            this.key('g').int(),
            this.key('pub_key').int(),
            this.key('priv_key').int()
          )
        })
        ;(exports.DSAPrivateKey = DSAPrivateKey),
          (exports.DSAparam = asn1.define('DSAparam', function () {
            this.int()
          }))
        var ECParameters = asn1.define('ECParameters', function () {
            this.choice({ namedCurve: this.objid() })
          }),
          ECPrivateKey = asn1.define('ECPrivateKey', function () {
            this.seq().obj(
              this.key('version').int(),
              this.key('privateKey').octstr(),
              this.key('parameters').optional().explicit(0).use(ECParameters),
              this.key('publicKey').optional().explicit(1).bitstr()
            )
          })
        ;(exports.ECPrivateKey = ECPrivateKey),
          (exports.signature = asn1.define('signature', function () {
            this.seq().obj(this.key('r').int(), this.key('s').int())
          }))
      },
      './node_modules/parse-asn1/certificate.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var asn = __webpack_require__('./node_modules/asn1.js/lib/asn1.js'),
          Time = asn.define('Time', function () {
            this.choice({
              utcTime: this.utctime(),
              generalTime: this.gentime(),
            })
          }),
          AttributeTypeValue = asn.define('AttributeTypeValue', function () {
            this.seq().obj(this.key('type').objid(), this.key('value').any())
          }),
          AlgorithmIdentifier = asn.define('AlgorithmIdentifier', function () {
            this.seq().obj(
              this.key('algorithm').objid(),
              this.key('parameters').optional(),
              this.key('curve').objid().optional()
            )
          }),
          SubjectPublicKeyInfo = asn.define(
            'SubjectPublicKeyInfo',
            function () {
              this.seq().obj(
                this.key('algorithm').use(AlgorithmIdentifier),
                this.key('subjectPublicKey').bitstr()
              )
            }
          ),
          RelativeDistinguishedName = asn.define(
            'RelativeDistinguishedName',
            function () {
              this.setof(AttributeTypeValue)
            }
          ),
          RDNSequence = asn.define('RDNSequence', function () {
            this.seqof(RelativeDistinguishedName)
          }),
          Name = asn.define('Name', function () {
            this.choice({ rdnSequence: this.use(RDNSequence) })
          }),
          Validity = asn.define('Validity', function () {
            this.seq().obj(
              this.key('notBefore').use(Time),
              this.key('notAfter').use(Time)
            )
          }),
          Extension = asn.define('Extension', function () {
            this.seq().obj(
              this.key('extnID').objid(),
              this.key('critical').bool().def(!1),
              this.key('extnValue').octstr()
            )
          }),
          TBSCertificate = asn.define('TBSCertificate', function () {
            this.seq().obj(
              this.key('version').explicit(0).int().optional(),
              this.key('serialNumber').int(),
              this.key('signature').use(AlgorithmIdentifier),
              this.key('issuer').use(Name),
              this.key('validity').use(Validity),
              this.key('subject').use(Name),
              this.key('subjectPublicKeyInfo').use(SubjectPublicKeyInfo),
              this.key('issuerUniqueID').implicit(1).bitstr().optional(),
              this.key('subjectUniqueID').implicit(2).bitstr().optional(),
              this.key('extensions').explicit(3).seqof(Extension).optional()
            )
          }),
          X509Certificate = asn.define('X509Certificate', function () {
            this.seq().obj(
              this.key('tbsCertificate').use(TBSCertificate),
              this.key('signatureAlgorithm').use(AlgorithmIdentifier),
              this.key('signatureValue').bitstr()
            )
          })
        module.exports = X509Certificate
      },
      './node_modules/parse-asn1/fixProc.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var findProc =
            /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
          startRegex = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
          fullRegex =
            /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
          evp = __webpack_require__('./node_modules/evp_bytestokey/index.js'),
          ciphers = __webpack_require__(
            './node_modules/browserify-aes/browser.js'
          ),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer
        module.exports = function (okey, password) {
          var decrypted,
            key = okey.toString(),
            match = key.match(findProc)
          if (match) {
            var suite = 'aes' + match[1],
              iv = Buffer.from(match[2], 'hex'),
              cipherText = Buffer.from(
                match[3].replace(/[\r\n]/g, ''),
                'base64'
              ),
              cipherKey = evp(
                password,
                iv.slice(0, 8),
                parseInt(match[1], 10)
              ).key,
              out = [],
              cipher = ciphers.createDecipheriv(suite, cipherKey, iv)
            out.push(cipher.update(cipherText)),
              out.push(cipher.final()),
              (decrypted = Buffer.concat(out))
          } else {
            var match2 = key.match(fullRegex)
            decrypted = Buffer.from(match2[2].replace(/[\r\n]/g, ''), 'base64')
          }
          return { tag: key.match(startRegex)[1], data: decrypted }
        }
      },
      './node_modules/parse-asn1/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var asn1 = __webpack_require__('./node_modules/parse-asn1/asn1.js'),
          aesid = __webpack_require__('./node_modules/parse-asn1/aesid.json'),
          fixProc = __webpack_require__('./node_modules/parse-asn1/fixProc.js'),
          ciphers = __webpack_require__(
            './node_modules/browserify-aes/browser.js'
          ),
          compat = __webpack_require__('./node_modules/pbkdf2/browser.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer
        function parseKeys(buffer) {
          var password
          'object' != typeof buffer ||
            Buffer.isBuffer(buffer) ||
            ((password = buffer.passphrase), (buffer = buffer.key)),
            'string' == typeof buffer && (buffer = Buffer.from(buffer))
          var subtype,
            ndata,
            stripped = fixProc(buffer, password),
            type = stripped.tag,
            data = stripped.data
          switch (type) {
            case 'CERTIFICATE':
              ndata = asn1.certificate.decode(data, 'der').tbsCertificate
                .subjectPublicKeyInfo
            case 'PUBLIC KEY':
              switch (
                (ndata || (ndata = asn1.PublicKey.decode(data, 'der')),
                (subtype = ndata.algorithm.algorithm.join('.')))
              ) {
                case '1.2.840.113549.1.1.1':
                  return asn1.RSAPublicKey.decode(
                    ndata.subjectPublicKey.data,
                    'der'
                  )
                case '1.2.840.10045.2.1':
                  return (
                    (ndata.subjectPrivateKey = ndata.subjectPublicKey),
                    { type: 'ec', data: ndata }
                  )
                case '1.2.840.10040.4.1':
                  return (
                    (ndata.algorithm.params.pub_key = asn1.DSAparam.decode(
                      ndata.subjectPublicKey.data,
                      'der'
                    )),
                    { type: 'dsa', data: ndata.algorithm.params }
                  )
                default:
                  throw new Error('unknown key id ' + subtype)
              }
            case 'ENCRYPTED PRIVATE KEY':
              data = (function decrypt(data, password) {
                var salt = data.algorithm.decrypt.kde.kdeparams.salt,
                  iters = parseInt(
                    data.algorithm.decrypt.kde.kdeparams.iters.toString(),
                    10
                  ),
                  algo = aesid[data.algorithm.decrypt.cipher.algo.join('.')],
                  iv = data.algorithm.decrypt.cipher.iv,
                  cipherText = data.subjectPrivateKey,
                  keylen = parseInt(algo.split('-')[1], 10) / 8,
                  key = compat.pbkdf2Sync(
                    password,
                    salt,
                    iters,
                    keylen,
                    'sha1'
                  ),
                  cipher = ciphers.createDecipheriv(algo, key, iv),
                  out = []
                return (
                  out.push(cipher.update(cipherText)),
                  out.push(cipher.final()),
                  Buffer.concat(out)
                )
              })(
                (data = asn1.EncryptedPrivateKey.decode(data, 'der')),
                password
              )
            case 'PRIVATE KEY':
              switch (
                (subtype = (ndata = asn1.PrivateKey.decode(
                  data,
                  'der'
                )).algorithm.algorithm.join('.'))
              ) {
                case '1.2.840.113549.1.1.1':
                  return asn1.RSAPrivateKey.decode(
                    ndata.subjectPrivateKey,
                    'der'
                  )
                case '1.2.840.10045.2.1':
                  return {
                    curve: ndata.algorithm.curve,
                    privateKey: asn1.ECPrivateKey.decode(
                      ndata.subjectPrivateKey,
                      'der'
                    ).privateKey,
                  }
                case '1.2.840.10040.4.1':
                  return (
                    (ndata.algorithm.params.priv_key = asn1.DSAparam.decode(
                      ndata.subjectPrivateKey,
                      'der'
                    )),
                    { type: 'dsa', params: ndata.algorithm.params }
                  )
                default:
                  throw new Error('unknown key id ' + subtype)
              }
            case 'RSA PUBLIC KEY':
              return asn1.RSAPublicKey.decode(data, 'der')
            case 'RSA PRIVATE KEY':
              return asn1.RSAPrivateKey.decode(data, 'der')
            case 'DSA PRIVATE KEY':
              return {
                type: 'dsa',
                params: asn1.DSAPrivateKey.decode(data, 'der'),
              }
            case 'EC PRIVATE KEY':
              return {
                curve: (data = asn1.ECPrivateKey.decode(data, 'der')).parameters
                  .value,
                privateKey: data.privateKey,
              }
            default:
              throw new Error('unknown key type ' + type)
          }
        }
        ;(parseKeys.signature = asn1.signature), (module.exports = parseKeys)
      },
      './node_modules/pbkdf2/browser.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        ;(exports.pbkdf2 = __webpack_require__(
          './node_modules/pbkdf2/lib/async.js'
        )),
          (exports.pbkdf2Sync = __webpack_require__(
            './node_modules/pbkdf2/lib/sync-browser.js'
          ))
      },
      './node_modules/pbkdf2/lib/async.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var ZERO_BUF,
          nextTick,
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          checkParameters = __webpack_require__(
            './node_modules/pbkdf2/lib/precondition.js'
          ),
          defaultEncoding = __webpack_require__(
            './node_modules/pbkdf2/lib/default-encoding.js'
          ),
          sync = __webpack_require__(
            './node_modules/pbkdf2/lib/sync-browser.js'
          ),
          toBuffer = __webpack_require__(
            './node_modules/pbkdf2/lib/to-buffer.js'
          ),
          subtle =
            __webpack_require__.g.crypto && __webpack_require__.g.crypto.subtle,
          toBrowser = {
            sha: 'SHA-1',
            'sha-1': 'SHA-1',
            sha1: 'SHA-1',
            sha256: 'SHA-256',
            'sha-256': 'SHA-256',
            sha384: 'SHA-384',
            'sha-384': 'SHA-384',
            'sha-512': 'SHA-512',
            sha512: 'SHA-512',
          },
          checks = []
        function getNextTick() {
          return (
            nextTick ||
            (nextTick =
              __webpack_require__.g.process &&
              __webpack_require__.g.process.nextTick
                ? __webpack_require__.g.process.nextTick
                : __webpack_require__.g.queueMicrotask
                  ? __webpack_require__.g.queueMicrotask
                  : __webpack_require__.g.setImmediate
                    ? __webpack_require__.g.setImmediate
                    : __webpack_require__.g.setTimeout)
          )
        }
        function browserPbkdf2(password, salt, iterations, length, algo) {
          return subtle
            .importKey('raw', password, { name: 'PBKDF2' }, !1, ['deriveBits'])
            .then(function (key) {
              return subtle.deriveBits(
                { name: 'PBKDF2', salt, iterations, hash: { name: algo } },
                key,
                length << 3
              )
            })
            .then(function (res) {
              return Buffer.from(res)
            })
        }
        module.exports = function (
          password,
          salt,
          iterations,
          keylen,
          digest,
          callback
        ) {
          'function' == typeof digest &&
            ((callback = digest), (digest = void 0))
          var algo = toBrowser[(digest = digest || 'sha1').toLowerCase()]
          if (algo && 'function' == typeof __webpack_require__.g.Promise) {
            if (
              (checkParameters(iterations, keylen),
              (password = toBuffer(password, defaultEncoding, 'Password')),
              (salt = toBuffer(salt, defaultEncoding, 'Salt')),
              'function' != typeof callback)
            )
              throw new Error('No callback provided to pbkdf2')
            !(function resolvePromise(promise, callback) {
              promise.then(
                function (out) {
                  getNextTick()(function () {
                    callback(null, out)
                  })
                },
                function (e) {
                  getNextTick()(function () {
                    callback(e)
                  })
                }
              )
            })(
              (function checkNative(algo) {
                if (
                  __webpack_require__.g.process &&
                  !__webpack_require__.g.process.browser
                )
                  return Promise.resolve(!1)
                if (!subtle || !subtle.importKey || !subtle.deriveBits)
                  return Promise.resolve(!1)
                if (void 0 !== checks[algo]) return checks[algo]
                var prom = browserPbkdf2(
                  (ZERO_BUF = ZERO_BUF || Buffer.alloc(8)),
                  ZERO_BUF,
                  10,
                  128,
                  algo
                )
                  .then(function () {
                    return !0
                  })
                  .catch(function () {
                    return !1
                  })
                return (checks[algo] = prom), prom
              })(algo).then(function (resp) {
                return resp
                  ? browserPbkdf2(password, salt, iterations, keylen, algo)
                  : sync(password, salt, iterations, keylen, digest)
              }),
              callback
            )
          } else
            getNextTick()(function () {
              var out
              try {
                out = sync(password, salt, iterations, keylen, digest)
              } catch (e) {
                return callback(e)
              }
              callback(null, out)
            })
        }
      },
      './node_modules/pbkdf2/lib/default-encoding.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var defaultEncoding,
          process = __webpack_require__('./node_modules/process/browser.js')
        if (
          __webpack_require__.g.process &&
          __webpack_require__.g.process.browser
        )
          defaultEncoding = 'utf-8'
        else if (
          __webpack_require__.g.process &&
          __webpack_require__.g.process.version
        ) {
          defaultEncoding =
            parseInt(process.version.split('.')[0].slice(1), 10) >= 6
              ? 'utf-8'
              : 'binary'
        } else defaultEncoding = 'utf-8'
        module.exports = defaultEncoding
      },
      './node_modules/pbkdf2/lib/precondition.js': module => {
        var MAX_ALLOC = Math.pow(2, 30) - 1
        module.exports = function (iterations, keylen) {
          if ('number' != typeof iterations)
            throw new TypeError('Iterations not a number')
          if (iterations < 0) throw new TypeError('Bad iterations')
          if ('number' != typeof keylen)
            throw new TypeError('Key length not a number')
          if (keylen < 0 || keylen > MAX_ALLOC || keylen != keylen)
            throw new TypeError('Bad key length')
        }
      },
      './node_modules/pbkdf2/lib/sync-browser.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var md5 = __webpack_require__('./node_modules/create-hash/md5.js'),
          RIPEMD160 = __webpack_require__('./node_modules/ripemd160/index.js'),
          sha = __webpack_require__('./node_modules/sha.js/index.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          checkParameters = __webpack_require__(
            './node_modules/pbkdf2/lib/precondition.js'
          ),
          defaultEncoding = __webpack_require__(
            './node_modules/pbkdf2/lib/default-encoding.js'
          ),
          toBuffer = __webpack_require__(
            './node_modules/pbkdf2/lib/to-buffer.js'
          ),
          ZEROS = Buffer.alloc(128),
          sizes = {
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            rmd160: 20,
            ripemd160: 20,
          }
        function Hmac(alg, key, saltLen) {
          var hash = (function getDigest(alg) {
              function shaFunc(data) {
                return sha(alg).update(data).digest()
              }
              function rmd160Func(data) {
                return new RIPEMD160().update(data).digest()
              }
              return 'rmd160' === alg || 'ripemd160' === alg
                ? rmd160Func
                : 'md5' === alg
                  ? md5
                  : shaFunc
            })(alg),
            blocksize = 'sha512' === alg || 'sha384' === alg ? 128 : 64
          key.length > blocksize
            ? (key = hash(key))
            : key.length < blocksize &&
              (key = Buffer.concat([key, ZEROS], blocksize))
          for (
            var ipad = Buffer.allocUnsafe(blocksize + sizes[alg]),
              opad = Buffer.allocUnsafe(blocksize + sizes[alg]),
              i = 0;
            i < blocksize;
            i++
          )
            (ipad[i] = 54 ^ key[i]), (opad[i] = 92 ^ key[i])
          var ipad1 = Buffer.allocUnsafe(blocksize + saltLen + 4)
          ipad.copy(ipad1, 0, 0, blocksize),
            (this.ipad1 = ipad1),
            (this.ipad2 = ipad),
            (this.opad = opad),
            (this.alg = alg),
            (this.blocksize = blocksize),
            (this.hash = hash),
            (this.size = sizes[alg])
        }
        ;(Hmac.prototype.run = function (data, ipad) {
          return (
            data.copy(ipad, this.blocksize),
            this.hash(ipad).copy(this.opad, this.blocksize),
            this.hash(this.opad)
          )
        }),
          (module.exports = function pbkdf2(
            password,
            salt,
            iterations,
            keylen,
            digest
          ) {
            checkParameters(iterations, keylen)
            var hmac = new Hmac(
                (digest = digest || 'sha1'),
                (password = toBuffer(password, defaultEncoding, 'Password')),
                (salt = toBuffer(salt, defaultEncoding, 'Salt')).length
              ),
              DK = Buffer.allocUnsafe(keylen),
              block1 = Buffer.allocUnsafe(salt.length + 4)
            salt.copy(block1, 0, 0, salt.length)
            for (
              var destPos = 0,
                hLen = sizes[digest],
                l = Math.ceil(keylen / hLen),
                i = 1;
              i <= l;
              i++
            ) {
              block1.writeUInt32BE(i, salt.length)
              for (
                var T = hmac.run(block1, hmac.ipad1), U = T, j = 1;
                j < iterations;
                j++
              ) {
                U = hmac.run(U, hmac.ipad2)
                for (var k = 0; k < hLen; k++) T[k] ^= U[k]
              }
              T.copy(DK, destPos), (destPos += hLen)
            }
            return DK
          })
      },
      './node_modules/pbkdf2/lib/to-buffer.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
          './node_modules/safe-buffer/index.js'
        ).Buffer
        module.exports = function (thing, encoding, name) {
          if (Buffer.isBuffer(thing)) return thing
          if ('string' == typeof thing) return Buffer.from(thing, encoding)
          if (ArrayBuffer.isView(thing)) return Buffer.from(thing.buffer)
          throw new TypeError(
            name + ' must be a string, a Buffer, a typed array or a DataView'
          )
        }
      },
      './node_modules/process-nextick-args/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var process = __webpack_require__('./node_modules/process/browser.js')
        void 0 === process ||
        !process.version ||
        0 === process.version.indexOf('v0.') ||
        (0 === process.version.indexOf('v1.') &&
          0 !== process.version.indexOf('v1.8.'))
          ? (module.exports = {
              nextTick: function nextTick(fn, arg1, arg2, arg3) {
                if ('function' != typeof fn)
                  throw new TypeError('"callback" argument must be a function')
                var args,
                  i,
                  len = arguments.length
                switch (len) {
                  case 0:
                  case 1:
                    return process.nextTick(fn)
                  case 2:
                    return process.nextTick(function afterTickOne() {
                      fn.call(null, arg1)
                    })
                  case 3:
                    return process.nextTick(function afterTickTwo() {
                      fn.call(null, arg1, arg2)
                    })
                  case 4:
                    return process.nextTick(function afterTickThree() {
                      fn.call(null, arg1, arg2, arg3)
                    })
                  default:
                    for (args = new Array(len - 1), i = 0; i < args.length; )
                      args[i++] = arguments[i]
                    return process.nextTick(function afterTick() {
                      fn.apply(null, args)
                    })
                }
              },
            })
          : (module.exports = process)
      },
      './node_modules/prop-types/factoryWithThrowingShims.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var ReactPropTypesSecret = __webpack_require__(
          './node_modules/prop-types/lib/ReactPropTypesSecret.js'
        )
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        ;(emptyFunctionWithReset.resetWarningCache = emptyFunction),
          (module.exports = function () {
            function shim(
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret
            ) {
              if (secret !== ReactPropTypesSecret) {
                var err = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                )
                throw ((err.name = 'Invariant Violation'), err)
              }
            }
            function getShim() {
              return shim
            }
            shim.isRequired = shim
            var ReactPropTypes = {
              array: shim,
              bigint: shim,
              bool: shim,
              func: shim,
              number: shim,
              object: shim,
              string: shim,
              symbol: shim,
              any: shim,
              arrayOf: getShim,
              element: shim,
              elementType: shim,
              instanceOf: getShim,
              node: shim,
              objectOf: getShim,
              oneOf: getShim,
              oneOfType: getShim,
              shape: getShim,
              exact: getShim,
              checkPropTypes: emptyFunctionWithReset,
              resetWarningCache: emptyFunction,
            }
            return (ReactPropTypes.PropTypes = ReactPropTypes), ReactPropTypes
          })
      },
      './node_modules/prop-types/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        module.exports = __webpack_require__(
          './node_modules/prop-types/factoryWithThrowingShims.js'
        )()
      },
      './node_modules/prop-types/lib/ReactPropTypesSecret.js': module => {
        'use strict'
        module.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
      },
      './node_modules/public-encrypt/browser.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        ;(exports.publicEncrypt = __webpack_require__(
          './node_modules/public-encrypt/publicEncrypt.js'
        )),
          (exports.privateDecrypt = __webpack_require__(
            './node_modules/public-encrypt/privateDecrypt.js'
          )),
          (exports.privateEncrypt = function privateEncrypt(key, buf) {
            return exports.publicEncrypt(key, buf, !0)
          }),
          (exports.publicDecrypt = function publicDecrypt(key, buf) {
            return exports.privateDecrypt(key, buf, !0)
          })
      },
      './node_modules/public-encrypt/mgf.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var createHash = __webpack_require__(
            './node_modules/create-hash/browser.js'
          ),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer
        function i2ops(c) {
          var out = Buffer.allocUnsafe(4)
          return out.writeUInt32BE(c, 0), out
        }
        module.exports = function (seed, len) {
          for (var c, t = Buffer.alloc(0), i = 0; t.length < len; )
            (c = i2ops(i++)),
              (t = Buffer.concat([
                t,
                createHash('sha1').update(seed).update(c).digest(),
              ]))
          return t.slice(0, len)
        }
      },
      './node_modules/public-encrypt/privateDecrypt.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var parseKeys = __webpack_require__(
            './node_modules/parse-asn1/index.js'
          ),
          mgf = __webpack_require__('./node_modules/public-encrypt/mgf.js'),
          xor = __webpack_require__('./node_modules/public-encrypt/xor.js'),
          BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          crt = __webpack_require__('./node_modules/browserify-rsa/index.js'),
          createHash = __webpack_require__(
            './node_modules/create-hash/browser.js'
          ),
          withPublic = __webpack_require__(
            './node_modules/public-encrypt/withPublic.js'
          ),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer
        module.exports = function privateDecrypt(privateKey, enc, reverse) {
          var padding
          padding = privateKey.padding ? privateKey.padding : reverse ? 1 : 4
          var msg,
            key = parseKeys(privateKey),
            k = key.modulus.byteLength()
          if (enc.length > k || new BN(enc).cmp(key.modulus) >= 0)
            throw new Error('decryption error')
          msg = reverse ? withPublic(new BN(enc), key) : crt(enc, key)
          var zBuffer = Buffer.alloc(k - msg.length)
          if (((msg = Buffer.concat([zBuffer, msg], k)), 4 === padding))
            return (function oaep(key, msg) {
              var k = key.modulus.byteLength(),
                iHash = createHash('sha1').update(Buffer.alloc(0)).digest(),
                hLen = iHash.length
              if (0 !== msg[0]) throw new Error('decryption error')
              var maskedSeed = msg.slice(1, hLen + 1),
                maskedDb = msg.slice(hLen + 1),
                seed = xor(maskedSeed, mgf(maskedDb, hLen)),
                db = xor(maskedDb, mgf(seed, k - hLen - 1))
              if (
                (function compare(a, b) {
                  ;(a = Buffer.from(a)), (b = Buffer.from(b))
                  var dif = 0,
                    len = a.length
                  a.length !== b.length &&
                    (dif++, (len = Math.min(a.length, b.length)))
                  var i = -1
                  for (; ++i < len; ) dif += a[i] ^ b[i]
                  return dif
                })(iHash, db.slice(0, hLen))
              )
                throw new Error('decryption error')
              var i = hLen
              for (; 0 === db[i]; ) i++
              if (1 !== db[i++]) throw new Error('decryption error')
              return db.slice(i)
            })(key, msg)
          if (1 === padding)
            return (function pkcs1(key, msg, reverse) {
              var p1 = msg.slice(0, 2),
                i = 2,
                status = 0
              for (; 0 !== msg[i++]; )
                if (i >= msg.length) {
                  status++
                  break
                }
              var ps = msg.slice(2, i - 1)
              ;(('0002' !== p1.toString('hex') && !reverse) ||
                ('0001' !== p1.toString('hex') && reverse)) &&
                status++
              ps.length < 8 && status++
              if (status) throw new Error('decryption error')
              return msg.slice(i)
            })(0, msg, reverse)
          if (3 === padding) return msg
          throw new Error('unknown padding')
        }
      },
      './node_modules/public-encrypt/publicEncrypt.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var parseKeys = __webpack_require__(
            './node_modules/parse-asn1/index.js'
          ),
          randomBytes = __webpack_require__(
            './node_modules/randombytes/browser.js'
          ),
          createHash = __webpack_require__(
            './node_modules/create-hash/browser.js'
          ),
          mgf = __webpack_require__('./node_modules/public-encrypt/mgf.js'),
          xor = __webpack_require__('./node_modules/public-encrypt/xor.js'),
          BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          withPublic = __webpack_require__(
            './node_modules/public-encrypt/withPublic.js'
          ),
          crt = __webpack_require__('./node_modules/browserify-rsa/index.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer
        module.exports = function publicEncrypt(publicKey, msg, reverse) {
          var padding
          padding = publicKey.padding ? publicKey.padding : reverse ? 1 : 4
          var paddedMsg,
            key = parseKeys(publicKey)
          if (4 === padding)
            paddedMsg = (function oaep(key, msg) {
              var k = key.modulus.byteLength(),
                mLen = msg.length,
                iHash = createHash('sha1').update(Buffer.alloc(0)).digest(),
                hLen = iHash.length,
                hLen2 = 2 * hLen
              if (mLen > k - hLen2 - 2) throw new Error('message too long')
              var ps = Buffer.alloc(k - mLen - hLen2 - 2),
                dblen = k - hLen - 1,
                seed = randomBytes(hLen),
                maskedDb = xor(
                  Buffer.concat([iHash, ps, Buffer.alloc(1, 1), msg], dblen),
                  mgf(seed, dblen)
                ),
                maskedSeed = xor(seed, mgf(maskedDb, hLen))
              return new BN(
                Buffer.concat([Buffer.alloc(1), maskedSeed, maskedDb], k)
              )
            })(key, msg)
          else if (1 === padding)
            paddedMsg = (function pkcs1(key, msg, reverse) {
              var ps,
                mLen = msg.length,
                k = key.modulus.byteLength()
              if (mLen > k - 11) throw new Error('message too long')
              ps = reverse
                ? Buffer.alloc(k - mLen - 3, 255)
                : (function nonZero(len) {
                    var num,
                      out = Buffer.allocUnsafe(len),
                      i = 0,
                      cache = randomBytes(2 * len),
                      cur = 0
                    for (; i < len; )
                      cur === cache.length &&
                        ((cache = randomBytes(2 * len)), (cur = 0)),
                        (num = cache[cur++]) && (out[i++] = num)
                    return out
                  })(k - mLen - 3)
              return new BN(
                Buffer.concat(
                  [Buffer.from([0, reverse ? 1 : 2]), ps, Buffer.alloc(1), msg],
                  k
                )
              )
            })(key, msg, reverse)
          else {
            if (3 !== padding) throw new Error('unknown padding')
            if ((paddedMsg = new BN(msg)).cmp(key.modulus) >= 0)
              throw new Error('data too long for modulus')
          }
          return reverse ? crt(paddedMsg, key) : withPublic(paddedMsg, key)
        }
      },
      './node_modules/public-encrypt/withPublic.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var BN = __webpack_require__('./node_modules/bn.js/lib/bn.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer
        module.exports = function withPublic(paddedMsg, key) {
          return Buffer.from(
            paddedMsg
              .toRed(BN.mont(key.modulus))
              .redPow(new BN(key.publicExponent))
              .fromRed()
              .toArray()
          )
        }
      },
      './node_modules/public-encrypt/xor.js': module => {
        module.exports = function xor(a, b) {
          for (var len = a.length, i = -1; ++i < len; ) a[i] ^= b[i]
          return a
        }
      },
      './node_modules/qr.js/lib/8BitByte.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var mode = __webpack_require__('./node_modules/qr.js/lib/mode.js')
        function QR8bitByte(data) {
          ;(this.mode = mode.MODE_8BIT_BYTE), (this.data = data)
        }
        ;(QR8bitByte.prototype = {
          getLength: function (buffer) {
            return this.data.length
          },
          write: function (buffer) {
            for (var i = 0; i < this.data.length; i++)
              buffer.put(this.data.charCodeAt(i), 8)
          },
        }),
          (module.exports = QR8bitByte)
      },
      './node_modules/qr.js/lib/BitBuffer.js': module => {
        function QRBitBuffer() {
          ;(this.buffer = new Array()), (this.length = 0)
        }
        ;(QRBitBuffer.prototype = {
          get: function (index) {
            var bufIndex = Math.floor(index / 8)
            return 1 == ((this.buffer[bufIndex] >>> (7 - (index % 8))) & 1)
          },
          put: function (num, length) {
            for (var i = 0; i < length; i++)
              this.putBit(1 == ((num >>> (length - i - 1)) & 1))
          },
          getLengthInBits: function () {
            return this.length
          },
          putBit: function (bit) {
            var bufIndex = Math.floor(this.length / 8)
            this.buffer.length <= bufIndex && this.buffer.push(0),
              bit && (this.buffer[bufIndex] |= 128 >>> this.length % 8),
              this.length++
          },
        }),
          (module.exports = QRBitBuffer)
      },
      './node_modules/qr.js/lib/ErrorCorrectLevel.js': module => {
        module.exports = { L: 1, M: 0, Q: 3, H: 2 }
      },
      './node_modules/qr.js/lib/Polynomial.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var math = __webpack_require__('./node_modules/qr.js/lib/math.js')
        function QRPolynomial(num, shift) {
          if (null == num.length) throw new Error(num.length + '/' + shift)
          for (var offset = 0; offset < num.length && 0 == num[offset]; )
            offset++
          this.num = new Array(num.length - offset + shift)
          for (var i = 0; i < num.length - offset; i++)
            this.num[i] = num[i + offset]
        }
        ;(QRPolynomial.prototype = {
          get: function (index) {
            return this.num[index]
          },
          getLength: function () {
            return this.num.length
          },
          multiply: function (e) {
            for (
              var num = new Array(this.getLength() + e.getLength() - 1), i = 0;
              i < this.getLength();
              i++
            )
              for (var j = 0; j < e.getLength(); j++)
                num[i + j] ^= math.gexp(
                  math.glog(this.get(i)) + math.glog(e.get(j))
                )
            return new QRPolynomial(num, 0)
          },
          mod: function (e) {
            if (this.getLength() - e.getLength() < 0) return this
            for (
              var ratio = math.glog(this.get(0)) - math.glog(e.get(0)),
                num = new Array(this.getLength()),
                i = 0;
              i < this.getLength();
              i++
            )
              num[i] = this.get(i)
            for (i = 0; i < e.getLength(); i++)
              num[i] ^= math.gexp(math.glog(e.get(i)) + ratio)
            return new QRPolynomial(num, 0).mod(e)
          },
        }),
          (module.exports = QRPolynomial)
      },
      './node_modules/qr.js/lib/QRCode.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var BitByte = __webpack_require__(
            './node_modules/qr.js/lib/8BitByte.js'
          ),
          RSBlock = __webpack_require__('./node_modules/qr.js/lib/RSBlock.js'),
          BitBuffer = __webpack_require__(
            './node_modules/qr.js/lib/BitBuffer.js'
          ),
          util = __webpack_require__('./node_modules/qr.js/lib/util.js'),
          Polynomial = __webpack_require__(
            './node_modules/qr.js/lib/Polynomial.js'
          )
        function QRCode(typeNumber, errorCorrectLevel) {
          ;(this.typeNumber = typeNumber),
            (this.errorCorrectLevel = errorCorrectLevel),
            (this.modules = null),
            (this.moduleCount = 0),
            (this.dataCache = null),
            (this.dataList = [])
        }
        var proto = QRCode.prototype
        ;(proto.addData = function (data) {
          var newData = new BitByte(data)
          this.dataList.push(newData), (this.dataCache = null)
        }),
          (proto.isDark = function (row, col) {
            if (
              row < 0 ||
              this.moduleCount <= row ||
              col < 0 ||
              this.moduleCount <= col
            )
              throw new Error(row + ',' + col)
            return this.modules[row][col]
          }),
          (proto.getModuleCount = function () {
            return this.moduleCount
          }),
          (proto.make = function () {
            if (this.typeNumber < 1) {
              var typeNumber = 1
              for (typeNumber = 1; typeNumber < 40; typeNumber++) {
                for (
                  var rsBlocks = RSBlock.getRSBlocks(
                      typeNumber,
                      this.errorCorrectLevel
                    ),
                    buffer = new BitBuffer(),
                    totalDataCount = 0,
                    i = 0;
                  i < rsBlocks.length;
                  i++
                )
                  totalDataCount += rsBlocks[i].dataCount
                for (i = 0; i < this.dataList.length; i++) {
                  var data = this.dataList[i]
                  buffer.put(data.mode, 4),
                    buffer.put(
                      data.getLength(),
                      util.getLengthInBits(data.mode, typeNumber)
                    ),
                    data.write(buffer)
                }
                if (buffer.getLengthInBits() <= 8 * totalDataCount) break
              }
              this.typeNumber = typeNumber
            }
            this.makeImpl(!1, this.getBestMaskPattern())
          }),
          (proto.makeImpl = function (test, maskPattern) {
            ;(this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount))
            for (var row = 0; row < this.moduleCount; row++) {
              this.modules[row] = new Array(this.moduleCount)
              for (var col = 0; col < this.moduleCount; col++)
                this.modules[row][col] = null
            }
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(test, maskPattern),
              this.typeNumber >= 7 && this.setupTypeNumber(test),
              null == this.dataCache &&
                (this.dataCache = QRCode.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList
                )),
              this.mapData(this.dataCache, maskPattern)
          }),
          (proto.setupPositionProbePattern = function (row, col) {
            for (var r = -1; r <= 7; r++)
              if (!(row + r <= -1 || this.moduleCount <= row + r))
                for (var c = -1; c <= 7; c++)
                  col + c <= -1 ||
                    this.moduleCount <= col + c ||
                    (this.modules[row + r][col + c] =
                      (0 <= r && r <= 6 && (0 == c || 6 == c)) ||
                      (0 <= c && c <= 6 && (0 == r || 6 == r)) ||
                      (2 <= r && r <= 4 && 2 <= c && c <= 4))
          }),
          (proto.getBestMaskPattern = function () {
            for (var minLostPoint = 0, pattern = 0, i = 0; i < 8; i++) {
              this.makeImpl(!0, i)
              var lostPoint = util.getLostPoint(this)
              ;(0 == i || minLostPoint > lostPoint) &&
                ((minLostPoint = lostPoint), (pattern = i))
            }
            return pattern
          }),
          (proto.createMovieClip = function (target_mc, instance_name, depth) {
            var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth)
            this.make()
            for (var row = 0; row < this.modules.length; row++)
              for (
                var y = 1 * row, col = 0;
                col < this.modules[row].length;
                col++
              ) {
                var x = 1 * col
                this.modules[row][col] &&
                  (qr_mc.beginFill(0, 100),
                  qr_mc.moveTo(x, y),
                  qr_mc.lineTo(x + 1, y),
                  qr_mc.lineTo(x + 1, y + 1),
                  qr_mc.lineTo(x, y + 1),
                  qr_mc.endFill())
              }
            return qr_mc
          }),
          (proto.setupTimingPattern = function () {
            for (var r = 8; r < this.moduleCount - 8; r++)
              null == this.modules[r][6] && (this.modules[r][6] = r % 2 == 0)
            for (var c = 8; c < this.moduleCount - 8; c++)
              null == this.modules[6][c] && (this.modules[6][c] = c % 2 == 0)
          }),
          (proto.setupPositionAdjustPattern = function () {
            for (
              var pos = util.getPatternPosition(this.typeNumber), i = 0;
              i < pos.length;
              i++
            )
              for (var j = 0; j < pos.length; j++) {
                var row = pos[i],
                  col = pos[j]
                if (null == this.modules[row][col])
                  for (var r = -2; r <= 2; r++)
                    for (var c = -2; c <= 2; c++)
                      this.modules[row + r][col + c] =
                        -2 == r ||
                        2 == r ||
                        -2 == c ||
                        2 == c ||
                        (0 == r && 0 == c)
              }
          }),
          (proto.setupTypeNumber = function (test) {
            for (
              var bits = util.getBCHTypeNumber(this.typeNumber), i = 0;
              i < 18;
              i++
            ) {
              var mod = !test && 1 == ((bits >> i) & 1)
              this.modules[Math.floor(i / 3)][
                (i % 3) + this.moduleCount - 8 - 3
              ] = mod
            }
            for (i = 0; i < 18; i++) {
              mod = !test && 1 == ((bits >> i) & 1)
              this.modules[(i % 3) + this.moduleCount - 8 - 3][
                Math.floor(i / 3)
              ] = mod
            }
          }),
          (proto.setupTypeInfo = function (test, maskPattern) {
            for (
              var data = (this.errorCorrectLevel << 3) | maskPattern,
                bits = util.getBCHTypeInfo(data),
                i = 0;
              i < 15;
              i++
            ) {
              var mod = !test && 1 == ((bits >> i) & 1)
              i < 6
                ? (this.modules[i][8] = mod)
                : i < 8
                  ? (this.modules[i + 1][8] = mod)
                  : (this.modules[this.moduleCount - 15 + i][8] = mod)
            }
            for (i = 0; i < 15; i++) {
              mod = !test && 1 == ((bits >> i) & 1)
              i < 8
                ? (this.modules[8][this.moduleCount - i - 1] = mod)
                : i < 9
                  ? (this.modules[8][15 - i - 1 + 1] = mod)
                  : (this.modules[8][15 - i - 1] = mod)
            }
            this.modules[this.moduleCount - 8][8] = !test
          }),
          (proto.mapData = function (data, maskPattern) {
            for (
              var inc = -1,
                row = this.moduleCount - 1,
                bitIndex = 7,
                byteIndex = 0,
                col = this.moduleCount - 1;
              col > 0;
              col -= 2
            )
              for (6 == col && col--; ; ) {
                for (var c = 0; c < 2; c++)
                  if (null == this.modules[row][col - c]) {
                    var dark = !1
                    byteIndex < data.length &&
                      (dark = 1 == ((data[byteIndex] >>> bitIndex) & 1)),
                      util.getMask(maskPattern, row, col - c) && (dark = !dark),
                      (this.modules[row][col - c] = dark),
                      -1 == --bitIndex && (byteIndex++, (bitIndex = 7))
                  }
                if ((row += inc) < 0 || this.moduleCount <= row) {
                  ;(row -= inc), (inc = -inc)
                  break
                }
              }
          }),
          (QRCode.PAD0 = 236),
          (QRCode.PAD1 = 17),
          (QRCode.createData = function (
            typeNumber,
            errorCorrectLevel,
            dataList
          ) {
            for (
              var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel),
                buffer = new BitBuffer(),
                i = 0;
              i < dataList.length;
              i++
            ) {
              var data = dataList[i]
              buffer.put(data.mode, 4),
                buffer.put(
                  data.getLength(),
                  util.getLengthInBits(data.mode, typeNumber)
                ),
                data.write(buffer)
            }
            var totalDataCount = 0
            for (i = 0; i < rsBlocks.length; i++)
              totalDataCount += rsBlocks[i].dataCount
            if (buffer.getLengthInBits() > 8 * totalDataCount)
              throw new Error(
                'code length overflow. (' +
                  buffer.getLengthInBits() +
                  '>' +
                  8 * totalDataCount +
                  ')'
              )
            for (
              buffer.getLengthInBits() + 4 <= 8 * totalDataCount &&
              buffer.put(0, 4);
              buffer.getLengthInBits() % 8 != 0;

            )
              buffer.putBit(!1)
            for (
              ;
              !(
                buffer.getLengthInBits() >= 8 * totalDataCount ||
                (buffer.put(QRCode.PAD0, 8),
                buffer.getLengthInBits() >= 8 * totalDataCount)
              );

            )
              buffer.put(QRCode.PAD1, 8)
            return QRCode.createBytes(buffer, rsBlocks)
          }),
          (QRCode.createBytes = function (buffer, rsBlocks) {
            for (
              var offset = 0,
                maxDcCount = 0,
                maxEcCount = 0,
                dcdata = new Array(rsBlocks.length),
                ecdata = new Array(rsBlocks.length),
                r = 0;
              r < rsBlocks.length;
              r++
            ) {
              var dcCount = rsBlocks[r].dataCount,
                ecCount = rsBlocks[r].totalCount - dcCount
              ;(maxDcCount = Math.max(maxDcCount, dcCount)),
                (maxEcCount = Math.max(maxEcCount, ecCount)),
                (dcdata[r] = new Array(dcCount))
              for (var i = 0; i < dcdata[r].length; i++)
                dcdata[r][i] = 255 & buffer.buffer[i + offset]
              offset += dcCount
              var rsPoly = util.getErrorCorrectPolynomial(ecCount),
                modPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1).mod(
                  rsPoly
                )
              ecdata[r] = new Array(rsPoly.getLength() - 1)
              for (i = 0; i < ecdata[r].length; i++) {
                var modIndex = i + modPoly.getLength() - ecdata[r].length
                ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0
              }
            }
            var totalCodeCount = 0
            for (i = 0; i < rsBlocks.length; i++)
              totalCodeCount += rsBlocks[i].totalCount
            var data = new Array(totalCodeCount),
              index = 0
            for (i = 0; i < maxDcCount; i++)
              for (r = 0; r < rsBlocks.length; r++)
                i < dcdata[r].length && (data[index++] = dcdata[r][i])
            for (i = 0; i < maxEcCount; i++)
              for (r = 0; r < rsBlocks.length; r++)
                i < ecdata[r].length && (data[index++] = ecdata[r][i])
            return data
          }),
          (module.exports = QRCode)
      },
      './node_modules/qr.js/lib/RSBlock.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var ECL = __webpack_require__(
          './node_modules/qr.js/lib/ErrorCorrectLevel.js'
        )
        function QRRSBlock(totalCount, dataCount) {
          ;(this.totalCount = totalCount), (this.dataCount = dataCount)
        }
        ;(QRRSBlock.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ]),
          (QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
            var rsBlock = QRRSBlock.getRsBlockTable(
              typeNumber,
              errorCorrectLevel
            )
            if (null == rsBlock)
              throw new Error(
                'bad rs block @ typeNumber:' +
                  typeNumber +
                  '/errorCorrectLevel:' +
                  errorCorrectLevel
              )
            for (
              var length = rsBlock.length / 3, list = new Array(), i = 0;
              i < length;
              i++
            )
              for (
                var count = rsBlock[3 * i + 0],
                  totalCount = rsBlock[3 * i + 1],
                  dataCount = rsBlock[3 * i + 2],
                  j = 0;
                j < count;
                j++
              )
                list.push(new QRRSBlock(totalCount, dataCount))
            return list
          }),
          (QRRSBlock.getRsBlockTable = function (
            typeNumber,
            errorCorrectLevel
          ) {
            switch (errorCorrectLevel) {
              case ECL.L:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (typeNumber - 1) + 0]
              case ECL.M:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (typeNumber - 1) + 1]
              case ECL.Q:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (typeNumber - 1) + 2]
              case ECL.H:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (typeNumber - 1) + 3]
              default:
                return
            }
          }),
          (module.exports = QRRSBlock)
      },
      './node_modules/qr.js/lib/math.js': module => {
        for (
          var QRMath = {
              glog: function (n) {
                if (n < 1) throw new Error('glog(' + n + ')')
                return QRMath.LOG_TABLE[n]
              },
              gexp: function (n) {
                for (; n < 0; ) n += 255
                for (; n >= 256; ) n -= 255
                return QRMath.EXP_TABLE[n]
              },
              EXP_TABLE: new Array(256),
              LOG_TABLE: new Array(256),
            },
            i = 0;
          i < 8;
          i++
        )
          QRMath.EXP_TABLE[i] = 1 << i
        for (i = 8; i < 256; i++)
          QRMath.EXP_TABLE[i] =
            QRMath.EXP_TABLE[i - 4] ^
            QRMath.EXP_TABLE[i - 5] ^
            QRMath.EXP_TABLE[i - 6] ^
            QRMath.EXP_TABLE[i - 8]
        for (i = 0; i < 255; i++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i
        module.exports = QRMath
      },
      './node_modules/qr.js/lib/mode.js': module => {
        module.exports = {
          MODE_NUMBER: 1,
          MODE_ALPHA_NUM: 2,
          MODE_8BIT_BYTE: 4,
          MODE_KANJI: 8,
        }
      },
      './node_modules/qr.js/lib/util.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Mode = __webpack_require__('./node_modules/qr.js/lib/mode.js'),
          Polynomial = __webpack_require__(
            './node_modules/qr.js/lib/Polynomial.js'
          ),
          math = __webpack_require__('./node_modules/qr.js/lib/math.js'),
          QRMaskPattern_PATTERN000 = 0,
          QRMaskPattern_PATTERN001 = 1,
          QRMaskPattern_PATTERN010 = 2,
          QRMaskPattern_PATTERN011 = 3,
          QRMaskPattern_PATTERN100 = 4,
          QRMaskPattern_PATTERN101 = 5,
          QRMaskPattern_PATTERN110 = 6,
          QRMaskPattern_PATTERN111 = 7,
          QRUtil = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (data) {
              for (
                var d = data << 10;
                QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0;

              )
                d ^=
                  QRUtil.G15 <<
                  (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15))
              return ((data << 10) | d) ^ QRUtil.G15_MASK
            },
            getBCHTypeNumber: function (data) {
              for (
                var d = data << 12;
                QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0;

              )
                d ^=
                  QRUtil.G18 <<
                  (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18))
              return (data << 12) | d
            },
            getBCHDigit: function (data) {
              for (var digit = 0; 0 != data; ) digit++, (data >>>= 1)
              return digit
            },
            getPatternPosition: function (typeNumber) {
              return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1]
            },
            getMask: function (maskPattern, i, j) {
              switch (maskPattern) {
                case QRMaskPattern_PATTERN000:
                  return (i + j) % 2 == 0
                case QRMaskPattern_PATTERN001:
                  return i % 2 == 0
                case QRMaskPattern_PATTERN010:
                  return j % 3 == 0
                case QRMaskPattern_PATTERN011:
                  return (i + j) % 3 == 0
                case QRMaskPattern_PATTERN100:
                  return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0
                case QRMaskPattern_PATTERN101:
                  return ((i * j) % 2) + ((i * j) % 3) == 0
                case QRMaskPattern_PATTERN110:
                  return (((i * j) % 2) + ((i * j) % 3)) % 2 == 0
                case QRMaskPattern_PATTERN111:
                  return (((i * j) % 3) + ((i + j) % 2)) % 2 == 0
                default:
                  throw new Error('bad maskPattern:' + maskPattern)
              }
            },
            getErrorCorrectPolynomial: function (errorCorrectLength) {
              for (
                var a = new Polynomial([1], 0), i = 0;
                i < errorCorrectLength;
                i++
              )
                a = a.multiply(new Polynomial([1, math.gexp(i)], 0))
              return a
            },
            getLengthInBits: function (mode, type) {
              if (1 <= type && type < 10)
                switch (mode) {
                  case Mode.MODE_NUMBER:
                    return 10
                  case Mode.MODE_ALPHA_NUM:
                    return 9
                  case Mode.MODE_8BIT_BYTE:
                  case Mode.MODE_KANJI:
                    return 8
                  default:
                    throw new Error('mode:' + mode)
                }
              else if (type < 27)
                switch (mode) {
                  case Mode.MODE_NUMBER:
                    return 12
                  case Mode.MODE_ALPHA_NUM:
                    return 11
                  case Mode.MODE_8BIT_BYTE:
                    return 16
                  case Mode.MODE_KANJI:
                    return 10
                  default:
                    throw new Error('mode:' + mode)
                }
              else {
                if (!(type < 41)) throw new Error('type:' + type)
                switch (mode) {
                  case Mode.MODE_NUMBER:
                    return 14
                  case Mode.MODE_ALPHA_NUM:
                    return 13
                  case Mode.MODE_8BIT_BYTE:
                    return 16
                  case Mode.MODE_KANJI:
                    return 12
                  default:
                    throw new Error('mode:' + mode)
                }
              }
            },
            getLostPoint: function (qrCode) {
              for (
                var moduleCount = qrCode.getModuleCount(),
                  lostPoint = 0,
                  row = 0;
                row < moduleCount;
                row++
              )
                for (var col = 0; col < moduleCount; col++) {
                  for (
                    var sameCount = 0, dark = qrCode.isDark(row, col), r = -1;
                    r <= 1;
                    r++
                  )
                    if (!(row + r < 0 || moduleCount <= row + r))
                      for (var c = -1; c <= 1; c++)
                        col + c < 0 ||
                          moduleCount <= col + c ||
                          (0 == r && 0 == c) ||
                          (dark == qrCode.isDark(row + r, col + c) &&
                            sameCount++)
                  sameCount > 5 && (lostPoint += 3 + sameCount - 5)
                }
              for (row = 0; row < moduleCount - 1; row++)
                for (col = 0; col < moduleCount - 1; col++) {
                  var count = 0
                  qrCode.isDark(row, col) && count++,
                    qrCode.isDark(row + 1, col) && count++,
                    qrCode.isDark(row, col + 1) && count++,
                    qrCode.isDark(row + 1, col + 1) && count++,
                    (0 != count && 4 != count) || (lostPoint += 3)
                }
              for (row = 0; row < moduleCount; row++)
                for (col = 0; col < moduleCount - 6; col++)
                  qrCode.isDark(row, col) &&
                    !qrCode.isDark(row, col + 1) &&
                    qrCode.isDark(row, col + 2) &&
                    qrCode.isDark(row, col + 3) &&
                    qrCode.isDark(row, col + 4) &&
                    !qrCode.isDark(row, col + 5) &&
                    qrCode.isDark(row, col + 6) &&
                    (lostPoint += 40)
              for (col = 0; col < moduleCount; col++)
                for (row = 0; row < moduleCount - 6; row++)
                  qrCode.isDark(row, col) &&
                    !qrCode.isDark(row + 1, col) &&
                    qrCode.isDark(row + 2, col) &&
                    qrCode.isDark(row + 3, col) &&
                    qrCode.isDark(row + 4, col) &&
                    !qrCode.isDark(row + 5, col) &&
                    qrCode.isDark(row + 6, col) &&
                    (lostPoint += 40)
              var darkCount = 0
              for (col = 0; col < moduleCount; col++)
                for (row = 0; row < moduleCount; row++)
                  qrCode.isDark(row, col) && darkCount++
              return (lostPoint +=
                10 *
                (Math.abs((100 * darkCount) / moduleCount / moduleCount - 50) /
                  5))
            },
          }
        module.exports = QRUtil
      },
      './node_modules/randombytes/browser.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var process = __webpack_require__('./node_modules/process/browser.js')
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          crypto =
            __webpack_require__.g.crypto || __webpack_require__.g.msCrypto
        crypto && crypto.getRandomValues
          ? (module.exports = function randomBytes(size, cb) {
              if (size > 4294967295)
                throw new RangeError('requested too many random bytes')
              var bytes = Buffer.allocUnsafe(size)
              if (size > 0)
                if (size > 65536)
                  for (var generated = 0; generated < size; generated += 65536)
                    crypto.getRandomValues(
                      bytes.slice(generated, generated + 65536)
                    )
                else crypto.getRandomValues(bytes)
              if ('function' == typeof cb)
                return process.nextTick(function () {
                  cb(null, bytes)
                })
              return bytes
            })
          : (module.exports = function oldBrowser() {
              throw new Error(
                'Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11'
              )
            })
      },
      './node_modules/randomfill/browser.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var process = __webpack_require__('./node_modules/process/browser.js')
        function oldBrowser() {
          throw new Error(
            'secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11'
          )
        }
        var safeBuffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ),
          randombytes = __webpack_require__(
            './node_modules/randombytes/browser.js'
          ),
          Buffer = safeBuffer.Buffer,
          kBufferMaxLength = safeBuffer.kMaxLength,
          crypto =
            __webpack_require__.g.crypto || __webpack_require__.g.msCrypto,
          kMaxUint32 = Math.pow(2, 32) - 1
        function assertOffset(offset, length) {
          if ('number' != typeof offset || offset != offset)
            throw new TypeError('offset must be a number')
          if (offset > kMaxUint32 || offset < 0)
            throw new TypeError('offset must be a uint32')
          if (offset > kBufferMaxLength || offset > length)
            throw new RangeError('offset out of range')
        }
        function assertSize(size, offset, length) {
          if ('number' != typeof size || size != size)
            throw new TypeError('size must be a number')
          if (size > kMaxUint32 || size < 0)
            throw new TypeError('size must be a uint32')
          if (size + offset > length || size > kBufferMaxLength)
            throw new RangeError('buffer too small')
        }
        function actualFill(buf, offset, size, cb) {
          if (process.browser) {
            var ourBuf = buf.buffer,
              uint = new Uint8Array(ourBuf, offset, size)
            return (
              crypto.getRandomValues(uint),
              cb
                ? void process.nextTick(function () {
                    cb(null, buf)
                  })
                : buf
            )
          }
          if (!cb) return randombytes(size).copy(buf, offset), buf
          randombytes(size, function (err, bytes) {
            if (err) return cb(err)
            bytes.copy(buf, offset), cb(null, buf)
          })
        }
        ;(crypto && crypto.getRandomValues) || !process.browser
          ? ((exports.randomFill = function randomFill(buf, offset, size, cb) {
              if (
                !(
                  Buffer.isBuffer(buf) ||
                  buf instanceof __webpack_require__.g.Uint8Array
                )
              )
                throw new TypeError(
                  '"buf" argument must be a Buffer or Uint8Array'
                )
              if ('function' == typeof offset)
                (cb = offset), (offset = 0), (size = buf.length)
              else if ('function' == typeof size)
                (cb = size), (size = buf.length - offset)
              else if ('function' != typeof cb)
                throw new TypeError('"cb" argument must be a function')
              return (
                assertOffset(offset, buf.length),
                assertSize(size, offset, buf.length),
                actualFill(buf, offset, size, cb)
              )
            }),
            (exports.randomFillSync = function randomFillSync(
              buf,
              offset,
              size
            ) {
              void 0 === offset && (offset = 0)
              if (
                !(
                  Buffer.isBuffer(buf) ||
                  buf instanceof __webpack_require__.g.Uint8Array
                )
              )
                throw new TypeError(
                  '"buf" argument must be a Buffer or Uint8Array'
                )
              assertOffset(offset, buf.length),
                void 0 === size && (size = buf.length - offset)
              return (
                assertSize(size, offset, buf.length),
                actualFill(buf, offset, size)
              )
            }))
          : ((exports.randomFill = oldBrowser),
            (exports.randomFillSync = oldBrowser))
      },
      './node_modules/react-qr-code/lib/QRCodeSvg/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        Object.defineProperty(exports, '__esModule', { value: !0 })
        var _extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key])
              }
              return target
            },
          _propTypes2 = _interopRequireDefault(
            __webpack_require__('./node_modules/prop-types/index.js')
          ),
          _react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          _react2 = _interopRequireDefault(_react)
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }
        var propTypes = {
            bgColor: _propTypes2.default.oneOfType([
              _propTypes2.default.object,
              _propTypes2.default.string,
            ]).isRequired,
            bgD: _propTypes2.default.string.isRequired,
            fgColor: _propTypes2.default.oneOfType([
              _propTypes2.default.object,
              _propTypes2.default.string,
            ]).isRequired,
            fgD: _propTypes2.default.string.isRequired,
            size: _propTypes2.default.number.isRequired,
            title: _propTypes2.default.string,
            viewBoxSize: _propTypes2.default.number.isRequired,
            xmlns: _propTypes2.default.string,
          },
          QRCodeSvg = (0, _react.forwardRef)(function (_ref, ref) {
            var bgColor = _ref.bgColor,
              bgD = _ref.bgD,
              fgD = _ref.fgD,
              fgColor = _ref.fgColor,
              size = _ref.size,
              title = _ref.title,
              viewBoxSize = _ref.viewBoxSize,
              _ref$xmlns = _ref.xmlns,
              xmlns =
                void 0 === _ref$xmlns
                  ? 'http://www.w3.org/2000/svg'
                  : _ref$xmlns,
              props = (function _objectWithoutProperties(obj, keys) {
                var target = {}
                for (var i in obj)
                  keys.indexOf(i) >= 0 ||
                    (Object.prototype.hasOwnProperty.call(obj, i) &&
                      (target[i] = obj[i]))
                return target
              })(_ref, [
                'bgColor',
                'bgD',
                'fgD',
                'fgColor',
                'size',
                'title',
                'viewBoxSize',
                'xmlns',
              ])
            return _react2.default.createElement(
              'svg',
              _extends({}, props, {
                height: size,
                ref,
                viewBox: '0 0 ' + viewBoxSize + ' ' + viewBoxSize,
                width: size,
                xmlns,
              }),
              title
                ? _react2.default.createElement('title', null, title)
                : null,
              _react2.default.createElement('path', { d: bgD, fill: bgColor }),
              _react2.default.createElement('path', { d: fgD, fill: fgColor })
            )
          })
        ;(QRCodeSvg.displayName = 'QRCodeSvg'),
          (QRCodeSvg.propTypes = propTypes),
          (exports.default = QRCodeSvg)
      },
      './node_modules/react-qr-code/lib/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var _extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key])
              }
              return target
            },
          _propTypes2 = _interopRequireDefault(
            __webpack_require__('./node_modules/prop-types/index.js')
          ),
          _ErrorCorrectLevel2 = _interopRequireDefault(
            __webpack_require__('./node_modules/qr.js/lib/ErrorCorrectLevel.js')
          ),
          _QRCode2 = _interopRequireDefault(
            __webpack_require__('./node_modules/qr.js/lib/QRCode.js')
          ),
          _react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          _react2 = _interopRequireDefault(_react),
          _QRCodeSvg2 = _interopRequireDefault(
            __webpack_require__(
              './node_modules/react-qr-code/lib/QRCodeSvg/index.js'
            )
          )
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }
        var propTypes = {
            bgColor: _propTypes2.default.oneOfType([
              _propTypes2.default.object,
              _propTypes2.default.string,
            ]),
            fgColor: _propTypes2.default.oneOfType([
              _propTypes2.default.object,
              _propTypes2.default.string,
            ]),
            level: _propTypes2.default.string,
            size: _propTypes2.default.number,
            value: _propTypes2.default.string.isRequired,
          },
          QRCode = (0, _react.forwardRef)(function (_ref, ref) {
            var _ref$bgColor = _ref.bgColor,
              bgColor = void 0 === _ref$bgColor ? '#FFFFFF' : _ref$bgColor,
              _ref$fgColor = _ref.fgColor,
              fgColor = void 0 === _ref$fgColor ? '#000000' : _ref$fgColor,
              _ref$level = _ref.level,
              level = void 0 === _ref$level ? 'L' : _ref$level,
              _ref$size = _ref.size,
              size = void 0 === _ref$size ? 256 : _ref$size,
              value = _ref.value,
              props = (function _objectWithoutProperties(obj, keys) {
                var target = {}
                for (var i in obj)
                  keys.indexOf(i) >= 0 ||
                    (Object.prototype.hasOwnProperty.call(obj, i) &&
                      (target[i] = obj[i]))
                return target
              })(_ref, ['bgColor', 'fgColor', 'level', 'size', 'value']),
              qrcode = new _QRCode2.default(
                -1,
                _ErrorCorrectLevel2.default[level]
              )
            qrcode.addData(value), qrcode.make()
            var cells = qrcode.modules
            return _react2.default.createElement(
              _QRCodeSvg2.default,
              _extends({}, props, {
                bgColor,
                bgD: cells
                  .map(function (row, rowIndex) {
                    return row
                      .map(function (cell, cellIndex) {
                        return cell
                          ? ''
                          : 'M ' +
                              cellIndex +
                              ' ' +
                              rowIndex +
                              ' l 1 0 0 1 -1 0 Z'
                      })
                      .join(' ')
                  })
                  .join(' '),
                fgColor,
                fgD: cells
                  .map(function (row, rowIndex) {
                    return row
                      .map(function (cell, cellIndex) {
                        return cell
                          ? 'M ' +
                              cellIndex +
                              ' ' +
                              rowIndex +
                              ' l 1 0 0 1 -1 0 Z'
                          : ''
                      })
                      .join(' ')
                  })
                  .join(' '),
                ref,
                size,
                viewBoxSize: cells.length,
              })
            )
          })
        ;(QRCode.displayName = 'QRCode'),
          (QRCode.propTypes = propTypes),
          (exports.Ay = QRCode)
      },
      './node_modules/readable-stream/readable-browser.js': (
        module,
        exports,
        __webpack_require__
      ) => {
        ;((exports = module.exports =
          __webpack_require__(
            './node_modules/readable-stream/lib/_stream_readable.js'
          )).Stream = exports),
          (exports.Readable = exports),
          (exports.Writable = __webpack_require__(
            './node_modules/readable-stream/lib/_stream_writable.js'
          )),
          (exports.Duplex = __webpack_require__(
            './node_modules/readable-stream/lib/_stream_duplex.js'
          )),
          (exports.Transform = __webpack_require__(
            './node_modules/readable-stream/lib/_stream_transform.js'
          )),
          (exports.PassThrough = __webpack_require__(
            './node_modules/readable-stream/lib/_stream_passthrough.js'
          )),
          (exports.finished = __webpack_require__(
            './node_modules/readable-stream/lib/internal/streams/end-of-stream.js'
          )),
          (exports.pipeline = __webpack_require__(
            './node_modules/readable-stream/lib/internal/streams/pipeline.js'
          ))
      },
      './node_modules/ripemd160/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
            './node_modules/buffer/index.js'
          ).Buffer,
          inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          HashBase = __webpack_require__(
            './node_modules/ripemd160/node_modules/hash-base/index.js'
          ),
          ARRAY16 = new Array(16),
          zl = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1,
            10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1,
            2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15,
            14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
          ],
          zr = [
            5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7,
            0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9,
            11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13,
            9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
          ],
          sl = [
            11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
            11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
            15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14,
            5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8,
            5, 6,
          ],
          sr = [
            8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15,
            7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6,
            14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9,
            12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13,
            11, 11,
          ],
          hl = [0, 1518500249, 1859775393, 2400959708, 2840853838],
          hr = [1352829926, 1548603684, 1836072691, 2053994217, 0]
        function RIPEMD160() {
          HashBase.call(this, 64),
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520)
        }
        function rotl(x, n) {
          return (x << n) | (x >>> (32 - n))
        }
        function fn1(a, b, c, d, e, m, k, s) {
          return (rotl((a + (b ^ c ^ d) + m + k) | 0, s) + e) | 0
        }
        function fn2(a, b, c, d, e, m, k, s) {
          return (rotl((a + ((b & c) | (~b & d)) + m + k) | 0, s) + e) | 0
        }
        function fn3(a, b, c, d, e, m, k, s) {
          return (rotl((a + ((b | ~c) ^ d) + m + k) | 0, s) + e) | 0
        }
        function fn4(a, b, c, d, e, m, k, s) {
          return (rotl((a + ((b & d) | (c & ~d)) + m + k) | 0, s) + e) | 0
        }
        function fn5(a, b, c, d, e, m, k, s) {
          return (rotl((a + (b ^ (c | ~d)) + m + k) | 0, s) + e) | 0
        }
        inherits(RIPEMD160, HashBase),
          (RIPEMD160.prototype._update = function () {
            for (var words = ARRAY16, j = 0; j < 16; ++j)
              words[j] = this._block.readInt32LE(4 * j)
            for (
              var al = 0 | this._a,
                bl = 0 | this._b,
                cl = 0 | this._c,
                dl = 0 | this._d,
                el = 0 | this._e,
                ar = 0 | this._a,
                br = 0 | this._b,
                cr = 0 | this._c,
                dr = 0 | this._d,
                er = 0 | this._e,
                i = 0;
              i < 80;
              i += 1
            ) {
              var tl, tr
              i < 16
                ? ((tl = fn1(al, bl, cl, dl, el, words[zl[i]], hl[0], sl[i])),
                  (tr = fn5(ar, br, cr, dr, er, words[zr[i]], hr[0], sr[i])))
                : i < 32
                  ? ((tl = fn2(al, bl, cl, dl, el, words[zl[i]], hl[1], sl[i])),
                    (tr = fn4(ar, br, cr, dr, er, words[zr[i]], hr[1], sr[i])))
                  : i < 48
                    ? ((tl = fn3(
                        al,
                        bl,
                        cl,
                        dl,
                        el,
                        words[zl[i]],
                        hl[2],
                        sl[i]
                      )),
                      (tr = fn3(
                        ar,
                        br,
                        cr,
                        dr,
                        er,
                        words[zr[i]],
                        hr[2],
                        sr[i]
                      )))
                    : i < 64
                      ? ((tl = fn4(
                          al,
                          bl,
                          cl,
                          dl,
                          el,
                          words[zl[i]],
                          hl[3],
                          sl[i]
                        )),
                        (tr = fn2(
                          ar,
                          br,
                          cr,
                          dr,
                          er,
                          words[zr[i]],
                          hr[3],
                          sr[i]
                        )))
                      : ((tl = fn5(
                          al,
                          bl,
                          cl,
                          dl,
                          el,
                          words[zl[i]],
                          hl[4],
                          sl[i]
                        )),
                        (tr = fn1(
                          ar,
                          br,
                          cr,
                          dr,
                          er,
                          words[zr[i]],
                          hr[4],
                          sr[i]
                        ))),
                (al = el),
                (el = dl),
                (dl = rotl(cl, 10)),
                (cl = bl),
                (bl = tl),
                (ar = er),
                (er = dr),
                (dr = rotl(cr, 10)),
                (cr = br),
                (br = tr)
            }
            var t = (this._b + cl + dr) | 0
            ;(this._b = (this._c + dl + er) | 0),
              (this._c = (this._d + el + ar) | 0),
              (this._d = (this._e + al + br) | 0),
              (this._e = (this._a + bl + cr) | 0),
              (this._a = t)
          }),
          (RIPEMD160.prototype._digest = function () {
            ;(this._block[this._blockOffset++] = 128),
              this._blockOffset > 56 &&
                (this._block.fill(0, this._blockOffset, 64),
                this._update(),
                (this._blockOffset = 0)),
              this._block.fill(0, this._blockOffset, 56),
              this._block.writeUInt32LE(this._length[0], 56),
              this._block.writeUInt32LE(this._length[1], 60),
              this._update()
            var buffer = Buffer.alloc ? Buffer.alloc(20) : new Buffer(20)
            return (
              buffer.writeInt32LE(this._a, 0),
              buffer.writeInt32LE(this._b, 4),
              buffer.writeInt32LE(this._c, 8),
              buffer.writeInt32LE(this._d, 12),
              buffer.writeInt32LE(this._e, 16),
              buffer
            )
          }),
          (module.exports = RIPEMD160)
      },
      './node_modules/ripemd160/node_modules/hash-base/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          Transform = __webpack_require__(
            './node_modules/readable-stream/readable-browser.js'
          ).Transform
        function HashBase(blockSize) {
          Transform.call(this),
            (this._block = Buffer.allocUnsafe(blockSize)),
            (this._blockSize = blockSize),
            (this._blockOffset = 0),
            (this._length = [0, 0, 0, 0]),
            (this._finalized = !1)
        }
        __webpack_require__('./node_modules/inherits/inherits_browser.js')(
          HashBase,
          Transform
        ),
          (HashBase.prototype._transform = function (
            chunk,
            encoding,
            callback
          ) {
            var error = null
            try {
              this.update(chunk, encoding)
            } catch (err) {
              error = err
            }
            callback(error)
          }),
          (HashBase.prototype._flush = function (callback) {
            var error = null
            try {
              this.push(this.digest())
            } catch (err) {
              error = err
            }
            callback(error)
          }),
          (HashBase.prototype.update = function (data, encoding) {
            if (
              ((function throwIfNotStringOrBuffer(val, prefix) {
                if (!Buffer.isBuffer(val) && 'string' != typeof val)
                  throw new TypeError(prefix + ' must be a string or a buffer')
              })(data, 'Data'),
              this._finalized)
            )
              throw new Error('Digest already called')
            Buffer.isBuffer(data) || (data = Buffer.from(data, encoding))
            for (
              var block = this._block, offset = 0;
              this._blockOffset + data.length - offset >= this._blockSize;

            ) {
              for (var i = this._blockOffset; i < this._blockSize; )
                block[i++] = data[offset++]
              this._update(), (this._blockOffset = 0)
            }
            for (; offset < data.length; )
              block[this._blockOffset++] = data[offset++]
            for (var j = 0, carry = 8 * data.length; carry > 0; ++j)
              (this._length[j] += carry),
                (carry = (this._length[j] / 4294967296) | 0) > 0 &&
                  (this._length[j] -= 4294967296 * carry)
            return this
          }),
          (HashBase.prototype._update = function () {
            throw new Error('_update is not implemented')
          }),
          (HashBase.prototype.digest = function (encoding) {
            if (this._finalized) throw new Error('Digest already called')
            this._finalized = !0
            var digest = this._digest()
            void 0 !== encoding && (digest = digest.toString(encoding)),
              this._block.fill(0),
              (this._blockOffset = 0)
            for (var i = 0; i < 4; ++i) this._length[i] = 0
            return digest
          }),
          (HashBase.prototype._digest = function () {
            throw new Error('_digest is not implemented')
          }),
          (module.exports = HashBase)
      },
      './node_modules/sha.js/hash.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var Buffer = __webpack_require__(
          './node_modules/safe-buffer/index.js'
        ).Buffer
        function Hash(blockSize, finalSize) {
          ;(this._block = Buffer.alloc(blockSize)),
            (this._finalSize = finalSize),
            (this._blockSize = blockSize),
            (this._len = 0)
        }
        ;(Hash.prototype.update = function (data, enc) {
          'string' == typeof data &&
            ((enc = enc || 'utf8'), (data = Buffer.from(data, enc)))
          for (
            var block = this._block,
              blockSize = this._blockSize,
              length = data.length,
              accum = this._len,
              offset = 0;
            offset < length;

          ) {
            for (
              var assigned = accum % blockSize,
                remainder = Math.min(length - offset, blockSize - assigned),
                i = 0;
              i < remainder;
              i++
            )
              block[assigned + i] = data[offset + i]
            ;(offset += remainder),
              (accum += remainder) % blockSize == 0 && this._update(block)
          }
          return (this._len += length), this
        }),
          (Hash.prototype.digest = function (enc) {
            var rem = this._len % this._blockSize
            ;(this._block[rem] = 128),
              this._block.fill(0, rem + 1),
              rem >= this._finalSize &&
                (this._update(this._block), this._block.fill(0))
            var bits = 8 * this._len
            if (bits <= 4294967295)
              this._block.writeUInt32BE(bits, this._blockSize - 4)
            else {
              var lowBits = (4294967295 & bits) >>> 0,
                highBits = (bits - lowBits) / 4294967296
              this._block.writeUInt32BE(highBits, this._blockSize - 8),
                this._block.writeUInt32BE(lowBits, this._blockSize - 4)
            }
            this._update(this._block)
            var hash = this._hash()
            return enc ? hash.toString(enc) : hash
          }),
          (Hash.prototype._update = function () {
            throw new Error('_update must be implemented by subclass')
          }),
          (module.exports = Hash)
      },
      './node_modules/sha.js/index.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var exports = (module.exports = function SHA(algorithm) {
          algorithm = algorithm.toLowerCase()
          var Algorithm = exports[algorithm]
          if (!Algorithm)
            throw new Error(
              algorithm + ' is not supported (we accept pull requests)'
            )
          return new Algorithm()
        })
        ;(exports.sha = __webpack_require__('./node_modules/sha.js/sha.js')),
          (exports.sha1 = __webpack_require__('./node_modules/sha.js/sha1.js')),
          (exports.sha224 = __webpack_require__(
            './node_modules/sha.js/sha224.js'
          )),
          (exports.sha256 = __webpack_require__(
            './node_modules/sha.js/sha256.js'
          )),
          (exports.sha384 = __webpack_require__(
            './node_modules/sha.js/sha384.js'
          )),
          (exports.sha512 = __webpack_require__(
            './node_modules/sha.js/sha512.js'
          ))
      },
      './node_modules/sha.js/sha.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Hash = __webpack_require__('./node_modules/sha.js/hash.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          K = [1518500249, 1859775393, -1894007588, -899497514],
          W = new Array(80)
        function Sha() {
          this.init(), (this._w = W), Hash.call(this, 64, 56)
        }
        function rotl30(num) {
          return (num << 30) | (num >>> 2)
        }
        function ft(s, b, c, d) {
          return 0 === s
            ? (b & c) | (~b & d)
            : 2 === s
              ? (b & c) | (b & d) | (c & d)
              : b ^ c ^ d
        }
        inherits(Sha, Hash),
          (Sha.prototype.init = function () {
            return (
              (this._a = 1732584193),
              (this._b = 4023233417),
              (this._c = 2562383102),
              (this._d = 271733878),
              (this._e = 3285377520),
              this
            )
          }),
          (Sha.prototype._update = function (M) {
            for (
              var num,
                W = this._w,
                a = 0 | this._a,
                b = 0 | this._b,
                c = 0 | this._c,
                d = 0 | this._d,
                e = 0 | this._e,
                i = 0;
              i < 16;
              ++i
            )
              W[i] = M.readInt32BE(4 * i)
            for (; i < 80; ++i)
              W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]
            for (var j = 0; j < 80; ++j) {
              var s = ~~(j / 20),
                t =
                  0 |
                  ((((num = a) << 5) | (num >>> 27)) +
                    ft(s, b, c, d) +
                    e +
                    W[j] +
                    K[s])
              ;(e = d), (d = c), (c = rotl30(b)), (b = a), (a = t)
            }
            ;(this._a = (a + this._a) | 0),
              (this._b = (b + this._b) | 0),
              (this._c = (c + this._c) | 0),
              (this._d = (d + this._d) | 0),
              (this._e = (e + this._e) | 0)
          }),
          (Sha.prototype._hash = function () {
            var H = Buffer.allocUnsafe(20)
            return (
              H.writeInt32BE(0 | this._a, 0),
              H.writeInt32BE(0 | this._b, 4),
              H.writeInt32BE(0 | this._c, 8),
              H.writeInt32BE(0 | this._d, 12),
              H.writeInt32BE(0 | this._e, 16),
              H
            )
          }),
          (module.exports = Sha)
      },
      './node_modules/sha.js/sha1.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Hash = __webpack_require__('./node_modules/sha.js/hash.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          K = [1518500249, 1859775393, -1894007588, -899497514],
          W = new Array(80)
        function Sha1() {
          this.init(), (this._w = W), Hash.call(this, 64, 56)
        }
        function rotl5(num) {
          return (num << 5) | (num >>> 27)
        }
        function rotl30(num) {
          return (num << 30) | (num >>> 2)
        }
        function ft(s, b, c, d) {
          return 0 === s
            ? (b & c) | (~b & d)
            : 2 === s
              ? (b & c) | (b & d) | (c & d)
              : b ^ c ^ d
        }
        inherits(Sha1, Hash),
          (Sha1.prototype.init = function () {
            return (
              (this._a = 1732584193),
              (this._b = 4023233417),
              (this._c = 2562383102),
              (this._d = 271733878),
              (this._e = 3285377520),
              this
            )
          }),
          (Sha1.prototype._update = function (M) {
            for (
              var num,
                W = this._w,
                a = 0 | this._a,
                b = 0 | this._b,
                c = 0 | this._c,
                d = 0 | this._d,
                e = 0 | this._e,
                i = 0;
              i < 16;
              ++i
            )
              W[i] = M.readInt32BE(4 * i)
            for (; i < 80; ++i)
              W[i] =
                ((num = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]) << 1) |
                (num >>> 31)
            for (var j = 0; j < 80; ++j) {
              var s = ~~(j / 20),
                t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0
              ;(e = d), (d = c), (c = rotl30(b)), (b = a), (a = t)
            }
            ;(this._a = (a + this._a) | 0),
              (this._b = (b + this._b) | 0),
              (this._c = (c + this._c) | 0),
              (this._d = (d + this._d) | 0),
              (this._e = (e + this._e) | 0)
          }),
          (Sha1.prototype._hash = function () {
            var H = Buffer.allocUnsafe(20)
            return (
              H.writeInt32BE(0 | this._a, 0),
              H.writeInt32BE(0 | this._b, 4),
              H.writeInt32BE(0 | this._c, 8),
              H.writeInt32BE(0 | this._d, 12),
              H.writeInt32BE(0 | this._e, 16),
              H
            )
          }),
          (module.exports = Sha1)
      },
      './node_modules/sha.js/sha224.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Sha256 = __webpack_require__('./node_modules/sha.js/sha256.js'),
          Hash = __webpack_require__('./node_modules/sha.js/hash.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          W = new Array(64)
        function Sha224() {
          this.init(), (this._w = W), Hash.call(this, 64, 56)
        }
        inherits(Sha224, Sha256),
          (Sha224.prototype.init = function () {
            return (
              (this._a = 3238371032),
              (this._b = 914150663),
              (this._c = 812702999),
              (this._d = 4144912697),
              (this._e = 4290775857),
              (this._f = 1750603025),
              (this._g = 1694076839),
              (this._h = 3204075428),
              this
            )
          }),
          (Sha224.prototype._hash = function () {
            var H = Buffer.allocUnsafe(28)
            return (
              H.writeInt32BE(this._a, 0),
              H.writeInt32BE(this._b, 4),
              H.writeInt32BE(this._c, 8),
              H.writeInt32BE(this._d, 12),
              H.writeInt32BE(this._e, 16),
              H.writeInt32BE(this._f, 20),
              H.writeInt32BE(this._g, 24),
              H
            )
          }),
          (module.exports = Sha224)
      },
      './node_modules/sha.js/sha256.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Hash = __webpack_require__('./node_modules/sha.js/hash.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          K = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ],
          W = new Array(64)
        function Sha256() {
          this.init(), (this._w = W), Hash.call(this, 64, 56)
        }
        function ch(x, y, z) {
          return z ^ (x & (y ^ z))
        }
        function maj(x, y, z) {
          return (x & y) | (z & (x | y))
        }
        function sigma0(x) {
          return (
            ((x >>> 2) | (x << 30)) ^
            ((x >>> 13) | (x << 19)) ^
            ((x >>> 22) | (x << 10))
          )
        }
        function sigma1(x) {
          return (
            ((x >>> 6) | (x << 26)) ^
            ((x >>> 11) | (x << 21)) ^
            ((x >>> 25) | (x << 7))
          )
        }
        function gamma0(x) {
          return ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3)
        }
        inherits(Sha256, Hash),
          (Sha256.prototype.init = function () {
            return (
              (this._a = 1779033703),
              (this._b = 3144134277),
              (this._c = 1013904242),
              (this._d = 2773480762),
              (this._e = 1359893119),
              (this._f = 2600822924),
              (this._g = 528734635),
              (this._h = 1541459225),
              this
            )
          }),
          (Sha256.prototype._update = function (M) {
            for (
              var x,
                W = this._w,
                a = 0 | this._a,
                b = 0 | this._b,
                c = 0 | this._c,
                d = 0 | this._d,
                e = 0 | this._e,
                f = 0 | this._f,
                g = 0 | this._g,
                h = 0 | this._h,
                i = 0;
              i < 16;
              ++i
            )
              W[i] = M.readInt32BE(4 * i)
            for (; i < 64; ++i)
              W[i] =
                0 |
                (((((x = W[i - 2]) >>> 17) | (x << 15)) ^
                  ((x >>> 19) | (x << 13)) ^
                  (x >>> 10)) +
                  W[i - 7] +
                  gamma0(W[i - 15]) +
                  W[i - 16])
            for (var j = 0; j < 64; ++j) {
              var T1 = (h + sigma1(e) + ch(e, f, g) + K[j] + W[j]) | 0,
                T2 = (sigma0(a) + maj(a, b, c)) | 0
              ;(h = g),
                (g = f),
                (f = e),
                (e = (d + T1) | 0),
                (d = c),
                (c = b),
                (b = a),
                (a = (T1 + T2) | 0)
            }
            ;(this._a = (a + this._a) | 0),
              (this._b = (b + this._b) | 0),
              (this._c = (c + this._c) | 0),
              (this._d = (d + this._d) | 0),
              (this._e = (e + this._e) | 0),
              (this._f = (f + this._f) | 0),
              (this._g = (g + this._g) | 0),
              (this._h = (h + this._h) | 0)
          }),
          (Sha256.prototype._hash = function () {
            var H = Buffer.allocUnsafe(32)
            return (
              H.writeInt32BE(this._a, 0),
              H.writeInt32BE(this._b, 4),
              H.writeInt32BE(this._c, 8),
              H.writeInt32BE(this._d, 12),
              H.writeInt32BE(this._e, 16),
              H.writeInt32BE(this._f, 20),
              H.writeInt32BE(this._g, 24),
              H.writeInt32BE(this._h, 28),
              H
            )
          }),
          (module.exports = Sha256)
      },
      './node_modules/sha.js/sha384.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          SHA512 = __webpack_require__('./node_modules/sha.js/sha512.js'),
          Hash = __webpack_require__('./node_modules/sha.js/hash.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          W = new Array(160)
        function Sha384() {
          this.init(), (this._w = W), Hash.call(this, 128, 112)
        }
        inherits(Sha384, SHA512),
          (Sha384.prototype.init = function () {
            return (
              (this._ah = 3418070365),
              (this._bh = 1654270250),
              (this._ch = 2438529370),
              (this._dh = 355462360),
              (this._eh = 1731405415),
              (this._fh = 2394180231),
              (this._gh = 3675008525),
              (this._hh = 1203062813),
              (this._al = 3238371032),
              (this._bl = 914150663),
              (this._cl = 812702999),
              (this._dl = 4144912697),
              (this._el = 4290775857),
              (this._fl = 1750603025),
              (this._gl = 1694076839),
              (this._hl = 3204075428),
              this
            )
          }),
          (Sha384.prototype._hash = function () {
            var H = Buffer.allocUnsafe(48)
            function writeInt64BE(h, l, offset) {
              H.writeInt32BE(h, offset), H.writeInt32BE(l, offset + 4)
            }
            return (
              writeInt64BE(this._ah, this._al, 0),
              writeInt64BE(this._bh, this._bl, 8),
              writeInt64BE(this._ch, this._cl, 16),
              writeInt64BE(this._dh, this._dl, 24),
              writeInt64BE(this._eh, this._el, 32),
              writeInt64BE(this._fh, this._fl, 40),
              H
            )
          }),
          (module.exports = Sha384)
      },
      './node_modules/sha.js/sha512.js': (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          ),
          Hash = __webpack_require__('./node_modules/sha.js/hash.js'),
          Buffer = __webpack_require__(
            './node_modules/safe-buffer/index.js'
          ).Buffer,
          K = [
            1116352408, 3609767458, 1899447441, 602891725, 3049323471,
            3964484399, 3921009573, 2173295548, 961987163, 4081628472,
            1508970993, 3053834265, 2453635748, 2937671579, 2870763221,
            3664609560, 3624381080, 2734883394, 310598401, 1164996542,
            607225278, 1323610764, 1426881987, 3590304994, 1925078388,
            4068182383, 2162078206, 991336113, 2614888103, 633803317,
            3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
            944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
            1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
            1996064986, 2198950837, 2554220882, 3999719339, 2821834349,
            766784016, 2952996808, 2566594879, 3210313671, 3203337956,
            3336571891, 1034457026, 3584528711, 2466948901, 113926993,
            3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912,
            1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
            1695183700, 2343527390, 1986661051, 1014477480, 2177026350,
            1206759142, 2456956037, 344077627, 2730485921, 1290863460,
            2820302411, 3158454273, 3259730800, 3505952657, 3345764771,
            106217008, 3516065817, 3606008344, 3600352804, 1432725776,
            4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752,
            506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280,
            958139571, 3318307427, 1322822218, 3812723403, 1537002063,
            2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
            2024104815, 1125592928, 2227730452, 2716904306, 2361852424,
            442776044, 2428436474, 593698344, 2756734187, 3733110249,
            3204031479, 2999351573, 3329325298, 3815920427, 3391569614,
            3928383900, 3515267271, 566280711, 3940187606, 3454069534,
            4118630271, 4000239992, 116418474, 1914138554, 174292421,
            2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733,
            587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580,
            2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
            1607167915, 987167468, 1816402316, 1246189591,
          ],
          W = new Array(160)
        function Sha512() {
          this.init(), (this._w = W), Hash.call(this, 128, 112)
        }
        function Ch(x, y, z) {
          return z ^ (x & (y ^ z))
        }
        function maj(x, y, z) {
          return (x & y) | (z & (x | y))
        }
        function sigma0(x, xl) {
          return (
            ((x >>> 28) | (xl << 4)) ^
            ((xl >>> 2) | (x << 30)) ^
            ((xl >>> 7) | (x << 25))
          )
        }
        function sigma1(x, xl) {
          return (
            ((x >>> 14) | (xl << 18)) ^
            ((x >>> 18) | (xl << 14)) ^
            ((xl >>> 9) | (x << 23))
          )
        }
        function Gamma0(x, xl) {
          return ((x >>> 1) | (xl << 31)) ^ ((x >>> 8) | (xl << 24)) ^ (x >>> 7)
        }
        function Gamma0l(x, xl) {
          return (
            ((x >>> 1) | (xl << 31)) ^
            ((x >>> 8) | (xl << 24)) ^
            ((x >>> 7) | (xl << 25))
          )
        }
        function Gamma1(x, xl) {
          return (
            ((x >>> 19) | (xl << 13)) ^ ((xl >>> 29) | (x << 3)) ^ (x >>> 6)
          )
        }
        function Gamma1l(x, xl) {
          return (
            ((x >>> 19) | (xl << 13)) ^
            ((xl >>> 29) | (x << 3)) ^
            ((x >>> 6) | (xl << 26))
          )
        }
        function getCarry(a, b) {
          return a >>> 0 < b >>> 0 ? 1 : 0
        }
        inherits(Sha512, Hash),
          (Sha512.prototype.init = function () {
            return (
              (this._ah = 1779033703),
              (this._bh = 3144134277),
              (this._ch = 1013904242),
              (this._dh = 2773480762),
              (this._eh = 1359893119),
              (this._fh = 2600822924),
              (this._gh = 528734635),
              (this._hh = 1541459225),
              (this._al = 4089235720),
              (this._bl = 2227873595),
              (this._cl = 4271175723),
              (this._dl = 1595750129),
              (this._el = 2917565137),
              (this._fl = 725511199),
              (this._gl = 4215389547),
              (this._hl = 327033209),
              this
            )
          }),
          (Sha512.prototype._update = function (M) {
            for (
              var W = this._w,
                ah = 0 | this._ah,
                bh = 0 | this._bh,
                ch = 0 | this._ch,
                dh = 0 | this._dh,
                eh = 0 | this._eh,
                fh = 0 | this._fh,
                gh = 0 | this._gh,
                hh = 0 | this._hh,
                al = 0 | this._al,
                bl = 0 | this._bl,
                cl = 0 | this._cl,
                dl = 0 | this._dl,
                el = 0 | this._el,
                fl = 0 | this._fl,
                gl = 0 | this._gl,
                hl = 0 | this._hl,
                i = 0;
              i < 32;
              i += 2
            )
              (W[i] = M.readInt32BE(4 * i)),
                (W[i + 1] = M.readInt32BE(4 * i + 4))
            for (; i < 160; i += 2) {
              var xh = W[i - 30],
                xl = W[i - 30 + 1],
                gamma0 = Gamma0(xh, xl),
                gamma0l = Gamma0l(xl, xh),
                gamma1 = Gamma1((xh = W[i - 4]), (xl = W[i - 4 + 1])),
                gamma1l = Gamma1l(xl, xh),
                Wi7h = W[i - 14],
                Wi7l = W[i - 14 + 1],
                Wi16h = W[i - 32],
                Wi16l = W[i - 32 + 1],
                Wil = (gamma0l + Wi7l) | 0,
                Wih = (gamma0 + Wi7h + getCarry(Wil, gamma0l)) | 0
              ;(Wih =
                ((Wih =
                  (Wih +
                    gamma1 +
                    getCarry((Wil = (Wil + gamma1l) | 0), gamma1l)) |
                  0) +
                  Wi16h +
                  getCarry((Wil = (Wil + Wi16l) | 0), Wi16l)) |
                0),
                (W[i] = Wih),
                (W[i + 1] = Wil)
            }
            for (var j = 0; j < 160; j += 2) {
              ;(Wih = W[j]), (Wil = W[j + 1])
              var majh = maj(ah, bh, ch),
                majl = maj(al, bl, cl),
                sigma0h = sigma0(ah, al),
                sigma0l = sigma0(al, ah),
                sigma1h = sigma1(eh, el),
                sigma1l = sigma1(el, eh),
                Kih = K[j],
                Kil = K[j + 1],
                chh = Ch(eh, fh, gh),
                chl = Ch(el, fl, gl),
                t1l = (hl + sigma1l) | 0,
                t1h = (hh + sigma1h + getCarry(t1l, hl)) | 0
              t1h =
                ((t1h =
                  ((t1h =
                    (t1h + chh + getCarry((t1l = (t1l + chl) | 0), chl)) | 0) +
                    Kih +
                    getCarry((t1l = (t1l + Kil) | 0), Kil)) |
                  0) +
                  Wih +
                  getCarry((t1l = (t1l + Wil) | 0), Wil)) |
                0
              var t2l = (sigma0l + majl) | 0,
                t2h = (sigma0h + majh + getCarry(t2l, sigma0l)) | 0
              ;(hh = gh),
                (hl = gl),
                (gh = fh),
                (gl = fl),
                (fh = eh),
                (fl = el),
                (eh = (dh + t1h + getCarry((el = (dl + t1l) | 0), dl)) | 0),
                (dh = ch),
                (dl = cl),
                (ch = bh),
                (cl = bl),
                (bh = ah),
                (bl = al),
                (ah = (t1h + t2h + getCarry((al = (t1l + t2l) | 0), t1l)) | 0)
            }
            ;(this._al = (this._al + al) | 0),
              (this._bl = (this._bl + bl) | 0),
              (this._cl = (this._cl + cl) | 0),
              (this._dl = (this._dl + dl) | 0),
              (this._el = (this._el + el) | 0),
              (this._fl = (this._fl + fl) | 0),
              (this._gl = (this._gl + gl) | 0),
              (this._hl = (this._hl + hl) | 0),
              (this._ah = (this._ah + ah + getCarry(this._al, al)) | 0),
              (this._bh = (this._bh + bh + getCarry(this._bl, bl)) | 0),
              (this._ch = (this._ch + ch + getCarry(this._cl, cl)) | 0),
              (this._dh = (this._dh + dh + getCarry(this._dl, dl)) | 0),
              (this._eh = (this._eh + eh + getCarry(this._el, el)) | 0),
              (this._fh = (this._fh + fh + getCarry(this._fl, fl)) | 0),
              (this._gh = (this._gh + gh + getCarry(this._gl, gl)) | 0),
              (this._hh = (this._hh + hh + getCarry(this._hl, hl)) | 0)
          }),
          (Sha512.prototype._hash = function () {
            var H = Buffer.allocUnsafe(64)
            function writeInt64BE(h, l, offset) {
              H.writeInt32BE(h, offset), H.writeInt32BE(l, offset + 4)
            }
            return (
              writeInt64BE(this._ah, this._al, 0),
              writeInt64BE(this._bh, this._bl, 8),
              writeInt64BE(this._ch, this._cl, 16),
              writeInt64BE(this._dh, this._dl, 24),
              writeInt64BE(this._eh, this._el, 32),
              writeInt64BE(this._fh, this._fl, 40),
              writeInt64BE(this._gh, this._gl, 48),
              writeInt64BE(this._hh, this._hl, 56),
              H
            )
          }),
          (module.exports = Sha512)
      },
      './node_modules/thirty-two/lib/thirty-two/index.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        var base32 = __webpack_require__(
          './node_modules/thirty-two/lib/thirty-two/thirty-two.js'
        )
        ;(exports.encode = base32.encode), (exports.decode = base32.decode)
      },
      './node_modules/thirty-two/lib/thirty-two/thirty-two.js': (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        'use strict'
        var Buffer = __webpack_require__(
            './node_modules/buffer/index.js'
          ).Buffer,
          byteTable = [
            255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0,
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
          ]
        ;(exports.encode = function (plain) {
          Buffer.isBuffer(plain) || (plain = new Buffer(plain))
          for (
            var i = 0,
              j = 0,
              shiftIndex = 0,
              digit = 0,
              encoded = new Buffer(
                8 *
                  (function quintetCount(buff) {
                    var quintets = Math.floor(buff.length / 5)
                    return buff.length % 5 == 0 ? quintets : quintets + 1
                  })(plain)
              );
            i < plain.length;

          ) {
            var current = plain[i]
            shiftIndex > 3
              ? ((digit =
                  ((digit = current & (255 >> shiftIndex)) <<
                    (shiftIndex = (shiftIndex + 5) % 8)) |
                  ((i + 1 < plain.length ? plain[i + 1] : 0) >>
                    (8 - shiftIndex))),
                i++)
              : ((digit = (current >> (8 - (shiftIndex + 5))) & 31),
                0 === (shiftIndex = (shiftIndex + 5) % 8) && i++),
              (encoded[j] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.charCodeAt(
                digit
              )),
              j++
          }
          for (i = j; i < encoded.length; i++) encoded[i] = 61
          return encoded
        }),
          (exports.decode = function (encoded) {
            var plainChar,
              shiftIndex = 0,
              plainDigit = 0,
              plainPos = 0
            Buffer.isBuffer(encoded) || (encoded = new Buffer(encoded))
            for (
              var decoded = new Buffer(Math.ceil((5 * encoded.length) / 8)),
                i = 0;
              i < encoded.length && 61 !== encoded[i];
              i++
            ) {
              var encodedByte = encoded[i] - 48
              if (!(encodedByte < byteTable.length))
                throw new Error(
                  'Invalid input - it is not base32 encoded string'
                )
              ;(plainDigit = byteTable[encodedByte]),
                shiftIndex <= 3
                  ? 0 === (shiftIndex = (shiftIndex + 5) % 8)
                    ? ((plainChar |= plainDigit),
                      (decoded[plainPos] = plainChar),
                      plainPos++,
                      (plainChar = 0))
                    : (plainChar |= 255 & (plainDigit << (8 - shiftIndex)))
                  : ((plainChar |=
                      255 &
                      (plainDigit >>> (shiftIndex = (shiftIndex + 5) % 8))),
                    (decoded[plainPos] = plainChar),
                    plainPos++,
                    (plainChar = 255 & (plainDigit << (8 - shiftIndex))))
            }
            return decoded.slice(0, plainPos)
          })
      },
      './node_modules/vm-browserify/index.js': (
        __unused_webpack_module,
        exports
      ) => {
        var indexOf = function (xs, item) {
            if (xs.indexOf) return xs.indexOf(item)
            for (var i = 0; i < xs.length; i++) if (xs[i] === item) return i
            return -1
          },
          Object_keys = function (obj) {
            if (Object.keys) return Object.keys(obj)
            var res = []
            for (var key in obj) res.push(key)
            return res
          },
          forEach = function (xs, fn) {
            if (xs.forEach) return xs.forEach(fn)
            for (var i = 0; i < xs.length; i++) fn(xs[i], i, xs)
          },
          defineProp = (function () {
            try {
              return (
                Object.defineProperty({}, '_', {}),
                function (obj, name, value) {
                  Object.defineProperty(obj, name, {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value,
                  })
                }
              )
            } catch (e) {
              return function (obj, name, value) {
                obj[name] = value
              }
            }
          })(),
          globals = [
            'Array',
            'Boolean',
            'Date',
            'Error',
            'EvalError',
            'Function',
            'Infinity',
            'JSON',
            'Math',
            'NaN',
            'Number',
            'Object',
            'RangeError',
            'ReferenceError',
            'RegExp',
            'String',
            'SyntaxError',
            'TypeError',
            'URIError',
            'decodeURI',
            'decodeURIComponent',
            'encodeURI',
            'encodeURIComponent',
            'escape',
            'eval',
            'isFinite',
            'isNaN',
            'parseFloat',
            'parseInt',
            'undefined',
            'unescape',
          ]
        function Context() {}
        Context.prototype = {}
        var Script = (exports.Script = function NodeScript(code) {
          if (!(this instanceof Script)) return new Script(code)
          this.code = code
        })
        ;(Script.prototype.runInContext = function (context) {
          if (!(context instanceof Context))
            throw new TypeError("needs a 'context' argument.")
          var iframe = document.createElement('iframe')
          iframe.style || (iframe.style = {}),
            (iframe.style.display = 'none'),
            document.body.appendChild(iframe)
          var win = iframe.contentWindow,
            wEval = win.eval,
            wExecScript = win.execScript
          !wEval &&
            wExecScript &&
            (wExecScript.call(win, 'null'), (wEval = win.eval)),
            forEach(Object_keys(context), function (key) {
              win[key] = context[key]
            }),
            forEach(globals, function (key) {
              context[key] && (win[key] = context[key])
            })
          var winKeys = Object_keys(win),
            res = wEval.call(win, this.code)
          return (
            forEach(Object_keys(win), function (key) {
              ;(key in context || -1 === indexOf(winKeys, key)) &&
                (context[key] = win[key])
            }),
            forEach(globals, function (key) {
              key in context || defineProp(context, key, win[key])
            }),
            document.body.removeChild(iframe),
            res
          )
        }),
          (Script.prototype.runInThisContext = function () {
            return eval(this.code)
          }),
          (Script.prototype.runInNewContext = function (context) {
            var ctx = Script.createContext(context),
              res = this.runInContext(ctx)
            return (
              context &&
                forEach(Object_keys(ctx), function (key) {
                  context[key] = ctx[key]
                }),
              res
            )
          }),
          forEach(Object_keys(Script.prototype), function (name) {
            exports[name] = Script[name] = function (code) {
              var s = Script(code)
              return s[name].apply(s, [].slice.call(arguments, 1))
            }
          }),
          (exports.isContext = function (context) {
            return context instanceof Context
          }),
          (exports.createScript = function (code) {
            return exports.Script(code)
          }),
          (exports.createContext = Script.createContext =
            function (context) {
              var copy = new Context()
              return (
                'object' == typeof context &&
                  forEach(Object_keys(context), function (key) {
                    copy[key] = context[key]
                  }),
                copy
              )
            })
      },
      './node_modules/browserify-aes/modes/list.json': module => {
        'use strict'
        module.exports = JSON.parse(
          '{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}'
        )
      },
      './node_modules/browserify-sign/browser/algorithms.json': module => {
        'use strict'
        module.exports = JSON.parse(
          '{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}'
        )
      },
      './node_modules/browserify-sign/browser/curves.json': module => {
        'use strict'
        module.exports = JSON.parse(
          '{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}'
        )
      },
      './node_modules/diffie-hellman/lib/primes.json': module => {
        'use strict'
        module.exports = JSON.parse(
          '{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}'
        )
      },
      './node_modules/elliptic/package.json': module => {
        'use strict'
        module.exports = { rE: '6.6.1' }
      },
      './node_modules/parse-asn1/aesid.json': module => {
        'use strict'
        module.exports = JSON.parse(
          '{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}'
        )
      },
    },
  ]
)
