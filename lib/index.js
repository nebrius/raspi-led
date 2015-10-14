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

    _get(Object.getPrototypeOf(LED.prototype), 'constructor', this).call(this, []);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBd0JlLElBQUk7Ozs7K0JBQ1Esa0JBQWtCOztBQUV0QyxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7O0FBQ2QsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7O0lBRVAsR0FBRztZQUFILEdBQUc7O0FBRUgsV0FGQSxHQUFHLEdBRUE7MEJBRkgsR0FBRzs7QUFHWiwrQkFIUyxHQUFHLDZDQUdOLEVBQUUsRUFBRTtBQUNWLG9CQUFHLGFBQWEsQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLENBQUMsQ0FBQztHQUMxRDs7ZUFMVSxHQUFHOztXQU9WLGdCQUFHO0FBQ0wsYUFBTyxRQUFRLENBQUMsZ0JBQUcsWUFBWSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztLQUMvRjs7O1dBRUksZUFBQyxLQUFLLEVBQUU7QUFDWCxVQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDckIsVUFBSSxDQUFFLEVBQUUsRUFBRSxHQUFHLENBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDcEMsY0FBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQztPQUMvQztBQUNELHNCQUFHLGFBQWEsQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQzFFOzs7U0FqQlUsR0FBRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE1IEJyeWFuIEh1Z2hlcyA8YnJ5YW5AdGhlb3JldGljYWxpZGVhdGlvbnMuY29tPlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgUGVyaXBoZXJhbCB9IGZyb20gJ3Jhc3BpLXBlcmlwaGVyYWwnO1xuXG5leHBvcnQgY29uc3QgT0ZGID0gMDtcbmV4cG9ydCBjb25zdCBPTiA9IDE7XG5cbmV4cG9ydCBjbGFzcyBMRUQgZXh0ZW5kcyBQZXJpcGhlcmFsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihbXSk7XG4gICAgZnMud3JpdGVGaWxlU3luYygnL3N5cy9jbGFzcy9sZWRzL2xlZDAvdHJpZ2dlcicsICdub25lJyk7XG4gIH1cblxuICByZWFkKCkge1xuICAgIHJldHVybiBwYXJzZUludChmcy5yZWFkRmlsZVN5bmMoJy9zeXMvY2xhc3MvbGVkcy9sZWQwL2JyaWdodG5lc3MnKS50b1N0cmluZygpLCAxMCkgPyBPTiA6IE9GRjtcbiAgfVxuXG4gIHdyaXRlKHZhbHVlKSB7XG4gICAgdGhpcy52YWxpZGF0ZUFsaXZlKCk7XG4gICAgaWYgKFsgT04sIE9GRiBdLmluZGV4T2YodmFsdWUpID09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgTEVEIHZhbHVlICcgKyB2YWx1ZSk7XG4gICAgfVxuICAgIGZzLndyaXRlRmlsZVN5bmMoJy9zeXMvY2xhc3MvbGVkcy9sZWQwL2JyaWdodG5lc3MnLCB2YWx1ZSA/ICcyNTUnIDogJzAnKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
