import { ClientOptions } from "./types";
import https from 'https';

export class Client {
    constructor(options: ClientOptions) {
        console.log('Client class instantiated');
    }

    request(method: string, path: string) {
        console.log('Client.request() called');
    }
}