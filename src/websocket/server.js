import { WebSocketServer } from "ws";

const messageReplies = {
    sad: "i am sorry client!",
    happy: "i am glad for you!",
    excited: "great, let's celebrate together!",
};

const defaultReply = "i don't know what to say";

export function initServer(port) {
    // initiate new websocket server
    const wss = new WebSocketServer({ port });

    wss.on("connection", (ws) => {
        // when message received from client
        ws.on("message", (message) => {
            // unwrap encoded essage
            const { type, data } = JSON.parse(message);
            console.log("client says: " + data);

            // reply it back depending on the message
            const reply = messageReplies[type] ?? defaultReply;
            ws.send(JSON.stringify({ type: "reply", data: reply }));
        });

        // when client connection fails
        ws.on("error", (error) => {
            console.log("socket error: " + error.message);
        });

        // when client connection closed
        ws.on("close", () => console.log("socket disconnected"));
    });

    console.log("server istening on port " + port);
}
