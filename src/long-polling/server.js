import http from "http";

const LIMIT = 10; // times
const DELAY = 1000; // miliseconds

export function initServer(port) {
    let tick = 0;
    let connections = [];

    const server = http.createServer((request, response) => {
        // add incoming connection to the pool
        connections.push(response);

        // set headers for polling
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.setHeader("Transfer-Encoding", "chunked");
    });

    server.listen(port, () => {
        console.info("server: listening on port " + port);
    });

    setTimeout(function run() {
        // check if limit has been reached
        if (tick++ > LIMIT) {
            // end connections
            connections.map((response) => {
                response.write("END\n");
                response.end();
            });
            // reset
            connections = [];
            tick = 0;
        }

        // send reponse to each client
        connections.map((response, i) => {
            response.write(`hello ${i}! Tick: ${tick}\n`);
        });

        // repeat
        setTimeout(run, DELAY);
    }, DELAY);
}
