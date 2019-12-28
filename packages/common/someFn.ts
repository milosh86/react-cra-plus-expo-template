import * as amfjs from "amfjs";
import {Writable} from 'stream';

export default function f(a: number, b: number) {
    let w = new Writable();
    w._write = (chunk, len, cb) => {
        console.log('chunk', chunk);
        cb()
    }

    var encoder = new amfjs.AMFEncoder(w)
    encoder.writeObject(10, amfjs.AMF0) //Write as AMF0
    // encoder.writeObject(10, amfjs.AMF3) //Write as AMF3ƒ
    return a + b + 12;
}