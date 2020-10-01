import { Http2ServerRequest } from "http2";

import http from "http";

export function initClient(port = 5000) {
    console.log("client: making new request");

    // create request object
    const request = http.get({ port }, (response) => {
        let body = "";

        // a chunk of data has been received
        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {
            console.info("client: response received from server");
            console.log(body);
        });
    });

    // print error when request fails
    request.on("error", (error) => {
        console.info("client: error occured - " + error.message);
    });
}
