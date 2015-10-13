/*
The MIT License (MIT)

Copyright (c) 2015 Bryan Hughes <bryan@theoreticalideations.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _raspiPeripheral = require('raspi-peripheral');

var OFF = 0;
exports.OFF = OFF;
var ON = 1;

exports.ON = ON;

var LED = (function (_Peripheral) {
  _inherits(LED, _Peripheral);

  function LED() {
    _classCallCheck(this, LED);

    _get(Object.getPrototypeOf(LED.prototype), 'constructor', this).call(this);
    _fs2['default'].writeFileSync('/sys/class/leds/led0/trigger', 'none');
  }

  _createClass(LED, [{
    key: 'read',
    value: function read() {
      return parseInt(_fs2['default'].readFileSync('/sys/class/leds/led0/brightness').toString(), 10) ? ON : OFF;
    }
  }, {
    key: 'write',
    value: function write(value) {
      this.validateAlive();
      if ([ON, OFF].indexOf(value) == -1) {
        throw new Error('Invalid LED value ' + value);
      }
      _fs2['default'].writeFileSync('/sys/class/leds/led0/brightness', value ? '255' : '0');
    }
  }]);

  return LED;
})(_raspiPeripheral.Peripheral);

exports.LED = LED;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBd0JlLElBQUk7Ozs7K0JBQ1Esa0JBQWtCOztBQUV0QyxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7O0FBQ2QsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7O0lBRVAsR0FBRztZQUFILEdBQUc7O0FBRUgsV0FGQSxHQUFHLEdBRUE7MEJBRkgsR0FBRzs7QUFHWiwrQkFIUyxHQUFHLDZDQUdKO0FBQ1Isb0JBQUcsYUFBYSxDQUFDLDhCQUE4QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0dBQzFEOztlQUxVLEdBQUc7O1dBT1YsZ0JBQUc7QUFDTCxhQUFPLFFBQVEsQ0FBQyxnQkFBRyxZQUFZLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO0tBQy9GOzs7V0FFSSxlQUFDLEtBQUssRUFBRTtBQUNYLFVBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQixVQUFJLENBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtBQUNwQyxjQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO09BQy9DO0FBQ0Qsc0JBQUcsYUFBYSxDQUFDLGlDQUFpQyxFQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDMUU7OztTQWpCVSxHQUFHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTUgQnJ5YW4gSHVnaGVzIDxicnlhbkB0aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20+XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBQZXJpcGhlcmFsIH0gZnJvbSAncmFzcGktcGVyaXBoZXJhbCc7XG5cbmV4cG9ydCBjb25zdCBPRkYgPSAwO1xuZXhwb3J0IGNvbnN0IE9OID0gMTtcblxuZXhwb3J0IGNsYXNzIExFRCBleHRlbmRzIFBlcmlwaGVyYWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgZnMud3JpdGVGaWxlU3luYygnL3N5cy9jbGFzcy9sZWRzL2xlZDAvdHJpZ2dlcicsICdub25lJyk7XG4gIH1cblxuICByZWFkKCkge1xuICAgIHJldHVybiBwYXJzZUludChmcy5yZWFkRmlsZVN5bmMoJy9zeXMvY2xhc3MvbGVkcy9sZWQwL2JyaWdodG5lc3MnKS50b1N0cmluZygpLCAxMCkgPyBPTiA6IE9GRjtcbiAgfVxuXG4gIHdyaXRlKHZhbHVlKSB7XG4gICAgdGhpcy52YWxpZGF0ZUFsaXZlKCk7XG4gICAgaWYgKFsgT04sIE9GRiBdLmluZGV4T2YodmFsdWUpID09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgTEVEIHZhbHVlICcgKyB2YWx1ZSk7XG4gICAgfVxuICAgIGZzLndyaXRlRmlsZVN5bmMoJy9zeXMvY2xhc3MvbGVkcy9sZWQwL2JyaWdodG5lc3MnLCB2YWx1ZSA/ICcyNTUnIDogJzAnKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
