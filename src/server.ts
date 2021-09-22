import { Server } from "socket.io";
import { app } from "./api";
import { router } from "./api/routes";
import http from 'http';

const port = process.env.API_PORT;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(port, () => console.log(`Listening REST API on port: ${port}`));
app.use(router);