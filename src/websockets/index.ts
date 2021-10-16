import { Server } from "socket.io";

export class WebSockets {

  private server: any;

  constructor(props) {

    /**
     * Add the props object to this variable, example: props.name > this.name
     */
    this.server = props.server;

  }


  /**
   * Start the web sockets server
   */
  start() {

    /**
     * Make the server connection
     */
    const io = new Server(this.server, {
      cors: {
        origin: process.env.HTTP_ORIGIN_DEV,
      }
    });

    /**
     * When user connects
     */
    io.on('connection', (socket) => {
      console.log('a user connected', socket.id);
      // io.to(socket.id).emit("test", 'testandooo'); <--- send to a specific user
    });

  }


}