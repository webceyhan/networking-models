import http from "http";

export function initServer(port) {
    const server = http.createServer((request, response) => {
        // create test data
        const body = "hello client!";

        // send response body and end
        console.log("server: responding to request...");
        response.end(body);
    });

    // start server
    server.listen(port);
    console.log(`server started: http://locahost:${port}`);
}
