import http from "http";

export function initClient(port) {
    console.log("client: making new request");

    // create request object
    const request = http.get({ port }, (response) => {
        // a chunk of data has been received
        response.on("data", (data) => {
            console.info("client: response received " + data);
        });

        response.on("end", () => {
            console.log("client: server response ended");
        });
    });

    // print error when request fails
    request.on("error", (error) => {
        console.info("client: error occured - " + error.message);
    });
}
