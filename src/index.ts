/*
The MIT License (MIT)

Copyright (c) Bryan Hughes <bryan@nebri.us>

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

import { existsSync, writeFileSync, readFileSync } from 'fs';
import { Peripheral } from 'raspi-peripheral';
import { ILEDModule, ILED } from 'j5-io-types';

const hasLed = existsSync('/sys/class/leds/led0') &&
  existsSync('/sys/class/leds/led0/trigger') &&
  existsSync('/sys/class/leds/led0/brightness');

export const OFF = 0;
export const ON = 1;

export class LED extends Peripheral implements ILED {

  constructor() {
    super([]);
    if (hasLed) {
      writeFileSync('/sys/class/leds/led0/trigger', 'none');
    }
  }

  public hasLed(): boolean {
    return hasLed;
  }

  public read(): 0 | 1 {
    if (hasLed) {
      return parseInt(readFileSync('/sys/class/leds/led0/brightness').toString(), 10) ? ON : OFF;
    }
    return OFF;
  }

  public write(value: 0 | 1): void {
    this.validateAlive();
    if ([ ON, OFF ].indexOf(value) === -1) {
      throw new Error(`Invalid LED value ${value}`);
    }
    if (hasLed) {
      writeFileSync('/sys/class/leds/led0/brightness', value ? '1' : '0');
    }
  }

}

export const module: ILEDModule = {
  createLED() {
    return new LED();
  }
};
