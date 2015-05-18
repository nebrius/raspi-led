"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var fs = _interopRequire(require("fs"));

var Peripheral = require("raspi-peripheral").Peripheral;

var OFF = 0;
exports.OFF = OFF;
var ON = 1;

exports.ON = ON;

var LED = exports.LED = (function (_Peripheral) {
  function LED() {
    _classCallCheck(this, LED);

    _get(Object.getPrototypeOf(LED.prototype), "constructor", this).call(this);
    fs.writeFileSync("/sys/class/leds/led0/trigger", "none");
  }

  _inherits(LED, _Peripheral);

  _createClass(LED, {
    read: {
      value: function read() {
        return parseInt(fs.readFileSync("/sys/class/leds/led0/brightness").toString()) ? ON : OFF;
      }
    },
    write: {
      value: function write(value) {
        this.validateAlive();
        if ([ON, OFF].indexOf(value) == -1) {
          throw new Error("Invalid LED value " + value);
        }
        fs.writeFileSync("/sys/class/leds/led0/brightness", value ? "255" : "0");
      }
    }
  });

  return LED;
})(Peripheral);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCTyxFQUFFLDJCQUFNLElBQUk7O0lBQ1YsVUFBVSxXQUFRLGtCQUFrQixFQUFwQyxVQUFVOztBQUVaLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUFSLEdBQUcsR0FBSCxHQUFHO0FBQ1AsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUFQLEVBQUUsR0FBRixFQUFFOztJQUVBLEdBQUcsV0FBSCxHQUFHO0FBRUgsV0FGQSxHQUFHLEdBRUE7MEJBRkgsR0FBRzs7QUFHWiwrQkFIUyxHQUFHLDZDQUdKO0FBQ1IsTUFBRSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLENBQUMsQ0FBQztHQUMxRDs7WUFMVSxHQUFHOztlQUFILEdBQUc7QUFPZCxRQUFJO2FBQUEsZ0JBQUc7QUFDTCxlQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO09BQzNGOztBQUVELFNBQUs7YUFBQSxlQUFDLEtBQUssRUFBRTtBQUNYLFlBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQixZQUFJLENBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtBQUNwQyxnQkFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUMvQztBQUNELFVBQUUsQ0FBQyxhQUFhLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztPQUMxRTs7OztTQWpCVSxHQUFHO0dBQVMsVUFBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE1IEJyeWFuIEh1Z2hlcyA8YnJ5YW5AdGhlb3JldGljYWxpZGVhdGlvbnMuY29tPlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgUGVyaXBoZXJhbCB9IGZyb20gJ3Jhc3BpLXBlcmlwaGVyYWwnO1xuXG5leHBvcnQgdmFyIE9GRiA9IDA7XG5leHBvcnQgdmFyIE9OID0gMTtcblxuZXhwb3J0IGNsYXNzIExFRCBleHRlbmRzIFBlcmlwaGVyYWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgZnMud3JpdGVGaWxlU3luYygnL3N5cy9jbGFzcy9sZWRzL2xlZDAvdHJpZ2dlcicsICdub25lJyk7XG4gIH1cblxuICByZWFkKCkge1xuICAgIHJldHVybiBwYXJzZUludChmcy5yZWFkRmlsZVN5bmMoJy9zeXMvY2xhc3MvbGVkcy9sZWQwL2JyaWdodG5lc3MnKS50b1N0cmluZygpKSA/IE9OIDogT0ZGO1xuICB9XG5cbiAgd3JpdGUodmFsdWUpIHtcbiAgICB0aGlzLnZhbGlkYXRlQWxpdmUoKTtcbiAgICBpZiAoWyBPTiwgT0ZGIF0uaW5kZXhPZih2YWx1ZSkgPT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBMRUQgdmFsdWUgJyArIHZhbHVlKTtcbiAgICB9XG4gICAgZnMud3JpdGVGaWxlU3luYygnL3N5cy9jbGFzcy9sZWRzL2xlZDAvYnJpZ2h0bmVzcycsIHZhbHVlID8gJzI1NScgOiAnMCcpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==