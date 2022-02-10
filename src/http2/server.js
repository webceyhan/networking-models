import http2 from "http2";

import { localCert, localKey } from "../contants.js";

export function initServer(port) {
    // initialize secure server
    const server = http2.createSecureServer({
        key: localKey,
        cert: localCert,
    });

    server.on("stream", (stream, headers) => {
        console.log("server: responding to request...");

        // set headers (not important here)
        stream.respond({
            "content-type": "application/json",
            status: 200,
        });

        stream.end(JSON.stringify({ name: "bob" }));
    });

    // start server
    server.listen(port);
    console.log(`server started: http://locahost:${port}`);
}
