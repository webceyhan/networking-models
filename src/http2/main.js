import { initServer } from './server.js';
import { initClient } from './client.js';

const port = process.env.PORT || 4430;

initServer(port);
initClient(port);
