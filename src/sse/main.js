import { initServer } from "./server.js";
import { initClient } from "./client.js";

const port = process.env.PORT || 5000;


// Demo of SSE (Server-Sent Events)
initServer(port);
initClient(port);
