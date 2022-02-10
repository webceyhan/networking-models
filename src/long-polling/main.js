import { initServer } from "./server.js";
import { initClient } from "./client.js";

const port = process.env.PORT || 5000;

initServer(port);

// delay client init to make sure server is ready
setTimeout(() => initClient(port), 1000);
