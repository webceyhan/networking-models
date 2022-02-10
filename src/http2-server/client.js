import http2 from "http2";

export function initClient(port) {
    console.log("client: making new request...");

    // Creating and initializing client
    // by using tls.connect() method
    const client = http2.connect({ port });

    // create request object
    const request = client.request({ ":method": "GET", ":path": "/" });

    request.on("response", (responsesocket) => {
        console.log("client: response status : " + responsesocket[":status"]);
    });

    request.on("data", (data) => {
        data = data.toString().replace(/(\n)/gm, "");
        console.log("client: data received: %s ", data);
    });

    request.on("end", () => {
        client.close(() => console.log("client: destroyed"));
    });

    // print error when request fails
    request.on("error", (error) => {
        console.log("client: error occured - " + error.message);
    });
}
