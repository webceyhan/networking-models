/**
 * Below code wont work in Nodejs because EventSource only exists in browser!
 * So we install the EventSource polyfill and use it instead.
 */

import EventSource from "eventsource";

export function initClient(port) {
    // define url
    const url = "http://localhost:" + port;

    // define event source object
    const es = new EventSource(url);

    es.onmessage = (message) => {
        console.log("client received: " + message.data);
    };
}
