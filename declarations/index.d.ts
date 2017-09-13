import { Peripheral } from 'raspi-peripheral';
export declare const OFF = 0;
export declare const ON = 1;
export declare class LED extends Peripheral {
    constructor();
    hasLed(): boolean;
    read(): 0 | 1;
    write(value: 0 | 1): void;
}
