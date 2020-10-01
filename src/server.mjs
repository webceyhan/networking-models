import http from "http";

export function initServer(port = 5000) {
    const server = http.createServer((request, response) => {
        // create test data
        const body = "hello client!";

        // send response body and end
        console.info("server: responding to request");
        response.end(body);
    });

    server.listen(port, () => {
        console.info("server: listening on port " + port);
    });
}
