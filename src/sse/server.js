import http from "http";

export function initServer(port) {
    const LIMIT = 10; // times
    const DELAY = 1000; // miliseconds

    let tick = 0;

    const send = (response) => {
        // define message
        const data = `hello ${tick++}`;

        // notice: body must have "data: " prefix!
        // and must end with "\n\n"
        const body = "data: " + data + '\n\n';

        response.write(body);

        if (tick < LIMIT) {
            // repeat X times until limit
            setTimeout(() => send(response), DELAY);
        }
    };

    const server = http.createServer((request, response) => {
        // notice: set headers for server-sent-events!
        response.setHeader("Content-Type", "text/event-stream");
        // below line is required for IE
        response.setHeader("Access-Control-Allow-Origin", "*");

        send(response);
    });

    // start server
    server.listen(port);
    console.log(`server started: http://locahost:${port}`);
}
