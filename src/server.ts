import http from 'http';

import { app } from "./api";
import { WebSockets } from "./websockets";

const port = process.env.API_PORT;

/**
 * Create the http server
 */
const httpServer = http.createServer(app);

/**
 * Create and start the websockets
 */
const websockets = new WebSockets({ server: httpServer });

/**
 * Start websockets server connection
 */
websockets.start();

/**
 * Start the server
 */
httpServer.listen(port, () => console.log(`🔥🔥🔥 Server listening on port: ${port}`));
